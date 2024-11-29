import { Injectable } from '@angular/core';
import axios from 'axios'; // Import Axios

@Injectable({
  providedIn: 'root',
})
export class SenderService {
  title:string="";
  firstName:string="";
  lastName:string="";
  gender:string="";
  DOB:string="";
  nationality:string="";
  source: string = '';
  destination: string = '';
  departDate: string = '';
  arriveDate: string = '';
  numberOfTravellers: number = 1;
class: string = 'Economy';
  // price: number = 1000;

  constructor() {}

  // Fetch cities using Axios
  // async fetchCities(): Promise<string[]> {
  //   try {
  //     const response = await axios.get<string[]>('http://localhost:3000/cities');
  //     return response.data; // Axios returns data within the `data` field
  //   } catch (error) {
  //     console.error('Error fetching cities:', error);
  //     throw error; // Rethrow or handle as needed
  //   }
  // }
}
