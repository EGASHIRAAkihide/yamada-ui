import{j as f}from"./jsx-runtime-5BUNAZ9W.js";import{r as g}from"./index-4g5l5LRQ.js";import{u as F,s as j}from"./use-image-uDLoSF_I.js";import{f as S}from"./forward-ref-A-8Arhkk.js";import{u,a as b,o as d}from"./factory-d4qha7R6.js";const y=S((o,e)=>{let{fallback:r,src:k,srcSet:I,loading:i,ignoreFallback:a,crossOrigin:t,className:c,fallbackStrategy:p="beforeLoadOrError",referrerPolicy:x,size:l,fit:m,...s}=o;a=i!=null||a||!r;const E=F({...o,crossOrigin:t,ignoreFallback:a}),n=g.useMemo(()=>({boxSize:l,objectFit:m}),[l,m]);return j(E,p)?g.isValidElement(r)?r:f(u.img,{ref:e,className:b("ui-image--fallback",c),src:r,__css:n,...a?s:d(s,["onError","onLoad"])}):f(u.img,{ref:e,src:k,srcSet:I,crossOrigin:t,loading:i,referrerPolicy:x,className:b("ui-image",c),__css:n,...a?s:d(s,["onError","onLoad"])})});export{y as I};