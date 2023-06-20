"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useProductsContext } from "@/context/products_context";
import { single_product_url as url } from "@/utils/constants";
import { formatPrice } from "@/utils/helpers";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import AddToCart from "@/components/AddToCart";
import Stars from "@/components/Stars";
import PageHero from "@/components/PageHero";

const SingleProductPage = ({ params }) => {
  const router = useRouter();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${params?.id}`);
  }, [params?.id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <main>
      <PageHero title={name} product />
    </main>
  );
};

export default SingleProductPage;
