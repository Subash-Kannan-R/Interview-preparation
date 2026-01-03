import React, { useState, useMemo } from "react";

const Usememo =() => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [items, setItems] = useState([5, 3, 8, 1, 2]);

  // With useMemo
  const sortedItems = useMemo(() => {
    console.log("Sorting items...");
    return items.slice().sort((a, b) => {
      return sortOrder === "asc" ? a - b : b - a;
    });
  }, [items, sortOrder]);

  return (
    <div>
      <h1>Sorting Example (With useMemo)</h1>

      {sortedItems.map((item, index) => (
        <span key={index}>{item} </span>
      ))}

      <br /><br />

      <button
        onClick={() =>
          setSortOrder(sortOrder === "asc" ? "desc" : "asc")
        }
      >
        Toggle Sort Order
      </button>
    </div>
  );
}
export default Usememo;