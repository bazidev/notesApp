import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { TokenStorage } from '../user/token.storage';
import { Router } from '@angular/router';
import { NotesService } from './notes.service';
import { Note } from './note.model';
import { FileService } from '../file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { not } from '@angular/compiler/src/output/output_ast';
import { UserService } from '../user/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  username:string;
  idNote: number;
  title: string;
  body: string;
  updateDate: Date;
  creationDate: Date;
  deleteDate: Date;
  user: UserComponent;
  number: number;

  media: string[] = [];

  progress: { percentage: number } = { percentage: 0 }
  selectedFiles: FileList
  currentFileUpload: File
  notes: Note[] = [];

  constructor(private sanitizer:DomSanitizer,private snackBar: MatSnackBar, private fileService: FileService, private token: TokenStorage, private router: Router, private notesService: NotesService) { }

  ngOnInit() {

    if (this.token.getToken() == null) {
      this.router.navigate(['login']);
    }

    else {
      this.getAllNotes();
      this.username = this.token.getUsername();
    }

  }


 

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)
    this.fileService.pushFileToStorage(this.currentFileUpload).subscribe(event => {

      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log(this.media);

        let file = event['body']['fileDownloadUri'];
        if
        (this.media.indexOf(file) === -1) {
          this.media.push(file);
          this.snackBar.open("Le fichier a été téléchargé", null, {
            duration: 1000,
          });
        }
        else {
          console.log("i ma hehehe");
          this.snackBar.open("le fichier existe déjà", null, {
            duration: 1000,
          });
        }
      }
      else {
        let snackBarRef = this.snackBar.open("le téléchargement d'image a mal tourné");
      }
    })
  }

  save(title,body)
  {
    let note = new Note();
    note.creationDate = new Date();
    note.title = title;
    note.body = body;
    this.media.forEach(image=>{
      body=body+"<img src="+image+"/>";
    });
    note.isPinned = false;
    note.user_id = Number.parseInt(this.token.getToken());
    this.notesService.save(note).subscribe((data) => {
      if(data['id'] !=null){
        this.snackBar.open("la note a été ajouté avec succès", null, {
          duration: 1000,
        });
        this.notes.unshift(note);
        this.media = [];
        
      }
    });

  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.upload();
  }


  getAllNotes() {
    this.notesService.getAll().subscribe((data) => {
      data.slice().reverse().forEach(noteItem => {
        let note = new Note();
        note.id = noteItem['id'];
        note.title = noteItem['title'];
        note.body = noteItem['body'];
        note.isPinned = noteItem['isPinned'];
        note.user_id = noteItem['user_id'];
        this.notes.push(note);
        console.log(note);
      });
    })
  }

}


export class ExpansionOverviewExample {
  panelOpenState = false;
}