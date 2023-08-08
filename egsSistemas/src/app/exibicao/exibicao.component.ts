import { Component, OnInit } from '@angular/core';
import {  Router  } from '@angular/router';
import { DataService } from '../services/service';

@Component({
  selector: 'app-exibicao',
  templateUrl: './exibicao.component.html',
  styleUrls: ['./exibicao.component.css']
})
export class ExibicaoComponent implements OnInit {
  dados: any[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dados = this.dataService.dados;
  }

  voltarTelaHome() {
    this.router.navigate(['/cadastro']);
  }

  get ultimoCadastro() {
    if (this.dados.length > 0) {
      const ultimo = this.dados[this.dados.length - 1];
      return `${ultimo.nome} ${ultimo.sobrenome}`;
    }
    return '';
  }

}
