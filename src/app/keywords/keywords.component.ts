import { Component, OnInit } from '@angular/core';
import { KeywordService } from '../services/keyword.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html'
})
export class KeywordsComponent implements OnInit {
  allKeywords: Keyword[];
  constructor(
    private keywordService: KeywordService,
    private router: Router) {

   }

 async ngOnInit() {
    const result = await this.keywordService.getKeywords();
    this.allKeywords = result;
  }

  public onDelete(keyword: Keyword): void {
    this.keywordService.delKeyword(keyword.id)
    // this extra work is normal...
    .then(_ => this.allKeywords = this.allKeywords.filter(x =>  x.id !== keyword.id ))
    .catch( err => console.log(err));
  }

  public onEdit(keyword: Keyword): void {
    // navigate to another edit component
    this.router.navigate(['editKeyword', keyword.id]);

  }
}


