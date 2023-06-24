import React from "react";
import { Container, MovieCard, TopDeals } from "@/components";
import { GetServerSideProps } from "next";
import { getProducts } from "@/services/products";
import { IProduct } from "@/types";
import { useRouter } from "next/router";
import { topDeals } from "@/utils/data";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getProducts("perPage=1");

  return {
    props: {
      trending: data,
    },
  };
};

const Trending = ({ trending }: { trending: IProduct }) => {
  const {
    query: { category },
  } = useRouter();
  return (
    <Container>
      <div className="mx-auto w-11/12 py-7">
        <div className="w-full">
          <div className="mt-5">
            <div className="flex flex-col">
              {trending.data.map((trend, idx) => (
                <div className="flex flex-col">
                  <div className="grid gap-5 grid-auto-fit-md">
                    {Array(5)
                      .fill(null)
                      .map(() => (
                        <MovieCard />
                      ))}
                  </div>
                  <div className="my-5">
                    <TopDeals
                      topDeals={topDeals}
                      category={category as string}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Trending;
