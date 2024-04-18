import React from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductDetails() {
  const [searchParams, setSearchParams] = useSearchParams();

  const Id = searchParams.get("Id");
  console.log(Id);
  return (
    <div>
      <h3>Please Selete a Product!</h3>
      <h3>{Id}</h3>
    </div>
  );
}
