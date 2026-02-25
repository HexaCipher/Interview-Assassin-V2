// Interview Question Database
// Each question includes key concepts for evaluation

export const QUESTIONS = {
  "frontend-developer": [
    {
      id: "fe-1",
      text: "Explain the difference between props and state in React. When would you use each?",
      keyConcepts: ["props", "state", "immutable", "parent", "child", "component", "data flow", "mutable", "useState", "re-render"],
      idealAnswer: "Props are immutable data passed from parent to child components, making data flow unidirectional. State is mutable data managed within a component using hooks like useState. Use props for passing data down the component tree, and state for data that changes over time and triggers re-renders.",
      category: "React Fundamentals"
    },
    {
      id: "fe-2",
      text: "What is the virtual DOM and how does it improve performance?",
      keyConcepts: ["virtual dom", "reconciliation", "diffing", "real dom", "performance", "batch updates", "efficient", "memory", "representation"],
      idealAnswer: "The virtual DOM is a lightweight in-memory representation of the real DOM. React uses it to calculate minimal changes needed (diffing), then batch updates to the real DOM. This reduces expensive DOM manipulations and improves performance by minimizing reflows and repaints.",
      category: "React Performance"
    },
    {
      id: "fe-3",
      text: "Describe CSS specificity and how it determines which styles are applied.",
      keyConcepts: ["specificity", "inline", "id", "class", "element", "selector", "cascade", "priority", "weight", "important"],
      idealAnswer: "CSS specificity determines which styles win when multiple rules target the same element. Specificity hierarchy: inline styles (1000) > IDs (100) > classes/attributes/pseudo-classes (10) > elements/pseudo-elements (1). Higher specificity wins, and !important overrides normal specificity.",
      category: "CSS"
    },
    {
      id: "fe-4",
      text: "What are closures in JavaScript? Provide a practical use case.",
      keyConcepts: ["closure", "scope", "lexical", "outer function", "inner function", "access", "private", "encapsulation", "memory"],
      idealAnswer: "A closure is when an inner function has access to its outer function's variables even after the outer function has returned. Practical use: creating private variables, event handlers, callbacks, and factory functions. Closures enable data encapsulation and function factories.",
      category: "JavaScript"
    },
    {
      id: "fe-5",
      text: "Explain the difference between async/await and Promises. When would you use each?",
      keyConcepts: ["async", "await", "promise", "then", "catch", "asynchronous", "syntax", "error handling", "sequential", "parallel"],
      idealAnswer: "Async/await is syntactic sugar over Promises, making asynchronous code look synchronous. Use async/await for cleaner, more readable sequential operations. Use Promise.all() for parallel operations. Both handle asynchronous operations, but async/await improves readability and error handling with try/catch.",
      category: "JavaScript Async"
    },
    {
      id: "fe-6",
      text: "What is the box model in CSS and how does box-sizing affect it?",
      keyConcepts: ["box model", "content", "padding", "border", "margin", "box-sizing", "border-box", "content-box", "width", "height"],
      idealAnswer: "The CSS box model consists of content, padding, border, and margin. By default (content-box), width/height only apply to content. With box-sizing: border-box, width/height include padding and border, making layouts more predictable and easier to manage.",
      category: "CSS Layout"
    },
    {
      id: "fe-7",
      text: "What are React hooks? Explain useState and useEffect with examples.",
      keyConcepts: ["hooks", "useState", "useEffect", "functional components", "state management", "side effects", "lifecycle", "dependencies", "cleanup"],
      idealAnswer: "React hooks let you use state and lifecycle features in functional components. useState manages component state. useEffect handles side effects like data fetching, subscriptions, and DOM manipulation. UseEffect runs after render, with optional dependency array for control and cleanup function for removing subscriptions.",
      category: "React Hooks"
    },
    {
      id: "fe-8",
      text: "Explain event delegation in JavaScript and its benefits.",
      keyConcepts: ["event delegation", "bubbling", "event propagation", "parent", "target", "performance", "dynamic", "single listener", "memory"],
      idealAnswer: "Event delegation attaches a single event listener to a parent element instead of multiple listeners on children. It leverages event bubbling to handle events from child elements. Benefits: better performance, less memory usage, handles dynamically added elements automatically.",
      category: "JavaScript Events"
    }
  ],

  "backend-developer": [
    {
      id: "be-1",
      text: "Explain the differences between SQL and NoSQL databases. When would you choose each?",
      keyConcepts: ["sql", "nosql", "relational", "schema", "acid", "scalability", "document", "flexibility", "joins", "horizontal scaling"],
      idealAnswer: "SQL databases are relational with fixed schemas, ACID compliance, and support complex joins. NoSQL databases are schema-flexible, prioritize scalability, and include document, key-value, and graph stores. Choose SQL for complex relationships and transactions; NoSQL for high scalability, flexibility, and unstructured data.",
      category: "Databases"
    },
    {
      id: "be-2",
      text: "What is RESTful API design? Describe the key principles and HTTP methods.",
      keyConcepts: ["rest", "http", "get", "post", "put", "delete", "stateless", "resource", "endpoint", "status codes", "crud"],
      idealAnswer: "REST uses HTTP methods for CRUD operations: GET (read), POST (create), PUT/PATCH (update), DELETE (remove). Key principles: stateless communication, resource-based URLs, standard HTTP status codes, and uniform interface. RESTful APIs are scalable, cacheable, and follow client-server architecture.",
      category: "API Design"
    },
    {
      id: "be-3",
      text: "Explain database indexing and how it improves query performance.",
      keyConcepts: ["index", "performance", "query", "b-tree", "primary key", "foreign key", "lookup", "trade-off", "write performance", "search"],
      idealAnswer: "Database indexes are data structures (usually B-trees) that speed up data retrieval by creating pointers to row locations. They dramatically improve SELECT query performance but slow down INSERT/UPDATE/DELETE operations. Indexes work best on columns frequently used in WHERE clauses, joins, and sorting.",
      category: "Database Performance"
    },
    {
      id: "be-4",
      text: "What is middleware in web applications? Provide examples of common use cases.",
      keyConcepts: ["middleware", "request", "response", "chain", "authentication", "logging", "error handling", "validation", "pipeline", "next"],
      idealAnswer: "Middleware functions process requests before they reach route handlers. They have access to request, response, and next() function to pass control. Common uses: authentication/authorization, logging, error handling, parsing request bodies, CORS, rate limiting, and input validation.",
      category: "Web Architecture"
    },
    {
      id: "be-5",
      text: "Describe the difference between authentication and authorization.",
      keyConcepts: ["authentication", "authorization", "identity", "permissions", "jwt", "session", "verify", "access control", "roles", "privileges"],
      idealAnswer: "Authentication verifies who you are (identity) through credentials like passwords, tokens, or biometrics. Authorization determines what you can access (permissions) based on roles and privileges. Authentication happens first, then authorization checks if the authenticated user has permission for specific resources or actions.",
      category: "Security"
    },
    {
      id: "be-6",
      text: "What are microservices? Explain advantages and challenges compared to monolithic architecture.",
      keyConcepts: ["microservices", "monolithic", "distributed", "scalability", "deployment", "independent", "communication", "complexity", "fault isolation"],
      idealAnswer: "Microservices split applications into small, independent services communicating via APIs. Advantages: independent scaling, technology flexibility, fault isolation, easier deployment. Challenges: increased complexity, network latency, distributed transactions, monitoring difficulty, and data consistency across services.",
      category: "Architecture"
    },
    {
      id: "be-7",
      text: "Explain caching strategies and when to use each (in-memory, CDN, database caching).",
      keyConcepts: ["cache", "redis", "memcached", "cdn", "performance", "ttl", "invalidation", "memory", "latency", "static assets"],
      idealAnswer: "In-memory caching (Redis, Memcached) stores frequently accessed data for fast retrieval. CDN caching distributes static assets globally close to users. Database query caching stores query results. Use in-memory for session data and hot data, CDN for static assets, and database caching for expensive queries with TTL-based invalidation.",
      category: "Performance"
    },
    {
      id: "be-8",
      text: "What is CORS and why is it important? How do you configure it?",
      keyConcepts: ["cors", "cross-origin", "security", "same-origin policy", "headers", "preflight", "access-control-allow-origin", "browser", "api"],
      idealAnswer: "CORS (Cross-Origin Resource Sharing) allows servers to specify which origins can access their resources, relaxing the same-origin policy. Configure by setting Access-Control-Allow-Origin headers, handling preflight OPTIONS requests, and specifying allowed methods and headers. Essential for secure API access from different domains.",
      category: "Security"
    }
  ],

  "full-stack-developer": [
    {
      id: "fs-1",
      text: "Explain the request-response cycle in a full-stack web application from user click to rendered page.",
      keyConcepts: ["http", "request", "response", "server", "database", "api", "frontend", "backend", "routing", "render", "dom"],
      idealAnswer: "User action triggers HTTP request to server, server routes to appropriate handler, handler processes logic and queries database if needed, formats response (JSON/HTML), sends back to client. Frontend receives response, updates state, and re-renders UI. Process includes DNS lookup, TCP handshake, and potential multiple round trips.",
      category: "Web Architecture"
    },
    {
      id: "fs-2",
      text: "What are the differences between server-side rendering (SSR) and client-side rendering (CSR)?",
      keyConcepts: ["ssr", "csr", "hydration", "seo", "performance", "initial load", "server", "client", "javascript", "ttfb", "tti"],
      idealAnswer: "SSR renders HTML on the server, sending complete page to client (better SEO, faster FCP). CSR sends minimal HTML, renders with JavaScript on client (better interactivity, lower server load). SSR has faster time-to-first-byte but requires hydration. Modern frameworks like Next.js offer hybrid approaches.",
      category: "Rendering Strategies"
    },
    {
      id: "fs-3",
      text: "How do you handle state management in a large-scale application?",
      keyConcepts: ["state management", "redux", "context", "global state", "local state", "props drilling", "store", "actions", "reducers", "zustand"],
      idealAnswer: "For large apps, use dedicated state management (Redux, Zustand, Context API). Separate local component state from global application state. Use Context for theme/auth, Redux for complex state with multiple sources. Consider server state management (React Query) separately from client state. Normalize data and avoid deep nesting.",
      category: "State Management"
    },
    {
      id: "fs-4",
      text: "Explain JWT authentication workflow in a full-stack application.",
      keyConcepts: ["jwt", "token", "authentication", "bearer", "payload", "signature", "secret", "refresh token", "access token", "stateless", "header"],
      idealAnswer: "User logs in with credentials, server validates and generates JWT with payload and signature using secret key. Client stores token (localStorage/cookie) and sends it in Authorization header for subsequent requests. Server verifies token signature and extracts user data. Use refresh tokens for security and access tokens with short expiry.",
      category: "Authentication"
    },
    {
      id: "fs-5",
      text: "What strategies would you use to optimize the performance of a slow-loading web application?",
      keyConcepts: ["performance", "optimization", "lazy loading", "code splitting", "caching", "compression", "cdn", "minification", "bundle size", "images"],
      idealAnswer: "Frontend: code splitting, lazy loading, image optimization, tree shaking, minimize bundle size. Backend: database indexing, caching (Redis), query optimization, CDN for static assets. Network: compression (gzip/brotli), HTTP/2, reduce API calls. Monitor with Lighthouse, Web Vitals, and APM tools.",
      category: "Performance"
    },
    {
      id: "fs-6",
      text: "Describe how you would design a real-time chat application architecture.",
      keyConcepts: ["websocket", "real-time", "socket.io", "messaging", "scalability", "pub-sub", "redis", "connection", "bidirectional", "event-driven"],
      idealAnswer: "Use WebSockets for bidirectional real-time communication. Backend: Node.js with Socket.io, Redis pub/sub for scaling across servers, message queue for reliability. Database: store messages with indexing on user/conversation. Frontend: WebSocket client, optimistic updates, reconnection logic. Consider horizontal scaling, load balancing, and presence indicators.",
      category: "System Design"
    },
    {
      id: "fs-7",
      text: "What is the difference between horizontal and vertical scaling? When would you choose each?",
      keyConcepts: ["horizontal", "vertical", "scaling", "load balancing", "distributed", "resources", "performance", "availability", "cost"],
      idealAnswer: "Vertical scaling adds more resources (CPU, RAM) to existing server; has hardware limits and single point of failure. Horizontal scaling adds more servers, distributing load; offers better fault tolerance and unlimited scaling. Choose vertical for quick fixes and simple apps, horizontal for high availability and large-scale distributed systems.",
      category: "Scalability"
    }
  ],

  "data-scientist": [
    {
      id: "ds-1",
      text: "Explain the bias-variance tradeoff in machine learning models.",
      keyConcepts: ["bias", "variance", "tradeoff", "underfitting", "overfitting", "model complexity", "training error", "test error", "generalization"],
      idealAnswer: "Bias is error from oversimplified models (underfitting), missing relevant patterns. Variance is error from overly complex models (overfitting), capturing noise. High bias: poor performance on both training and test. High variance: good training but poor test performance. Goal is balancing both for optimal generalization.",
      category: "ML Fundamentals"
    },
    {
      id: "ds-2",
      text: "What is the difference between supervised and unsupervised learning? Provide examples of each.",
      keyConcepts: ["supervised", "unsupervised", "labeled", "unlabeled", "classification", "regression", "clustering", "dimensionality reduction", "training data"],
      idealAnswer: "Supervised learning uses labeled training data to learn input-output mappings (classification, regression examples: spam detection, price prediction). Unsupervised learning finds patterns in unlabeled data without target outputs (clustering, dimensionality reduction examples: customer segmentation, PCA). Semi-supervised uses both.",
      category: "ML Types"
    },
    {
      id: "ds-3",
      text: "How do you handle missing data in a dataset? Describe different strategies.",
      keyConcepts: ["missing data", "imputation", "mean", "median", "deletion", "knn", "forward fill", "interpolation", "mice", "missing not at random"],
      idealAnswer: "Strategies: deletion (listwise/pairwise), mean/median/mode imputation, KNN imputation, forward/backward fill for time series, model-based imputation (MICE), or use algorithms handling missing values (XGBoost). Choice depends on missing data mechanism (MCAR, MAR, MNAR) and dataset size.",
      category: "Data Preprocessing"
    },
    {
      id: "ds-4",
      text: "Explain precision, recall, and F1-score. When would you optimize for each?",
      keyConcepts: ["precision", "recall", "f1-score", "true positive", "false positive", "false negative", "classification", "metrics", "tradeoff"],
      idealAnswer: "Precision = TP/(TP+FP), minimizes false positives. Recall = TP/(TP+FN), minimizes false negatives. F1-score is harmonic mean of both. Optimize precision when false positives are costly (spam detection). Optimize recall when false negatives are critical (disease detection). F1 balances both.",
      category: "Model Evaluation"
    },
    {
      id: "ds-5",
      text: "What is regularization and why is it important? Explain L1 and L2 regularization.",
      keyConcepts: ["regularization", "l1", "l2", "overfitting", "penalty", "lasso", "ridge", "feature selection", "weights", "lambda"],
      idealAnswer: "Regularization prevents overfitting by adding penalty to loss function for large weights. L1 (Lasso) uses absolute values, promotes sparsity, performs feature selection. L2 (Ridge) uses squared values, distributes weights evenly, preferred for multicollinearity. Lambda controls regularization strength. Both improve model generalization.",
      category: "Model Optimization"
    },
    {
      id: "ds-6",
      text: "Describe the difference between bagging and boosting ensemble methods.",
      keyConcepts: ["bagging", "boosting", "ensemble", "random forest", "adaboost", "gradient boosting", "parallel", "sequential", "variance", "bias"],
      idealAnswer: "Bagging (Bootstrap Aggregating) trains models in parallel on random subsets, reduces variance (Random Forest). Boosting trains models sequentially, each correcting previous errors, reduces bias (AdaBoost, XGBoost). Bagging is more robust to outliers, boosting achieves higher accuracy but risks overfitting.",
      category: "Ensemble Methods"
    },
    {
      id: "ds-7",
      text: "What is cross-validation and why is it important? Explain k-fold cross-validation.",
      keyConcepts: ["cross-validation", "k-fold", "training", "validation", "test set", "overfitting", "generalization", "stratified", "leave-one-out"],
      idealAnswer: "Cross-validation assesses model performance on unseen data by splitting data into k folds, training on k-1 folds and validating on remaining fold, rotating k times. Provides robust performance estimates, reduces overfitting risk. Stratified k-fold maintains class proportions. Common k values: 5 or 10.",
      category: "Model Validation"
    },
    {
      id: "ds-8",
      text: "Explain feature engineering and provide examples of techniques you would use.",
      keyConcepts: ["feature engineering", "feature extraction", "transformation", "scaling", "encoding", "polynomial", "binning", "interaction", "domain knowledge"],
      idealAnswer: "Feature engineering creates informative features from raw data. Techniques: scaling (standardization, normalization), encoding categorical variables (one-hot, label), creating polynomial features, binning continuous variables, extracting datetime features, interaction terms, aggregations. Requires domain knowledge and significantly impacts model performance.",
      category: "Feature Engineering"
    }
  ],

  "machine-learning-engineer": [
    {
      id: "ml-1",
      text: "How would you deploy a machine learning model to production? Describe the key steps.",
      keyConcepts: ["deployment", "production", "api", "docker", "monitoring", "versioning", "pipeline", "inference", "serving", "mlops"],
      idealAnswer: "Steps: model serialization (pickle, ONNX), containerization (Docker), create REST API (Flask, FastAPI), set up CI/CD pipeline, implement monitoring and logging, version control (MLflow, DVC), testing (unit, integration), and establish rollback procedures. Consider latency, scalability, and model drift detection.",
      category: "MLOps"
    },
    {
      id: "ml-2",
      text: "What is model drift and how do you detect and handle it?",
      keyConcepts: ["model drift", "data drift", "concept drift", "monitoring", "performance degradation", "retraining", "distribution", "production"],
      idealAnswer: "Model drift occurs when model performance degrades over time due to changing data patterns. Types: data drift (input distribution changes), concept drift (relationship between inputs and outputs changes). Detect through monitoring prediction distributions, performance metrics, and statistical tests. Handle with automated retraining, alerts, and A/B testing.",
      category: "Model Monitoring"
    },
    {
      id: "ml-3",
      text: "Explain the difference between online and batch inference. When would you use each?",
      keyConcepts: ["online", "batch", "inference", "real-time", "latency", "throughput", "prediction", "streaming", "scheduled"],
      idealAnswer: "Online inference provides real-time predictions with low latency for individual requests (recommendation systems, fraud detection). Batch inference processes large datasets periodically with higher throughput, lower cost (daily reports, ETL pipelines). Choose based on latency requirements, cost constraints, and use case urgency.",
      category: "ML Systems"
    },
    {
      id: "ml-4",
      text: "How do you handle class imbalance in classification problems?",
      keyConcepts: ["class imbalance", "oversampling", "undersampling", "smote", "class weights", "sampling", "stratified", "synthetic", "minority class"],
      idealAnswer: "Techniques: resampling (oversampling minority class with SMOTE, undersampling majority class), adjusting class weights in loss function, using appropriate metrics (F1, AUC-ROC, PR curve), ensemble methods, anomaly detection approaches. Stratified splitting ensures balanced folds. Choice depends on dataset size and severity of imbalance.",
      category: "Data Preprocessing"
    },
    {
      id: "ml-5",
      text: "What is transfer learning and when would you use it? Provide examples.",
      keyConcepts: ["transfer learning", "pre-trained", "fine-tuning", "feature extraction", "domain adaptation", "imagenet", "bert", "limited data"],
      idealAnswer: "Transfer learning uses knowledge from pre-trained models on one task for a related task. Approaches: feature extraction (freeze layers) or fine-tuning (retrain some layers). Use when you have limited training data. Examples: using ImageNet weights for medical imaging, BERT for text classification. Saves training time and improves performance.",
      category: "Deep Learning"
    },
    {
      id: "ml-6",
      text: "Explain gradient descent and its variants (SGD, Adam, RMSprop).",
      keyConcepts: ["gradient descent", "sgd", "adam", "optimizer", "learning rate", "momentum", "batch", "convergence", "adaptive"],
      idealAnswer: "Gradient descent minimizes loss by updating weights opposite to gradient direction. SGD uses mini-batches for efficiency. Momentum accelerates convergence. RMSprop adapts learning rates per parameter using moving average of squared gradients. Adam combines momentum and adaptive learning rates. Adam is generally preferred for deep learning due to faster convergence.",
      category: "Optimization"
    },
    {
      id: "ml-7",
      text: "How would you design an A/B test for a new ML model in production?",
      keyConcepts: ["a/b test", "experiment", "control", "treatment", "statistical significance", "metrics", "sample size", "randomization", "hypothesis"],
      idealAnswer: "Define hypothesis and success metrics, calculate required sample size for statistical power, randomly split traffic between control (existing model) and treatment (new model), ensure proper randomization and isolation, monitor key metrics, run test for sufficient duration, perform statistical significance testing, and analyze results before full rollout.",
      category: "Experimentation"
    },
    {
      id: "ml-8",
      text: "What are embeddings in machine learning? How are they used?",
      keyConcepts: ["embeddings", "vector", "representation", "word2vec", "dimensionality reduction", "semantic", "similarity", "dense", "learned"],
      idealAnswer: "Embeddings are dense vector representations that capture semantic relationships in lower-dimensional spaces. Types: word embeddings (Word2Vec, GloVe), sentence embeddings, image embeddings. Used for similarity search, clustering, visualization, and as inputs to neural networks. They encode meaning where similar items have similar vectors.",
      category: "Representation Learning"
    }
  ],

  "devops-engineer": [
    {
      id: "do-1",
      text: "Explain the CI/CD pipeline. What are the key stages and their purposes?",
      keyConcepts: ["ci/cd", "continuous integration", "continuous deployment", "pipeline", "build", "test", "deploy", "automation", "jenkins", "github actions"],
      idealAnswer: "CI/CD automates software delivery. Stages: source control (git), build (compile code), test (unit, integration, E2E), artifact storage, deployment (staging, production), monitoring. Benefits: faster releases, reduced manual errors, quick feedback, automated testing. Tools: Jenkins, GitHub Actions, GitLab CI, CircleCI.",
      category: "CI/CD"
    },
    {
      id: "do-2",
      text: "What is Docker and how does containerization differ from virtualization?",
      keyConcepts: ["docker", "container", "virtualization", "vm", "image", "isolation", "lightweight", "hypervisor", "kernel", "portability"],
      idealAnswer: "Docker uses OS-level virtualization to run isolated containers sharing the host kernel. VMs run full OS with hypervisor overhead. Containers are lightweight, start faster, use fewer resources, and ensure consistency across environments. Docker images package applications with dependencies, enabling 'build once, run anywhere' portability.",
      category: "Containerization"
    },
    {
      id: "do-3",
      text: "How would you monitor and troubleshoot a production system? What metrics would you track?",
      keyConcepts: ["monitoring", "metrics", "logging", "alerting", "prometheus", "grafana", "cpu", "memory", "latency", "error rate", "observability"],
      idealAnswer: "Track golden signals: latency, traffic, errors, saturation. Use tools like Prometheus for metrics, ELK/Loki for logs, distributed tracing (Jaeger). Monitor infrastructure (CPU, memory, disk) and application metrics (response time, error rates). Set up alerts for anomalies, visualize with Grafana, and implement proper logging levels.",
      category: "Monitoring"
    },
    {
      id: "do-4",
      text: "Explain Infrastructure as Code (IaC). What are its benefits?",
      keyConcepts: ["iac", "infrastructure as code", "terraform", "ansible", "cloudformation", "version control", "reproducible", "automation", "declarative"],
      idealAnswer: "IaC manages infrastructure using code in declarative (Terraform, CloudFormation) or imperative (Ansible) formats. Benefits: version control, reproducibility, consistency, faster provisioning, reduced manual errors, documentation as code. Enables treating infrastructure like software with testing, reviews, and CI/CD.",
      category: "Infrastructure"
    },
    {
      id: "do-5",
      text: "What is Kubernetes and what problems does it solve?",
      keyConcepts: ["kubernetes", "orchestration", "container", "scaling", "self-healing", "service discovery", "load balancing", "deployment", "pods", "cluster"],
      idealAnswer: "Kubernetes orchestrates containerized applications across clusters. Solves: automated deployment and scaling, self-healing (restarts failed containers), service discovery and load balancing, rolling updates and rollbacks, resource management. Key concepts: pods, deployments, services, namespaces. Enables managing complex microservices at scale.",
      category: "Container Orchestration"
    },
    {
      id: "do-6",
      text: "Describe the difference between blue-green deployment and canary deployment.",
      keyConcepts: ["blue-green", "canary", "deployment", "zero-downtime", "rollback", "traffic", "gradual", "risk", "strategy"],
      idealAnswer: "Blue-green: run two identical environments, switch traffic from blue (old) to green (new) instantly, quick rollback if issues. Canary: gradually roll out to small user subset, monitor, then expand. Blue-green is faster but requires double resources. Canary reduces risk with gradual rollout and early problem detection.",
      category: "Deployment Strategies"
    },
    {
      id: "do-7",
      text: "What is a reverse proxy and why would you use it? How does it differ from a load balancer?",
      keyConcepts: ["reverse proxy", "load balancer", "nginx", "traffic", "ssl", "caching", "security", "distribution", "backend"],
      idealAnswer: "Reverse proxy sits in front of servers, forwarding client requests and returning responses. Uses: SSL termination, caching, compression, security. Load balancer distributes traffic across multiple servers. Overlap exists, but reverse proxy focuses on request handling and optimization, while load balancer emphasizes traffic distribution and availability. Nginx can do both.",
      category: "Networking"
    },
    {
      id: "do-8",
      text: "How do you ensure security in a DevOps pipeline?",
      keyConcepts: ["security", "devsecops", "secrets", "scanning", "vulnerabilities", "least privilege", "encryption", "compliance", "audit"],
      idealAnswer: "DevSecOps integrates security throughout pipeline: secret management (Vault, AWS Secrets), dependency scanning, SAST/DAST tools, container image scanning, least privilege access, encrypted communication, regular updates, compliance checks, security gates in CI/CD, audit logging. Shift security left to catch issues early.",
      category: "Security"
    }
  ],

  "cybersecurity-analyst": [
    {
      id: "cs-1",
      text: "Explain the CIA triad in cybersecurity. Why is it fundamental?",
      keyConcepts: ["cia triad", "confidentiality", "integrity", "availability", "security", "access control", "encryption", "authentication"],
      idealAnswer: "CIA triad: Confidentiality (only authorized access through encryption, access controls), Integrity (data accuracy and trustworthiness via checksums, digital signatures), Availability (systems accessible when needed through redundancy, disaster recovery). Foundation of security strategy; every security control maps to protecting these three principles.",
      category: "Security Fundamentals"
    },
    {
      id: "cs-2",
      text: "What is the difference between symmetric and asymmetric encryption? When would you use each?",
      keyConcepts: ["symmetric", "asymmetric", "encryption", "public key", "private key", "aes", "rsa", "performance", "key exchange"],
      idealAnswer: "Symmetric uses same key for encryption/decryption (AES), fast but requires secure key exchange. Asymmetric uses public/private key pairs (RSA), slower but secure key exchange. Use symmetric for bulk data encryption, asymmetric for key exchange and digital signatures. Often combined: asymmetric for initial key exchange, symmetric for data.",
      category: "Cryptography"
    },
    {
      id: "cs-3",
      text: "Describe common web application vulnerabilities from OWASP Top 10.",
      keyConcepts: ["owasp", "sql injection", "xss", "csrf", "broken authentication", "sensitive data", "xxe", "access control", "security misconfiguration"],
      idealAnswer: "Key vulnerabilities: SQL injection (unsanitized queries), XSS (injected scripts), broken authentication, sensitive data exposure, XXE, broken access control, security misconfiguration, CSRF. Prevention: parameterized queries, input validation, CSP headers, secure session management, principle of least privilege, HTTPS, regular security updates.",
      category: "Application Security"
    },
    {
      id: "cs-4",
      text: "What is a DDoS attack and how would you mitigate it?",
      keyConcepts: ["ddos", "distributed", "denial of service", "traffic", "mitigation", "rate limiting", "cdn", "firewall", "botnet"],
      idealAnswer: "DDoS overwhelms systems with massive traffic from distributed sources (botnets). Mitigation: rate limiting, traffic filtering, CDN with DDoS protection (Cloudflare), anycast network, blackhole routing, CAPTCHA challenges, scaling infrastructure, monitoring for anomalies. Multi-layered defense combining network, application, and infrastructure levels.",
      category: "Network Security"
    },
    {
      id: "cs-5",
      text: "Explain what a zero-day vulnerability is and why it's dangerous.",
      keyConcepts: ["zero-day", "vulnerability", "exploit", "patch", "unknown", "threat", "disclosure", "security"],
      idealAnswer: "Zero-day is an unknown vulnerability exploited before vendor awareness or patch availability. Dangerous because no defense exists, giving attackers advantage. 'Zero days' to fix before exploitation. Mitigation: defense in depth, network segmentation, intrusion detection, behavior analysis, regular updates, minimize attack surface. Responsible disclosure helps reduce window of exposure.",
      category: "Threat Analysis"
    },
    {
      id: "cs-6",
      text: "What is multi-factor authentication (MFA)? Why is it important?",
      keyConcepts: ["mfa", "two-factor", "authentication", "something you know", "something you have", "something you are", "security", "password"],
      idealAnswer: "MFA requires multiple verification factors: something you know (password), something you have (token, phone), something you are (biometrics). Dramatically reduces breach risk even with compromised passwords. Implementation: TOTP apps, SMS codes, hardware tokens, biometrics. Critical for protecting sensitive accounts and preventing unauthorized access.",
      category: "Access Control"
    },
    {
      id: "cs-7",
      text: "How would you conduct a security audit of a web application?",
      keyConcepts: ["security audit", "penetration testing", "vulnerability scanning", "code review", "threat modeling", "compliance", "assessment"],
      idealAnswer: "Process: threat modeling, automated vulnerability scanning (OWASP ZAP, Burp Suite), manual penetration testing, code review (static analysis), authentication/authorization testing, input validation checks, SSL/TLS configuration, security headers, dependency vulnerabilities, logging/monitoring review. Document findings with severity ratings and remediation recommendations.",
      category: "Security Testing"
    },
    {
      id: "cs-8",
      text: "Explain the principle of least privilege and why it's important in security.",
      keyConcepts: ["least privilege", "access control", "permissions", "minimize", "risk", "blast radius", "security", "authorization"],
      idealAnswer: "Principle of least privilege grants minimum permissions necessary for tasks. Reduces attack surface and blast radius of compromised accounts. Implementation: role-based access control (RBAC), time-limited permissions, regular access reviews, separation of duties. Critical for limiting damage from breaches, insider threats, and accidental actions.",
      category: "Security Principles"
    }
  ],

  "product-manager": [
    {
      id: "pm-1",
      text: "How do you prioritize features when you have limited resources and multiple stakeholder requests?",
      keyConcepts: ["prioritization", "stakeholders", "value", "impact", "effort", "roadmap", "trade-offs", "framework", "rice", "impact effort matrix"],
      idealAnswer: "Use frameworks like RICE (Reach, Impact, Confidence, Effort) or impact-effort matrix. Align with business goals and strategy. Consider user value, technical feasibility, business impact, and strategic fit. Communicate trade-offs transparently to stakeholders. Balance quick wins with long-term goals. Validate with data and user feedback.",
      category: "Product Strategy"
    },
    {
      id: "pm-2",
      text: "Describe how you would conduct user research to validate a product idea.",
      keyConcepts: ["user research", "interviews", "surveys", "validation", "feedback", "hypothesis", "persona", "jobs to be done", "prototype", "usability"],
      idealAnswer: "Define research objectives and hypotheses. Conduct user interviews to understand pain points and needs. Create surveys for quantitative data. Develop user personas. Use jobs-to-be-done framework. Build prototypes or MVPs for testing. Conduct usability tests. Analyze feedback and iterate. Validate problem-solution fit before building.",
      category: "User Research"
    },
    {
      id: "pm-3",
      text: "What metrics would you track to measure the success of a new feature?",
      keyConcepts: ["metrics", "kpi", "analytics", "adoption", "engagement", "retention", "conversion", "user behavior", "north star", "data-driven"],
      idealAnswer: "Define success metrics based on goals: adoption rate, engagement metrics (DAU/MAU), retention, task completion rates, time to value, NPS, conversion rates, customer satisfaction. Track leading and lagging indicators. Establish baseline before launch. Use A/B testing. Consider both quantitative metrics and qualitative feedback. Align with overall product and business goals.",
      category: "Product Metrics"
    },
    {
      id: "pm-4",
      text: "Explain the difference between a product vision and a product strategy.",
      keyConcepts: ["vision", "strategy", "goals", "roadmap", "long-term", "execution", "direction", "tactics", "objectives"],
      idealAnswer: "Product vision is inspiring long-term goal describing what product will become and impact it will have. Product strategy is actionable plan to achieve vision: target market, differentiation, key initiatives, resource allocation. Vision provides direction and purpose, strategy outlines how to get there. Vision is stable, strategy adapts. Both guide roadmap and tactical decisions.",
      category: "Product Strategy"
    },
    {
      id: "pm-5",
      text: "How do you handle disagreements with engineering about technical feasibility or timeline?",
      keyConcepts: ["collaboration", "technical feasibility", "trade-offs", "communication", "compromise", "scope", "mvp", "timeline", "alignment"],
      idealAnswer: "Build trust through open communication. Understand technical constraints and challenges. Discuss trade-offs between scope, quality, and timeline. Find creative solutions: phased rollout, MVP approach, technical alternatives. Focus on user value and business goals. Be willing to adjust requirements. Make data-driven decisions together. Maintain collaborative relationship.",
      category: "Stakeholder Management"
    },
    {
      id: "pm-6",
      text: "What is your approach to creating and maintaining a product roadmap?",
      keyConcepts: ["roadmap", "planning", "timeline", "themes", "flexibility", "stakeholders", "strategy", "communication", "agile"],
      idealAnswer: "Align roadmap with product strategy and business goals. Organize by themes rather than specific features. Balance detail for near-term with flexibility for long-term. Include why and expected outcomes, not just what. Update regularly based on learnings and market changes. Communicate roadmap to stakeholders with clear rationale. Use now-next-later framework for agility.",
      category: "Product Planning"
    },
    {
      id: "pm-7",
      text: "How would you approach defining requirements for a new feature?",
      keyConcepts: ["requirements", "user stories", "acceptance criteria", "use cases", "edge cases", "stakeholders", "functional", "non-functional"],
      idealAnswer: "Start with user problems and jobs-to-be-done. Write user stories with clear acceptance criteria. Define functional and non-functional requirements. Consider edge cases and error handling. Collaborate with design and engineering. Use mockups or prototypes. Prioritize must-haves vs nice-to-haves. Ensure measurable success criteria. Document assumptions and dependencies.",
      category: "Requirements"
    },
    {
      id: "pm-8",
      text: "Explain what product-market fit means and how you know when you've achieved it.",
      keyConcepts: ["product-market fit", "pmf", "validation", "retention", "growth", "word of mouth", "customer feedback", "metrics", "market demand"],
      idealAnswer: "Product-market fit means product satisfies strong market demand. Signs: high retention rates, organic growth, strong word-of-mouth, users upset if product disappeared, sales acceleration, qualitative feedback showing product solves critical pain. Measure through cohort retention, NPS, growth rates. Often described as 'pulling' vs 'pushing' product adoption.",
      category: "Product Strategy"
    }
  ],

  "system-design": [
    {
      id: "sd-1",
      text: "Design a URL shortening service like bit.ly. What are the key components and considerations?",
      keyConcepts: ["url shortener", "hash", "database", "scalability", "distributed", "key generation", "redirect", "analytics", "collision"],
      idealAnswer: "Components: hash generation (base62 encoding), database (URL mapping, user data), redirect service, analytics. Considerations: unique key generation, collision handling, scalability (horizontal partitioning), caching (Redis), analytics tracking, expiration, rate limiting, custom URLs. Use distributed key generation and CDN for performance.",
      category: "System Design"
    },
    {
      id: "sd-2",
      text: "How would you design a distributed cache system? What are the key challenges?",
      keyConcepts: ["distributed cache", "consistency", "sharding", "replication", "eviction", "cache invalidation", "redis", "memcached", "partition"],
      idealAnswer: "Architecture: consistent hashing for data distribution, replication for availability, LRU eviction policy. Challenges: cache invalidation, maintaining consistency, handling failures, hot key issues. Solutions: cache-aside pattern, time-based expiration, write-through/write-back strategies. Consider CAP theorem trade-offs. Use tools like Redis Cluster or Memcached.",
      category: "Distributed Systems"
    },
    {
      id: "sd-3",
      text: "Explain the CAP theorem and how it applies to distributed systems design.",
      keyConcepts: ["cap theorem", "consistency", "availability", "partition tolerance", "distributed", "trade-off", "eventual consistency", "strong consistency"],
      idealAnswer: "CAP theorem: distributed systems can guarantee only 2 of 3: Consistency (all nodes see same data), Availability (every request gets response), Partition tolerance (system works despite network failures). In practice, partition tolerance is mandatory, so choose between CP (strong consistency) or AP (eventual consistency). Examples: traditional databases (CP), Cassandra (AP).",
      category: "Distributed Systems"
    },
    {
      id: "sd-4",
      text: "Design a notification system that can send emails, SMS, and push notifications to millions of users.",
      keyConcepts: ["notification", "queue", "message broker", "scalability", "rate limiting", "retry", "priority", "fan-out", "worker"],
      idealAnswer: "Architecture: message queue (RabbitMQ, Kafka), multiple worker pools per channel, rate limiting per provider. Components: API gateway, notification service, message queue, channel handlers, retry mechanism, user preference service, template service, analytics. Consider priority queues, batching, deduplication, delivery guarantees, monitoring.",
      category: "System Design"
    },
    {
      id: "sd-5",
      text: "How would you design a rate limiter to prevent API abuse?",
      keyConcepts: ["rate limiting", "token bucket", "leaky bucket", "sliding window", "distributed", "redis", "throttling", "quota"],
      idealAnswer: "Algorithms: token bucket (allows bursts), leaky bucket (smooth rate), sliding window log (accurate but memory-intensive), fixed window counters. Implementation: Redis with atomic operations, distributed counters. Consider per-user, per-IP, per-endpoint limits. Return 429 status, include rate limit headers, implement exponential backoff. Handle distributed coordination.",
      category: "API Design"
    },
    {
      id: "sd-6",
      text: "Explain database sharding. What are the benefits and challenges?",
      keyConcepts: ["sharding", "partitioning", "horizontal scaling", "shard key", "distributed database", "rebalancing", "cross-shard queries"],
      idealAnswer: "Sharding distributes data across multiple database instances using shard key (user ID, geographic region). Benefits: horizontal scalability, improved performance, fault isolation. Challenges: choosing shard key, cross-shard queries, rebalancing data, maintaining consistency, increased complexity. Strategies: hash-based, range-based, geographic sharding. Consider directory-based routing.",
      category: "Database Design"
    },
    {
      id: "sd-7",
      text: "How would you design a system to handle millions of concurrent WebSocket connections?",
      keyConcepts: ["websocket", "real-time", "scalability", "load balancing", "connection management", "pub-sub", "redis", "sticky sessions"],
      idealAnswer: "Architecture: multiple WebSocket servers with load balancer (sticky sessions or consistent hashing), Redis pub/sub for message distribution across servers, connection management service, message queue for reliability. Considerations: connection pooling, heartbeat/ping-pong, graceful degradation, horizontal scaling, monitoring connection counts, handling reconnections. Use cloud services like AWS API Gateway or Pusher for simplicity.",
      category: "Real-time Systems"
    },
    {
      id: "sd-8",
      text: "What is eventual consistency and when would you choose it over strong consistency?",
      keyConcepts: ["eventual consistency", "strong consistency", "distributed", "availability", "cap theorem", "conflict resolution", "trade-off"],
      idealAnswer: "Eventual consistency guarantees all replicas will converge to same value eventually, but may be temporarily inconsistent. Strong consistency ensures all reads return most recent write immediately. Choose eventual consistency for: social media feeds, view counts, shopping carts where availability matters more than immediate consistency. Strong consistency for: financial transactions, inventory. Trade-off between latency/availability and consistency.",
      category: "Distributed Systems"
    }
  ]
};

// Get random questions for a role
export function getQuestionsForRole(role, count = 3) {
  const roleQuestions = QUESTIONS[role] || [];
  if (roleQuestions.length === 0) return [];
  
  // Shuffle and return requested count
  const shuffled = [...roleQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Get a specific question by ID
export function getQuestionById(questionId) {
  for (const role in QUESTIONS) {
    const question = QUESTIONS[role].find(q => q.id === questionId);
    if (question) return question;
  }
  return null;
}

// Get all questions for a role (for reference)
export function getAllQuestionsForRole(role) {
  return QUESTIONS[role] || [];
}
