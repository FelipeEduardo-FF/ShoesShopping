import Sneakers from "../Model/Sneakers";
import ApiClient from "../services/HttpService";

class sneakersRepo {
  async get(searchQuery: string, sortBy: string): Promise<Sneakers[]> {
    const sneakerrepo = new ApiClient(Sneakers);
    const sneakers = await sneakerrepo.Get(
      `?title=*${searchQuery}*&sortBy=${sortBy}`
    );

    return sneakers.map((item) => {
      const sneaker = new Sneakers();
      Object.assign(sneaker, item);
      return sneaker;
    });
  }
}

export default new sneakersRepo();
