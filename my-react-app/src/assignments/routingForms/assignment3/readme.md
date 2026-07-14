### **App Build Summary**

#### **1. Approach**

The application was built following a modular, component-driven architecture, carefully adapted to the specific constraints of the academic repository structure.

- **Structure Adaptation:** To seamlessly integrate the project inside the assigned directory (`src/assignments/routingForms/assignment3`), I restructured the typical root-level boilerplate. I encapsulated the entire routing logic, views, and components within the assignment's specific subfolder. This design decision ensures high cohesion and keeps the global project tree clean and organized.
- **Routing & Styling:** Main views were separated into a dedicated `pages` directory (comprising `Home`, `About`, and `Contact`). Standard declarative routing was implemented locally, and styling was handled using **CSS Modules** (`styles.module.css`) to isolate styles and prevent global leakage.

#### **2. Challenges**

- **Context Isolation in Nested Folders:** The primary challenge was adapting a fully routed, multi-page application to run nested deep within a pre-existing repository structure without breaking relative imports, asset paths, or global routing mechanisms.
- **Style Encapsulation:** Preventing page-specific styles from colliding with other assignments or global layouts in the shared repository. This was solved by strictly enforcing CSS Modules to scope styles locally to their respective components.

#### **3. What I Learned / Takeaways**

- **Scalability in Nested Environments:** Designing under rigid folder constraints highlighted the importance of building highly portable React components. Configuring routers to handle nested sub-routes is a practical exercise in managing relative paths and entry points.
- **Component Granularity & Portability:** Establishing a clean directory pattern (pairing a page folder with its own `index.jsx` and adjacent stylesheet) is a reliable industry practice that simplifies maintenance and scales gracefully, even for small-scale academic assignments.

### Assignment 3 in github

https://github.com/maximomp/metropolia-react-fundamentals/tree/main/my-react-app/src/assignments/routingForms/assignment3

## Path in local project

http://localhost:5173/routing-forms/assignment3
