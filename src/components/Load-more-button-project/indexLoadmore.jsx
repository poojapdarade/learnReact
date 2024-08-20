import { useEffect, useState } from "react";

async function fetchProducts(count) {
  console.log(count);
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );

    const result = await response.json();
    if (result && result.product && result.products.length) {
      setProducts(result.products);
      setLoading(false);
    }
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
    setLoading(false);
    throw e;
  }
}

export function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchProducts(count)
      .then((products) => {})
      .catch((err) => {
        console.log(err);
      });
  }, [count]);

  if (loading) {
    return <div>Loading Data ! Please wait.</div>;
  }

  return (
    <div className="container">
      <div className="product">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button className="Button Container">Load More Button</button>
      </div>
    </div>
  );
}
