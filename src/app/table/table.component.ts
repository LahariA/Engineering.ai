import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Subscription,timer  } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data;
  details: Object;
  id: any;
  name: any;
  email: any;
  subscription: Subscription;
  th: any=Number;
  term:any= { title:'' };
  selectedName1: any;
  constructor(private table:TableService) { }

  ngOnInit() {

    this.subscription = timer(0, 3000).pipe(
      switchMap(() => this.table.getdata())
      ).subscribe(resp=>{
        this.data=resp,
        this.details=this.data.hits
      }
        
        );

    // this.table.getdata().subscribe(resp=>{console.log(resp)
    //   this.details=resp;
      //this.details=this.data.result
    // })
  }
  
  // click(data){
  //   console.log(data,"i value")


  // //   this.id=data.id;
  // //   this.name=data.name;
  // //  this.email=data.eamil
  // }
  button(id){
    console.log(id)
   this.th=id;
   this.selectedName1 = id.title;
   this.table.postDataToJson(id).subscribe(resp=>
    {
      console.log(resp)
    });
    }
    changeBackground(){
      
    }


}
