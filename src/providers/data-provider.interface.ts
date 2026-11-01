import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';
import {IDefaultResponse} from "@kaelteflow/shared";
import {HttpResponse} from "@angular/common/http";

export type Query = Record<string, string | number | boolean>;

export interface IRequest<Payload = never> {
    readonly params?: any[];
    headers?: any;
    readonly data?: Payload;
    readonly query?: Query;
    readonly observe?: 'body' | 'events' | 'response';
}

export interface IDataProvider {
    get<Response extends IDefaultResponse<any>>(path: string, request: IRequest): Observable<Response>;
    post<Response extends IDefaultResponse<any> | HttpResponse<IDefaultResponse<any>>, Payload = never>(path: string, request: IRequest<Payload>): Observable<Response>;
    put<Response extends IDefaultResponse<any> | HttpResponse<IDefaultResponse<any>>, Payload = never>(path: string, request: IRequest<Payload>): Observable<Response>;
    delete<Response extends IDefaultResponse<any>>(path: string, request: IRequest): Observable<Response>;
}

export const DATA_PROVIDER = new InjectionToken<IDataProvider>('DATA_PROVIDER');