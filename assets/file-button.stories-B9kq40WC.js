import{j as e,a as r,F as c}from"./jsx-runtime-2xDJh5tt.js";import{I as h,a as f}from"./fontawesome-icon-Dp0uKqnG.js";import{r as u}from"./index-CBqU2yxZ.js";import{u as Oe,C as Le}from"./index.esm-Dtxxx2aT.js";import{c as Pe}from"./components-YHOB1S89.js";import{u as Me,f as je,F as j}from"./form-control-AJrH3zEl.js";import{B as M}from"./button-DQ4BMoEA.js";import{f as ze}from"./forward-ref-DuAegr0M.js";import{H as He,U as A,c as Ve,o as qe,h as Te,d as We,u as _e,w as Ae,R as Ee}from"./factory-DLpD49Xl.js";import{L as B}from"./link-CHwyhyCw.js";import{I as g}from"./icon-button-Db49ztlg.js";import{W as q}from"./flex-Bo1Lb4L5.js";import{T as Ge}from"./text-D-2-8y30.js";import{H as ye,V as Ne}from"./stack-BJO0HI5d.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-D30_Pagv.js";import"./index-CpntKjHS.js";import"./theme-provider-DXhTM26K.js";import"./index-81ytNefq.js";import"./mapValues-BIZneCWx.js";import"./_basePickBy-Dt7h7ShX.js";import"./isPlainObject-COn-XCqr.js";import"./index-DrFu-skq.js";import"./ui-provider-DB99Xib9.js";import"./index-DkqtbZN0.js";import"./environment-provider-Cx6a0V9s.js";import"./motion-JgkBPv6g.js";import"./loading-provider-D0eaBW50.js";import"./index-WdxzPEVz.js";import"./Combination-D2LZdSm3.js";import"./loading-De1VEe6t.js";import"./index-DiSCNHbg.js";import"./index-5JVG-Iiz.js";import"./motion-CIylrsRE.js";import"./index-_tcQm2Fk.js";import"./container-portal-mTUMNiRO.js";import"./index-BtM5VmRH.js";import"./notice-jcMkuZku.js";import"./alert-CcHmE75f.js";import"./use-component-style-D9HuanlY.js";import"./close-button-DavmcEIC.js";import"./use-ripple-Df_aFKka.js";import"./container-p_JhnM9J.js";import"./box-YqUOaFa2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";const n=ze(({className:o,resetRef:t,as:a,children:i,...d},F)=>{const{id:z,name:H,accept:S,multiple:s,form:V,...l}=Me(d),{disabled:p,readOnly:b,required:T,"aria-invalid":xe}=l,C=u.useRef(null),W=u.useCallback(()=>{var m;p||b||(m=C.current)==null||m.click()},[p,b]),Ie=u.useCallback(m=>{var _;const De=He(m.currentTarget.files)?void 0:Array.from(m.currentTarget.files);(_=l.onChange)==null||_.call(l,De)},[l]),we=u.useCallback(()=>{C.current&&(C.current.value="")},[]);return A(i)||(i=e(a||M,{className:Ve("ui-file-button",o),...qe(l,["onChange","aria-readonly"]),onClick:Te(l.onClick,W),children:i})),We(t,we),r(c,{children:[e(_e.input,{ref:Ae(C,F),type:"file","aria-hidden":!0,tabIndex:-1,id:z,name:H,form:V,accept:S,multiple:s,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:Ie,...Ee(l,je)}),A(i)?i({onClick:W,disabled:p,readOnly:b,required:T,isDisabled:p,isReadOnly:b,isRequired:T,isInvalid:xe}):i]})}),Tn={title:"Components / Forms / FileButton",component:n},U=()=>r(c,{children:[e(n,{children:"Upload"}),e(n,{as:g,icon:e(h,{icon:f}),"aria-label":"Upload file"}),e(n,{children:({onClick:o})=>e(B,{onClick:o,children:"Upload"})})]}),k=()=>r(c,{children:[e(n,{multiple:!0,children:"Upload"}),e(n,{as:g,icon:e(h,{icon:f}),multiple:!0,"aria-label":"Upload file"}),e(n,{multiple:!0,children:({onClick:o})=>e(B,{onClick:o,children:"Upload"})})]}),R=()=>r(c,{children:[e(n,{accept:"image/png,image/jpeg",children:"Upload"}),e(n,{as:g,icon:e(h,{icon:f}),accept:"image/png,image/jpeg","aria-label":"Upload file"}),e(n,{accept:"image/png,image/jpeg",children:({onClick:o})=>e(B,{onClick:o,children:"Upload"})})]}),v=()=>r(q,{gap:"md",children:[e(n,{colorScheme:"primary",size:"xs",children:"X Small"}),e(n,{colorScheme:"secondary",size:"sm",children:"Small"}),e(n,{colorScheme:"warning",size:"md",children:"Medium"}),e(n,{colorScheme:"danger",size:"lg",children:"Large"})]}),y=()=>e(q,{gap:"md",children:Pe.map(o=>e(n,{colorScheme:o,children:o},o))}),x=()=>r(q,{gap:"md",children:[e(n,{colorScheme:"primary",variant:"solid",children:"Solid"}),e(n,{colorScheme:"secondary",variant:"outline",children:"Outline"}),e(n,{colorScheme:"warning",variant:"ghost",children:"Ghost"}),e(n,{colorScheme:"danger",variant:"link",children:"Link"}),e(n,{variant:"unstyled",children:"Unstyle"})]}),I=()=>e(n,{isInvalid:!0,errorBorderColor:"orange.500",children:"Upload"}),w=()=>r(c,{children:[e(n,{isDisabled:!0,children:"Upload"}),e(n,{as:g,icon:e(h,{icon:f}),isDisabled:!0,"aria-label":"Upload file"}),e(n,{isDisabled:!0,children:({onClick:o,isDisabled:t})=>e(B,{onClick:o,opacity:t?.4:1,cursor:t?"not-allowed":"pointer",_hover:t?{textDecoration:"inherit"}:{textDecoration:"underline"},children:"Upload"})}),e(j,{isDisabled:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e(n,{children:"Upload"})})]}),D=()=>r(c,{children:[e(n,{isReadOnly:!0,children:"Upload"}),e(n,{as:g,icon:e(h,{icon:f}),isReadOnly:!0,"aria-label":"Upload file"}),e(n,{isReadOnly:!0,children:({onClick:o,isReadOnly:t})=>e(B,{onClick:o,cursor:t?"default":"pointer",_hover:t?{textDecoration:"inherit"}:{textDecoration:"underline"},children:"Upload"})}),e(j,{isReadOnly:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e(n,{children:"Upload"})})]}),O=()=>r(c,{children:[e(n,{isInvalid:!0,children:"Upload"}),e(n,{as:g,icon:e(h,{icon:f}),isInvalid:!0,"aria-label":"Upload file"}),e(j,{isInvalid:!0,label:"Upload file",errorMessage:"File is required.",children:e(n,{children:"Upload"})})]}),L=()=>{const[o,t]=u.useState(void 0),a=u.useRef(null),i=()=>{var d;t(void 0),(d=a.current)==null||d.call(a)};return r(c,{children:[r(Ge,{children:["files: ",(o==null?void 0:o.length)??0]}),r(ye,{children:[e(n,{resetRef:a,onChange:t,children:"Upload"}),e(M,{onClick:i,children:"Reset"})]})]})},P=()=>{var S;const o=u.useRef(null),{control:t,handleSubmit:a,watch:i,setValue:d,formState:{errors:F}}=Oe(),z=()=>{var s;d("fileButton",null),(s=o.current)==null||s.call(o)},H=s=>console.log("submit:",s);return console.log("watch:",i()),r(Ne,{as:"form",onSubmit:a(H),children:[e(j,{isInvalid:!!F.fileButton,label:"Files",errorMessage:(S=F.fileButton)==null?void 0:S.message,children:e(Le,{name:"fileButton",control:t,rules:{required:{value:!0,message:"This is required."}},render:({field:{ref:s,name:V,onChange:l,onBlur:p}})=>r(ye,{children:[e(n,{ref:s,name:V,onChange:l,onBlur:p,resetRef:o,children:"Upload"}),e(M,{onClick:z,children:"Reset"})]})})}),e(M,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var E,G,N;U.parameters={...U.parameters,docs:{...(E=U.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} aria-label="Upload file" />

      <FileButton>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(N=(G=U.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var X,J,K;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} multiple aria-label="Upload file" />

      <FileButton multiple>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} accept="image/png,image/jpeg" aria-label="Upload file" />

      <FileButton accept="image/png,image/jpeg">
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(Z=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <FileButton colorScheme="primary" size="xs">
        X Small
      </FileButton>

      <FileButton colorScheme="secondary" size="sm">
        Small
      </FileButton>

      <FileButton colorScheme="warning" size="md">
        Medium
      </FileButton>

      <FileButton colorScheme="danger" size="lg">
        Large
      </FileButton>
    </Wrap>;
}`,...(ne=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,re,te;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <FileButton key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </FileButton>)}
    </Wrap>;
}`,...(te=(re=y.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ie,le,ae;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <FileButton colorScheme="primary" variant="solid">
        Solid
      </FileButton>

      <FileButton colorScheme="secondary" variant="outline">
        Outline
      </FileButton>

      <FileButton colorScheme="warning" variant="ghost">
        Ghost
      </FileButton>

      <FileButton colorScheme="danger" variant="link">
        Link
      </FileButton>

      <FileButton variant="unstyled">Unstyle</FileButton>
    </Wrap>;
}`,...(ae=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var se,ce,ue;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <FileButton isInvalid errorBorderColor="orange.500">
      Upload
    </FileButton>;
}`,...(ue=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <FileButton isDisabled>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isDisabled aria-label="Upload file" />

      <FileButton isDisabled>
        {({
        onClick,
        isDisabled
      }) => <Link onClick={onClick} opacity={isDisabled ? 0.4 : 1} cursor={isDisabled ? "not-allowed" : "pointer"} _hover={isDisabled ? {
        textDecoration: "inherit"
      } : {
        textDecoration: "underline"
      }}>
            Upload
          </Link>}
      </FileButton>

      <FormControl isDisabled label="Upload file" helperMessage="Please select a file to upload.">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(me=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,fe,ge;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <FileButton isReadOnly>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isReadOnly aria-label="Upload file" />

      <FileButton isReadOnly>
        {({
        onClick,
        isReadOnly
      }) => <Link onClick={onClick} cursor={isReadOnly ? "default" : "pointer"} _hover={isReadOnly ? {
        textDecoration: "inherit"
      } : {
        textDecoration: "underline"
      }}>
            Upload
          </Link>}
      </FileButton>

      <FormControl isReadOnly label="Upload file" helperMessage="Please select a file to upload.">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(ge=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Be,Fe,Se;O.parameters={...O.parameters,docs:{...(Be=O.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isInvalid aria-label="Upload file" />

      <FormControl isInvalid label="Upload file" errorMessage="File is required.">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(Se=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};var be,Ce,Ue;L.parameters={...L.parameters,docs:{...(be=L.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [files, onChange] = useState<File[] | undefined>(undefined);
  const resetRef = useRef<() => void>(null);
  const onReset = () => {
    onChange(undefined);
    resetRef.current?.();
  };
  return <>
      <Text>files: {files?.length ?? 0}</Text>

      <HStack>
        <FileButton resetRef={resetRef} onChange={onChange}>
          Upload
        </FileButton>

        <Button onClick={onReset}>Reset</Button>
      </HStack>
    </>;
}`,...(Ue=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:Ue.source}}};var ke,Re,ve;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  type Data = {
    fileButton: File[] | null;
  };
  const resetRef = useRef<() => void>(null);
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onReset = () => {
    setValue("fileButton", null);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.fileButton} label="Files" errorMessage={errors.fileButton?.message}>
        <Controller name="fileButton" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field: {
          ref,
          name,
          onChange,
          onBlur
        }
      }) => <HStack>
              <FileButton {...{
          ref,
          name,
          onChange,
          onBlur
        }} resetRef={resetRef}>
                Upload
              </FileButton>

              <Button onClick={onReset}>Reset</Button>
            </HStack>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ve=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:ve.source}}};const Wn=["basic","withMultiple","withAccept","withSize","withColorScheme","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useReset","reactHookForm"];export{Wn as __namedExportsOrder,U as basic,Tn as default,w as isDisabled,O as isInvalid,D as isReadonly,P as reactHookForm,L as useReset,R as withAccept,I as withBorderColor,y as withColorScheme,k as withMultiple,v as withSize,x as withVariant};