import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DeptListComponent } from './components/dept-list/dept-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
const route : Routes = [
  {path:'',component:WelcomeComponent},
  {path:'employees',component:EmpListComponent},
  {path:'departments',component:DeptListComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    DeptListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(route)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
