import React from "react";

function App() {
  const movie = { title: "Inception", year: 2010, director: "Nolan" };
  const { title, year } = movie;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <p>
        The movie "{title}" was released in {year}.
      </p>
    </div>
  );
}

export default App;
