import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { ListItemsComponent } from './components/list-items/list-items.component';

const routes: Routes = [
  {path:'home',component:ListItemsComponent},
  {path:'add-item',component:AddItemsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
