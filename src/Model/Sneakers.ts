class Sneakers implements IEndpoint {
  endpoint: string = "/items";
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  isFavorited: boolean = false;
  favoriteId: number | null = null;
  isAdded: boolean = false;
}

export default Sneakers;
