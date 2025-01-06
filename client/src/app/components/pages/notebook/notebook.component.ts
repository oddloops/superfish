import { NotebookService } from './../../../services/notebook.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Notebook } from '../../../shared/models/Notebook';

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
        this.notebook = params['id'];
      }
    });
  }
}
