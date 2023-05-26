import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-userproducts',
  templateUrl: './userproducts.component.html',
  styleUrls: ['./userproducts.component.css']
})
export class UserproductsComponent implements OnInit, OnChanges {
  data: any = [];
  data1: any = [];
  registerForm: FormGroup | any;
  submitted = false;
  constructor(private http: HttpClient,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig) { }
  url = 'http://localhost:61859/api/AddProduct';
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.http.get(this.url).pipe().subscribe((result: any) => {
      this.data = result;
      // console.log(this.data);
    })
  }
  display: boolean = false;
  showPopUp(i: any) {
    const c = parseInt(i);
    console.log(c);
    for (var j = 0; j < this.data.length; j++) {
      if (this.data[j].id == c) {
        console.log(this.data[j]);
        this.data1 = Array(this.data[j]);
        console.log(this.data1);
      }
      this.display = true
    }
  }
  Deatils: any = [];
  BiddingAmount: any = [];
  amount: Number = 0;
  CustomerName: string = "";
  CustomerAddress: string = "";
  CustomerEmail: string = ""
 
  url1 = 'https://64100f7a864814e5b64618af.mockapi.io/website/userproducts'
  ShowMyBidding(ProductName: any, ProductID: any, i: any) {
    this.BiddingAmount = this.data[i];
    console.log(this.BiddingAmount);
    this.http.put(this.url1 + '/' + i, this.BiddingAmount).pipe().subscribe((res: any) => {
    }
    );
    this.display = false;
    this.messageService.add
      ({
        severity: "info",
        summary: "Confirmed",
        detail: "Bidding Successful"
      });
    console.log(ProductName);
    let bodyData =
    {
      "BiddingAmount": this.BiddingAmount,
      "ProductName": ProductName,
      "CustomerName": this.CustomerName,
      "CustomerAddress": this.CustomerAddress,
      "CustomerEmail": this.CustomerEmail,
 
    };
    this.http.post("http://localhost:61859/api/Bidding", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      this.BiddingAmount = 0;
      ProductName = '';
      this.CustomerName = '';
      this.CustomerAddress = '';
      this.CustomerEmail = '';
 
    });
  }
  ngOnChanges() {
  }
}