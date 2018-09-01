import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserJson } from "./User Json";




@Injectable()
export class RestComponent  {

    
    constructor(private http : Http){
        console.log("REST SERVICE TRIGERRED******");
    }

  //constructor() { }

  ngOnInit() {
      console.log("REST COMP: service ng init trigerred******");
  }

  private handleError(error: Response) { 
      console.error(error); 
      
      return Observable.throw(error.json().error()); 
   } 
  
  getRestAll(value : string ): Observable<UserJson >{
      console.log("REST  TRIGERRRED-->");
      console.log(value);
      var msg="hai";
      let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
      
   //  var  Url="http://localhost:9000/SayHello";
    let user$ = this.http.get("http://192.168.43.173:9000/SayHello").map(this.mapUser);
   //let user$ = this.http.get("https://reqres.in/api/users/"+value,{ headers: headers }).map(this.mapUser);
    
    console.log("user REST service get rest all return display user-->"+user$);
    return user$;
  }
  
  mapUsers(response:Response): UserJson[]{
          // The response of the API has a results
          // property with the actual results
          console.log("user Json service map user trigerred"+response.json());
          //return response.json().results.map(this.toUser)
          return response.json();
       }
  
  displayMessage(response:Response): String{
          // The response of the API has a results
          // property with the actual results
          console.log("Message recieved --->"+response.json());
          //return response.json().results.map(this.toUser)
          return response.json();
       }

  mapUser(response:Response): UserJson{
      // The response of the API has a results
      // property with the actual results            
      console.log("user REST service map user trigerred DATA"+response.json().data);
      console.log("user REST service map user trigerred JSON"+response.json());
      //return response.json().results.map(this.toUser)
      //return toUser(response.json());
       return response.json(); 
  }
  
  
 /* function toUser(r:any): UserJson{
      console.log('Parsed user trigerred****:', r);
     let user = <UserJson>({
       id: r.data.id,
       first_name: r.data.first_name,
     });
     console.log('Parsed user:', user);
     return user;*/
   }

