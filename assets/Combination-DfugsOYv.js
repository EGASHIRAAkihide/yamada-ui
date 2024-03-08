import{r as i}from"./index-4g5l5LRQ.js";var S=function(){return S=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},S.apply(this,arguments)};function Z(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function te(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,c;r<a;r++)(c||!(r in t))&&(c||(c=Array.prototype.slice.call(t,0,r)),c[r]=t[r]);return e.concat(c||Array.prototype.slice.call(t))}var N="right-scroll-bar-position",L="width-before-scroll-bar",re="with-scroll-bars-hidden",ne="--removed-body-scroll-bar-size";function A(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function ae(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var D=new WeakMap;function oe(e,t){var n=ae(t||null,function(r){return e.forEach(function(a){return A(a,r)})});return i.useLayoutEffect(function(){var r=D.get(n);if(r){var a=new Set(r),c=new Set(e),u=n.current;a.forEach(function(o){c.has(o)||A(o,null)}),c.forEach(function(o){a.has(o)||A(o,u)})}D.set(n,e)},[e]),n}function F(e){return e}function Q(e,t){t===void 0&&(t=F);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(c){var u=t(c,r);return n.push(u),function(){n=n.filter(function(o){return o!==u})}},assignSyncMedium:function(c){for(r=!0;n.length;){var u=n;n=[],u.forEach(c)}n={push:function(o){return c(o)},filter:function(){return n}}},assignMedium:function(c){r=!0;var u=[];if(n.length){var o=n;n=[],o.forEach(c),u=n}var h=function(){var d=u;u=[],d.forEach(c)},m=function(){return Promise.resolve().then(h)};m(),n={push:function(d){u.push(d),m()},filter:function(d){return u=u.filter(d),n}}}};return a}function Ie(e,t){return t===void 0&&(t=F),Q(e,t)}function ce(e){e===void 0&&(e={});var t=Q(null);return t.options=S({async:!0,ssr:!1},e),t}var G=function(e){var t=e.sideCar,n=Z(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,S({},n))};G.isSideCarExport=!0;function ie(e,t){return e.useMedium(t),G}var $=ce(),O=function(){},I=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:O,onWheelCapture:O,onTouchMoveCapture:O}),a=r[0],c=r[1],u=e.forwardProps,o=e.children,h=e.className,m=e.removeScrollBar,d=e.enabled,p=e.shards,w=e.sideCar,C=e.noIsolation,E=e.inert,l=e.allowPinchZoom,f=e.as,v=f===void 0?"div":f,y=e.gapMode,g=Z(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=w,s=oe([n,t]),R=S(S({},g),a);return i.createElement(i.Fragment,null,d&&i.createElement(b,{sideCar:$,removeScrollBar:m,shards:p,noIsolation:C,inert:E,setCallbacks:c,allowPinchZoom:!!l,lockRef:n,gapMode:y}),u?i.cloneElement(i.Children.only(o),S(S({},R),{ref:s})):i.createElement(v,S({},R,{className:h,ref:s}),o))});I.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};I.classNames={fullWidth:L,zeroRight:N};var V,le=function(){if(V)return V;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function ue(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=le();return t&&e.setAttribute("nonce",t),e}function fe(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function se(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var de=function(){var e=0,t=null;return{add:function(n){e==0&&(t=ue())&&(fe(t,n),se(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ve=function(){var e=de();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},q=function(){var e=ve(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},he={left:0,top:0,right:0,gap:0},X=function(e){return parseInt(e||"",10)||0},me=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[X(n),X(r),X(a)]},ge=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return he;var t=me(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ye=q(),W="data-scroll-locked",Se=function(e,t,n,r){var a=e.left,c=e.top,u=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(re,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body[`).concat(W,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(N,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(L,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(N," .").concat(N,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(L," .").concat(L,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(W,`] {
    `).concat(ne,": ").concat(o,`px;
  }
`)},be=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r,c=i.useMemo(function(){return ge(a)},[a]);return i.useEffect(function(){return document.body.setAttribute(W,""),function(){document.body.removeAttribute(W)}},[]),i.createElement(ye,{styles:Se(c,!t,a,n?"":"!important")})},Y=!1;if(typeof window<"u")try{var x=Object.defineProperty({},"passive",{get:function(){return Y=!0,!0}});window.addEventListener("test",x,x),window.removeEventListener("test",x,x)}catch{Y=!1}var k=Y?{passive:!1}:!1,pe=function(e){return e.tagName==="TEXTAREA"},J=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!pe(e)&&n[t]==="visible")},we=function(e){return J(e,"overflowY")},Ce=function(e){return J(e,"overflowX")},H=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=K(e,r);if(a){var c=U(e,r),u=c[1],o=c[2];if(u>o)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Ee=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Re=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},K=function(e,t){return e==="v"?we(t):Ce(t)},U=function(e,t){return e==="v"?Ee(t):Re(t)},ke=function(e,t){return e==="h"&&t==="rtl"?-1:1},Pe=function(e,t,n,r,a){var c=ke(e,window.getComputedStyle(t).direction),u=c*r,o=n.target,h=t.contains(o),m=!1,d=u>0,p=0,w=0;do{var C=U(e,o),E=C[0],l=C[1],f=C[2],v=l-f-c*E;(E||v)&&K(e,o)&&(p+=v,w+=E),o instanceof ShadowRoot?o=o.host:o=o.parentNode}while(!h&&o!==document.body||h&&(t.contains(o)||t===o));return(d&&(a&&Math.abs(p)<1||!a&&u>p)||!d&&(a&&Math.abs(w)<1||!a&&-u>w))&&(m=!0),m},B=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},_=function(e){return[e.deltaX,e.deltaY]},z=function(e){return e&&"current"in e?e.current:e},Me=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Te=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},xe=0,P=[];function Be(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),a=i.useState(xe++)[0],c=i.useState(q)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var l=te([e.lockRef.current],(e.shards||[]).map(z),!0).filter(Boolean);return l.forEach(function(f){return f.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),l.forEach(function(f){return f.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var o=i.useCallback(function(l,f){if("touches"in l&&l.touches.length===2)return!u.current.allowPinchZoom;var v=B(l),y=n.current,g="deltaX"in l?l.deltaX:y[0]-v[0],b="deltaY"in l?l.deltaY:y[1]-v[1],s,R=l.target,M=Math.abs(g)>Math.abs(b)?"h":"v";if("touches"in l&&M==="h"&&R.type==="range")return!1;var T=H(M,R);if(!T)return!0;if(T?s=M:(s=M==="v"?"h":"v",T=H(M,R)),!T)return!1;if(!r.current&&"changedTouches"in l&&(g||b)&&(r.current=s),!s)return!0;var j=r.current||s;return Pe(j,f,l,j==="h"?g:b,!0)},[]),h=i.useCallback(function(l){var f=l;if(!(!P.length||P[P.length-1]!==c)){var v="deltaY"in f?_(f):B(f),y=t.current.filter(function(s){return s.name===f.type&&(s.target===f.target||f.target===s.shadowParent)&&Me(s.delta,v)})[0];if(y&&y.should){f.cancelable&&f.preventDefault();return}if(!y){var g=(u.current.shards||[]).map(z).filter(Boolean).filter(function(s){return s.contains(f.target)}),b=g.length>0?o(f,g[0]):!u.current.noIsolation;b&&f.cancelable&&f.preventDefault()}}},[]),m=i.useCallback(function(l,f,v,y){var g={name:l,delta:f,target:v,should:y,shadowParent:Ne(v)};t.current.push(g),setTimeout(function(){t.current=t.current.filter(function(b){return b!==g})},1)},[]),d=i.useCallback(function(l){n.current=B(l),r.current=void 0},[]),p=i.useCallback(function(l){m(l.type,_(l),l.target,o(l,e.lockRef.current))},[]),w=i.useCallback(function(l){m(l.type,B(l),l.target,o(l,e.lockRef.current))},[]);i.useEffect(function(){return P.push(c),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:w}),document.addEventListener("wheel",h,k),document.addEventListener("touchmove",h,k),document.addEventListener("touchstart",d,k),function(){P=P.filter(function(l){return l!==c}),document.removeEventListener("wheel",h,k),document.removeEventListener("touchmove",h,k),document.removeEventListener("touchstart",d,k)}},[]);var C=e.removeScrollBar,E=e.inert;return i.createElement(i.Fragment,null,E?i.createElement(c,{styles:Te(a)}):null,C?i.createElement(be,{gapMode:e.gapMode}):null)}function Ne(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Le=ie($,Be);var ee=i.forwardRef(function(e,t){return i.createElement(I,S({},e,{ref:t,sideCar:Le}))});ee.classNames=I.classNames;const Ae=ee;export{Ae as R,ce as a,Ie as c,oe as u};