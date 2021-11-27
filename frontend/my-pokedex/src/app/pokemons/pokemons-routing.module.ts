import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsPage } from './pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonsPage
  },
  {
    path: 'view/:id',
    loadChildren: () => import('./pokemons-view/pokemons-view.module').then( m => m.PokemonsViewPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pokemons-edit/pokemons-edit.module').then( m => m.PokemonsEditPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pokemons-create/pokemons-create.module').then( m => m.PokemonsCreatePageModule)
  },
  {
    path: 'delete/:id',
    loadChildren: () => import('./pokemons-delete/pokemons-delete.module').then( m => m.PokemonsDeletePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsPageRoutingModule {}
