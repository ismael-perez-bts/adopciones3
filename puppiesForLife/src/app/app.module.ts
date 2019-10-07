import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HomeComponent } from "./components/home/home.component";
import { TableroComponent } from "./components/tablero/tablero.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./components/login/login.component";

<<<<<<< HEAD
<<<<<<< HEAD
import { HttpClientModule } from "@angular/common/http";
import { SignupComponent } from "./components/signup/signup.component";
import { RegisterDogsComponent } from "./components/register-dogs/register-dogs.component";
=======




import { HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { RegisterDogsComponent } from './components/register-dogs/register-dogs.component'
import { AuthGuard } from './auth.guard';
>>>>>>> b7d27347f425e07bf9a925e9cd94a2a23e664fbd
=======
import { HttpClientModule } from "@angular/common/http";
import { SignupComponent } from "./components/signup/signup.component";
import { RegisterDogsComponent } from "./components/register-dogs/register-dogs.component";
import { AuthGuard } from "./auth.guard";
>>>>>>> cbaf001c26b3f795e88fcea4474944089cac8a20

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    TableroComponent,
    LoginComponent,
    SignupComponent,
    RegisterDogsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
