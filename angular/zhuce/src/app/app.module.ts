import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginPwdComponent } from './login-pwd/login-pwd.component';
import { LoginPhoneComponent } from './login-phone/login-phone.component';
import {RouterModule, Routes} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleDatailsTwoComponent } from './article-datails-two/article-datails-two.component';
import { ArticleDetailsThreeComponent } from './article-details-three/article-details-three.component';
import { HotIssuesComponent } from './hot-issues/hot-issues.component';

const routeConfig: Routes = [
  {path: '', redirectTo: '/index' , pathMatch: 'full'},
  {path : 'index', component: IndexComponent},
  {
    path: 'article', component: ArticleComponent,
  children: [
    {path: '', redirectTo: 'details' , pathMatch: 'full'},
    {path: 'details', component: ArticleDetailsComponent},
    {path: 'detailstwo', component: ArticleDatailsTwoComponent},
    {path: 'detailsthree', component: ArticleDetailsThreeComponent}
  ]
  },
  {path: 'home-page', component: HomePageComponent},
  {path: 'login', component: LoginComponent,
    children: [
      { path: '', redirectTo: 'lopwd' , pathMatch: 'full'},
      { path: 'lopwd', component: LoginPwdComponent },
      { path: 'lophone', component: LoginPhoneComponent}
    ]
  },
  { path: 'register', component: RegisterComponent}

  // {path: 'phone', component: LoginPhoneComponent, outlet : 'aux'}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LoginPwdComponent,
    LoginPhoneComponent,
    IndexComponent,
    HomePageComponent,
    ArticleComponent,
    ArticleDetailsComponent,
    ArticleDatailsTwoComponent,
    ArticleDetailsThreeComponent,
    HotIssuesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
