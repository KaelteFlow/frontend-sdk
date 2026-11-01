import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {
  CustomerObject,
  CustomerObjectResponse,
  CustomerObjectsResponse,
  IDatabaseEntry,
  UsersResponse
} from '@kaelteflow/shared';
import {DATA_PROVIDER} from "../providers/data-provider.interface";

@Injectable({
  providedIn: 'root',
})
export class ObjectsService {
  dataService = inject(DATA_PROVIDER);

  getObjects(q: string): Observable<CustomerObjectsResponse> {
    return this.dataService.get<CustomerObjectsResponse>('v1/objects', {
          query: {
            q
          },
        }
    );
  }

  getObject(id: string): Observable<CustomerObjectResponse> {
    return this.dataService.get<CustomerObjectResponse>('v1/objects/{0}', {
      params: [id],
    });
  }

  getAccounts(
      q: string,
      customerObject: IDatabaseEntry<CustomerObject>,
  ): Observable<UsersResponse> {
    return this.dataService.get<UsersResponse>('v1/accounts', {
      query: {
        q,
        object: customerObject._id
      }
    });
  }
}
