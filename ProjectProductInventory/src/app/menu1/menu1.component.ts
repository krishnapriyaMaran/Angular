import { Component } from '@angular/core';
import { RestComponent } from "../rest/rest.component";
import { UserJson } from "../rest/User Json";


@Component({
  selector: 'app-root',
  templateUrl: './menu1.component.html',
      styleUrls: ['./menu1.component.css']
 
 
})
export class Menu1Component  {
   

  constructor(private userJsonService: RestComponent) { console.log("cconstuctr trigerred is user REST component");}

  
  
  
  onBlurMethod(barcode:any){
      var num=barcode;
     console.log(num);
      var sum=0,sum1=0,sum2=0;
      var array= [ ],array1= [ ] , array2=[ ];
      
      for( var i=0; i<12;i++)
      {
      array[i]=Math.floor(num%10);
      num=num/10;
      }
      var first=array[11];
      console.log(first);
       if(first <=2 || first > 8)
        {    console.log("first digit false");
        var msg="Entered barcode is incorrect";   
               return msg;
        }          
      
      var last=array[0];
      
      for( var i=1;i<=10;i++)
      {
            sum=sum+array[i];
           
            
      } console.log(sum);
 
      if(sum > 9){
          
                
                 
                  for( var i=0;i<2;i++)
                 { array1[i]=Math.floor(sum%10);   
                   sum=sum/10;}
      
      
      console.log(array1[0]);
      console.log(array1[1]);  
          for(var i=0;i<2;i++)
        { sum1=sum1+array1[i]; 
        console.log("sum1");
      
      }console.log(sum1);          
         
      }
      
      if(sum1==last  || sum==last){
      console.log("success");
                 // return true;
     
       }
                  else
                  {
                  console.log("wrong barcode");
               var msg=" Entered barcode is incorrect";
                  return msg;
      }
    
      
      
  }
  
  msg: UserJson;
      
 onSubmit (value:any){
    console.log(value);
    
                  
                  console.log("Ng init trigerred is user REST component menu1");
                  this.userJsonService
                 .getRestAll("2")
                  .subscribe((p) =>{ this.msg = p;});
                  console.log("User Array-->"+this.msg);

     }
 

values_of_objArray = [
                      { id: 3432, name: "Food" },
                      { id: 3442, name: "House Hold" },
                      { id: 3352, name: "Cosmetics" },
                      { id: 3353, name: "Books"}
                    ];
                    private ValueId : number = 0 
                                            
                    private selectedObj : any;

                    private selectedValueObj(id: any) {
                            this.ValueId = (id.srcElement || id.target).value;
                            for (let i = 0; i < this.values_of_objArray.length; i++) {
                                if (this.values_of_objArray[i].id == this.ValueId) {
                                    this.selectedObj = this.values_of_objArray[i];
                                }
                            }
                   
                        }

                  
                  
                  mouseEnter(price:any,type:any){
                  var taxpay=0;
                  var typeitem=type;
                  console.log(price);
                  console.log(type);
                  if(typeitem=="Food")
                  {
                     taxpay=price*0.1;
                  console.log(taxpay);
                      return taxpay;
                   }
                  if(typeitem=="House Hold")
                      {
                  taxpay=price*0.05;
                  console.log(taxpay);
                  return taxpay;

                          
                     }
                  
                  if(typeitem=="Cosmetics")
                  {
                  taxpay=price*0.18;
                  console.log(taxpay);
                  return taxpay;

                      
                 }
                  if(typeitem=="Books")
                  {
                  taxpay=price*0.05;
                  console.log(taxpay);
                  
                  return taxpay;

                   
                 }
      
                  
             
      }
   }
