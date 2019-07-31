import { Component, OnInit } from '@angular/core';
import { KeywordService } from '../services/keyword.service';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html'
})
export class KeywordsComponent implements OnInit {
  allKeywords: Keyword[];
  constructor(private keywordService: KeywordService) { }


  ngOnInit() {
    this.keywordService.getKeywords()
      .then((result) => {
        this.allKeywords = result;
        console.table(this.allKeywords);
      });
  }

  public onDelete(keyword: Keyword): void {
    this.keywordService.delKeyword(keyword.id)
    .then();
  }

  public onEdit(keyword: Keyword): void {
    this.keywordService.editKeyword(keyword)
    .then();
  }
}


