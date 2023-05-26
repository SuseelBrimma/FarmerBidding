import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ProductsComponent } from './products/products.component';
import { AdminuserloginComponent } from './adminuserlogin/adminuserlogin.component';
import { AdminuserregisterComponent } from './adminuserregister/adminuserregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { UserproductsComponent } from './userproducts/userproducts.component';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ToastModule} from 'primeng/toast';
import {AccordionModule} from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ConfirmationService, MessageService } from "primeng/api";
import {ToggleButtonModule} from 'primeng/togglebutton';
import {TableModule} from 'primeng/table';
 import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
 import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { ErrorComponent } from './error/error.component';

const routes:Routes = 
[
  {path:'',component:NavbarComponent,
  children:[ 
  {path:'',component:HomeComponent }, 
  {path:'register',component:RegisterComponent},
   {path:'login',component:LoginComponent},
   {path:'userlogin',component:UserloginComponent},
   {path:'userregister',component:UserregisterComponent},
  {path:'dashboard',component:DashboardComponent},

  {path:'addproducts',component:AddproductsComponent},
  {path:'products',component:ProductsComponent},
  {path:'adminuserlogin',component:AdminuserloginComponent},
  {path:'adminuserregister',component:AdminuserregisterComponent},
  {path:'error',component:ErrorComponent}
]
},
{path:'',component:Navbar1Component,
children:[ 


{path:'dashboard1',component:Dashboard1Component},
{path:'userproducts',component:UserproductsComponent}

]
},


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AddproductsComponent,
    ProductsComponent,
    AdminuserloginComponent,
    AdminuserregisterComponent,
    UserloginComponent,
    Navbar1Component,
    Dashboard1Component,
    UserproductsComponent,
    UserregisterComponent,
    ErrorComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    DialogModule,
    DynamicDialogModule,
    ToastModule,
    AccordionModule,
    MenubarModule,
  InputTextModule,
  ButtonModule,ConfirmPopupModule,ToastModule ,HttpClientModule,
  DialogModule,
  ToggleButtonModule,
  TableModule,
  CalendarModule,
  SliderModule,
  MultiSelectModule,
  ContextMenuModule,
  DropdownModule,
  ProgressBarModule,
  BrowserAnimationsModule,
  MessagesModule,ProgressSpinnerModule

    
  
    
  
 
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
