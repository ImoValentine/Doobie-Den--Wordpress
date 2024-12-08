import{h,Host}from"@stencil/core";import uiStore from"../../../store/ui";import{onChange}from"../../../store/checkouts/index";import{state as checkoutState}from"../../../store/checkout/index";import{__,sprintf}from"@wordpress/i18n";export class ScCartButton{constructor(){this.open=null,this.count=0,this.formId=void 0,this.mode="live",this.cartMenuAlwaysShown=!0,this.showEmptyCount=!1}getItemsCount(){var t,e;const o=null===(e=null===(t=null==checkoutState?void 0:checkoutState.checkout)||void 0===t?void 0:t.line_items)||void 0===e?void 0:e.data;let a=0;return(o||[]).forEach((t=>{a+=null==t?void 0:t.quantity})),a}componentDidLoad(){this.link=this.el.closest("a"),this.link.addEventListener("click",(t=>(t.preventDefault(),t.stopImmediatePropagation(),uiStore.state.cart={...uiStore.state.cart,open:!uiStore.state.cart.open},!1))),this.handleParentLinkDisplay(),onChange(this.mode,(()=>this.handleParentLinkDisplay()))}handleParentLinkDisplay(){this.link.style.display=this.cartMenuAlwaysShown||this.getItemsCount()?null:"none"}render(){return h(Host,{key:"a8b28268b983d5a3530aa1708c34ae597b8975cc",tabindex:0,role:"button","aria-label":sprintf(__("Open Cart Menu Icon with %d items.","surecart"),this.getItemsCount()),onKeyDown:t=>{"Enter"!==(null==t?void 0:t.code)&&"Space"!==(null==t?void 0:t.code)||(uiStore.state.cart={...uiStore.state.cart,open:!uiStore.state.cart.open},t.preventDefault())}},h("div",{key:"6e9e014fb1aa3bf54b4f8037b679778bee24b7c1",class:"cart__button",part:"base"},h("div",{key:"7b86fe7670e9a4fcef7630efd24d773b9a490732",class:"cart__content"},(this.showEmptyCount||!!this.getItemsCount())&&h("span",{key:"211358c60afba93db2d0a00e40167f8a6611e219",class:"cart__count",part:"count"},this.getItemsCount()),h("div",{key:"44758b3160736ae83af6b666f8e0a437d0d2fc72",class:"cart__icon"},h("slot",{key:"a6f3baac1b7b84ee7481180e623f555bda1f576e"})))))}static get is(){return"sc-cart-button"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-cart-button.scss"]}}static get styleUrls(){return{$:["sc-cart-button.css"]}}static get properties(){return{formId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The form id to use for the cart."},attribute:"form-id",reflect:!0},mode:{type:"string",mutable:!1,complexType:{original:"'test' | 'live'",resolved:'"live" | "test"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"Are we in test or live mode."},attribute:"mode",reflect:!1,defaultValue:"'live'"},cartMenuAlwaysShown:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Whether the cart icon is always shown when the cart is empty"},attribute:"cart-menu-always-shown",reflect:!1,defaultValue:"true"},showEmptyCount:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Whether the cart count will be shown or not when the cart is empty"},attribute:"show-empty-count",reflect:!1,defaultValue:"false"}}}static get states(){return{open:{},count:{}}}static get elementRef(){return"el"}}