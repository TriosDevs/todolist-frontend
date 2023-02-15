import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './lists/list/list.component';
import { TaskComponent } from './tasks/task/task.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {Routes,RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { HttpService } from './http.service';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { PopupComponent } from './popup/popup.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ListsComponent } from './lists/lists.component';
import { TasksComponent } from './tasks/tasks.component';
const appRoutes: Routes =[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',canActivate:[AuthGuard],component:HomeComponent},
  {path:'list',canActivate:[AuthGuard],component:ListsComponent},
  {path:'tasks/:id',canActivate:[AuthGuard],component:TasksComponent},
  {path:'profile'/*,canActivate:[AuthGuard]*/,component:ProfileComponent},
  {path:'profile-edit'/*,canActivate:[AuthGuard]*/,component:ProfileEditComponent},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    TaskComponent,
    TasksComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent,
    ErrorModalComponent,
    PopupComponent,
    ProfileEditComponent,
    ListsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,AuthGuard,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
