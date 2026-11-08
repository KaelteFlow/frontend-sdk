import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {
  ICustomer,
  IDatabaseEntry,
  CustomerResponse,
  CustomersResponse,
  UsersResponse, CustomerObjectsResponse
} from '@kaelteflow/shared';
import {DATA_PROVIDER} from "../providers/data-provider.interface";

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  dataService = inject(DATA_PROVIDER);

  getCustomers(q: string): Observable<CustomersResponse> {
    return this.dataService.get<CustomersResponse>('v1/customers', {
      query: { q: q },
    });
  }

  getCustomer(id: string): Observable<CustomerResponse> {
    return this.dataService.get<CustomerResponse>('v1/customers/{0}', { params: [id] });
  }

  getObjects(
    q: string,
    customer: IDatabaseEntry<ICustomer> | string,
  ): Observable<CustomerObjectsResponse> {
    return this.dataService.get<CustomerObjectsResponse>('v1/objects', {
          query: {
            q,
            customer: typeof customer === 'string' ? customer : customer._id
          }
        }
    );
  }

  getAccounts(
    q: string,
    customer: IDatabaseEntry<ICustomer> | string,
  ): Observable<UsersResponse> {
    return this.dataService.get<UsersResponse>('v1/users', {
      query: {
        q,
        customer: typeof customer === 'string' ? customer : customer._id
      },
    });
  }
}
