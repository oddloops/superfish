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
}
