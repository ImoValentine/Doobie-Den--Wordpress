import{r as i,c as s,h as t}from"./p-e97fde0a.js";import{o as h,s as e}from"./p-322d462c.js";import"./p-03631502.js";import"./p-e2d5dc4f.js";import"./p-d3366af3.js";import"./p-401e165e.js";import"./p-830ab1a3.js";import"./p-ec182234.js";import"./p-3f6362a4.js";import"./p-d7296e4c.js";import"./p-6ec14893.js";const o=":host{display:block}";const n=o;const d=class{constructor(t){i(this,t);this.scChange=s(this,"scChange",7);this.scClear=s(this,"scClear",7);this.scInput=s(this,"scInput",7);this.scFocus=s(this,"scFocus",7);this.scBlur=s(this,"scBlur",7);this.size="medium";this.value="";this.pill=false;this.label=undefined;this.showLabel=true;this.help="";this.placeholder=undefined;this.disabled=false;this.readonly=false;this.required=false;this.invalid=false;this.autofocus=undefined;this.hasFocus=undefined;this.error=undefined}async handleChange(){this.value=this.input.value;this.scChange.emit()}async reportValidity(){var i,s;return(s=(i=this.input)===null||i===void 0?void 0:i.reportValidity)===null||s===void 0?void 0:s.call(i)}componentWillLoad(){this.handleCheckoutChange();this.removeChangeListener=h("checkout",(()=>this.handleCheckoutChange()))}disconnectedCallback(){this.removeChangeListener()}handleCheckoutChange(){var i,s,t,h,o,n;if(this===null||this===void 0?void 0:this.value)return;if((i=e.checkout)===null||i===void 0?void 0:i.phone){this.value=(s=e.checkout)===null||s===void 0?void 0:s.phone;return}if((h=(t=e.checkout)===null||t===void 0?void 0:t.customer)===null||h===void 0?void 0:h.phone){this.value=(n=(o=e.checkout)===null||o===void 0?void 0:o.customer)===null||n===void 0?void 0:n.phone;return}}render(){return t("sc-phone-input",{key:"ffa46581cc85dead7a0ca10463dee021f0496ab4",name:"phone",ref:i=>this.input=i,value:this.value,label:this.label,help:this.help,autocomplete:"phone",placeholder:this.placeholder,readonly:this.readonly,required:this.required,invalid:this.invalid,autofocus:this.autofocus,hasFocus:this.hasFocus,onScChange:()=>this.handleChange(),onScInput:()=>this.scInput.emit(),onScFocus:()=>this.scFocus.emit(),onScBlur:()=>this.scBlur.emit()})}};d.style=n;export{d as sc_customer_phone};
//# sourceMappingURL=p-c048dc09.entry.js.map