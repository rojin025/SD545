import { useSearchParams, useParams } from "react-router-dom";
import { ProductType } from "../../types";

interface Props {
  products: ProductType[];
}

export default function ProductDetails({ products }: Props) {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      {id ? <h3>Product id : {id}</h3> : <h3>Please Selete a Product!</h3>}
    </div>
  );
}
