import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  [x: string]: any;
  name = "";
  price = Number ;
  bidstart = Number;

  constructor(private http:HttpClient, private messageService: MessageService) { }
  ngOnInit(): void {
  }
  getUserFormData(value :any)
  {    
    this.messageService.add
    ({
      severity: "info",
      summary: "Confirmed",
      detail: "Bidding Successful"
    });
console.log(value);

    this.http.post('http://localhost:61859/api/AddProduct',value).pipe( ).subscribe((result : any)=>
    {
      });
      
      
    }
}
