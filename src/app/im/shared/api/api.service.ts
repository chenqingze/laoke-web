import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {createRequestOption} from './request.util';

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    private VERSION = '3';
    constructor(private http: HttpClient) {
    }
    /**
     * 不需要登录权限的POST请求。
     * @param apiUrl
     * @param body
     * @param reqParams json对象
     */
    public post(apiUrl: string, body?: string, reqParams?: any): Observable<any> {
        // tslint:disable-next-line: variable-name
        const _body = body || '';
        // 设置header
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('appversion', this.VERSION);
        // 设置请求参数
        const params = createRequestOption(reqParams);
        return this.http
            .post(apiUrl, _body, { headers, params }).pipe(
                catchError(this.handleError)
            );
    }

    /**
     * 需要登录权限的POST请求
     * @param apiUrl
     * @param body
     * @param reqParams json对象
     */
    public postByAuth(apiUrl: string, body?: string, reqParams?: any): Observable<any> {
        // tslint:disable-next-line: variable-name
        const _body = body || '';
        // 本地缓存获取token
        const token = localStorage.getItem('token');
        // 设置header
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', token)
            .set('appversion', this.VERSION);
        // 设置请求参数
        const params = createRequestOption(reqParams);
        return this.http
            .post(apiUrl, _body, { headers, params }).pipe(
                catchError(this.handleError)
            );
    }

    /**
     * 不需要登录权限的PATCH请求
     * @param apiUrl
     * @param body
     * @param reqParams json对象
     */
    public patch(apiUrl: string, body?: string, reqParams?: any): Observable<any> {

        // tslint:disable-next-line: variable-name
        const _body = body || '';
        // 设置header
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('appversion', this.VERSION);
        // 设置请求参数
        const params = createRequestOption(reqParams);
        return this.http
            .patch(apiUrl, _body, { headers, params }).pipe(
                catchError(this.handleError)
            );

    }

    /**
     * 需要登录权限的PATCH请求
     * @param apiUrl
     * @param body
     * @param reqParams json对象
     */
    public patchByAuth(apiUrl: string, body?: string, reqParams?: any): Observable<any> {
        // tslint:disable-next-line: variable-name
        const _body = body || '';
        // 获取本地token
        const token = localStorage.getItem('token');
        // 设置header
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', token)
            .set('appversion', this.VERSION);
        // 设置请求参数
        const params = createRequestOption(reqParams);
        return this.http
            .patch(apiUrl, _body, { headers, params }).pipe(
                catchError(this.handleError)
            );

    }

    /**
     * 不需要登录权限的PUT请求
     * @param apiUrl
     * @param body
     * @param reqParams json对象
     */
    public put(apiUrl: string, body?: string, reqParams?: any): Observable<any> {
        // tslint:disable-next-line: variable-name
        const _body = body || '';
        // 设置header
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('appversion', this.VERSION);
        // 设置请求参数
        const params = createRequestOption(reqParams);
        return this.http
            .put(apiUrl, _body, { headers, params })
            .pipe(
                catchError(this.handleError)
            );
    }

    /**
     * 需要登录权限的PUT请求
     * @param apiUrl
     * @param body
     * @param reqParams json对象
     */
    public putByAuth(apiUrl: string, body?: string, reqParams?: any): Observable<any> {
        // tslint:disable-next-line: variable-name
        const _body = body || '';
        // 获取本地token
        const token = 'b9f7dcff-3e73-47c3-9224-8b50e468d6f6';
        // 设置header
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            // .set('Authorization', token)
            .set('Authorization', "7a47ed42-9eb1-444d-a86a-80f6ab6a77b5")
            .set('appversion', this.VERSION);
        // 设置请求参数
        const params = createRequestOption(reqParams);
        return this.http
            .put(apiUrl, _body, { headers, params })
            .pipe(
                catchError(this.handleError)
            );
    }

    /**
     * 不需要登录权限的DELETE请求
     * @param apiUrl
     * @param reqParams json对象
     */
    public delete(apiUrl: string, reqParams?: any): Observable<any> {
        // 设置header
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('appversion', this.VERSION);
        // 设置请求参数
        const params = createRequestOption(reqParams);
        return this.http
            .delete(apiUrl, { headers, params })
            .pipe(
                catchError(this.handleError)
            );
    }

    /**
     * 需要登录权限的DELETE请求
     * @param apiUrl
     * @param reqParams json对象
     */
    public deleteByAuth(apiUrl: string, reqParams?: any): Observable<any> {
        // 获取本地token
        const token = localStorage.getItem('token');
        // 设置header
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', token)
            .set('appversion', this.VERSION);
        // 设置请求参数
        const params = createRequestOption(reqParams);
        return this.http
            .delete(apiUrl, { headers, params })
            .pipe(
                catchError(this.handleError)
            );
    }

    /**
     * 不需要登录权限的GET请求
     * @param apiUrl
     * @param reqParams json对象
     */
    public get(apiUrl: string, reqParams?: any): Observable<any> {
        // 设置header
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('appversion', this.VERSION);
        // 设置请求参数
        const params = createRequestOption(reqParams);
        return this.http
            .get(apiUrl, { headers, params }).pipe(
                catchError(this.handleError)
            );
    }
    /**
     * 不需要登录权限的GET请求
     * @param apiUrl
     * @param reqParams json对象
     */
    public getOther(apiUrl: string, reqParams?: any): Observable<any> {
        // 设置header
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json');
        // 设置请求参数
        const params = createRequestOption(reqParams);
        return this.http
            .get(apiUrl, { headers, params }).pipe(
                catchError(this.handleError)
            );
    }

    /**
     * 需要登录权限的GET请求
     * @param apiUrl
     * @param reqParams json对象
     */
    public getByAuth(apiUrl: string, reqParams?: any): Observable<any> {
        // 获取本地token
        // const token = localStorage.getItem('token');
        const token = 'b9f7dcff-3e73-47c3-9224-8b50e468d6f6';
        // 设置header
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', token)
            .set('appversion', this.VERSION);
        // 设置请求参数
        const params = createRequestOption(reqParams);
        return this.http
            .get(apiUrl, { headers, params }).pipe(
                catchError(this.handleError)
            );
    }

    /**
     * error handler
     * @param error
     */
    public handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }

        // return an observable with a user-facing error message
        return throwError(JSON.stringify(error.error.message));
    }

    /**
     * 生成查询参数
     *
     * @param params json对象
     * @returns {string}
     */
    public generatePostParameters(params: any): string {

        // 生成查询条件
        const urlSearchParams = new URLSearchParams();
        Object.keys(params).forEach(key => {
            urlSearchParams.set(key, params[key]);
        });
        return urlSearchParams.toString();
    }

}
