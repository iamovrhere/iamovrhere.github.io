(this["webpackJsonppairwise-ranking-app"]=this["webpackJsonppairwise-ranking-app"]||[]).push([[0],{243:function(e,t,n){},244:function(e,t,n){},257:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),c=n.n(i),o=(n(243),n(227)),l=n(16),s=n(308),d=(n(244),n(42)),u=n.n(d),j=n(68),b=n(7),p=n(12),m=n(64),h={},f="PROFILE/ADD",O="PROFILE/SET_CURRENT",g="PROFILE/RESTORE_STATE",x="PROFILE/PAIR/WINNER",v="PROFILE/PAIR/SKIP",w="PROFILE/LIST/RESET_ROWS",k=function(e,t,n,a){return{type:f,data:{newProfileId:e,name:t,nameMap:n,pairList:a}}},C=function(e,t){return{type:w,data:{nameMap:e,pairList:t}}},y=n(49);function S(e,t){switch(t.type){case g:return Object(b.a)(Object(b.a)({},e),t.data.profileState);default:return Object(b.a)(Object(b.a)({},function(e,t){var n=t.type,a=t.data;switch(n){case O:var r=a.id;if(!e.profiles[r])throw new Error("Invalid profile supplied: '".concat(r,"'"));return Object(b.a)(Object(b.a)({},e),{},{currentProfile:r});case f:return Object(b.a)(Object(b.a)({},e),{},{currentProfile:a.newProfileId,profiles:R(e.profiles,t,a.newProfileId)});case w:case v:case x:if(!e.profiles[e.currentProfile])throw new Error("No profile selected!");return Object(b.a)(Object(b.a)({},e),{},{profiles:R(e.profiles,t,e.currentProfile)});default:return e}}(e,t)),{},{updatedAtTime:(new Date).getTime()})}}function R(e,t,n){var a=t.type,r=t.data;switch(a){case f:var i={};return i[n]={name:r.name,list:r.nameMap,dateTime:(new Date).getTime(),pairs:r.pairList,totalComparisons:r.pairList.length},Object(b.a)(Object(b.a)({},e),i);case v:var c={};return c[n]=Object(b.a)(Object(b.a)({},e[n]),{},{dateTime:(new Date).getTime(),pairs:P(e[n].pairs,t,r.pairIndex)}),Object(b.a)(Object(b.a)({},e),c);case x:var o={};return o[n]=Object(b.a)(Object(b.a)({},e[n]),{},{dateTime:(new Date).getTime(),list:I(e[n].list,t,r.winnerListId),pairs:P(e[n].pairs,t,r.pairIndex)}),Object(b.a)(Object(b.a)({},e),o);case w:var l={};return l[n]=Object(b.a)(Object(b.a)({},e[n]),{},{dateTime:(new Date).getTime(),list:I(e[n].list,t),pairs:P(e[n].pairs,t)}),Object(b.a)(Object(b.a)({},e),l);default:return e}}function I(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=t.type,r=t.data;switch(a){case w:return Object(b.a)(Object(b.a)({},e),r.nameMap);case x:var i={};return i[n]=Object(b.a)({},e[n]),i[n].score++,Object(b.a)(Object(b.a)({},e),i);default:return e}}function P(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=t.type,r=t.data;switch(a){case w:var i=[].concat(Object(y.a)(r.pairList),Object(y.a)(e));return i.filter((function(e,t){return i.findIndex((function(t){return t.id===e.id||t.rid===e.id}))===t}));case x:var c=Object(y.a)(e);return c.splice(n,1),c;case v:var o=Object(y.a)(e);return o[n].skipped++,o;default:return e}}var E=n(2),T=function(e){return e.currentProfile?Object(b.a)(Object(b.a)({},e.profiles[e.currentProfile]),{},{id:e.currentProfile}):null},L=Object(m.a)(T,(function(e){return e?e.pairs:[]})),N=Object(m.a)(T,(function(e){return e?Object.values(e.list):[]})),F=Object(m.a)(N,(function(e){return e.reduce((function(e,t){return e<t.score?t.score:e}),0)})),_=Object(m.a)(T,(function(e){return e&&e.totalComparisons||1})),A=Object(m.a)(L,_,(function(e,t){return e?t-e.length:0})),M=function(e){return e.updatedAtTime},B={currentProfile:null,updatedAtTime:null,profiles:{}},D=r.a.createContext();function H(e){var t,n,a=r.a.useReducer(S,B),i=Object(p.a)(a,2),c=i[0],o=i[1],l=(n=B,h[t="pairwise-ranking-app:profiles:v0.1.0"]||(h[t]=function(){try{var e=window.localStorage.getItem(t);return e?JSON.parse(e):n}catch(a){return console.error("Failed to retrieve value! Using initial value",a),n}}()),[h[t],function(e){try{var n=JSON.stringify(e);window.localStorage.setItem(t,n),h[t]=e}catch(a){console.error("Failed to store value!",a)}}]),s=Object(p.a)(l,2),d=s[0],b=s[1],m=r.a.useState(0),f=Object(p.a)(m,2),O=f[0],x=f[1],v=T(c),w=T(d),k=!v&&w,C=function(e,t){return Date.now()-e>5e3&&t>e}(M(d),M(c)),y=v&&C;r.a.useEffect((function(){k&&(o({type:g,data:{profileState:d}}),setInterval((function(){return x((new Date).getTime())}),5e3))}),[o,x,k,d]),r.a.useEffect((function(){y&&function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(c);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,O,y,b]);var R={state:c,dispatch:o};return Object(E.jsx)(D.Provider,{value:R,children:e.children})}var U,W,J,q,z,G,K,V,Y=n(13),Z=n(14),Q=n(230),X=n(285),$=n(28),ee=n(281),te=n(284),ne=n(228),ae=Object(ne.a)({palette:{primary:{main:"#689f38"},secondary:$.a.orange}}),re={mediumAndSmaller:"@media (max-width: ".concat(960,"px)")},ie=Object(Z.a)(ee.a)(U||(U=Object(Y.a)(["\n  &.MuiButton-root {\n    width: 10rem;\n    margin: .5rem;\n  }\n"]))),ce=Object(Z.a)(ie).attrs({variant:"contained",color:"primary"})(W||(W=Object(Y.a)([""]))),oe=Object(Z.a)(ie).attrs({variant:"contained"})(J||(J=Object(Y.a)([""]))),le=Object(Z.a)(ie).attrs({variant:"outlined",color:"secondary"})(q||(q=Object(Y.a)([""]))),se=Object(Z.a)(te.a).attrs({color:"primary"})(z||(z=Object(Y.a)(["\n  &.MuiFab-root {\n    margin: .5rem;\n  }\n"]))),de="1rem",ue=Z.a.div(G||(G=Object(Y.a)(["\n  display: flex;\n  align-content: space-between;\n  flex-direction: column;\n  align-items: center;\n\n  margin: 2rem auto;\n\n  width: 80%;\n  max-width: 100%;\n\n  "," {\n    width: 100%;\n  }\n"])),re.mediumAndSmaller),je=Object(X.a)((function(e){return{root:{width:"100%",maxWidth:400,backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto",maxHeight:"60vh",margin:de,color:e.palette.primary.dark,borderRadius:"1rem"}}})),be=Object(Z.a)(Q.a).attrs({elevation:10})(K||(K=Object(Y.a)(["\n  display: flex;\n  align-items: center;\n  min-height: 20vh;\n\n  margin: ",";\n  padding: 2rem;\n  border-radius: 1rem;\n"])),de),pe=Z.a.div(V||(V=Object(Y.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between\n"]))),me=n(258),he=n(286),fe=n(259),Oe=n(223),ge=n.n(Oe);function xe(e){var t=e.id,n=e.name,a=e.dateTime,r=e.listLength,i=e.progress,c=e.totalComparisons,o=e.onClick;return Object(E.jsx)(me.a,{button:!0,onClick:o,children:Object(E.jsx)(he.a,{primary:Object(E.jsxs)(pe,{children:[Object(E.jsx)("span",{children:n}),Object(E.jsx)("span",{children:"    ".concat(Math.round(i/c*100),"%")})]}),secondary:Object(E.jsxs)(pe,{children:[Object(E.jsx)("span",{children:"".concat(r," rows ")+"(".concat(i,"/").concat(c,")")}),Object(E.jsx)("span",{children:new Date(a).toLocaleString()})]})})},t)}var ve,we,ke,Ce,ye=function(e){var t=e.history,n=r.a.useContext(D),a=n.state,i=n.dispatch,c=function(e){return Object.entries(e.profiles).map((function(e){var t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(b.a)(Object(b.a)({},a),{},{id:n})}))}(a),o=je();return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(ue,{children:[c.length?Object(E.jsx)(fe.a,{className:o.root,children:c.map((function(e){var n=e.name,a=e.id,r=e.dateTime,c=e.list,o=e.pairs,l=e.totalComparisons,s=Object.values(c).length,d=l-o.length;return Object(E.jsx)(xe,{id:a,name:n,dateTime:r,progress:d,listLength:s,totalComparisons:l,onClick:function(){i(function(e){return{type:O,data:{id:e}}}(a)),t.push(Xt)}},a)}))}):Object(E.jsx)(be,{children:"Create a profile to get started"}),Object(E.jsx)(se,{"aria-label":"add",onClick:function(){return t.push(Qt)},children:Object(E.jsx)(ge.a,{})})]})})},Se=n(289),Re=n(290),Ie=n(291),Pe=function(e){return"".concat(e.substring(0,10),"_")+"".concat((new Date).getTime(),"_")+"".concat(Math.random().toString(36).substring(2,4))},Ee=function(e,t){var n=Object(p.a)(e,2),a=n[0],r=n[1];return t.map((function(e){var t=Object(p.a)(e,2),n=t[0],i=t[1];return{id:"".concat(a).concat(n),rid:"".concat(n).concat(a),left:r,right:i,skipped:0}}))},Te=function(e){var t=Object.entries(e);return Le(t)},Le=function e(t){if(t.length<2)return[];var n=t[0],a=t.slice(1);return Ee(n,a).concat(e(a))},Ne=function(e,t){var n=Object.entries(e),a=Object.entries(t);return n.reduce((function(e,t){return a=a.filter((function(e){return t[0]!==e[0]})),e.concat(Ee(t,a))}),[])},Fe=function(e){return e.reduce((function(e,t){var n="_"+t.name;return e[n]=Object(b.a)(Object(b.a)({},t),{},{id:n,score:0}),e}),{})},_e=function(){var e=Object(j.a)(u.a.mark((function e(t,n,a){var r,i,c,o,l,s,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.state,i=t.dispatch,c=a.split("\n").map((function(e){var t=e.split("    "),n=Object(p.a)(t,2);return{name:n[0],image:n[1]}})).filter((function(e){var t=e.name,n=e.image;return t||n})),o=Pe(n),l=100;case 4:if(!r.profiles[o]){e.next=13;break}if(!l--){e.next=9;break}o=Pe(n),e.next=11;break;case 9:return console.error("Failed uniqueness 100 times! Play the lottery?"),e.abrupt("break",13);case 11:e.next=4;break;case 13:s=Fe(c),d=Te(s),console.log(s,d),i(k(o,n,s,d));case 17:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,r,i,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.state,r=t.dispatch,i=T(a),c=n.reduce((function(e,t){var n=Object(b.a)({},i.list[t]);return n.score=0,e[t]=n,e}),{}),o=Ne(c,i.list),console.log(c,o),r(C(c,o));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Me=n(287),Be=Z.a.div(ve||(ve=Object(Y.a)(["\n  margin: auto;\n"]))),De=Object(Z.a)(Q.a).attrs({elevation:10})(we||(we=Object(Y.a)(["\n  padding: 1rem;\n  border-radius: 1rem;\n"]))),He=Object(Z.a)(Me.a)(ke||(ke=Object(Y.a)(["\n  &.MuiFormControl-root {\n    width: 95%;\n    margin: 1rem;\n  }\n"]))),Ue=Object(Z.a)(Me.a)(Ce||(Ce=Object(Y.a)(["\n  &.MuiFormControl-root {\n    width: 95%;\n    margin: 1rem;\n  }\n"])));var We=function(e){var t=e.history,n=r.a.useContext(D),a=r.a.useState(""),i=Object(p.a)(a,2),c=i[0],o=i[1],l=r.a.useState(""),s=Object(p.a)(l,2),d=s[0],u=s[1],j="List of comparable items",b="List Name";return Object(E.jsxs)(Be,{children:[Object(E.jsxs)(De,{children:[Object(E.jsx)(He,{"aria-label":b,label:b,placeholder:"What's the name of this Profile?",helperText:"",variant:"outlined",onChange:function(e){o(e.target.value)},value:c,InputLabelProps:{shrink:!!c}}),Object(E.jsx)(Ue,{"aria-label":j,label:j,multiline:!0,rows:10,rowsMax:20,variant:"outlined",placeholder:'"Item 1"    [Optional: <4-spaces> Image-URL]\n"Item 2"    [Optional: <4-spaces> Image-URL]\n"Item 3"    [Optional: <4-spaces> Image-URL]\n\n\nRecommended for lists under 500 (124,750 comparisons)\n...',onChange:function(e){u(e.target.value)},value:d,InputLabelProps:{shrink:!!d}}),Object(E.jsx)(Se.a,{title:"Use Sample Content",style:{visibility:d?"hidden":"visible"},children:Object(E.jsxs)(Re.a,{size:"small","aria-label":"Use Sample Content",onClick:function(){o("Apples & Oranges"),u("Honey Crisp    https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/600px-Honeycrisp.jpg\nTangerine     https://upload.wikimedia.org/wikipedia/commons/2/2a/TangerineFruit.jpg\nMandarin Orange    https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mandarin_Oranges_%28Citrus_Reticulata%29.jpg/800px-Mandarin_Oranges_%28Citrus_Reticulata%29.jpg\nBlood Orange     https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/BloodOrange.jpg/800px-BloodOrange.jpg\nAmbrosia     https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ambrosia_apples_2017_A3.jpg/600px-Ambrosia_apples_2017_A3.jpg\nGolden Delicious    https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Golden_delicious_apple.jpg/800px-Golden_delicious_apple.jpg\n\n")},disabled:!!d,children:[Object(E.jsx)(Ie.a,{}),"Sample"]})})]}),Object(E.jsx)(le,{onClick:function(){return an(t)},children:"Back"}),Object(E.jsx)(ce,{onClick:function(){_e(n,c,d).then((function(){return t.push(Xt)}))},disabled:!d.trim()||!c.trim(),children:"Save"})]})},Je=n(5),qe=n(292),ze=n(93),Ge=n(309),Ke=Object(Je.a)((function(e){return{root:{height:15,borderRadius:10},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:10}}}))(qe.a),Ve=Object(X.a)({root:{width:"100%"}});var Ye,Ze,Qe=function(e){var t=Ve(),n=e.value,a=e.total,r=n/a*100;return Object(E.jsxs)(Ge.a,{display:"flex",alignItems:"center",className:t.root,children:[Object(E.jsx)(Ge.a,{width:"100%",mr:1,children:Object(E.jsx)(Ke,Object(b.a)(Object(b.a)({variant:"determinate"},e),{},{value:r,height:40}))}),Object(E.jsx)(Ge.a,{children:Object(E.jsxs)(ze.a,{variant:"body2",children:["".concat(n,"/").concat(a),"\xa0","(".concat(Math.round(r),"%)")]})})]})},Xe=n(293),$e=n(294),et=n(295),tt=Object(Z.a)(Xe.a)(Ye||(Ye=Object(Y.a)(["\n  display: flex;\n  min-height: ","px;\n  width: ","px;\n  border-radius: .5rem;\n\n  h2 {\n    padding: 0 1rem;\n    overflow: ellipsis;\n  }\n\n  "," {\n    min-height: ","px;\n    min-width: ","px;\n    width: 90%;\n  }\n"])),330,400,re.mediumAndSmaller,215,215),nt=Object(Z.a)($e.a)(Ze||(Ze=Object(Y.a)(["\n  object-fit: scale-down;\n  max-height: ","px;\n\n  "," {\n    height: ","px;\n  }\n"])),250,re.mediumAndSmaller,175);var at,rt,it,ct,ot=function(e){var t=e.img,n=e.title,a=e.onClick;return Object(E.jsx)(tt,{raised:!0,children:Object(E.jsxs)(et.a,{onClick:a,children:[t&&Object(E.jsx)(nt,{component:"img",alt:n,image:t,title:n}),Object(E.jsx)(ze.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n})]})})},lt=Z.a.div(at||(at=Object(Y.a)(["\n  display: flex;\n  align-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n"]))),st=Z.a.div(rt||(rt=Object(Y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-top: 2rem;\n\n  > * {\n    max-width: 45%;\n    flex-grow: 1;\n  }\n\n  "," {\n    flex-direction: column;\n    > * {\n      max-width: unset;\n      width: 100%;\n    }\n  }\n"])),re.mediumAndSmaller),dt=Z.a.div(it||(it=Object(Y.a)(["\n  margin: 1rem;\n  flex-grow: unset;\n"]))),ut=Z.a.div(ct||(ct=Object(Y.a)(["\n  margin-top: 1rem;\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.7);\n"])));var jt=function(e){var t,n=e.history,a=e.pairIndex,i=e.leftBallot,c=e.rightBallot,o=e.skippedCount,l=e.progress,s=e.totalComparisons,d=r.a.useContext(D).dispatch,u=r.a.useState(0),j=Object(p.a)(u,2),b=j[0],m=j[1],h=function(e,t){d(function(e,t){return{type:x,data:{pairIndex:e,winnerListId:t}}}(e,t)),m(0),console.log("Voted for: ".concat(t))};return i&&c?Object(E.jsxs)(lt,{children:[Object(E.jsx)(Qe,{value:l,total:s}),Object(E.jsxs)(st,{children:[Object(E.jsx)(ot,{img:i.image,title:i.name,onClick:function(){return h(a,i.id)}}),Object(E.jsx)(dt,{onClick:function(){m(b+1),b&&b%20===0&&alert('You chose "OR", very funny!')},children:"OR"}),Object(E.jsx)(ot,{img:c.image,title:c.name,onClick:function(){return h(a,c.id)}})]}),Object(E.jsxs)(ut,{children:["Skipped: ",(t=o,1===t?"1 time":"".concat(t," times"))]}),Object(E.jsx)(oe,{onClick:function(){d(function(e){return{type:v,data:{pairIndex:e}}}(a)),console.log("Skipped: ".concat(c.id," vs. ").concat(i.id))},children:"Skip"}),Object(E.jsx)(le,{onClick:function(){return an(n)},children:"Back"})]}):null};var bt,pt,mt,ht=function(e){var t=e.history,n=r.a.useContext(D).state,a=r.a.useState(null),i=Object(p.a)(a,2),c=i[0],o=i[1],l=r.a.useState(null),s=Object(p.a)(l,2),d=s[0],u=s[1],j=r.a.useState(!1),m=Object(p.a)(j,2),h=m[0],f=m[1],O=L(n),g=A(n),x=_(n);return r.a.useEffect((function(){g>=x&&an(t)}),[t,g,x]),r.a.useEffect((function(){var e=function(e){var t=Math.floor(Math.random()*e.length);return{nextIndex:t,nextPair:e.length?e[t]:[]}}(O),t=e.nextIndex,n=e.nextPair;o(t),u(n),f(Math.floor(2*Math.random())%2===0)}),[O]),T(n)?d?Object(E.jsx)(jt,Object(b.a)(Object(b.a)({},e),{},{pairIndex:c,leftBallot:h?d.right:d.left,rightBallot:h?d.left:d.right,skippedCount:d.skipped,progress:g,totalComparisons:x})):null:(console.warn("Whoops! No profile selected!"),t.replace(Zt),null)},ft=Z.a.div(bt||(bt=Object(Y.a)(["\n  display: flex;\n  align-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n  width: 80%;\n  max-width: 100%;\n\n  "," {\n    width: 100%;\n  }\n"])),re.mediumAndSmaller),Ot=Z.a.div(pt||(pt=Object(Y.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin: 1rem 0;\n"]))),gt=n(304),xt=n(305),vt=n(306),wt=n(311),kt=n(296),Ct=n(297),yt=n(298),St=n(310),Rt=n(312),It=function(e){var t=e.headCells,n=e.classes,a=e.onSelectAllClick,r=e.order,i=e.orderBy,c=e.numSelected,o=e.rowCount,l=e.onRequestSort;return Object(E.jsx)(kt.a,{children:Object(E.jsxs)(Ct.a,{children:[Object(E.jsx)(yt.a,{padding:"checkbox",children:Object(E.jsx)(St.a,{indeterminate:c>0&&c<o,checked:o>0&&c===o,onChange:a,inputProps:{"aria-label":"select all items"}})}),t.map((function(e){return Object(E.jsx)(yt.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:i===e.id&&r,children:e.sortable?Object(E.jsxs)(Rt.a,{active:i===e.id,direction:i===e.id?r:"asc",onClick:(t=e.id,function(e){l(e,t)}),children:[e.label,i===e.id?Object(E.jsx)("span",{className:n.visuallyHidden,children:"desc"===r?"sorted descending":"sorted ascending"}):null]}):e.label},e.id);var t}))]})})},Pt=n(80),Et=n(4),Tt=n(299),Lt=n(300),Nt=n(301),Ft=n(302),_t=n(303),At=n(11),Mt=Object(X.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:{borderRadius:"1rem",color:e.palette.secondary.main,backgroundColor:Object(At.d)(e.palette.secondary.light,.85),paddingLeft:e.spacing(3),paddingRight:e.spacing(1)},title:{flex:"1 1 100%",flexDirection:"column"},input:{margin:"0 1rem"}}})),Bt=function(e){var t=Mt(),n=e.title,a=e.numSelected,i=e.rankRange,c=e.onRankRangeChange,o=e.onExportRows,l=e.onClearRows,s="Edit Ranges",d="Done",u=a>0,j=r.a.useState(!1),b=Object(p.a)(j,2),m=b[0],h=b[1],f=function(e){var t=e.start,n=e.end;return function(e){var a=e.target.value;isNaN(a)||""===a||c({start:Number(!0===t?a:i.start),end:Number(!0===n?a:i.end)})}};return Object(E.jsx)(Tt.a,{className:Object(Et.a)(t.root,Object(Pt.a)({},t.highlight,u)),children:u?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(ze.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div",children:[a," selected"]}),Object(E.jsx)(Se.a,{title:"Export rows",children:Object(E.jsx)(Re.a,{"aria-label":"Export rows",onClick:o,children:Object(E.jsx)(Lt.a,{})})}),Object(E.jsx)(Se.a,{title:"Clear rows",children:Object(E.jsx)(Re.a,{"aria-label":"Clear rows",onClick:l,children:Object(E.jsx)(Nt.a,{})})})]}):m?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:t.title,children:[Object(E.jsx)(Me.a,{id:"start-range",className:t.input,label:"Rank Start",type:"number",defaultValue:i.start,InputLabelProps:{shrink:!0},onChange:f({start:!0})}),Object(E.jsx)(Me.a,{id:"end-range",className:t.input,label:"Rank End",type:"number",defaultValue:i.end,InputLabelProps:{shrink:!0},onChange:f({end:!0})})]}),Object(E.jsx)(Se.a,{title:d,children:Object(E.jsx)(Re.a,{"aria-label":d,onClick:function(){return h(!1)},children:Object(E.jsx)(Ft.a,{})})})]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(ze.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:n}),Object(E.jsx)(Se.a,{title:s,children:Object(E.jsx)(Re.a,{"aria-label":s,onClick:function(){return h(!0)},children:Object(E.jsx)(_t.a,{})})})]})})},Dt=Object(X.a)((function(e){return{root:{width:"100%"},container:{minHeight:200,maxHeight:440},paper:{width:"100%",marginBottom:e.spacing(2),borderRadius:"1rem"},table:{minWidth:200},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}})),Ht=Z.a.img(mt||(mt=Object(Y.a)(["\n  width: 100%;\n"]))),Ut=function(e){var t=e.headCell,n=e.row,a=e.labelId,r=e.rank,i=Object(b.a)(Object(b.a)({},n),{},{rank:r}),c=t.id,o=t.numeric,l="name"===c,s="image"===c,d=l?null:s?100:30;return Object(E.jsx)(yt.a,{align:o?"right":"left",id:l?a:null,component:l?"th":null,scope:l?"row":null,width:d,children:s?i.image&&Object(E.jsx)(Ht,{src:i.image,alt:i.name}):i[c]})},Wt=function(e){var t=e.headCells,n=e.row,a=e.labelId,r=e.isItemSelected,i=e.handleClick,c=e.rank;return Object(E.jsxs)(Ct.a,{hover:!0,onClick:function(e){return i(e,n.id)},role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,children:[Object(E.jsx)(yt.a,{padding:"checkbox",children:Object(E.jsx)(St.a,{checked:r,inputProps:{"aria-labelledby":a}})}),t.map((function(e){return Object(E.jsx)(Ut,{headCell:e,row:n,labelId:a,rank:c},"".concat(e.id,"-").concat(n.id))}))]},n.id)};function Jt(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function qt(e,t){return"desc"===e?function(e,n){return Jt(e,n,t)}:function(e,n){return-Jt(e,n,t)}}function zt(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var Gt=[{id:"score",numeric:!0,disablePadding:!0,label:"Score",sortable:!0},{id:"image",numeric:!1,disablePadding:!1,label:"Image",sortable:!1},{id:"name",numeric:!1,disablePadding:!0,label:"Name",sortable:!0},{id:"rank",numeric:!0,disablePadding:!1,label:"Rank",sortable:!1}],Kt=[10,25,100,1e3],Vt=function(e){var t=e.title,n=e.rows,a=e.defaultOrderBy,i=e.defaultOrder,c=e.defaultRowCount,o=e.maxScore,l=e.onClearRows,s=Dt(),d=r.a.useState(i),u=Object(p.a)(d,2),j=u[0],b=u[1],m=r.a.useState(a),h=Object(p.a)(m,2),f=h[0],O=h[1],g=r.a.useState([]),x=Object(p.a)(g,2),v=x[0],w=x[1],k=r.a.useState(0),C=Object(p.a)(k,2),y=C[0],S=C[1],R=r.a.useState(c),I=Object(p.a)(R,2),P=I[0],T=I[1],L=r.a.useState(1),N=Object(p.a)(L,2),F=N[0],_=N[1],A=r.a.useState(10),M=Object(p.a)(A,2),B=M[0],D=M[1],H=function(e,t){var n=v.indexOf(t),a=[];-1===n?a=a.concat(v,t):0===n?a=a.concat(v.slice(1)):n===v.length-1?a=a.concat(v.slice(0,-1)):n>0&&(a=a.concat(v.slice(0,n),v.slice(n+1))),w(a)},U=function(e){return-1!==v.indexOf(e)},W=function(e){var t=(B-F)*(e/o||0)+F;return(Math.round(100*(t+Number.EPSILON))/100).toFixed(2)};return Object(E.jsx)("div",{className:s.root,children:Object(E.jsxs)(Q.a,{className:s.paper,children:[Object(E.jsx)(Bt,{title:t,numSelected:v.length,rankRange:{start:F,end:B},onRankRangeChange:function(e){var t=e.start,n=e.end;_(t),D(n)},onExportRows:function(){!function(e,t,n){var a=0,r="data:text/csv;charset=utf-8,"+e.map((function(e,n){if(a||(a=e.length),a!==e.length)throw new Error("Mismatched length; expected ".concat(a," received ").concat(e.length," ")+"at row ".concat(n));return e.join(t)})).join("\r\n"),i=document.createElement("a");i.href=encodeURI(r),i.target="_blank",i.download="".concat(n,".csv"),i.click()}(function(){var e=Gt.map((function(e){return e.label})),t=zt(n,qt(j,f)).filter((function(e){return U(e.id)})).map((function(e){return Gt.map((function(t){return"rank"===t.id?W(e.score):e[t.id]}))}));return t.unshift(e),t}(),"\t",t)},onClearRows:function(){l(v)}}),Object(E.jsx)(gt.a,{className:s.container,children:Object(E.jsxs)(xt.a,{stickyHeader:!0,className:s.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table",children:[Object(E.jsx)(It,{classes:s,numSelected:v.length,order:j,orderBy:f,onSelectAllClick:function(e){if(e.target.checked){var t=n.map((function(e){return e.id}));w(t)}else w([])},onRequestSort:function(e,t){b(f===t&&"asc"===j?"desc":"asc"),O(t)},rowCount:n.length,headCells:Gt}),Object(E.jsx)(vt.a,{children:zt(n,qt(j,f)).slice(y*P,y*P+P).map((function(e,t){var n=U(e.id),a="enhanced-table-checkbox-".concat(t);return Object(E.jsx)(Wt,{headCells:Gt,row:e,labelId:a,isItemSelected:n,handleClick:H,rank:W(e.score)},a)}))})]})}),Object(E.jsx)(wt.a,{rowsPerPageOptions:Kt,component:"div",count:n.length,rowsPerPage:P,page:y,onChangePage:function(e,t){S(t)},onChangeRowsPerPage:function(e){T(parseInt(e.target.value,10)),S(0)}})]})})};var Yt=function(e){var t=e.history,n=r.a.useContext(D),a=n.state,i=n.dispatch,c=T(a);if(console.log(a),!c)return console.warn("Whoops! No profile selected!"),t.replace(Zt),null;var o=A(a),l=_(a),s=F(a),d=N(a),u=o?o>=l?"(Results)":"(Partial)":": Ready to start!",j="".concat(c.name," ").concat(u);return Object(E.jsxs)(ft,{children:[Object(E.jsxs)(Ot,{children:[Object(E.jsx)(Qe,{value:o,total:l}),o<l&&Object(E.jsx)(ce,{onClick:function(){return t.push($t)},children:o?"Continue":"Start"})]}),Object(E.jsx)(Vt,{rows:d,maxScore:s,defaultOrderBy:"score",defaultOrder:"desc",defaultRowCount:25,title:j,onClearRows:function(e){return Ae({state:a,dispatch:i},e)}}),Object(E.jsx)(le,{onClick:function(){return t.replace(Zt)},children:"Switch Profiles"})]})},Zt="/",Qt="/edit-profile",Xt="/list",$t="/vote-pair",en=Zt,tn=function(e,t){return{path:e,component:t}},nn=[tn($t,ht),tn(Xt,Yt),tn(Qt,We),tn(Zt,ye)],an=function(e){e.length>1?e.goBack():e.replace(en)};var rn=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"app",children:Object(E.jsx)("div",{className:"app-body",children:Object(E.jsx)(s.a,{theme:ae,children:Object(E.jsx)(o.a,{basename:"/pairwise-ranking-app",children:Object(E.jsx)(l.c,{children:nn.map((function(e){var t=e.path,n=e.component;return Object(E.jsx)(l.a,{path:t,component:n},t)}))})})})})}),Object(E.jsxs)("div",{className:"build-info",children:["Release: ","e6a1604-2021-07-11T23:47:27.433Z"]})]})},cn=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,314)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},on=r.a.createContext(),ln="PROFILE/ADD",sn={currentProfileKey:null,profiles:[]};function dn(e,t){switch(t.type){case ln:return Object(b.a)(Object(b.a)({},e),{},{profiles:[].concat(Object(y.a)(e.profiles),[t.data])});case"PROFILE/SET_CURRENT":return Object(b.a)(Object(b.a)({},e),{},{currentProfileKey:t.data});default:return e}}function un(e){var t=r.a.useReducer(dn,sn),n=Object(p.a)(t,2),a={state:n[0],dispatch:n[1]};return Object(E.jsx)(on.Provider,{value:a,children:e.children})}c.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(un,{children:Object(E.jsx)(H,{children:Object(E.jsx)(rn,{})})})}),document.getElementById("root")),cn()}},[[257,1,2]]]);
//# sourceMappingURL=main.2f65b0da.chunk.js.map