import { useState, useRef, useEffect } from "react";

const Useref = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  // Auto-focus name input when component loads
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);

    // Clear form
    setName("");
    setEmail("");

    // Focus back to name input
    nameRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          ref={nameRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => emailRef.current.focus()}
        />
      </label>

      <br />

      <label>
        Email:
        <input
          ref={emailRef}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Useref;
