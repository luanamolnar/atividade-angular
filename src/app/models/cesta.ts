import { ItemCesta } from './item-cesta';

export class Cesta {
  itens: ItemCesta[] = [];

  adicionar(item: ItemCesta) {
    const existente = this.itens.find((i) => i.id === item.id);
    if (existente) {
      existente.quantidade += item.quantidade;
    } else {
      this.itens.push(item);
    }
  }

  remover(id: number) {
    this.itens = this.itens.filter((i) => i.id !== id);
  }

  get total(): number {
    return this.itens.reduce((soma, i) => soma + i.subtotal, 0);
  }
}