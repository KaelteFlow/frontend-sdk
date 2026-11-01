import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserResponse, UsersResponse} from '@kaelteflow/shared';
import {DATA_PROVIDER} from "../providers/data-provider.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dataService = inject(DATA_PROVIDER);

  getUsers(q: string): Observable<UsersResponse> {
    return this.dataService.get<UsersResponse>("v1/accounts", {
      query: {
        q
      }
    });
  }

  getUser(id: string): Observable<UserResponse> {
    return this.dataService.get<UserResponse>("v1/accounts/{0}", {
      params: [id]
    });
  }
}
