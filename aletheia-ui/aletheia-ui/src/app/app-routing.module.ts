import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandasPesquisaComponent } from './demandas/demandas-pesquisa/demandas-pesquisa.component';
import { DemandasCadastroComponent } from './demandas/demandas-cadastro/demandas-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoasCadastroComponent } from './pessoas/pessoas-cadastro/pessoas-cadastro.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: '', redirectTo: 'demandas', pathMatch: 'full' },
  { path: 'demandas', component: DemandasPesquisaComponent },
  { path: 'demandas/novo', component: DemandasCadastroComponent },
  { path: 'demandas/:codigo', component: DemandasCadastroComponent },
  { path: 'pessoas', component: PessoasPesquisaComponent },
  { path: 'pessoas/novo', component: PessoasCadastroComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
 ],
 exports: [RouterModule]
})
export class AppRoutingModule { }
