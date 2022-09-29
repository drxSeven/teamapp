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
  errorMessage = '';
  numberOfTeams: number | "" = ""; 
  teams: string[][] = [];

  // update state
  onInput(member: string) {
    this.newMember = member;
  }

  onTeamNumInput(value:string){
    this.numberOfTeams = Number(value);
  }

  addMember() {
    if (!this.newMember) {
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.members.push(this.newMember);
    this.newMember = '';
    this.errorMessage = '';
  }

  generateTeam(){

    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage = "Number of teams must be greater than 0";
      return;
    }

    const allMembers = [...this.members]


    if(this.numberOfTeams > allMembers.length){
      this.errorMessage = "Not enough team members"
      return;
    }


    this.errorMessage = "";


    while(allMembers.length){
      for(let i = 0; i < this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if(!member)break;

        if(this.teams[i]){
          this.teams[i].push(member)
        } else {
          this.teams[i] = [member]
        }
      }  
    }

    this.members = [];
    this.numberOfTeams = "";

  }
  

}
