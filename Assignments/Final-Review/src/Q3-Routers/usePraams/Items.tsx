import { Link, Outlet } from "react-router-dom";

const products = [
  { id: 1, title: "Apple Iphone", content: "iPhone is the best phone ever." },
  { id: 2, title: "Apple MacBook", content: "MacBook is not Laptop." },
  { id: 3, title: "Apple Ipad", content: "iPad is Not Computer." },
];
export default function Items() {
  return (
    <>
      <h2>Items</h2>
      <div>
        {products.map((product, index) => (
          <li key={index}>
            <Link
              to={`details/${product.id}/${product.title}/${product.content}`}
            >
              {product.title}
            </Link>
          </li>
        ))}
      </div>

      <Outlet />
    </>
  );
}
