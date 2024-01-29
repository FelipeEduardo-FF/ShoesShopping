class ApiClient<T extends IEndpoint> {
  private endpoint: string;

  async Get(Filtro?: string) {
    console.log(this.endpoint);
    // Restante da implementação da função Get
  }

  async GetById(Id?: number) {
    // Implementação da função GetById
  }

  async Put(Value: IEndpoint) {
    // Implementação da função Put
  }

  async Post(Value: IEndpoint) {
    // Implementação da função Post
  }

  async Delete(Value: IEndpoint) {
    // Implementação da função Delete
  }

  constructor(clazzFactory: new () => T) {
    const instance = new clazzFactory();
    this.endpoint = instance.endpoint;
  }
}

export default ApiClient;
