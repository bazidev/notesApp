import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NoteComponent } from './note/note.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

import { MatFormFieldModule,  MatToolbarModule, MatCheckboxModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NoteComponent,
    NavbarComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
   ],

   imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule
  ],
  exports: [
    MatExpansionModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
