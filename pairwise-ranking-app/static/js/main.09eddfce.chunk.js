(this["webpackJsonppairwise-ranking-app"]=this["webpackJsonppairwise-ranking-app"]||[]).push([[0],{243:function(e,t,n){},244:function(e,t,n){},257:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),c=n.n(i),o=(n(243),n(227)),l=n(16),s=n(308),d=(n(244),n(7)),u=n(12),j=n(63),b=n(62),p="PROFILE/ADD",m="PROFILE/SET_CURRENT",h="PROFILE/PAIR/WINNER",O="PROFILE/PAIR/SKIP",f="PROFILE/LIST/RESET_ROWS",g=function(e,t,n,a){return{type:p,data:{newProfileId:e,name:t,nameMap:n,pairList:a}}},x=function(e,t){return{type:f,data:{nameMap:e,pairList:t}}};function v(e,t){var n=t.type,a=t.data;switch(n){case m:var r=a.id;if(!e.profiles[r])throw new Error("Invalid profile supplied: '".concat(r,"'"));return Object(d.a)(Object(d.a)({},e),{},{currentProfile:r});case p:return Object(d.a)(Object(d.a)({},e),{},{currentProfile:a.newProfileId,profiles:w(e.profiles,t,a.newProfileId)});case f:case O:case h:if(!e.profiles[e.currentProfile])throw new Error("No profile selected!");return Object(d.a)(Object(d.a)({},e),{},{profiles:w(e.profiles,t,e.currentProfile)});default:return e}}function w(e,t,n){var a=t.type,r=t.data;switch(a){case p:var i={};return i[n]={name:r.name,list:r.nameMap,dateTime:(new Date).getTime(),pairs:r.pairList,totalComparisons:r.pairList.length},Object(d.a)(Object(d.a)({},e),i);case O:var c={};return c[n]=Object(d.a)(Object(d.a)({},e[n]),{},{dateTime:(new Date).getTime(),pairs:C(e[n].pairs,t,r.pairIndex)}),Object(d.a)(Object(d.a)({},e),c);case h:var o={};return o[n]=Object(d.a)(Object(d.a)({},e[n]),{},{dateTime:(new Date).getTime(),list:k(e[n].list,t,r.winnerListId),pairs:C(e[n].pairs,t,r.pairIndex)}),Object(d.a)(Object(d.a)({},e),o);case f:var l={};return l[n]=Object(d.a)(Object(d.a)({},e[n]),{},{dateTime:(new Date).getTime(),list:Object(d.a)(Object(d.a)({},e[n].list),r.nameMap),pairs:Object(b.a)(r.pairList)}),Object(d.a)(Object(d.a)({},e),l);default:return e}}function k(e,t,n){switch(t.type){case h:var a={};return a[n]=Object(d.a)({},e[n]),a[n].score++,Object(d.a)(Object(d.a)({},e),a);default:return e}}function C(e,t,n){switch(t.type){case h:var a=Object(b.a)(e);return a.splice(n,1),a;case O:var r=Object(b.a)(e);return r[n].skipped++,r;default:return e}}var y=n(2),R=function(e){return e.currentProfile?Object(d.a)(Object(d.a)({},e.profiles[e.currentProfile]),{},{id:e.currentProfile}):null},P=Object(j.a)(R,(function(e){return e?e.pairs:[]})),S=Object(j.a)(R,(function(e){return e?Object.values(e.list):[]})),I=Object(j.a)(S,(function(e){return e.reduce((function(e,t){return e<t.score?t.score:e}),0)})),N=Object(j.a)(R,(function(e){return e&&e.totalComparisons||1})),L=Object(j.a)(P,N,(function(e,t){return e?t-e.length:0})),E={currentProfile:null,profiles:{}},T=r.a.createContext();function _(e){var t=r.a.useReducer(v,E),n=Object(u.a)(t,2),a={state:n[0],dispatch:n[1]};return Object(y.jsx)(T.Provider,{value:a,children:e.children})}var F,M,B,A,D,H,U,W,q=n(14),z=n(15),G=n(230),K=n(285),V=n(28),J=n(281),Y=n(284),Z=n(228),Q=Object(Z.a)({palette:{primary:{main:"#689f38"},secondary:V.a.orange}}),X={mediumAndSmaller:"@media (max-width: ".concat(960,"px)")},$=Object(z.a)(J.a)(F||(F=Object(q.a)(["\n  &.MuiButton-root {\n    width: 10rem;\n    margin: .5rem;\n  }\n"]))),ee=Object(z.a)($).attrs({variant:"contained",color:"primary"})(M||(M=Object(q.a)([""]))),te=Object(z.a)($).attrs({variant:"contained"})(B||(B=Object(q.a)([""]))),ne=Object(z.a)($).attrs({variant:"outlined",color:"secondary"})(A||(A=Object(q.a)([""]))),ae=Object(z.a)(Y.a).attrs({color:"primary"})(D||(D=Object(q.a)(["\n  &.MuiFab-root {\n    margin: .5rem;\n  }\n"]))),re="1rem",ie=z.a.div(H||(H=Object(q.a)(["\n  display: flex;\n  align-content: space-between;\n  flex-direction: column;\n  align-items: center;\n\n  margin: 2rem auto;\n\n  width: 80%;\n  max-width: 100%;\n\n  "," {\n    width: 100%;\n  }\n"])),X.mediumAndSmaller),ce=Object(K.a)((function(e){return{root:{width:"100%",maxWidth:400,backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto",maxHeight:"60vh",margin:re,color:e.palette.primary.dark,borderRadius:"1rem"}}})),oe=Object(z.a)(G.a).attrs({elevation:10})(U||(U=Object(q.a)(["\n  display: flex;\n  align-items: center;\n  min-height: 20vh;\n\n  margin: ",";\n  padding: 2rem;\n  border-radius: 1rem;\n"])),re),le=z.a.div(W||(W=Object(q.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between\n"]))),se=n(258),de=n(286),ue=n(259),je=n(223),be=n.n(je);function pe(e){var t=e.id,n=e.name,a=e.dateTime,r=e.progress,i=e.totalComparisons,c=e.onClick;return Object(y.jsx)(se.a,{button:!0,onClick:c,children:Object(y.jsx)(de.a,{primary:n,secondary:Object(y.jsxs)(le,{children:[Object(y.jsx)("span",{children:"".concat(r,"/").concat(i," ")+"(".concat(Math.round(r/i*100),"%)")}),Object(y.jsx)("span",{children:new Date(a).toLocaleString()})]})})},t)}var me,he,Oe,fe,ge=function(e){var t=e.history,n=r.a.useContext(T),a=n.state,i=n.dispatch,c=function(e){return Object.entries(e.profiles).map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(d.a)(Object(d.a)({},a),{},{id:n})}))}(a),o=ce();return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(ie,{children:[c.length?Object(y.jsx)(ue.a,{className:o.root,children:c.map((function(e){var n=e.name,a=e.id,r=e.dateTime,c=e.pairs,o=e.totalComparisons,l=o-Object.keys(c).length;return Object(y.jsx)(pe,{id:a,name:n,dateTime:r,progress:l,totalComparisons:o,onClick:function(){i(function(e){return{type:m,data:{id:e}}}(a)),t.push(Vt)}},a)}))}):Object(y.jsx)(oe,{children:"Create a profile to get started (no local storage yet)"}),Object(y.jsx)(ae,{"aria-label":"add",onClick:function(){return t.push(Kt)},children:Object(y.jsx)(be.a,{})})]})})},xe=n(289),ve=n(290),we=n(291),ke=n(69),Ce=n.n(ke),ye=n(115),Re=function(e){return"".concat(e.substring(0,10),"_")+"".concat((new Date).getTime(),"_")+"".concat(Math.random().toString(36).substring(2,4))},Pe=function(e,t){var n=Object(u.a)(e,2),a=n[0],r=n[1];return t.map((function(e){var t=Object(u.a)(e,2),n=t[0],i=t[1];return{id:"".concat(a).concat(n),left:r,right:i,skipped:0}}))},Se=function(e){var t=Object.entries(e);return Ie(t)},Ie=function e(t){if(t.length<2)return[];var n=t[0],a=t.slice(1);return Pe(n,a).concat(e(a))},Ne=function(e,t){var n=Object.entries(e),a=Object.entries(t);return n.reduce((function(e,t){return a=a.filter((function(e){return t[0]!==e[0]})),e.concat(Pe(t,a))}),[])},Le=function(e){return e.reduce((function(e,t){var n="_"+t.name;return e[n]=Object(d.a)(Object(d.a)({},t),{},{id:n,score:0}),e}),{})},Ee=function(){var e=Object(ye.a)(Ce.a.mark((function e(t,n,a){var r,i,c,o,l,s,d;return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.state,i=t.dispatch,c=a.split("\n").map((function(e){var t=e.split("    "),n=Object(u.a)(t,2);return{name:n[0],image:n[1]}})).filter((function(e){var t=e.name,n=e.image;return t||n})),o=Re(n),l=100;case 4:if(!r.profiles[o]){e.next=13;break}if(!l--){e.next=9;break}o=Re(n),e.next=11;break;case 9:return console.error("Failed uniqueness 100 times! Play the lottery?"),e.abrupt("break",13);case 11:e.next=4;break;case 13:s=Le(c),d=Se(s),console.log(s,d),i(g(o,n,s,d));case 17:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Te=function(){var e=Object(ye.a)(Ce.a.mark((function e(t,n){var a,r,i,c,o;return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.state,r=t.dispatch,i=R(a),c=n.reduce((function(e,t){var n=Object(d.a)({},i.list[t]);return n.score=0,e[t]=n,e}),{}),o=Ne(c,i.list),console.log(c,o),r(x(c,o));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_e=n(287),Fe=z.a.div(me||(me=Object(q.a)(["\n  margin: auto;\n"]))),Me=Object(z.a)(G.a).attrs({elevation:10})(he||(he=Object(q.a)(["\n  padding: 1rem;\n  border-radius: 1rem;\n"]))),Be=Object(z.a)(_e.a)(Oe||(Oe=Object(q.a)(["\n  &.MuiFormControl-root {\n    width: 95%;\n    margin: 1rem;\n  }\n"]))),Ae=Object(z.a)(_e.a)(fe||(fe=Object(q.a)(["\n  &.MuiFormControl-root {\n    width: 95%;\n    margin: 1rem;\n  }\n"])));var De=function(e){var t=e.history,n=r.a.useContext(T),a=r.a.useState(""),i=Object(u.a)(a,2),c=i[0],o=i[1],l=r.a.useState(""),s=Object(u.a)(l,2),d=s[0],j=s[1],b="List of comparable items",p="List Name";return Object(y.jsxs)(Fe,{children:[Object(y.jsxs)(Me,{children:[Object(y.jsx)(Be,{"aria-label":p,label:p,placeholder:"What's the name of this Profile?",helperText:"",variant:"outlined",onChange:function(e){o(e.target.value)},value:c,InputLabelProps:{shrink:!!c}}),Object(y.jsx)(Ae,{"aria-label":b,label:b,multiline:!0,rows:10,rowsMax:20,variant:"outlined",placeholder:'"Item 1"    [Optional: <4-spaces> Image-URL]\n"Item 2"    [Optional: <4-spaces> Image-URL]\n"Item 3"    [Optional: <4-spaces> Image-URL]\n\n\nRecommended for lists under 500 (124,750 comparisons)\n...',onChange:function(e){j(e.target.value)},value:d,InputLabelProps:{shrink:!!d}}),Object(y.jsx)(xe.a,{title:"Use Sample Content",style:{visibility:d?"hidden":"visible"},children:Object(y.jsxs)(ve.a,{size:"small","aria-label":"Use Sample Content",onClick:function(){o("Apples & Oranges"),j("Honey Crisp    https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/600px-Honeycrisp.jpg\nTangerine     https://upload.wikimedia.org/wikipedia/commons/2/2a/TangerineFruit.jpg\nMandarin Orange    https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mandarin_Oranges_%28Citrus_Reticulata%29.jpg/800px-Mandarin_Oranges_%28Citrus_Reticulata%29.jpg\nBlood Orange     https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/BloodOrange.jpg/800px-BloodOrange.jpg\nAmbrosia     https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ambrosia_apples_2017_A3.jpg/600px-Ambrosia_apples_2017_A3.jpg\nGolden Delicious    https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Golden_delicious_apple.jpg/800px-Golden_delicious_apple.jpg\n\n")},disabled:!!d,children:[Object(y.jsx)(we.a,{}),"Sample"]})})]}),Object(y.jsx)(ne,{onClick:function(){return Xt(t)},children:"Back"}),Object(y.jsx)(ee,{onClick:function(){Ee(n,c,d).then((function(){return t.push(Vt)}))},disabled:!d.trim()||!c.trim(),children:"Save"})]})},He=n(5),Ue=n(292),We=n(92),qe=n(309),ze=Object(He.a)((function(e){return{root:{height:15,borderRadius:10},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:10}}}))(Ue.a),Ge=Object(K.a)({root:{width:"100%"}});var Ke,Ve=function(e){var t=Ge(),n=e.value,a=e.total,r=n/a*100;return Object(y.jsxs)(qe.a,{display:"flex",alignItems:"center",className:t.root,children:[Object(y.jsx)(qe.a,{width:"100%",mr:1,children:Object(y.jsx)(ze,Object(d.a)(Object(d.a)({variant:"determinate"},e),{},{value:r,height:40}))}),Object(y.jsx)(qe.a,{children:Object(y.jsxs)(We.a,{variant:"body2",children:["".concat(n,"/").concat(a),"\xa0","(".concat(Math.round(r),"%)")]})})]})},Je=n(293),Ye=n(294),Ze=n(295),Qe=Object(z.a)(Je.a)(Ke||(Ke=Object(q.a)(["\n  display: flex;\n  min-height: ","px;\n  min-width: ","px;\n  border-radius: .5rem;\n\n  h2 {\n    padding: 0 1rem;\n    overflow: ellipsis;\n  }\n"])),330,330);var Xe,$e,et,tt,nt=function(e){var t=e.img,n=e.title,a=e.onClick;return Object(y.jsx)(Qe,{raised:!0,children:Object(y.jsxs)(Ye.a,{onClick:a,children:[t&&Object(y.jsx)(Ze.a,{component:"img",alt:n,height:250,image:t,title:n}),Object(y.jsx)(We.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n})]})})},at=z.a.div(Xe||(Xe=Object(q.a)(["\n  display: flex;\n  align-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n"]))),rt=z.a.div($e||($e=Object(q.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-top: 2rem;\n\n  > * {\n    max-width: 45%;\n    flex-grow: 1;\n  }\n\n  "," {\n    flex-direction: column;\n    > * {\n      max-width: unset;\n      width: 100%;\n    }\n  }\n"])),X.mediumAndSmaller),it=z.a.div(et||(et=Object(q.a)(["\n  margin: 1rem;\n  flex-grow: unset;\n"]))),ct=z.a.div(tt||(tt=Object(q.a)(["\n  margin-top: 1rem;\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.7);\n"])));var ot=function(e){var t,n=e.history,a=e.pairIndex,i=e.leftBallot,c=e.rightBallot,o=e.skippedCount,l=e.progress,s=e.totalComparisons,d=r.a.useContext(T).dispatch,j=r.a.useState(0),b=Object(u.a)(j,2),p=b[0],m=b[1],f=function(e,t){d(function(e,t){return{type:h,data:{pairIndex:e,winnerListId:t}}}(e,t)),m(0),console.log("Voted for: ".concat(t))};return i&&c?Object(y.jsxs)(at,{children:[Object(y.jsx)(Ve,{value:l,total:s}),Object(y.jsxs)(rt,{children:[Object(y.jsx)(nt,{img:i.image,title:i.name,onClick:function(){return f(a,i.id)}}),Object(y.jsx)(it,{onClick:function(){m(p+1),p&&p%20===0&&alert('You chose "OR", very funny!')},children:"OR"}),Object(y.jsx)(nt,{img:c.image,title:c.name,onClick:function(){return f(a,c.id)}})]}),Object(y.jsxs)(ct,{children:["Skipped: ",(t=o,1===t?"1 time":"".concat(t," times"))]}),Object(y.jsx)(te,{onClick:function(){d(function(e){return{type:O,data:{pairIndex:e}}}(a)),console.log("Skipped: ".concat(c.id," vs. ").concat(i.id))},children:"Skip"}),Object(y.jsx)(ne,{onClick:function(){return Xt(n)},children:"Back"})]}):null};var lt,st,dt,ut=function(e){var t=e.history,n=r.a.useContext(T).state,a=r.a.useState(null),i=Object(u.a)(a,2),c=i[0],o=i[1],l=r.a.useState(null),s=Object(u.a)(l,2),j=s[0],b=s[1],p=Math.floor(2*Math.random())%2===0,m=P(n),h=L(n),O=N(n);return r.a.useEffect((function(){h>=O&&Xt(t)}),[t,h,O]),r.a.useEffect((function(){var e=function(e){var t=Math.floor(Math.random()*e.length);return{nextIndex:t,nextPair:e.length?e[t]:[]}}(m),t=e.nextIndex,n=e.nextPair;o(t),b(n)}),[m]),R(n)?j?Object(y.jsx)(ot,Object(d.a)(Object(d.a)({},e),{},{pairIndex:c,leftBallot:p?j.right:j.left,rightBallot:p?j.left:j.right,skippedCount:j.skipped,progress:h,totalComparisons:O})):null:(console.warn("Whoops! No profile selected!"),t.replace(Gt),null)},jt=z.a.div(lt||(lt=Object(q.a)(["\n  display: flex;\n  align-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n  width: 80%;\n  max-width: 100%;\n\n  "," {\n    width: 100%;\n  }\n"])),X.mediumAndSmaller),bt=z.a.div(st||(st=Object(q.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin: 1rem 0;\n"]))),pt=n(304),mt=n(305),ht=n(306),Ot=n(311),ft=n(296),gt=n(297),xt=n(298),vt=n(310),wt=n(312),kt=function(e){var t=e.headCells,n=e.classes,a=e.onSelectAllClick,r=e.order,i=e.orderBy,c=e.numSelected,o=e.rowCount,l=e.onRequestSort;return Object(y.jsx)(ft.a,{children:Object(y.jsxs)(gt.a,{children:[Object(y.jsx)(xt.a,{padding:"checkbox",children:Object(y.jsx)(vt.a,{indeterminate:c>0&&c<o,checked:o>0&&c===o,onChange:a,inputProps:{"aria-label":"select all items"}})}),t.map((function(e){return Object(y.jsx)(xt.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:i===e.id&&r,children:e.sortable?Object(y.jsxs)(wt.a,{active:i===e.id,direction:i===e.id?r:"asc",onClick:(t=e.id,function(e){l(e,t)}),children:[e.label,i===e.id?Object(y.jsx)("span",{className:n.visuallyHidden,children:"desc"===r?"sorted descending":"sorted ascending"}):null]}):e.label},e.id);var t}))]})})},Ct=n(79),yt=n(4),Rt=n(299),Pt=n(300),St=n(301),It=n(302),Nt=n(303),Lt=n(11),Et=Object(K.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:{borderRadius:"1rem",color:e.palette.secondary.main,backgroundColor:Object(Lt.d)(e.palette.secondary.light,.85),paddingLeft:e.spacing(3),paddingRight:e.spacing(1)},title:{flex:"1 1 100%",flexDirection:"column"},input:{margin:"0 1rem"}}})),Tt=function(e){var t=Et(),n=e.title,a=e.numSelected,i=e.rankRange,c=e.onRankRangeChange,o=e.onExportRows,l=e.onClearRows,s="Edit Ranges",d="Done",j=a>0,b=r.a.useState(!1),p=Object(u.a)(b,2),m=p[0],h=p[1],O=function(e){var t=e.start,n=e.end;return function(e){var a=e.target.value;isNaN(a)||""===a||c({start:Number(!0===t?a:i.start),end:Number(!0===n?a:i.end)})}};return Object(y.jsx)(Rt.a,{className:Object(yt.a)(t.root,Object(Ct.a)({},t.highlight,j)),children:j?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(We.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div",children:[a," selected"]}),Object(y.jsx)(xe.a,{title:"Export rows",children:Object(y.jsx)(ve.a,{"aria-label":"Export rows",onClick:o,children:Object(y.jsx)(Pt.a,{})})}),Object(y.jsx)(xe.a,{title:"Clear rows",children:Object(y.jsx)(ve.a,{"aria-label":"Clear rows",onClick:l,children:Object(y.jsx)(St.a,{})})})]}):m?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:t.title,children:[Object(y.jsx)(_e.a,{id:"start-range",className:t.input,label:"Rank Start",type:"number",defaultValue:i.start,InputLabelProps:{shrink:!0},onChange:O({start:!0})}),Object(y.jsx)(_e.a,{id:"end-range",className:t.input,label:"Rank End",type:"number",defaultValue:i.end,InputLabelProps:{shrink:!0},onChange:O({end:!0})})]}),Object(y.jsx)(xe.a,{title:d,children:Object(y.jsx)(ve.a,{"aria-label":d,onClick:function(){return h(!1)},children:Object(y.jsx)(It.a,{})})})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(We.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:n}),Object(y.jsx)(xe.a,{title:s,children:Object(y.jsx)(ve.a,{"aria-label":s,onClick:function(){return h(!0)},children:Object(y.jsx)(Nt.a,{})})})]})})},_t=Object(K.a)((function(e){return{root:{width:"100%"},container:{minHeight:200,maxHeight:440},paper:{width:"100%",marginBottom:e.spacing(2),borderRadius:"1rem"},table:{minWidth:200},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}})),Ft=z.a.img(dt||(dt=Object(q.a)(["\n  width: 100%;\n"]))),Mt=function(e){var t=e.headCell,n=e.row,a=e.labelId,r=e.rank,i=Object(d.a)(Object(d.a)({},n),{},{rank:r}),c=t.id,o=t.numeric,l="name"===c,s="image"===c,u=l?null:s?100:30;return Object(y.jsx)(xt.a,{align:o?"right":"left",id:l?a:null,component:l?"th":null,scope:l?"row":null,width:u,children:s?i.image&&Object(y.jsx)(Ft,{src:i.image,alt:i.name}):i[c]})},Bt=function(e){var t=e.headCells,n=e.row,a=e.labelId,r=e.isItemSelected,i=e.handleClick,c=e.rank;return Object(y.jsxs)(gt.a,{hover:!0,onClick:function(e){return i(e,n.id)},role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,children:[Object(y.jsx)(xt.a,{padding:"checkbox",children:Object(y.jsx)(vt.a,{checked:r,inputProps:{"aria-labelledby":a}})}),t.map((function(e){return Object(y.jsx)(Mt,{headCell:e,row:n,labelId:a,rank:c},"".concat(e.id,"-").concat(n.id))}))]},n.id)};function At(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function Dt(e,t){return"desc"===e?function(e,n){return At(e,n,t)}:function(e,n){return-At(e,n,t)}}function Ht(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var Ut=[{id:"score",numeric:!0,disablePadding:!0,label:"Score",sortable:!0},{id:"image",numeric:!1,disablePadding:!1,label:"Image",sortable:!1},{id:"name",numeric:!1,disablePadding:!0,label:"Name",sortable:!0},{id:"rank",numeric:!0,disablePadding:!1,label:"Rank",sortable:!1}],Wt=[10,25,100,1e3],qt=function(e){var t=e.title,n=e.rows,a=e.defaultOrderBy,i=e.defaultOrder,c=e.defaultRowCount,o=e.maxScore,l=e.onClearRows,s=_t(),d=r.a.useState(i),j=Object(u.a)(d,2),b=j[0],p=j[1],m=r.a.useState(a),h=Object(u.a)(m,2),O=h[0],f=h[1],g=r.a.useState([]),x=Object(u.a)(g,2),v=x[0],w=x[1],k=r.a.useState(0),C=Object(u.a)(k,2),R=C[0],P=C[1],S=r.a.useState(c),I=Object(u.a)(S,2),N=I[0],L=I[1],E=r.a.useState(1),T=Object(u.a)(E,2),_=T[0],F=T[1],M=r.a.useState(10),B=Object(u.a)(M,2),A=B[0],D=B[1],H=function(e,t){var n=v.indexOf(t),a=[];-1===n?a=a.concat(v,t):0===n?a=a.concat(v.slice(1)):n===v.length-1?a=a.concat(v.slice(0,-1)):n>0&&(a=a.concat(v.slice(0,n),v.slice(n+1))),w(a)},U=function(e){return-1!==v.indexOf(e)},W=function(e){var t=(A-_)*(e/o||0)+_;return(Math.round(100*(t+Number.EPSILON))/100).toFixed(2)};return Object(y.jsx)("div",{className:s.root,children:Object(y.jsxs)(G.a,{className:s.paper,children:[Object(y.jsx)(Tt,{title:t,numSelected:v.length,rankRange:{start:_,end:A},onRankRangeChange:function(e){var t=e.start,n=e.end;F(t),D(n)},onExportRows:function(){!function(e,t,n){var a=0,r="data:text/csv;charset=utf-8,"+e.map((function(e,n){if(a||(a=e.length),a!==e.length)throw new Error("Mismatched length; expected ".concat(a," received ").concat(e.length," ")+"at row ".concat(n));return e.join(t)})).join("\r\n"),i=document.createElement("a");i.href=encodeURI(r),i.target="_blank",i.download="".concat(n,".csv"),i.click()}(function(){var e=Ut.map((function(e){return e.label})),t=Ht(n,Dt(b,O)).filter((function(e){return U(e.id)})).map((function(e){return Ut.map((function(t){return"rank"===t.id?W(e.score):e[t.id]}))}));return t.unshift(e),t}(),"\t",t)},onClearRows:function(){l(v)}}),Object(y.jsx)(pt.a,{className:s.container,children:Object(y.jsxs)(mt.a,{stickyHeader:!0,className:s.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table",children:[Object(y.jsx)(kt,{classes:s,numSelected:v.length,order:b,orderBy:O,onSelectAllClick:function(e){if(e.target.checked){var t=n.map((function(e){return e.id}));w(t)}else w([])},onRequestSort:function(e,t){p(O===t&&"asc"===b?"desc":"asc"),f(t)},rowCount:n.length,headCells:Ut}),Object(y.jsx)(ht.a,{children:Ht(n,Dt(b,O)).slice(R*N,R*N+N).map((function(e,t){var n=U(e.id),a="enhanced-table-checkbox-".concat(t);return Object(y.jsx)(Bt,{headCells:Ut,row:e,labelId:a,isItemSelected:n,handleClick:H,rank:W(e.score)},a)}))})]})}),Object(y.jsx)(Ot.a,{rowsPerPageOptions:Wt,component:"div",count:n.length,rowsPerPage:N,page:R,onChangePage:function(e,t){P(t)},onChangeRowsPerPage:function(e){L(parseInt(e.target.value,10)),P(0)}})]})})};var zt=function(e){var t=e.history,n=r.a.useContext(T),a=n.state,i=n.dispatch,c=R(a);if(console.log(a),!c)return console.warn("Whoops! No profile selected!"),t.replace(Gt),null;var o=L(a),l=N(a),s=I(a),d=S(a),u=o?o>=l?"(Results)":"(Partial)":": Ready to start!",j="".concat(c.name," ").concat(u);return Object(y.jsxs)(jt,{children:[Object(y.jsxs)(bt,{children:[Object(y.jsx)(Ve,{value:o,total:l}),o<l&&Object(y.jsx)(ee,{onClick:function(){return t.push(Jt)},children:o?"Continue":"Start"})]}),Object(y.jsx)(qt,{rows:d,maxScore:s,defaultOrderBy:"score",defaultOrder:"desc",defaultRowCount:25,title:j,onClearRows:function(e){return Te({state:a,dispatch:i},e)}}),Object(y.jsx)(ne,{onClick:function(){return t.replace(Gt)},children:"Switch Profiles"})]})},Gt="/",Kt="/edit-profile",Vt="/list",Jt="/vote-pair",Yt=Gt,Zt=function(e,t){return{path:e,component:t}},Qt=[Zt(Jt,ut),Zt(Vt,zt),Zt(Kt,De),Zt(Gt,ge)],Xt=function(e){e.length>1?e.goBack():e.replace(Yt)};var $t=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"app",children:Object(y.jsx)("div",{className:"app-body",children:Object(y.jsx)(s.a,{theme:Q,children:Object(y.jsx)(o.a,{basename:"/pairwise-ranking-app",children:Object(y.jsx)(l.c,{children:Qt.map((function(e){var t=e.path,n=e.component;return Object(y.jsx)(l.a,{path:t,component:n},t)}))})})})})}),Object(y.jsxs)("div",{className:"build-info",children:["Release: ","44140c3-2021-07-11T04:14:59.839Z"]})]})},en=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,314)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},tn=r.a.createContext(),nn="PROFILE/ADD",an={currentProfileKey:null,profiles:[]};function rn(e,t){switch(t.type){case nn:return Object(d.a)(Object(d.a)({},e),{},{profiles:[].concat(Object(b.a)(e.profiles),[t.data])});case"PROFILE/SET_CURRENT":return Object(d.a)(Object(d.a)({},e),{},{currentProfileKey:t.data});default:return e}}function cn(e){var t=r.a.useReducer(rn,an),n=Object(u.a)(t,2),a={state:n[0],dispatch:n[1]};return Object(y.jsx)(tn.Provider,{value:a,children:e.children})}c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(cn,{children:Object(y.jsx)(_,{children:Object(y.jsx)($t,{})})})}),document.getElementById("root")),en()}},[[257,1,2]]]);
//# sourceMappingURL=main.09eddfce.chunk.js.map