import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MembersComponent } from './members.component';
import { MemberDetailComponent } from './member-detail.component';
import { DashboardComponent } from './dashboard.component';
import { MemberSearchComponent } from './member-search.component';

import { MemberService } from './member.service';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MembersComponent,
    MemberDetailComponent,
    MemberSearchComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    MemberService
  ]
})
export class AppModule { }
