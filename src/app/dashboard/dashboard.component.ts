import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public myArray: any= [] ;
  admibiddingdetails : any;

  constructor(private auth:AuthService , private http:HttpClient) { }
  user = {localId:"someid",displayName:"somename"};
  ngOnInit(): void {
    this.auth.canAccess();
    if (this.auth.isAuthenticated()) {
        this.auth.detail().subscribe({
          next:data=>{
              this.user.localId = data.users[0].localId;
              this.user.displayName = data.users[0].displayName;
              this.http.get('http://localhost:61859/api/Bidding').pipe().subscribe((res :any)=>
              
              {
                    this.myArray= (res);
                    
                    console.log(this.myArray);
              }); 
          }
        }
        )
    }
  }
}
