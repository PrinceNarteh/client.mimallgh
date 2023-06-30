export default function (items: any[]) {
  const total: number = items.reduce(
    (amt, curItem) => amt + curItem.price * curItem.quantity,
    0
  );
  return parseInt(total.toFixed(2), 10);
}
