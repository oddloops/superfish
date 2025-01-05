import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-header',
  imports: [SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
