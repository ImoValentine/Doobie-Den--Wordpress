import{getQueryArg,removeQueryArgs}from"@wordpress/url";export const getURLLineItems=()=>getQueryArg(window.location.href,"line_items");export const getURLCoupon=()=>getQueryArg(window.location.href,"coupon");export const getUrlData=()=>{let e={};const o=getURLCoupon();o&&(window.history.replaceState({},document.title,removeQueryArgs(window.location.href,"coupon")),e={...e,discount:{promotion_code:o}});const t=getURLLineItems();return t&&(null==t?void 0:t.length)&&(window.history.replaceState({},document.title,removeQueryArgs(window.location.href,"line_items")),e={...e,line_items:t}),e};export const getSessionId=(e,o,t)=>{if(null==o?void 0:o.id)return o.id;const n=getQueryArg(window.location.href,"checkout_id");if(n)return window.history.replaceState({},document.title,removeQueryArgs(window.location.href,"checkout_id")),n;const r=localStorage.getItem(`${e}-modified`);return r?t&&r===t?window.localStorage.getItem(e):"":window.localStorage.getItem(e)};export const setSessionId=(e,o,t,n)=>{window.localStorage.setItem(e,o),window.localStorage.setItem(`${e}-modified`,t),window.localStorage.setItem(`${e}-line-items-count`,n)};export const removeSessionId=e=>window.localStorage.removeItem(e);export const findInput=(e,o)=>{var t,n;const r=null===(n=null===(t=e.querySelector("sc-form"))||void 0===t?void 0:t.shadowRoot)||void 0===n?void 0:n.querySelector("slot");if(r)return r.assignedElements({flatten:!0}).reduce(((e,o)=>e.concat(o,[...o.querySelectorAll("*")])),[]).find((e=>e.name===o))};export const populateInputs=(e,o)=>{["name","email"].forEach((t=>{const n=findInput(e,t);n&&o[t]&&(n.value=o[t])})),Object.keys((null==o?void 0:o.metadata)||{}).forEach((t=>{const n=findInput(e,t);n&&o.metadata[t]&&(n.value=o.metadata[t])}))};