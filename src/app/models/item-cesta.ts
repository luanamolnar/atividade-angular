export class ItemCesta {
  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public quantidade: number = 1
  ) {}

  get subtotal(): number {
    return this.preco * this.quantidade;
  }
}