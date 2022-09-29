import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// store state
export class AppComponent {
  newMember = '';
  members: string[] = [];
  errorMessage = "";
  // update state
  onInput(member: string) {
    this.newMember = member;
  }

  addMember() {
if(!this.newMember){
  this.errorMessage = "Name can't be empty";
  return
}

    this.members.push(this.newMember);
    this.newMember = ""
  }
}
