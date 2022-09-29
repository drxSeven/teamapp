import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMember = "";
  members:string[] = [];

  onInput(member:string){
    this.newMember = member;
  }

  addMember(){
    this.members.push(this.newMember);
  }

}

