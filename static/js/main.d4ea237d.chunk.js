(this["webpackJsonpcreate-react-app-template"]=this["webpackJsonpcreate-react-app-template"]||[]).push([[0],{13:function(e,r,t){},15:function(e,r,t){"use strict";t.r(r);var n=t(1),a=t(0),c=t.n(a),i=t(6),s=t.n(i),u=(t(13),t(2)),l=t.n(u),j=t(3),b=(t(5),t(7));function m(e){var r=e.error;if(r)switch(r.type){case"required":return Object(n.jsx)("p",{children:"This is required"});case"minLength":return Object(n.jsx)("p",{children:"Your name need minmium 2 charcaters"});case"maxLength":return Object(n.jsx)("p",{children:"Your name should contain max 18 charcaters"});case"pattern":return Object(n.jsx)("p",{children:"Enter a valid data"});case"min":return Object(n.jsx)("p",{children:"Minmium age is 18"});case"validate":return Object(n.jsx)("p",{children:"Username is already used"});default:return null}return null}function o(){var e=Object(b.a)(),r=e.register,t=e.handleSubmit,a=e.errors,c=e.formState.isSubmitting,i=function(e){return new Promise((function(r){return setTimeout(r,e)}))},s=function(){var e=Object(j.a)(l.a.mark((function e(r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(1e3);case 2:if(""!==r){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return Object(n.jsxs)("form",{className:"App",onSubmit:t((function(e,r){alert(JSON.stringify(e)),r.target.reset()})),children:[Object(n.jsx)("h1",{children:"Sign Up"}),Object(n.jsx)("label",{children:"First Name:"}),Object(n.jsx)("input",{name:"firstName",ref:r({required:!0,minLength:2,maxLength:16,pattern:/^[A-Za-z]+$/i})}),Object(n.jsx)(m,{error:a.firstName}),Object(n.jsx)("label",{children:"Last Name:"}),Object(n.jsx)("input",{name:"lastName",ref:r({required:!0,minLength:2,maxLength:16,pattern:/^[A-Za-z]+$/i})}),Object(n.jsx)(m,{error:a.lastName}),Object(n.jsx)("label",{children:"Gender"}),Object(n.jsxs)("select",{name:"gender",ref:r({required:!0}),children:[Object(n.jsx)("option",{value:"",children:"Select..."}),Object(n.jsx)("option",{value:"male",children:"Male"}),Object(n.jsx)("option",{value:"female",children:"Female"})]}),Object(n.jsx)(m,{error:a.gender}),Object(n.jsx)("label",{children:"Username"}),Object(n.jsx)("input",{name:"username",onBlur:function(e){return s(e.target.value)},ref:r({required:!0,validate:s})}),Object(n.jsx)(m,{error:a.username}),Object(n.jsx)("label",{children:"Email"}),Object(n.jsx)("input",{name:"email",ref:r({required:!0,pattern:/^\S+@\S+$/i})}),Object(n.jsx)(m,{error:a.email}),Object(n.jsx)("label",{children:"About you"}),Object(n.jsx)("textarea",{name:"aboutYou",ref:r({required:!0})}),Object(n.jsx)("input",{type:"submit",disabled:c})]})}s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(o,{})}),document.getElementById("root"))},5:function(e,r,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.d4ea237d.chunk.js.map