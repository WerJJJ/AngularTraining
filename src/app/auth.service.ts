import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  authState: boolean = true;

  logIn() {
    this.authState = true;
  }

  logOut() {
    this.authState = false;
  }

  isAuthenticated () : Promise<boolean> {
    return new Promise(resolve => {
      resolve(this.authState);
    })
  }
/*   get auth() : boolean {
    return this.authState;
  } */

// set auth(value: boolean) {
//     this.authState = value; 
//   }
}
