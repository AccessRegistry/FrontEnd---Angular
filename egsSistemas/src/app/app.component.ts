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

    // Padrões de máscaras
    cpfMask = '000.000.000-00';
    dataNascimentoMask = '00/00/0000';

  constructor(private router: Router) {}

  salvar() {
    // Redirecionar para a página de exibição dos dados cadastrados
    this.router.navigate(['/exibicao'], { state: { dados: this.dados } });
  }

  title = 'egsSistemas';
}
