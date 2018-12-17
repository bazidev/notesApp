import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { TokenStorage } from '../user/token.storage';
import { Router } from '@angular/router';
import { NotesService } from '../notes/notes.service';
import { Note } from '../notes/note.model';
import { FileService } from '../file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { not } from '@angular/compiler/src/output/output_ast';
import { UserService } from '../user/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {

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



  getAllNotes() {
    this.notesService.getAll().subscribe((data) => {
      data.slice().reverse().forEach(noteItem => {
        let note = new Note();
        note.id = noteItem['id'];
        note.title = noteItem['title'];
        note.body = noteItem['body'];
        note.isPinned = noteItem['isPinned'];
        note.user_id = noteItem['user_id'];
        if(noteItem['deleted']=="true"){
          this.notes.push(note);
        }
        console.log(data);
      });
    })
  }

}


export class ExpansionOverviewExample {
  panelOpenState = false;
}
