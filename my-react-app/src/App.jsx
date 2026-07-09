import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Assignment6App from "./assignments/javaScriptFoundations/assignment6/App.jsx";
import Assignment5App from "./assignments/javaScriptFoundations/assignment5/App.jsx";
import Assignment4App from "./assignments/javaScriptFoundations/assignment4/App.jsx";
import Assignment3App from "./assignments/javaScriptFoundations/assignment3/App.jsx";
import Assignment2App from "./assignments/javaScriptFoundations/assignment2/App.jsx";
import Assignment1App from "./assignments/javaScriptFoundations/assignment1/App.jsx";
const JSassignments = [
  {
    id: 1,
    name: "Assignment 1",
    path: "/assignment1",
    component: Assignment1App,
  },
  {
    id: 2,
    name: "Assignment 2",
    path: "/assignment2",
    component: Assignment2App,
  },
  {
    id: 3,
    name: "Assignment 3",
    path: "/assignment3",
    component: Assignment3App,
  },
  {
    id: 4,
    name: "Assignment 4",
    path: "/assignment4",
    component: Assignment4App,
  },
  {
    id: 5,
    name: "Assignment 5",
    path: "/assignment5",
    component: Assignment5App,
  },
  {
    id: 6,
    name: "Assignment 6",
    path: "/assignment6",
    component: Assignment6App,
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
function Home() {
  return (
    <>
      <h1>Fundamentals of React.js</h1>
      <div style={{ padding: 20 }}>
        <h2>Assignments</h2>
        <JSAssignmentsList />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
