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
import ProductImages from "@/components/ProductImages";

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
      <section className="w-full sm:px-[80px] px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full min-h-[calc(80vh-10rem)]">
          <Link href="/products" className="btn mt-5">
            back to products
          </Link>
          <div className="grid gap-[4rem] mt-[2rem] md:grid-cols-[1fr,1fr] items-center ">
            <ProductImages images={images} />
            <section>
              <h2 className="font-700">{name}</h2>
              <Stars stars={stars} reviews={reviews} />
              <h5 className="text-clr-primary-5 md:font-[1.25rem]">
                {formatPrice(price)}
              </h5>
              <p className="leading-[2] max-w-[45em]">{description}</p>
              <p className="capitalize w-[300px] grid grid-cols-[125px,1fr]">
                <span className="font-[700]">Available : </span>
                {stock > 0 ? "In stock" : "out of stock"}
              </p>
              <p className="capitalize w-[300px] grid grid-cols-[125px,1fr]">
                <span className="font-[700]">SKU :</span>
                {sku}
              </p>
              <p className="capitalize w-[300px] grid grid-cols-[125px,1fr]">
                <span className="font-[700]">Brand :</span>
                {company}
              </p>
              <hr />
              {stock > 0 && <AddToCart product={product} />}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProductPage;
