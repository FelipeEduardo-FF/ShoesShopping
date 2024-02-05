import Sneakers from "./Sneakers";

class Order implements IEndpoint {
  endpoint: string = "/order";
  items: Sneakers[];
  totalPrice: number;
}

export default Order;
