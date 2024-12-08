import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{o as openWormhole}from"./consumer.js";import{d as defineCustomElement$h}from"./sc-alert2.js";import{d as defineCustomElement$g}from"./sc-card2.js";import{d as defineCustomElement$f}from"./sc-dashboard-module2.js";import{d as defineCustomElement$e}from"./sc-divider2.js";import{d as defineCustomElement$d}from"./sc-format-number2.js";import{d as defineCustomElement$c}from"./sc-icon2.js";import{d as defineCustomElement$b}from"./sc-line-item2.js";import{d as defineCustomElement$a}from"./sc-line-item-total2.js";import{d as defineCustomElement$9}from"./sc-order-confirmation-line-items2.js";import{d as defineCustomElement$8}from"./sc-order-confirmation-totals2.js";import{d as defineCustomElement$7}from"./sc-order-status-badge2.js";import{d as defineCustomElement$6}from"./sc-product-line-item2.js";import{d as defineCustomElement$5}from"./sc-quantity-select2.js";import{d as defineCustomElement$4}from"./sc-skeleton2.js";import{d as defineCustomElement$3}from"./sc-tag2.js";import{d as defineCustomElement$2}from"./sc-total2.js";const scOrderConfirmationDetailsCss=":host{display:block}",ScOrderConfirmationDetailsStyle0=":host{display:block}",ScOrderConfirmationDetails$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.order=void 0,this.loading=void 0}renderOrderStatus(){var e,t;return"processing"===(null===(e=null==this?void 0:this.order)||void 0===e?void 0:e.status)?h("sc-tag",{type:"warning"},wp.i18n.__("On Hold","surecart")):h("sc-order-status-badge",{status:null===(t=this.order)||void 0===t?void 0:t.status})}render(){var e,t;return this.loading?h("sc-dashboard-module",null,h("sc-skeleton",{slot:"heading",style:{width:"120px",display:"inline-block"}}),h("sc-skeleton",{slot:"end",style:{width:"60px",display:"inline-block"}}),h("sc-card",null,h("sc-line-item",null,h("sc-skeleton",{style:{width:"50px",height:"50px","--border-radius":"0"},slot:"image"}),h("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),h("sc-skeleton",{slot:"description",style:{width:"60px",display:"inline-block"}}),h("sc-skeleton",{style:{width:"120px",display:"inline-block"},slot:"price"}),h("sc-skeleton",{style:{width:"60px",display:"inline-block"},slot:"price-description"})),h("sc-divider",null),h("sc-line-item",null,h("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),h("sc-skeleton",{style:{width:"120px",display:"inline-block"},slot:"price"})),h("sc-divider",null),h("sc-line-item",null,h("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),h("sc-skeleton",{style:{width:"120px",display:"inline-block"},slot:"price"})))):(null===(e=this.order)||void 0===e?void 0:e.number)?h("sc-dashboard-module",{class:"order"},h("span",{slot:"heading"},wp.i18n.sprintf(wp.i18n.__("Order #%s","surecart"),null===(t=this.order)||void 0===t?void 0:t.number)),h("span",{slot:"end"},this.renderOrderStatus()),h("sc-card",null,h("sc-order-confirmation-line-items",null),h("sc-divider",null),h("sc-order-confirmation-totals",null))):void 0}static get style(){return":host{display:block}"}},[1,"sc-order-confirmation-details",{order:[16],loading:[4]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-order-confirmation-details","sc-alert","sc-card","sc-dashboard-module","sc-divider","sc-format-number","sc-icon","sc-line-item","sc-line-item-total","sc-order-confirmation-line-items","sc-order-confirmation-totals","sc-order-status-badge","sc-product-line-item","sc-quantity-select","sc-skeleton","sc-tag","sc-total"].forEach((e=>{switch(e){case"sc-order-confirmation-details":customElements.get(e)||customElements.define(e,ScOrderConfirmationDetails$1);break;case"sc-alert":customElements.get(e)||defineCustomElement$h();break;case"sc-card":customElements.get(e)||defineCustomElement$g();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$f();break;case"sc-divider":customElements.get(e)||defineCustomElement$e();break;case"sc-format-number":customElements.get(e)||defineCustomElement$d();break;case"sc-icon":customElements.get(e)||defineCustomElement$c();break;case"sc-line-item":customElements.get(e)||defineCustomElement$b();break;case"sc-line-item-total":customElements.get(e)||defineCustomElement$a();break;case"sc-order-confirmation-line-items":customElements.get(e)||defineCustomElement$9();break;case"sc-order-confirmation-totals":customElements.get(e)||defineCustomElement$8();break;case"sc-order-status-badge":customElements.get(e)||defineCustomElement$7();break;case"sc-product-line-item":customElements.get(e)||defineCustomElement$6();break;case"sc-quantity-select":customElements.get(e)||defineCustomElement$5();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$4();break;case"sc-tag":customElements.get(e)||defineCustomElement$3();break;case"sc-total":customElements.get(e)||defineCustomElement$2()}}))}openWormhole(ScOrderConfirmationDetails$1,["order","loading"],!1);const ScOrderConfirmationDetails=ScOrderConfirmationDetails$1,defineCustomElement=defineCustomElement$1;export{ScOrderConfirmationDetails,defineCustomElement};