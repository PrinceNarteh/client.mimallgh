import { Container, MovieCard, TopDeals } from "@/components";
import { getProducts } from "@/services/products";
import { topDeals } from "@/utils/data";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";

const Trending = () => {
  const { category } = useParams();
  // const { data: trending } = useQuery({
  //   queryKey: ["trending", category],
  //   queryFn: () => getProducts("perPage=1"),
  // });
  return (
    <Container>
      <div className="mx-auto w-11/12 py-7">
        <div className="w-full">
          <div className="mt-5">
            <div className="flex flex-col">
              {Array(5)
                .fill(null)
                .map((trend, idx) => (
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
