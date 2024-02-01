import axiosapi from "./axiosapi";

class ApiClient<T extends IEndpoint> {
  private endpoint: string;

  async Get(Filtro?: string): Promise<T[]> {
    var filtro = Filtro ? Filtro : "";
    const { data } = await axiosapi.get<T[]>(this.endpoint + filtro);

    return data;
  }

  async GetById(Id?: number) {
    // Implementação da função GetById
  }

  async Put(Value: IEndpoint) {
    // Implementação da função Put
  }

  async Post<T>(Value: T) {
    const { data } = await axiosapi.post(this.endpoint, Value);

    return data;
  }

  async Delete(Id: number) {
    const { data } = await axiosapi.delete(this.endpoint + "/" + Id);

    return data;
  }

  constructor(clazzFactory: new () => T) {
    const instance = new clazzFactory();
    this.endpoint = instance.endpoint;
  }
}

export default ApiClient;
