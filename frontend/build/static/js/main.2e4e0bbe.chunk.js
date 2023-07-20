(this["webpackJsonpzeta-frontend"]=this["webpackJsonpzeta-frontend"]||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},164:function(e,t,n){},274:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){},277:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(25),c=n.n(r),s=(n(134),n(135),n(8)),o=(n(136),n(26)),i=n(10),l=n(1),u=function(){return Object(l.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center",color:"#f3f3f3"},children:Object(l.jsx)("p",{className:"text-center py-3",children:"Copyright \xa9 Zeta Note"})})},j=n(286),d=n(280),p=n(287),b=n(285),O=n(124),h=n(284),f=n(7),x=n(11),g=n(24),y="USER_LOGIN_REQUEST",m="USER_LOGIN_SUCCESS",v="USER_LOGIN_FAIL",S="USER_LOGOUT",E="USER_REGISTER_REQUEST",C="USER_REGISTER_SUCCESS",I="USER_REGISTER_FAIL",w="USER_UPDATE_REQUEST",N="USER_UPDATE_SUCCESS",L="USER_UPDATE_FAIL",T=n(27),_=n.n(T);var U=function(e){var t=e.setSearch,n=Object(f.b)(),r=Object(f.c)((function(e){return e.userLogin})).userInfo;return Object(a.useEffect)((function(){}),[r]),Object(l.jsx)(j.a,{collapseOnSelect:!0,expand:"lg",bg:"transparent",variant:"dark",style:{borderRadius:"0px"},children:Object(l.jsxs)(d.a,{children:[Object(l.jsxs)(j.a.Brand,{href:"/",children:[Object(l.jsxs)("span",{style:{fontWeight:"bold",fontSize:"25px",color:"#1db954"},children:["ZETA"," "]}),"Note"]}),Object(l.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(l.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(l.jsx)(p.a,{className:"ml-auto",children:r&&Object(l.jsx)(b.a,{inline:!0,children:Object(l.jsx)(O.a,{type:"text",placeholder:"Find your notes...",className:"mr-sm-2",onChange:function(e){return t(e.target.value)}})})}),Object(l.jsx)(p.a,{children:r?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(h.a,{title:"".concat(r.name),id:"collasible-nav-dropdown",children:[Object(l.jsxs)(h.a.Item,{href:"/profile",children:[Object(l.jsx)("img",{alt:"",src:"".concat(r.pic),width:"25",height:"25",style:{marginRight:10}}),"My Profile"]}),Object(l.jsx)(h.a.Divider,{}),Object(l.jsx)(h.a.Item,{onClick:function(){n(function(){var e=Object(g.a)(Object(x.a)().mark((function e(t){return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:S});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(l.jsx)(p.a.Link,{href:"/mynotes",children:"My Notes"})]}):Object(l.jsx)(p.a.Link,{href:"/login",children:"Login"})})]})]})})};n(164);var k=function(e){var t=e.history,n=Object(f.c)((function(e){return e.userLogin})).userInfo;return Object(a.useEffect)((function(){n&&t.push("/mynotes")}),[t,n]),Object(l.jsx)("div",{className:"main",children:Object(l.jsxs)("div",{className:"intro-text",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{style:{padding:"0",margin:"0",color:"#f3f3f3",fontSize:"20px",letterSpacing:"12px"},children:"WELCOME TO"}),Object(l.jsxs)("h1",{className:"title",children:[Object(l.jsx)("span",{style:{color:"#1db954",fontSize:"70px",fontWeight:"semibold"},children:"ZETA"})," ","Note"]}),Object(l.jsx)("p",{style:{color:"#1db954",fontSize:"20px",padding:"10px 50px"},children:"Empower Your Ideas: Seamlessly Capture, Organize, and Inspire with our Intuitive Note-Taking App!"})]}),Object(l.jsxs)("div",{className:"buttonContainer",children:[Object(l.jsx)(o.b,{to:"/login",children:Object(l.jsx)("button",{className:"landingbutton landingbutton1",children:"LOGIN"})}),Object(l.jsx)(o.b,{to:"/register",children:Object(l.jsx)("button",{className:"landingbutton landingbutton2",children:"SIGNUP"})})]})]})})},P=n(288),A=n(290),R=n(127),G=n(282),z=n(46),D=n.n(z),F="NOTES_LIST_REQUEST",B="NOTES_LIST_SUCCESS",H="NOTES_LIST_FAIL",Q="NOTES_CREATE_REQUEST",J="NOTES_CREATE_SUCCESS",W="NOTES_CREATE_FAIL",M="NOTES_UPDATE_REQUEST",q="NOTES_UPDATE_SUCCESS",Z="NOTES_UPDATE_FAIL",K="NOTES_DELETE_REQUEST",Y="NOTES_DELETE_SUCCESS",V="NOTES_DELETE_FAIL",X=function(e){return function(){var t=Object(g.a)(Object(x.a)().mark((function t(n,a){var r,c,s,o,i,l;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:K}),r=a(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,_.a.delete("/api/notes/".concat(e),s);case 6:o=t.sent,i=o.data,n({type:Y,payload:i}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,n({type:V,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},$=n(281);var ee=function(e){var t=e.size,n=void 0===t?100:t;return Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:Object(l.jsx)($.a,{style:{width:n,height:n},animation:"border"})})},te=n(289),ne=function(e){var t=e.variant,n=void 0===t?"info":t,a=e.children;return Object(l.jsx)(te.a,{variant:n,style:{fontSize:20},children:Object(l.jsx)("strong",{children:a})})};var ae=function(e){var t=e.history,n=e.search,r=Object(f.b)(),c=Object(f.c)((function(e){return e.noteList})),s=c.loading,i=c.error,u=c.notes,j=Object(f.c)((function(e){return e.userLogin})).userInfo,d=Object(f.c)((function(e){return e.noteDelete})),p=d.loading,b=d.error,O=d.success,h=Object(f.c)((function(e){return e.noteCreate})).success,y=Object(f.c)((function(e){return e.noteUpdate})).success;return Object(a.useEffect)((function(){r(function(){var e=Object(g.a)(Object(x.a)().mark((function e(t,n){var a,r,c,s,o,i;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:F}),a=n(),r=a.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,_.a.get("/api/notes",c);case 6:s=e.sent,o=s.data,t({type:B,payload:o}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:H,payload:i});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),j||t.push("/")}),[r,t,j,O,h,y]),Object(l.jsxs)("div",{style:{color:"#f3f3f3"},children:[Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",letterSpacing:"14px"},children:Object(l.jsx)("p",{style:{fontSize:"50px",textAlign:"center"},children:"Welcome ".concat(j&&j.name).toUpperCase()})}),console.log(u),Object(l.jsx)(o.b,{to:"/createnote",children:Object(l.jsx)("button",{className:"registerbutton",style:{marginLeft:10,marginBottom:6},size:"lg",children:"Create"})}),i&&Object(l.jsx)(ne,{variant:"danger",children:i}),b&&Object(l.jsx)(ne,{variant:"danger",children:b}),s&&Object(l.jsx)(ee,{}),p&&Object(l.jsx)(ee,{}),u&&u.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})).reverse().map((function(e){return Object(l.jsx)(P.a,{children:Object(l.jsxs)(A.a,{style:{margin:10,backgroundColor:"#222222",color:"white"},children:[Object(l.jsxs)(A.a.Header,{style:{display:"flex"},children:[Object(l.jsx)("span",{style:{textDecoration:"none",flex:1,cursor:"pointer",alignSelf:"center",fontSize:18},children:Object(l.jsx)(P.a.Toggle,{as:A.a.Text,variant:"link",eventKey:"0",children:e.title})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(R.a,{className:"smallbuttons1",href:"/note/".concat(e._id),children:"EDIT"}),Object(l.jsx)(R.a,{variant:"danger",className:"mx-2 smallbuttons2",onClick:function(){return t=e._id,void(window.confirm("Are you sure?")&&r(X(t)));var t},children:"DELETE"})]})]}),Object(l.jsx)(P.a.Collapse,{eventKey:"0",children:Object(l.jsxs)(A.a.Body,{children:[Object(l.jsx)("h4",{children:Object(l.jsx)(G.a,{variant:"light",style:{fontWeight:"light"},children:"".concat(e.category).toUpperCase()})}),Object(l.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(l.jsx)(D.a,{style:{fontFamily:"segoe-ui !important"},children:e.content}),Object(l.jsxs)("footer",{className:"blockquote-footer",children:["Updated on"," ",Object(l.jsx)("cite",{title:"Source Title",children:e.createdAt.substring(0,10)})]})]})]})})]},e._id)})}))]})};var re=function(e){var t=e.match,n=e.history,r=Object(a.useState)(),c=Object(s.a)(r,2),o=c[0],i=c[1],u=Object(a.useState)(),j=Object(s.a)(u,2),d=j[0],p=j[1],O=Object(a.useState)(),h=Object(s.a)(O,2),y=h[0],m=h[1],v=Object(a.useState)(""),S=Object(s.a)(v,2),E=S[0],C=S[1],I=Object(f.b)(),w=Object(f.c)((function(e){return e.noteUpdate})),N=w.loading,L=w.error,T=Object(f.c)((function(e){return e.noteDelete})),U=T.loading,k=T.error;return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(Object(x.a)().mark((function e(){var n,a;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/notes/".concat(t.params.id));case 2:n=e.sent,a=n.data,i(a.title),p(a.content),m(a.category),C(a.updatedAt);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t.params.id,E]),Object(l.jsxs)("div",{style:{color:"#f3f3f3"},children:[Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",letterSpacing:"14px"},children:Object(l.jsx)("p",{style:{fontSize:"50px",textAlign:"center"},children:"EDIT NOTE"})}),Object(l.jsxs)(A.a,{style:{backgroundColor:"#000"},children:[Object(l.jsx)(A.a.Header,{children:"Edit your Note"}),Object(l.jsx)(A.a.Body,{children:Object(l.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),I(function(e,t,n,a){return function(){var r=Object(g.a)(Object(x.a)().mark((function r(c,s){var o,i,l,u,j,d;return Object(x.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:M}),o=s(),i=o.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},r.next=6,_.a.put("/api/notes/".concat(e),{title:t,content:n,category:a},l);case 6:u=r.sent,j=u.data,c({type:q,payload:j}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),d=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,c({type:Z,payload:d});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()}(t.params.id,o,d,y)),o&&d&&y&&(i(""),m(""),p(""),n.push("/mynotes"))},style:{color:"#f3f3f3"},children:[U&&Object(l.jsx)(ee,{}),L&&Object(l.jsx)(ne,{variant:"danger",children:L}),k&&Object(l.jsx)(ne,{variant:"danger",children:k}),Object(l.jsxs)(b.a.Group,{controlId:"title",children:[Object(l.jsx)(b.a.Label,{children:"Title"}),Object(l.jsx)(b.a.Control,{type:"title",placeholder:"Enter the title",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)(b.a.Group,{controlId:"content",children:[Object(l.jsx)(b.a.Label,{children:"Content"}),Object(l.jsx)(b.a.Control,{as:"textarea",placeholder:"Enter the content",rows:4,value:d,onChange:function(e){return p(e.target.value)}})]}),d&&Object(l.jsxs)(A.a,{style:{backgroundColor:"#171717"},children:[Object(l.jsx)(A.a.Header,{children:"Note Preview"}),Object(l.jsx)(A.a.Body,{children:Object(l.jsx)(D.a,{children:d})})]}),Object(l.jsxs)(b.a.Group,{controlId:"content",children:[Object(l.jsx)(b.a.Label,{children:"Category"}),Object(l.jsx)(b.a.Control,{type:"content",placeholder:"Enter the Category",value:y,onChange:function(e){return m(e.target.value)}})]}),N&&Object(l.jsx)(ee,{size:50}),Object(l.jsx)(R.a,{variant:"primary",type:"submit",className:"smallbuttons1",children:"Update"}),Object(l.jsx)(R.a,{className:"mx-2 smallbuttons2",variant:"danger",onClick:function(){return e=t.params.id,window.confirm("Are you sure?")&&I(X(e)),void n.push("/mynotes");var e},children:"Delete"})]})}),Object(l.jsxs)(A.a.Footer,{className:"text-muted",children:["Updated on - ",E.substring(0,10)]})]})]})},ce=n(283),se=n(125);n(274);var oe=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],u=Object(a.useState)(""),j=Object(s.a)(u,2),d=j[0],p=j[1],O=Object(f.b)(),h=Object(f.c)((function(e){return e.userLogin})),S=h.loading,E=h.error,C=h.userInfo;return Object(a.useEffect)((function(){C&&t.push("/mynotes")}),[t,C]),Object(l.jsxs)("div",{style:{color:"#f3f3f3"},children:[Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",letterSpacing:"14px"},children:Object(l.jsx)("p",{style:{fontSize:"50px",textAlign:"center"},children:"LOGIN"})}),Object(l.jsxs)("div",{className:"loginContainer",children:[E&&Object(l.jsx)(ne,{variant:"danger",children:E}),S&&Object(l.jsx)(ee,{}),Object(l.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),O(function(e,t){return function(){var n=Object(g.a)(Object(x.a)().mark((function n(a){var r,c,s;return Object(x.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:y}),r={headers:{"Content-type":"application/json"}},n.next=5,_.a.post("/api/users/login",{email:e,password:t},r);case 5:c=n.sent,s=c.data,a({type:m,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:v,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(c,d))},children:[Object(l.jsxs)(b.a.Group,{controlId:"formBasicEmail",children:[Object(l.jsx)(b.a.Label,{children:"Email address"}),Object(l.jsx)(b.a.Control,{type:"email",value:c,placeholder:"Enter email",onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)(b.a.Group,{controlId:"formBasicPassword",children:[Object(l.jsx)(b.a.Label,{children:"Password"}),Object(l.jsx)(b.a.Control,{type:"password",value:d,placeholder:"Password",onChange:function(e){return p(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"loginbutton",children:"LOGIN"})]}),Object(l.jsx)(ce.a,{className:"py-3",children:Object(l.jsxs)(se.a,{children:["New Customer ? ",Object(l.jsx)(o.b,{to:"/register",children:"Register Here"})]})})]})]})};n(275);var ie=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],u=Object(a.useState)(""),j=Object(s.a)(u,2),d=j[0],p=j[1],O=Object(a.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),h=Object(s.a)(O,2),y=h[0],v=h[1],S=Object(a.useState)(""),w=Object(s.a)(S,2),N=w[0],L=w[1],T=Object(a.useState)(""),U=Object(s.a)(T,2),k=U[0],P=U[1],A=Object(a.useState)(null),R=Object(s.a)(A,2),G=R[0],z=R[1],D=Object(a.useState)(null),F=Object(s.a)(D,2),B=F[0],H=F[1],Q=Object(f.b)(),J=Object(f.c)((function(e){return e.userRegister})),W=J.loading,M=J.error,q=J.userInfo;return Object(a.useEffect)((function(){q&&t.push("/")}),[t,q]),Object(l.jsxs)("div",{style:{color:"#f3f3f3"},children:[Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",letterSpacing:"14px"},children:Object(l.jsx)("p",{style:{fontSize:"50px",textAlign:"center"},children:"REGISTER"})}),Object(l.jsxs)("div",{className:"loginContainer",children:[M&&Object(l.jsx)(ne,{variant:"danger",children:M}),G&&Object(l.jsx)(ne,{variant:"danger",children:G}),W&&Object(l.jsx)(ee,{}),Object(l.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),N!==k?z("Passwords do not match"):Q(function(e,t,n,a){return function(){var r=Object(g.a)(Object(x.a)().mark((function r(c){var s,o,i;return Object(x.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:E}),s={headers:{"Content-type":"application/json"}},r.next=5,_.a.post("/api/users",{name:e,pic:a,email:t,password:n},s);case 5:o=r.sent,i=o.data,c({type:C,payload:i}),c({type:m,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),c({type:I,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}(d,c,N,y))},children:[Object(l.jsxs)(b.a.Group,{controlId:"name",children:[Object(l.jsx)(b.a.Label,{children:"Name"}),Object(l.jsx)(b.a.Control,{type:"name",value:d,placeholder:"Enter name",onChange:function(e){return p(e.target.value)}})]}),Object(l.jsxs)(b.a.Group,{controlId:"formBasicEmail",children:[Object(l.jsx)(b.a.Label,{children:"Email address"}),Object(l.jsx)(b.a.Control,{type:"email",value:c,placeholder:"Enter email",onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)(b.a.Group,{controlId:"formBasicPassword",children:[Object(l.jsx)(b.a.Label,{children:"Password"}),Object(l.jsx)(b.a.Control,{type:"password",value:N,placeholder:"Password",onChange:function(e){return L(e.target.value)}})]}),Object(l.jsxs)(b.a.Group,{controlId:"confirmPassword",children:[Object(l.jsx)(b.a.Label,{children:"Confirm Password"}),Object(l.jsx)(b.a.Control,{type:"password",value:k,placeholder:"Confirm Password",onChange:function(e){return P(e.target.value)}})]}),B&&Object(l.jsx)(ne,{variant:"danger",children:B}),Object(l.jsxs)(b.a.Group,{controlId:"pic",children:[Object(l.jsx)(b.a.Label,{children:"Profile Picture"}),Object(l.jsx)(b.a.File,{onChange:function(e){return function(e){if("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"===e)return H("Please Select an Image");if(H(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return H("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","zetanote"),t.append("cloud_name","zetanote"),fetch("https://api.cloudinary.com/v1_1/zetanote/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){v(e.url.toString())})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(l.jsx)("button",{type:"submit",className:"registerbutton",children:"REGISTER"})]}),Object(l.jsx)(ce.a,{className:"py-3",children:Object(l.jsxs)(se.a,{children:["Have an Account ? ",Object(l.jsx)(o.b,{to:"/login",children:"Login"})]})})]})]})};var le=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),j=u[0],d=u[1],p=Object(a.useState)(""),O=Object(s.a)(p,2),h=O[0],y=O[1],m=Object(f.b)(),v=Object(f.c)((function(e){return e.noteCreate})),S=v.loading,E=v.error,C=v.note;console.log(C);var I=function(){o(""),y(""),d("")};return Object(a.useEffect)((function(){}),[]),Object(l.jsxs)("div",{style:{color:"#f3f3f3"},children:[Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",letterSpacing:"14px"},children:Object(l.jsx)("p",{style:{fontSize:"50px",textAlign:"center"},children:"CREATE A NOTE"})}),Object(l.jsxs)(A.a,{style:{backgroundColor:"#171717"},children:[Object(l.jsx)(A.a.Header,{children:"Create a new Note"}),Object(l.jsx)(A.a.Body,{children:Object(l.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),m(function(e,t,n){return function(){var a=Object(g.a)(Object(x.a)().mark((function a(r,c){var s,o,i,l,u,j;return Object(x.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:Q}),s=c(),o=s.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},a.next=6,_.a.post("/api/notes/create",{title:e,content:t,category:n},i);case 6:l=a.sent,u=l.data,r({type:J,payload:u}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),j=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message,r({type:W,payload:j});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(c,j,h)),c&&j&&h&&(I(),t.push("/mynotes"))},children:[E&&Object(l.jsx)(ne,{variant:"danger",children:E}),Object(l.jsxs)(b.a.Group,{controlId:"title",children:[Object(l.jsx)(b.a.Label,{children:"Title"}),Object(l.jsx)(b.a.Control,{type:"title",value:c,placeholder:"Enter the title",onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)(b.a.Group,{controlId:"content",children:[Object(l.jsx)(b.a.Label,{children:"Content"}),Object(l.jsx)(b.a.Control,{as:"textarea",value:j,placeholder:"Enter the content",rows:4,onChange:function(e){return d(e.target.value)}})]}),j&&Object(l.jsxs)(A.a,{children:[Object(l.jsx)(A.a.Header,{style:{color:"black"},children:"Note Preview"}),Object(l.jsx)(A.a.Body,{style:{color:"black"},children:Object(l.jsx)(D.a,{children:j})})]}),Object(l.jsxs)(b.a.Group,{controlId:"content",children:[Object(l.jsx)(b.a.Label,{children:"Category"}),Object(l.jsx)(b.a.Control,{type:"content",value:h,placeholder:"Enter the Category",onChange:function(e){return y(e.target.value)}})]}),S&&Object(l.jsx)(ee,{size:50}),Object(l.jsx)(R.a,{type:"submit",variant:"primary",className:"smallbuttons1",children:"Create"}),Object(l.jsx)(R.a,{onClick:I,className:"mx-2 smallbuttons2",children:"Reset"})]})}),Object(l.jsxs)(A.a.Footer,{className:"text-muted",children:["Creating on - ",(new Date).toLocaleDateString()]})]})]})},ue=(n(276),function(e){e.location;var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),j=u[0],d=u[1],p=Object(a.useState)(),O=Object(s.a)(p,2),h=O[0],y=O[1],v=Object(a.useState)(""),S=Object(s.a)(v,2),E=S[0],C=S[1],I=Object(a.useState)(""),T=Object(s.a)(I,2),U=T[0],k=T[1],P=Object(a.useState)(),A=Object(s.a)(P,2),G=A[0],z=A[1],D=Object(f.b)(),F=Object(f.c)((function(e){return e.userLogin})).userInfo,B=Object(f.c)((function(e){return e.userUpdate})),H=B.loading,Q=B.error,J=B.success;Object(a.useEffect)((function(){F?(o(F.name),d(F.email),y(F.pic)):t.push("/")}),[t,F]);return Object(l.jsxs)("div",{style:{color:"#f3f3f3"},children:[Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",letterSpacing:"14px"},children:Object(l.jsx)("p",{style:{fontSize:"50px",textAlign:"center"},children:"EDIT PROFILE"})}),Object(l.jsx)("div",{children:Object(l.jsxs)(ce.a,{className:"profileContainer",children:[Object(l.jsx)(se.a,{md:6,children:Object(l.jsxs)(b.a,{onSubmit:function(e){var t;e.preventDefault(),D((t={name:c,email:j,password:E,pic:h},function(){var e=Object(g.a)(Object(x.a)().mark((function e(n,a){var r,c,s,o,i;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:w}),r=a(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,_.a.post("/api/users/profile",t,s);case 6:o=e.sent,i=o.data,n({type:N,payload:i}),n({type:m,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:L,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:[H&&Object(l.jsx)(ee,{}),J&&Object(l.jsx)(ne,{variant:"success",children:"Updated Successfully"}),Q&&Object(l.jsx)(ne,{variant:"danger",children:Q}),Object(l.jsxs)(b.a.Group,{controlId:"name",children:[Object(l.jsx)(b.a.Label,{children:"Name"}),Object(l.jsx)(b.a.Control,{type:"text",placeholder:"Enter Name",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)(b.a.Group,{controlId:"email",children:[Object(l.jsx)(b.a.Label,{children:"Email Address"}),Object(l.jsx)(b.a.Control,{type:"email",placeholder:"Enter Email",value:j,onChange:function(e){return d(e.target.value)}})]}),Object(l.jsxs)(b.a.Group,{controlId:"password",children:[Object(l.jsx)(b.a.Label,{children:"Password"}),Object(l.jsx)(b.a.Control,{type:"password",placeholder:"Enter Password",value:E,onChange:function(e){return C(e.target.value)}})]}),Object(l.jsxs)(b.a.Group,{controlId:"confirmPassword",children:[Object(l.jsx)(b.a.Label,{children:"Confirm Password"}),Object(l.jsx)(b.a.Control,{type:"password",placeholder:"Confirm Password",value:U,onChange:function(e){return k(e.target.value)}})]})," ",G&&Object(l.jsx)(ne,{variant:"danger",children:G}),Object(l.jsxs)(b.a.Group,{controlId:"pic",children:[Object(l.jsx)(b.a.Label,{children:"Change Profile Picture"}),Object(l.jsx)(b.a.File,{onChange:function(e){return function(e){if(z(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return z("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","zetanote"),t.append("cloud_name","zetanote"),fetch("https://api.cloudinary.com/v1_1/zetanote/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){y(e.url.toString()),console.log(h)})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(l.jsx)(R.a,{type:"submit",className:"smallbuttons1",children:"Update"})]})}),Object(l.jsx)(se.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(l.jsx)("img",{src:h,alt:c,className:"profilePic"})})]})})]})});var je=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(U,{setSearch:function(e){return r(e)}}),Object(l.jsxs)("main",{className:"App",children:[Object(l.jsx)(i.a,{path:"/",component:k,exact:!0}),Object(l.jsx)(i.a,{path:"/login",component:oe}),Object(l.jsx)(i.a,{path:"/register",component:ie}),Object(l.jsx)(i.a,{path:"/mynotes",component:function(e){var t=e.history;return Object(l.jsx)(ae,{search:n,history:t})}}),Object(l.jsx)(i.a,{path:"/note/:id",component:re}),Object(l.jsx)(i.a,{path:"/createnote",component:le}),";",Object(l.jsx)(i.a,{path:"/profile",component:ue})]}),Object(l.jsx)(u,{})]})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,291)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},pe=n(53),be=n(129),Oe=n(128),he=Object(pe.combineReducers)({noteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return{loading:!0};case B:return{loading:!1,notes:t.payload};case H:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case m:return{loading:!1,userInfo:t.payload};case v:return{loading:!1,error:t.payload};case S:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{loading:!0};case C:return{loading:!1,userInfo:t.payload};case I:return{loading:!1,error:t.payload};default:return e}},noteCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return{loading:!0};case J:return{loading:!1,success:!0};case W:return{loading:!1,error:t.payload};default:return e}},noteDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return{loading:!0};case Y:return{loading:!1,success:!0};case V:return{loading:!1,error:t.payload,success:!1};default:return e}},noteUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{loading:!0};case q:return{loading:!1,success:!0};case Z:return{loading:!1,error:t.payload,success:!1};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case N:return{loading:!1,userInfo:t.payload,success:!0};case L:return{loading:!1,error:t.payload,success:!1};default:return e}}}),fe={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},xe=[be.a],ge=Object(pe.createStore)(he,fe,Object(Oe.composeWithDevTools)(pe.applyMiddleware.apply(void 0,xe)));c.a.render(Object(l.jsx)(f.a,{store:ge,children:Object(l.jsx)(je,{})}),document.getElementById("root")),de()}},[[277,1,2]]]);
//# sourceMappingURL=main.2e4e0bbe.chunk.js.map