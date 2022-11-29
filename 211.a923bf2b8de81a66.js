"use strict";(self.webpackChunkquestionnaire=self.webpackChunkquestionnaire||[]).push([[211],{211:(X,_,s)=>{s.r(_),s.d(_,{QuestionnaireModule:()=>u});var m=s(6895),l=s(9197),e=s(4650),b=s(4387),k=s(5123),h=s(3238),v=s(1281);const T=new e.OlP("MAT_PROGRESS_BAR_DEFAULT_OPTIONS"),M=(0,h.pj)(class{constructor(t){this._elementRef=t}},"primary");let A=(()=>{class t extends M{constructor(r,i,a,o,c){super(r),this._ngZone=i,this._changeDetectorRef=a,this._animationMode=o,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new e.vpe,this._mode="determinate",this._transitionendHandler=O=>{0===this.animationEnd.observers.length||!O.target||!O.target.classList.contains("mdc-linear-progress__primary-bar")||("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))},this._isNoopAnimation="NoopAnimations"===o,c&&(c.color&&(this.color=this.defaultColor=c.color),this.mode=c.mode||this.mode)}get value(){return this._value}set value(r){this._value=y((0,v.su)(r)),this._changeDetectorRef.markForCheck()}get bufferValue(){return this._bufferValue||0}set bufferValue(r){this._bufferValue=y((0,v.su)(r)),this._changeDetectorRef.markForCheck()}get mode(){return this._mode}set mode(r){this._mode=r,this._changeDetectorRef.markForCheck()}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("transitionend",this._transitionendHandler)})}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._transitionendHandler)}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${"buffer"===this.mode?this.bufferValue:100}%`}_isIndeterminate(){return"indeterminate"===this.mode||"query"===this.mode}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(e.QbO,8),e.Y36(T,8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:8,hostBindings:function(r,i){2&r&&(e.uIk("aria-valuenow",i._isIndeterminate()?null:i.value)("mode",i.mode),e.ekj("_mat-animation-noopable",i._isNoopAnimation)("mdc-linear-progress--animation-ready",!i._isNoopAnimation)("mdc-linear-progress--indeterminate",i._isIndeterminate()))},inputs:{color:"color",value:"value",bufferValue:"bufferValue",mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[e.qOj],decls:7,vars:4,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0),e._UZ(1,"div",1)(2,"div",2),e.qZA(),e.TgZ(3,"div",3),e._UZ(4,"span",4),e.qZA(),e.TgZ(5,"div",5),e._UZ(6,"span",4),e.qZA()),2&r&&(e.xp6(1),e.Udp("flex-basis",i._getBufferBarFlexBasis()),e.xp6(2),e.Udp("transform",i._getPrimaryBarTransform()))},styles:["@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{height:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height, 4px)}.mat-mdc-progress-bar{display:block}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}"],encapsulation:2,changeDetection:0}),t})();function y(t,n=0,r=100){return Math.max(n,Math.min(r,t))}let w=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.BQ]}),t})();var x=s(3336),f=s(4859);function P(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"li",10),e.NdJ("click",function(){const o=e.CHM(r).$implicit,c=e.oxw();return e.KtG(c.answer(o))}),e._uU(1),e.qZA()}if(2&t){const r=n.$implicit,i=e.oxw();e.ekj("selected",(null==i.selectedOption?null:i.selectedOption.id)===r.id),e.xp6(1),e.hij(" ",r.text," ")}}function B(t,n){1&t&&e.GkF(0)}function Z(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(r);const a=e.oxw();return e.KtG(a.nextQuestion())}),e.TgZ(1,"mat-icon"),e._uU(2,"arrow_forward_ios"),e.qZA()()}if(2&t){const r=e.oxw();e.Q6J("disabled",null===r.selectedOption)}}function F(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){e.CHM(r);const a=e.oxw();return e.KtG(a.navigateToResultPage())}),e._uU(1,"Finish"),e.qZA()}if(2&t){const r=e.oxw();e.Q6J("disabled",null===r.selectedOption)}}class d{constructor(n,r){this.questionsService=n,this.router=r,this.currentQuestionIndex=0,this.name=""}get progress(){return this.currentQuestionIndex/(this.questions.length-1)*100}get currentQuestion(){return this.questions[this.currentQuestionIndex]}get isLastQuestion(){return this.questions.length-1!==this.currentQuestionIndex}get selectedOption(){return this.currentQuestion.selectedOption}set selectedOption(n){this.currentQuestion.selectedOption=n}get previousSelectedOption(){return this.currentQuestion.previousSelectedOption}set previousSelectedOption(n){this.currentQuestion.previousSelectedOption=n}previousQuestion(){this.currentQuestionIndex--}nextQuestion(){this.currentQuestionIndex++}answer(n){this.selectedOption=n,this.previousSelectedOption&&this.questionsService.decreaseScore(this.previousSelectedOption.value),this.questionsService.increaseScore(this.selectedOption.value),this.previousSelectedOption=this.selectedOption}navigateToResultPage(){this.router.navigate([this.router.url+"/result"])}static#e=this.\u0275fac=function(r){return new(r||d)(e.Y36(b.w),e.Y36(l.F0))};static#r=this.\u0275cmp=e.Xpm({type:d,selectors:[["app-form-extended"]],inputs:{questions:"questions"},decls:15,vars:7,consts:[[1,"form"],["mode","determinate",1,"progress-bar",3,"value"],[1,"question"],[1,"options"],["class","option",3,"selected","click",4,"ngFor","ngForOf"],[1,"nav"],["mat-icon-button","",3,"disabled","click"],[4,"ngIf","ngIfThen","ngIfElse"],["buttonNext",""],["buttonFinish",""],[1,"option",3,"click"],["mat-flat-button","","color","primary",1,"",3,"disabled","click"]],template:function(r,i){if(1&r&&(e.TgZ(0,"div",0),e._UZ(1,"mat-progress-bar",1),e.TgZ(2,"p",2),e._uU(3),e.qZA(),e.TgZ(4,"ul",3),e.YNc(5,P,2,3,"li",4),e.qZA(),e.TgZ(6,"nav",5)(7,"button",6),e.NdJ("click",function(){return i.previousQuestion()}),e.TgZ(8,"mat-icon"),e._uU(9,"arrow_back_ios_new"),e.qZA()(),e.YNc(10,B,1,0,"ng-container",7),e.qZA()(),e.YNc(11,Z,3,1,"ng-template",null,8,e.W1O),e.YNc(13,F,2,1,"ng-template",null,9,e.W1O)),2&r){const a=e.MAs(12),o=e.MAs(14);e.xp6(1),e.Q6J("value",i.progress),e.xp6(2),e.hij(" ",i.currentQuestion.questionText," "),e.xp6(2),e.Q6J("ngForOf",i.currentQuestion.options),e.xp6(2),e.Q6J("disabled",!i.currentQuestionIndex),e.xp6(3),e.Q6J("ngIf",i.isLastQuestion)("ngIfThen",a)("ngIfElse",o)}},dependencies:[m.sg,m.O5,A,x.Hw,f.lW,f.RK],styles:[".form[_ngcontent-%COMP%]{max-width:40rem;background-color:#fff;border-radius:10px;padding:1rem}.progress-bar[_ngcontent-%COMP%]{margin-bottom:.8rem}.question[_ngcontent-%COMP%]{max-width:71ch}.options[_ngcontent-%COMP%]{display:grid;gap:10px;padding-left:0;list-style-type:none}.option[_ngcontent-%COMP%]{padding:10px;border:1px solid lightblue;border-radius:6px;cursor:pointer}.option[_ngcontent-%COMP%]:hover{border-color:#019fff}.option.selected[_ngcontent-%COMP%]{background-color:#019fff;color:#fff;border-color:#019fff}.nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.mdc-icon-button[_ngcontent-%COMP%]{color:#019fff}.mat-mdc-unelevated-button[_ngcontent-%COMP%]:not(:disabled){background-color:#019fff}"]})}class p{constructor(n){this.questionsService=n}ngOnInit(){this.questions?.length||(this.questions=this.questionsService.getQuestions())}static#e=this.\u0275fac=function(r){return new(r||p)(e.Y36(b.w))};static#r=this.\u0275cmp=e.Xpm({type:p,selectors:[["app-questionnaire"]],decls:4,vars:1,consts:[[1,"container"],["src","../../../assets/img/questionnaire-page.jpeg","alt","main image","width","600px",1,"image"],[3,"questions"]],template:function(r,i){1&r&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0),e._UZ(2,"img",1)(3,"app-form-extended",2),e.qZA()),2&r&&(e.xp6(3),e.Q6J("questions",i.questions))},dependencies:[k.G,d],styles:[".container[_ngcontent-%COMP%]{min-height:100vh;background:rgb(255,255,255);background:linear-gradient(180deg,rgb(255,255,255) 43%,rgb(0,159,255) 100%);display:grid;justify-content:center}.image[_ngcontent-%COMP%]{margin-top:6rem}"]})}const E=[{path:"",component:p}];class g{static#e=this.\u0275fac=function(r){return new(r||g)};static#r=this.\u0275mod=e.oAB({type:g});static#n=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(E),l.Bz]})}var Q=s(294);class u{static#e=this.\u0275fac=function(r){return new(r||u)};static#r=this.\u0275mod=e.oAB({type:u});static#n=this.\u0275inj=e.cJS({imports:[m.ez,g,w,x.Ps,f.ot,l.Bz,Q.I]})}}}]);