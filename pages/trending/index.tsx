import React from "react";
import { Container, MovieCard, TopDeals } from "@/components";
import { topDeals } from "../../utils/data";
import { GetServerSideProps } from "next";
import { getProducts } from "@/services/products";
import { IProduct } from "@/types";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getProducts("perPage=1");

  return {
    props: {
      trending: data,
    },
  };
};

const Trending = ({ trending }: { trending: IProduct }) => {
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
                    <TopDeals topDeals={topDeals} />
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
