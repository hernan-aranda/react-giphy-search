(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c(7),s=c.n(r),i=c(2),o=c(9),d=function(e){var t=e.setCategories,c=Object(a.useState)(""),r=Object(i.a)(c,2),s=r[0],d=r[1];return Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.trim().length>2&&(t((function(e){return[s].concat(Object(o.a)(e))})),d(""))},className:"input-group mb-3",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Tem\xe1tica"})}),Object(n.jsx)("input",{type:"text",value:s,onChange:function(e){d(e.target.value)},className:"form-control",placeholder:"Golden Kamuy"})]})},u=c(10),l=c(6),j=c.n(l),b=c(8),m=function(){var e=Object(b.a)(j.a.mark((function e(t){var c,n,a,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"S1RlTg9msfiwoxno1rKcFoQ1tLGhLUwA",c="https://api.giphy.com/v1/gifs/search?api_key=".concat("S1RlTg9msfiwoxno1rKcFoQ1tLGhLUwA","&q=").concat(encodeURI('"'.concat(t,'"')),"&limit=",6),e.next=4,fetch(c);case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,r=a.data,s=r.map((function(e){return{id:e.id,title:e.title||"Sin nombre",url:e.images.downsized_medium.url}})),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,c=e.url;return Object(n.jsxs)("div",{className:"card bg-dark text-white animate__animated animate__fadeIn",children:[Object(n.jsx)("img",{src:c,alt:t,className:"card-img-top"}),Object(n.jsx)("div",{className:"card-img-overlay",children:Object(n.jsx)("p",{children:Object(n.jsx)("span",{className:"badge badge-secondary card-title",children:t})})})]})},h=function(e){var t=e.category,c=function(e){var t=Object(a.useState)({data:[],loading:!0}),c=Object(i.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){m(e).then((function(e){r({data:e,loading:!1})}))}),[e]),n}(t),r=c.data,s=c.loading;return Object(n.jsxs)("div",{className:"category",children:[Object(n.jsx)("div",{className:"alert alert-success",role:"alert",children:Object(n.jsx)("h2",{children:t})}),s&&Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("div",{className:"spinner-border text-danger",role:"status"})}),Object(n.jsx)("div",{className:"card-columns",children:r.map((function(e){return Object(n.jsx)(p,Object(u.a)({},e),e.id)}))})]})},x=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("h1",{children:"Giphy Search"}),Object(n.jsx)(d,{setCategories:r})]}),Object(n.jsx)("div",{children:c.map((function(e){return Object(n.jsx)(h,{category:e},e)}))})]})};c(17);s.a.render(Object(n.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7cc08255.chunk.js.map