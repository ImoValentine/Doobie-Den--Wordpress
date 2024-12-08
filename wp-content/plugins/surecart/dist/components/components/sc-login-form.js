import{proxyCustomElement,HTMLElement,h,Fragment}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{d as defineCustomElement$d}from"./sc-alert2.js";import{d as defineCustomElement$c}from"./sc-block-ui2.js";import{d as defineCustomElement$b}from"./sc-button2.js";import{d as defineCustomElement$a}from"./sc-card2.js";import{d as defineCustomElement$9}from"./sc-divider2.js";import{d as defineCustomElement$8}from"./sc-flex2.js";import{d as defineCustomElement$7}from"./sc-form2.js";import{d as defineCustomElement$6}from"./sc-form-control2.js";import{d as defineCustomElement$5}from"./sc-icon2.js";import{d as defineCustomElement$4}from"./sc-input2.js";import{d as defineCustomElement$3}from"./sc-spinner2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";const scLoginFormCss=".login-form{font-size:16px;margin:var(--sc-spacing-xx-large) auto;max-width:400px;position:relative}.login-form__title{margin-bottom:var(--sc-spacing-medium);font-size:var(--sc-font-size-xx-large);font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense);text-align:var(--sc-login-text-align, center)}.login-form__back{text-align:center;font-size:var(--sc-font-size-small)}sc-card{--sc-card-padding:var(--sc-spacing-xx-large)}",ScLoginFormStyle0=scLoginFormCss,ScLogin=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.step=0,this.email="",this.password="",this.verifyCode="",this.loading=void 0,this.error=void 0}handleStepChange(){1===this.step&&setTimeout((()=>{var e,t;null===(t=null===(e=this.passwordInput)||void 0===e?void 0:e.triggerFocus)||void 0===t||t.call(e)}),50),2===this.step&&setTimeout((()=>{var e,t;null===(t=null===(e=this.codeInput)||void 0===e?void 0:e.triggerFocus)||void 0===t||t.call(e)}),50)}handleLoadingChange(e){e&&(this.error=null)}handleVerifyCodeChange(e){(null==e?void 0:e.length)>=6&&this.submitCode()}handleError(e){console.error(this.error),this.error=e||{message:wp.i18n.__("Something went wrong","surecart")}}async createLoginCode(){try{this.loading=!0,await apiFetch({method:"POST",path:"surecart/v1/verification_codes",data:{login:this.email}}),this.step=this.step+1}catch(e){this.handleError(e)}finally{this.loading=!1}}async submitCode(){try{this.loading=!0;const{verified:e}=await apiFetch({method:"POST",path:"surecart/v1/verification_codes/verify",data:{login:this.email,code:this.verifyCode}});if(!e)throw{message:wp.i18n.__("Verification code is not valid. Please try again.","surecart")};window.location.reload()}catch(e){this.handleError(e),this.loading=!1}}async login(){try{this.loading=!0;const{redirect_url:e}=await apiFetch({method:"POST",path:"surecart/v1/login",data:{login:this.email,password:this.password}});e?window.location.replace(e):window.location.reload()}catch(e){this.handleError(e),this.loading=!1}}async checkEmail(){try{this.loading=!0,await apiFetch({method:"POST",path:"surecart/v1/check_email",data:{login:this.email}}),this.step=this.step+1}catch(e){this.handleError(e)}finally{this.loading=!1}}renderInner(){return 2===this.step?h(Fragment,null,h("div",{class:"login-form__title",part:"title"},wp.i18n.__("Check your email for a confirmation code","surecart")),h("div",null,h("sc-form",{onScFormSubmit:()=>this.submitCode()},h("sc-input",{label:wp.i18n.__("Confirmation code","surecart"),type:"text",ref:e=>this.codeInput=e,autofocus:!0,required:!0,onScInput:e=>this.verifyCode=e.target.value}),h("sc-button",{type:"primary",submit:!0,full:!0},h("sc-icon",{name:"lock",slot:"prefix"}),wp.i18n.__("Login with Code","surecart"))))):1===this.step&&this.email?h(Fragment,null,h("div",{class:"login-form__title",part:"title"},h("div",null,wp.i18n.__("Welcome","surecart")),h("sc-button",{style:{fontSize:"18px"},size:"small",pill:!0,caret:!0,onClick:()=>this.step=this.step-1},h("sc-icon",{name:"user",slot:"prefix"}),this.email)),h("sc-flex",{flexDirection:"column",style:{"--sc-flex-column-gap":"var(--sc-spacing-large)"}},h("div",null,h("sc-form",{onScFormSubmit:()=>this.createLoginCode()},h("sc-button",{class:"login-code",type:"primary",submit:!0,full:!0},h("sc-icon",{name:"mail",slot:"prefix"}),wp.i18n.__("Send a login code","surecart"))),h("sc-divider",{style:{"--spacing":"0.5em"}},wp.i18n.__("or","surecart")),h("sc-form",{onScFormSubmit:()=>this.login()},h("sc-input",{label:wp.i18n.__("Enter your password","surecart"),type:"password",ref:e=>this.passwordInput=e,onKeyDown:e=>"Enter"===e.key&&this.login(),autofocus:!0,required:!0,onScInput:e=>this.password=e.target.value}),h("sc-button",{type:"primary",outline:!0,submit:!0,full:!0},h("sc-icon",{name:"lock",slot:"prefix"}),wp.i18n.__("Login","surecart")))))):h(Fragment,null,h("div",{class:"login-form__title",part:"title"},h("slot",{name:"title"})),h("sc-form",{onScFormSubmit:()=>this.checkEmail()},h("sc-input",{type:"text",value:this.email,label:wp.i18n.__("Username or Email Address","surecart"),onScInput:e=>this.email=e.target.value,onKeyDown:e=>"Enter"===e.key&&this.checkEmail(),required:!0,autofocus:!0}),h("sc-button",{type:"primary",submit:!0,full:!0},h("sc-icon",{name:"arrow-right",slot:"suffix"}),wp.i18n.__("Next","surecart"))))}render(){var e,t;return h("div",{key:"a5dc72cbce20c6561b7f475f8f7357bc064cf99e",class:"login-form"},h("sc-card",{key:"725f4531c1f40548faffb12fca0c4632df847e8e"},!!this.error&&h("sc-alert",{key:"bd75b6cd331a83456621cf4fec9c244b5ba5d354",open:!0,type:"danger",closable:!0,onScHide:()=>this.error=null},h("span",{key:"1d825ab9eedfaeadea9d260093165333d7bbbe05",slot:"title",innerHTML:null===(e=this.error)||void 0===e?void 0:e.message}),((null===(t=this.error)||void 0===t?void 0:t.additional_errors)||[]).map((({message:e})=>h("div",{innerHTML:e})))),this.renderInner()),this.loading&&h("sc-block-ui",{key:"721665c3210a8a0a6546cac84e87a10aa15ba5b3",spinner:!0,style:{zIndex:"9","--sc-block-ui-opacity":"0.5"}}))}static get watchers(){return{step:["handleStepChange"],loading:["handleLoadingChange"],verifyCode:["handleVerifyCodeChange"]}}static get style(){return ScLoginFormStyle0}},[1,"sc-login-form",{step:[32],email:[32],password:[32],verifyCode:[32],loading:[32],error:[32]},void 0,{step:["handleStepChange"],loading:["handleLoadingChange"],verifyCode:["handleVerifyCodeChange"]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-login-form","sc-alert","sc-block-ui","sc-button","sc-card","sc-divider","sc-flex","sc-form","sc-form-control","sc-icon","sc-input","sc-spinner","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-login-form":customElements.get(e)||customElements.define(e,ScLogin);break;case"sc-alert":customElements.get(e)||defineCustomElement$d();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$c();break;case"sc-button":customElements.get(e)||defineCustomElement$b();break;case"sc-card":customElements.get(e)||defineCustomElement$a();break;case"sc-divider":customElements.get(e)||defineCustomElement$9();break;case"sc-flex":customElements.get(e)||defineCustomElement$8();break;case"sc-form":customElements.get(e)||defineCustomElement$7();break;case"sc-form-control":customElements.get(e)||defineCustomElement$6();break;case"sc-icon":customElements.get(e)||defineCustomElement$5();break;case"sc-input":customElements.get(e)||defineCustomElement$4();break;case"sc-spinner":customElements.get(e)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$2()}}))}const ScLoginForm=ScLogin,defineCustomElement=defineCustomElement$1;export{ScLoginForm,defineCustomElement};