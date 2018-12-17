import { Component, OnInit, Input } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { NotesService } from '../notes/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  
  @Input() id: number;
  @Input() title : string;
  @Input() body : string;
  
  constructor(private noteService:NotesService) { 
    
  }

  ngOnInit() {

  }

  archive(){
    this.noteService.archive(this.id,true).subscribe((res)=>{
      console.log(res);
    });
  }
  delete(){
    this.noteService.delete(this.id,true).subscribe((res)=>{
      console.log(res);
    });

  }
  
}
