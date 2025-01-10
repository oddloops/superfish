import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotebookComponent } from './components/pages/notebook/notebook.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:searchTerm', component: HomeComponent},
  {path: 'notebook/:notebookId', component: NotebookComponent},
  {path: '**', component: HomeComponent}
];
