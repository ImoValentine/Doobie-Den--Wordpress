"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[1013],{581:function(t,n,o){o.d(n,{o:function(){return e}});var r=o(1346),e=function(t,n,o){void 0===o&&(o=!0);var e="Function"===t.constructor.name?t.prototype:t,i=e.componentWillLoad;e.componentWillLoad=function(){var t,e=this,s=(0,r.a)(this),u={promise:new Promise((function(n){t=n})),resolve:t},c=new CustomEvent("openWormhole",{bubbles:!0,composed:!0,detail:{consumer:this,fields:n,updater:function(t,n){(t in s?s:e)[t]=n},onOpen:u}});s.dispatchEvent(c);var a=function(){if(i)return i.call(e)};return o?u.promise.then((function(){return a()})):a()}}},1013:function(t,n,o){o.r(n),o.d(n,{sc_order_confirmation_customer:function(){return u}});var r=o(3029),e=o(2901),i=o(1346),s=o(581),u=function(){return(0,e.A)((function t(n){(0,r.A)(this,t),(0,i.r)(this,n),this.order=void 0,this.heading=void 0,this.customer=void 0,this.error=void 0,this.loading=void 0}),[{key:"render",value:function(){return this.customer?(0,i.h)("sc-customer-details",{customer:this.customer,loading:this.loading,error:this.error},(0,i.h)("span",{slot:"heading"},(0,i.h)("slot",{name:"heading"},this.heading||wp.i18n.__("Billing Details","surecart")))):null}}])}();(0,s.o)(u,["order","customer","loading"],!1),u.style=":host{display:block}"}}]);