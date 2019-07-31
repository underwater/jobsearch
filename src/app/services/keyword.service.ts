import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPromise } from 'q';



@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  apiUrl = 'http://localhost:3000/keywords';

  constructor(private httpClient: HttpClient) { }

  public getKeywords(): Promise<Keyword[]> {
    return this.httpClient
      .get<Keyword[]>(this.apiUrl)
      .toPromise();
  }

  public getKeyword(id: number): Promise<Keyword> {
    return this.httpClient
      .get<Keyword>(`${this.apiUrl}/${id}`)
      .toPromise();
  }

  public addKeyword(keyword: Keyword): void {

  }

  public editKeyword(keyword: Keyword): Promise<any> {
    return this.httpClient
      .put<Keyword>(this.apiUrl, keyword)
      .toPromise();
  }

  public delKeyword(id: number): Promise<any> {
    return this.httpClient
      .delete(`${this.apiUrl}/${id}`).toPromise();
  }
}
