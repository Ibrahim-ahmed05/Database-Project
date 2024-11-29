// import { Injectable } from "@angular/core";
// @Injectable({
//   providedIn: 'root',
// })
// export class StorageService {
//   isLocalStorageAvailable(): boolean {
//     return typeof window !== 'undefined' && !!window.localStorage;
//   }

//   getItem(key: string): string | null {
//     return this.isLocalStorageAvailable() ? localStorage.getItem(key) : null;
//   }

//   setItem(key: string, value: string, expiryInSeconds?: number): void {
//     if (this.isLocalStorageAvailable()) {
//       const expiryTime = expiryInSeconds ? new Date().getTime() + expiryInSeconds * 1000 : null;
//       const item = { value, expiry: expiryTime };
//       try {
//         console.log(`Setting item with key: ${key}, expiry: ${expiryTime}`);
//         localStorage.setItem(key, JSON.stringify(item));
//       } catch (e) {
//         console.error('Error saving to localStorage', e);
//       }
//     }
//   }

//   getItemWithExpiryCheck(key: string): string | null {
//     const itemString = this.getItem(key);
//     if (!itemString) {
//       console.log(`No item found for key: ${key}`);
//       return null;
//     }

//     try {
//       const item = JSON.parse(itemString);
//       const currentTime = new Date().getTime();
//       console.log(`Checking token expiry for key: ${key}, expiry: ${item.expiry}, currentTime: ${currentTime}`);

//       if (item.expiry && currentTime > item.expiry) {
//         this.removeItem(key);
//         console.log(`Token expired for key: ${key}`);
//         return null;
//       }

//       console.log(`Item found and valid for key: ${key}`);
//       return item.value;
//     } catch (error) {
//       console.error('Error parsing item from localStorage:', error);
//       return null;
//     }
//   }

//   removeItem(key: string): void {
//     if (this.isLocalStorageAvailable()) {
//       localStorage.removeItem(key);
//     }
//   }
// }
