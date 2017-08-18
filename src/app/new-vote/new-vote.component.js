var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestError } from './../common/bad-request-error';
import { loginService } from './../service/login-service.service';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
var NewVoteComponent = (function () {
    function NewVoteComponent(fb, loginservice) {
        this.loginservice = loginservice;
        this.newVote = fb.group({
            name: [''],
            project: [''],
            workYesterday: [''],
            workToday: [''],
            Impediments: [''],
            discount: ['']
        });
    }
    NewVoteComponent.prototype.ngOnInit = function () {
    };
    NewVoteComponent.prototype.submit = function (f) {
        var _this = this;
        this.loginservice.postLogin(f).
            subscribe(function (res) { console.log(res); }, function (err) {
            if (err instanceof BadRequestError) {
                debugger;
                alert('there is validation error');
            }
            else {
                throw err;
            }
            _this.newVote;
        });
    };
    return NewVoteComponent;
}());
NewVoteComponent = __decorate([
    Component({
        selector: 'app-new-vote',
        templateUrl: './new-vote.component.html',
        styleUrls: ['./new-vote.component.css']
    }),
    __metadata("design:paramtypes", [FormBuilder, loginService])
], NewVoteComponent);
export { NewVoteComponent };
//# sourceMappingURL=new-vote.component.js.map