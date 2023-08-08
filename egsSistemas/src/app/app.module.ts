import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ExibicaoComponent } from './exibicao/exibicao.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ExibicaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicione o FormsModule aqui
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
