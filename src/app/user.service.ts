import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8090/users";

  public getAllusers(){
    return this.http.get<User[]>(this.baseUrl + "/all");
  }

  public getById(userId: string){
    return this.http.get<User>(this.baseUrl + "/id/" + userId);
  }

  public createUser(user: User){
    return this.http.post<User>(this.baseUrl,user);
  }

  public updateUser(user: User){
    return this.http.put<User>(this.baseUrl, user);
  }

  public deleteUser(userId: string){
    return this.http.delete(this.baseUrl + "/delete/" + userId);
  }
}
