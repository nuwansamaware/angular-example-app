"use strict";(self.webpackChunkangularexampleapp=self.webpackChunkangularexampleapp||[]).push([[612],{5612:(k,d,i)=>{i.r(d),i.d(d,{AuthModule:()=>J});var q=i(7995),g=i(6019),r=i(9133),u=i(3886),p=i(7244),l=i(9814),h=i(5551),t=i(3668),Z=i(8895),_=i(1234),f=i(6167),v=i(888),m=i(8167),T=i(138),C=i(9112),A=i(86);function b(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(o.getErrorMessage("firstName"))}}function x(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(o.getErrorMessage("lastName"))}}function U(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(o.getErrorMessage("email"))}}function P(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(o.getErrorMessage("password"))}}const w=["loginForm"];function O(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(o.getErrorMessage("email"))}}function N(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(o.getErrorMessage("password"))}}const I=p.ff.routesNames.auth,F=[{path:I.signUp,component:(()=>{class n{constructor(o,e,s,c){this.formBuilder=o,this.authService=e,this.router=s,this.utilsService=c,this.firstName=new r.NI("",[r.kI.required,r.kI.maxLength(100)]),this.lastName=new r.NI("",[r.kI.required,r.kI.maxLength(100)]),this.email=new r.NI("",[r.kI.required,r.kI.email]),this.password=new r.NI("",[r.kI.required,r.kI.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$")]),this.hide=!0,this.signUpForm=this.formBuilder.group({firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password})}getErrorMessage(o){const e=this[o];return(null==e?void 0:e.hasError("required"))?"You must enter a value":(null==e?void 0:e.hasError("email"))?"Not a valid email":(null==e?void 0:e.hasError("pattern"))?"Not a valid password":void 0}sendForm(){if(this.signUpForm.valid){const o=this.signUpForm.value;this.authService.signUp(o.firstName,o.lastName,o.email,o.password).subscribe(e=>{e.errors?1e4===e.errors[0].code&&this.utilsService.showSnackBar("This email is not available. Try again, with a different one.","warning-snack-bar"):this.router.navigate([p.ff.routes.auth.logIn]).then(()=>{this.utilsService.showSnackBar("Cool! Now try to log in!","info-snack-bar")})})}}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.qu),t.Y36(Z.e),t.Y36(u.F0),t.Y36(_.F))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sign-up-page"]],decls:44,vars:16,consts:[["cols","1","rows","1","rowHeight","2:1"],[1,"signup--form__box--blue"],[1,"signup--form-container"],[1,"signup--form__header-title"],[1,"example-container",3,"formGroup"],["appearance","outline"],["matInput","","placeholder","Jason",3,"formControl"],["matSuffix",""],[4,"ngIf"],["matInput","","placeholder","Bourne",3,"formControl"],["matInput","","placeholder","pat@example.com","required","",3,"formControl"],["matInput","",3,"formControl","type"],["mat-icon-button","","matSuffix","",3,"click"],["mat-raised-button","","color","primary",1,"signup--form__submit-button",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"mat-grid-list",0),t.TgZ(1,"mat-grid-tile"),t.TgZ(2,"mat-card",1),t.TgZ(3,"div",2),t.TgZ(4,"p",3),t._uU(5,"Give it a try!"),t.qZA(),t.TgZ(6,"form",4),t.TgZ(7,"p"),t.TgZ(8,"mat-form-field",5),t.TgZ(9,"mat-label"),t._uU(10,"First name"),t.qZA(),t._UZ(11,"input",6),t.TgZ(12,"mat-icon",7),t._uU(13,"sentiment_very_satisfied"),t.qZA(),t.YNc(14,b,2,1,"mat-error",8),t.qZA(),t.qZA(),t.TgZ(15,"p"),t.TgZ(16,"mat-form-field",5),t.TgZ(17,"mat-label"),t._uU(18,"Last name"),t.qZA(),t._UZ(19,"input",9),t.TgZ(20,"mat-icon",7),t._uU(21,"favorite"),t.qZA(),t.YNc(22,x,2,1,"mat-error",8),t.qZA(),t.qZA(),t.TgZ(23,"p"),t.TgZ(24,"mat-form-field",5),t.TgZ(25,"mat-label"),t._uU(26,"Enter your email"),t.qZA(),t._UZ(27,"input",10),t.YNc(28,U,2,1,"mat-error",8),t.qZA(),t.qZA(),t.TgZ(29,"p"),t.TgZ(30,"mat-form-field",5),t.TgZ(31,"mat-label"),t._uU(32,"Enter a password"),t.qZA(),t._UZ(33,"input",11),t.TgZ(34,"button",12),t.NdJ("click",function(){return e.hide=!e.hide}),t.TgZ(35,"mat-icon"),t._uU(36),t.qZA(),t.qZA(),t.TgZ(37,"mat-hint"),t._uU(38,"Must be minimum eight characters, at least one uppercase letter, one lowercase letter and one number"),t.qZA(),t.YNc(39,P,2,1,"mat-error",8),t.qZA(),t.qZA(),t.TgZ(40,"p"),t.TgZ(41,"button",13),t.NdJ("click",function(){return e.sendForm()}),t._uU(42),t.ALo(43,"uppercase"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.Q6J("formGroup",e.signUpForm),t.xp6(5),t.Q6J("formControl",e.firstName),t.xp6(3),t.Q6J("ngIf",e.email.invalid),t.xp6(5),t.Q6J("formControl",e.lastName),t.xp6(3),t.Q6J("ngIf",e.email.invalid),t.xp6(5),t.Q6J("formControl",e.email),t.xp6(1),t.Q6J("ngIf",e.email.invalid),t.xp6(5),t.Q6J("formControl",e.password)("type",e.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",e.hide),t.xp6(2),t.Oqu(e.hide?"visibility_off":"visibility"),t.xp6(3),t.Q6J("ngIf",e.password.invalid),t.xp6(3),t.Oqu(t.lcZ(43,14,"Sign Up")))},directives:[f.Il,f.DX,v.a8,r._Y,r.JL,r.sg,m.KE,m.hX,T.Nt,r.Fj,r.JJ,r.oH,C.Hw,m.R9,g.O5,r.Q7,A.lW,m.bx,m.TO],pipes:[g.gd],styles:[".signup--form-container[_ngcontent-%COMP%]{text-align:center}.signup--form-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.signup--form-container[_ngcontent-%COMP%]   .signup--form__header-title[_ngcontent-%COMP%]{margin-bottom:2rem}.signup--form-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.mat-form-field[_ngcontent-%COMP%]{width:100%}.signup--form__box--blue[_ngcontent-%COMP%]{padding:4rem}[_nghost-%COMP%]     .mat-form-field-flex{background:whitesmoke}.signup--form__header-title[_ngcontent-%COMP%]{font-weight:bold;font-size:20px;color:#000000de}.signup--form__submit-button[_ngcontent-%COMP%]{margin-top:40px}"],data:{animation:[(0,l.X$)("fadeIn",[(0,l.eR)("* => *",(0,l._7)(h.K1,{params:{timing:1,delay:0}}))])]}}),n})()},{path:I.logIn,component:(()=>{class n{constructor(o,e,s,c){this.formBuilder=o,this.authService=e,this.router=s,this.utilsService=c,this.email=new r.NI("",[r.kI.required,r.kI.email]),this.password=new r.NI("",[r.kI.required]),this.hide=!0,this.logInForm=this.formBuilder.group({email:this.email,password:this.password})}getErrorMessage(o){const e=this[o];return(null==e?void 0:e.hasError("required"))?"You must enter a value":(null==e?void 0:e.hasError("email"))?"Not a valid email":void 0}sendForm(){if(this.logInForm.valid){const o=this.logInForm.value;this.authService.logIn(o.email,o.password).subscribe(e=>{e.errors?11e3===e.errors[0].code&&this.utilsService.showSnackBar("Nice! Let's create some heroes","info-snack-bar"):this.router.navigate([p.ff.routes.hero.myHeroes])})}}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.qu),t.Y36(Z.e),t.Y36(u.F0),t.Y36(_.F))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-log-in-page"]],viewQuery:function(o,e){if(1&o&&t.Gf(w,5),2&o){let s;t.iGM(s=t.CRH())&&(e.loginForm=s.first)}},decls:29,vars:12,consts:[["cols","1","rows","1","rowHeight","2:1"],[1,"login--form__box--blue"],[1,"login--form-container"],[1,"login--form__header-title"],[1,"example-container",3,"formGroup"],["loginForm","ngForm"],["appearance","outline"],["matInput","","placeholder","pat@example.com","required","",3,"formControl"],[4,"ngIf"],["matInput","",3,"formControl","type"],["mat-icon-button","","matSuffix","",3,"click"],["mat-raised-button","","color","primary",1,"login--form__submit-button",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"mat-grid-list",0),t.TgZ(1,"mat-grid-tile"),t.TgZ(2,"mat-card",1),t.TgZ(3,"div",2),t.TgZ(4,"p",3),t._uU(5,"Try to log in!"),t.qZA(),t.TgZ(6,"form",4,5),t.TgZ(8,"p"),t.TgZ(9,"mat-form-field",6),t.TgZ(10,"mat-label"),t._uU(11,"Enter your email"),t.qZA(),t._UZ(12,"input",7),t.YNc(13,O,2,1,"mat-error",8),t.qZA(),t.qZA(),t.TgZ(14,"p"),t.TgZ(15,"mat-form-field",6),t.TgZ(16,"mat-label"),t._uU(17,"Enter a password"),t.qZA(),t._UZ(18,"input",9),t.TgZ(19,"button",10),t.NdJ("click",function(){return e.hide=!e.hide}),t.TgZ(20,"mat-icon"),t._uU(21),t.qZA(),t.qZA(),t.TgZ(22,"mat-hint"),t._uU(23,"Must be minimum eight characters, at least one uppercase letter, one lowercase letter and one number"),t.qZA(),t.YNc(24,N,2,1,"mat-error",8),t.qZA(),t.qZA(),t.TgZ(25,"p"),t.TgZ(26,"button",11),t.NdJ("click",function(){return e.sendForm()}),t._uU(27),t.ALo(28,"uppercase"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.Q6J("formGroup",e.logInForm),t.xp6(6),t.Q6J("formControl",e.email),t.xp6(1),t.Q6J("ngIf",e.email.invalid),t.xp6(5),t.Q6J("formControl",e.password)("type",e.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",e.hide),t.xp6(2),t.Oqu(e.hide?"visibility_off":"visibility"),t.xp6(3),t.Q6J("ngIf",e.password.invalid),t.xp6(3),t.Oqu(t.lcZ(28,10,"Log In")))},directives:[f.Il,f.DX,v.a8,r._Y,r.JL,r.sg,m.KE,m.hX,T.Nt,r.Fj,r.Q7,r.JJ,r.oH,g.O5,A.lW,m.R9,C.Hw,m.bx,m.TO],pipes:[g.gd],styles:[".login--form-container[_ngcontent-%COMP%]{text-align:center}.login--form-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.login--form-container[_ngcontent-%COMP%]   .login--form__header-title[_ngcontent-%COMP%]{margin-bottom:2rem}.login--form-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.mat-form-field[_ngcontent-%COMP%]{width:100%}.login--form__box--blue[_ngcontent-%COMP%]{padding:4rem}[_nghost-%COMP%]     .mat-form-field-flex{background:whitesmoke}.login--form__header-title[_ngcontent-%COMP%]{font-weight:bold;font-size:20px;color:#000000de}.login--form__submit-button[_ngcontent-%COMP%]{margin-top:40px}"],data:{animation:[(0,l.X$)("fadeIn",[(0,l.eR)("* => *",(0,l._7)(h.K1,{params:{timing:1,delay:0}}))])]}}),n})()},{path:"**",redirectTo:p.ff.routes.error404}];let S=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(F)],u.Bz]}),n})(),J=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,r.UX,q.m,S]]}),n})()}}]);