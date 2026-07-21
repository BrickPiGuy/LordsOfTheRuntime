# Top 10 Algorithms Every Undergraduate Should Know

## Guiding Principle

A modern undergraduate algorithms lecture should not abandon classical algorithms. Instead, it should connect foundational techniques to the systems students use today:

- Search engines
- GPS navigation
- Cybersecurity tools
- Cloud computing
- Recommendation systems
- Machine learning
- Large language models
- Social networks

Shortest-path algorithms still deserve a place, but they should be presented as part of a broader family of graph-search and optimization techniques rather than as the centerpiece of the lecture.

## Recommended Top 10

| # | Algorithm | Core Concept | Modern Application |
|---:|---|---|---|
| 1 | Binary Search | Divide and conquer | Databases, APIs, debugging, version control |
| 2 | Quicksort and Merge Sort | Sorting and algorithmic tradeoffs | Data pipelines, distributed systems |
| 3 | Hashing | Near-constant-time lookup | Caches, databases, password storage, blockchains |
| 4 | Breadth-First and Depth-First Search | Graph traversal | Web crawling, dependency analysis, cybersecurity |
| 5 | A* Search | Heuristic graph search | GPS, robotics, games, autonomous systems |
| 6 | Union-Find | Dynamic connectivity | Networks, image segmentation, clustering |
| 7 | Dynamic Programming | Reusing overlapping solutions | Sequence alignment, compilers, resource allocation |
| 8 | PageRank | Iterative graph ranking | Search, recommendations, influence analysis |
| 9 | Gradient Descent and Adam | Numerical optimization | Machine learning and neural-network training |
| 10 | Scaled Dot-Product Attention | Relevance-weighted information retrieval | Transformers and large language models |

# 1. Binary Search

## Why Students Should Know It

Binary search is one of the clearest demonstrations of how structure can dramatically improve performance.

A linear search requires:

```text
O(n)
```

A binary search requires:

```text
O(log n)
```

The important lesson is not merely how to search an array. Binary search teaches students to eliminate large portions of a problem space through a carefully chosen decision.

## Modern Examples

- Searching sorted database indexes
- Finding a faulty software release with `git bisect`
- Determining the minimum acceptable configuration
- Searching timestamps in system logs
- Finding capacity thresholds in cloud systems

## Lecture Question

> How many comparisons are needed to search one billion sorted records?

Approximately 30 comparisons demonstrate the practical power of logarithmic growth.

# 2. Quicksort and Merge Sort

## Why Teach Both?

Students should understand that there is rarely one universally best algorithm.

### Quicksort

- Average time: `O(n log n)`
- Worst-case time: `O(n^2)`
- Often fast in memory
- Can operate largely in place

### Merge Sort

- Time: `O(n log n)`
- Requires additional memory for ordinary array implementations
- Stable
- Naturally supports external and distributed sorting

## Modern Examples

- Sorting database query results
- Processing files larger than available memory
- Organizing telemetry and log data
- Merge operations in distributed data pipelines
- Sorting data across multiple machines

## Main Lesson

Algorithm selection depends on more than asymptotic complexity. Students must also consider:

- Memory use
- Input distribution
- Stability
- Cache behavior
- Parallelism
- Worst-case guarantees

# 3. Hashing

## Why It Belongs in the Top 10

Hashing underlies much of modern software infrastructure.

Average lookup, insertion, and deletion can approach:

```text
O(1)
```

Students should understand both the performance benefits and the limitations of hashing.

## Essential Topics

- Hash functions
- Collisions
- Separate chaining
- Open addressing
- Load factor
- Resizing
- Cryptographic versus noncryptographic hashes

## Modern Examples

- Database indexes
- Compiler symbol tables
- Web caches
- Duplicate detection
- Password verification
- Content-addressable storage
- Git objects
- Blockchain structures

## Important Distinction

A hash table algorithm does not require a cryptographically secure hash. Cryptographic hashing has additional requirements, including resistance to preimage and collision attacks.

# 4. Breadth-First Search and Depth-First Search

## Why Group Them Together?

BFS and DFS introduce graph representation, traversal, reachability, and structural reasoning.

### Breadth-First Search

BFS explores a graph level by level.

Typical complexity:

```text
O(V + E)
```

It finds shortest paths in unweighted graphs.

### Depth-First Search

DFS explores one branch before backtracking.

Typical complexity:

```text
O(V + E)
```

It is useful for:

- Cycle detection
- Topological sorting
- Connected components
- Dependency analysis

## Modern Examples

- Crawling websites
- Finding social-network connections
- Tracing software dependencies
- Discovering attack paths in a network
- Exploring file systems
- Detecting circular package dependencies
- Analyzing call graphs

## Cybersecurity Example

Model a network as a graph:

- Vertices represent systems or accounts.
- Edges represent connections or privileges.
- BFS finds the smallest number of steps to a critical asset.
- DFS identifies cycles or deeply nested privilege relationships.

# 5. A* Search

## Why A* Instead of Only Dijkstra's Algorithm?

Dijkstra's algorithm remains foundational, but A* offers a more contemporary presentation because it adds heuristic reasoning.

A* evaluates nodes using:

```text
f(n) = g(n) + h(n)
```

Where:

- `g(n)` is the known cost from the starting point.
- `h(n)` is the estimated cost to the destination.
- `f(n)` is the estimated total path cost.

Dijkstra's algorithm can be presented as the special case where:

```text
h(n) = 0
```

## Modern Examples

- GPS navigation
- Video-game pathfinding
- Robot motion planning
- Warehouse automation
- Autonomous vehicles
- Network routing

## What Students Should Examine

The central question is not simply whether a path exists. It is whether additional knowledge can help find the path more efficiently.

| Algorithm | Uses Edge Weights | Uses a Heuristic | Typical Purpose |
|---|---:|---:|---|
| BFS | No | No | Unweighted shortest path |
| Dijkstra | Yes | No | Weighted shortest path |
| A* | Yes | Yes | Goal-directed shortest path |

## Recommendation

Keep shortest-path algorithms in the lecture, but teach **BFS -> Dijkstra -> A*** as an evolutionary sequence rather than treating them as three unrelated algorithms.

# 6. Union-Find

## Also Known As

- Disjoint-set union
- DSU
- Disjoint-set forest

## Why Students Should Know It

Union-Find efficiently answers two questions:

1. Which group does an item belong to?
2. Should two groups be merged?

With path compression and union by rank or size, operations have nearly constant amortized cost:

```text
O(alpha(n))
```

Here, `alpha(n)` is the inverse Ackermann function, which grows extraordinarily slowly.

## Modern Examples

- Detecting network connectivity
- Building minimum spanning trees
- Grouping related accounts
- Image segmentation
- Clustering
- Tracking communities
- Detecting redundant network links

## Classroom Demonstration

Give each student a node number. Gradually announce connections and ask whether two students are now in the same component.

# 7. Dynamic Programming

## Why It Is Essential

Dynamic programming teaches students to recognize:

- Overlapping subproblems
- Optimal substructure
- State
- Recurrence relations
- Memoization
- Tabulation

Rather than teaching Fibonacci numbers as the primary example, use a modern application.

## Better Modern Examples

- Spell checking and edit distance
- DNA sequence alignment
- Comparing software files
- Resource scheduling
- Text prediction
- Network packet alignment
- Optimal cache allocation
- Token-sequence comparison

## Recommended Demonstration: Edit Distance

Given two strings, determine the minimum number of:

- Insertions
- Deletions
- Substitutions

needed to transform one string into the other.

This connects dynamic programming to:

- Search engines
- Autocorrect
- Plagiarism detection
- Bioinformatics
- Natural-language processing

## Main Lesson

Dynamic programming is not a single algorithm. It is a disciplined method for turning an exponential recursive solution into a tractable computation.

# 8. PageRank

## Why It Merits Inclusion

PageRank is an excellent bridge between traditional graph algorithms and modern ranking systems.

Instead of merely counting links, PageRank treats a link from an influential page as more significant than a link from an obscure page.

Conceptually:

```text
PR(u) = (1-d)/N + d * sum(PR(v)/L(v))
```

Where:

- `PR(u)` is the score of page `u`.
- `B(u)` contains pages linking to `u`.
- `L(v)` is the number of outgoing links from `v`.
- `d` is a damping factor.
- `N` is the number of pages.

## Modern Examples

- Ranking web pages
- Identifying influential social-network accounts
- Ranking academic papers
- Recommendation systems
- Detecting important network nodes
- Analyzing financial transaction graphs
- Supporting graph-based machine learning

## Main Lesson

PageRank demonstrates that importance can be computed recursively:

> A node is important when other important nodes point to it.

# 9. Gradient Descent and Adam

## Why Optimization Is Now an Undergraduate Topic

Modern software developers increasingly work with systems that learn parameters rather than having every rule explicitly programmed.

Gradient descent updates parameters in the direction that reduces an objective function:

```text
theta(t+1) = theta(t) - learning_rate * gradient
```

Where:

- `theta` represents model parameters.
- The learning rate controls the update size.
- The gradient indicates the direction of increasing loss.

## Why Include Adam?

Adam extends stochastic gradient optimization by maintaining adaptive estimates derived from the first and second moments of the gradients.

## Modern Examples

- Neural-network training
- Fraud detection
- Recommendation systems
- Computer vision
- Language modeling
- Anomaly detection
- Forecasting

## Teaching Scope

Students do not need to derive every Adam equation during an introductory lecture. They should understand the progression:

1. Gradient descent uses the entire dataset.
2. Stochastic gradient descent uses smaller samples.
3. Momentum smooths the update direction.
4. Adam adapts updates for individual parameters.

## Main Lesson

Some algorithms do not search a discrete list or graph. They search a continuous space of possible parameter values.

# 10. Scaled Dot-Product Attention

## Why Attention Merits Examination

Attention is arguably the most important modern addition to an undergraduate algorithm survey.

The core calculation is:

```text
Attention(Q, K, V) = softmax(QK^T / sqrt(d_k))V
```

Where:

- `Q` represents queries.
- `K` represents keys.
- `V` represents values.
- `QK^T` calculates similarity scores.
- Softmax converts scores into weights.
- The weighted values produce the output.

## Undergraduate-Level Interpretation

Attention asks:

> For the item I am currently processing, which other items are most relevant?

## Modern Examples

- Large language models
- Machine translation
- Source-code generation
- Document summarization
- Image recognition
- Speech processing
- Multimodal AI

## Why It Is Teachable

Attention combines concepts students already encounter:

- Arrays and matrices
- Dot products
- Similarity
- Weighted averages
- Normalization
- Parallel computation

It therefore provides a strong capstone example without requiring students to master an entire neural-network architecture.

# Notable Algorithms That Nearly Made the List

## Bloom Filters

A Bloom filter is a space-efficient probabilistic structure for testing whether an item may belong to a set.

Possible outcomes:

- Definitely not present
- Probably present

Applications include:

- Web browsers
- Databases
- Distributed caches
- Network security
- Duplicate detection

## MapReduce

MapReduce divides large-scale data processing into map and reduce operations.

Applications include:

- Log analysis
- Search indexing
- Counting events
- Distributed aggregation
- Large-scale data transformation

MapReduce is more accurately an **algorithmic computation model** than a single algorithm, but it merits discussion because it changes how algorithms are designed for distributed systems.

## Locality-Sensitive Hashing

Locality-sensitive hashing places similar objects into the same buckets with relatively high probability.

Applications include:

- Near-duplicate detection
- Image retrieval
- Semantic search
- Recommendation systems
- Approximate nearest-neighbor search

## Consistent Hashing

Consistent hashing distributes data across changing groups of servers while minimizing how much data must move when a server is added or removed.

Applications include:

- Distributed caches
- Content-delivery networks
- Cloud storage
- Database sharding
- Load balancing

## Backpropagation

Backpropagation applies the chain rule efficiently to calculate gradients throughout a neural network.

It is historically and practically important, but for a general undergraduate audience, gradient descent and attention may provide a more manageable introduction to modern AI algorithms.

# Recommended Lecture Structure

## Part 1: Finding and Organizing

1. Binary Search
2. Quicksort and Merge Sort
3. Hashing

## Part 2: Networks and Relationships

4. BFS and DFS
5. A*
6. Union-Find
7. PageRank

## Part 3: Optimization and Intelligence

8. Dynamic Programming
9. Gradient Descent and Adam
10. Attention

# Suggested Unifying Example

Use a fictional campus navigation and student-support platform throughout the lecture.

| Algorithm | Campus Application |
|---|---|
| Binary Search | Search sorted student records |
| Sorting | Order courses by enrollment |
| Hashing | Retrieve student accounts |
| BFS/DFS | Analyze course prerequisites |
| A* | Navigate between campus buildings |
| Union-Find | Detect connected student communities |
| Dynamic Programming | Construct an optimal course schedule |
| PageRank | Rank useful learning resources |
| Adam | Train an at-risk student prediction model |
| Attention | Build a course-support chatbot |

This makes the lecture feel like one connected system rather than ten unrelated coding exercises.

# Final Recommendation

Shortest-path algorithms absolutely merit examination, but avoid giving separate top-ten positions to BFS, Dijkstra, Bellman-Ford, Floyd-Warshall, and A*.

Use **A*** as the featured shortest-path algorithm and explain its relationship to BFS and Dijkstra. This preserves the classical foundation while creating room for three distinctly modern topics:

1. **PageRank** for graph-based ranking
2. **Adam** for machine-learning optimization
3. **Attention** for modern generative AI

The resulting lecture communicates an important message:

> Algorithms are not historical puzzles. They are the reusable reasoning patterns behind search engines, cloud platforms, cybersecurity systems, navigation tools, and artificial intelligence.
