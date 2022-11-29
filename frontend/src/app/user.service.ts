import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  register(body: any) {
    return this._http.post('http://127.0.0.1:5000/users/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  login(body: any) {
    return this._http.post('http://127.0.0.1:5000/users/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  user() {
    return this._http.get('http://127.0.0.1:5000/users/user', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  logout() {
    return this._http.get('http://127.0.0.1:5000/users/logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }


  addProperty(body: any,file :File) {
    
    const formData = new FormData();
    formData.append('data', body);
    if (file) {
      formData.append('file', file, file.name);
    }
    
console.log(formData);

return this._http.post('http://127.0.0.1:5000/property/addProperty', formData);


    // return this._http.post('http://127.0.0.1:5000/property/addProperty', formData, {
    //   observe: 'body',
    //   headers: new HttpHeaders().append('Content-Type', 'application/json').append('Content-Type', 'multipart/form-data')
    // });
  }

  getPropertyList() {
    return this._http.get('http://127.0.0.1:5000/property/getProperty', {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

}
