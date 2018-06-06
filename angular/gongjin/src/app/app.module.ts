import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HotIssuesComponent } from './hot-issues/hot-issues.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { HotIssuesContentComponent } from './hot-issues-content/hot-issues-content.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HotIssuesContentRightComponent } from './hot-issues-content-right/hot-issues-content-right.component';
import { ReplyComponent } from './reply/reply.component';
import { ReplyRightComponent } from './reply-right/reply-right.component';
import { ReplyContentComponent } from './reply-content/reply-content.component';
import {RouterModule, Routes} from '@angular/router';


const routeConfig: Routes = [
  {path : '', component: HotIssuesComponent},
  {path : 'reply', component: ReplyComponent},
  ];
@NgModule({
  declarations: [
    AppComponent,
    HotIssuesComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    HotIssuesContentComponent,
    HotIssuesContentRightComponent,
    ReplyComponent,
    ReplyRightComponent,
    ReplyContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
