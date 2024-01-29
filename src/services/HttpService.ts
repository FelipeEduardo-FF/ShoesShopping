class ApiClient {
  private clazz: IEndpoint;

  constructor(clazz: IEndpoint) {
    this.clazz = clazz;
  }

  async Get(Filtro?: string) {
    const instance = new this.clazz();
    const endpoint = instance.endpoint;
    // Restante da implementação da função Get
  }

  async GetById(Id?: number) {
    const instance = new this.clazz();
    const endpoint = instance.endpoint;
    // Restante da implementação da função GetById
  }

  async Put(Value: HasEndpoint) {
    const instance = new this.clazz();
    const endpoint = instance.endpoint;
    // Restante da implementação da função Put
  }

  async Post(Value: HasEndpoint) {
    const instance = new this.clazz();
    const endpoint = instance.endpoint;
    // Restante da implementação da função Post
  }

  async Delete(Value: HasEndpoint) {
    const instance = new this.clazz();
    const endpoint = instance.endpoint;
    // Restante da implementação da função Delete
  }
}

export default ApiClient;
