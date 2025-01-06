import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-no-content',
  imports: [CommonModule, RouterLink],
  templateUrl: './no-content.component.html',
  styleUrl: './no-content.component.css'
})
export class NoContentComponent {
  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = '';
  @Input() resetText: string = '';
  @Input() resetLink: string = '/';
}
