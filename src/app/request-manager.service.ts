import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { People,Employee } from './model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestManagerService {

  constructor(
    private http:HttpClient
  ) { }

  getPeople():Observable<People>{
    let p = new People();
    p.name="chanchaw";
    p.gender="male";
    return of(p).pipe(delay(2000));
  }

  getEmployee():Observable<Employee>{
    let e = new Employee();
    e.idNumber=1001;
    e.info = {"name":"Rorschach","gender":"male"};
    return of(e).pipe(delay(2000));
  }
}
