import { Component } from '@angular/core';
import { SearchComponent } from "@components/partials/search/search.component";
import { RouterLink } from '@angular/router';
import { User } from '@shared/models/User';
import { UserService } from '@services/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, SearchComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user!: User;

  constructor(private userService: UserService) {
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  logout(): void {
    this.userService.logout();
  }

  get isAuth() {
    return this.user.token;
  }
}
