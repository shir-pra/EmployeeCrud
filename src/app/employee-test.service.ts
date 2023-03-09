import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from './models/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //Url generated after json watch
  baseUrl=" http://localhost:3000/Employee";

  //headers to get in json format
  headers=new HttpHeaders().set("authkey","value") 

  constructor(public http:HttpClient) { }

  
  //Making it Observable in order to subscribe it in component.ts
  //get all employee
  getPosts():Observable<any> 
  {
    return this.http.get<any>(this.baseUrl,{headers:this.headers}).pipe(
      catchError(this.handleError));  
  }
  //get employee by id 
  getEmpById(id:any):Observable<any>
  {
    return this.http.get<any>(this.baseUrl+'/'+id).pipe(
      catchError(this.handleError));    
  } 
  //Adding a new Employee
  addPosts(data:any):Observable<any>
  {
    return this.http.post<any>(this.baseUrl,data).pipe(
      catchError(this.handleError));    
  }
  //Updating a Employee
  updatePosts(data:Employee):Observable<any>
  {
    return this.http.put<any>(this.baseUrl+'/'+data.id,data,{headers:this.headers}) .pipe(
      catchError(this.handleError));    
  }
  //Deleting a employee by id
  deletePosts(id:any):Observable<any>
  {
    return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
      catchError(this.handleError));      
  }
  //Exception handling
  handleError(error:HttpErrorResponse)
  {
    if(error.error instanceof ErrorEvent)
    {
      //Error at Client side
      console.error('An error occurred:', error.error.message);
    }
    else 
    {
     //Error at server side
      console.error(
        `Backend returned code ${error.status}, `+
        `body was : ${error.error}`);
    }
    return throwError(`Something bad happened; please try again later.`); 
  };  
}
