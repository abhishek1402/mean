import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class goalService{
    constructor(private http: Http){
        console.log('login intitialized');
    }
    getGoal(){
          const headers = new Headers();
        this.http.post('http://localhost:3000/token/goal', { headers }).subscribe(
        data => {
            console.log(data.json());           
        }
);
    }
    postGoal(value){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
           console.log( 'post');
           console.log(value);
         this.http.post('http://localhost:3000/token/goal', value, { headers }).subscribe(
        data => {
            console.log(data.json());           
        }
);
    }
} 
