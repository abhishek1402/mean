var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BadRequestError } from "../common/bad-request-error";
var loginService = (function () {
    function loginService(http) {
        this.http = http;
        console.log('login intitialized');
    }
    loginService.prototype.getLogin = function () {
        return this.http.get('http://localhost:3000/login')
            .map(function (res) { return res.json(); });
    };
    loginService.prototype.postLogin = function (value) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log("post");
        return this.http.post('http://localhost:3000/newVote', value, { headers: headers })
            .catch(this.handleError)
            .map(function (res) { return res.json(); });
    };
    loginService.prototype.handleError = function (err) {
        if (err.status === 500) {
            return Observable.throw(new BadRequestError());
        }
        else
            return Observable.throw(new AppError(err));
    };
    return loginService;
}());
loginService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], loginService);
export { loginService };
//# sourceMappingURL=login-service.service.js.map