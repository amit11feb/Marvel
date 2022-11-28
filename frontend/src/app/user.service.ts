import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  register(body: any) {
<<<<<<< HEAD
    return this._http.post('http://127.0.0.1:5000/users/register', body, {
=======
    return this._http.post('http://127.0.0.1:3000/users/register', body, {
>>>>>>> 280bb8ca09b28068928a3c9c8c23eaacfa05be69
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  login(body: any) {
<<<<<<< HEAD
    return this._http.post('http://127.0.0.1:5000/users/login', body, {
=======
    return this._http.post('http://127.0.0.1:3000/users/login', body, {
>>>>>>> 280bb8ca09b28068928a3c9c8c23eaacfa05be69
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  user() {
<<<<<<< HEAD
    return this._http.get('http://127.0.0.1:5000/users/user', {
=======
    return this._http.get('http://127.0.0.1:3000/users/user', {
>>>>>>> 280bb8ca09b28068928a3c9c8c23eaacfa05be69
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  logout() {
<<<<<<< HEAD
    return this._http.get('http://127.0.0.1:5000/users/logout', {
=======
    return this._http.get('http://127.0.0.1:3000/users/logout', {
>>>>>>> 280bb8ca09b28068928a3c9c8c23eaacfa05be69
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

<<<<<<< HEAD
return this._http.post('http://127.0.0.1:5000/property/addProperty', formData);


    // return this._http.post('http://127.0.0.1:5000/property/addProperty', formData, {
=======
return this._http.post('http://127.0.0.1:3000/property/addProperty', formData);


    // return this._http.post('http://127.0.0.1:3000/property/addProperty', formData, {
>>>>>>> 280bb8ca09b28068928a3c9c8c23eaacfa05be69
    //   observe: 'body',
    //   headers: new HttpHeaders().append('Content-Type', 'application/json').append('Content-Type', 'multipart/form-data')
    // });
  }

  getPropertyList() {
<<<<<<< HEAD
    return this._http.get('http://127.0.0.1:5000/property/getProperty', {
=======
    return this._http.get('http://127.0.0.1:3000/property/getProperty', {
>>>>>>> 280bb8ca09b28068928a3c9c8c23eaacfa05be69
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

}
