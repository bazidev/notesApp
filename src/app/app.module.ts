import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NotesComponent } from './notes/notes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

import { MatFormFieldModule,  MatToolbarModule, MatCheckboxModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { TokenStorage } from './user/token.storage';
import { NoteComponent } from './note/note.component';
import { NotesService } from './notes/notes.service';
import { FileService } from './file.service';
import { DeletedComponent } from './deleted/deleted.component';
import { ArchivedComponent } from './archived/archived.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NotesComponent,
    NavbarComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    NoteComponent,
    DeletedComponent,
    ArchivedComponent,
   ],

   imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCardModule
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
  providers: [UserService,TokenStorage,NotesService,FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
