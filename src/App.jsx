import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./Components/Lazyloading/Home"));
const About = lazy(() => import("./Components/Lazyloading/About"));

const App = () => {
  return (
    <div>
      <h1>React Lazy Loading Example</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;