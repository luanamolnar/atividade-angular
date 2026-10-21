import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-busca',
  imports: [FormsModule],
  templateUrl: './barra-busca.html',
  styleUrl: './barra-busca.css',
})
export class BarraBusca implements OnInit {
  termo: string = '';

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.termo = localStorage.getItem('termoBusca') ?? '';
    }
  }

  salvar() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('termoBusca', this.termo);
    }
  }

  buscar() {
    this.salvar();
    console.log('Buscando por:', this.termo);
  }
}