import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ExibicaoComponent } from './exibicao/exibicao.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'exibicao', component: ExibicaoComponent },
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
