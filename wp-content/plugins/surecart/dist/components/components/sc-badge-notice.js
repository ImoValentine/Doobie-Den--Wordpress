import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{d as defineCustomElement$2}from"./sc-tag2.js";const scBadgeNoticeCss=":host{display:block}.notice{background:var(--sc-badge-notice-background-color, var(--sc-color-white));color:var(--sc-badge-notice-text-color, var(--sc-color-gray-950));border:solid 1px var(--sc-badge-notice-border-color, var(--sc-color-white));border-radius:var(--sc-border-radius-small);padding:var(--sc-spacing-small);font-size:var(--sc-font-size-x-small);display:flex;gap:0.5em;line-height:1}.notice--warning{background:var(--sc-color-warning-50);color:var(--sc-color-warning-700)}",ScBadgeNoticeStyle0=scBadgeNoticeCss,ScBadgeNotice$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.type="primary",this.label=void 0,this.size="small"}render(){return h("div",{key:"103201e03b1b682db7d27e3600af43503ba191b4",class:{notice:!0,"notice--is-small":"small"===this.size,"notice--is-medium":"medium"===this.size,"notice--is-large":"large"===this.size,"notice--primary":"primary"===this.type,"notice--success":"success"===this.type,"notice--warning":"warning"===this.type,"notice--danger":"danger"===this.type,"notice--default":"default"===this.type}},h("sc-tag",{key:"8ce5d5f58edc4baabd9664e1f856db9e01e34fe3",size:this.size,type:this.type},this.label),h("slot",{key:"d40df25872f8a1c907c8fedc1ee3ca2d2bee87ef"}))}static get style(){return ScBadgeNoticeStyle0}},[1,"sc-badge-notice",{type:[1],label:[1],size:[1]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-badge-notice","sc-tag"].forEach((e=>{switch(e){case"sc-badge-notice":customElements.get(e)||customElements.define(e,ScBadgeNotice$1);break;case"sc-tag":customElements.get(e)||defineCustomElement$2()}}))}const ScBadgeNotice=ScBadgeNotice$1,defineCustomElement=defineCustomElement$1;export{ScBadgeNotice,defineCustomElement};