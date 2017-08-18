import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class loginService{
    constructor(private http: Http){
        console.log('login intitialized');
    }
    getLogin(){
        return this.http.get('http://localhost:3000/login')
        .map(res => res.json()
        );
    }
    postLogin(value){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
           console.log( 'post');
        return this.http.post('http://localhost:3000/login', value, {headers: headers})
        .map(res => res.json()
        );
    }
} 
