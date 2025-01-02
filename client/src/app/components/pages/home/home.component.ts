import { Component, OnInit } from '@angular/core';
import { Notebook } from '../../../shared/models/Notebook';
import { NotebookService } from '../../../services/notebook.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  notebooks:Notebook[] = [];

  constructor(private notebookService:NotebookService) {
    this.notebooks = notebookService.getNotebooks();
   }

  ngOnInit() {

  }
}
