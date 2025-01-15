import { Component, OnInit } from '@angular/core';
import { Notebook } from '@shared/models/Notebook';
import { NotebookService } from '@services/notebook/notebook.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NoContentComponent } from '@components/partials/no-content/no-content.component';
import { Observable } from 'rxjs';

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
    this.route.params.subscribe({
      next: (params) => {
        let notebooksObservable: Observable<Notebook[]>;
        if (params['searchTerm']) {
          notebooksObservable = this.notebookService.getNotebooksBySearch(params['searchTerm']);
        } else {
          notebooksObservable = this.notebookService.getNotebooks();
        }
        notebooksObservable.subscribe({
          next: (serverNotebooks) => {
            this.notebooks = serverNotebooks;
          },
          error: (err) => {
            console.error('Error in route parameters:', err);
          }
        })
      }
    })
  }
}
