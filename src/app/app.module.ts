import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { KeywordService } from './services/keyword.service';
import { EditKeywordComponent } from './keywords/edit-keyword/edit-keyword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './shared/material-module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    KeywordsComponent,
    EditKeywordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [KeywordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
