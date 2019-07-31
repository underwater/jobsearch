import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { KeywordService } from './services/keyword.service';
import { EditKeywordComponent } from './keywords/edit-keyword/edit-keyword.component';

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
    HttpClientModule
  ],
  providers: [KeywordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
