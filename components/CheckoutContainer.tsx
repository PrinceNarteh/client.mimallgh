import React from "react";
import { Container, OrderSummary } from "./index";

export const CheckoutContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Container>
      <div className="mx-auto grid w-10/12 gap-10 pt-5 md:grid-cols-8">
        <div className="col-span-8 w-full md:col-span-3">{children}</div>
        <div className="col-span-8 md:col-span-5">
          <OrderSummary />
        </div>
      </div>
    </Container>
  );
};
