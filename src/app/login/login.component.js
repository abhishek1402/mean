var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { loginService } from './../service/login-service.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
var LoginComponent = (function () {
    function LoginComponent(fb, loginservice) {
        this.loginservice = loginservice;
        this.login = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginservice.getLogin().subscribe(function (post) {
            console.log(post);
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.login.get(['email']);
        },
        enumerable: true,
        configurable: true
    });
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [FormBuilder, loginService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map