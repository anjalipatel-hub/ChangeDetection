import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  data = 'Service Data';
  constructor() { }
}
