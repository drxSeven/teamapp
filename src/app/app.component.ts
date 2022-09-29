import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// store state
export class AppComponent {
  newMember = "";
  members:string[] = [];

  // update state
  onInput(member:string){
    this.newMember = member;
  }

  addMember(){
    this.members.push(this.newMember);
  }

}

