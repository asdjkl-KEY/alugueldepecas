import{_ as b,F as I,y as c,n as N,r as A,o as i,c as C,w as a,S as g,G as u,H as v,a as s,J as S,a0 as w,I as y,a1 as V,a2 as B,N as $,Q as q,K as k,a3 as T,a4 as E,L as Q}from"./index.d1c7a911.js";import{Q as P}from"./QImg.ffc2e591.js";import{Q as F}from"./QPage.57501317.js";import{E as _}from"./EventBus.62ac39c0.js";import{A as x}from"./API.dd7d2a86.js";class L{constructor(n,l=1e3){if(typeof n!="function")throw new Error("O Argumento func deve ser uma fun\xE7\xE3o");this.func=n,this.timeout=l,this.started=!1}start(){this.started||(this.started=!0,this.func(),this.timer=setInterval(this.func,this.timeout))}stop(){clearInterval(this.timer)}crossCall(){this.func()}}const O=I({setup(){const e=c(JSON.parse(localStorage.getItem("userinfo"))),n=c(!1),l=c(!1),d=c([]),r=c(!1),m=c(""),p=()=>{x.get("/anuncios?search="+m.value).then(({data:f,status:h})=>{h===200&&(d.value=f.anuncios)})},t=()=>{x.get("/meus-anuncios?search="+m.value).then(({data:f,status:h})=>{console.log(h,f),h===200&&(d.value=f.anuncios)})};let o=new L(()=>{r.value?t():p()});return _.on("buscar",()=>{l.value=!l.value}),_.on("pecas",()=>{r.value=!r.value,r.value?t():p()}),o.start(),N(()=>{o.stop(),_.off("buscar"),_.off("pecas")}),{searchText:m,anuncios:d,logged:n,searching:l,pecas:r,loop:o,userinfo:e}},methods:{search(){this.loop.crossCall()},contatar(e){localStorage.setItem("id_anuncio",e),x.post("/novo-pedido",{})},detalhes(e){localStorage.setItem("id_anuncio",e),x.post("/detalhes",{})}}}),U={key:0,class:"row justify-between q-pl-xl q-pr-md q-pb-md"},D={class:"text-h5 text-grey-9"},G={class:"row full-width q-pl-md q-pr-md anuncios-container q-mb-xl"},J={key:0,class:"col-12 text-center text-h4 text-grey-7 q-mt-xl"},R={class:"text-h6 text-center text-grey-9"},j={class:"text-h4 text-center text-grey-9"},H={class:"text-subtitle1 text-grey-8"},K=u("i",{class:"fa-brands fa-whatsapp"},null,-1);function z(e,n,l,d,r,m){const p=A("di");return i(),C(F,{class:"flex column"},{default:a(()=>[!e.pecas||e.pecas&&e.searching?(i(),g("div",U,[u("div",D,v(e.pecas?"Pesquise a ferrementa por titulo ou descri\xE7\xE3o":"Encontre a ferramenta que precisa"),1),s(p,null,{default:a(()=>[s(S,{placeholder:"Pesquisar",modelValue:e.searchText,"onUpdate:modelValue":[n[0]||(n[0]=t=>e.searchText=t),e.search],outlined:"",color:"teal-13",class:"q-mb-md",style:{"min-width":"500px"}},{append:a(()=>[s(w,{name:"search",class:"cursor-pointer",onClick:e.search},null,8,["onClick"])]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1})])):y("",!0),u("div",G,[e.anuncios.length===0?(i(),g("div",J,"N\xE3o tem nada por enquanto...")):y("",!0),(i(!0),g(B,null,V(e.anuncios,t=>(i(),g("div",{key:t.id_anuncio,class:"col-md-4 col-sm-6 col-xs-12 col-lg-3 col-2 q-pl-md q-pr-md q-mt-md"},[s($,{dense:"",class:"anuncio"},{default:a(()=>[s(q,{class:"flex flex-center"},{default:a(()=>[s(P,{src:t.image,style:{height:"200px",width:"200px",margin:"auto"}},null,8,["src"])]),_:2},1024),s(q,null,{default:a(()=>{var o;return[u("div",R,[k(v(t.title),1),u("div",j,"R$ "+v((((o=Number(t.price))==null?void 0:o.toFixed(2))+"").replace(".",","))+" / dia",1)])]}),_:2},1024),s(T,{style:{width:"90%","margin-left":"5%"},color:"grey-9"}),s(q,null,{default:a(()=>[u("div",H,v(t.description),1)]),_:2},1024),s(E,{align:"right"},{default:a(()=>[s(Q,{label:"Detalhes",class:"text-teal-13",flat:"",onClick:o=>e.detalhes(t.id_anuncio)},null,8,["onClick"]),!e.pecas&&t.autor!==e.userinfo.id?(i(),C(Q,{key:0,class:"text-white a-btn",onClick:o=>e.contatar(t.id_anuncio)},{default:a(()=>[s(w,{class:"q-mr-sm"},{default:a(()=>[K]),_:1}),k(" CONTATAR ")]),_:2},1032,["onClick"])):y("",!0)]),_:2},1024)]),_:2},1024)]))),128))])]),_:1})}var ee=b(O,[["render",z]]);export{ee as default};
