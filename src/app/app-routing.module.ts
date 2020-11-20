import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PizzahomeComponent} from './pizzahome/pizzahome.component';
import{OrdersComponent} from './orders/orders.component';

const routes: Routes = [
  {path:'',redirectTo:'/pizzahome',pathMatch:'full'},
  {path:'pizzahome',component:PizzahomeComponent,data:{title:'pizzahome'}},
  {path:'orders',component:OrdersComponent,data:{title:'pizzahome'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
