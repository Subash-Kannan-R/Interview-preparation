import React from "react";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Home Page</h2>
      <p>This page is lazy loaded using <strong>React.lazy</strong> and <strong>Suspense</strong>.</p>

      <hr />

      <section>
        <h3>Features</h3>
        <ul>
          <li> Faster initial page load</li>
          <li>Reduced bundle size</li>
          <li>Better performance</li>
          <li> Loads only when route is visited</li>
        </ul>
      </section>

      <section>
        <h3>Use Case</h3>
        <p>
          Lazy loading is commonly used in large applications where loading all
          components at once can impact performance. By lazy loading routes,
          only the required page is fetched.
        </p>
      </section>

      <section>
        <h3>Status</h3>
        <p>
          Current Page Status: <span style={{ color: "green" }}>Loaded Successfully</span>
        </p>
      </section>
    </div>
  );
};

export default Home;
