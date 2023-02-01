import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListofregisterComponent } from './pages/listofregister/listofregister.component';
import { RegisterformComponent } from './pages/registerform/registerform.component';

const routes: Routes = [
  { path: '', redirectTo : 'register', pathMatch:'full' },
  { path: 'register', component: RegisterformComponent },
  { path: 'listofregister', component: ListofregisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
