import{a as o,F as a,j as e}from"./jsx-runtime-2xDJh5tt.js";import{u as s}from"./index-rYLD436_.js";import{S as c}from"./slide-BVoIDop8.js";import{B as t}from"./button-DQ4BMoEA.js";import{V as m}from"./stack-BJO0HI5d.js";import{T as p}from"./text-D-2-8y30.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DiSCNHbg.js";import"./index-5JVG-Iiz.js";import"./theme-provider-DXhTM26K.js";import"./factory-DLpD49Xl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CIylrsRE.js";import"./forward-ref-DuAegr0M.js";import"./utils-k_9kuoVx.js";import"./use-ripple-Df_aFKka.js";import"./loading-De1VEe6t.js";import"./index-CpntKjHS.js";import"./icon-D30_Pagv.js";import"./use-component-style-D9HuanlY.js";const N={title:"Components / Transitions / Slide",component:c},l=()=>{const[u,{toggle:n}]=s();return o(a,{children:[e(t,{onClick:n,children:"Please Click"}),e(c,{isOpen:u,placement:"bottom",children:o(m,{w:"full",bg:"orange.500",p:"md",children:[e(p,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},r=()=>{const[u,{toggle:n}]=s();return o(a,{children:[e(t,{onClick:n,children:"Please Click"}),e(c,{isOpen:u,placement:"bottom",duration:.7,children:o(m,{w:"full",bg:"orange.500",p:"md",children:[e(p,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},i=()=>{const[u,{toggle:n}]=s();return o(a,{children:[e(t,{onClick:n,children:"Please Click"}),e(c,{isOpen:u,placement:"left",children:o(m,{w:"full",bg:"orange.500",p:"md",children:[e(p,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})};var F,d,g;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="bottom">
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(g=(d=l.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var C,h,f;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="bottom" duration={0.7}>
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,S,B;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="left">
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(B=(S=i.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const Q=["basic","withDuration","withPlacement"];export{Q as __namedExportsOrder,l as basic,N as default,r as withDuration,i as withPlacement};