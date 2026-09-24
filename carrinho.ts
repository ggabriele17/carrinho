import { Component, inject } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';

@Component({
  imports: [],
  selector: 'app-carrinho',
  styleUrl: './carrinho.scss',
  templateUrl: './carrinho.html',
})
export class Carrinho {
  readonly #carrinhoService = inject(CarrinhoService)

  protected readonly quant =
  this.#carrinhoService.qtdItens()
}
