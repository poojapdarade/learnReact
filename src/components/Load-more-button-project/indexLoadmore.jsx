import { useEffect, useState } from "react";

async function fetchProducts(count) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );

    const result = await response.json();

    return result;
  } catch (e) {
    throw e;
  }
}

export function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetchProducts(count)
      .then((result) => {
        const products = result.products;
        if (products && products.length) {
          setProducts(products);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [count]);

  if (loading) {
    return <div>Loading Data ! Please wait.</div>;
  }

  return (
    <div className="container">
      <div className="product">
        {products?.length > 0 &&
          products.map((item) => (
            <div key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
      </div>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="Button Container"
        >
          Load More Button
        </button>
      </div>
    </div>
  );
}
