import { AppError } from './../common/app-error';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BadRequestError } from '../common/bad-request-error';
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
    postLogin(value: {}){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
           console.log( 'post');
        return this.http.post('http://localhost:3000/newVote', value, {headers: headers})
        .catch(this.handleError)
        //   if(err.status === 500){
        //     return Observable.throw(new BadRequestError())
        //     }
        //     else
        //    return Observable.throw(new AppError(err));
        //we can write it here also but then we have to write it for all the 
        //function so we created a private function
        .map(res => res.json()
        );
    }
    private handleError(err: Response){
         if (err.status === 500){
            return Observable.throw(new BadRequestError());
            }
            else
           return Observable.throw(new AppError(err));
    }
} 
