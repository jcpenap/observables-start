import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService {
  activatedEmmiter = new EventEmitter<boolean>();
}
