import React, { useEffect, useState } from "react";

export default function Useeffect() {
  const [toggle, setToggle] = useState(false);

  console.log("Timer Component Mounted");

  const check = () =>{
    setToggle(!toggle)
  }

  return (
    <div>
      <button
        onClick={check} >
        Click Me
      </button>

      {toggle && <DemoComponent />}
    </div>
  );
}

function DemoComponent() {
  console.log("Demo Component Mounted");

  useEffect(() => {
    console.log("useEffect in Demo Component");

    const taskOne = setInterval(() => {
      console.log("Testing");
    }, 1000);

    return () => {
      clearInterval(taskOne);
      console.log(
        "Clean up function called and Demo Component Unmounted"
      );
    };
  }, []);
  
  return <h1>I'm from Demo Component</h1>;
}
