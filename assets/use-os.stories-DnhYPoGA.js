import{j as r}from"./jsx-runtime-CKrituN3.js";import{T as u}from"./text-DYgx2KhO.js";import{T as p}from"./tag-B6uoyv3w.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-D7EDsEkU.js";import"./factory-Of2RQyuI.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./theme-provider-hRojBB0d.js";import"./index-B9eChsAc.js";import"./index-C64mnpuw.js";import"./icon-CdBlBeK_.js";import"./index-YpBXZaf8.js";const f=()=>{const{userAgent:t}=window.navigator,e=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,a=/(Win32)|(Win64)|(Windows)|(WinCE)/i,c=/(iPhone)|(iPad)|(iPod)/i,m=/Android/i,d=/Linux/i;return e.test(t)?"macos":c.test(t)?"ios":a.test(t)?"windows":m.test(t)?"android":d.test(t)?"linux":"undetermined"},x=()=>typeof window<"u"?f():"undetermined",C={title:"Hooks / useOS"},o=()=>{const t=x();return r.jsxs(u,{children:["Your os is ",r.jsx(p,{children:t})]})};var i,s,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const os = useOS();
  return <Text>
      Your os is <Tag>{os}</Tag>
    </Text>;
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Y=["basic"];export{Y as __namedExportsOrder,o as basic,C as default};