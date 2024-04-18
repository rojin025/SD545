import { ProductType } from "../../types";

interface Props {
  product: ProductType;
}

function Product({ product }: Props) {
  return (
    <div>
      <div>{product.Title}</div>
    </div>
  );
}

export default Product;
