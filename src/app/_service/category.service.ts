import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../_model/category-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>('http://localhost:8080/category', {observe: 'body'});
  }

  public getById(id: string): Observable<Category> {
    return this.httpClient.get<Category>('http://localhost:8080/category/' + id, {observe: 'body'});
  }
}
