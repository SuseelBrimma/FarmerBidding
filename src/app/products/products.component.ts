import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data: any = [];
  data1: any = [];
  constructor(private http: HttpClient,private route:Router) { }

  url = 'http://localhost:61859/api/AddProduct';

  ngOnInit() {
    this.http.get(this.url).pipe().subscribe((result: any) => {
      this.data = result;
      console.log(this.data);
    } ,(error:HttpErrorResponse)=>{
      console.log(error,'error');
      this.route.navigate(['/error'])
    })
  }
  }

