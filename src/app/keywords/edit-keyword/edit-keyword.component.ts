import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeywordService } from 'src/app/services/keyword.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-keyword',
  templateUrl: './edit-keyword.component.html',
  styleUrls: ['./edit-keyword.component.css']
})
export class EditKeywordComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute, private keywordService: KeywordService) { }
  public keyword: Keyword;
  hasError: boolean;

  form: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    variations: new FormControl(''),
  });

  async ngOnInit() {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.keyword = await this.keywordService.getKeyword(Number(id));
    } else {
      this.keyword = new Keyword(99, '', []);
    }
  }
}
