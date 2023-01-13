import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  register(body: any) {
    return this._http.post('http://20.235.103.186:3001/users/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  login(body: any) {
    return this._http.post('http://20.235.103.186:3001/users/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  user() {
    return this._http.get('http://20.235.103.186:3001/users/user', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  logout() {
    return this._http.get('http://20.235.103.186:3001/users/logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  addProperty(body: any, file: File) {

    const formData = new FormData();
    formData.append('data', body);
    if (file) {
      formData.append('file', file, file.name);
    }
    console.log("USERSRVIC", formData);

    return this._http.post('http://20.235.103.186:3001/property/addProperty', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }



  deleteProperty(id: any) {
    return this._http.delete('http://20.235.103.186:3001/property/deleteProperty/' + id);
  }
  getPropertybyid(id: any) {
    return this._http.get('http://20.235.103.186:3001/property/getProperty/' + id);
  }


  getPropertyList() {
    return this._http.get('http://20.235.103.186:3001/property/getProperty', {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

}
