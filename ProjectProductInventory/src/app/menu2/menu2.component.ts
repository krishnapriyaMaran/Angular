import { Component, OnInit } from '@angular/core';
import { RestComponent } from "../rest/rest.component";
import { UserJson } from "../rest/User Json";


@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})

export class Menu2Component implements OnInit {


  user: UserJson;
  userId: string= "2";
  constructor(private userJsonService: RestComponent) { console.log("cconstuctr trigerred is user REST component"); }
  ngOnInit() {  
      console.log("Ng init trigerred is user REST component menu2");
     // this.userJsonService
     //.getRestAll();
     // .subscribe((p) =>{ this.user = p;});
      console.log("User Array-->"+this.user);
  }


  }
