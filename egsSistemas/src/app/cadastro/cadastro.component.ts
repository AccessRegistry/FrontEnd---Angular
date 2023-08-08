import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  dados = {
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    email: '',
    cpf: ''
  };

  constructor(private router: Router,  private dataService: DataService) {}

  salvar() {
    this.dataService.dados.push(this.dados);

    // Redireciona para a página de exibição dos dados cadastrados
    this.router.navigate(['/exibicao']);
  }
}
