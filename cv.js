/* ============================================================
   cv.js — renders the searchable CV and runs the search.
   Depends on cvData.js (SECTIONS, ITEMS).

   - Macro sections are collapsible; all start closed except the
     first interest-style section flagged openByDefault below.
   - Each row shows title (+ optional grey summary) when collapsed,
     and the full description when expanded.
   - One search box matches typed text against title, summary,
     section, meta, keywords AND description. Matching sections
     auto-open; the top few matches auto-expand and highlight.
   ============================================================ */
(function () {
  "use strict";

  var MAX_AUTO_SUGGEST = 5;
  var MAX_AUTO_EXPAND  = 1000;
  var OPEN_BY_DEFAULT  = {};  // sections open on load / when cleared

  var query = "";

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function sectionLabel(id) {
    for (var i = 0; i < SECTIONS.length; i++) if (SECTIONS[i].id === id) return SECTIONS[i].label;
    return id;
  }
  function stripHTML(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return (d.textContent || "").toLowerCase();
  }

  // autocomplete tokens
  var TOKENS = (function () {
    var seen = {}, out = [];
    function add(t) { if (!t) return; var k = t.toLowerCase(); if (!seen[k]) { seen[k] = true; out.push(t); } }
    SECTIONS.forEach(function (s) { add(s.label); });
    ITEMS.forEach(function (it) { add(it.title); (it.keywords || []).forEach(add); });
    return out;
  })();

  var root = document.getElementById("cvRoot");
  var itemNodes = [];
  var sectionNodes = [];

  // ---- build a row ----
  function buildItem(data) {
    var wrap = el("div", "cvItem");
    wrap.dataset.section = data.section;

    var header = el("button", "cvItemHeader");
    header.type = "button";
    header.setAttribute("aria-expanded", "false");

    var main = el("div", "cvItemMain");
    main.appendChild(el("span", "cvItemTitle", data.title));
    if (data.summary) main.appendChild(el("span", "cvItemSummary", data.summary));
    header.appendChild(main);
    if (data.meta) header.appendChild(el("span", "cvItemMeta", data.meta));

    var body = el("div", "cvItemBody");
    var bodyInner = el("div", "cvItemBodyInner");
    var desc = el("div", "cvDescription", data.description || "");
    bodyInner.appendChild(desc);

    if (data.keywords && data.keywords.length) {
      var chips = el("div", "cvChips");
      chips.appendChild(el("span", "cvChipsLabel", "Keywords"));
      data.keywords.forEach(function (kw) {
        var chip = el("button", "cvChip", kw);
        chip.type = "button";
        chip.addEventListener("click", function (e) { e.stopPropagation(); runSearchFor(kw); });
        chips.appendChild(chip);
      });
      bodyInner.appendChild(chips);
    }
    body.appendChild(bodyInner);

    var rec = {
      data: data, wrap: wrap, header: header, desc: desc,
      originalDesc: data.description || "",
      summaryEl: main.querySelector(".cvItemSummary")
    };
    header.addEventListener("click", function () { toggleItem(rec); });

    wrap.appendChild(header);
    wrap.appendChild(body);
    return rec;
  }

  function toggleItem(rec, force) {
    var open = (typeof force === "boolean") ? force : !rec.wrap.classList.contains("open");
    rec.wrap.classList.toggle("open", open);
    rec.header.setAttribute("aria-expanded", String(open));
  }
  function setSectionOpen(sec, open) {
    sec.node.classList.toggle("open", open);
    sec.header.setAttribute("aria-expanded", String(open));
  }

  // ---- render ----
  function render() {
    root.innerHTML = "";
    itemNodes = [];
    sectionNodes = [];

    SECTIONS.forEach(function (sec) {
      var secItems = ITEMS.filter(function (it) { return it.section === sec.id; });
      if (!secItems.length) return;

      var node = el("section", "cvSection");
      node.dataset.section = sec.id;

      var header = el("button", "sectionHeader cvSectionHeader", sec.label);
      header.type = "button";
      node.appendChild(header);
      node.appendChild(el("hr"));

      var secBody = el("div", "cvSectionBody");
      var itemsWrap = el("div", "cvItems");
      secItems.forEach(function (data) {
        var rec = buildItem(data);
        itemNodes.push(rec);
        itemsWrap.appendChild(rec.wrap);
      });
      secBody.appendChild(itemsWrap);
      node.appendChild(secBody);

      root.appendChild(node);

      var secRec = { id: sec.id, node: node, header: header, itemsWrap: itemsWrap };
      header.addEventListener("click", function () {
        setSectionOpen(secRec, !node.classList.contains("open"));
      });
      sectionNodes.push(secRec);
    });
  }

  function setDefaultSectionState() {
    sectionNodes.forEach(function (s) { setSectionOpen(s, !!OPEN_BY_DEFAULT[s.id]); });
  }

  // ---- highlighting ----
  function clearHighlight(rec) {
    if (rec.desc.dataset.hl === "1") { rec.desc.innerHTML = rec.originalDesc; rec.desc.dataset.hl = "0"; }
    var t = rec.header.querySelector(".cvItemTitle");
    if (t && t.dataset.hl === "1") { t.innerHTML = rec.data.title; t.dataset.hl = "0"; }
    if (rec.summaryEl && rec.summaryEl.dataset.hl === "1") {
      rec.summaryEl.innerHTML = rec.data.summary; rec.summaryEl.dataset.hl = "0";
    }
  }
  function highlightIn(rootEl, q) {
    if (!q) return;
    var ql = q.toLowerCase();
    var walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        while (p && p !== rootEl) {
          var name = (p.nodeName || "").toLowerCase();
          if (name === "math" || name === "mark") return NodeFilter.FILTER_REJECT;
          p = p.parentNode;
        }
        return n.nodeValue && n.nodeValue.toLowerCase().indexOf(ql) !== -1
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var targets = [], n;
    while ((n = walker.nextNode())) targets.push(n);
    targets.forEach(function (node) {
      var text = node.nodeValue, low = text.toLowerCase(), idx, from = 0;
      var frag = document.createDocumentFragment();
      while ((idx = low.indexOf(ql, from)) !== -1) {
        if (idx > from) frag.appendChild(document.createTextNode(text.slice(from, idx)));
        var mark = el("mark");
        mark.textContent = text.slice(idx, idx + ql.length);
        frag.appendChild(mark);
        from = idx + ql.length;
      }
      if (from < text.length) frag.appendChild(document.createTextNode(text.slice(from)));
      node.parentNode.replaceChild(frag, node);
    });
  }
  function applyHighlight(rec, q) {
    rec.desc.dataset.hl = "1"; highlightIn(rec.desc, q);
    var t = rec.header.querySelector(".cvItemTitle");
    if (t) { t.dataset.hl = "1"; highlightIn(t, q); }
    if (rec.summaryEl) { rec.summaryEl.dataset.hl = "1"; highlightIn(rec.summaryEl, q); }
  }

  // ---- matching ----
  function matches(it, q) {
    var hay = [it.title, it.summary || "", it.meta || "", sectionLabel(it.section)]
      .concat(it.keywords || []).join(" ").toLowerCase()
      + " " + stripHTML(it.description || "");
    return hay.indexOf(q) !== -1;
  }

  function applySearch() {
    var q = query.trim().toLowerCase();
    itemNodes.forEach(clearHighlight);

    if (!q) {
      itemNodes.forEach(function (rec) { rec.wrap.classList.remove("isHidden"); toggleItem(rec, false); });
      sectionNodes.forEach(function (s) { s.node.classList.remove("isHidden"); });
      setDefaultSectionState();
      setNoResults(false);
      return;
    }

    var matched = 0, expanded = 0;
    itemNodes.forEach(function (rec) {
      var hit = matches(rec.data, q);
      rec.wrap.classList.toggle("isHidden", !hit);
      if (!hit) { toggleItem(rec, false); return; }
      matched++;
      if (expanded < MAX_AUTO_EXPAND) { toggleItem(rec, true); applyHighlight(rec, q); expanded++; }
      else { toggleItem(rec, false); }
    });

    sectionNodes.forEach(function (s) {
      var anyVisible = s.itemsWrap.querySelectorAll(".cvItem:not(.isHidden)").length > 0;
      s.node.classList.toggle("isHidden", !anyVisible);
      setSectionOpen(s, anyVisible);   // auto-open sections that have matches
    });

    setNoResults(matched === 0);
  }

  function setNoResults(show) {
    var n = document.getElementById("cvNoResults");
    if (n) n.classList.toggle("isHidden", !show);
  }

  // ---- search controls ----
  var input, autoPanel;

  function runSearchFor(text) {
    input.value = text; query = text; hideAuto(); applySearch(); input.blur();
  }
  function showAuto(q) {
    var ql = q.trim().toLowerCase();
    if (!ql) { hideAuto(); return; }
    var hits = TOKENS.filter(function (t) { return t.toLowerCase().indexOf(ql) !== -1; })
      .sort(function (a, b) {
        var ap = a.toLowerCase().indexOf(ql) === 0 ? 0 : 1;
        var bp = b.toLowerCase().indexOf(ql) === 0 ? 0 : 1;
        return ap - bp || a.length - b.length;
      }).slice(0, MAX_AUTO_SUGGEST);
    if (!hits.length) { hideAuto(); return; }
    autoPanel.innerHTML = "";
    hits.forEach(function (t) {
      var row = el("button", "cvAutoItem", t);
      row.type = "button";
      row.addEventListener("mousedown", function (e) { e.preventDefault(); runSearchFor(t); });
      autoPanel.appendChild(row);
    });
    autoPanel.classList.remove("isHidden");
  }
  function hideAuto() { autoPanel.classList.add("isHidden"); }

  function init() {
    render();
    input = document.getElementById("cvSearchInput");
    autoPanel = document.getElementById("cvAuto");

    input.addEventListener("input", function () { query = input.value; showAuto(input.value); applySearch(); });
    input.addEventListener("focus", function () { showAuto(input.value); });
    input.addEventListener("blur", function () { setTimeout(hideAuto, 120); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { hideAuto(); input.value = ""; query = ""; applySearch(); }
    });

    var clearBtn = document.getElementById("cvClear");
    if (clearBtn) clearBtn.addEventListener("click", function () {
      input.value = ""; query = ""; hideAuto(); applySearch(); input.focus();
    });

    applySearch();  // sets default section state + clean resting view
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
