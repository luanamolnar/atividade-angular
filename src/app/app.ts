import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topo } from './topo/topo';
import { Menu } from './menu/menu';
import { BarraBusca } from './barra-busca/barra-busca';
import { Rodape } from './rodape/rodape';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topo, Menu, BarraBusca, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}