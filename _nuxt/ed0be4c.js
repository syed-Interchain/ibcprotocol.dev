(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{278:function(t,e,o){var content=o(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("8d203db0",content,!0,{sourceMap:!1})},280:function(t,e,o){var content=o(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("c09d40a4",content,!0,{sourceMap:!1})},281:function(t,e,o){"use strict";e.decode=e.parse=o(282),e.encode=e.stringify=o(283)},282:function(t,e,o){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,o,c){e=e||"&",o=o||"=";var l={};if("string"!=typeof t||0===t.length)return l;var f=/\+/g;t=t.split(e);var m=1e3;c&&"number"==typeof c.maxKeys&&(m=c.maxKeys);var d=t.length;m>0&&d>m&&(d=m);for(var i=0;i<d;++i){var _,v,h,y,x=t[i].replace(f,"%20"),w=x.indexOf(o);w>=0?(_=x.substr(0,w),v=x.substr(w+1)):(_=x,v=""),h=decodeURIComponent(_),y=decodeURIComponent(v),r(l,h)?n(l[h])?l[h].push(y):l[h]=[l[h],y]:l[h]=y}return l};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},283:function(t,e,o){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,o,l){return e=e||"&",o=o||"=",null===t&&(t=void 0),"object"==typeof t?map(c(t),(function(c){var l=encodeURIComponent(r(c))+o;return n(t[c])?map(t[c],(function(t){return l+encodeURIComponent(r(t))})).join(e):l+encodeURIComponent(r(t[c]))})).join(e):l?encodeURIComponent(r(l))+o+encodeURIComponent(r(t)):""};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function map(t,e){if(t.map)return t.map(e);for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],i));return o}var c=Object.keys||function(t){var e=[];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.push(o);return e}},284:function(t,e,o){"use strict";o(278)},285:function(t,e,o){var r=o(29)(!1);r.push([t.i,'.bottom .container[data-v-465889b4]{display:flex;justify-content:center}.bottom__get-notified[data-v-465889b4]{display:block;margin-bottom:var(--spacing-6);color:var(--white);text-align:center}.bottom__state[data-v-465889b4]{margin:var(--spacing-7) auto}.bottom__state__success[data-v-465889b4]{color:var(--gray-600)}.bottom__state__error[data-v-465889b4]{color:#ff4c52}.bottom__form[data-v-465889b4]{margin:var(--spacing-7) auto;max-width:$max-width[ "7" ];width:100%}.bottom__form__input[data-v-465889b4]{display:flex;position:relative;align-items:center;justify-content:center}.bottom__form__input__button[data-v-465889b4]{position:absolute;right:0;width:4rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;padding:var(--spacing-5);border-radius:$border-radius-3;cursor:pointer;outline:none}.bottom__form__input__button:focus .bottom__form__input__icon[data-v-465889b4],.bottom__form__input__button:hover .bottom__form__input__icon[data-v-465889b4]{fill:var(--white);transform:scale(1.05)}.bottom__form__input__icon[data-v-465889b4]{display:block;height:2rem;fill:var(--gray-600);transition:fill .15s ease-out,transform .15s ease-out}.bottom__form__input__input[data-v-465889b4]{--border-opacity:1;border-color:#fff1f1;border-color:rgba(255,241,241,var(--border-opacity));border-width:1px;padding:.75rem;margin-top:.5rem;margin-bottom:.5rem;outline:none;transition:color .15s ease-out,background .15s ease-out}.bottom__form__input__input[data-v-465889b4]::-moz-placeholder{color:var(--gray-600);-moz-transition:color .15s ease-out;transition:color .15s ease-out}.bottom__form__input__input[data-v-465889b4]:-ms-input-placeholder{color:var(--gray-600);-ms-transition:color .15s ease-out;transition:color .15s ease-out}.bottom__form__input__input[data-v-465889b4]::placeholder{color:var(--gray-600);transition:color .15s ease-out}.bottom__footnote[data-v-465889b4]{color:var(--gray-600);text-align:center;margin-top:var(--spacing-5)}@media screen and (max-width:576px){.bottom__form__input__icon[data-v-465889b4]{height:1.5rem}}',""]),t.exports=r},286:function(t,e,o){"use strict";o.r(e);o(40),o(32),o(39),o(57),o(33),o(58);var r=o(22),n=(o(14),o(281)),c=o.n(n);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{email:null,state:"default",url:"https://app.mailerlite.com/webforms/submit/y2i9q3",formData:{callback:"jQuery183003200065485233239_1594158714190","ml-submit":"1",ajax:"1",guid:"6ca22b31-4124-e926-cf4f-272ff9f44ec3",_:"1594856022563"}}},mounted:function(){var t=this;this.$nextTick((function(){t.$refs.email.focus()}))},methods:{actionSubmitEmail:function(){var t=this,e={method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c.a.stringify(f({"fields[email]":this.email},this.formData))};fetch(this.url,e).then((function(){t.state="success"})).catch((function(){t.state="error"}))}}},d=(o(284),o(12)),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"\n    fixed\n    top-0\n    left-0\n    right-0\n    bottom-0\n    flex\n    items-center\n    justify-center\n    bg-theme\n    z-40\n  "},[o("div",{staticClass:"fixed top-0 left-0 m-6 uppercase cursor-pointer hover:text-red",on:{click:function(e){return t.$emit("close")}}},[t._v("\n    Close\n  ")]),t._v(" "),o("div",{staticClass:"tm-section-container section-container bottom"},[o("div",{staticClass:"container"},[o("transition",{attrs:{name:"fade",mode:"out-in"}},["success"===t.state?o("div",{key:"success",staticClass:"bottom__state tm-rf0 tm-lh-copy"},[o("div",{staticClass:"bottom__get-notified"},[t._v("Almost there…")]),t._v(" "),o("div",{staticClass:"bottom__state__success"},[t._v("\n            Check your inbox and confirm your email address\n          ")])]):"error"===t.state?o("div",{key:"error",staticClass:"bottom__state tm-rf0 tm-lh-copy"},[o("div",{staticClass:"bottom__get-notified"},[t._v("Something went wrong")]),t._v(" "),o("div",{staticClass:"bottom__state__error"},[t._v("\n            Uh oh! Refresh the page and try again.\n          ")])]):o("div",{key:"default",staticClass:"bottom__form"},[o("label",{staticClass:"bottom__get-notified tm-rf1 tm-bold tm-lh-copy",attrs:{for:"field-email"}},[t._v("\n            Get Cosmos updates\n          ")]),t._v(" "),o("form",{attrs:{action:t.url,method:"POST",target:"_blank",rel:"noreferrer noopener"},on:{submit:function(e){return e.preventDefault(),t.actionSubmitEmail.apply(null,arguments)}}},[o("div",{staticClass:"bottom__form__input"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],ref:"email",staticClass:"\n                  bottom__form__input__input\n                  w-64\n                  bg-theme\n                  text-theme\n                  border-theme\n                ",attrs:{id:"field-email",name:"fields[email]",type:"email",placeholder:"Your email",required:"required"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),o("button",{staticClass:"text-theme border border-theme p-3 border-l-0",attrs:{type:"submit"}},[t._v("\n                OK\n              ")])])]),t._v(" "),o("p",{staticClass:"bottom__footnote tm-measure tm-rf-1 tm-lh-copy"},[t._v("\n            Zero spam.\n            "),o("a",{attrs:{href:"https://cosmos.network/privacy"}},[t._v("Privacy policy")])])])])],1)])])}),[],!1,null,"465889b4",null);e.default=component.exports},288:function(t,e,o){"use strict";o(280)},289:function(t,e,o){var r=o(29)(!1);r.push([t.i,".box-tall[data-v-625b9efe]{height:180px}.speech-bubble[data-v-625b9efe]:not(:first-child){margin-left:-1px}.box-link[data-v-625b9efe]{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}#app .arrow[data-v-625b9efe]{filter:invert(1)}#app .container[data-v-625b9efe]:after{border-color:#fff1f1 transparent transparent #fff1f1}#app .container[data-v-625b9efe]:before,#app.darkmode .container[data-v-625b9efe]:after{border-color:#323232 transparent transparent #323232}#app.darkmode .container[data-v-625b9efe]:before{border-color:#fff1f1 transparent transparent #fff1f1}",""]),t.exports=r},293:function(t,e,o){"use strict";o.r(e);var r={components:{NewsletterForm:o(286).default},props:{content:{type:Object,required:!0}},data:function(){return{showForm:!1}},computed:{isNarrow:function(){return window.innerWidth<768}}},n=(o(288),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mx-auto max-w-7xl"},[o("div",{staticClass:"\n      flex flex-col\n      md:flex-row\n      justify-center\n      mx-auto\n      max-w-7xl\n      px-8\n      md:px-12\n    "},[t._l(t.content.community,(function(e,r){return o("div",{key:r,staticClass:"w-full md:w-1/3 speech-bubble",class:{"pt-16 md:pt-16":1===r,"pt-16 md:pt-32":2===r}},[o("div",{staticClass:"container border border-gray box-tall"},[o("a",{staticClass:"relative flex w-full justify-between",attrs:{href:e.link,target:"_blank"}},[o("div",{staticClass:"p-6"},[o("div",{staticClass:"uppercase leading-tight mb-8 text-xl"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),o("div",[t._v(t._s(e.subtitle))])]),t._v(" "),o("div",[o("span",{staticClass:"\n                box-link\n                w-16\n                h-16\n                flex\n                justify-center\n                items-center\n                bg-contrast\n              "},[o("Arrow")],1)])])])])})),t._v(" "),o("div",{staticClass:"w-full md:w-1/3 speech-bubble pt-16 md:pt-32"},[o("div",{staticClass:"container border border-gray box-tall relative cursor-pointer"},[o("div",{staticClass:"p-6 hover:text-red",on:{click:function(e){t.showForm=!0}}},[o("div",{staticClass:"uppercase leading-tight mb-8 text-xl"},[t._v("\n            Ecosystem Updates\n          ")]),t._v(" "),o("div",[t._v("Sign up to the newsletter")])]),t._v(" "),o("div",{staticClass:"absolute top-0 right-0"},[o("span",{staticClass:"\n              box-link\n              w-16\n              h-16\n              flex\n              justify-center\n              items-center\n              bg-contrast\n            "},[o("Arrow")],1)])])])],2),t._v(" "),o("transition",{attrs:{name:"fade"}},[t.showForm?o("NewsletterForm",{on:{close:function(e){t.showForm=!1}}}):t._e()],1)],1)}),[],!1,null,"625b9efe",null);e.default=component.exports}}]);