(self.webpackChunkid_be=self.webpackChunkid_be||[]).push([[8246],{98374:(T,p,t)=>{"use strict";t.d(p,{F:()=>m});var e=t(67294),o=t(52820),n=t(86896),g=t(88767);const m=(s={},f={})=>{const{id:l="",...i}=s,{get:r}=(0,o.kY)(),{locale:c}=(0,n.Z)(),v=(0,o.Xe)(c,{sensitivity:"base"}),{data:d,error:u,isError:a,isLoading:y,refetch:S}=(0,g.useQuery)(["roles",l,i],async()=>{const{data:P}=await r(`/admin/roles/${l??""}`,{params:i});return P},f);return{roles:e.useMemo(()=>{let P=[];return d&&(Array.isArray(d.data)?P=d.data:P=[d.data]),[...P].sort((C,W)=>v.compare(C.name,W.name))},[d,v]),error:u,isError:a,isLoading:y,refetch:S}}},18450:(T,p,t)=>{"use strict";t.d(p,{G:()=>m});var e=t(67294),o=t(52820),n=t(29204),g=t(88767);function m(){const{get:s}=(0,o.kY)(),{formatAPIError:f}=(0,o.So)(),l=(0,o.lm)(),i=(0,g.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:a}}=await s("/content-manager/components");return a},onError(a){a instanceof n.d7&&l({type:"warning",message:f(a)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:a}}=await s("/content-manager/content-types");return a},onError(a){a instanceof n.d7&&l({type:"warning",message:f(a)})}}]),[r,c]=i,v=r.isLoading||c.isLoading,d=e.useMemo(()=>(c?.data??[]).filter(a=>a.kind==="collectionType"&&a.isDisplayed),[c?.data]),u=e.useMemo(()=>(c?.data??[]).filter(a=>a.kind!=="collectionType"&&a.isDisplayed),[c?.data]);return{isLoading:v,components:e.useMemo(()=>r?.data??[],[r?.data]),collectionTypes:d,singleTypes:u}}},79194:(T,p,t)=>{"use strict";t.d(p,{v:()=>n});var e=t(67294),o=t(70743);function n(g,m){const s=(0,o.oR)();(0,e.useEffect)(()=>{s.injectReducer(g,m)},[s,g,m])}},75021:(T,p,t)=>{"use strict";t.d(p,{q:()=>g});var e=t(67294),o=t(52820),n=t(88767);function g({enabled:m}={enabled:!0}){const{get:s}=(0,o.kY)(),{data:f,isError:l,isLoading:i}=(0,n.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:v}}=await s("/admin/license-limit-information");return v},{enabled:m}),r=e.useMemo(()=>f??{},[f]),c=e.useCallback(v=>(r?.features??[]).find(u=>u.name===v)?.options??{},[r?.features]);return{license:r,getFeature:c,isError:l,isLoading:i}}},11984:(T,p,t)=>{"use strict";t.d(p,{CI:()=>s,ES:()=>o,FP:()=>i,Js:()=>c,Lk:()=>d,Mu:()=>l,PP:()=>g,Pz:()=>v,_V:()=>m,fC:()=>n,rI:()=>r,wt:()=>u,xn:()=>f});var e=t(86978);function o(a){return{type:e.bc,payload:{id:a}}}function n({workflow:a}){return{type:e.qZ,payload:a}}function g({workflows:a}){return{type:e.QM,payload:a}}function m(a){return{type:e.x4,payload:{stageId:a}}}function s(a={}){return{type:e.Ot,payload:a}}function f(a,y){return{type:e.Nj,payload:{stageId:a,...y}}}function l(a){return{type:e.k_,payload:a}}function i(a,y){return{type:e.$k,payload:{newIndex:y,oldIndex:a}}}function r(a){return{type:e.VS,payload:a}}function c(){return{type:e.gu}}function v(a){return{type:e.yq,payload:a}}function d(a){return{type:e.zn,payload:a}}function u(a){return{type:e.rg,payload:a}}},43390:(T,p,t)=>{"use strict";t.d(p,{eJ:()=>A,lx:()=>C,h4:()=>O,fC:()=>W});var e=t(67294),o=t(71590),n=t(40720),g=t(34726),m=t(90731),s=t(52820),f=t(97695),l=t(86896),i=t(40784),r=t(86978),c=t(96987),v=t(10574),d=t(58471),u=t(45697),a=t.n(u),y=t(88972);const S=(0,y.ZP)(c.k)`
  svg path {
    fill: ${({theme:w})=>w.colors.neutral600};
  }
`;function x({name:w}){return e.createElement(c.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,s.Q1)(300)},e.createElement(S,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},e.createElement(d.Z,{width:`${8/16}rem`})),e.createElement(v.Z,{fontWeight:"bold"},w))}x.propTypes={name:a().string.isRequired};function P({type:w,item:R}){switch(w){case r.uL.STAGE:return e.createElement(x,{...R});default:return null}}function C(){return e.createElement(i.r,{renderItem:P})}function W({children:w}){return e.createElement(o.A,null,e.createElement(n.o,{tabIndex:-1},e.createElement(g.D,null,w)))}function A({href:w}){const{formatMessage:R}=(0,l.Z)();return e.createElement(s.rU,{startIcon:e.createElement(f.Z,null),to:w},R({id:"global.back",defaultMessage:"Back"}))}function O({title:w,subtitle:R,navigationAction:I,primaryAction:B}){return e.createElement(e.Fragment,null,e.createElement(s.SL,{name:w}),e.createElement(m.T,{navigationAction:I,primaryAction:B,title:w,subtitle:R}))}},38705:(T,p,t)=>{"use strict";t.d(p,{uT:()=>P,fC:()=>A,Dx:()=>x});var e=t(67294),o=t(10574),n=t(96987),g=t(74622),m=t(71543),s=t(16607),f=t(96208),l=t(94101),i=t(35771),r=t(45697),c=t.n(r),v=t(86896),d=t(88972);const u=t.p+"0cd5f8915b265d5b1856.png",a="limits-title",y="https://strapi.io/pricing-cloud",S="https://strapi.io/contact-sales";function x({children:O}){return e.createElement(o.Z,{variant:"alpha",id:a},O)}x.propTypes={children:c().node.isRequired};function P({children:O}){return e.createElement(o.Z,{variant:"omega"},O)}P.propTypes={children:c().node.isRequired};function C(){const{formatMessage:O}=(0,v.Z)();return e.createElement(n.k,{gap:2,paddingTop:4},e.createElement(l.Q,{variant:"default",isExternal:!0,href:y},O({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),e.createElement(l.Q,{variant:"tertiary",isExternal:!0,href:S},O({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const W=d.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:O})=>`-${O.spaces[7]}`};
  margin-top: ${({theme:O})=>`-${O.spaces[7]}`};
  width: 360px;
`;function A({children:O,isOpen:w,onClose:R}){const{formatMessage:I}=(0,v.Z)();return w?e.createElement(g.P,{labelledBy:a},e.createElement(m.f,null,e.createElement(n.k,{gap:2,paddingLeft:7,position:"relative"},e.createElement(n.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},O,e.createElement(C,null)),e.createElement(n.k,{justifyContent:"end",height:"100%",width:"40%"},e.createElement(W,{src:u,"aria-hidden":!0,alt:"",loading:"lazy"}),e.createElement(s.x,{display:"flex",position:"absolute",right:0,top:0},e.createElement(f.h,{icon:e.createElement(i.Z,null),"aria-label":I({id:"global.close",defaultMessage:"Close"}),onClick:R})))))):null}A.defaultProps={isOpen:!1},A.propTypes={children:c().node.isRequired,isOpen:c().bool,onClose:c().func.isRequired}},68997:(T,p,t)=>{"use strict";t.d(p,{U:()=>oe});var e=t(67294),o=t(16607),n=t(96987),g=t(52820),m=t(45697),s=t.n(m),f=t(86896),l=t(70743),i=t(88972),r=t(11984),c=t(10574),v=t(45196);const d=(0,i.ZP)(v.Z)`
  > circle {
    fill: ${({theme:E})=>E.colors.neutral150};
  }
  > path {
    fill: ${({theme:E})=>E.colors.neutral600};
  }
`,u=(0,i.ZP)(o.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:E})=>E.spaces[6]};
    width: ${({theme:E})=>E.spaces[6]};

    > path {
      fill: ${({theme:E})=>E.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:E})=>E.colors.primary600} !important;
    ${c.Z} {
      color: ${({theme:E})=>E.colors.primary600} !important;
    }

    ${d} {
      > circle {
        fill: ${({theme:E})=>E.colors.primary600};
      }
      > path {
        fill: ${({theme:E})=>E.colors.neutral100};
      }
    }
  }

  &:active {
    ${c.Z} {
      color: ${({theme:E})=>E.colors.primary600};
    }

    ${d} {
      > circle {
        fill: ${({theme:E})=>E.colors.primary600};
      }
      > path {
        fill: ${({theme:E})=>E.colors.neutral100};
      }
    }
  }
`;function a({children:E,...$}){return e.createElement(u,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...$},e.createElement(n.k,{gap:2},e.createElement(d,{"aria-hidden":!0}),e.createElement(c.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},E)))}a.propTypes={children:s().node.isRequired};var y=t(82832),S=t(96208),x=t(22304),P=t(63122),C=t(1744),W=t(68889),A=t(31988),O=t(6498),w=t(38670),R=t(90090),I=t(52575),B=t(10360),G=t(79823),_=t(62873),Z=t(43838),K=t(41054),V=t(61080),X=t(21440),M=t(21892),b=t(86978),z=t(65649),k=t(5318);const J=(0,i.ZP)(y.ML)`
  padding-left: ${({theme:E})=>E.spaces[7]};
`,q=(0,i.ZP)(n.k)`
  > * {
    flex-grow: 1;
  }
`,Ee=(0,i.ZP)(I.sN)`
  color: ${({theme:E})=>E.colors.danger600};
`,ve=(0,i.ZP)(B.xz)`
  :hover,
  :focus {
    background-color: ${({theme:E})=>E.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,he=(0,i.ZP)(S.h)`
  align-items: center;
  border-radius: ${({theme:E})=>E.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({theme:E})=>E.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({theme:E})=>E.spaces[3]}};
  }
`,ye=(0,k.s)();function we(){return e.createElement(o.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function ce({id:E,index:$,canDelete:j,canReorder:se,canUpdate:U,isOpen:re=!1,stagesCount:Q}){const Y=h=>`${h+1} of ${Q}`,ee=h=>{te(D({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:N.value,position:Y(h)}))},Se=h=>{te(D({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:N.value,position:Y(h)}))},Me=()=>{te(D({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:N.value}))},Oe=(h,L)=>{te(D({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:N.value,position:Y(h)})),F((0,r.FP)(L,h))},Pe=()=>{ie(!0)},[de,te]=e.useState(null),{formatMessage:D}=(0,f.Z)(),{trackUsage:Ce}=(0,g.rS)(),F=(0,l.I0)(),Ae=(0,g.lm)(),[le,xe]=e.useState(re),[Re,ie]=e.useState(!1),[N,ue,De]=(0,K.U$)(`stages.${$}.name`),[ae,ge,We]=(0,K.U$)(`stages.${$}.color`),[H,me,Ie]=(0,K.U$)(`stages.${$}.permissions`),Le=(0,l.v9)(z.g$),[{handlerId:ke,isDragging:be,handleKeyDown:Be},$e,Ze,Ue,pe]=(0,X.Y9)(se,{index:$,item:{name:N.value},onGrabItem:ee,onDropItem:Se,onMoveItem:Oe,onCancel:Me,type:b.uL.STAGE}),Ke=(0,M.FE)($e,Ze),Ne=ye.map(({hex:h,name:L})=>({value:h,label:D({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:L}),color:h})),{themeColorName:je}=(0,k.k)(ae.value)??{},fe=Le.filter(h=>h.code!=="strapi-super-admin");return e.useEffect(()=>{pe((0,V.rX)(),{captureDraggingState:!1})},[pe,$]),e.createElement(o.x,{ref:Ke},de&&e.createElement(x.T,{"aria-live":"assertive"},de),be?e.createElement(we,null):e.createElement(P.U,{size:"S",variant:"primary",onToggle:()=>{xe(!le),le||Ce("willEditStage")},expanded:le,shadow:"tableShadow",error:ue.error??ge?.error??me?.error??!1,hasErrorMessage:!1},e.createElement(C.B,{title:N.value,togglePosition:"left",action:(j||U)&&e.createElement(n.k,null,e.createElement(B.fC,null,e.createElement(ve,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2},e.createElement(G.Z,{"aria-hidden":!0,focusable:!1}),e.createElement(x.T,{as:"span"},D({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"}))),e.createElement(B.VY,{popoverPlacement:"bottom-end",zIndex:2},e.createElement(B.rl,null,U&&e.createElement(I.sN,{onClick:()=>F((0,r.ES)(E))},D({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})),j&&e.createElement(Ee,{onClick:()=>F((0,r._V)(E))},D({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"}))))),U&&e.createElement(he,{background:"transparent",forwardedAs:"div",hasRadius:!0,role:"button",noBorder:!0,tabIndex:0,"data-handler-id":ke,ref:Ue,label:D({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:h=>h.stopPropagation(),onKeyDown:Be},e.createElement(_.Z,null)))}),e.createElement(W.v,{padding:6,background:"neutral0",hasRadius:!0},e.createElement(A.r,{gap:4},e.createElement(O.P,{col:6},e.createElement(w.o,{...N,id:N.name,disabled:!U,label:D({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:ue.error??!1,onChange:h=>{De.setValue(h.target.value),F((0,r.xn)(E,{name:h.target.value}))},required:!0})),e.createElement(O.P,{col:6},e.createElement(R.q4,{disabled:!U,error:ge?.error??!1,id:ae.name,required:!0,label:D({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:h=>{We.setValue(h),F((0,r.xn)(E,{color:h}))},value:ae.value.toUpperCase(),startIcon:e.createElement(n.k,{as:"span",height:2,background:ae.value,borderColor:je==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},Ne.map(({value:h,label:L,color:ne})=>{const{themeColorName:Fe}=(0,k.k)(ne);return e.createElement(R.ag,{value:h,key:h,startIcon:e.createElement(n.k,{as:"span",height:2,background:ne,borderColor:Fe==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},L)}))),e.createElement(O.P,{col:6},fe.length===0?e.createElement(g.X0,{description:{id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"},intlLabel:{id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"},name:H.name}):e.createElement(n.k,{alignItems:"flex-end",gap:3},e.createElement(q,{grow:1},e.createElement(y.NU,{...H,disabled:!U,error:me.error??!1,id:H.name,label:D({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),onChange:h=>{const L=h.map(ne=>({role:parseInt(ne,10),action:"admin::review-workflows.stage.transition"}));Ie.setValue(L),F((0,r.xn)(E,{permissions:L}))},placeholder:D({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,value:(H.value??[]).map(h=>`${h.role}`),withTags:!0},[{label:D({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),children:fe.map(h=>({value:`${h.id}`,label:h.name}))}].map(h=>"children"in h?e.createElement(y.Ab,{key:h.label,label:h.label,values:h.children.map(L=>L.value)},h.children.map(L=>e.createElement(J,{key:L.value,value:L.value},L.label))):e.createElement(y.ML,{key:h.value,value:h.value},h.label)))),e.createElement(S.h,{disabled:!U,icon:e.createElement(Z.Z,null),label:D({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",variant:"secondary",onClick:()=>Pe(H.value)})))))),e.createElement(g.QH.Root,{iconRightButton:null,isOpen:Re,onToggleDialog:()=>ie(!1),onConfirm:()=>{F((0,r.Mu)({permissions:H.value})),ie(!1),Ae({type:"success",message:D({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variantRightButton:"primary"},e.createElement(g.QH.Body,null,e.createElement(c.Z,{textAlign:"center",variant:"omega"},D({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})))))}ce.propTypes=s().shape({id:s().number.isRequired,color:s().string.isRequired,canDelete:s().bool.isRequired,canReorder:s().bool.isRequired,canUpdate:s().bool.isRequired,stagesCount:s().number.isRequired}).isRequired;const Te=(0,i.ZP)(o.x)`
  transform: translateX(-50%);
`;function oe({canDelete:E,canUpdate:$,stages:j}){const{formatMessage:se}=(0,f.Z)(),U=(0,l.I0)(),{trackUsage:re}=(0,g.rS)();return e.createElement(n.k,{direction:"column",gap:6,width:"100%"},e.createElement(o.x,{position:"relative",spacing:4,width:"100%"},e.createElement(Te,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),e.createElement(n.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},j.map((Q,Y)=>{const ee=Q?.id??Q.__temp_key__;return e.createElement(o.x,{key:`stage-${ee}`,as:"li"},e.createElement(ce,{id:ee,index:Y,isOpen:!Q.id,canDelete:j.length>1&&E,canReorder:j.length>1,canUpdate:$,stagesCount:j.length}))}))),$&&e.createElement(a,{type:"button",onClick:()=>{U((0,r.CI)({name:""})),re("willCreateStage")}},se({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})))}oe.defaultProps={canDelete:!0,canUpdate:!0,stages:[]},oe.propTypes={canDelete:s().bool,canUpdate:s().bool,stages:s().arrayOf(s().shape({id:s().number,__temp_key__:s().number,name:s().string.isRequired}))}},85230:(T,p,t)=>{"use strict";t.d(p,{Y:()=>x});var e=t(67294),o=t(82832),n=t(10574),g=t(31988),m=t(6498),s=t(38670),f=t(52820),l=t(41054),i=t(45697),r=t.n(i),c=t(86896),v=t(70743),d=t(88972),u=t(11984),a=t(65649);const y=(0,d.ZP)(o.ML)`
  padding-left: ${({theme:P})=>P.spaces[7]};
`,S=(0,d.ZP)(n.Z)`
  font-style: italic;
`;function x({canUpdate:P}){const{formatMessage:C,locale:W}=(0,c.Z)(),A=(0,v.I0)(),{collectionTypes:O,singleTypes:w}=(0,v.v9)(a.HK),R=(0,v.v9)(a.DV),I=(0,v.v9)(a.D6),[B,G,_]=(0,l.U$)("name"),[Z,K,V]=(0,l.U$)("contentTypes"),X=(0,f.Xe)(W,{sensitivity:"base"});return e.createElement(g.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow"},e.createElement(m.P,{col:6},e.createElement(s.o,{...B,id:B.name,disabled:!P,label:C({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:G.error??!1,onChange:M=>{A((0,u.rI)({name:M.target.value})),_.setValue(M.target.value)},required:!0})),e.createElement(m.P,{col:6},e.createElement(o.NU,{...Z,customizeContent:M=>C({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:M.length}),disabled:!P,error:K.error??!1,id:Z.name,label:C({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:M=>{A((0,u.rI)({contentTypes:M})),V.setValue(M)},placeholder:C({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"})},[...O.length>0?[{label:C({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:[...O].sort((M,b)=>X.compare(M.info.displayName,b.info.displayName)).map(M=>({label:M.info.displayName,value:M.uid}))}]:[],...w.length>0?[{label:C({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:[...w].map(M=>({label:M.info.displayName,value:M.uid}))}]:[]].map(M=>"children"in M?e.createElement(o.Ab,{key:M.label,label:M.label,values:M.children.map(b=>b.value.toString())},M.children.map(b=>{const{name:z}=I.find(k=>(R&&k.id!==R.id||!R)&&k.contentTypes.includes(b.value))??{};return e.createElement(y,{key:b.value,value:b.value},C({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:b.label,name:z,em:(...k)=>e.createElement(n.Z,{as:"em",fontWeight:"bold"},k),i:(...k)=>e.createElement(S,null,k)}))})):e.createElement(o.ML,{key:M.value,value:M.value},M.label)))))}x.defaultProps={canUpdate:!0},x.propTypes={canUpdate:r().bool}},86978:(T,p,t)=>{"use strict";t.d(p,{$k:()=>u,Ef:()=>P,FT:()=>S,Nj:()=>v,Ot:()=>r,QM:()=>l,VS:()=>a,_X:()=>C,bc:()=>c,gu:()=>n,k_:()=>d,lv:()=>y,qZ:()=>f,rg:()=>m,sN:()=>o,uL:()=>x,x4:()=>i,yq:()=>g,zn:()=>s});var e=t(12255);const o="settings_review-workflows",n="Settings/Review_Workflows/RESET_WORKFLOW",g="Settings/Review_Workflows/SET_CONTENT_TYPES",m="Settings/Review_Workflows/SET_IS_LOADING",s="Settings/Review_Workflows/SET_ROLES",f="Settings/Review_Workflows/SET_WORKFLOW",l="Settings/Review_Workflows/SET_WORKFLOWS",i="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",r="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",c="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",v="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",d="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",u="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",a="Settings/Review_Workflows/WORKFLOW_UPDATE",y={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},S=e.W.colors.primary600,x={STAGE:"stage"},P="numberOfWorkflows",C="stagesPerWorkflow"},52258:(T,p,t)=>{"use strict";t.d(p,{n:()=>g});var e=t(67294),o=t(52820),n=t(88767);function g(m={}){const{get:s}=(0,o.kY)(),{id:f="",...l}=m,i={populate:"stages"},{data:r,isLoading:c,status:v,refetch:d}=(0,n.useQuery)(["review-workflows","workflows",f],async()=>(await s(`/admin/review-workflows/workflows/${f}`,{params:{...i,...l}})).data),u=e.useMemo(()=>f&&r?.data?[r.data]:Array.isArray(r?.data)?r.data:[],[r?.data,f]);return{meta:e.useMemo(()=>r?.meta??{},[r?.meta]),workflows:u,isLoading:c,status:v,refetch:d}}},3848:(T,p,t)=>{"use strict";t.d(p,{E:()=>n,I:()=>g});var e=t(18172),o=t(86978);const n={serverState:{contentTypes:{collectionTypes:[],singleTypes:[]},roles:[],workflow:null,workflows:[]},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[],permissions:void 0}},isLoading:!0}};function g(s=n,f){return(0,e.Uy)(s,l=>{const{payload:i}=f;switch(f.type){case o.yq:{l.serverState.contentTypes=i;break}case o.rg:{l.clientState.isLoading=i;break}case o.zn:{l.serverState.roles=i;break}case o.qZ:{const r=i;r&&(l.serverState.workflow=r,l.clientState.currentWorkflow.data={...r,stages:r.stages.map(c=>({...c,color:c?.color??o.FT}))});break}case o.QM:{l.serverState.workflows=i;break}case o.gu:{l.clientState=n.clientState,l.serverState=n.serverState;break}case o.x4:{const{stageId:r}=i,{currentWorkflow:c}=s.clientState;l.clientState.currentWorkflow.data.stages=c.data.stages.filter(v=>(v?.id??v.__temp_key__)!==r);break}case o.Ot:{const{currentWorkflow:r}=s.clientState;r.data||(l.clientState.currentWorkflow.data={stages:[]});const c=m(l.clientState.currentWorkflow.data.stages);l.clientState.currentWorkflow.data.stages.push({...i,color:i?.color??o.FT,__temp_key__:c});break}case o.bc:{const{currentWorkflow:r}=s.clientState,{id:c}=i,v=r.data.stages.findIndex(u=>(u?.id??u?.__temp_key__)===c),d=r.data.stages[v];l.clientState.currentWorkflow.data.stages.splice(v+1,0,{...d,id:void 0,__temp_key__:m(l.clientState.currentWorkflow.data.stages)});break}case o.Nj:{const{currentWorkflow:r}=s.clientState,{stageId:c,...v}=i;l.clientState.currentWorkflow.data.stages=r.data.stages.map(d=>(d.id??d.__temp_key__)===c?{...d,...v}:d);break}case o.k_:{const{currentWorkflow:r}=s.clientState;l.clientState.currentWorkflow.data.stages=r.data.stages.map(c=>({...c,...i}));break}case o.$k:{const{currentWorkflow:{data:{stages:r}}}=s.clientState,{newIndex:c,oldIndex:v}=i;if(c>=0&&c<r.length){const d=r[v];let u=[...r];u.splice(v,1),u.splice(c,0,d),l.clientState.currentWorkflow.data.stages=u}break}case o.VS:{l.clientState.currentWorkflow.data={...l.clientState.currentWorkflow.data,...i};break}default:break}})}const m=(s=[])=>{const f=s.map(l=>l.id??l.__temp_key__);return Math.max(...f,-1)+1}},65649:(T,p,t)=>{"use strict";t.d(p,{CA:()=>v,D6:()=>r,DV:()=>i,HK:()=>f,RR:()=>u,bH:()=>c,g$:()=>l,xU:()=>d});var e=t(20573),o=t(18446),n=t.n(o),g=t(86978),m=t(3848);const s=a=>a[g.sN]??m.E,f=(0,e.P1)(s,({serverState:{contentTypes:a}})=>a),l=(0,e.P1)(s,({serverState:{roles:a}})=>a),i=(0,e.P1)(s,({clientState:{currentWorkflow:a}})=>a.data),r=(0,e.P1)(s,({serverState:{workflows:a}})=>a),c=(0,e.P1)(s,({serverState:a,clientState:{currentWorkflow:y}})=>!n()(a.workflow,y.data)),v=(0,e.P1)(s,({serverState:a,clientState:{currentWorkflow:y}})=>!(a.workflow?.stages??[]).every(S=>!!y.data.stages.find(({id:x})=>x===S.id))),d=(0,e.P1)(s,({clientState:{isLoading:a}})=>a),u=(0,e.P1)(s,({serverState:a})=>a)},5318:(T,p,t)=>{"use strict";t.d(p,{k:()=>n,s:()=>g});var e=t(12255),o=t(86978);function n(m){if(!m)return null;const f=Object.entries(e.W.colors).filter(([,l])=>l.toUpperCase()===m.toUpperCase()).reduce((l,[i])=>(o.lv?.[i]&&(l=i),l),null);return f?{themeColorName:f,name:o.lv[f]}:null}function g(){return Object.entries(o.lv).map(([m,s])=>({hex:e.W.colors[m].toUpperCase(),name:s}))}},66578:(T,p,t)=>{"use strict";t.d(p,{V:()=>g});var e=t(36968),o=t.n(e),n=t(87561);async function g({values:m,formatMessage:s}){const f=n.Ry({contentTypes:n.IX().of(n.Z_()),name:n.Z_().max(255,s({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:n.IX().of(n.Ry().shape({name:n.Z_().required(s({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,s({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",s({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(l){const{options:{context:i}}=this;return i.stages.filter(r=>r.name===l).length===1}),color:n.Z_().required(s({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:n.IX(n.Ry({role:n.Rx().strict().typeError(s({id:"Settings.review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"})).required,action:n.Z_().required({id:"Settings.review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1)});try{return await f.validate(m,{abortEarly:!1,context:m}),!0}catch(l){let i={};return l instanceof n.p8&&l.inner.forEach(r=>{o()(i,r.path,r.message)}),i}}},51584:(T,p,t)=>{var e=t(44239),o=t(37005),n="[object Boolean]";function g(m){return m===!0||m===!1||o(m)&&e(m)==n}T.exports=g},7654:(T,p,t)=>{var e=t(81763);function o(n){return e(n)&&n!=+n}T.exports=o},81763:(T,p,t)=>{var e=t(44239),o=t(37005),n="[object Number]";function g(m){return typeof m=="number"||o(m)&&e(m)==n}T.exports=g},63122:(T,p,t)=>{"use strict";t.d(p,{U:()=>v,y:()=>r});var e=t(85893),o=t(67294),n=t(88972),g=t(31254),m=t(92058),s=t(10574),f=t(96987),l=t(16607);const i=({theme:d,expanded:u,variant:a,disabled:y,error:S})=>S?`1px solid ${d.colors.danger600} !important`:y?`1px solid ${d.colors.neutral150}`:u?`1px solid ${d.colors.primary600}`:a==="primary"?`1px solid ${d.colors.neutral0}`:`1px solid ${d.colors.neutral100}`,r=(0,n.ZP)(s.Z)``,c=(0,n.ZP)(l.x)`
  border: ${i};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:d})=>d.colors.primary600};

    ${r} {
      color: ${({theme:d,expanded:u})=>u?void 0:d.colors.primary700};
    }

    ${s.Z} {
      color: ${({theme:d,expanded:u})=>u?void 0:d.colors.primary600};
    }

    & > ${f.k} {
      background: ${({theme:d})=>d.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:d})=>d.colors.primary200};
    }
  }
`,v=({children:d,disabled:u=!1,error:a,expanded:y=!1,hasErrorMessage:S=!0,id:x,onToggle:P,toggle:C,size:W="M",variant:A="primary",shadow:O})=>{const w=(0,m.M)(x),R=o.useMemo(()=>({expanded:y,onToggle:P,toggle:C,id:w,size:W,variant:A,disabled:u}),[u,y,w,P,W,C,A]);return(0,e.jsxs)(g.S.Provider,{value:R,children:[(0,e.jsx)(c,{"data-strapi-expanded":y,disabled:u,"aria-disabled":u,expanded:y,hasRadius:!0,variant:A,error:a,shadow:O,children:d}),a&&S&&(0,e.jsx)(l.x,{paddingTop:1,children:(0,e.jsx)(s.Z,{variant:"pi",textColor:"danger600",children:a})})]})}},68889:(T,p,t)=>{"use strict";t.d(p,{v:()=>g});var e=t(85893),o=t(31254),n=t(16607);const g=({children:m,...s})=>{const{expanded:f,id:l}=(0,o.A)();if(!f)return null;const i=`accordion-content-${l}`,r=`accordion-label-${l}`,c=`accordion-desc-${l}`;return(0,e.jsx)(n.x,{role:"region",id:i,"aria-labelledby":r,"aria-describedby":c,...s,children:m})}},31254:(T,p,t)=>{"use strict";t.d(p,{A:()=>n,S:()=>o});var e=t(67294);const o=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,e.useContext)(o)},1744:(T,p,t)=>{"use strict";t.d(p,{B:()=>d});var e=t(85893),o=t(58471),n=t(88972),g=t(63122),m=t(31254);const s=({expanded:u,disabled:a,variant:y})=>{let S="neutral100";return u?S="primary100":a?S="neutral150":y==="primary"&&(S="neutral0"),S};var f=t(58753),l=t(85200),i=t(96987),r=t(10574);const c=(0,n.ZP)(f.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:u,expanded:a})=>a?u.colors.primary600:u.colors.neutral500};
    }
  }
`,v=(0,n.ZP)(i.k)`
  min-height: ${({theme:u,size:a})=>u.sizes.accordions[a]};
  border-radius: ${({theme:u,expanded:a})=>a?`${u.borderRadius} ${u.borderRadius} 0 0`:u.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:u})=>u.colors.primary600};
      }
    }
  }
`,d=({title:u,description:a,as:y="span",togglePosition:S="right",action:x,...P})=>{const{onToggle:C,toggle:W,expanded:A,id:O,size:w,variant:R,disabled:I}=(0,m.A)(),B=`accordion-content-${O}`,G=`accordion-label-${O}`,_=`accordion-desc-${O}`,Z=w==="M"?6:4,K=w==="M"?Z:Z-2,V=s({expanded:A,disabled:I,variant:R}),M={as:y,fontWeight:w==="S"?"bold":void 0,id:G,textColor:A?"primary600":"neutral700",ellipsis:!0,variant:w==="M"?"delta":void 0},b=A?"primary600":"neutral600",z=A?"primary200":"neutral200",k=w==="M"?`${32/16}rem`:`${24/16}rem`,J=()=>{I||(W&&!C?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),W()):C&&C())},q=(0,e.jsx)(i.k,{justifyContent:"center",borderRadius:"50%",height:k,width:k,transform:A?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:z,cursor:I?"not-allowed":"pointer",onClick:J,shrink:0,children:(0,e.jsx)(l.J,{as:o.Z,width:w==="M"?`${11/16}rem`:`${8/16}rem`,color:A?"primary600":"neutral600"})});return(0,e.jsx)(v,{paddingBottom:K,paddingLeft:Z,paddingRight:Z,paddingTop:K,background:V,expanded:A,size:w,justifyContent:"space-between",cursor:I?"not-allowed":"",children:(0,e.jsxs)(i.k,{gap:3,flex:1,maxWidth:"100%",children:[S==="left"&&q,(0,e.jsx)(c,{onClick:J,"aria-disabled":I,"aria-expanded":A,"aria-controls":B,"aria-labelledby":G,"data-strapi-accordion-toggle":!0,expanded:A,type:"button",flex:1,minWidth:0,...P,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(g.y,{...M,children:u}),a&&(0,e.jsx)(r.Z,{as:"p",id:_,textColor:b,children:a})]})}),S==="right"&&(0,e.jsxs)(i.k,{gap:3,children:[q,x]}),S==="left"&&x]})})}},97695:(T,p,t)=>{"use strict";t.d(p,{Z:()=>n});var e=t(85893);const o=g=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...g,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),n=o},62873:(T,p,t)=>{"use strict";t.d(p,{Z:()=>n});var e=t(85893);const o=g=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...g,children:[(0,e.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),n=o},79823:(T,p,t)=>{"use strict";t.d(p,{Z:()=>n});var e=t(85893);const o=g=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...g,children:(0,e.jsx)("path",{fill:"#32324D",d:"M3.5 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"})}),n=o},45196:(T,p,t)=>{"use strict";t.d(p,{Z:()=>n});var e=t(85893);const o=g=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...g,children:[(0,e.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,e.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),n=o},29204:(T,p,t)=>{"use strict";t.d(p,{d7:()=>n});var e=t(52861);const{Axios:o,AxiosError:n,CanceledError:g,isCancel:m,CancelToken:s,VERSION:f,all:l,Cancel:i,isAxiosError:r,spread:c,toFormData:v,AxiosHeaders:d,HttpStatusCode:u,formToJSON:a,getAdapter:y,mergeConfig:S}=e.default}}]);
