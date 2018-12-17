export class Note {
    id:number;
    title:string;

	body:string;
	updateDate:Date;
	creationDate:Date;
	deleteDate:Date;
	
	content:any;
	
    user_id:number;
	label:string[];	
	isPinned: boolean;
	color:string;

	deleted :boolean =false;
	archived:boolean = false;
}