import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-busca',
  imports: [FormsModule],
  templateUrl: './barra-busca.html',
  styleUrl: './barra-busca.css',
})
export class BarraBusca {
  termo: string = '';

  buscar() {
    console.log('Buscando por:', this.termo);
  }
}