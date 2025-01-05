import { Injectable } from '@angular/core';
import { Notebook } from '../shared/models/Notebook';
import { sample_notebook } from '../../sample/data';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {

  constructor() { }
  getNotebooks():Notebook[] {
    return sample_notebook;
  }

  getNotebooksBySearch(searchTerm: string): Notebook[] {
    return this.getNotebooks().filter(notebook => notebook.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
