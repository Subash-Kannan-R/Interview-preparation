import { useState } from "react";

const Usestatecart = () => {

  const initialProducts = [
    { id: 1, name: "iPhone 16", price: 70000 },
    { id: 2, name: "Airpods 2nd Gen", price: 20000 },
    { id: 3, name: "MacBook Pro", price: 80000 },
    { id: 4, name: "Samsung Galaxy", price: 60000 }
  ];

  const [products, setProducts] = useState(initialProducts);

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const deleteAll = () => {
    setProducts([]);
  };
const Reset = () =>{
    setProducts(initialProducts);
}
  return (
    <>
      <h3>Items in Cart: {products.length}</h3>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name}, Rs.{product.price}
          </p>

          <button onClick={() => deleteProduct(product.id)}>
            Delete
          </button>
        </div>
      ))}

      {products.length > 0 && (
        <button onClick={deleteAll}>Delete All</button>
      )}
       <button onClick={Reset}>Reset All</button>
    </>
  );
};

export default Usestatecart;
