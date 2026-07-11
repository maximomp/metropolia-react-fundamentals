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
];

function JSAssignmentsList() {
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
}

function ReactBasicsAssignmentsList() {
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
}
function Home() {
  return (
    <>
      <h1>Fundamentals of React.js</h1>
      <div style={{ padding: 20 }}>
        <h2>Assignments</h2>
        <JSAssignmentsList />
        <ReactBasicsAssignmentsList />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {JSassignments.map((assignment) => (
          <Route
            key={assignment.id}
            path={assignment.path}
            element={<assignment.component />}
          />
        ))}
        {ReactBasicsAssignments.map((assignment) => (
          <Route
            key={assignment.id}
            path={assignment.path}
            element={<assignment.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
