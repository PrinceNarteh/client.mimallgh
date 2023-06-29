import { Container } from "@/components";
import ShopCard from "@/components/client/Delivery/ShopCard";
import Header from "@/components/client/Header";
import ReactQueryHydrate from "@/components/client/ReactQueryHydrate";
import getQueryClient from "@/lib/getQueryClient";
import { getAllStores } from "@/services/store";
import { dehydrate } from "@tanstack/react-query";

export default async function ProductByCategory() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["stores"], getAllStores);
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <Container>
        <div className="bg-gray-300 bg-opacity-30">
          <div className="md:w-11/12 mx-auto p-3 md:p-5">
            <div className="grid grid-cols-1 gap-5">
              <div className="col-span-12 xl:col-span-9 space-y-5">
                <Header value="categoryId" />
                <ShopCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ReactQueryHydrate>
  );
}
