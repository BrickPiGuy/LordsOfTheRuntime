// Algorithm Data
const algorithms = [
    {
        number: 1,
        name: "Binary Search",
        concept: "Divide and Conquer",
        complexity: "O(log n)",
        complexityOrder: 1,
        description: "Binary search is one of the clearest demonstrations of how structure can dramatically improve performance. A linear search requires O(n), while binary search requires O(log n). It teaches how to eliminate large portions of a problem space through carefully chosen decisions.",
        application: "Searching sorted database indexes, finding faulty software releases with 'git bisect', determining minimum acceptable configuration, searching timestamps in system logs, finding capacity thresholds in cloud systems. For 1 billion sorted records, only ~30 comparisons are needed.",
        difficulty: "Beginner",
        category: "Search"
    },
    {
        number: 2,
        name: "Quicksort & Merge Sort",
        concept: "Sorting & Tradeoffs",
        complexity: "O(n log n) avg / O(n²) worst",
        complexityOrder: 2,
        description: "Students should understand that there is rarely one universally best algorithm. Quicksort has average time O(n log n) with worst-case O(n²), operates in-place, and is often fast in memory. Merge Sort guarantees O(n log n), is stable, and naturally supports external/distributed sorting. Algorithm selection depends on memory use, input distribution, and stability requirements.",
        application: "Sorting database query results, processing files larger than available memory, organizing telemetry and log data, merge operations in distributed data pipelines, sorting data across multiple machines.",
        difficulty: "Intermediate",
        category: "Sorting"
    },
    {
        number: 3,
        name: "Hashing",
        concept: "Near-Constant-Time Lookup",
        complexity: "O(1) average",
        complexityOrder: 0,
        description: "Hashing enables near-constant-time lookups through clever data distribution. Hash functions map keys to array indices, enabling O(1) average-case retrieval. Collision handling and load factors determine performance. Essential for understanding how modern systems achieve speed at scale.",
        application: "Caches, databases, password storage, blockchains, hash tables, distributed systems, deduplication, and cryptographic applications.",
        difficulty: "Intermediate",
        category: "Data Structures"
    },
    {
        number: 4,
        name: "BFS & DFS",
        concept: "Graph Traversal",
        complexity: "O(V + E)",
        complexityOrder: 3,
        description: "Breadth-First Search and Depth-First Search are fundamental graph traversal algorithms. BFS explores level-by-level from a source, useful for shortest paths in unweighted graphs. DFS explores deeply before backtracking, useful for topological sorting and connectivity. Both are O(V + E) where V is vertices and E is edges.",
        application: "Web crawling, dependency analysis, cybersecurity threat modeling, social network analysis, connected components, cycle detection, and topological sorting.",
        difficulty: "Intermediate",
        category: "Graphs"
    },
    {
        number: 5,
        name: "A* Search",
        concept: "Heuristic Graph Search",
        complexity: "O(b^d) with heuristic",
        complexityOrder: 3,
        description: "A* combines the benefits of Dijkstra's algorithm with heuristic-guided search. It uses f(n) = g(n) + h(n), where g(n) is the cost from start and h(n) is an estimated cost to goal. When the heuristic is admissible, A* finds optimal paths efficiently by exploring fewer nodes than uninformed searches.",
        application: "GPS and route planning, robotics navigation, game pathfinding and NPC movement, autonomous vehicle motion planning, puzzle solving, and real-time systems requiring optimized paths.",
        difficulty: "Advanced",
        category: "Search & Optimization"
    },
    {
        number: 6,
        name: "Union-Find",
        concept: "Dynamic Connectivity",
        complexity: "O(α(n)) amortized",
        complexityOrder: 0,
        description: "Union-Find (Disjoint Set Union) efficiently answers 'are two nodes connected?' and 'connect these two nodes' queries. With path compression and union by rank, operations approach O(1) amortized time. Essential for problems involving equivalence classes and component detection.",
        application: "Network connectivity, image segmentation, clustering algorithms, social network friend groups, detecting cycles in graphs, minimum spanning tree algorithms (Kruskal's), and percolation problems.",
        difficulty: "Intermediate",
        category: "Data Structures"
    },
    {
        number: 7,
        name: "Dynamic Programming",
        concept: "Reusing Overlapping Solutions",
        complexity: "O(states × transitions)",
        complexityOrder: 4,
        description: "Dynamic Programming solves problems by breaking them into overlapping subproblems and caching results. It combines memoization (top-down) or tabulation (bottom-up) to avoid redundant computation. Key: optimal substructure and overlapping subproblems. Transforms exponential algorithms into polynomial time.",
        application: "Sequence alignment (bioinformatics), compiler optimization, resource allocation and scheduling, knapsack problems, longest common subsequence, and cryptocurrency transaction optimization.",
        difficulty: "Advanced",
        category: "Optimization"
    },
    {
        number: 8,
        name: "PageRank",
        concept: "Iterative Graph Ranking",
        complexity: "O(iterations × E)",
        complexityOrder: 4,
        description: "PageRank models the web as a directed graph where nodes are pages and edges are links. It iteratively computes importance scores based on incoming links and their importance. The algorithm models random web surfing and converges to a steady-state distribution representing page importance.",
        application: "Search engine ranking, recommendation systems, influence analysis in social networks, citation networks, and biological network analysis.",
        difficulty: "Advanced",
        category: "Graphs & ML"
    },
    {
        number: 9,
        name: "Gradient Descent & Adam",
        concept: "Numerical Optimization",
        complexity: "O(iterations × params)",
        complexityOrder: 4,
        description: "Gradient Descent iteratively moves in the direction of steepest descent (negative gradient) to minimize a loss function. Adam combines adaptive learning rates with momentum, converging faster for many problems. Foundation for training neural networks and modern ML. Understanding learning rates, momentum, and convergence is critical.",
        application: "Machine learning model training, neural network optimization, deep learning, parameter tuning, and large-scale optimization problems in production systems.",
        difficulty: "Advanced",
        category: "Machine Learning"
    },
    {
        number: 10,
        name: "Scaled Dot-Product Attention",
        concept: "Relevance-Weighted Information Retrieval",
        complexity: "O(n²d) for sequence",
        complexityOrder: 5,
        description: "Attention mechanisms compute weighted sums of values based on query-key relevance. Scaled dot-product attention divides similarity scores by √d to stabilize gradients. Core component of transformer architectures. Enables models to focus on relevant information in sequences of arbitrary length.",
        application: "Transformers and large language models, machine translation, image recognition, time-series forecasting, and any sequence-to-sequence modeling task. Foundation for modern NLP breakthroughs.",
        difficulty: "Advanced",
        category: "Deep Learning"
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const algorithmsGrid = document.getElementById('algorithmsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

// State
let currentFilter = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderAlgorithms();
    attachEventListeners();
});

// Event Listeners
function attachEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // Add click handlers to principle items
    document.querySelectorAll('.principle-item').forEach(item => {
        item.addEventListener('click', handlePrincipleClick);
    });
}

function handlePrincipleClick(e) {
    const principle = e.target.textContent.trim().toLowerCase();
    
    // Map principles to search keywords
    const principleMap = {
        'search engines': 'search ranking',
        'gps navigation': 'A* path route',
        'cybersecurity': 'hashing security connectivity',
        'cloud computing': 'sorting pipelines distributed',
        'recommendations': 'pagerank recommendation',
        'machine learning': 'gradient descent optimization neural',
        'llms': 'attention transformer',
        'social networks': 'pagerank connectivity network'
    };
    
    const searchTerm = principleMap[principle] || principle;
    searchInput.value = searchTerm;
    searchQuery = searchTerm.toLowerCase();
    
    // Reset filter to 'all'
    currentFilter = 'all';
    filterButtons.forEach(btn => btn.classList.remove('active'));
    filterButtons[0].classList.add('active');
    
    renderAlgorithms();
    searchInput.focus();
}

// Search Handler
function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase().trim();
    renderAlgorithms();
}

// Filter Handler
function handleFilter(e) {
    const filter = e.target.dataset.filter;
    currentFilter = filter;
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    renderAlgorithms();
}

// Render Algorithms
function renderAlgorithms() {
    algorithmsGrid.innerHTML = '';
    
    let filtered = algorithms;
    
    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(algo => 
            algo.name.toLowerCase().includes(searchQuery) ||
            algo.concept.toLowerCase().includes(searchQuery) ||
            algo.description.toLowerCase().includes(searchQuery) ||
            algo.application.toLowerCase().includes(searchQuery)
        );
    }
    
    // Apply category filter
    if (currentFilter === 'difficulty') {
        filtered.sort((a, b) => {
            const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
            return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        });
    } else if (currentFilter === 'application') {
        filtered.sort((a, b) => a.category.localeCompare(b.category));
    } else if (currentFilter === 'complexity') {
        filtered.sort((a, b) => a.complexityOrder - b.complexityOrder);
    }
    
    if (filtered.length === 0) {
        algorithmsGrid.innerHTML = '<div style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--text-secondary);">No algorithms found. Try a different search or filter.</div>';
        return;
    }
    
    filtered.forEach((algo, index) => {
        const card = createAlgorithmCard(algo);
        algorithmsGrid.appendChild(card);
    });
}

// Create Algorithm Card
function createAlgorithmCard(algo) {
    const card = document.createElement('div');
    card.className = 'algorithm-card';
    card.innerHTML = `
        <div class="card-header">
            <div class="card-number">${algo.number}</div>
            <span class="card-complexity">${algo.complexity}</span>
        </div>
        <h3 class="card-title">${algo.name}</h3>
        <span class="card-concept">${algo.concept}</span>
        <p class="card-description">${algo.description}</p>
        <div class="card-application">
            <h4>Modern Applications</h4>
            <p>${algo.application}</p>
        </div>
        <button class="expand-btn visible" aria-label="Expand algorithm details">Read More</button>
    `;
    
    const expandBtn = card.querySelector('.expand-btn');
    const description = card.querySelector('.card-description');
    const application = card.querySelector('.card-application');
    
    expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = card.classList.contains('expanded');
        
        if (isExpanded) {
            // Collapse
            card.classList.remove('expanded');
            description.classList.remove('visible');
            application.classList.remove('visible');
            expandBtn.classList.remove('expanded');
            expandBtn.textContent = 'Read More';
        } else {
            // Expand
            card.classList.add('expanded');
            description.classList.add('visible');
            application.classList.add('visible');
            expandBtn.classList.add('expanded');
            expandBtn.textContent = 'Read Less';
        }
    });
    
    // Add click-to-expand for the entire card
    card.addEventListener('click', () => {
        expandBtn.click();
    });
    
    return card;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // ESC to clear search
    if (e.key === 'Escape' && searchInput.value) {
        searchInput.value = '';
        searchQuery = '';
        renderAlgorithms();
        searchInput.blur();
    }
});

// Smooth scroll to top on page load
window.scrollTo(0, 0);
