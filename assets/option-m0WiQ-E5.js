import{j as y}from"./jsx-runtime-CKrituN3.js";import{u as De}from"./index-BAkiw5U8.js";import{r as n}from"./index-CBqU2yxZ.js";import{c as Oe,a as je}from"./icon-B3uV5IZ5.js";import{f as J}from"./forward-ref-DuAegr0M.js";import{p as Re,Q as Te,Y as ke,Z as _e,l as U,a8 as Ee,R as Ae,k as Le,d as Ne,P as He,v as ce,h as $,C as ye,y as q,z as ge,ae as Me,aa as le,t as Be,u as V,c as z,e as Ge}from"./factory-D1MzC1Q2.js";import{b as Ke}from"./popover-content-Dzj6KE1S.js";import{u as Ue}from"./index-DOHT0qqe.js";import{c as Ve}from"./index-Bknf-GSb.js";import{u as We}from"./index-C-D6xzpN.js";import{u as ze}from"./index-BpQz06QL.js";import{u as Ye,g as Qe}from"./form-control-Dbo-pJGm.js";const Ze=s=>{var o;return Me(s)&&!!((o=s==null?void 0:s.getAttribute("role"))!=null&&o.startsWith("select-item"))},{DescendantsContextProvider:Ct,useDescendantsContext:Pe,useDescendants:$e,useDescendant:qe}=Ve(),[bt,H]=Re({strict:!1,name:"SelectContext"}),ht=({placeholder:s,closeOnBlur:o=!0,closeOnEsc:a=!0,closeOnSelect:r=!0,placeholderInOptions:i=!0,omitSelectedValues:l=!1,maxSelectValues:u,isEmpty:f,placement:b="bottom-start",duration:h=.2,isOpen:P,defaultIsOpen:v,onOpen:k,onClose:I,optionProps:g,...d})=>{d=Ye(d);const p=Te(d,Qe({omit:["aria-readonly"]})),W=ke(d,_e),x=$e(),[R,c]=n.useState(-1),[X,ee]=n.useState(!1),T=n.useRef(null),Y=n.useRef(null),ae=n.useRef(null),M=n.useRef(new Set([])),[S,B]=Ue({value:d.value,defaultValue:d.defaultValue,onChange:d.onChange}),[K,E]=n.useState(void 0),L=R>-1,C=U(S),te=(C?!S.length:!S)&&!(s&&i),O=x.values(({node:e})=>C&&S.includes(e.dataset.value??"")).map(({index:e})=>e),A=x.enabledValues(({index:e})=>!O.includes(e)),se=n.useCallback(()=>{const e=setTimeout(()=>{const t=x.enabledFirstValue();if(t)if(!C||!l)c(t.index);else if(O.includes(t.index)){const _=A[0];c(_.index)}else c(t.index)});M.current.add(e)},[x,A,C,l,O]),ne=n.useCallback(()=>{const e=setTimeout(()=>{const t=x.enabledLastValue();if(t)if(!C||!l)c(t.index);else if(O.includes(t.index)){const _=A.reverse()[0];c(_.index)}else c(t.index)});M.current.add(e)},[x,A,C,l,O]),ie=n.useCallback(()=>{const e=setTimeout(()=>{const _=x.enabledValues().find(({node:j})=>C?S.includes(j.dataset.value??""):j.dataset.value===S);_&&c(_.index)});M.current.add(e)},[x,C,S]),Q=n.useCallback(()=>{const e=setTimeout(()=>{const t=x.enabledNextValue(R);if(t)if(!C||!l)c(t.index);else if(O.includes(t.index)){const _=A.find(({index:j})=>t.index<j)??A[0];c(_.index)}else c(t.index)});M.current.add(e)},[x,A,R,C,l,O,c]),re=n.useCallback(()=>{const e=setTimeout(()=>{const t=x.enabledPrevValue(R);if(t)if(!C||!l)c(t.index);else if(O.includes(t.index)){const _=A.reverse().find(({index:j})=>j<t.index)??A[0];c(_.index)}else c(t.index)});M.current.add(e)},[x,A,R,C,l,O,c]),G=te||l?se:ie,xe=te||l?ne:ie,ue=n.useCallback((e,t=!0)=>{const j=x.values().filter(({node:F})=>F.dataset.value===e).map(({node:F,index:Z})=>{if(!(s&&i)||Z!==0){const oe=Array.from(F.children).find(pe=>pe.getAttribute("data-label")!==null);return(oe==null?void 0:oe.innerHTML)??""}else return});E(F=>C?(j.forEach(Z=>{U(F)&&F.includes(Z??"")?t&&(F=U(F)?F.filter(pe=>pe!==Z):void 0):F=[...U(F)?F:[],Z]}),F):j[0])},[x,C,s,i]),de=n.useCallback(e=>{B(t=>U(t)?t.includes(e)?t.filter(j=>j!==e):[...t,e]:e),ue(e)},[ue,B]),Se=n.useCallback(e=>{e.stopPropagation(),B([]),E(void 0)},[E,B]),{isOpen:m,onOpen:me,onClose:w}=We({isOpen:P,defaultIsOpen:v,onOpen:k,onClose:I}),D=n.useCallback(()=>{p.disabled||p.readOnly||f||X||me()},[p,f,X,me]),fe=n.useCallback(()=>{let e=x.value(R);if("disabled"in((e==null?void 0:e.node.dataset)??{})&&(e=void 0),!e)return;const t=e.node.dataset.value??"";de(t),r&&w(),l&&Q()},[r,x,R,l,de,w,Q]),Ce=n.useCallback(()=>{m||(D(),G())},[m,G,D]),be=n.useCallback(()=>{m||(D(),G())},[m,G,D]),he=n.useCallback(e=>{const t=Ee(e);Ae(T.current,t)||o&&m&&w()},[o,m,w]),ve=n.useCallback(e=>{if(e.key===" "&&(e.key=e.code),p.disabled||p.readOnly)return;const _={ArrowDown:L?()=>Q():m?void 0:le(D,G),ArrowUp:L?()=>re():m?void 0:le(D,xe),Space:L?fe:m?void 0:le(D,G),Enter:L?fe:m?void 0:le(D,G),Home:m?se:void 0,End:m?ne:void 0,Escape:a?w:void 0}[e.key];_&&(e.preventDefault(),e.stopPropagation(),_())},[p.disabled,p.readOnly,L,m,D,G,xe,fe,se,ne,a,w,Q,re]);ze({ref:T,handler:w,enabled:m&&o}),n.useEffect(()=>{if(!C||!l&&Le(u))return;const e=S.length>0&&S.length===x.count(),t=S.length===u;e||t?(w(),ee(!0)):ee(!1)},[l,S,x,C,w,u]),Ne(()=>{m||c(-1)},[m]),He(()=>{M.current.forEach(e=>clearTimeout(e)),M.current.clear()});const Ie=n.useCallback(e=>({matchWidth:!0,...d,...e,isOpen:m,onOpen:D,onClose:w,placement:b,duration:h,trigger:"never",closeOnButton:!1,closeOnBlur:o}),[h,o,w,D,b,d,m]),Fe=n.useCallback((e={},t=null)=>({ref:ce(T,t),...W[0],...e,...p,onClick:$(e.onClick,d.onClick,Ce),onBlur:$(e.onBlur,d.onBlur,he)}),[W,p,he,Ce,d]),we=n.useCallback((e={},t=null)=>({ref:ce(Y,t),tabIndex:0,...ye(W[1],["value","defaultValue","onChange","aria-readonly"]),...e,"data-active":q(m),"data-placeholder":q(C?!(K!=null&&K.length):K===void 0),"aria-expanded":q(m),onFocus:$(e.onFocus,d.onFocus,be),onKeyDown:$(e.onKeyDown,d.onKeyDown,ve)}),[W,m,C,K,d,be,ve]);return{descendants:x,value:S,label:K,focusedIndex:R,placeholder:s,placeholderInOptions:i,omitSelectedValues:l,closeOnSelect:r,isOpen:m,containerRef:T,fieldRef:Y,listRef:ae,optionProps:g,formControlProps:p,onChangeLabel:ue,onChange:de,onClear:Se,onOpen:D,onClose:w,onFocusFirst:se,onFocusLast:ne,onFocusSelected:ie,onFocusNext:Q,onFocusPrev:re,setFocusedIndex:c,getPopoverProps:Ie,getContainerProps:Fe,getFieldProps:we}},Je=()=>{const{listRef:s,focusedIndex:o}=H(),a=Pe(),r=n.useRef(-1),i=a.value(o);return n.useEffect(()=>{if(!s.current||!i||r.current===i.index)return;const u=s.current,f=i.node,b=u.clientHeight,h=u.scrollTop,P=h+b,v=f.clientHeight,k=f.offsetTop,I=k+v,g=h<=k&&I<=P,d=r.current<i.index;g||(I<=b?s.current.scrollTo({top:0}):d?s.current.scrollTo({top:I-b}):s.current.scrollTo({top:k+1})),r.current=i.index},[s,i]),{getListProps:n.useCallback((u={},f=null)=>({as:"ul",ref:ce(s,f),role:"select",tabIndex:-1,...u}),[s])}},Xe=({label:s,...o})=>{const{value:a,omitSelectedValues:r}=H(),i=U(a),l=Pe(),u=l.values(),b=(i&&r?l.values(({node:g})=>a.includes(g.dataset.value??"")):[]).map(({index:g})=>g),P=!u.filter(({node:g,index:d})=>{var p;return((p=g.parentElement)==null?void 0:p.dataset.label)===s&&!b.includes(d)}).length,v=ke(o,_e),k=n.useCallback((g={},d=null)=>{const p={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};return{ref:d,...g,...v[0],style:P?p:void 0}},[v,P]),I=n.useCallback((g={},d=null)=>({ref:d,...g,...v[1],"data-label":s}),[v,s]);return{label:s,getContainerProps:k,getGroupProps:I}},et=(s,o)=>{const{fieldRef:a,value:r,placeholder:i,placeholderInOptions:l,omitSelectedValues:u,closeOnSelect:f,focusedIndex:b,optionProps:h,onChange:P,onChangeLabel:v,onFocusNext:k,onClose:I,setFocusedIndex:g}=H();let{icon:d,isDisabled:p,isFocusable:W,closeOnSelect:x,children:R,...c}={...h,...o};const X=!!p&&!W,ee=n.useRef(null),{index:T,register:Y,descendants:ae}=qe({disabled:X}),S=ae.values().slice(0,T),B=U(r),E=!(B?!1:S.some(({node:N})=>N.dataset.value===(c.value??"")))&&(B?r.includes(c.value??""):(c.value??"")===r),L=T===b;i&&T>0&&l&&!c.value&&console.warn(`${B?"MultiSelect":"Select"}: If placeholders are present, All options must be set value. If want to set an empty value, either don't set the placeholder or set 'placeholderInOptions' to false.`);const C=n.useCallback(N=>{if(N.preventDefault(),N.stopPropagation(),p){a.current&&a.current.focus();return}if(!Ze(N.currentTarget)){a.current&&a.current.focus();return}g(T),P(c.value??""),a.current&&a.current.focus(),(x??f)&&I(),u&&k()},[p,g,T,P,c.value,a,x,f,I,u,k]);n.useEffect(()=>{E&&v(c.value??"",!1)},[c,E,v]);const te=n.useCallback((N={})=>{const O={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};return{ref:ce(ee,s,Y),...ye(c,["value"]),...N,role:"select-item",tabIndex:-1,style:u&&E?O:void 0,"data-value":c.value??"","data-focus":q(L),"data-disabled":q(p),"aria-checked":ge(E),"aria-disabled":ge(p),onClick:$(c.onClick,N.onClick,C)}},[c,p,L,E,u,C,s,Y]);return{isSelected:E,isFocused:L,customIcon:d,children:R,getOptionProps:te}},tt=J(({className:s,children:o,__css:a,...r},i)=>{const{styles:l}=H(),u={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",cursor:"pointer",...l.icon,...a},b=Be(o).map(h=>n.cloneElement(h,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return y.jsx(V.div,{ref:i,className:z("ui-select__icon",s),__css:u,...r,children:Ge(o)?b:y.jsx(Oe,{})})}),vt=({className:s,children:o,...a})=>{const r=n.useRef(null),{styles:i}=H(),l=a.disabled,u=De({ref:r,isDisabled:l,...a});return y.jsx(tt,{"aria-label":"Clear value",className:z("ui-select__clear-icon",s),__css:i.clearIcon,...u,children:o??y.jsx(je,{w:"0.5em",h:"0.5em"})})},gt=J(({className:s,w:o,width:a,minW:r,minWidth:i,...l},u)=>{var P,v,k,I;const{styles:f}=H(),{getListProps:b}=Je();o=o??a??((P=f.list)==null?void 0:P.w)??((v=f.list)==null?void 0:v.width),r=r??i??((k=f.list)==null?void 0:k.minW)??((I=f.list)==null?void 0:I.minWidth);const h={...f.list};return y.jsx(Ke,{className:z("ui-select__list",s),w:o,minW:r,__css:h,...b(l,u)})}),kt=J(({className:s,color:o,h:a,height:r,minH:i,minHeight:l,children:u,...f},b)=>{const{styles:h}=H(),{label:P,getContainerProps:v,getGroupProps:k}=Xe(f);return a??(a=r),i??(i=l),y.jsxs(V.li,{className:z("ui-select__item","ui-select__item--group",s),__css:{w:"100%",h:"fit-content",color:o},...v(),children:[y.jsx(V.span,{className:"ui-select__item__group-label",__css:h.groupLabel,lineClamp:1,children:P}),y.jsx(V.ul,{...k({},b),className:"ui-select__item__group",__css:{h:a,minH:i,...h.group},children:u})]})}),_t=J(({className:s,icon:o,...a},r)=>{const{styles:i}=H(),{isSelected:l,customIcon:u,children:f,getOptionProps:b}=et(r,a);o??(o=u);const h={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...i.item};return y.jsxs(V.li,{className:z("ui-select__item",s),__css:h,...b(),children:[o!==null?y.jsx(st,{opacity:l?1:0,children:o||y.jsx(nt,{})}):null,y.jsx(V.span,{style:{flex:1},"data-label":!0,children:f})]})}),st=J(({className:s,...o},a)=>{const{styles:r}=H(),i={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...r.itemIcon};return y.jsx(V.span,{ref:a,className:z("ui-select__item__icon",s),__css:i,...o})}),nt=()=>y.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:y.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})});export{_t as O,Ct as S,kt as a,bt as b,tt as c,gt as d,H as e,vt as f,ht as u};