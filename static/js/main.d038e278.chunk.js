(this["webpackJsonphomeworks-ignat-v3"]=this["webpackJsonphomeworks-ignat-v3"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={button:"Affairs_button__KipM7",active:"Affairs_active__2Fm_X",affair:"Affairs_affair__1F40t",item:"Affairs_item__3rQHU",high:"Affairs_high__20k-7",middle:"Affairs_middle__3IvBg",low:"Affairs_low__3y-Gt",all:"Affairs_all__3RN4E"}},function(e,t,n){e.exports={container:"Message_container__yjvQg",dialog:"Message_dialog__1GV2W",arrow:"Message_arrow__3bqdA",avatar:"Message_avatar__3wXNu",time:"Message_time__GMXcP",name:"Message_name__3tsvy"}},function(e,t,n){e.exports={menu:"header_menu__1aNIe",link:"header_link__2DPGp",active:"header_active__3g_qp",buttonMenu:"header_buttonMenu__2Vko7"}},,,,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__hUJqQ",errorInput:"SuperInputText_errorInput__15vEq",error:"SuperInputText_error__2NK_Y"}},function(e,t,n){e.exports={container:"SuperCheckbox_container__KIUVX",checkmark:"SuperCheckbox_checkmark__2smDY"}},,,,function(e,t,n){e.exports={button:"SuperButton_button__U2bvu",default:"SuperButton_default__1rsaA",red:"SuperButton_red__13hTo"}},,,function(e,t,n){e.exports={blue:"HW4_blue__2BEqs",column:"HW4_column__28jkC",testSpanError:"HW4_testSpanError__33MCa"}},function(e,t,n){e.exports={radio:"SuperRadio_radio__4_5sc",label:"SuperRadio_label__Jg_yZ"}},,,,function(e,t,n){e.exports={App:"App_App__1qZ2E"}},function(e,t,n){e.exports={error:"error_error__3fxWE"}},function(e,t,n){},function(e,t,n){e.exports={item:"HW8_item__2OlbE"}},,,,,,,function(e,t,n){},,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(21),s=n.n(r),i=(n(42),n(32)),o=n.n(i),j=n(13),l=n.n(j),u=n(33),b=n.n(u),d=n(0);var O=function(){return Object(d.jsxs)("div",{className:b.a.error,children:[Object(d.jsx)("h1",{children:"404"}),Object(d.jsx)("p",{children:"We're sorry but it looks like that page doesn't exist anymore."})]})},h=n(3),x=n(12),m=n.n(x),f=function(e){return Object(d.jsxs)("div",{className:m.a.container,children:[Object(d.jsx)("img",{className:m.a.avatar,src:e.avatar,alt:""}),Object(d.jsxs)("div",{className:m.a.dialog,children:[Object(d.jsx)("div",{className:m.a.name,children:e.name}),Object(d.jsx)("div",{className:m.a.message,children:e.message}),Object(d.jsx)("div",{className:m.a.time,children:e.time}),Object(d.jsx)("div",{className:m.a.arrow})]})]})},v="https://i.postimg.cc/ydtzBx4p/B67-A3875-Web.jpg",p="Maria",_="Hi! What is your name?",g="23:00";var k=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(f,{avatar:v,name:p,message:_,time:g}),Object(d.jsx)("hr",{})]})},C=n(4),N=n(11),y=n.n(N);var w=function(e){var t=y.a.item+" "+y.a[e.affair.priority];return Object(d.jsxs)("div",{className:y.a.affair,children:[Object(d.jsx)("div",{className:y.a.item,children:e.affair.name}),Object(d.jsx)("div",{className:t,children:e.affair.priority}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:y.a.item+" "+y.a.button,children:"X"})]})};var S=function(e){var t=e.data.map((function(t){return Object(d.jsx)(w,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){e.setFilter(t.currentTarget.value)},a=function(t){return y.a.button+(e.filter===t?" "+y.a.active:"")};return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:n,className:a("all"),value:"all",children:"All"}),Object(d.jsx)("button",{onClick:n,className:a("high"),value:"high",children:"High"}),Object(d.jsx)("button",{onClick:n,className:a("middle"),value:"middle",children:"Middle"}),Object(d.jsx)("button",{onClick:n,className:a("low"),value:"low",children:"Low"})]})},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"JS",priority:"middle"},{_id:3,name:"HTML&CSS",priority:"low"},{_id:4,name:"Redux",priority:"high"},{_id:5,name:"TypeScript",priority:"middle"}];var E=function(){var e=Object(a.useState)(A),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(C.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(S,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(d.jsx)("hr",{})]})},I=n(23);n(53);var M=function(){var e=Object(a.useState)([]),t=Object(C.a)(e,2);return t[0],t[1],Object(d.jsx)("div",{children:Object(d.jsx)("hr",{})})},T=n(5),B=n(8),L=n(19),W=n.n(L),F=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(B.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(W.a.error," ").concat(i||""),l="".concat(W.a.input," ").concat(r?W.a.errorInput:W.a.superInput," ").concat(s," ");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(T.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(d.jsx)("span",{className:j,children:r})]})},H=n(27),J=n.n(H),D=n(24),P=n.n(D),G=function(e){var t=e.red,n=e.className,a=Object(B.a)(e,["red","className"]),c="".concat(P.a.button," ").concat(t?P.a.red:P.a.default," ").concat(n);return Object(d.jsx)("button",Object(T.a)({className:c},a))},q=n(20),K=n.n(q),R=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(B.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(K.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{className:K.a.container,children:[Object(d.jsx)("input",Object(T.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),Object(d.jsx)("span",{className:K.a.checkmark}),c&&Object(d.jsx)("span",{className:K.a.spanClassName,children:c})]})};var X=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(C.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:J.a.column,children:[Object(d.jsx)(F,{value:n,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(F,{className:J.a.blue}),Object(d.jsx)(G,{children:"default"}),Object(d.jsx)(G,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(G,{disabled:!0,children:"disabled"}),Object(d.jsx)(R,{checked:j,onChangeChecked:l,children:"One"})]}),Object(d.jsx)("hr",{})]})},U=(n(44),function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(B.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(C.a)(s,2),o=i[0],j=i[1],l=c||{},u=l.children,b=l.onDoubleClick,O=l.className,h=Object(B.a)(l,["children","onDoubleClick","className"]),x="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",O),m=String.fromCharCode(9998);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(F,Object(T.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(d.jsxs)("span",Object(T.a)(Object(T.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},h),{},{children:[Object(d.jsx)("span",{children:m})," ",u||r.value]}))})});function Q(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function V(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}Q("test",{x:"A",y:1});V("test",{x:"",y:0});var z=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(U,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(G,{onClick:function(){Q("editable-span-value",n)},children:"save"}),Object(d.jsx)(G,{onClick:function(){c(V("editable-span-value",""))},children:"restore"}),Object(d.jsx)("hr",{})]})};var Y=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(k,{}),Object(d.jsx)(E,{}),Object(d.jsx)(M,{}),Object(d.jsx)(X,{}),Object(d.jsx)(z,{})]})},Z=n(34),$=n.n(Z),ee=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(B.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(d.jsx)("option",{className:$.a.option,value:e,children:e},e+"-"+t)})):[];return Object(d.jsx)("select",Object(T.a)(Object(T.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},te=n(28),ne=n.n(te),ae=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=Object(B.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){c&&c(e),r&&r(e.currentTarget.value)},o=ne.a.radio,j=n?n.map((function(e,n){return Object(d.jsxs)("label",{className:ne.a.label,children:[Object(d.jsx)("input",Object(T.a)({className:o,type:"radio",name:t,checked:e===a,value:e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:j})},ce=["x","y","z"];var re=function(){var e=Object(a.useState)(ce[1]),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(ee,{options:ce,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(ae,{name:"radio",options:ce,value:n,onChangeOption:c})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},se=function(e,t){switch(t.type){case"sort":var n=Object(I.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},ie=n(35),oe=n.n(ie),je=[{_id:0,name:"Maria",age:31},{_id:1,name:"Emma",age:22},{_id:2,name:"Sophia",age:16},{_id:3,name:"Isabella",age:64},{_id:4,name:"Mia",age:35},{_id:5,name:"Olivia",age:45}];var le=function(){var e=Object(a.useState)(je),t=Object(C.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(d.jsxs)("div",{className:oe.a.item,children:[Object(d.jsx)("span",{children:e.name}),e.age]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",r,Object(d.jsxs)("div",{children:[Object(d.jsx)(G,{onClick:function(){return c(se(je,{type:"sort",payload:"up"}))},children:"sort up"}),Object(d.jsx)(G,{onClick:function(){return c(se(je,{type:"sort",payload:"down"}))},children:"sort down"}),Object(d.jsx)(G,{onClick:function(){return c(se(je,{type:"check",payload:18}))},children:"check 18"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ue=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(C.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(!1),l=Object(C.a)(j,2),u=l[0],b=l[1],O=function(){clearInterval(n)},h=(null===i||void 0===i?void 0:i.toLocaleTimeString())||Object(d.jsx)("br",{}),x=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(d.jsx)("br",{});return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:h}),u?Object(d.jsx)("div",{children:x}):Object(d.jsx)("br",{}),Object(d.jsx)(G,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(d.jsx)(G,{onClick:O,children:"stop"})]})};var be=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(ue,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},de=n(18),Oe={isLoading:!1},he=function(e){return{type:"CHANGE_LOADING",isLoading:e}},xe=n.p+"static/media/loading.b98a8c76.svg";var me=function(){var e=Object(de.c)((function(e){return e.loading.isLoading})),t=Object(de.b)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 10",e?Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:xe,alt:"loading..."})}):Object(d.jsx)("div",{children:Object(d.jsx)(G,{onClick:function(){t(he(!0)),setTimeout((function(){t(he(!1))}),2e3)},children:"set loading..."})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var fe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(re,{}),Object(d.jsx)(le,{}),Object(d.jsx)(be,{}),Object(d.jsx)(me,{})]})};var ve=function(){return Object(d.jsx)("div",{})},pe="/pre-junior",_e="/junior",ge="/junior-plus";var ke=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(h.a,{to:pe})}}),Object(d.jsx)(h.b,{path:pe,render:function(){return Object(d.jsx)(Y,{})}}),Object(d.jsx)(h.b,{path:_e,render:function(){return Object(d.jsx)(fe,{})}}),Object(d.jsx)(h.b,{path:ge,render:function(){return Object(d.jsx)(ve,{})}}),Object(d.jsx)(h.b,{render:function(){return Object(d.jsx)(O,{})}})]})})},Ce=n(14);var Ne=function(){return Object(d.jsxs)("div",{className:l.a.menu,children:[Object(d.jsx)(Ce.b,{to:pe,className:l.a.link,activeClassName:l.a.active,children:"PreJunior"}),Object(d.jsx)(Ce.b,{to:_e,className:l.a.link,activeClassName:l.a.active,children:"Junior"}),Object(d.jsx)(Ce.b,{to:ge,className:l.a.link,activeClassName:l.a.active,children:"Junior+"}),Object(d.jsx)("div",{className:l.a.buttonMenu})]})};var ye=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(Ce.a,{children:[Object(d.jsx)(Ne,{}),Object(d.jsx)(ke,{})]})})};var we=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(ye,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=n(30),Ae=Object(Se.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LOADING":return Object(T.a)(Object(T.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),Ee=Object(Se.b)(Ae),Ie=Ee;window.store=Ee,s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(de.a,{store:Ie,children:Object(d.jsx)(we,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[51,1,2]]]);
//# sourceMappingURL=main.d038e278.chunk.js.map