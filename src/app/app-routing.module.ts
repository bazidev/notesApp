import { NotesComponent } from './notes/notes.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DeletedComponent } from './deleted/deleted.component';
import { ArchivedComponent } from './archived/archived.component';


const routes: Routes = [
  { path: '' , component : LoginComponent},
  { path:'notes', component: NotesComponent},
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'deleted',component:DeletedComponent},
  {path :'archived',component:ArchivedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
