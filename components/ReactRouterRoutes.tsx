import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ReactRouterRoutes() {
  if (typeof window === "undefined") {
    return null;
  }

  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);
  if (isServer) return null;

  return (
    <Suspense>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/topics" element={<h1>Topics</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </Router>
    </Suspense>
  );
}
