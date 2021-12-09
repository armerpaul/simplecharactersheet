(this.webpackJsonpsimplecharactersheet=this.webpackJsonpsimplecharactersheet||[]).push([[0],{120:function(t,n,e){},256:function(t,n,e){"use strict";e.r(n);var a,r,o,c,i,l,s,d,b,u,m,j,h,f,p,g,O,x,v,k,w,C,y,I,S,E,B,z,N,A,T,V,G,D,M,J,L,P,F,R,U,_,K,W,Z=e(1),q=e.n(Z),H=e(112),Q=e.n(H),X=(e(120),function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,264)).then((function(n){var e=n.getCLS,a=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;e(t),a(t),r(t),o(t),c(t)}))}),Y=e(22),$=e(4),tt=e(24),nt=e(2),et=e(3),at=e(10),rt=e(23),ot=e(26),ct=e.n(ot),it=e(0),lt="Morning Sun",st="Bat Night",dt=(a={},Object(rt.a)(a,lt,{name:lt,backgroundColor:new ct.a("#ede7df"),containerColor:new ct.a("#f6f3ef"),fontColor:new ct.a("#2e1f22"),linkColor:new ct.a("#ef3e27")}),Object(rt.a)(a,st,{name:st,backgroundColor:new ct.a("#25191b"),containerColor:new ct.a("#332225"),fontColor:new ct.a("#f6f3ef"),linkColor:new ct.a("#ef3e27")}),a),bt="scs-theme",ut=function(t){t&&t!==o&&(localStorage.setItem(bt,t),window.location.reload())},mt=function(){if(!o)try{var t=window.matchMedia("(prefers-color-scheme: dark)").matches?st:lt;o=localStorage.getItem(bt)||t}catch(n){console.error(n)}return dt[o]||dt[lt]},jt=et.a.div(r||(r=Object(nt.a)(["\n  background: ",";\n  color: ",";\n\tmin-height: 100vh;\n\tfont-size: 14px;\n\n\tp {\n\t\tmargin-top: 0;\n\t}\n\n\th1 {\n\t\tmargin-top: 0.5rem;\n\t\tfont-size: 1.5rem;\n\t}\n\n\th2 {\n\t\tfont-size: 1.35rem;\n\t\tmargin-top: 1em;\n\t\tmargin-bottom: 0.25em;\n\t}\n\n\th3 {\n\t\tfont-size: 1.1rem;\n\t\tmargin-top: 0.75em;\n\t\tmargin-bottom: 0.25em;\n\t}\n\n\th4 {\n\t\tfont-size: 1rem;\n\t\tmargin-top: 0.5em;\n\t\tmargin-bottom: 0.25em;\n\t}\n\n\ta {\n\t\tcolor: ",";\n\t\ttransition-property: color;\n\t\ttransition-duration: 0.3s;\n\t\tfont-weight: bold;\n\t\ttext-decoration: none;\n\n\t\t&:hover, &:focus {\n\t\t\tcolor: ",";\n\t\t}\n\n\t\t&:active {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n"])),(function(t){return t.backgroundColor}),(function(t){return t.fontColor}),(function(t){return t.linkColor}),mt().linkColor.mix(mt().fontColor),mt().fontColor),ht=function(t){var n=t.children,e=q.a.useState(lt),a=Object(at.a)(e,2),r=a[0],o=a[1];return q.a.useEffect((function(){o(mt())}),[]),Object(it.jsx)(jt,Object($.a)(Object($.a)({},r),{},{children:n}))},ft=["icon","label"],pt=et.a.button(c||(c=Object(nt.a)(["\n\tbackground: ",";\n\tcolor: ",";\n\twidth: 100%;\n\ttext-align: center;\n\tpadding: 0.5em;\n\tmargin: 0;\n\tfont-size: inherit;\n\tcursor: pointer;\n\toutline: 0 solid;\n\tborder: 0 solid;\n\tborder-radius: 0;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\ttransition-property: background opacity;\n\ttransition-duration: 0.25s;\n\n\t* {\n\t\ttext-decoration: none;\n\t}\n\n\t&:not(:disabled) {\n\t\t&:hover, &:focus {\n\t\t\tbackground: ",";\n\t\t}\n\n\t\t&:active {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n\n\t&:disabled {\n\t\tbackground: ",";\n\t\topacity: 0.6;\n\t\tcursor: not-allowed;\n\t}\n"])),mt().fontColor,mt().containerColor,mt().linkColor,mt().fontColor,mt().fontColor),gt=(et.a.span(i||(i=Object(nt.a)(["\n\tmargin-left: 0.2em;\n\tfont-weight: bold;\n"]))),et.a.span(l||(l=Object(nt.a)(["\n\tdisplay: none;\n"])))),Ot=Object(et.a)(pt)(s||(s=Object(nt.a)(["\n\tfont-size: 1.15em;\n\n\tsvg{\n\t\tfill: ",";\n\t\ttransition-property: fill;\n\t\ttransition-duration: 0.25s;\n\t}\n\n\t&:not(:disabled) {\n\t\t&:focus, &:active {\n\t\t\tsvg {\n\t\t\t\tfill: ",";\n\t\t\t}\n\t\t}\n\t}\n"])),mt().containerColor,mt().fontColor),xt=function(t){var n=t.icon,e=t.label,a=Object(tt.a)(t,ft);return Object(it.jsxs)(Ot,Object($.a)(Object($.a)({title:e},a),{},{children:[Object(it.jsx)(n,{}),Object(it.jsx)(gt,{children:e})]}))},vt=e(13),kt=["onChange","value"],wt="\n\tcolor: ".concat(mt().fontColor,";\n\tborder: 0.15rem solid ").concat(mt().fontColor,";\n\tbackground-color: ").concat(mt().backgroundColor.mix(mt().fontColor,.05),";\n\n\ttransition-property: border-color background-color;\n\ttransition-duration: 0.25s;\n\n\t&:active, &:focus, &:hover {\n\t\tborder-color: ").concat(mt().fontColor,"\n\t}\n\n\t&:hover {\n\t\tbackground-color: ").concat(mt().backgroundColor.mix(mt().fontColor,.1),";\n\t}\n\n\t&:active, &:focus {\n\t\tbackground-color: ").concat(mt().backgroundColor.mix(mt().fontColor,.15),";\n\t}\n"),Ct="\n\tcursor: not-allowed;\n\topacity: 0.5;\n",yt=et.a.input(d||(d=Object(nt.a)(["\n\t","\n\toutline: 0 solid;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\n\t&:disabled {\n\t\t","\n\t}\n"])),wt,Ct),It=(Object(et.a)(yt).attrs({type:"radio"})(b||(b=Object(nt.a)(["\n\tcursor: pointer;\n"]))),Object(et.a)(yt).attrs({type:"text"})(u||(u=Object(nt.a)(["\n\tborder-left: none;\n\tborder-top: none;\n\tborder-right: none;\n\tborder-bottom-color: transparent;\n\tpadding: 0.3em 0.5em 0.2em;\n\n\t&:focus {\n\t\tborder-bottom-color: ",";\n\t}\n"])),mt().linkColor)),St=et.a.div(m||(m=Object(nt.a)(["\n\t","\n\tcursor: pointer;\n\twidth: 1em;\n\theight: 1em;\n\tflex: 0 0 1em;\n\toverflow: visible;\n\tposition: relative;\n\tmargin: 0 0.25em;\n\n\t","\n\n\tsvg {\n\t\topacity: ",";\n\t\tposition: absolute;\n\t\tfont-size: 1.5em;\n\t\ttop: -0.325em;\n\t\tleft: 0;\n\t}\n\n\tinput {\n\t\tappearance: none;\n\t}\n"])),wt,(function(t){return t.disabled?Ct:""}),(function(t){return t.checked?"1":"0"})),Et=function(t){var n=t.onChange,e=t.value,a=Object(tt.a)(t,kt),r=function(){return n(a.checked?null:e)};return Object(it.jsxs)(St,{checked:a.checked,onClick:r,children:[Object(it.jsx)("input",Object($.a)(Object($.a)({type:"checkbox"},a),{},{onChange:r})),Object(it.jsx)(vt.GiCheckMark,{})]})},Bt="900px",zt=et.a.div(j||(j=Object(nt.a)(["\n\tmax-width: 50rem;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tpadding: 0.6rem;\n\tbackground: ",";\n\tborder: 1px solid ",";\n\n\t@media (min-width: ",") {\n\t\tmargin-top: 6vh;\n\t\tpadding: 1rem 1.25rem;\n\t}\n"])),mt().containerColor,mt().backgroundColor.darken(.1),Bt),Nt=et.a.div(h||(h=Object(nt.a)(["\n\twidth: 100%;\n\tbackground: ",";\n\tfont-weight: bold;\n\tpadding-top: 0.3em;\n\tpadding-bottom: 0.3em;\n"])),mt().containerColor),At=et.a.div(f||(f=Object(nt.a)(["\n\tcursor: pointer;\n\tcolor: ",";\n\tbackground: ",";\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\tsvg {\n\t\tfont-size: 3em;\n\t\tmargin: 0.2em;\n\t\tcolor: ",";\n\t}\n\n"])),mt().fontColor,mt().fontColor,mt().containerColor),Tt=Object(et.a)(At)(p||(p=Object(nt.a)(["\n\t&:hover {\n\t\tbackground: ",";\n\t\tcolor: ",";\n\t}\n"])),mt().linkColor,mt().linkColor),Vt=Object(et.a)(At)(g||(g=Object(nt.a)(["\n\tcolor: ",";\n\tbackground: ",";\n\tcursor: default;\n"])),mt().fontColor.mix(mt().backgroundColor),mt().fontColor.mix(mt().backgroundColor)),Gt=function(t){var n=t.onClick,e=t.icon,a=t.label;return t.isDisabled?Object(it.jsxs)(Vt,{children:[Object(it.jsx)(e,{}),Object(it.jsx)(Nt,{children:a})]}):Object(it.jsxs)(Tt,{onClick:n,children:[Object(it.jsx)(e,{}),Object(it.jsx)(Nt,{children:a})]})},Dt=e(8),Mt=et.a.div(O||(O=Object(nt.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),Jt=et.a.div(x||(x=Object(nt.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\tjustify-content: stretch;\n\tgap: 1em;\n\tmargin-bottom: 2em;\n\n\t> * {\n\t\tflex-basis: calc(50% - 1em);\n\n\t\t@media (min-width: ",") {\n\t\t\tflex-basis: calc(33% - 1em);\n\t\t}\n\t}\n"])),Bt),Lt=function(t){var n=t.gameId,e=t.gameName,a=t.icon,r=t.inProgress;return Object(it.jsx)(Y.b,{to:"/".concat(n,"/new"),children:Object(it.jsx)(Gt,{label:e,icon:r?vt.GiAnvilImpact:a},n)})},Pt=function(){return Object(it.jsxs)(Mt,{children:[Object(it.jsx)("p",{children:"Simple Character Sheets is an app for creating character sheets for indie games. Select a game below to get started:"}),Object(it.jsxs)(Jt,{children:[Object(it.jsx)(Lt,{gameId:"motw",gameName:"Monster of the Week",icon:vt.GiRaiseZombie}),Object(it.jsx)(Lt,{gameId:"tsl",gameName:"Thirsty Sword Lesbians",icon:vt.GiDaggerRose}),Object(it.jsx)(Gt,{isDisabled:!0,label:"More coming soon",icon:vt.GiAnvilImpact},"UnderConstruction")]}),Object(it.jsx)("p",{children:"Don't have a printer around? Everyone only has their phones? Need to add custom moves or add notes? Use Simple Character Sheet to streamline and simplify your table-top gaming."})]})},Ft=e(30),Rt=e(45),Ut=e.n(Rt),_t=e(68),Kt=e(56),Wt=e.n(Kt),Zt=e(263),qt=e(257),Ht=e(258),Qt=e(38),Xt=e(259),Yt=e(261),$t=function(t){return"scs-".concat(t)},tn=function(t){var n=t.gameId,e=t.sheetId,a=(t.name,"".concat((new Date).getTime())),r={id:a,gameId:n,sheetId:e};return localStorage.setItem($t(a),JSON.stringify(r)),r},nn=function(){var t=Object(_t.a)(Ut.a.mark((function t(n){var e,a,r;return Ut.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.gameId,t.prev=1,t.next=4,Wt.a.get("/game-data/".concat(e,"/index.json")).then((function(t){return t.data}));case 4:return a=t.sent,t.next=7,Wt.a.get("/game-data/".concat(e,"/theme.json")).then((function(t){return t.data})).catch((function(){return console.log("No theme set for ".concat(e)),{}}));case 7:return r=t.sent,t.abrupt("return",Object($.a)(Object($.a)({},r),a));case 11:throw t.prev=11,t.t0=t.catch(1),console.error(t.t0),new Error("Error loading game data for: ".concat(e));case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(n){return t.apply(this,arguments)}}(),en=function(t){var n=t.gameId,e=t.sheetId;return Wt.a.get("/game-data/".concat(n,"/").concat(e,".json")).then((function(t){return t.data})).catch((function(){throw new Error("Error loading sheet data for: ".concat(n,"/").concat(e))}))},an=function(t){var n=t.characterId,e=localStorage.getItem($t(n));if(!e)throw new Error("No saved character for id: ".concat(n));return JSON.parse(e)},rn=function t(n){var e=n.templateBlock,a=n.sheetTemplateBlocks;if(Array.isArray(e))return e.map((function(n){return t({templateBlock:n,sheetTemplateBlocks:a})})).filter(Zt.a);switch(qt.a("type",e)){case"parent":var r=t({templateBlock:qt.a("children",e),sheetTemplateBlocks:a});return Object($.a)(Object($.a)({},e),{},{children:r});case"blocks":return e;default:var o=e.name,c=e.optional,i=!0,l=Ht.a((function(t,n){if("*"===t){var e=Qt.a([o,n],a);if(!e){if(!c)throw new Error("No sheet value for template @ ".concat(o,".").concat(n));return void(i=!1)}return e}return"name"===n&&Qt.a([o,n],a)||t}),e);return i?l:void 0}},on=function(t){var n=t.templateBlock,e=t.sheetBlocks,a=t.sheetTemplateBlocks,r=rn({templateBlock:n,sheetTemplateBlocks:a}),o=Xt.a((function(t){return"blocks"===t.type}),r),c=Object(at.a)(o,2),i=c[0],l=c[1];return[].concat(Object(Ft.a)(i),Object(Ft.a)(e),Object(Ft.a)(l))},cn=function(){var t=Object(_t.a)(Ut.a.mark((function t(n){var e,a,r,o,c,i;return Ut.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.gameId,a=n.characterId,t.prev=1,r=an({characterId:a}),t.next=5,nn({gameId:e});case 5:return o=t.sent,t.next=8,en({gameId:e,sheetId:r.sheetId});case 8:return c=t.sent,i=on({templateBlock:qt.a("sheetTemplate",o),sheetBlocks:qt.a("blocks",c),sheetTemplateBlocks:Yt.a({},"templateBlocks",c)}),t.abrupt("return",{character:r,game:o,sheet:Object($.a)(Object($.a)({},c),{},{blocks:i})});case 13:return t.prev=13,t.t0=t.catch(1),console.error(t.t0),t.abrupt("return",{error:t.t0.message});case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(n){return t.apply(this,arguments)}}(),ln=function(t){try{var n=JSON.stringify(t);localStorage.setItem($t(t.id),n)}catch(e){throw console.error(e),new Error("Error saving character")}},sn=et.a.div(v||(v=Object(nt.a)(["\n\t@keyframes pulse {\n\t\tfrom { opacity: 0.5 }\n\t\tto { opacity: 1 }\n\t}\n\n  animation-duration: 0.5s;\n  animation-name: pulse;\n\tanimation-iteration-count: infinite;\n\tanimation-direction: alternate;\n\n\ttext-align: center;\n\tpadding: 20vh 0;\n\tfont-size: 2rem;\n\twidth: 100%;\n"]))),dn=et.a.div(k||(k=Object(nt.a)(["\n\n"]))),bn=et.a.div(w||(w=Object(nt.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tmargin-top: 2em;\n\tmargin-bottom: 4em;\n\talign-items: flex-start;\n\tflex-wrap: wrap;\n\tjustify-content: space-between;\n\tgap: 1em .5em;\n\n\t> * {\n\t\tmin-width: 10em;\n\t\tflex-basis: calc(33% - .5em);\n\t}\n\n\t@media (min-width: ",") {\n\t\tgap: 2em 1em;\n\n\t\t> * {\n\t\t\tflex-basis: calc(25% - 1em);\n\t\t}\n\t}\n"])),Bt),un=function(){var t=q.a.useState(),n=Object(at.a)(t,2),e=n[0],a=n[1],r=q.a.useState(),o=Object(at.a)(r,2),c=o[0],i=o[1],l=q.a.useState(),s=Object(at.a)(l,2),d=s[0],b=s[1],u=q.a.useState(),m=Object(at.a)(u,2),j=m[0],h=m[1],f=Object(Dt.f)(),p=Object(Dt.g)().gameId;q.a.useEffect((function(){nn({gameId:p}).then((function(t){a(t.name),i(t.link),b(t.sheets),h(t.sheetIcons)}))}),[p]);return d?Object(it.jsxs)(dn,{children:[Object(it.jsxs)("p",{children:["Select a ",e," playbook:"]}),Object(it.jsx)(bn,{children:Object.keys(d).map((function(t){var n="Gi".concat(j?j[t]:"IdCard"),e=vt[n];return console.log({iconKey:n,SheetIcon:e}),Object(it.jsx)(Gt,{onClick:function(){return function(t){var n=tn({gameId:p,sheetId:t});f.push("/".concat(p,"/").concat(n.id))}(t)},icon:e,label:d[t]},t)}))}),Object(it.jsxs)("p",{children:["Support the game creators: ",Object(it.jsxs)("a",{target:"_blank",rel:"noreferrer",href:c,children:[e," product page"]})]})]}):Object(it.jsx)(sn,{children:"Loading..."})},mn=e(260),jn=e(262),hn=e(25),fn=e.n(hn),pn=et.a.div(C||(C=Object(nt.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tmargin-bottom: 0.75em;\n"]))),gn=function(t){var n=t.name,e=t.count,a=t.labels,r=t.value,o=t.path,c=t.updateCharacter,i=r||0,l=a||[],s=Object(at.a)(l,2),d=s[0],b=s[1],u=Array.from(Array(e),(function(t,n){return n+1}));return Object(it.jsxs)(pn,{children:[Object(it.jsx)("span",{children:d},"".concat(n," left")),u.map((function(t){var e="".concat(n," ").concat(t);return Object(it.jsx)(Et,{id:e,name:n,checked:t<=i,onChange:function(){return function(t){c({path:o,value:i===t?0:t})}(t)}},e)})),Object(it.jsx)("span",{children:b},"".concat(n," right"))]})},On=et.a.div(y||(y=Object(nt.a)(["\n\tdisplay: flex;\n\talign-items: flex-start;\n\tmargin-top: 0.25em;\n\tmargin-bottom: 0.25em;\n"]))),xn=et.a.div(I||(I=Object(nt.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1 1 100%;\n\tcursor: pointer;\n"]))),vn=et.a.div(S||(S=Object(nt.a)(["\n\tp {\n\t\tmargin-block-start: 0;\n    margin-block-end: 0;\n\t}\n"]))),kn=et.a.div(E||(E=Object(nt.a)(["\n\tmargin-bottom: 0.5em;\n"]))),wn=function(t){var n=t.name,e=t.index,a=t.isChecked,r=t.isEditing,o=t.setItemValue,c=(t.showTextInput,t.value),i=t.showAdditionalInfo,l=t.additionalInfoValue,s="".concat(n," ").concat(e);return r||a?Object(it.jsxs)(On,{children:[r&&Object(it.jsx)(Et,{id:s,name:s,checked:a,onChange:function(){return o({index:e,newValue:!a})}}),Object(it.jsxs)(xn,{children:[Object(it.jsxs)(vn,{onClick:function(){return o({index:e,newValue:!a})},children:[c&&Object(it.jsx)(fn.a,{children:c}),!r&&Object(it.jsx)(fn.a,{children:l})]}),r&&i&&a&&[Object(it.jsx)(It,{value:"string"===typeof l?l:"",onChange:function(t){return o({index:e,newValue:t.target.value})}},"additiona-info"),Object(it.jsx)(kn,{},"spacer")]]})]},s):null},Cn=["hideName","type","description","editDescription","parents"],yn={boxes:gn,list:function(t){var n=t.name,e=t.pick,a=t.items,r=t.other,o=t.path,c=t.value,i=t.showItemAdditionalInfo,l=t.isEditing,s=t.updateCharacter,d=c||{},b=d.other,u=r&&(l||b),m=Object.keys(d).reduce((function(t,n){return t+(d[n]?1:0)}),0);if(!a)throw new Error("items not defined for '".concat(n,"'"));var j=function(t){var n=t.index,e=t.newValue;if(l){var a=Object($.a)(Object($.a)({},d),{},Object(rt.a)({},n,e));s({path:o,value:a})}};return l||0!==m?[l&&"number"===typeof e&&Object(it.jsxs)("span",{children:["Pick ",e," ",m!==e&&"\u26a0\ufe0f"]},"pick")].concat(Object(Ft.a)(a.map((function(t,a){var r=qt.a(a,d),o=void 0===r?"all"===e:!!r;return(l||o)&&Object(it.jsx)(wn,{name:n,index:a,isEditing:l,isChecked:o,setItemValue:j,value:t,showAdditionalInfo:i,additionalInfoValue:r})}))),[u&&Object(it.jsx)(wn,{name:n,index:"other",isEditing:l,isChecked:d.other,setItemValue:j,showTextInput:!0,value:l&&"Other",showAdditionalInfo:!0,additionalInfoValue:d.other})]):null}},In={0:"##",1:"###",2:"###",3:"####"},Sn=function t(n){var e,a=n.hideName,r=n.type,o=n.description,c=n.editDescription,i=n.parents,l=void 0===i?[]:i,s=Object(tt.a)(n,Cn),d=s.name,b=s.displayName,u=s.value,m=s.isEditing,j=s.updateCharacter,h=[].concat(Object(Ft.a)(l),[d]);if("parent"===r){e=s.children.map((function(n){return Object(Z.createElement)(t,Object($.a)(Object($.a)({},n),{},{key:"".concat(d," ").concat(n.name),value:u&&u[n.name],updateCharacter:j,isEditing:m,parents:h}))}))}else{var f=yn[r];e=f&&Object(it.jsx)(f,Object($.a)({path:h},s),d)}var p=b||d;return Object(it.jsxs)("div",{children:[p&&!a&&Object(it.jsx)(fn.a,{children:"".concat(In[l.length]," ").concat(p)},"header"),o&&Object(it.jsx)(fn.a,{children:o},"description"),c&&m&&Object(it.jsx)(fn.a,{children:c},"editDescription"),e]},d)},En=et.a.div(B||(B=Object(nt.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n\tmargin: 2rem 0;\n"]))),Bn="4rem",zn=et.a.div(z||(z=Object(nt.a)(["\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-left: 1.5em;\n\tmargin-right: 1.5em;\n\tmargin-bottom: 0.75em;\n"]))),Nn=et.a.div(N||(N=Object(nt.a)(["\n\twidth: ",";\n\theight: ",";\n\tborder-radius: 50%;\n\tborder-width: 0.15em;\n\tborder-style: solid;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: stretch;\n\toverflow: hidden;\n"])),Bn,Bn),An=et.a.div(A||(A=Object(nt.a)(["\n\tfont-weight: bold;\n\tmargin-bottom: 0.25em;\n"]))),Tn=et.a.span(T||(T=Object(nt.a)(["\n\tfont-size: 2rem;\n\tline-height: ",";\n\tflex: 1 1 100%;\n\tfont-weight: bold;\n"])),Bn),Vn=et.a.button(V||(V=Object(nt.a)(["\n\tbackground: transparent;\n\toutline: none;\n\tborder: none;\n\topacity: 0.5;\n\tflex: 0 1 50%;\n\tcolor: ",";\n\n\t&:disabled {\n\t\topacity: 0;\n\t}\n\n\t&:not(:disabled) {\n\t\tcursor: pointer;\n\n\t\t&:hover {\n\t\t\tbackground-color: ",";\n\t\t\tcolor: ",";\n\t\t}\n\t}\n"])),mt().fontColor,mt().fontColor,mt().backgroundColor),Gn=function(t){var n=t.names,e=t.range,a=t.defaultValue,r=t.isEditing,o=q.a.useState({}),c=Object(at.a)(o,2),i=c[0],l=c[1],s=e||{min:-1/0,max:1/0},d=s.min,b=s.max,u=function(t,n){l(Object($.a)(Object($.a)({},i),{},Object(rt.a)({},t,(i[t]||a)+n)))};return Object(it.jsx)(En,{children:n.map((function(t){return Object(it.jsxs)(zn,{children:[Object(it.jsx)(An,{children:t}),Object(it.jsxs)(Nn,{children:[r&&Object(it.jsx)(Vn,{disabled:i[t]<=d,onClick:function(){return u(t,-1)},children:"-"}),Object(it.jsx)(Tn,{children:i[t]||a}),r&&Object(it.jsx)(Vn,{disabled:i[t]>=b,onClick:function(){return u(t,1)},children:"+"})]})]},t)}))})},Dn=["error"],Mn=Object(et.a)(dn)(G||(G=Object(nt.a)(["\n\tcolor: red;\n"]))),Jn=et.a.div(D||(D=Object(nt.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: stretch;\n\tjustify-content: space-between;\n\tposition: sticky;\n\tpadding-bottom: 0.75em;\n\tborder-bottom: 0.15rem solid;\n\tbackground: ",";\n\ttop: 0;\n\tz-index: 1;\n\talign-items: end;\n\tfont-size: 0.75rem;\n\n\t@media (min-width: ",") {\n\t\tfont-size: 1rem;\n\t\theight: 3rem;\n\t}\n"])),mt().containerColor,Bt),Ln=et.a.h1(M||(M=Object(nt.a)(["\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-basis: 100%;\n"]))),Pn=et.a.div(J||(J=Object(nt.a)(["\n"]))),Fn=et.a.div(L||(L=Object(nt.a)(["\n\tmargin-top: 0.5em;\n"]))),Rn=et.a.div(P||(P=Object(nt.a)(["\n\tmargin-bottom: 1em;\n\tfont-style: italic;\n"]))),Un=function(){var t=Object(Dt.g)(),n=t.gameId,e=t.characterId,a=q.a.useState(!1),r=Object(at.a)(a,2),o=r[0],c=r[1],i=q.a.useState(),l=Object(at.a)(i,2),s=l[0],d=l[1],b=q.a.useState(),u=Object(at.a)(b,2),m=u[0],j=u[1],h=q.a.useState(),f=Object(at.a)(h,2),p=f[0],g=f[1],O=q.a.useState(),x=Object(at.a)(O,2),v=x[0],k=x[1];q.a.useEffect((function(){cn({characterId:e,gameId:n}).then((function(t){var n=t.error,e=Object(tt.a)(t,Dn);n?d(n):(c(!e.character.name),j(Object($.a)({name:"Name your ".concat(e.sheet.name)},e.character)),g(e.game),k(e.sheet),d(void 0))}))}),[e,n]),q.a.useEffect((function(){m&&!o&&ln(m)}),[m,o]);var w=function(t){var n=t.path,e=t.value,a=mn.a(n),r=jn.a(a,e,m);j(r)};return s?Object(it.jsx)(Mn,{children:s}):p&&v?m?Object(it.jsxs)(dn,{children:[Object(it.jsxs)(Jn,{children:[Object(it.jsx)(Ln,{children:o?Object(it.jsx)(It,{value:m.name,onChange:function(t){return w({path:["name"],value:t.target.value})}}):m.name}),Object(it.jsx)(Pn,{children:o?Object(it.jsx)(xt,{icon:vt.GiCheckMark,label:"Save",onClick:function(){ln(m),c(!1)}}):Object(it.jsx)(xt,{icon:vt.GiTinker,label:"Edit Character",onClick:function(){return c(!0)}})})]}),Object(it.jsx)(Fn,{children:Object(it.jsx)("h4",{children:v.name})}),Object(it.jsx)(Rn,{children:Object(it.jsx)(fn.a,{children:v.description})}),Object(it.jsx)(Gn,Object($.a)(Object($.a)({},p.stats),{},{isEditing:o})),v.blocks.map((function(t,n){return Object(Z.createElement)(Sn,Object($.a)(Object($.a)({},t),{},{key:"block-".concat(n),value:m[t.name],isEditing:o,updateCharacter:w}))}))]}):Object(it.jsx)(Mn,{children:"Error loading character"}):Object(it.jsx)(sn,{children:"Loading..."})},_n=function(){return Object(it.jsxs)(Dt.c,{children:[Object(it.jsx)(Dt.a,{path:"/",exact:!0,component:Pt}),Object(it.jsx)(Dt.a,{path:"/:gameId/new",exact:!0,component:un}),Object(it.jsx)(Dt.a,{path:"/:gameId/:characterId",component:Un})]})},Kn=et.a.header(F||(F=Object(nt.a)(["\n\tpadding: 0.5em 0.75rem;\n\tfont-size: 1.25rem;\n\topacity: 0.7;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\ttransition-property: opacity;\n\ttransition-duration: 0.25s;\n\n\t&:hover {\n\t\topacity: 1;\n\t}\n\n\t@media (min-width: ",") {\n\t\tpadding: 0.75em 1.5em;\n\t}\n"])),Bt),Wn=Object(et.a)(Y.b)(R||(R=Object(nt.a)(["\n\ttext-decoration: none;\n"]))),Zn=function(){return Object(it.jsx)(Kn,{children:Object(it.jsx)(Wn,{to:"/",children:"Simple Character Sheet"})})},qn=et.a.div(U||(U=Object(nt.a)(["\n\ttext-align: center;\n\tpadding: 10vh 1em 5vh;\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),Hn=et.a.div(_||(_=Object(nt.a)(["\n\tmargin-bottom: 1em;\n"]))),Qn=function(){return Object(it.jsx)(qn,{children:Object(it.jsxs)(Hn,{children:["Created\xa0by\xa0",Object(it.jsx)("a",{href:"https://paularmer.website",target:"_blank",rel:"noreferrer",children:"Paul Armer"})]})})},Xn=et.a.div(K||(K=Object(nt.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\tmargin-top: 3rem;\n\n\t@media (min-width: ",") {\n\t\tfont-size: 1.15rem;\n\t\tflex-direction: column;\n\t\tposition: fixed;\n\t\tright: 0;\n\t\tbottom: 10vh;\n\t}\n"])),Bt),Yn=Object(et.a)(xt)(W||(W=Object(nt.a)(["\n\tpadding: 0.2em;\n\twidth: 1.75rem;\n\theight: 1.75rem;\n\tmargin: 0 0.5rem;\n\n\t@media (min-width: ",") {\n\t\tpadding: 0.3em;\n\t\twidth: 2rem;\n\t\theight: 2rem;\n\t\tmargin: 0;\n\t}\n\n\t","\n"])),Bt,(function(t){return t.isActive&&"\n\t\tbackground: ".concat(mt().linkColor,";\n\n\t\tsvg {\n\t\t\tfill: ").concat(mt().fontColor,";\n\t\t}\n\t")})),$n=function(){var t=mt().name;return Object(it.jsxs)(Xn,{children:[Object(it.jsx)(Yn,{icon:vt.GiSun,isActive:t===lt,onClick:function(){return ut(lt)}}),Object(it.jsx)(Yn,{icon:vt.GiMoonBats,isActive:t===st,onClick:function(){return ut(st)}})]})};Q.a.render(Object(it.jsx)(q.a.StrictMode,{children:Object(it.jsx)(ht,{children:Object(it.jsxs)(Y.a,{children:[Object(it.jsx)(Zn,{}),Object(it.jsx)(zt,{children:Object(it.jsx)(_n,{})}),Object(it.jsx)($n,{}),Object(it.jsx)(Qn,{})]})})}),document.getElementById("root")),X()}},[[256,1,2]]]);
//# sourceMappingURL=main.a09d4b20.chunk.js.map