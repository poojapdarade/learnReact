import { useEffect, useState } from "react";

export function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json;
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => fetchProducts(), []);

  return <div className="container"></div>;
}
