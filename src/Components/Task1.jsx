import React from "react";

const Task1= () => {
  const ProductCard = ({ name, price }) => {
    return (
      <div>
        <h3>{name}</h3>
        <p>₹{price}</p>
      </div>
    );
  };

 
  const products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile", price: 25000},
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 800 }
  ];

  return (
    <div>
      <h2>Product List</h2>

      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}     
            name={product.name}
            price={product.price}
            />  
        ))}
      </div>
    </div>
  );
};



export default Task1;
