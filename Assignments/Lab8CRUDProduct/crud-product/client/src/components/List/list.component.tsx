import { useState } from "react";
import PubSub from "pubsub-js";
import Product from "../../types/product.type";

import "./List.css";
import classNames from "classnames";

type Props = {
  products: Product[];
};

export default function List(props: Props) {
  const { products } = props;

  const [activeId, setActiveId] = useState<number>(-1);

  const showDetail = (prod: Product) => {
    PubSub.publish("products", prod);
    setActiveId(prod.id);
  };

  return (
    <div className="col">
      <ul className="list-group">
        {products.map((prod) => (
          <li
            key={prod.id}
            className={classNames("list-group-item", {
              highlighted: activeId === prod.id,
            })}
            onClick={(e) => showDetail(prod)}
          >
            {prod.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
