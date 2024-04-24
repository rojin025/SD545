import axios from "axios";
import { useEffect, useState } from "react";

export default axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "content-types": "application/json",
  },
});

function AxiousEg() {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("http://localhost:8000/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);
}
