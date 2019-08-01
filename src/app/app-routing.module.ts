import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { KeywordsComponent } from './keywords/keywords.component';
import {  EditKeywordComponent} from './keywords/edit-keyword/edit-keyword.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'keywords/edit', component: EditKeywordComponent },
  { path: 'keywords', component: KeywordsComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
