import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Assignment6App from "./assignments/javaScriptFoundations/assignment6/App";
import Assignment5App from "./assignments/javaScriptFoundations/assignment5/App";
import Assignment4App from "./assignments/javaScriptFoundations/assignment4/App";
import Assignment3App from "./assignments/javaScriptFoundations/assignment3/App";
import Assignment2App from "./assignments/javaScriptFoundations/assignment2/App";
import Assignment1App from "./assignments/javaScriptFoundations/assignment1/App";
// Import React Basics assignments
import ReactBasicsAssignment1App from "./assignments/reactBasics/assignment1/App";
import ReactBasicsAssignment2App from "./assignments/reactBasics/assignment2/App";
import ReactBasicsAssignment3App from "./assignments/reactBasics/assignment3/App";
import ReactBasicsAssignment4App from "./assignments/reactBasics/assignment4/Index";
import ReactBasicsAssignment5App from "./assignments/reactBasics/assignment5/Index";
import ReactBasicsAssignment6App from "./assignments/reactBasics/assignment6/Index";
// Import React Hooks assignments
import ReactHooksAssignment1App from "./assignments/reactHooks/assignment1/Index";
import ReactHooksAssignment2App from "./assignments/reactHooks/assignment2/Index";
import ReactHooksAssignment3App from "./assignments/reactHooks/assignment3/App";
import ReactHooksAssignment4App from "./assignments/reactHooks/assignment4/App";
// Import Component Architecture assignments
import ComponentArchitectureAssignment1App from "./assignments/componentArchitecture/assignment1/App";
import ComponentArchitectureAssignment2App from "./assignments/componentArchitecture/assignment2/Index";
import ComponentArchitectureAssignment3App from "./assignments/componentArchitecture/assignment3/App";
import ComponentArchitectureAssignment4App from "./assignments/componentArchitecture/assignment4/App";
import ComponentArchitectureAssignment5App from "./assignments/componentArchitecture/assignment5/App";
// Import Routing and Forms assignments
import RoutingFormsAssignment1App from "./assignments/routingForms/assignment1/App";
import RoutingFormsAssignment2App from "./assignments/routingForms/assignment2/App";
import RoutingFormsAssignment3App from "./assignments/routingForms/assignment3/App";

const JSassignments = [
  {
    id: 1,
    name: "Assignment 1",
    path: "/javaScript-foundations/assignment1",
    component: Assignment1App,
  },
  {
    id: 2,
    name: "Assignment 2",
    path: "/javaScript-foundations/assignment2",
    component: Assignment2App,
  },
  {
    id: 3,
    name: "Assignment 3",
    path: "/javaScript-foundations/assignment3",
    component: Assignment3App,
  },
  {
    id: 4,
    name: "Assignment 4",
    path: "/javaScript-foundations/assignment4",
    component: Assignment4App,
  },
  {
    id: 5,
    name: "Assignment 5",
    path: "/javaScript-foundations/assignment5",
    component: Assignment5App,
  },
  {
    id: 6,
    name: "Assignment 6",
    path: "/javaScript-foundations/assignment6",
    component: Assignment6App,
  },
];

const ReactBasicsAssignments = [
  {
    id: 1,
    name: "Assignment 1",
    path: "/react-basics/assignment1",
    component: ReactBasicsAssignment1App,
  },
  {
    id: 2,
    name: "Assignment 2",
    path: "/react-basics/assignment2",
    component: ReactBasicsAssignment2App,
  },
  {
    id: 3,
    name: "Assignment 3",
    path: "/react-basics/assignment3",
    component: ReactBasicsAssignment3App,
  },
  {
    id: 4,
    name: "Assignment 4",
    path: "/react-basics/assignment4",
    component: ReactBasicsAssignment4App,
  },
  {
    id: 5,
    name: "Assignment 5",
    path: "/react-basics/assignment5",
    component: ReactBasicsAssignment5App,
  },
  {
    id: 6,
    name: "Assignment 6",
    path: "/react-basics/assignment6",
    component: ReactBasicsAssignment6App,
  },
];

const ReactHooksAssignments = [
  {
    id: 1,
    name: "Assignment 1",
    path: "/react-hooks/assignment1",
    component: ReactHooksAssignment1App,
  },
  {
    id: 2,
    name: "Assignment 2",
    path: "/react-hooks/assignment2",
    component: ReactHooksAssignment2App,
  },
  {
    id: 3,
    name: "Assignment 3",
    path: "/react-hooks/assignment3",
    component: ReactHooksAssignment3App,
  },
  {
    id: 4,
    name: "Assignment 4",
    path: "/react-hooks/assignment4",
    component: ReactHooksAssignment4App,
  },
];

const ComponentAchitectureAssignments = [
  {
    id: 1,
    name: "Assignment 1",
    path: "/component-architecture/assignment1",
    component: ComponentArchitectureAssignment1App,
  },
  {
    id: 2,
    name: "Assignment 2",
    path: "/component-architecture/assignment2",
    component: ComponentArchitectureAssignment2App,
  },
  {
    id: 3,
    name: "Assignment 3",
    path: "/component-architecture/assignment3",
    component: ComponentArchitectureAssignment3App,
  },
  {
    id: 4,
    name: "Assignment 4",
    path: "/component-architecture/assignment4",
    component: ComponentArchitectureAssignment4App,
  },
  {
    id: 5,
    name: "Assignment 5",
    path: "/component-architecture/assignment5",
    component: ComponentArchitectureAssignment5App,
  },
];

const RoutingFormsAssignments = [
  {
    id: 1,
    name: "Assignment 1",
    path: "/routing-forms/assignment1",
    component: RoutingFormsAssignment1App,
  },
  {
    id: 2,
    name: "Assignment 2",
    path: "/routing-forms/assignment2",
    component: RoutingFormsAssignment2App,
  },
  {
    id: 3,
    name: "Assignment 3",
    path: "/routing-forms/assignment3/*",
    component: RoutingFormsAssignment3App,
  },
];

const JSAssignmentsList = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>JavaScript Foundations Assignments</h2>
      <ul>
        {JSassignments.map((assignment) => (
          <li key={assignment.id}>
            <Link to={assignment.path}>{assignment.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ReactBasicsAssignmentsList = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>React Basics Assignments</h2>
      <ul>
        {ReactBasicsAssignments.map((assignment) => (
          <li key={assignment.id}>
            <Link to={assignment.path}>{assignment.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ReactHooksAssignmentsList = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>React Hooks Assignments</h2>
      <ul>
        {ReactHooksAssignments.map((assignment) => (
          <li key={assignment.id}>
            <Link to={assignment.path}>{assignment.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ComponentAchitectureAssignmentsList = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Component Architecture Assignments</h2>
      <ul>
        {ComponentAchitectureAssignments.map((assignment) => (
          <li key={assignment.id}>
            <Link to={assignment.path}>{assignment.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const RoutingFormsAssignmentsList = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Routing and Forms Assignments</h2>
      <ul>
        {RoutingFormsAssignments.map((assignment) => (
          <li key={assignment.id}>
            <Link to={assignment.path.replace("/*", "")}>
              {assignment.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const Home = () => {
  return (
    <>
      <h1>Fundamentals of React.js</h1>
      <div style={{ padding: 20 }}>
        <h2>Assignments</h2>
        <JSAssignmentsList />
        <ReactBasicsAssignmentsList />
        <ReactHooksAssignmentsList />
        <ComponentAchitectureAssignmentsList />
        <RoutingFormsAssignmentsList />
      </div>
    </>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  React.useEffect(() => {
    const bg = darkMode ? "#16171d" : "#ffffff";
    const text = darkMode ? "#f3f4f6" : "#1f2937";

    document.documentElement.style.setProperty("--bg", bg);
    document.body.style.backgroundColor = bg;
    document.body.style.color = text;
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {JSassignments.map((assignment) => (
          <Route
            key={assignment.id}
            path={assignment.path}
            element={
              <assignment.component
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
              />
            }
          />
        ))}
        {ReactBasicsAssignments.map((assignment) => (
          <Route
            key={assignment.id}
            path={assignment.path}
            element={
              <assignment.component
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
              />
            }
          />
        ))}
        {ReactHooksAssignments.map((assignment) => (
          <Route
            key={assignment.id}
            path={assignment.path}
            element={
              <assignment.component
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
              />
            }
          />
        ))}
        {ComponentAchitectureAssignments.map((assignment) => (
          <Route
            key={assignment.id}
            path={assignment.path}
            element={
              <assignment.component
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
              />
            }
          />
        ))}
        {RoutingFormsAssignments.map((assignment) => (
          <Route
            key={assignment.id}
            path={assignment.path}
            element={
              <assignment.component
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
              />
            }
          />
        ))}
      </Routes>
      <p onClick={toggleDarkMode}>Toggle {darkMode ? "Light" : "Dark"} Mode</p>
    </BrowserRouter>
  );
};

export default App;
