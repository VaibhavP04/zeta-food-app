import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  { path: '',  component: HeaderComponent },
  { path: 'item-detail', loadChildren: () => import('./item-detail/item-detail.module').then(m => m.ItemDetailModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
