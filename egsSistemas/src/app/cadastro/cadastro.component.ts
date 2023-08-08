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
  aceitouTermos = false;

  constructor(private router: Router, private dataService: DataService) { }

  salvar() {
    if (this.aceitouTermos) {
      this.dataService.dados.push(this.dados);
      this.router.navigate(['/exibicao']);
    } else {
      alert('Por favor, aceite os termos e condições.');
    }
  }

  aplicarMascaraCPF(cpf: string): string {
    const TAMANHO_MAX_CPF = 14;

    if (!cpf) {
      return '';
    }

    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.slice(0, TAMANHO_MAX_CPF);

    if (cpf.length <= 3) {
      return cpf;
    } else if (cpf.length <= 6) {
      return `${cpf.slice(0, 3)}.${cpf.slice(3)}`;
    } else if (cpf.length <= 9) {
      return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6)}`;
    } else {
      return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
    }
  }

  aplicarMascaraData(data: string): string {
    const TAMANHO_MAX_DATA = 10;

    if (!data) {
      return '';
    }

    data = data.replace(/\D/g, '');
    data = data.slice(0, TAMANHO_MAX_DATA);

    if (data.length <= 2) {
      return data;
    } else if (data.length <= 4) {
      return `${data.slice(0, 2)}/${data.slice(2)}`;
    } else {
      return `${data.slice(0, 2)}/${data.slice(2, 4)}/${data.slice(4)}`;
    }
  }

  aplicarMascaraEmail(email: string): string {
    if (!email) {
      return '';
    }

    // Mantém apenas os caracteres permitidos em um e-mail
    return email.replace(/[^a-zA-Z0-9@._-]/g, '');
  }

}
