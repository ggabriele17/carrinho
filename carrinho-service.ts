import { computed, Service, signal } from '@angular/core';
import { Item } from './item';

@Service()
export class CarrinhoService {
  readonly #_itens = signal<Item[]>([])
  readonly itens = this.#_itens.asReadonly()
  readonly qtdItens = computed(() => {
    let qtd = 0
    this.#_itens().forEach(item => {
      qtd += item.quantidade
    })
    return qtd
  })
  adicionar(novos: Item): boolean {
    if (!this.estaAdicionado(novo)) {
      this.#_itens.update(lista => [...lista, novo])
      console.log(this.itens())
      return true
    }
    return false
  }
  estaAdicionado(it: Item): boolean {
    return this.#_itens().includes(it)
  }
  aumentarQuantidade(it: Item) {
  }
    
}