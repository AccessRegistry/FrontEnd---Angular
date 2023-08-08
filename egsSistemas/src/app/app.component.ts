import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dados = {
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    email: '',
    cpf: ''
  };

  constructor(private router: Router) {}

  salvar() {
    // Redirecionar para a página de exibição dos dados cadastrados
    this.router.navigate(['/exibicao'], { state: { dados: this.dados } });
  }

  title = 'egsSistemas';
}
