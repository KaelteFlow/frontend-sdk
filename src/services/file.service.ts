import {inject, Injectable} from '@angular/core';
import {Observable, take} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FileResponse} from '@kaelteflow/shared';
import {DATA_PROVIDER} from "../providers/data-provider.interface";

@Injectable({
  providedIn: 'root',
})
export class FileService {
  dataService = inject(DATA_PROVIDER);

  constructor(
    protected http: HttpClient,
  ) {}

  getFile(id: string): Observable<FileResponse> {
    return this.dataService.get<FileResponse>("v1/files/{0}", { params: [ id ]})
      .pipe(take(1))
  }
}
