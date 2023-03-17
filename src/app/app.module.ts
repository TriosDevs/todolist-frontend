import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListComponent } from './components/list/list.component';
import { TaskComponent } from './components/task/task.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { HttpService } from './services/http.service';
import { PopupComponent } from './components/popup/popup.component';
import { ListsComponent } from './pages/lists/lists.component';
import { PopupRemoveContentComponent } from './components/popup/popup-remove-content/popup-remove-content.component';
import { PopupCreateContentComponent } from './components/popup/popup-create-content/popup-create-content.component';
import { PopupUpdateContentComponent } from './components/popup/popup-update-content/popup-update-content.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { SuccessMessageComponent } from './components/success-message/success-message.component';
import { DetailedListComponent } from './components/detailed-list/detailed-list.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'lists', canActivate: [AuthGuard], component: ListsComponent },
  {
    path: 'lists/:id',
    canActivate: [AuthGuard],
    component: DetailedListComponent,
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
  },
  { path: 'not-found',canActivate: [AuthGuard], component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    TaskComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent,
    PopupComponent,
    ListsComponent,
    PopupRemoveContentComponent,
    PopupCreateContentComponent,
    PopupUpdateContentComponent,
    LoadingIndicatorComponent,
    SuccessMessageComponent,
    DetailedListComponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService, AuthGuard, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
