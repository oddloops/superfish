import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notebook } from '../shared/models/Notebook';
import { NOTEBOOKS_BY_ID_URL, NOTEBOOKS_BY_SEARCH_URL, NOTEBOOKS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {

  constructor(private http: HttpClient) { }

  getNotebooks(): Observable<Notebook[]> {
    return this.http.get<Notebook[]>(NOTEBOOKS_URL);
  }

  getNotebooksBySearch(searchTerm: string): Observable<Notebook[]> {
    return this.http.get<Notebook[]>(NOTEBOOKS_BY_SEARCH_URL + searchTerm)
  }

  getNotebookById(id: number): Observable<Notebook> {
    return this.http.get<Notebook>(NOTEBOOKS_BY_ID_URL + id);
  }
}
