import { Component, OnInit } from '@angular/core';
import { KeywordService } from '../services/keyword.service';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html'
})
export class KeywordsComponent implements OnInit {

  constructor(private keywordService: KeywordService) { }


  ngOnInit() {
    this.keywordService.getKeywords()
    .then((result) => console.table(result));
  }

}
