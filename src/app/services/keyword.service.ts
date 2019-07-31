import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  allKeywords: Keyword[];
  apiUrl: 'http://localhost:3000/keywords';

  constructor(private httpClient: HttpClient) { }

  public getKeywords(): Promise<Keyword[]> {
    return this.httpClient.get<Keyword[]>(this.apiUrl).toPromise();
  }

  public addKeyword(keyword: Keyword): void {

  }

  public deleteKeyword(name: string): void {

  }


}
