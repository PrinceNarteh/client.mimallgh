import { useCartSelector } from "@/store/features/cart/cartSlice";
import { ICartItem } from "@/types";

export const OrderSummary = () => {
  const { items, deliveryCharge } = useCartSelector();

  const totalAmount = items.reduce(
    (amt, item) => amt + item.price * item.quantity,
    0
  );

  console.log(deliveryCharge);

  const totalCharge = totalAmount + deliveryCharge;

  return (
    <div className="mx-auto w-full max-w-3xl overflow-x-auto rounded-md border border-gray-400 p-5 shadow">
      <div className="w-full space-y-5">
        <h4 className="sh-underline relative md:text-2xl">Orders</h4>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Seller
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Unit Price (¢)
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Amt (¢)
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((cartItem, idx) => (
                <tr key={idx} className="border-b bg-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    {cartItem.productName}
                  </th>
                  <td className="px-6 py-4">{cartItem.shopName}</td>
                  <td className="px-6 py-4 text-center">{cartItem.price}</td>
                  <td className="px-6 py-4 text-center">{cartItem.quantity}</td>
                  <td className="px-6 py-4 text-center">
                    {cartItem.quantity * cartItem.price}
                  </td>
                </tr>
              ))}
              <tr className="bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-2 font-bold text-gray-900"
                >
                  Sub-Total
                </th>
                <td className="px-6 py-2"></td>
                <td className="px-6 py-2"></td>
                <td className="px-6 py-2"></td>
                <td className="px-6 py-2 text-center">{totalAmount}</td>
              </tr>
              {deliveryCharge !== 0 ? (
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-2 font-bold text-gray-900"
                  >
                    Delivery Charge
                  </th>
                  <td className="px-6 py-2"></td>
                  <td className="px-6 py-2"></td>
                  <td className="px-6 py-2"></td>
                  <td className="px-6 py-2 text-center">{deliveryCharge}</td>
                </tr>
              ) : null}
              <tr className="border-y-2 bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-bold text-gray-900"
                >
                  Total
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-center">{totalCharge}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
