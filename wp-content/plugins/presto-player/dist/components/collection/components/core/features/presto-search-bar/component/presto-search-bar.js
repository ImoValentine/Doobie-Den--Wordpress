import{h}from"@stencil/core";import{searchVtt,setMarkers,removeOldMarkers}from"../../../player/functions/search-vtt";export class PrestoSearchBar{constructor(){this.value=void 0,this.player=void 0,this.markers=void 0,this.currentMarkerLocation=-1}onSearch(e){if(this.value=e.detail,""===this.value)removeOldMarkers(this.player),this.markers=[];else{const e=searchVtt(this.player,this.value);this.player.config.markers={enabled:!0,points:e},this.markers=e,setMarkers(this.player,e)}}onPreviousNav(){this.currentMarkerLocation-1<0?this.currentMarkerLocation=this.markers.length-1:this.currentMarkerLocation--,this.player.currentTime=this.markers[this.currentMarkerLocation].time}onFocusChange(e){var r,t;!0===(null==e?void 0:e.detail)?this.player.config.hideControls=!1:this.player.config.hideControls=(null===(t=null===(r=this.player.config)||void 0===r?void 0:r.preset)||void 0===t?void 0:t.auto_hide)||!1}onNextNav(){this.currentMarkerLocation+1>this.markers.length-1?this.currentMarkerLocation=0:this.currentMarkerLocation++,this.player.currentTime=this.markers[this.currentMarkerLocation].time}render(){var e,r,t,i,a,o,s,n;if(!this.player)return"";if(!(null===(t=null===(r=null===(e=this.player)||void 0===e?void 0:e.media)||void 0===r?void 0:r.textTracks)||void 0===t?void 0:t.length)||0===(null===(o=null===(a=null===(i=this.player)||void 0===i?void 0:i.media)||void 0===a?void 0:a.textTracks)||void 0===o?void 0:o.length))return"";const l=null===(s=this.player.config.preset.search)||void 0===s?void 0:s.placeholder;return h("presto-search-bar-ui",{value:this.value,hasNavigation:(null===(n=this.markers)||void 0===n?void 0:n.length)>1,placeholder:l,onNextNav:()=>this.onNextNav(),onPreviousNav:()=>this.onPreviousNav(),onSearch:e=>this.onSearch(e),onFocusChange:e=>this.onFocusChange(e)})}static get is(){return"presto-search-bar"}static get properties(){return{value:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Props"},attribute:"value",reflect:!1},player:{type:"any",mutable:!1,complexType:{original:"any",resolved:"any",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"player",reflect:!1}}}static get states(){return{markers:{},currentMarkerLocation:{}}}}