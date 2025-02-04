import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Notebook } from '@shared/models/Notebook';
import { NotebookService } from '@services/Notebook/notebook.service';

@Component({
  selector: 'app-notebook',
  imports: [],
  templateUrl: './notebook.component.html',
  styleUrl: './notebook.component.css'
})
export class NotebookComponent implements OnInit {
  notebook!: Notebook;

  constructor(private activatedRoute: ActivatedRoute, private services: NotebookService) {}

  ngOnInit () {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.services.getNotebookById(params['id']).subscribe((serverNotebook) => {
          this.notebook = serverNotebook;
        })
      }
    });
  }
}
