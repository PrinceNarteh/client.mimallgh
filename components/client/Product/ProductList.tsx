"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { Loader } from "@/components/server/Loader";
import { getProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";

const ProductList = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", { category: "food", page: 12 }],
    queryFn: () => getProducts("category=food&perPage=12"),
  });

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {products?.data[0].data.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
