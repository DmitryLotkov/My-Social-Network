(this["webpackJsonpmy-social-network"]=this["webpackJsonpmy-social-network"]||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);n(84);var a,r=n(21),s=n.n(r),c=n(0),i=n.n(c),o=(n(89),n(32)),l=n.n(o),u=n(5),d=n(4),j=n(3),b=n(68),f=n.n(b).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3ca3376c-f1c7-42b6-b439-a7f59c674e78"}}),O=function(e,t){return f.get("users?page=".concat(e,"&count=").concat(t))},m=function(e){return f.get("profile/".concat(e))},h=function(e){return f.get("profile/status/".concat(e))},p=function(e){return f.put("profile/status",{status:e})},g=function(){return f.get("auth/me")},v=function(e){return f.post("follow/".concat(e))},x=function(e){return f.delete("follow/".concat(e))},_=function(e){return f.post("auth/login",e)},P=function(){return f.delete("/auth/login")};!function(e){e.AUTH_SET_IS_LOGGED_IN="SET-IS-LOGGED-IN",e.AUTH_SET_IS_INITIALIZED="SET-IS-INITIALIZED",e.AUTH_SET_PROFILE_DATA="SET-PROFILE-DATA"}(a||(a={}));var S={data:{id:0,email:"",login:""},isInitialized:!1,isLoggedIn:!1},I=function(e){return{type:a.AUTH_SET_IS_LOGGED_IN,isLoggedIn:e}},T=function(e){return{type:a.AUTH_SET_IS_INITIALIZED,isInitialized:e}},E=function(e){return{type:a.AUTH_SET_PROFILE_DATA,data:e}},N=n(49),A=n.n(N),k=n.p+"static/media/defaultUserImage.ed37b80a.jpg",w=n(1),D=i.a.memo((function(){var e=Object(d.c)((function(e){return e.ProfilePage.photo})),t=Object(d.c)((function(e){return e.Auth.data.login}));return Object(w.jsxs)("div",{className:A.a.myProfilePhotoWrapper,children:[Object(w.jsx)("img",{className:A.a.mySmallPhoto,src:e||k,alt:"userPhoto"}),Object(w.jsx)("div",{className:A.a.userName,children:t})]})}));function C(){var e=Object(u.g)(),t=Object(d.b)(),n=Object(d.c)((function(e){return e.Auth.isLoggedIn}));return Object(w.jsxs)("div",{className:l.a.headerContent,children:[Object(w.jsx)("img",{src:"https://templates.envytheme.com/zust/default/assets/images/logo.png",alt:"logo"}),Object(w.jsxs)("div",{className:l.a.loginBlock,children:[n&&Object(w.jsx)(D,{}),n&&Object(w.jsx)("div",{className:l.a.login,onClick:function(){t((function(e){P().then((function(t){0===t.data.resultCode&&e(I(!1))})).catch((function(e){console.log(e.message)}))})),e("/login")},children:"Log out"})]})]})}function y(){return Object(w.jsx)("header",{className:l.a.headerWrapper,children:Object(w.jsx)(C,{})})}var F=n(25),L=n.n(F),B=n(29),U=n.n(B),W=n(9);function R(e){return Object(w.jsxs)("div",{className:U.a.onlineFriendsWrapper,children:[Object(w.jsx)("img",{className:U.a.imgProfilePhoto,src:e.avatar,alt:"onlineFriendAvatar"}),Object(w.jsx)("span",{className:U.a.OnlineDot})]})}function M(e){var t=e.SideBar.onlineFriends.map((function(e){return Object(w.jsx)(W.b,{to:"/friends"+e.id,children:Object(w.jsx)(R,{id:e.id,avatar:e.avatar})},e.id)}));return Object(w.jsxs)("nav",{className:L.a.navWrapper,children:[Object(w.jsx)("div",{className:L.a.NavItem,children:Object(w.jsx)(W.b,{to:"/profile",style:function(e){return{color:e.isActive?"goldenrod":"black"}},children:"Profile"})}),Object(w.jsx)("div",{className:L.a.NavItem,children:Object(w.jsx)(W.b,{to:"/dialogs",style:function(e){return{color:e.isActive?"goldenrod":"black"}},children:"Messages"})}),Object(w.jsx)("div",{className:L.a.NavItem,children:Object(w.jsx)(W.b,{to:"/events",style:function(e){return{color:e.isActive?"goldenrod":"black"}},children:"Events"})}),Object(w.jsx)("div",{className:L.a.NavItem,children:Object(w.jsx)(W.b,{to:"/photos",style:function(e){return{color:e.isActive?"goldenrod":"black"}},children:"Photos"})}),Object(w.jsx)("div",{className:L.a.NavItem,children:Object(w.jsx)(W.b,{to:"/users",style:function(e){return{color:e.isActive?"goldenrod":"black"}},children:"Find Friends"})}),Object(w.jsx)("div",{className:L.a.NavItem,children:Object(w.jsx)(W.b,{to:"/settings",style:function(e){return{color:e.isActive?"goldenrod":"black"}},children:"Settings"})}),Object(w.jsxs)("div",{className:U.a.ChatBlock,children:[Object(w.jsx)("span",{className:U.a.Title,children:"Chat online"}),t]})]})}var G,H=n(51),z=n(31),Z=n(8);!function(e){e.SET_PROFILE="SET-PROFILE",e.ADD_POST="ADD-POST",e.SET_MY_PROFILE_PHOTO="SET-MY-PROFILE_PHOTO",e.UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT",e.SET_SOME_USER_PROFILE="SET-SOME-USER-PROFILE",e.SET_STATUS="SET-STATUS"}(G||(G={}));var J=function(e){return{type:G.SET_SOME_USER_PROFILE,profile:e}},q=function(e){return{type:G.SET_STATUS,status:e}},Y={postsData:[{id:Object(Z.v1)(),message:"Do you have a job for me? What if I find it?",likesCount:0},{id:Object(Z.v1)(),message:"I want to be a serious frontend developer.",likesCount:0},{id:Object(Z.v1)(),message:"What is the good weather today,isn't it?",likesCount:0}],status:"",photo:"",profile:{fullName:"",lookingForAJob:!1,lookingForAJobDescription:"",userId:21748,aboutMe:"",contacts:{facebook:"",github:"",instagram:"",mainLink:"",twitter:"",vk:"",website:"",youtube:""},photos:{small:"",large:""}}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.ADD_POST:return Object(j.a)(Object(j.a)({},e),{},{postsData:[].concat(Object(z.a)(e.postsData),[{id:Object(Z.v1)(),message:t.data,likesCount:0}])});case"SET-SOME-USER-PROFILE":return Object(j.a)(Object(j.a)({},e),{},{profile:t.profile});case"SET-MY-PROFILE_PHOTO":return Object(j.a)(Object(j.a)({},e),{},{photo:t.photo});case"SET-STATUS":return Object(j.a)(Object(j.a)({},e),{},{status:t.status});default:return e}},X={dialogs:[{id:Object(Z.v1)(),name:"Boris Jonson",avatar:"https://themified.com/friend-finder/images/users/user-4.jpg",message:"What is the weather forecast for tomorrow?"}],messages:[{id:Object(Z.v1)(),message:"Looks like it will be sunny tomorrow=)"}]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-DIALOG-MESSAGE":return Object(j.a)(Object(j.a)({},e),{},{messages:[].concat(Object(z.a)(e.messages),[{id:Object(Z.v1)(),message:t.text}])});default:return e}},Q={onlineFriends:[{id:Object(Z.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-4.jpg"},{id:Object(Z.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-3.jpg"},{id:Object(Z.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-6.jpg"},{id:Object(Z.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-2.jpg"},{id:Object(Z.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-7.jpg"},{id:Object(Z.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-10.jpg"},{id:Object(Z.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-9.jpg"},{id:Object(Z.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-5.jpg"},{id:Object(Z.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-8.jpg"}]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q;return e},ee=function(e){return{type:"FOLLOW",userID:e}},te=function(e){return{type:"UNFOLLOW",userID:e}},ne=function(e){return{type:"SET-USERS",users:e}},ae=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},re=function(e){return{type:"SET-TOTAL-USERS-COUNT",totalCount:e}},se=function(e){return{type:"IS-FETCHING",isFetching:e}},ce=function(e,t){return{type:"IS-FOLLOWING-PROGRESS",followingIsProgress:e,userID:t}},ie={items:[],pageSize:7,totalCount:1,currentPage:1,isFetching:!0,following:[]},oe=n(69),le=Object(H.b)({ProfilePage:K,DialogPage:V,SideBar:$,UsersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{items:e.items.map((function(e){return e.id===t.userID?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(j.a)(Object(j.a)({},e),{},{items:e.items.map((function(e){return e.id===t.userID?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(j.a)(Object(j.a)({},e),{},{items:t.users});case"SET-CURRENT-PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(j.a)(Object(j.a)({},e),{},{totalCount:t.totalCount});case"IS-FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case"IS-FOLLOWING-PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{following:t.followingIsProgress?[].concat(Object(z.a)(e.following),[t.userID]):e.following.filter((function(e){return e!==t.userID}))});default:return e}},Auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.AUTH_SET_IS_LOGGED_IN:return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:t.isLoggedIn});case a.AUTH_SET_IS_INITIALIZED:return Object(j.a)(Object(j.a)({},e),{},{isInitialized:t.isInitialized});case a.AUTH_SET_PROFILE_DATA:return Object(j.a)(Object(j.a)({},e),{},{data:t.data});default:return e}}}),ue=Object(H.c)(le,Object(H.a)(oe.a));window.store=ue;var de=n(26),je=n.n(de),be=n(135);function fe(e){var t=Math.ceil(e.totalUserCount/e.pageSize),n=k,a=Object(u.g)();return Object(w.jsxs)("div",{className:je.a.usersWrapper,children:[Object(w.jsx)(be.a,{color:"primary",onChange:function(t,n){e.onPageChanged(n)},size:"small",variant:"outlined",shape:"rounded",count:t,page:e.currentPage}),e.users.map((function(t){var r;return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:je.a.usersBlock,children:[Object(w.jsxs)("div",{className:je.a.avatarAndFollowButton,children:[Object(w.jsx)("img",{onClick:function(){return a("/profile/".concat(t.id))},className:je.a.avatar,src:t.photos.small?t.photos.small:n,alt:"user"}),Object(w.jsx)("span",{children:t.followed?Object(w.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollowTC(t.id)},children:"Unfollow"}):Object(w.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followTC(t.id)},children:"Follow"})})]}),Object(w.jsxs)("div",{className:je.a.nameAndStatus,children:[Object(w.jsx)("h3",{className:je.a.name,children:Object(w.jsx)("div",{children:t.name})}),Object(w.jsx)("div",{className:je.a.status,children:"Status:  ".concat(null!==(r=t.status)&&void 0!==r?r:"no status")})]})]})},t.id)}))]})}var Oe=n(74),me=n.n(Oe),he=n(134);function pe(){return Object(w.jsx)("div",{className:me.a.preloaderContainer,children:Object(w.jsx)(he.a,{})})}var ge=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.UsersPage.items})),n=Object(d.c)((function(e){return e.UsersPage.isFetching})),a=Object(d.c)((function(e){return e.UsersPage.pageSize})),r=Object(d.c)((function(e){return e.UsersPage.currentPage})),s=Object(d.c)((function(e){return e.UsersPage.totalCount})),i=Object(d.c)((function(e){return e.UsersPage.following}));Object(c.useEffect)((function(){e(function(e,t){return function(n){n(se(!0)),O(e,t).then((function(e){n(se(!1)),n(ne(e.data.items)),n(re(e.data.totalCount))}))}}(r,a))}),[r,a,e]);return Object(w.jsx)(w.Fragment,{children:n?Object(w.jsx)(pe,{}):Object(w.jsx)(fe,{onPageChanged:function(t){e(function(e,t){return function(n){n(se(!0)),n(ae(t)),O(t,e).then((function(e){n(ne(e.data.items)),n(re(e.data.totalCount)),n(se(!1))}))}}(a,t))},currentPage:r,totalUserCount:s,pageSize:a,users:t,followTC:function(t){e(function(e){return function(t){t(ce(!0,e)),v(e).then((function(n){0===n.data.resultCode&&t(ee(e)),t(ce(!1,e))}))}}(t))},unfollowTC:function(t){e(function(e){return function(t){t(ce(!0,e)),x(e).then((function(n){0===n.data.resultCode&&t(te(e)),t(ce(!1,e))}))}}(t))},followingInProgress:i})})},ve=n(33),xe=n.n(ve),_e=n(27),Pe=n.n(_e),Se=n(18),Ie=i.a.memo((function(){var e=Object(d.b)(),t=Object(c.useState)(!0),n=Object(Se.a)(t,2),a=n[0],r=n[1],s=Object(d.c)((function(e){return e.ProfilePage.status})),i=Object(d.c)((function(e){return e.ProfilePage.profile.userId})),o=Object(c.useState)(s),l=Object(Se.a)(o,2),u=l[0],j=l[1],b=function(){j(s),r(!1)},f=function(){e(function(e){return function(t){p(e).then((function(n){0===n.data.resultCode&&t(q(e))}))}}(u)),r(!0)};return a&&21748!==i?Object(w.jsx)("div",{children:s}):a&&21748===i&&!s?Object(w.jsx)("div",{className:xe.a.editableDiv,onClick:b,children:"Set status"}):a&&21748===i?Object(w.jsx)("div",{className:xe.a.editableDiv,onClick:b,children:s}):Object(w.jsx)("input",{className:xe.a.input,onChange:function(e){j(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&f()},onBlur:f,type:"text",autoFocus:!0,value:u})})),Te=i.a.memo((function(e){var t,n;return Object(w.jsxs)("div",{className:Pe.a.wrapper,children:[Object(w.jsx)("div",{className:Pe.a.descriptionBlock,children:Object(w.jsx)("img",{src:null!==(t=null===(n=e.profile)||void 0===n?void 0:n.photos.large)&&void 0!==t?t:k,alt:"userPhoto"})}),Object(w.jsxs)("div",{className:Pe.a.statusBlock,children:[Object(w.jsx)("div",{className:Pe.a.profileName,children:e.profile.fullName}),Object(w.jsx)("div",{className:Pe.a.profileStatus,children:Object(w.jsx)(Ie,{})}),Object(w.jsxs)("div",{className:Pe.a.lookingForAJobDescription,children:["Looking for a job status: ",e.profile.lookingForAJobDescription]}),Object(w.jsxs)("div",{className:Pe.a.contacts,children:[Object(w.jsx)("span",{children:"contacts: "}),Object(w.jsxs)("div",{children:["facebook: ",e.profile.contacts.facebook]}),Object(w.jsxs)("div",{children:["instagram: ",e.profile.contacts.instagram]}),Object(w.jsxs)("div",{children:["YouTube: ",e.profile.contacts.youtube]}),Object(w.jsxs)("div",{children:["Vk: ",e.profile.contacts.vk]})]})]})]})})),Ee=n(75),Ne=n.n(Ee),Ae=n(54),ke=n.n(Ae);function we(e){var t=Object(c.useState)(),n=Object(Se.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){r(Math.round(1e3*Math.random()))}),[]),Object(w.jsxs)("div",{className:ke.a.itemWrapper,children:[Object(w.jsx)("div",{className:ke.a.userAndLoginBlock,children:Object(w.jsx)(D,{})}),Object(w.jsx)("div",{children:e.message}),Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{children:"Like: "}),0!==e.likeCount?e.likeCount:a]})]})}var De=n(55),Ce=n.n(De),ye=n(46),Fe=n(56),Le=n.n(Fe),Be="What's new with you?",Ue="Type a message",We=i.a.memo((function(e){var t=Object(ye.a)({initialValues:{text:""},validate:function(e){var t={};return e.text||(t.text="Enter a message"),e.text.length>=500&&(t.text="Max length of message is ".concat(500," symbols.")),t},onSubmit:function(t,n){var a=n.resetForm;""!==t.text&&e.callBack(t.text),a()}});return Object(w.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(w.jsxs)("div",{className:Le.a.formWrapper,children:[Object(w.jsx)("textarea",Object(j.a)(Object(j.a)({className:Le.a.textArea,maxLength:1e3,placeholder:e.placeholderText},t.getFieldProps("text")),{},{autoFocus:!0,onBlur:function(){return t.errors.text=void 0}})),Object(w.jsx)("div",{children:Object(w.jsx)("button",{type:"submit",children:"Publish"})})]}),t.errors.text&&Object(w.jsxs)("div",{style:{color:"red"},children:[" ",t.errors.text]})]})})),Re=i.a.memo((function(e){var t,n=null===(t=e.postsData)||void 0===t?void 0:t.map((function(e){return Object(w.jsx)(we,{message:e.message,likeCount:e.likesCount},e.id)}));return Object(w.jsxs)("div",{className:Ce.a.postBlock,children:[Object(w.jsx)("h3",{children:"My posts"}),Object(w.jsx)(We,{placeholderText:e.placeholderText,callBack:e.callBack}),Object(w.jsx)("div",{className:Ce.a.posts,children:n})]})})),Me=i.a.memo((function(e){var t=Object(d.c)((function(e){return e.ProfilePage.postsData})),n=Object(d.c)((function(e){return e.ProfilePage.profile})),a=Object(d.b)();return Object(w.jsxs)("div",{className:"".concat(xe.a.wrapper," ").concat(Ne.a.mainBox),children:[Object(w.jsx)(Te,{profile:n}),21748===e.userID&&Object(w.jsx)(Re,{placeholderText:Be,callBack:function(e){return a((t=e,{type:G.ADD_POST,data:t}));var t},postsData:t})]})})),Ge=i.a.memo((function(){var e=Object(u.h)(),t=Number(e.userId),n=Object(d.b)();return Object(c.useEffect)((function(){n(function(e){return function(t){m(e).then((function(e){t(J(e.data))})).catch((function(){console.log("Error in getProfile")}))}}(t)),n(function(e){return function(t){h(e).then((function(e){200===e.status&&t(q(e.data))})).catch((function(){console.log("Error in getStatus")}))}}(t))}),[t,n]),Object(w.jsx)(Me,{userID:t})})),He=n(24),ze=n.n(He);function Ze(e){var t=e.DialogPage.dialogs.map((function(e){return Object(w.jsxs)("div",{className:ze.a.dialogItem,children:[Object(w.jsx)("div",{className:ze.a.userAvatarAndName,children:Object(w.jsxs)(W.b,{to:"/friendDialog/"+e.id,children:[Object(w.jsx)("img",{src:e.avatar,alt:"friendAvatar"}),e.name]})}),Object(w.jsx)("div",{children:e.message})]},e.id)}));return Object(w.jsx)(w.Fragment,{children:t})}function Je(e){return Object(w.jsxs)("div",{className:ze.a.messagesWrapper,children:[Object(w.jsx)("div",{className:ze.a.dialogItem,children:e.message}),Object(w.jsx)(D,{})]})}var qe=i.a.memo((function(e){var t=Object(d.b)(),n=e.DialogPage.messages.map((function(e){return Object(w.jsx)(Je,{message:e.message,id:e.id},e.id)})),a=Object(c.useCallback)((function(e){t(function(e){return{type:"ADD-DIALOG-MESSAGE",text:e}}(e))}),[t]);return Object(w.jsxs)("div",{className:ze.a.dialogsWrapper,children:[Object(w.jsx)(Ze,{DialogPage:e.DialogPage}),n,Object(w.jsx)(We,{callBack:a,placeholderText:Ue})]})})),Ye=function(){var e=Object(d.c)((function(e){return e.DialogPage}));return Object(w.jsx)(qe,{DialogPage:e})};function Ke(){return Object(w.jsx)("div",{children:Object(w.jsx)("div",{children:"Events"})})}function Xe(){return Object(w.jsx)("div",{children:Object(w.jsx)(Ke,{})})}var Ve=n(78),Qe=n.n(Ve),$e=function(){return Object(w.jsx)("div",{children:"Photos"})};var et=function(){return Object(w.jsx)("div",{className:Qe.a.content,children:Object(w.jsx)($e,{})})},tt=function(){var e=Object(d.c)((function(e){return e.Auth.isLoggedIn})),t=Object(d.b)(),n=Object(ye.a)({validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password.length<3&&(t.password="Invalid password length"),e.password||(t.password="Password required"),t},initialValues:{email:"",password:"",rememberMe:!0},onSubmit:function(e){var a;t((a=e,function(e){_(a).then((function(t){0===t.data.resultCode&&e(I(!0))})).catch((function(e){console.log(e.message)}))})),n.resetForm()}});return e?Object(w.jsx)(u.a,{to:"/"}):Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:"Login"}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("p",{children:["To log in get registered ",Object(w.jsx)("a",{href:"https://social-network.samuraijs.com/signUp",children:"here"})]}),Object(w.jsx)("p",{children:"or use common test accounts credentials:"}),Object(w.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(w.jsx)("p",{children:"Password: free"})]}),Object(w.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(w.jsx)("div",{children:Object(w.jsx)("input",Object(j.a)({placeholder:"email"},n.getFieldProps("email")))}),n.touched.password&&n.errors.email?Object(w.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(w.jsx)("div",{children:Object(w.jsx)("input",Object(j.a)({type:"password",placeholder:"Password"},n.getFieldProps("password")))}),n.touched.password&&n.errors.password?Object(w.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(w.jsx)("div",{children:Object(w.jsxs)("label",{children:[Object(w.jsx)("input",Object(j.a)(Object(j.a)({type:"checkbox"},n.getFieldProps("rememberMe")),{},{checked:n.values.rememberMe})),"Remember me"]})}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{type:"submit",children:"Login"})})]})]})},nt=function(){var e=ue.getState(),t=Object(d.b)(),n=Object(d.c)((function(e){return e.ProfilePage.profile.userId})),a=Object(d.c)((function(e){return e.Auth.isLoggedIn})),r=Object(d.c)((function(e){return e.Auth.isInitialized}));return Object(c.useEffect)((function(){t((function(e){g().then((function(t){0===t.data.resultCode&&(e(I(!0)),e(E(t.data.data)))})).catch((function(e){console.log(e.message)})).finally((function(){e(T(!0))}))}))}),[t]),r?Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(y,{}),a?Object(w.jsxs)("div",{className:"mainContent",children:[Object(w.jsx)(M,{SideBar:e.SideBar}),Object(w.jsxs)(u.d,{children:[Object(w.jsx)(u.b,{path:"/",element:Object(w.jsx)(u.a,{to:"/profile/".concat(n)})}),Object(w.jsx)(u.b,{path:"/login",element:Object(w.jsx)(tt,{})}),Object(w.jsx)(u.b,{path:"/profile/:userId",element:Object(w.jsx)(Ge,{})}),Object(w.jsx)(u.b,{path:"/profile",element:Object(w.jsx)(u.a,{to:"/profile/".concat(n)})}),Object(w.jsx)(u.b,{path:"/dialogs",element:Object(w.jsx)(Ye,{})}),Object(w.jsx)(u.b,{path:"/events",element:Object(w.jsx)(Xe,{})}),Object(w.jsx)(u.b,{path:"/photos",element:Object(w.jsx)(et,{})}),Object(w.jsx)(u.b,{path:"/users",element:Object(w.jsx)(ge,{})}),Object(w.jsx)(u.b,{path:"/*",element:Object(w.jsx)("div",{children:"404"})})]})]}):Object(w.jsx)(tt,{})]}):Object(w.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(w.jsx)(he.a,{})})};window.store=ue,s.a.render(Object(w.jsx)(d.a,{store:ue,children:Object(w.jsx)(W.a,{children:Object(w.jsx)(nt,{})})}),document.getElementById("root"))},24:function(e,t,n){e.exports={dialogsWrapper:"Dialogs_dialogsWrapper__3F0bp",dialogItem:"Dialogs_dialogItem__2sb9K",userAvatarAndName:"Dialogs_userAvatarAndName__3RqOE",messagesWrapper:"Dialogs_messagesWrapper__3fn-w"}},25:function(e,t,n){e.exports={navWrapper:"Navbar_navWrapper__HbHpr",NavItem:"Navbar_NavItem__3u4wb",active:"Navbar_active__2IssC",ChatBlock:"Navbar_ChatBlock__1-WE4"}},26:function(e,t,n){e.exports={usersWrapper:"users_usersWrapper__2NhZI",usersBlock:"users_usersBlock__30vL-",avatarAndFollowButton:"users_avatarAndFollowButton__3flk2",avatar:"users_avatar__3IP3J",nameAndStatus:"users_nameAndStatus__nYsqe",status:"users_status__2gbbh",name:"users_name__3sX1D"}},27:function(e,t,n){e.exports={wrapper:"ProfileInfo_wrapper__2zQ9G",statusBlock:"ProfileInfo_statusBlock__A6KlW",profileName:"ProfileInfo_profileName__aXVcE",profileStatus:"ProfileInfo_profileStatus__3sbu8",contacts:"ProfileInfo_contacts__3rDuc",descriptionBlock:"ProfileInfo_descriptionBlock__WC_wT"}},29:function(e,t,n){e.exports={ChatBlock:"ChatBlock_ChatBlock__5ewrq",Title:"ChatBlock_Title__YfUmN",imgProfilePhoto:"ChatBlock_imgProfilePhoto__dibQ_",OnlineDot:"ChatBlock_OnlineDot__2krZz",onlineFriendsWrapper:"ChatBlock_onlineFriendsWrapper__14FnN"}},32:function(e,t,n){e.exports={headerWrapper:"Header_headerWrapper__2JC-5",headerContent:"Header_headerContent__1KPAQ",loginBlock:"Header_loginBlock__1rezt",login:"Header_login__2_qsa"}},33:function(e,t,n){e.exports={wrapper:"Profile_wrapper__3dKt0",editableDiv:"Profile_editableDiv__GFY9u",input:"Profile_input__1jMdf"}},49:function(e,t,n){e.exports={myProfilePhotoWrapper:"MyProfilePhoto_myProfilePhotoWrapper__3ZNPd",mySmallPhoto:"MyProfilePhoto_mySmallPhoto__v9qAS"}},54:function(e,t,n){e.exports={itemWrapper:"Post_itemWrapper__1z8ce",userAndLoginBlock:"Post_userAndLoginBlock__2x_uT"}},55:function(e,t,n){e.exports={postBlock:"MyPosts_postBlock__sox7b",posts:"MyPosts_posts__2zln9"}},56:function(e,t,n){e.exports={formWrapper:"TextAreaForm_formWrapper__2lVua",textArea:"TextAreaForm_textArea__2ZXO2"}},74:function(e,t,n){e.exports={preloaderContainer:"Preloader_preloaderContainer__13SXq"}},75:function(e,t,n){e.exports={mainBox:"boxStyle_mainBox__24wr7"}},78:function(e,t,n){},84:function(e,t,n){},89:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.2228652c.chunk.js.map