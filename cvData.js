/* ============================================================
   cvData.js  —  all searchable content lives here.

   TO EDIT YOUR CV: just edit the arrays below. No HTML needed
   anywhere else. Each ITEM looks like:

     {
       section: "courses",          // must match a SECTIONS id
       title:   "Real Analysis",    // shown on the dropdown bar
       meta:    "Fall 2025",        // optional small subtitle (right side)
       summary: "one-line blurb",   // optional grey line shown while collapsed
       keywords:["analysis"],       // what keyword-search matches
       description: `...HTML ok...`  // shown when expanded
     }

   - keywords drive Keyword-mode search (plus title + section name).
   - description can contain any HTML (links, lists, <math>, <img>).
   ============================================================ */

/* Section render order (top to bottom). Interests is now a normal
   expandable section that sits first. */
const SECTIONS = [
  { id: "projects",   label: "Research & Projects" },
  { id: "courses",    label: "Courses Taken" },
  { id: "teaching",   label: "Teaching Experience" },
  { id: "employment", label: "Employment" },
  { id: "leadership", label: "Leadership Positions" },
  { id: "awards",     label: "Awards" },
  { id: "languages",  label: "Languages & Software" },
  { id: "references", label: "References" },
];

const PLACEHOLDER = `<p><em>If you see this, I was lazy and didn't fill this in.</em></p>`;

const ITEMS = [
  /* ---------------- Courses Taken ---------------- */

  { section:"courses", title:"Lie Theory", meta:"2026 – 2027", keywords:["algebra","abstract algebra", "group theory", "mathematical physics", "independent study", "Minnesota State University"],
    description:`<p><strong>Independent study</strong> — Minnesota State University, Mankato.</p>
      <p>Primary text: Marsden, Jerrold E., and Ratiu, Tudor S. <em>Introduction to Mechanics and Symmetry: A Basic Exposition of Classical Mechanical Systems</em>..</p>` },
  { section:"courses", title:"Mechanics II", meta:"2026 – 2027", keywords:["physics", "classical mechanics", "Minnesota State University"],
    description:`<p><strong>PHYS 650 · Classical Mechanics</strong> — Minnesota State University, Mankato.</p>
      <p>Graduate classical mechanics: variational calculus, Lagrangian mechanics, the motion of particles and rigid bodies, the dynamics of oscillating systems, and Hamilton–Jacobi theory.</p>` },
  { section:"courses", title:"Complex Analysis", meta:"2026 – 2027", keywords:["analysis","complex analysis", "Minnesota State University"],
    description:`<p><strong>MATH 625 · Complex Variables</strong> — Minnesota State University, Mankato.</p>
      <p>The theory of functions of one complex variable: complex numbers, contour integration, analytic functions, residues, and power series.</p>` },
  { section:"courses", title:"Symplectic Geometry", meta:"2025 – 2026", keywords:["geometry", "algebra", "analysis", "mathematical physics", "independent study"],
    description:`<p><strong>Independent study</strong></p>
      <p>Primary text: Arnold, <em>Mathematical Methods of Classical Mechanics</em>.</p>` },
  { section:"courses", title:"Introduction to Homology", meta:"2025 – 2026", keywords:["topology","algebraic topology","algebra", "independent study", "Minnesota State University"],
    description:`<p><strong>Summer seminar</strong> — Minnesota State University, Mankato.</p>
      <p>A summer seminar by professor James Thorne</p>` },
  { section:"courses", title:"Measure Theory", meta:"2025 – 2026", keywords:["analysis","real analysis", "statistics", "Minnesota State University"],
    description:`<p><strong>MATH 611 · Real Analysis</strong> — Minnesota State University, Mankato.</p>
      <p>Graduate real analysis covering measure theory, integration, metric spaces, and Banach spaces. (MNSU lists this under the title "Real Analysis"; it is the 600-level, measure-theoretic course — distinct from MATH 517.)</p>` },
  { section:"courses", title:"Linear Algebra II", meta:"2025 – 2026", keywords:["algebra","linear algebra", "Minnesota State University"],
    description:`<p><strong>MATH 547 · Linear Algebra II</strong> — Minnesota State University, Mankato.</p>
      <p>An in-depth study of linear operators and their related spaces: dimension, rank, matrix representations of linear operators, special matrices, determinants, eigenvectors, and eigenvalues.</p>` },
  { section:"courses", title:"Computations in Linear Algebra", meta:"2025 – 2026", keywords:["algebra","linear algebra","numerical methods","scientific computing", "Minnesota State University"],
    description:`<p><strong>MATH 674 · Computations in Linear Algebra</strong> — Minnesota State University, Mankato.</p>
      <p>An in-depth study of solving algebraic eigenvalue problems and least-squares problems, direct and iterative methods for solving linear systems, and their applications.</p>` },
  { section:"courses", title:"Real Analysis", meta:"2025 – 2026", keywords:["analysis","real analysis","Minnesota State University"],
    description:`<p><strong>MATH 517 · Real Analysis I</strong> — Minnesota State University, Mankato.</p>
      <p>The topology of Euclidean spaces, norms, classical inequalities, local and global properties of continuous functions, preservation of compactness and connectedness, and sequences in Euclidean space and of functions.</p>` },
  { section:"courses", title:"Graphs and Algorithms", meta:"2025 – 2026", keywords:["graph theory", "algorithms", "Minnesota State University"],
    description:`<p><strong>MATH 605 · Graphs and Algorithms</strong> — Minnesota State University, Mankato.</p>
      <p>Concepts of graph theory applied to problems that admit algorithmic solutions.</p>` },
  { section:"courses", title:"Numerical Analysis", meta:"2025 – 2026", keywords:["analysis","numerical methods","scientific computing","Minnesota State University"],
    description:`<p><strong>MATH 570 · Numerical Analysis I</strong> — Minnesota State University, Mankato.</p>
      <p>Techniques and analysis for solving mathematical problems with technology: errors in computation, solutions of linear and nonlinear equations, numerical differentiation and integration, and interpolation.</p>` },
  { section:"courses", title:"Theory of Statistics", meta:"2025 – 2026", keywords:["statistics","probability","Minnesota State University"],
    description:`<p><strong>MATH 555 / STAT 555 · Theory of Statistics I</strong> — Minnesota State University, Mankato.</p>
      <p>A mathematical approach to statistics: probability, continuous probability distributions, multivariate distributions, functions of random variables, the central limit theorem, and statistical inference.</p>` },
  /* ===== Gustavus Adolphus College ===== */
  { section:"courses", title:"Representation Theory", meta:"2023 – 2024", keywords:["algebra","lie theory","representation theory","independent study","Gustavus Adolphus College"],
    description:`<p><strong>Independent study</strong> (MCS-391) — Gustavus Adolphus College.</p>
      <p>Primary text: Benjamin Steinberg, <em>Representation Theory of Finite Groups: An Introductory Approach</em>.</p>` },
  { section:"courses", title:"Quantum Mechanics", meta:"2023 – 2024", keywords:["physics","quantum","mathematical physics","Gustavus Adolphus College"],
    description:`<p><strong>PHY-390 · Introduction to Quantum Mechanics</strong> — Gustavus Adolphus College.</p>
      <p>The general structure and formalism of quantum mechanics: the Schrödinger equation and its one-dimensional solutions, Dirac notation and matrix mechanics, the harmonic oscillator, the hydrogen atom, angular momentum and spin, and approximation methods.</p>` },
  { section:"courses", title:"Discrete Dynamics", meta:"2023 – 2024", keywords:["dynamics","discrete","Gustavus Adolphus College"],
    description:`<p><strong>MCS-357 · Discrete Dynamical Systems</strong> — Gustavus Adolphus College.</p>
      <p>Real and complex discrete dynamical systems: stability of fixed and periodic points, bifurcation theory, topological and symbolic dynamics, chaos, and fractals, with applications drawn from biology, physics, and other fields.</p>` },
  { section:"courses", title:"Statistical Mechanics", meta:"2023 – 2024", keywords:["physics","statistical mechanics","Gustavus Adolphus College"],
    description:`<p><strong>PHY-380 · Thermal and Statistical Physics</strong> — Gustavus Adolphus College.</p>
      <p>Equilibrium thermodynamics and both classical and quantum statistical mechanics developed from the microscopic dynamics of many-particle systems, with applications such as blackbody radiation and the heat capacities of solids.</p>` },
  { section:"courses", title:"Abstract Algebra I", meta:"2022 – 2023", keywords:["algebra","abstract algebra","group theory","Gustavus Adolphus College"],
    description:`<p><strong>MCS-313 · Modern Algebra I</strong> — Gustavus Adolphus College.</p>
      <p>An intensive study of the basics of abstract algebra — groups, rings, and fields: permutation and cyclic groups, Lagrange's theorem, homomorphisms and isomorphisms, normal subgroups and factor groups, integral domains, ideals and factor rings, polynomial rings, factorization of polynomials, and extension fields.</p>` },
  { section:"courses", title:"Abstract Algebra II", meta:"2022 – 2023", keywords:["algebra","abstract algebra","group theory","Gustavus Adolphus College"],
    description:`<p><strong>MCS-314 · Modern Algebra II</strong> — Gustavus Adolphus College.</p>
      <p>A continuation of Modern Algebra I: unique factorization domains, principal ideal domains, Euclidean domains, finite fields, constructibility, the fundamentals of Galois theory, and the Sylow theorems.</p>` },
  { section:"courses", title:"Advanced Math Methods", meta:"2022 – 2023", keywords:["mathematical physics","Gustavus Adolphus College"],
    description:`<p><strong>PHY-370 · Advanced Mathematical Methods of Physics</strong> — Gustavus Adolphus College.</p>
      <p>Advanced mathematics important to physics, using both analytical and numerical techniques: infinite series, linear partial differential equations, Sturm–Liouville theory, special functions (Legendre, Laguerre, Hermite, and others), and Fourier series and transforms.</p>` },
  { section:"courses", title:"Electricity and Magnetism", meta:"2022 – 2023", keywords:["physics","electromagnetism","mathematical physics","Gustavus Adolphus College"],
    description:`<p><strong>PHY-350 · Electromagnetic Theory</strong> — Gustavus Adolphus College.</p>
      <p>Classical electromagnetism via Maxwell's equations and their applications to physical systems: electrostatics, boundary-value problems, electromagnetics, and electromagnetic waves, all in the language of vector calculus.</p>` },
  { section:"courses", title:"Mechanics", meta:"2022 – 2023", keywords:["physics","classical mechanics","mathematical physics","Gustavus Adolphus College"],
    description:`<p><strong>PHY-300 · Mechanics</strong> — Gustavus Adolphus College.</p>
      <p>Extends the classical mechanics of the introductory sequence to the formal methods appropriate for quantum theory: Lagrangian and Hamiltonian dynamics, vibrating systems, and the mechanics of rigid bodies.</p>` },
  { section:"courses", title:"Competitive Programming", meta:"2022 – 2023", keywords:["programming","algorithms","computer science","Gustavus Adolphus College"],
    description:`<p><strong>MCS-394 · Topics in Computer Science</strong> — Gustavus Adolphus College.</p>
      <p>A rotating advanced topics course in computer science; this offering focused on competitive programming — algorithm design and precise implementation under contest conditions.</p>` },
  { section:"courses", title:"Scientific Computing", meta:"2022 – 2023", keywords:["computing","numerical methods","programming","Gustavus Adolphus College"],
    description:`<p><strong>MCS-355 · Scientific Computing and Numerical Analysis</strong> — Gustavus Adolphus College.</p>
      <p>The design, analysis, and implementation of numerical algorithms used to model real-world physical processes: root-finding, approximation, interpolation, differential equations, numerical integration, and matrix methods, studied in the scientific contexts where they arise.</p>` },
  { section:"courses", title:"Differential Equations", meta:"2022 – 2023", keywords:["analysis","differential equations","Gustavus Adolphus College"],
    description:`<p><strong>MCS-253 · Differential Equations</strong> — Gustavus Adolphus College.</p>
      <p>Ordinary differential equations and their applications: first- and second-order and higher-order ODEs, existence and uniqueness theorems, systems of linear equations and the analysis of nonlinear critical points, series and numerical methods, and an introduction to partial differential equations.</p>` },
  { section:"courses", title:"Quantum Computing", meta:"2021 – 2022", keywords:["quantum","computing","ibm","quantum computing"], 
    description: 'Description given by IBM Quantum:<ul><li>Learn directly from IBM Quantum researchers and engineers</li><li>Complete guided coding labs using Qiskit</li><li>Apply concepts to real-world quantum workflows</li><li>Join live Q&amp;A sessions with instructors</li><li>Connect with peers through a dedicated Discord community</li></ul>' },
  { section:"courses", title:"Continuous Dynamics", meta:"2021 – 2022", keywords:["dynamics","differential equations","Gustavus Adolphus College"],
    description:`<p><strong>MCS-353 · Continuous Dynamical Systems</strong> — Gustavus Adolphus College.</p>
      <p>Continuous dynamical systems and their applications: existence and uniqueness theorems, linear systems of differential equations, stability of equilibria for nonlinear systems, periodic solutions, and bifurcation theory.</p>` },
  { section:"courses", title:"Electronic Instruments", meta:"2021 – 2022", keywords:["physics","electronics","Gustavus Adolphus College"],
    description:`<p><strong>PHY-270 · Electronics and Instrumentation</strong> — Gustavus Adolphus College.</p>
      <p>A condensed review of AC and DC circuit theory followed by the principles and applications of analog and digital electronic devices and circuits: equivalent circuits, semiconductor devices, negative feedback, operational amplifiers, comparators, and digital and sequential logic.</p>` },
  { section:"courses", title:"Quantum Universe", meta:"2021 – 2022", keywords:["physics","quantum","Gustavus Adolphus College"],
    description:`<p><strong>PHY-225 · The Quantum Universe</strong> — Gustavus Adolphus College.</p>
      <p>An introduction to quantum mechanics, atomic and nuclear structure, condensed matter physics, and particle physics, together with a more in-depth treatment of special relativity, emphasizing how these theories differ from their classical counterparts.</p>` },
  { section:"courses", title:"Electromagnetic Universe", meta:"2021 – 2022", keywords:["physics","electromagnetism","Gustavus Adolphus College"],
    description:`<p><strong>PHY-215 · The Electromagnetic Universe</strong> — Gustavus Adolphus College.</p>
      <p>The basic principles of classical electromagnetism, electrical circuits, and wave optics, with calculus used throughout.</p>` },
  { section:"courses", title:"Math Methods for Physics", meta:"2021 – 2022", keywords:["mathematical physics","Gustavus Adolphus College"],
    description:`<p><strong>PHY-250 · Applied Mathematics for Scientists and Engineering</strong> — Gustavus Adolphus College.</p>
      <p>An introduction to the mathematics used by scientists and engineers: multivariable calculus, Fourier series, series solutions to differential equations, special functions, partial differential equations, linear equations, vectors, matrices and determinants, and coordinate transformations.</p>` },
  { section:"courses", title:"Linear Algebra", meta:"2021 – 2022", keywords:["algebra","linear algebra","Gustavus Adolphus College"],
    description:`<p><strong>MCS-221 · Linear Algebra</strong> — Gustavus Adolphus College.</p>
      <p>An introduction to the theory and applications of linear algebra: vector spaces, matrices, linear transformations, determinants, eigenvalues and eigenvectors, and inner product spaces.</p>` },
  { section:"courses", title:"Computer Science II", meta:"2021 – 2022", keywords:["computer science","programming","Gustavus Adolphus College"],
    description:`<p><strong>MCS-178 · Introduction to Computer Science II</strong> — Gustavus Adolphus College.</p>
      <p>A continuation of Introduction to Computer Science I, emphasizing modern software practices such as object-oriented programming for designing and implementing larger programs, along with analysis of the complexity of the resulting processes.</p>` },
  { section:"courses", title:"Discrete Mathematics", meta:"2020 – 2021", keywords:["discrete","combinatorics","Gustavus Adolphus College"],
    description:`<p><strong>MCS-150 · Discrete Mathematics</strong> — Gustavus Adolphus College.</p>
      <p>An introduction to finite (discrete) mathematical processes: logic and sets, properties of the integers (divisibility, congruence), mathematical induction, the binomial theorem, discrete probability, and combinatorics.</p>` },
  { section:"courses", title:"Calculus 3", meta:"2020 – 2021", keywords:["calculus","analysis"],
    description:`<p><strong>MATH 2510 · Calculus 3: Multivariable Calculus</strong> — Normandale Community College (transferred to Gustavus).</p>
      <p>Multivariable functions, three-dimensional analytic geometry, vectors, partial derivatives, optimization, multiple integrals, curves and surfaces, vector fields, divergence and curl, line and surface integrals, and Green's, Stokes', and the Divergence theorems.</p>` },
  { section:"courses", title:"Calculus 2", meta:"2020 – 2021", keywords:["calculus","analysis","Gustavus Adolphus College"],
    description:`<p><strong>MCS-122 · Calculus II</strong> — Gustavus Adolphus College.</p>
      <p>A continuation of Calculus I: techniques and applications of integration, an introduction to and uses of infinite series (including power and Taylor series), and the basics of ordinary differential equations.</p>` },
  { section:"courses", title:"Mechanical Universe", meta:"2020 – 2021", keywords:["physics","mechanics","Gustavus Adolphus College"],
    description:`<p><strong>PHY-205 · The Mechanical Universe</strong> — Gustavus Adolphus College.</p>
      <p>The basic principles of classical mechanics, waves, sound, and thermal physics, using differential and integral calculus to analyze and solve physical problems.</p>` },
  { section:"courses", title:"Cosmic Universe", meta:"2020 – 2021", keywords:["physics","astronomy","cosmology","Gustavus Adolphus College"],
    description:`<p><strong>PHY-195 · The Cosmic Universe</strong> — Gustavus Adolphus College.</p>
      <p>The first course in the physics major sequence, focused on astrophysics and the evidence underlying cosmological theories of the solar system, galaxies, and the universe — drawing on classical mechanics, optics, thermodynamics, spectroscopy, quantum physics, and relativity.</p>` },
  { section:"courses", title:"Computer Science I", meta:"2020 – 2021", keywords:["computer science","programming","Gustavus Adolphus College"],
    description:`<p><strong>MCS-177 · Introduction to Computer Science I</strong> — Gustavus Adolphus College.</p>
      <p>An introduction to the perspectives and methods of computer science: developing algorithms and translating them into a programming language using common structures — variables, functions, loops, control flow, basic data structures, and classes — with a brief introduction to object-oriented programming.</p>` },
  /* ---------------- Projects & Research ---------------- */
  {
    section:"projects",
    title:"Verifying Coppersmith's Attack in Isabelle",
    meta:"Current Research",
    summary:"Machine-verified formalization of Coppersmith's RSA attack in Isabelle/HOL.",
    keywords:["software verification","cryptography","rsa","isabelle/hol","lattice","coppersmith","formal methods"],
    description:`
      <p>I am finalizing a machine-verified formalization of Coppersmith's lattice-based attack on RSA in Isabelle/HOL.</p>
      <p>Our improved proof demonstrates that the attack recovers roots
        <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>x</mi><mn>0</mn></msub></math>
        for monic polynomials
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>F</mi><mo>(</mo><mi>x</mi><mo>)</mo></math>
        of degree
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>d</mi></math>
        modulo
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>M</mi></math>
        satisfying</p>
      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mrow><mi>|</mi><msub><mi>x</mi><mn>0</mn></msub><mi>|</mi><mo>&lt;</mo>
        <mfrac><mn>1</mn><mn>2</mn></mfrac>
        <msup><mi>M</mi><mrow><mn>1</mn><mi>/</mi><mi>d</mi></mrow></msup></mrow>
      </math>
      <p>confirming the method operates at the known optimal bound. This improves previous work that only verified the attack for polynomials with roots
        <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>x</mi><mn>0</mn></msub></math>
        satisfying</p>
      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mrow><mi>|</mi><msub><mi>x</mi><mn>0</mn></msub><mi>|</mi><mo>&lt;</mo>
        <mfrac><mn>1</mn><mn>2</mn></mfrac>
        <msup><mi>M</mi><mrow><mn>1</mn><mi>/</mi><mi>d</mi><mo>-</mo><mi>&#949;</mi></mrow></msup></mrow>
      </math>
      <p>for
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mn>0</mn><mo>&lt;</mo><mi>&#949;</mi><mo>&lt;</mo><mi>min</mi><mo>{</mo><mn>0.18</mn><mo>,</mo><mn>1</mn><mi>/</mi><mi>d</mi><mo>}</mo></math>.
        The proof file is complete and is being prepared for journal submission.</p>`
  },
  {
    section:"projects",
    title:"A Hybrid Algorithm for Solving String Replacement Puzzles",
    meta:"Current Research",
    summary:"A heuristic and neural network for the word problem on semi-Thue systems.",
    keywords:["software verification","semi-thue systems","word problem","neural network","heuristic","search","algorithms"],
    description:`
      <p>This project designs a heuristic method for solving difficult cases of the word problem for semi-Thue systems.
      My research implements a rapidly converging neural network to detect structural regularities within these
      string-rewriting environments. The core algorithm alternates between:</p>
      <ol>
        <li>A double-ended BFS</li>
        <li>Two guided random walks</li>
      </ol>
      <p>Each random walk is dynamically weighted to favor transitions toward strings resembling the neighborhood
      characteristics observed at the opposing end of the search. The key question I am addressing is whether the
      random choices in these walks can be improved as the search explores more strings.</p>`
  },
  {
    section:"projects",
    title:"Semi-Thue Systems and the Word Problem",
    meta:"Presented 3/15/2024 · Gustavus MCS Department", summary:"A heuristic for general word problems that finds deep solutions.",
    keywords:["semi-thue systems","word problem","heuristic","algorithms","presentation","Gustavus Adolphus College"],
    description:`
      <p>Developed a heuristic to solve general word problems that is optimal for simple systems and is
      significantly better at finding deep solutions than any brute force method.</p>`
  },
  {
    section:"projects",
    title:"Ray Tracing and Collision Detection in Python",
    meta:"Presented 10/13/2023 · Gustavus MCS & Physics", summary:"Continuous collision resolution via ray tracing and spatial hashing.",
    keywords:["ray tracing","collision detection","python","spatial hashing","algorithms","graphics","presentation","Gustavus Adolphus College"],
    description:`
      <p>Designed and implemented an algorithm that uses ray tracing and timestamps to continuously resolve
      geometry collisions with practically arbitrary precision. The algorithm utilizes spatial hashing to allow
      distant dynamic objects to resolve quickly.</p>`
  },
  {
    section:"projects",
    title:"FourSpace",
    meta:"Tutorial since 2022 · full game in development", summary:"A four-dimensional puzzle game inspired by Sokoban.",
    keywords:["game development","4d","puzzle","game engine","graphics"],
    description:`
      <p>A four-dimensional puzzle video game inspired by Sokoban! The original tutorial is available by request.
      A full version is currently in development. <span style="text-decoration: underline;">Last update: July 2024.</span></p>
      <figure style="max-width: 320px; margin: 0.5rem 0;">
        <img src="4DGamePicture.png" alt="FourSpace gameplay" style="width: 100%; display: block;">
        <figcaption style="font-size: small;">Gameplay from the 2022 tutorial of FourSpace</figcaption>
      </figure>`
  },
  /* ---------------- Classes Taught ---------------- */
  { section:"teaching", title:"Trigonometry", meta:"Spring 2026 · MSU", keywords:["teaching","algebra","instructor","Minnesota State University"], description:"Basic trigonometry as preparation for college-level mathematics and science coursework. Topics include algebra concepts (real numbers, functions, graphs of functions, exponential and logarithmic functions), trigonometric functions, analytic trigonometry, applications of trigonometry, and analytic geometry." },
  { section:"teaching", title:"College Algebra", meta:"Fall 2025 · MSU", keywords:["teaching","algebra","instructor","Minnesota State University"], description:"Concepts of algebra (real numbers, exponents, polynomials, rational expressions), equations and inequalities, functions and graphs, polynomial and rational functions, exponential and logarithmic functions, systems of equations and inequalities, matrices and determinants, conic sections, sequences and series, probability, and the binomial theorem." },
  { section:"teaching", title:"Elementary Mathematics Interventions", meta:"2024 – 2025 · Math Corps", keywords:["teaching","mathematics","intervention","math corps"], description:"Delivered structured, evidence-based math interventions through Math Corps, an AmeriCorps tutoring program, working one-on-two and in small groups with students in grades 4–8 to build foundational skills in number, operations, and pre-algebra." },
  { section:"teaching", title:"Mechanical Universe Labs", meta:"2021 – 2024 · Gustavus", keywords:["teaching","physics","tutoring","ta","Gustavus Adolphus College"], description:"Weekly introductory physics experiments taught in conjunction with the Mechanical Universe lecture course, covering classical mechanics, waves, sound, and thermal physics." },
  { section:"teaching", title:"General Physics 2", meta:"2021 – 2024 · Gustavus", keywords:["teaching","physics","tutoring","ta","Gustavus Adolphus College"], description:"Acted as a teaching assistant for General Physics 2." },
  { section:"teaching", title:"General Physics 2 Labs", meta:"2021 – 2024 · Gustavus", keywords:["teaching","physics","tutoring","ta","Gustavus Adolphus College"], description:"Acted as a teaching assistant for General Physics 2 labs." },
  { section:"teaching", title:"General Physics 1", meta:"2021 – 2024 · Gustavus", keywords:["teaching","physics","tutoring","ta","Gustavus Adolphus College"], description:"Acted as a teaching assistant for General Physics 1." },
  { section:"teaching", title:"General Physics 1 Labs", meta:"2021 – 2024 · Gustavus", keywords:["teaching","physics","tutoring","ta","Gustavus Adolphus College"], description:"Acted as a teaching assistant for General Physics 1 labs." },
  { section:"teaching", title:"Calculus 1 and Calculus 2 Tutoring", meta:"2021 – 2024 · Gustavus", keywords:["teaching","calculus","tutoring","Gustavus Adolphus College"], description:`Calculus 1 covers limits and derivatives, while Calculus 2 covers integrals and infinite series. <figure style="max-width: 320px; margin: 0.5rem 0;">
        <img src="calc_tutoring.jpg" alt="Gustavus Class" style="width: 100%; display: block;">
        <figcaption style="font-size: small;">Gustavus Adolphus College Calculus Tutoring</figcaption>
      </figure>` },

  /* ---------------- Employment ---------------- */
  { section:"employment", title:"Research Assistant", meta:"2026 – Present", keywords:["teaching","graduate assistantship","research","Minnesota State University"], summary:"NSF-funded research in Mathematical Biology.",
    description:"Research assistant for NSF-funded research in Mathematical Biology. Worked with Dr. Ruijun Zhao on mathematical models for population dynamics." },
  { section:"employment", title:"Math Instructor — Graduate Assistant", meta:"2025 – Present", keywords:["teaching","graduate assistantship","instructor","Minnesota State University"], summary:"Instructor at Minnesota State University.",
     description:"Instructor for undergraduate mathematics courses, including College Algebra, Trigonometry, and Pre-Calculus." },
  {
    section:"employment", title:"Math Corps, Spring Creek Elementary", meta:"2024 – 2025", summary:"Research-based math interventions and progress monitoring.",
    keywords:["education","math intervention","tutoring","math corps"],
    description:`<p>Provided students with research-based math interventions and conducted progress monitoring to ensure the students stayed on track.</p>`
  },
  {
    section:"employment", title:"Full Stack Developer, Contracted", meta:"Summer 2024", summary:"Built and maintained client websites end to end.",
    keywords:["web development","full stack","html/css/javascript","cryptography","graphic design"],
    description:`<p>Developed and temporarily maintained websites for clients. Required knowledge of the Ubuntu operating system, cryptography, HTML/CSS/JavaScript, and graphic design.</p>`
  },
  {
    section:"employment", title:"Animator, Contracted", meta:"Summer 2023", summary:"Animated videos for a Minneapolis-based non-profit.",
    keywords:["animation","adobe animate","autodesk sketchbook","non-profit"],
    description:`<p>Animated videos for a Minneapolis-based non-profit organization. Required expertise in Adobe Animate and Autodesk Sketchbook.</p>`
  },
  {
    section:"employment", title:"Graphic Design, Smogon University", meta:"Summer 2022", summary:"Social-media graphics for Smogon University.",
    keywords:["graphic design","autodesk sketchbook","aseprite","html","competitive pokemon","smogon"],
    description:`<p>Created graphics for the Smogon University social media account. Required proficiency in Autodesk Sketchbook, Aseprite, and HTML.</p>`
  },
  {
    section:"employment", title:"Observatory Assistant, Gustavus Adolphus College", meta:"2022", summary:"Stargazing Events.",
    keywords:["physics","Gustavus Adolphus College"],
    description:`<p>Worked for the Gustavus physics department to help maintain the observatory and assist with public stargazing events.</p>`
  },
  {
    section:"employment", title:"Physics TA, Gustavus Adolphus College", meta:"2021 – 2024", summary:"Tutor, TA, grader.",
    keywords:["tutoring","teaching","physics","ta","Gustavus Adolphus College"],
    description:`<p>Worked for the Gustavus physics departments as a tutor, lab TA, grader, and observatory assistant. I helped grade labs and provide one-on-one tutoring for students taking physics courses below the 300 level.</p>`
  },
  {
    section:"employment", title:"Calculus Tutor, Gustavus Adolphus College", meta:"2021 – 2024", summary:"Tutor",
    keywords:["tutoring","teaching","calculus","ta","Gustavus Adolphus College"],
    description:`<p>Worked for the Gustavus MCS departments as a tutor for students taking calculus 1 and calculus 2.</p>`
  },
  { section:"employment", title:"Soccer Coach", meta:"2019 – 2025", keywords:["coaching","soccer"], 
    description:"I coached under-11 soccer at the Northfield Soccer Club in the summers of 2019, 2020, 2024, and 2025." },

  /* ---------------- Leadership Positions ---------------- */
  {
    section:"leadership", title:"President — Math Club Minnesota State University", meta:"2025 – 2026",
    keywords:["leadership","club president","Minnesota State University"], 
    description: "As president of the Math Club at Minnesota State University, I organized events, printed posters, and led meetings. We hosted guest speakers, organized study sessions, and ran social events to build community among math students."
  },
  {
    section:"leadership", title:"President — Gustavus Math, Computer Science & Statistics Club", meta:"2020 – 2024",
    keywords:["leadership","club president","mcs","Gustavus Adolphus College"], description:
    "A student (singular, myself) ran club that hosted a variety of popular events, including guest presentations, pie day, and the annual ultimate frisbee match against the society of physics students. I organized events, printed posters, and led meetings."
  },
  {
    section:"leadership", title:"Official Smogon Artist", meta:"Smogon University",
    keywords:["art","graphic design","smogon","competitive pokemon"],
    description:`<p>Contributing artist for Smogon University.
      <a href="https://www.smogon.com/smeargle/profiles/" target="_blank" rel="noopener noreferrer" class="rightLinkText">View profile &#8599;</a></p>`
  },
  {
    section:"leadership", title:"Monotype Premier League Manager", meta:"2021 – 2025",
    keywords:["leadership","community","competitive pokemon","monotype"], description:
    "It may seem silly to have this role on a CV, but managing a succesful pokemon tournament team can be very intense. As a manager for the Monotype Premier League, I built teams, strategized with players, and led my team to victory in MPL VI and MPL VII. We also placed second in MPL VIII and MPL XI"
  },

  /* ---------------- Awards ---------------- */
  {
    section:"awards", title:"Corey Ervin Prize for Outstanding Contribution to the Mathematics Department", meta:"Gustavus \u00b7 2024",
    keywords:["award","mathematics","gustavus","Gustavus Adolphus College"],
    description:`<p> Awarded by the Gustavus MCS department for outstanding contributions to the department and community. 
    I was recognized for my work running the MCS club for 4 years.
    <br><br><a href="https://gustavus.edu/events/concertFiles/media/Honors_Day/2024/21536487_AcademicProgram_Web-1.pdf" target="_blank" rel="noopener noreferrer" class="rightLinkText">View on the Gustavus Honors Day program \u2197</a></p>`
  },
  {
    section:"awards", title:"Certification of Quantum Excellence from IBM", meta:"2022",
    keywords:["award","quantum","ibm","certification"],
    description:`<p> Awarded by IBM for completing their summer program. This certification recognizes my understanding of quantum computing concepts and proficiency in using IBM's quantum tools. <br><br>
    <a href="https://www.credly.com/badges/539f2d5d-f8ff-4a79-988f-29f80dfbc266" target="_blank" rel="noopener noreferrer" class="rightLinkText">View credential \u2197</a></p>`
  },
  {
    section:"awards", title:"MPL VII Champion", meta:"2022",
    keywords:["award","competitive pokemon","smogon","mpl"],
    description:`<p> I won Monotype Premoier League VII as a manager. This is a competitive Pokémon tournament hosted by Smogon University. 
    It may seem silly to have a competitive Pokémon tournament on a CV, but this is a prestigious tournament in the competitive Pokémon community, 
    and winning it the way I did required deep strategic thinking, team-building skills, and leadership.
    <br><br>
    <a href="https://www.smogon.com/articles/mpl7-coverage" target="_blank" rel="noopener noreferrer" class="rightLinkText">Tournament coverage \u2197</a></p>`
  },

  /* ---------------- Languages & Software ---------------- */
  { section:"languages", title:"Python", summary:"My favorite language", keywords:["python","programming"],
     description: "<p>I am a python expert. I have written multiple large projects in Python, including two video game engines, multiple websites, and countless homework assignments.</p>" },
  { section:"languages", title:"C++", summary:"For competitive programming.", keywords:["c++","programming"], description: "<p>I use C++ for competitive programming. Useful for precise algorithm implementation.</p>" },
  { section:"languages", title:"Isabelle/HOL", summary:"Preferred proof assistant.", keywords:["isabelle/hol","formal methods","software verification"], description:"<p>I use Isabelle/HOL for formal verification, including my work with Katherine Kosaian formalizing Coppersmith's Attack.</p>" },
  { section:"languages", title:"HTML/CSS/JavaScript", summary:"I enjoy making websites.", keywords:["html/css/javascript","web development"], description:"<p>I have built and maintained multiple websites using HTML, CSS, and JavaScript. Some for jobs and school, and some for personal projects.</p>" },
  { section:"languages", title:"LateX", summary:"Everyone should learn LateX", keywords:["LateX"], description:"<p>I use LateX daily for writing research papers, making presentations, and creating assignments for my classes. My hot take is we should teach LateX in highschool.</p>" },
  { section:"languages", title:"Autodesk Sketchbook", summary:"Underrated digital illustration tool.", keywords:["autodesk sketchbook","graphic design","art"], description:"<p>I use Autodesk Sketchbook for digital art and graphic design. I used it when I was an official artist on smogon, and also for general purpose poster making</p>" },
  { section:"languages", title:"Adobe Animate", summary:"2D animation.", keywords:["adobe animate","animation"], description:"<p>I use Adobe Animate for 2D animation. I used it to create animations for a Minneapolis-based non-profit organization.</p>" },
  { section:"languages", title:"Aseprite", summary:"Pixel art and sprite work.", keywords:["aseprite","pixel art","art"], description:"<p>I use Aseprite for pixel art and sprite work. I use it to make pixel art for my games.</p>" },
  { section:"languages", title:"MATLAB", summary:"Overrated", keywords:["matlab","scientific computing"], description:"<p>I have used MATLAB for scientific computing and numerical analysis. I prefer Python for these tasks, but I have plenty of experience with MATLAB.</p>"},

  /* ---------------- References ---------------- */
  {
    section:"references", title:"Dr. Ruijin Zhao", summary:"Professor, Chair of Department of Mathematics and Statistics, Minnesota State University",
    keywords:["reference","mathematics","Minnesota State University"],
    description:`<p><b>Phone:</b> 1-507-389-2719<br>
      <b>Email:</b> ruijun.zhao@mnsu.edu<br>
      <b>Website:</b> <a href="https://faculty.mnsu.edu/ruijunzhao/" target="_blank" rel="noopener noreferrer" class="rightLinkText">link \u2197</a></p>`
  },
  {
    section:"references", title:"Dr. Katherine Kosaian", summary:"Assistant Professor of Computer Science, University of Iowa",
    keywords:["reference","computer science","university of iowa","isabelle"],
    description:`<p><b>Phone:</b> 1-319-467-1919<br>
      <b>Email:</b> katherine-kosaian@uiowa.edu<br>
      <b>Website:</b> <a href="https://sites.google.com/view/katherinekosaian/home" target="_blank" rel="noopener noreferrer" class="rightLinkText">link \u2197</a></p>`
  },
  {
    section:"references", title:"Dr. Jeff Ford", summary:"Visiting Assistant Professor of Math, CS & Statistics, Gustavus Adolphus College",
    keywords:["reference","mathematics","gustavus"],
    description:`<p><b>Phone:</b> 1-507-933-7476<br>
      <b>Email:</b> jford@gustavus.edu</p>`
  },
  {
    section:"references", title:"Dr. Darsa Donelan", summary:"Senior Continuing Assistant Professor of Physics, Gustavus Adolphus College",
    keywords:["reference","physics","gustavus"],
    description:`<p><b>Email:</b> ddonelan@gustavus.edu</p>`
  },
  {
    section:"references", title:"Dr. Imre Tuba", summary:"Mundivagant",
    keywords:["reference","mathematics", "gustavus"],
    description:`<p><b>Phone:</b> 1-256-626-6882<br>
      <b>Email:</b> imretuba@gmail.com<br>
      <b>Website:</b> <a href="http://ituba.scienceontheweb.net/" target="_blank" rel="noopener noreferrer" class="rightLinkText">link \u2197</a></p>`
  },
];