import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeywordService } from 'src/app/services/keyword.service';

@Component({
  selector: 'app-edit-keyword',
  templateUrl: './edit-keyword.component.html'
})
export class EditKeywordComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute, private keywordService: KeywordService) { }
  public keyword: Keyword;

  async ngOnInit() {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.keyword = await this.keywordService.getKeyword(Number(id));
    } else {
      this.keyword = new Keyword(99, '', []);
    }
  }



}
