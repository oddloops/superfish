import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER_LOGIN_URL } from '@shared/constants/urls';
import { IUserLogin } from '@shared/interfaces/IUserLogin';
import { User } from '@shared/models/User';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap} from 'rxjs';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  // Login & Logout methods //
  login(userLogin: IUserLogin): Observable<User> {
    return this.httpClient.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastr.success(`Login successful. Welcome ${user.name}`, 'Success', {
            timeOut: 3000,
            closeButton: true,
            tapToDismiss: true,
            positionClass: 'toast-bottom-right'
          });
        },
        error: (errorResponse) => {
          this.toastr.error(errorResponse["error"], 'Fail', {
            timeOut: 3000,
            closeButton: true,
            tapToDismiss: true,
            positionClass: 'toast-bottom-right'
          });
        }
      })
    );
  }

  logout(): void {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  // Set the user into local storage //
  private setUserToLocalStorage(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) {
      return JSON.parse(userJson) as User;
    } else {
      return new User();
    }
  }
}
