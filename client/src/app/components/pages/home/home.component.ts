import { Component, OnInit } from '@angular/core';
import { Notebook } from '../../../shared/models/Notebook';
import { NotebookService } from '../../../services/notebook.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NoContentComponent } from "../../partials/no-content/no-content.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, NoContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  notebooks:Notebook[] = [];

  constructor(private notebookService:NotebookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.notebooks = this.notebookService.getNotebooksBySearch(params['searchTerm']);
      } else {
        this.notebooks = this.notebookService.getNotebooks();
      }
    });
  }
}
