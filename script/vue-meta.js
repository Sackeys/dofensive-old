!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.VueMeta=t()}(this,function(){"use strict";
var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var n=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(n,a){for(var i,o,c=arguments,u=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),s=1;s<arguments.length;s++){i=Object(c[s]);for(var f in i)t.call(i,f)&&(u[f]=i[f]);if(e){o=e(i);for(var l=0;l<o.length;l++)r.call(i,o[l])&&(u[o[l]]=i[o[l]])}}return u},a=function(e){return!(a=e,!a||"object"!=typeof a||(t=e,r=Object.prototype.toString.call(t),"[object RegExp]"===r||"[object Date]"===r||(n=t,n.$$typeof===i)));var t,r,n,a};var i="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(e,t){var r;return(!t||!1!==t.clone)&&a(e)?u((r=e,Array.isArray(r)?[]:{}),e,t):e}function c(e,t,r){return e.concat(t).map(function(e){return o(e,r)})}function u(e,t,r){var n,i,s,f,l=Array.isArray(t);return l===Array.isArray(e)?l?((r||{arrayMerge:c}).arrayMerge||c)(e,t,r):(i=t,s=r,f={},a(n=e)&&Object.keys(n).forEach(function(e){f[e]=o(n[e],s)}),Object.keys(i).forEach(function(e){a(i[e])&&n[e]?f[e]=u(n[e],i[e],s):f[e]=o(i[e],s)}),f):o(t,r)}u.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,r){return u(e,r,t)},{})};var s=u,f="[object Object]";var l,d,p=Function.prototype,y=Object.prototype,v=p.toString,m=y.hasOwnProperty,h=v.call(Object),b=y.toString,g=(l=Object.getPrototypeOf,d=Object,function(e){return l(d(e))});var O=function(e){if(!(t=e)||"object"!=typeof t||b.call(e)!=f||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t,r=g(e);if(null===r)return!0;var n=m.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&v.call(n)==h};var j=function(e){return"undefined"==typeof window?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"):String(e).replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">").replace(/"/g,'"').replace(/'/g,"'")};function A(e){void 0===e&&(e={});var t=e.keyName,r=e.tagIDKeyName,n=e.metaTemplateKeyName;return function(e){var a=function e(t,r){void 0===r&&(r={});var n=t.component,a=t.option,i=t.deep,o=t.arrayMerge,c=t.metaTemplateKeyName,u=n.$options;if(n._inactive)return r;if(void 0!==u[a]&&null!==u[a]){var f=u[a];"function"==typeof f&&(f=f.call(n)),r="object"==typeof f?s(r,f,{arrayMerge:o}):f}return i&&n.$children.length&&n.$children.forEach(function(t){r=e({component:t,option:a,deep:i,arrayMerge:o},r)}),c&&r.hasOwnProperty("meta")&&(r.meta=Object.keys(r.meta).map(function(e){var t=r.meta[e];if(!t.hasOwnProperty(c)||!t.hasOwnProperty("content")||void 0===t[c])return r.meta[e];var n=t[c];return delete t[c],n&&(t.content="function"==typeof n?n(t.content):n.replace(/%s/g,t.content)),t})),r}({component:e,option:t,deep:!0,metaTemplateKeyName:n,arrayMerge:function(e,t){var n=[];for(var a in e){var i=e[a],o=!1;for(var c in t){var u=t[c];if(i[r]&&i[r]===u[r]){o=!0;break}}o||n.push(i)}return n.concat(t)}});a.title&&(a.titleChunk=a.title),a.titleTemplate&&("function"==typeof a.titleTemplate?a.title=a.titleTemplate.call(e,a.titleChunk):a.title=a.titleTemplate.replace(/%s/g,a.titleChunk)),a.base&&(a.base=Object.keys(a.base).length?[a.base]:[]);var i=a.__dangerouslyDisableSanitizers,o=a.__dangerouslyDisableSanitizersByTagID,c=function(e){return Object.keys(e).reduce(function(t,n){var a=i&&i.indexOf(n)>-1,u=e[r];!a&&u&&(a=o&&o[u]&&o[u].indexOf(n)>-1);var s,f=e[n];return t[n]=f,"__dangerouslyDisableSanitizers"===n||"__dangerouslyDisableSanitizersByTagID"===n?t:(a?t[n]=f:"string"==typeof f?t[n]=j(f):O(f)?t[n]=c(f):(s=f,(Array.isArray?Array.isArray(s):"[object Array]"===Object.prototype.toString.call(s))?t[n]=f.map(c):t[n]=f),t)},{})};return a=s({title:"",titleChunk:"",titleTemplate:"%s",htmlAttrs:{},bodyAttrs:{},headAttrs:{},meta:[],base:[],link:[],style:[],script:[],noscript:[],__dangerouslyDisableSanitizers:[],__dangerouslyDisableSanitizersByTagID:{}},a),a=c(a)}}function w(e){return void 0===e&&(e={}),function(t,r){switch(t){case"title":return function(e){void 0===e&&(e={});var t=e.attribute;return function(e,r){return{text:function(){return"<"+e+" "+t+'="true">'+r+"</"+e+">"}}}}(e)(t,r);case"htmlAttrs":case"bodyAttrs":case"headAttrs":return function(e){void 0===e&&(e={});var t=e.attribute;return function(e,r){return{text:function(){var e="",n=[];for(var a in r)r.hasOwnProperty(a)&&(n.push(a),e+=(void 0!==r[a]?a+'="'+r[a]+'"':a)+" ");return(e+=t+'="'+n.join(",")+'"').trim()}}}}(e)(t,r);default:return function(e){void 0===e&&(e={});var t=e.attribute;return function(r,n){return{text:function(a){void 0===a&&(a={});var i=a.body;return void 0===i&&(i=!1),n.reduce(function(n,a){if(!!a.body!==i)return n;var o=Object.keys(a).reduce(function(t,r){switch(r){case"innerHTML":case"cssText":case"once":return t;default:return-1!==[e.tagIDKeyName,"body"].indexOf(r)?t+" data-"+r+'="'+a[r]+'"':void 0===a[r]?t+" "+r:t+" "+r+'="'+a[r]+'"'}},"").trim(),c=a.innerHTML||a.cssText||"",u=-1===["noscript","script","style"].indexOf(r),s=a.once?"":t+'="true" ';return u?n+"<"+r+" "+s+o+"/>":n+"<"+r+" "+s+o+">"+c+"</"+r+">"},"")}}}}(e)(t,r)}}}function T(e){void 0===e&&(e={});var t=e.attribute;return function(e,r){var n=r.getAttribute(t),a=n?n.split(","):[],i=[].concat(a);for(var o in e)if(e.hasOwnProperty(o)){var c=e[o]||"";r.setAttribute(o,c),-1===a.indexOf(o)&&a.push(o);var u=i.indexOf(o);-1!==u&&i.splice(u,1)}for(var s=i.length-1;s>=0;s--)r.removeAttribute(i[s]);a.length===i.length?r.removeAttribute(t):r.setAttribute(t,a.join(","))}}var k=Function.prototype.call.bind(Array.prototype.slice);function S(e){void 0===e&&(e={});var t=e.ssrAttribute;return function(r){var n=document.getElementsByTagName("html")[0];if(null===n.getAttribute(t)){var a={},i={};Object.keys(r).forEach(function(t){switch(t){case"title":void 0===(l=r.title)&&(l=document.title),document.title=l;break;case"htmlAttrs":T(e)(r[t],n);break;case"bodyAttrs":T(e)(r[t],document.getElementsByTagName("body")[0]);break;case"headAttrs":T(e)(r[t],document.getElementsByTagName("head")[0]);break;case"titleChunk":case"titleTemplate":case"changed":case"__dangerouslyDisableSanitizers":break;default:var o=document.getElementsByTagName("head")[0],c=document.getElementsByTagName("body")[0],u=function(e){void 0===e&&(e={});var t=e.attribute;return function(r,n,a,i){var o,c=k(a.querySelectorAll(r+"["+t+"]")),u=k(i.querySelectorAll(r+"["+t+'][data-body="true"]')),s=[];if(n.length>1){var f=[];n=n.map(function(e){var t=JSON.stringify(e);if(f.indexOf(t)<0)return f.push(t),e}).filter(function(e){return e})}n&&n.length&&n.forEach(function(n){var a=document.createElement(r),i=!0!==n.body?c:u;for(var f in n)if(n.hasOwnProperty(f))if("innerHTML"===f)a.innerHTML=n.innerHTML;else if("cssText"===f)a.styleSheet?a.styleSheet.cssText=n.cssText:a.appendChild(document.createTextNode(n.cssText));else if(-1!==[e.tagIDKeyName,"body"].indexOf(f)){var l="data-"+f,d=void 0===n[f]?"":n[f];a.setAttribute(l,d)}else{var p=void 0===n[f]?"":n[f];a.setAttribute(f,p)}a.setAttribute(t,"true"),i.some(function(e,t){return o=t,a.isEqualNode(e)})?i.splice(o,1):s.push(a)});var l=c.concat(u);return l.forEach(function(e){return e.parentNode.removeChild(e)}),s.forEach(function(e){"true"===e.getAttribute("data-body")?i.appendChild(e):a.appendChild(e)}),{oldTags:l,newTags:s}}}(e)(t,r[t],o,c),s=u.oldTags,f=u.newTags;f.length&&(a[t]=f,i[t]=s)}var l}),"function"==typeof r.changed&&r.changed.call(this,r,a,i)}else n.removeAttribute(t)}}function $(e){return void 0===e&&(e={}),function(){return{inject:(r=e,void 0===r&&(r={}),function(){var e=A(r)(this.$root);for(var t in e)e.hasOwnProperty(t)&&"titleTemplate"!==t&&"titleChunk"!==t&&(e[t]=w(r)(t,e[t]));return e}).bind(this),refresh:(t=e,void 0===t&&(t={}),function(){var e=A(t)(this.$root);return S(t).call(this,e),e}).bind(this)};var t,r}}var N=("undefined"!=typeof window?window.cancelAnimationFrame:null)||clearTimeout,x=("undefined"!=typeof window?window.requestAnimationFrame:null)||function(e){return setTimeout(e,0)};function _(e,t){return N(e),x(function(){e=null,t()})}var E="metaInfo",I="data-vue-meta",M="data-vue-meta-server-rendered",D="vmid",P="template";function C(e,t){void 0===t&&(t={}),t=n({keyName:E,metaTemplateKeyName:P,attribute:I,ssrAttribute:M,tagIDKeyName:D},t),e.prototype.$meta=$(t);var r=null;e.mixin({beforeCreate:function(){void 0!==this.$options[t.keyName]&&(this._hasMetaInfo=!0),"function"==typeof this.$options[t.keyName]&&(void 0===this.$options.computed&&(this.$options.computed={}),this.$options.computed.$metaInfo=this.$options[t.keyName])},created:function(){var e=this;!this.$isServer&&this.$metaInfo&&this.$watch("$metaInfo",function(){r=_(r,function(){return e.$meta().refresh()})})},activated:function(){var e=this;this._hasMetaInfo&&(r=_(r,function(){return e.$meta().refresh()}))},deactivated:function(){var e=this;this._hasMetaInfo&&(r=_(r,function(){return e.$meta().refresh()}))},beforeMount:function(){var e=this;this._hasMetaInfo&&(r=_(r,function(){return e.$meta().refresh()}))},destroyed:function(){var e=this;if(!this.$isServer&&this._hasMetaInfo)var t=setInterval(function(){e.$el&&null!==e.$el.offsetParent||(clearInterval(t),r=_(r,function(){return e.$meta().refresh()}))},50)}})}"undefined"!=typeof window&&void 0!==window.Vue&&Vue.use(C);return C.version="1.5.0",C});