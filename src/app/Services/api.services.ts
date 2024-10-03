import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    baseUrl = "http://localhost:7000";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    constructor(
        private http: HttpClient,
    ) {
    }

    post(URL: string, data: any) {
        return this.http.post<any>(this.baseUrl + URL, data, this.httpOptions);
    }

    put(URL: string, data: any) {
        return this.http.put<any>(this.baseUrl + URL, data, this.httpOptions);
    }

    patch(URL: string, data: any) {
        return this.http.patch<any>(this.baseUrl + URL, data, this.httpOptions);
    }

    get(URL: string) {
        return this.http.get<any>(this.baseUrl + URL, this.httpOptions);
    }

    delete(URL: string) {
        return this.http.delete<any>(this.baseUrl + URL, this.httpOptions);
    }
}