(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{34:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(20),a=c.n(s),i=c(4),d=c(0);var b=function(){return Object(d.jsx)("header",{className:"jumbotron bg-dark",children:Object(d.jsxs)("div",{className:"container text-white",children:[Object(d.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(d.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})};var j=function(){return Object(d.jsx)("div",{className:"NotFound",children:Object(d.jsx)("h1",{children:"Not Found"})})},l=c(2),o=c.n(l),u=c(7),h=c(5),O=c(22),x=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"http://localhost:5000",p=new Headers;function f(e){e.cards;return Object(O.a)(e,["cards"])}function m(e,t,c){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(o.a.mark((function e(t,c,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((r=e.sent).status<200||r.status>399)){e.next=6;break}throw new Error("".concat(r.status," - ").concat(r.statusText));case 6:if(204!==r.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,r.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(n));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function y(){return(y=Object(u.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(x,"/decks?_embed=cards"),e.next=3,m(c,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(u.a)(o.a.mark((function e(t,c){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/decks"),r={method:"POST",headers:p,body:JSON.stringify(f(t)),signal:c},e.next=4,m(n,r,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(o.a.mark((function e(t,c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/decks/").concat(t,"?_embed=cards"),e.next=3,m(n,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(u.a)(o.a.mark((function e(t,c){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/decks/").concat(t.id,"?_embed=cards"),r={method:"PUT",headers:p,body:JSON.stringify(f(t)),signal:c},e.next=4,m(n,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(o.a.mark((function e(t,c){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/decks/").concat(t),r={method:"DELETE",signal:c},e.next=4,m(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(u.a)(o.a.mark((function e(t,c,n){var r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(x,"/cards"),c.deckId=Number(t),s={method:"POST",headers:p,body:JSON.stringify(c),signal:n},e.next=5,m(r,s,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(u.a)(o.a.mark((function e(t,c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/cards/").concat(t),e.next=3,m(n,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(u.a)(o.a.mark((function e(t,c){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/cards/").concat(t.id),r={method:"PUT",headers:p,body:JSON.stringify(t)},e.next=4,m(n,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(u.a)(o.a.mark((function e(t,c){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/cards/").concat(t),r={method:"DELETE",signal:c},e.next=4,m(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}p.append("Content-Type","application/json");var T=function(){var e=Object(i.f)(),t=Object(n.useState)([]),c=Object(h.a)(t,2),r=c[0],s=c[1],a=Object(n.useState)(0),b=Object(h.a)(a,2),j=b[0],l=b[1];Object(n.useEffect)((function(){(function(e){return y.apply(this,arguments)})().then(s)}),[j]);var O=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this deck? You will not be able to recover it.")){e.next=5;break}return e.next=4,S(t);case 4:l(r.length);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=r.map((function(t){return Object(d.jsx)("div",{class:"card border border-secondary",width:"18 rem",style:{marginTop:"20px"},children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h2",{class:"card-title",children:t.name}),Object(d.jsx)("p",{class:"card-text",children:t.description}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(d.jsxs)("h4",{class:"card-text",children:[t.cards.length," cards"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"delete",style:{marginRight:"10px"},class:"btn btn-danger",onClick:function(){return O(t.id)},children:"Delete"}),Object(d.jsx)("button",{type:"button",class:"btn btn-info",onClick:function(){return e.push("/decks/".concat(t.id))},children:"View"})]})]})]})},t.id)}));return r?Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"button",class:"btn btn-primary",onClick:function(){return e.push("/decks/new")},children:"Create Deck"}),x]}):Object(d.jsx)("p",{children:"Loading..."})},R=c(3);var _=function(e){var t=e.cards,c=e.setNewCards,n=Object(i.h)().url,r=Object(i.f)();function s(e){window.confirm("Delete this card? You will not be able to recover it")&&function(e,t){return F.apply(this,arguments)}(e).then((function(){return c(t.map((function(t){return t.id===e?null:t})))}))}return t?t.map((function(e,t){return Object(d.jsx)("div",{class:"card border border-secondary",style:{marginBottom:"15px"},children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("p",{class:"card-text",style:{fontWeight:"bold",marginRight:"10px"},children:"Front:"}),Object(d.jsx)("p",{class:"card-text",children:e.front})]}),Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("p",{class:"card-text",style:{fontWeight:"bold",marginRight:"10px"},children:"Back:"}),Object(d.jsx)("p",{class:"card-text",children:e.back})]}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(d.jsx)("button",{type:"button",class:"btn btn-secondary",style:{marginRight:"10px"},onClick:function(){return r.push("".concat(n,"/cards/").concat(e.id,"/edit"))},children:"Edit"}),Object(d.jsx)("button",{type:"delete",class:"btn btn-danger",onClick:function(){return s(e.id)},children:"Delete"})]})]})},t)})):Object(d.jsx)("p",{children:"Loading..."})},L=c(12),H=c(10);var A=function(e){var t=e.deck,c=e.setNewDeck,r=Object(i.g)().deckId,s={name:t.name,description:t.description},a=Object(n.useState)(s),b=Object(h.a)(a,2),j=b[0],l=b[1],o=function(e){l(Object(H.a)(Object(H.a)({},j),{},Object(L.a)({},e.target.name,e.target.value)))},u=Object(i.f)();return j?Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{class:"breadcrumb",children:[Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(R.b,{exact:!0,to:"/",children:"Home"})}),Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(R.b,{exact:!0,to:"/decks/".concat(r),children:j.name})}),Object(d.jsx)("li",{class:"breadcrumb-item active","aria-current":"page",children:"Edit Deck"})]})}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t){return C.apply(this,arguments)}({id:r,name:j.name,description:j.description}).then((function(e){return c(e)})).then((function(){return u.push("/decks/".concat(r))}))},children:[Object(d.jsxs)("label",{htmlFor:"name",style:{marginBottom:"15px"},children:["Deck Name:",Object(d.jsx)("input",{type:"text",name:"name",id:"name",size:"37",onChange:o,value:j.name})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{htmlFor:"description",children:["Description:",Object(d.jsx)("textarea",{name:"description",id:"description",cols:"40",rows:"3",onChange:o,value:j.description})]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"button",class:"btn btn-secondary",style:{marginRight:"10px"},onClick:function(){return u.push("/decks/".concat(r))},children:"Cancel"}),Object(d.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})]}):Object(d.jsx)("p",{children:"Loading..."})};var P=function(e){var t=e.formData,c=e.handleChange,n=e.handleSubmit,r=e.deckId,s=e.history;return Object(d.jsxs)("form",{onSubmit:n,children:[Object(d.jsxs)("label",{htmlFor:"front",style:{fontWeight:"bold"},children:["Front",Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{name:"front",id:"front",rows:"4",cols:"50",onChange:c,value:t.front})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{htmlFor:"back",style:{fontWeight:"bold"},children:["Back",Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{name:"back",id:"back",rows:"4",cols:"50",onChange:c,value:t.back})]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"button",class:"btn btn-secondary",style:{marginRight:"10px"},onClick:function(){return s.push("/decks/".concat(r))},children:"Done"}),Object(d.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Save"})]})};var B=function(e){e.deck;var t=e.newCards,c=e.setNewCards,r=Object(i.g)().deckId,s=Object(i.f)(),a=Object(n.useState)(void 0),b=Object(h.a)(a,2),j=b[0],l=b[1];c(0);var o={front:"",back:""},u=Object(n.useState)(o),O=Object(h.a)(u,2),x=O[0],p=O[1];return Object(n.useEffect)((function(){g(r).then((function(e){return l(e)}))}),[r]),j?Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{class:"breadcrumb",children:[Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(R.b,{exact:!0,to:"/",children:"Home"})}),Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(R.b,{exact:!0,to:"/decks/".concat(r),children:j.name})}),Object(d.jsx)("li",{class:"breadcrumb-item active","aria-current":"page",children:"Add Card"})]})}),Object(d.jsxs)("h2",{children:[j.name,": Add Card"]}),Object(d.jsx)(P,{formData:x,handleChange:function(e){p(Object(H.a)(Object(H.a)({},x),{},Object(L.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault(),function(e,t,c){return N.apply(this,arguments)}(r,x).then((function(){return c(t+1)})).then((function(){return p(o)}))},deckId:r,history:s})]}):Object(d.jsx)("p",{children:"Loading..."})};var W=function(e){var t=e.deck,c=e.cards,r=Object(n.useState)(!0),s=Object(h.a)(r,2),a=s[0],b=s[1],j=Object(n.useState)(0),l=Object(h.a)(j,2),o=l[0],u=l[1],O=Object(i.f)(),x=function(){b(!a)};return c&&t?Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{class:"breadcrumb",children:[Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(R.b,{exact:!0,to:"/",children:"Home"})}),Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(R.b,{exact:!0,to:"/decks/".concat(t.id),children:t.name})}),Object(d.jsx)("li",{class:"breadcrumb-item active","aria-current":"page",children:"Study"})]})}),Object(d.jsx)("h1",{children:t.name}),c.length<3?Object(d.jsx)("div",{class:"card",children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h3",{class:"card-title",children:"Not enough cards"}),Object(d.jsxs)("p",{class:"card-text",children:["You need at least 3 cards to study. You currently have"," ",c.length," cards in this deck."]}),Object(d.jsx)("button",{type:"button",class:"btn btn-primary",onClick:function(){return O.push("/decks/".concat(t.id,"/cards/new"))},children:"Add Cards"})]})}):o!==c.length-1||a?a?Object(d.jsx)("div",{class:"card",children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsxs)("h3",{class:"card-title",children:["Card ",o+1," of ",c.length]}),Object(d.jsx)("p",{class:"card-text",children:c[o].front}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"button",class:"btn btn-secondary",onClick:x,children:"Flip"})]})}):Object(d.jsx)("div",{class:"card",children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsxs)("h3",{class:"card-title",children:["Card ",o+1," of ",c.length]}),Object(d.jsx)("p",{class:"card-text",children:c[o].back}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"button",class:"btn btn-secondary",onClick:x,children:"Flip"}),Object(d.jsx)("button",{type:"next",class:"btn btn-info",onClick:function(){u(o+1),b(!a)},children:"Next"})]})}):Object(d.jsx)("div",{class:"card",children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsxs)("h3",{class:"card-title",children:["Card ",o+1," of ",c.length]}),Object(d.jsx)("p",{class:"card-text",children:c[o].back}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"button",class:"btn btn-secondary",onClick:x,children:"Flip"}),Object(d.jsx)("button",{type:"next",class:"btn btn-info",onClick:function(){window.confirm("Restart Cards?")?(b(!a),u(0)):O.push("/")},children:"Restart"})]})})]}):Object(d.jsx)("p",{children:"Loading..."})};var J=function(e){var t=e.deck,c=e.cards,r=e.newCards,s=e.setNewCards,a=Object(i.g)(),b=a.deckId,j=a.cardId,l=Object(i.f)(),o=Object(n.useState)(void 0),u=Object(h.a)(o,2),O=u[0],x=u[1];return s(0),Object(n.useEffect)((function(){s(c),function(e,t){return E.apply(this,arguments)}(j).then((function(e){return x({id:j,front:e.front,back:e.back,deckId:Number(b)})}))}),[j,b]),t&&O?Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{class:"breadcrumb",children:[Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(R.b,{exact:!0,to:"/",children:"Home"})}),Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(R.b,{exact:!0,to:"/decks/".concat(b),children:t.name})}),Object(d.jsxs)("li",{class:"breadcrumb-item active","aria-current":"page",children:["Edit Card ",j]})]})}),Object(d.jsx)("h1",{children:"Edit Card"}),Object(d.jsx)(P,{formData:O,handleChange:function(e){x(Object(H.a)(Object(H.a)({},O),{},Object(L.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault(),function(e,t){return I.apply(this,arguments)}(O).then((function(){return s(r+1)})).then((function(){return l.push("/decks/".concat(b))}))},deckId:b,history:l})]}):Object(d.jsx)("p",{children:"Loading..."})};var U=function(){var e=Object(i.h)().url,t=Object(i.f)(),c=Object(i.g)().deckId,r=Object(n.useState)(void 0),s=Object(h.a)(r,2),a=s[0],b=s[1],j=Object(n.useState)(void 0),l=Object(h.a)(j,2),o=l[0],u=l[1],O=Object(n.useState)(void 0),x=Object(h.a)(O,2),p=x[0],f=x[1],m=Object(n.useState)(o),v=Object(h.a)(m,2),y=v[0],k=v[1];return Object(n.useEffect)((function(){g(c).then(b)}),[p,y,c]),a?Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/decks/:deckId/cards/:cardId/edit",children:Object(d.jsx)(J,{deck:a,setCards:u,cards:a.cards,newCards:y,setNewCards:k})}),Object(d.jsx)(i.a,{path:"/decks/:deckId/cards/new",children:Object(d.jsx)(B,{deck:a,setDeck:b,setCards:u,cards:a.cards,newDeck:p,setNewDeck:f,newCards:y,setNewCards:k})}),Object(d.jsx)(i.a,{path:"/decks/:deckId/edit",children:Object(d.jsx)(A,{deck:a,setDeck:b,setNewDeck:f})}),Object(d.jsx)(i.a,{path:"/decks/:deckId/study",children:Object(d.jsx)(W,{deck:a,cards:a.cards})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{class:"breadcrumb",children:[Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(R.b,{exact:!0,to:"/",children:"Home"})}),Object(d.jsx)("li",{class:"breadcrumb-item active","aria-current":"page",children:a.name})]})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:a.name}),Object(d.jsx)("p",{children:a.description}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"button",class:"btn btn-secondary",onClick:function(){return t.push("".concat(e,"/edit"))},children:"Edit"}),Object(d.jsx)("button",{type:"button",class:"btn btn-info",onClick:function(){return t.push("".concat(e,"/study"))},children:"Study"}),Object(d.jsx)("button",{type:"button",class:"btn btn-primary",onClick:function(){return t.push("".concat(e,"/cards/new"))},children:"Add Cards"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"delete",class:"btn btn-danger",onClick:function(){window.confirm("Delete deck? You will not be able to recover it after it is deleted")&&S(c).then((function(){return t.push("/")}))},children:"Delete"})})]})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)(_,{cards:a.cards,deckId:c,setCards:u,newCards:y,setNewCards:k})})]})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)(R.b,{exact:!0,to:"/",children:"Home"}),"/",Object(d.jsx)("p",{children:"Loading..."})]})};var Y=function(){var e=Object(n.useState)({name:"",message:""}),t=Object(h.a)(e,2),c=t[0],r=t[1],s=function(e){r(Object(H.a)(Object(H.a)({},c),{},Object(L.a)({},e.target.name,e.target.value)))},a=Object(i.f)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{class:"breadcrumb",children:[Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(R.b,{exact:!0,to:"/",children:"Home"})}),Object(d.jsx)("li",{class:"breadcrumb-item active","aria-current":"page",children:"Create Deck"})]})}),Object(d.jsx)("h1",{children:"Create Deck"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t){return k.apply(this,arguments)}(c).then((function(e){return a.push("/decks/".concat(e.id))}))},children:[Object(d.jsxs)("label",{htmlFor:"name",style:{marginBottom:"15px"},children:["Deck Name:",Object(d.jsx)("input",{type:"text",name:"name",id:"name",size:"37",onChange:s})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{htmlFor:"description",children:["Description:",Object(d.jsx)("textarea",{name:"description",id:"description",onChange:s,cols:"40",rows:"3"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"button",class:"btn btn-secondary",style:{marginRight:"10px"},onClick:function(){return a.push("/")},children:"Cancel"}),Object(d.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})]})};var K=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/decks/new",children:Object(d.jsx)(Y,{})}),Object(d.jsx)(i.a,{path:"/decks/:deckId",children:Object(d.jsx)(U,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/",children:Object(d.jsx)(T,{})}),Object(d.jsx)(i.a,{children:Object(d.jsx)(j,{})})]})})]})};var z=function(){return Object(d.jsx)("div",{className:"app-routes",children:Object(d.jsx)(i.a,{path:"/",children:Object(d.jsx)(K,{})})})};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(R.a,{children:Object(d.jsx)(z,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.2c73c51d.chunk.js.map