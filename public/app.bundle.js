!function(n){function e(e){for(var r,i,c=e[0],u=e[1],l=e[2],s=0,m=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);for(f&&f(e);m.length;)m.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},a={0:0},o=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;o.push([36,1]),t()}({36:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(19),i=t(10),c=t(8),u=t(5),l=t.n(u),f=t(1),s=t.n(f),m=t(2);function d(){var n=s()(["\n*{\n  box-sizing: border-box;\n  &:focus{\n    outline: 0;\n  }\n}\n:root{\n  --color-brand-1: #a43f6a;\n  --color-brand-2: #6f325b;\n  --color-brand-3: #f3aacb;\n  --color-brand-4: #bf88b9;\n  --color-brand-5: #e2a2a2;\n  --color-bg: #fff;\n  --color-fg: #222;\n  --color-link: var(--color-brand-3);\n  --color-focus: var(--color-brand-3);\n  --color-highlight: #ffbfda;\n  --color-error: #BC1717;\n  --color-success: #F5F5F8;\n  --color-warning: #E06811;\n  --font-primary: system-ui, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  --font-secondary: 'Roboto', sans-serif;\n  --font-tertiary: 'Bebas Neue', cursive;\n  --round-radius-1: .4rem;\n  --round-radius-2: 4rem;\n  --drop-shadow-1: .1rem .1rem .2rem rgba(0, 0, 0, .05);\n  --drop-shadow-2: 0 .1rem .2rem rgba(0, 0, 0, .3);\n  --animation-easing: cubic-bezier(.5, 0, .5, 1);\n  --site-width: 1300px;\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n}\nbody{\n  width: 100%;\n  margin: 0;\n  background: var(--color-bg);\n  color: var(--color-fg);\n  font: 1.6rem/1.5 var(--font-secondary);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  overflow-x: hidden;\n}\n::selection{\n  background: var(--color-highlight);\n}\na{\n  text-decoration: none;\n  background-color: transparent;\n  color: var(--color-link);\n}\nimg{\n  max-width: 100%;\n  border-style: none;\n}\nbutton, input, select, textarea{\n  font: inherit;\n}\nmain{\n  display: block;\n}\n"]);return d=function(){return n},n}var b=Object(m.a)(d());function p(){var n=s()(["\n    width: 100%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  "]);return p=function(){return n},n}function h(){var n=s()(["\n    word-break: break-word;\n  "]);return h=function(){return n},n}function g(){var n=s()(["\n    font-size: 4rem;\n    font-weight: 100;\n    color: rgba(0, 0, 0, .2);\n    @media(min-width: 520px) {\n      font-size: 6rem;\n    }\n    @media(min-width: 920px) {\n      font-size: 10rem;\n    }\n  "]);return g=function(){return n},n}function v(){var n=s()(["\n    margin: 1rem;\n    font-size: 4rem;\n    font-weight: 300;\n    text-align: right;\n    line-height: 1.2;\n    @media(min-width: 720px) {\n      margin: 2rem 1rem;\n      font-size: 8rem;\n    }\n    @media(min-width: 1100px) {\n      font-size: 10rem;\n    }\n  "]);return v=function(){return n},n}function E(){var n=s()(["\n    font-weight: ",";\n  "]);return E=function(){return n},n}function w(){var n=s()(["\n    font-size: ",";\n  "]);return w=function(){return n},n}function y(){var n=s()(["\n    text-align: ",";\n  "]);return y=function(){return n},n}function x(){var n=s()(["\n    text-transform: ",";\n  "]);return x=function(){return n},n}function k(){var n=s()(["\n  margin: 1rem 0;\n  line-height: 1.5;\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return k=function(){return n},n}function O(){var n=s()(["\n    margin: 0;\n    font-style: italic;\n  "]);return O=function(){return n},n}function j(){var n=s()(["\n    margin: 0;\n    font-weight: bolder;\n  "]);return j=function(){return n},n}function z(){var n=s()(["\n    margin: 0;\n  "]);return z=function(){return n},n}function S(){var n=s()(["\n    font-size: 1.6rem;\n  "]);return S=function(){return n},n}function M(){var n=s()(["\n    font-size: 1.6rem;\n  "]);return M=function(){return n},n}function C(){var n=s()(["\n    font-size: 1.8rem;\n  "]);return C=function(){return n},n}function R(){var n=s()(["\n    font-size: 2.4rem;\n  "]);return R=function(){return n},n}function T(){var n=s()(["\n    font-size: 3.6rem;\n  "]);return T=function(){return n},n}function I(){var n=s()(["\n    font-size: 2.8rem;\n    @media(min-width: 720px) {\n      font-size: 4rem;\n    }\n  "]);return I=function(){return n},n}function q(){var n=s()(["\n    font-size: 3.2rem;\n    @media(min-width: 520px) {\n      font-size: 4.8rem;\n    }\n  "]);return q=function(){return n},n}var P=m.c.p(k(),(function(n){var e=n.as;return e&&{h1:function(){return Object(m.b)(q())},h2:function(){return Object(m.b)(I())},h3:function(){return Object(m.b)(T())},h4:function(){return Object(m.b)(R())},h5:function(){return Object(m.b)(C())},h6:function(){return Object(m.b)(M())},p:function(){return Object(m.b)(S())},span:function(){return Object(m.b)(z())},strong:function(){return Object(m.b)(j())},em:function(){return Object(m.b)(O())}}[e]()}),(function(n){var e=n.transform;return e&&Object(m.b)(x(),e)}),(function(n){var e=n.align;return e&&Object(m.b)(y(),e)}),(function(n){var e=n.size;return e&&Object(m.b)(w(),e)}),(function(n){var e=n.weight;return e&&Object(m.b)(E(),e)}),(function(n){return n.intro&&Object(m.b)(v())}),(function(n){return n.subheading&&Object(m.b)(g())}),(function(n){return"break"===n.truncate&&Object(m.b)(h())}),(function(n){return"ellipsis"===n.truncate&&Object(m.b)(p())}));P.propTypes={as:l.a.string,transform:l.a.string,align:l.a.string};var _=P;function L(){var n=s()(["\n  width: 90%;\n  max-width: var(--site-width);\n  margin: auto;\n"]);return L=function(){return n},n}var V=m.c.div(L());function B(){var n=s()(["\n    padding: 2rem 5rem;\n  "]);return B=function(){return n},n}function F(){var n=s()(["\n    display: block;\n    width: 100%;\n    @media(min-width: 520px) {\n      display: inline-block;\n      width: auto;\n    }\n  "]);return F=function(){return n},n}function A(){var n=s()(["\n  --button-bg: rgba(0, 0, 0, .2);\n  --button-fg: #222;\n  display: inline-block;\n  min-width: 10rem;\n  padding: 1.5rem 2rem;\n  border: 0;\n  border-radius: var(--round-radius-1);\n  background: var(--button-bg);\n  color: var(--button-fg);\n  font-size: 1.4rem;\n  text-align: center;\n  cursor: pointer;\n  + a, + button{\n    margin-left: 1rem;\n  }\n  &:focus{\n    box-shadow: 0 0 .3rem var(--color-focus);\n  }\n  ","\n  ","\n  ","\n"]);return A=function(){return n},n}function G(){var n=s()(["",""]);return G=function(){return n},n}var H=m.c.button(A(),(function(n){return function(n){if(n){return Object(m.b)(G(),{primary:"\n      background: var(--color-brand-1);\n      color: #fff;\n      font-weight: bold;\n      box-shadow: .2rem .4rem .4rem rgba(0,0,0,.2);\n      transition: transform .5s var(--animation-easing);\n      &:hover{\n        transform: scale(1.02);\n      }\n    "}[n])}}(n.variant)}),(function(n){return n.responsive&&Object(m.b)(F())}),(function(n){return"large"===n.size&&Object(m.b)(B())})),N=t(13),Q=t.n(N),W=t(14),J=t.n(W);function U(){var n=s()([""]);return U=function(){return n},n}function Y(){var n=s()([""]);return Y=function(){return n},n}function D(){var n=s()([""]);return D=function(){return n},n}function K(){var n=s()(["\n    display: block;\n    width: 100%;\n    margin-bottom: 1.5rem;\n  "]);return K=function(){return n},n}function X(){var n=s()(["\n  height: 4rem;\n  padding: 1rem;\n  border: 0;\n  border-radius: var(--round-radius-1);\n  background: #fff;\n  &:focus{\n    box-shadow: 0 0 .3rem var(--color-focus);\n  }\n  ","\n"]);return X=function(){return n},n}var Z=m.c.input(X(),(function(n){return n.block&&Object(m.b)(K())})),$=function(n){var e=n.type,t=void 0===e?"text":e,r=J()(n,["type"]);return a.a.createElement(Z,Q()({type:t},r))};m.c.textarea(D()),m.c.input(Y()),m.c.input(U());function nn(){var n=s()(["\n  padding: 5rem 0;\n"]);return nn=function(){return n},n}function en(){var n=s()(["\n  padding: 5rem 0;\n  background: var(--color-brand-2);\n  color: #fff;\n  p{\n    margin-bottom: .2rem;\n    font-size: 1.8rem;\n    color: var(--color-brand-3);\n  }\n  h3{\n    margin: .2rem 0 2rem;\n  }\n  @media(min-width: 920px) {\n    "," {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n  }\n"]);return en=function(){return n},n}var tn=m.c.div(en(),V),rn=m.c.footer(nn()),an=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(tn,null,a.a.createElement(V,null,a.a.createElement("div",null,a.a.createElement(_,null,"Ready to start having quick and quality styling done?"),a.a.createElement(_,{as:"h3"},"Create an account with us")),a.a.createElement(H,{variant:"primary",responsive:!0},"REGISTER NOW"))),a.a.createElement(rn,null,a.a.createElement(V,null,a.a.createElement("div",null,a.a.createElement("form",{action:"https://bookstyleq.us4.list-manage.com/subscribe/post?u=ca7d77d8dd73f52e49e56d814&id=646b5bfa5e",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",noValidate:!0},a.a.createElement(_,{as:"h4"},"Subscribe to us"),a.a.createElement(_,null,"Stay updated on what StyleQ has to offer"),a.a.createElement($,{block:!0,name:"EMAIL",type:"email",id:"mce-EMAIL",placeholder:"Enter your email address",required:!0}),a.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},a.a.createElement("input",{type:"text",name:"b_ca7d77d8dd73f52e49e56d814_646b5bfa5e",tabIndex:"-1"})),a.a.createElement(H,{primary:!0,curvy:!0},"Subscribe")),a.a.createElement(_,null,a.a.createElement("span",null,"© ",(new Date).getFullYear()," StyleQ. All rights reserved"))),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=ubitrix.styleq&hl=en_US"},"Get the app on Android"),a.a.createElement("span",null,"Get the app on iPhone (Coming Soon)")),a.a.createElement(_,null,a.a.createElement("a",{href:"https://www.facebook.com/BookStyleQ/"},"Facebook"),a.a.createElement("a",{href:"https://twitter.com/bookstyleq"},"Twitter"),a.a.createElement("a",{href:"https://www.instagram.com/intostyleq/"},"Instagram"))))))},on=function(n){var e=n.children;n.title;return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null),e,a.a.createElement(an,null))};on.propTypes={children:l.a.node.isRequired,title:l.a.string.isRequired};var cn=on,un=function(n){n.styles;var e=J()(n,["styles"]);return a.a.createElement("svg",Q()({clipRule:"evenodd",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",viewBox:"0 0 500 165",xmlns:"http://www.w3.org/2000/svg"},e),a.a.createElement("g",{fillRule:"nonzero"},a.a.createElement("path",{d:"M103.307 126.628a16.103 16.103 0 002.308-1.864c7.228-7.022 11.493-13.078 11.875-25.92.308-10.427-4.183-19.411-9.398-24.78C102.107 67.9 93.144 62.69 81.865 56.82c-8.313-4.322-13.338-5.998-18.792-9.72-1.942-1.326-3.75-2.878-5.125-4.787-2.546-3.541-3.705-7.712-3.898-12.584-.02-4.5 1.196-10.043 5.821-15.038 9.41-10.163 26.604-8.93 34.642 4.758S93.05 45.348 93.05 45.348s11.151-8.532 4.933-24.924C91.765 4.033 66.996-3.07 51.507 12.212c-9.597 9.47-8.369 22.088-6.892 28.504.954 4.91 3.086 8.858 6.273 12.8 4.44 5.497 12.605 11.376 24.008 17.244 9.478 4.869 15.735 10.882 19.637 15.813 3.899 4.934 5.479 9.433 5.376 15.164-.007.472-.036.949-.075 1.429-.714 6.212-3.78 16.783-15.909 23.082-17.022 8.837-38.74-.668-42.807-22.272-4.066-21.602 15.196-36.3 15.196-36.3s-19.691 9.13-19.262 33.405c.269 15.242 10.663 28.46 25.035 33.655-14.202 2.886-17.696 14.043-17.696 14.043s9.972-13.212 34.64-2.293c34.138 15.112 37.372-15.027 37.372-15.027s-2.115 13.478-31.692 5.023c-.307-.086-.608-.166-.911-.25a43.877 43.877 0 006.76-1.967c5.222-1.984 9.398-4.641 12.747-7.637"}),a.a.createElement("path",{d:"M36.585 79.536C23.396 84.675 8.539 78.146 3.4 64.956c13.19-5.136 28.047 1.39 33.185 14.58",fill:"#dd3686"}),a.a.createElement("path",{d:"M36.25 86.059c-10.391-4.564-22.515.157-27.079 10.548 10.391 4.565 22.514-.157 27.079-10.548M41.337 74.48C30.947 69.913 26.225 57.79 30.79 47.4c10.39 4.566 15.112 16.689 10.547 27.08",fill:"#f398c0"}),a.a.createElement("path",{d:"M175.035 112.26c-.68 2.95-1.532 5.644-2.553 8.08-1.02 2.44-2.381 4.539-4.082 6.295-1.701 1.76-3.828 3.119-6.38 4.083-2.552.963-5.588 1.446-9.102 1.446-5.558 0-9.952-1.333-13.184-3.997-3.233-2.664-4.849-6.946-4.849-12.844V66.836h-11.058l.68-5.104c5.216-1.021 9.413-3.998 12.59-8.932 3.173-4.934 5.443-10.632 6.805-17.097l5.274-.681V60.2h13.439c1.587 0 3.034-.123 4.338-.372a37.65 37.65 0 003.488-.82v7.827h-21.265v44.743c0 1.36.056 2.696.17 3.998.111 1.306.425 2.526.935 3.658.511 1.135 1.332 2.042 2.467 2.722 1.132.68 2.722 1.022 4.764 1.022 3.288 0 6.236-1.134 8.847-3.404 2.607-2.267 4.195-5.16 4.763-8.676zM192.218 72.109c-1.59-4.423-4.822-6.635-9.698-6.635V60.37h35.046v5.104h-3.402c-4.197 0-6.295 1.305-6.295 3.913.111.341.226.795.341 1.361.111.569.226 1.22.339 1.957.113.738.282 1.56.511 2.467l17.523 37.598 13.611-35.047c.451-2.153.791-3.769 1.02-4.848.226-1.077.34-1.842.34-2.297 0-3.403-3.687-5.104-11.059-5.104V60.37h29.092v5.104c-4.763 0-7.995 1.93-9.697 5.784l-20.585 51.72c-.568 1.134-1.361 2.806-2.382 5.018a265.568 265.568 0 01-3.572 7.4 124.362 124.362 0 01-4.594 8.337 46.928 46.928 0 01-5.784 7.741c-2.156 2.323-4.482 4.224-6.975 5.698-2.496 1.473-5.163 2.212-7.996 2.212-6.013 0-9.017-2.781-9.017-8.336 0-5.672 2.153-8.506 6.464-8.506 2.042 0 3.403.481 4.083 1.446a9.312 9.312 0 011.447 3.148 22.554 22.554 0 001.02 3.147c.397.962 1.277 1.446 2.637 1.446.793 0 1.872-.739 3.233-2.212 1.362-1.474 2.748-3.317 4.168-5.529 1.417-2.212 2.749-4.652 3.998-7.316 1.247-2.666 2.153-5.247 2.722-7.74z"}),a.a.createElement("path",{d:"M260.437 129.612v-5.104c7.712 0 11.568-2.608 11.568-7.825V30.428c0-5.556-4.368-8.336-13.1-8.336V17.5l27.391-5.104v104.968c0 4.764 4.308 7.145 12.93 7.145v5.104zM349.752 86.23c4.65 0 6.975-2.383 6.975-7.146-.338-4.309-1.786-8.081-4.337-11.313-2.551-3.233-6.269-4.849-11.143-4.849-2.611 0-4.993.596-7.146 1.787a17.787 17.787 0 00-5.529 4.763c-1.531 1.986-2.696 4.253-3.488 6.805a26.443 26.443 0 00-1.191 7.911c0 1.361 1.247 2.042 3.743 2.042zm23.139 26.54c-2.952 6.353-6.92 11.286-11.91 14.801-4.993 3.514-10.888 5.274-17.692 5.274-5.673 0-10.664-.966-14.973-2.892-4.312-1.928-7.91-4.535-10.801-7.827-2.893-3.287-5.079-7.201-6.55-11.738-1.477-4.535-2.214-9.357-2.214-14.462 0-5.103.793-9.978 2.383-14.631 1.587-4.648 3.827-8.788 6.721-12.419a32.873 32.873 0 0110.461-8.676c4.083-2.153 8.619-3.232 13.61-3.232 3.063 0 6.265.369 9.614 1.106 3.344.739 6.489 2.185 9.441 4.338 2.949 2.155 5.5 5.247 7.655 9.272 2.155 4.026 3.573 9.33 4.255 15.907 0 1.361-.172 2.611-.51 3.743h-45.256c-2.154 0-3.232.85-3.232 2.551 0 4.083.568 7.941 1.701 11.57 1.133 3.63 2.722 6.804 4.764 9.526 2.041 2.723 4.536 4.849 7.485 6.381 2.948 1.53 6.236 2.296 9.867 2.296 4.765 0 8.875-1.362 12.334-4.083a46.875 46.875 0 009.104-9.528zM476.07 94.191c-1.42 6.284-3.603 11.75-6.55 16.391-2.95 4.645-6.692 8.296-11.227 10.958-4.537 2.66-9.983 3.99-16.332 3.99-6.466 0-12.08-1.359-16.843-4.076-4.765-2.716-8.676-6.454-11.739-11.209-3.062-4.756-5.332-10.363-6.807-16.817-1.474-6.454-2.21-13.419-2.21-20.894 0-6.792.597-13.3 1.785-19.53 1.192-6.228 3.175-11.72 5.955-16.475 2.78-4.756 6.405-8.549 10.89-11.38 4.477-2.83 9.951-4.248 16.417-4.248 7.031 0 13.013 1.501 17.946 4.5 4.934 3.001 8.933 6.965 11.996 11.891 3.061 4.925 5.299 10.558 6.719 16.9 1.416 6.343 2.126 12.91 2.126 19.703 0 7.246-.71 14.012-2.126 20.296m17.268-44.539c-2.836-7.03-6.778-13.126-11.825-18.289-5.047-5.159-11.057-9.186-18.033-12.079-6.975-2.89-14.602-4.338-22.883-4.338-8.392 0-16.02 1.675-22.88 5.02-6.864 3.346-12.734 7.77-17.608 13.27-4.878 5.502-8.62 11.796-11.229 18.883-2.61 7.09-3.913 14.376-3.913 21.862 0 8.054 1.388 15.625 4.168 22.711 2.779 7.09 6.635 13.27 11.569 18.545 4.933 5.274 10.804 9.415 17.608 12.42a51.408 51.408 0 006.039 2.205c-12.064 3.586-15.139 13.363-15.139 13.363s9.936-13.166 34.52-2.284c34.023 15.061 37.244-14.977 37.244-14.977s-2.066 13.033-30.346 5.342c4.761-.833 9.249-2.266 13.447-4.33 7.031-3.46 13.015-7.997 17.949-13.61s8.761-11.995 11.483-19.14c2.721-7.145 4.083-14.347 4.083-21.606 0-8.278-1.42-15.934-4.254-22.968"})))};function ln(){var n=s()(["\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  z-index: 99999;\n  width: 100%;\n  height: 8rem;\n  background: #fff;\n  box-shadow: 0 .2rem .2rem rgba(0,0,0,.08);\n  img{\n    display: block;\n    width: 10rem;\n  }\n  > ","{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  + *{\n    margin-top: 6.5rem;\n  }\n"]);return ln=function(){return n},n}var fn=m.c.header(ln(),V),sn=function(){return a.a.createElement(fn,null,a.a.createElement(V,null,a.a.createElement(i.b,{to:"/"},a.a.createElement(un,null)),a.a.createElement("div",null,a.a.createElement(H,null,"BECOME A STYLIST"),a.a.createElement(H,{as:"a",rel:"noopener",href:"https://my.setmore.com/bookanappointmentv3.do?uniqueKey=dc195bd4-0d63-451f-84ac-4b4ec3ecf5ca"},"EXPLORE DEMO"),a.a.createElement(H,{variant:"primary"},"JOIN THE WAITLIST"))))};function mn(){var n=s()(["\n  height: 700px;\n  padding: 3rem 2rem 1rem 1rem;\n  background: #f9f3f8;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg clip-rule='evenodd' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' viewBox='0 0 682 574' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f3e9f1'%3E%3Cpath d='M618.895 0H465.646L-.003 558.455l278.618 14.91zM681.466 228.12V56.043L369.833 573.365l191.823-29.609z'/%3E%3C/g%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-size: 70%;\n  background-position: top right;\n  ","{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"]);return mn=function(){return n},n}var dn=m.c.section(mn(),V),bn=function(){return a.a.createElement(dn,null,a.a.createElement(V,null,a.a.createElement("div",null,a.a.createElement(_,{as:"h1"},"Treat Yourself."),a.a.createElement(_,null,"StyleQ helps you get quick hairstylists without long waiting schedules and we keep stylists in business with your warm presence."),a.a.createElement(H,{variant:"primary"},"REGISTER NOW"))))};var pn=function(){return a.a.createElement(cn,{title:"Home"},a.a.createElement(sn,null),a.a.createElement(bn,null),a.a.createElement("h1",null,"Container heading"))},hn=function(){return a.a.createElement(cn,{title:"Page 2"},a.a.createElement("h1",null,"Hi from the second page"),a.a.createElement("p",null,"Welcome to page 2"),a.a.createElement(i.b,{to:"/"},"Go back to the homepage"))};var gn=function(){return a.a.createElement(i.a,null,a.a.createElement(c.a,{exact:!0,path:"/"},a.a.createElement(pn,null)),a.a.createElement(c.a,{path:"/book"},a.a.createElement(hn,null)))},vn=document.getElementById("app");Object(o.render)(a.a.createElement(gn,null),vn)}});