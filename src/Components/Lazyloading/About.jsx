import React from "react";

const About = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>About Page</h2>
      <p>
        This page is lazy loaded using <strong>React.lazy</strong>, which means it
        is loaded only when the user navigates to this route.
      </p>

      <hr />

      <section>
        <h3>Why Lazy Loading?</h3>
        <ul>
          <li> Improves application performance</li>
          <li> Reduces initial JavaScript bundle size</li>
          <li> Faster page rendering</li>
        </ul>
      </section>

      <section>
        <h3>How It Works</h3>
        <p>
          React splits the code into smaller chunks. When the user visits the
          About page, React downloads this chunk on demand.
        </p>
      </section>

      <section>
        <h3>Technology Used</h3>
        <p>
          <strong>React</strong>, <strong>React Router</strong>, and{" "}
          <strong>Suspense</strong> for code splitting.
        </p>
      </section>

      <section>
        <h3>Application Status</h3>
        <p>
          Page Load Status:{" "}
          <span style={{ color: "green" }}>Successfully Loaded</span>
        </p>
      </section>
    </div>
  );
};

export default About;
