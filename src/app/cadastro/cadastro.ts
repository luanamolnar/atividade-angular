import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  nome: string = '';
  email: string = '';
  senha: string = '';

  cadastrar() {
    console.log('Cadastro:', this.nome, this.email, this.senha);
    alert('Cadastro realizado com sucesso!');
  }
}