import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiService } from "./api.services";

@Injectable({
    providedIn: 'root',
})

export class API{
    constructor(private apiService: ApiService ){
        
    }
 
    getSudent(id: number){
        const URL = `/api/STUDENTS/${id}`
        return this.apiService.get(URL);
    }
}