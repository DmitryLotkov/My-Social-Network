(this["webpackJsonpmy-social-network"]=this["webpackJsonpmy-social-network"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);a(72);var s=a(19),n=a.n(s),r=a(0),c=a.n(r),i=(a(77),a(24)),o=a.n(i),u=a(8),l=a(5),d=a.p+"static/media/defaultUserImage.ed37b80a.jpg",j=a(1);function b(){var e=Object(l.d)((function(e){return e.auth.data.login})),t=Object(l.d)((function(e){return e.auth.isAuth})),a=Object(l.d)((function(e){return e.ProfilePage.photo}));return Object(j.jsxs)("div",{className:o.a.headerWrapper,children:[Object(j.jsx)("img",{src:"https://themified.com/friend-finder/images/logo.png",alt:"logo"}),t?Object(j.jsxs)("div",{className:o.a.loginBlock,children:[Object(j.jsx)("img",{className:o.a.smallUserHeaderPhoto,src:null!==a&&void 0!==a?a:d,alt:"userPhoto"}),e]}):Object(j.jsx)(u.b,{className:o.a.login,to:"/login",children:"Login"})]})}function O(){return Object(j.jsx)("header",{className:o.a.headerTopLevel,children:Object(j.jsx)(b,{})})}var A=a(21),m=a.n(A),g=a(25),f=a.n(g);function p(e){return Object(j.jsxs)("div",{className:f.a.onlineFriendsWrapper,children:[Object(j.jsx)("img",{className:f.a.imgProfilePhoto,src:e.avatar,alt:"onlineFriendAvatar"}),Object(j.jsx)("span",{className:f.a.OnlineDot})]})}function h(e){var t=e.SideBar.onlineFriends.map((function(e){return Object(j.jsx)(u.b,{to:"/friends"+e.id,children:Object(j.jsx)(p,{id:e.id,avatar:e.avatar})},e.id)}));return Object(j.jsxs)("nav",{className:m.a.navWrapper,children:[Object(j.jsx)("div",{className:m.a.NavItem,children:Object(j.jsx)(u.b,{to:"/profile",style:function(e){return{color:e.isActive?"goldenrod":"black"}},children:"Profile"})}),Object(j.jsx)("div",{className:m.a.NavItem,children:Object(j.jsx)(u.b,{to:"/dialogs",style:function(e){return{color:e.isActive?"goldenrod":"black"}},children:"Messages"})}),Object(j.jsx)("div",{className:m.a.NavItem,children:Object(j.jsx)(u.b,{to:"/events",style:function(e){return{color:e.isActive?"goldenrod":"black"}},children:"Events"})}),Object(j.jsx)("div",{className:m.a.NavItem,children:Object(j.jsx)(u.b,{to:"/photos",style:function(e){return{color:e.isActive?"goldenrod":"black"}},children:"Photos"})}),Object(j.jsx)("div",{className:m.a.NavItem,children:Object(j.jsx)(u.b,{to:"/users",style:function(e){return{color:e.isActive?"goldenrod":"black"}},children:"Find Friends"})}),Object(j.jsx)("div",{className:m.a.NavItem,children:Object(j.jsx)(u.b,{to:"/settings",style:function(e){return{color:e.isActive?"goldenrod":"black"}},children:"Settings"})}),Object(j.jsxs)("div",{className:f.a.ChatBlock,children:[Object(j.jsx)("span",{className:f.a.Title,children:"Chat online"}),t]})]})}var x,E=a(4),D=a(43),v=a(27),w=a(3),N=a(7),T=a(58),S=a.n(T).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3ca3376c-f1c7-42b6-b439-a7f59c674e78"}}),k=function(e,t){return S.get("users?page=".concat(e,"&count=").concat(t))},P=function(e){return S.get("profile/ ".concat(e))},W=function(e){return S.get("profile/status/".concat(e))},I=function(e){return S.put("profile/status",{status:e})},M=function(){return S.get("auth/me")},C=function(e){return S.post("follow/".concat(e))},B=function(e){return S.delete("follow/".concat(e))};!function(e){e.SET_PROFILE="SET-PROFILE",e.ADD_POST="ADD-POST",e.SET_MY_PROFILE_PHOTO="SET-MY-PROFILE_PHOTO",e.UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT"}(x||(x={}));var y,G=function(e){return{type:"UPDATE-NEW-POST-TEXT",text:e}},Z=function(e){return{type:"SET-SOME-USER-PROFILE",profile:e}},J=function(e){return{type:"SET-STATUS",status:e}},K={NewPostText:"",postsData:[{id:Object(N.v1)(),message:"How are you?",likesCount:11},{id:Object(N.v1)(),message:"What is your name?",likesCount:16},{id:Object(N.v1)(),message:"What are you waiting for?",likesCount:11}],status:"",photo:"",profile:{fullName:"",lookingForAJob:!1,lookingForAJobDescription:"",userId:void 0,aboutMe:"",contacts:{facebook:"",github:"",instagram:"",mainLink:"",twitter:"",vk:"",website:"",youtube:""},photos:{small:"",large:""}}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.ADD_POST:return Object(w.a)(Object(w.a)({},e),{},{postsData:[].concat(Object(v.a)(e.postsData),[{id:Object(N.v1)(),message:e.NewPostText,likesCount:0}])});case"UPDATE-NEW-POST-TEXT":return Object(w.a)(Object(w.a)({},e),{},{NewPostText:t.text});case"SET-SOME-USER-PROFILE":return Object(w.a)(Object(w.a)({},e),{},{profile:t.profile});case"SET-MY-PROFILE_PHOTO":return Object(w.a)(Object(w.a)({},e),{},{photo:t.photo});case"SET-STATUS":return Object(w.a)(Object(w.a)({},e),{},{status:t.status});default:return e}},L=function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",newText:e}},Q={newMessageText:"",dialogs:[{id:Object(N.v1)(),name:"Dmitry Lomonosov",avatar:"https://themified.com/friend-finder/images/users/user-4.jpg"},{id:Object(N.v1)(),name:"Sarah Konor",avatar:"https://themified.com/friend-finder/images/users/user-3.jpg"},{id:Object(N.v1)(),name:"Anton Dovgalo",avatar:"https://themified.com/friend-finder/images/users/user-6.jpg"},{id:Object(N.v1)(),name:"Maya Vishnevskaya",avatar:"https://themified.com/friend-finder/images/users/user-2.jpg"}],messages:[{id:Object(N.v1)(),message:"What is the weather forecast for tomorrow?"},{id:Object(N.v1)(),message:"It seems to bee good)"},{id:Object(N.v1)(),message:"Do you know Sarah?"},{id:Object(N.v1)(),message:"How are you?"},{id:Object(N.v1)(),message:"What are you waiting for?"}]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-DIALOG-MESSAGE":return Object(w.a)(Object(w.a)({},e),{},{messages:[].concat(Object(v.a)(e.messages),[{id:Object(N.v1)(),message:e.newMessageText}])});case"UPDATE-NEW-MESSAGE-TEXT":return Object(w.a)(Object(w.a)({},e),{},{newMessageText:t.newText});default:return e}},V={onlineFriends:[{id:Object(N.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-4.jpg"},{id:Object(N.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-3.jpg"},{id:Object(N.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-6.jpg"},{id:Object(N.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-2.jpg"},{id:Object(N.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-7.jpg"},{id:Object(N.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-10.jpg"},{id:Object(N.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-9.jpg"},{id:Object(N.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-5.jpg"},{id:Object(N.v1)(),avatar:"https://themified.com/friend-finder/images/users/user-8.jpg"}]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return e},R=function(e){return{type:"FOLLOW",userID:e}},H=function(e){return{type:"UNFOLLOW",userID:e}},z=function(e){return{type:"SET-USERS",users:e}},q=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},X=function(e){return{type:"SET-TOTAL-USERS-COUNT",totalCount:e}},_=function(e){return{type:"IS-FETCHING",isFetching:e}},$=function(e,t){return{type:"IS-FOLLOWING-PROGRESS",followingIsProgress:e,userID:t}},ee={items:[],pageSize:7,totalCount:1,currentPage:1,isFetching:!0,following:[]},te=a(45),ae=a.n(te),se=a(59);!function(e){e.SET_USER_DATA="SET_USER_DATA"}(y||(y={}));var ne={data:{},isAuth:!1,isFetching:!0,resultCode:0},re=function(e){return{type:y.SET_USER_DATA,data:e}},ce=a(60),ie=Object(D.b)({ProfilePage:U,DialogPage:F,SideBar:Y,UsersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(w.a)(Object(w.a)({},e),{},{items:e.items.map((function(e){return e.id===t.userID?Object(w.a)(Object(w.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(w.a)(Object(w.a)({},e),{},{items:e.items.map((function(e){return e.id===t.userID?Object(w.a)(Object(w.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(w.a)(Object(w.a)({},e),{},{items:t.users});case"SET-CURRENT-PAGE":return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(w.a)(Object(w.a)({},e),{},{totalCount:t.totalCount});case"IS-FETCHING":return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case"IS-FOLLOWING-PROGRESS":return Object(w.a)(Object(w.a)({},e),{},{following:t.followingIsProgress?[].concat(Object(v.a)(e.following),[t.userID]):e.following.filter((function(e){return e!==t.userID}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.SET_USER_DATA:return Object(w.a)(Object(w.a)({},e),{},{data:t.data,isAuth:!0,isFetching:!1});default:return e}}}),oe=Object(D.c)(ie,Object(D.a)(ce.a));window.store=oe;var ue=a(17),le=a.n(ue),de=a(124);function je(e){var t=Math.ceil(e.totalUserCount/e.pageSize),a=d,s=Object(E.g)();return Object(j.jsxs)("div",{className:le.a.usersWrapper,children:[Object(j.jsx)(de.a,{color:"primary",onChange:function(t,a){e.onPageChanged(a)},size:"small",variant:"outlined",shape:"rounded",count:t,page:e.currentPage}),e.users.map((function(t){var n;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:le.a.usersBlock,children:[Object(j.jsxs)("div",{className:le.a.avatarAndFollowButton,children:[Object(j.jsx)("img",{onClick:function(){return s("/profile/".concat(t.id))},className:le.a.avatar,src:t.photos.small?t.photos.small:a,alt:"user"}),Object(j.jsx)("span",{children:t.followed?Object(j.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollowTC(t.id)},children:"Unfollow"}):Object(j.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followTC(t.id)},children:"Follow"})})]}),Object(j.jsxs)("div",{className:le.a.nameAndStatus,children:[Object(j.jsx)("h3",{className:le.a.name,children:Object(j.jsx)("div",{children:t.name})}),Object(j.jsx)("div",{className:le.a.status,children:"Status:  ".concat(null!==(n=t.status)&&void 0!==n?n:"no status")})]})]})},t.id)}))]})}var be=a(123);function Oe(){return Object(j.jsx)("div",{className:le.a.preloaderContainer,children:Object(j.jsx)(be.a,{})})}var Ae=function(e){var t=Object(l.d)((function(e){return e.auth.isAuth}));return function(a){return t?Object(j.jsx)(e,Object(w.a)({},a)):Object(j.jsx)(E.a,{to:"/login"})}},me=function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.UsersPage.items})),a=Object(l.d)((function(e){return e.UsersPage.isFetching})),s=Object(l.d)((function(e){return e.UsersPage.pageSize})),n=Object(l.d)((function(e){return e.UsersPage.currentPage})),c=Object(l.d)((function(e){return e.UsersPage.totalCount})),i=Object(l.d)((function(e){return e.UsersPage.following})),o=Ae(je);Object(r.useEffect)((function(){e(function(e,t){return function(a){a(_(!0)),k(e,t).then((function(e){a(_(!1)),a(z(e.data.items)),a(X(e.data.totalCount))}))}}(n,s))}),[n,s,e]);return Object(j.jsx)(j.Fragment,{children:a?Object(j.jsx)(Oe,{}):Object(j.jsx)(o,{onPageChanged:function(t){e(function(e,t){return function(a){a(_(!0)),a(q(t)),k(t,e).then((function(e){a(z(e.data.items)),a(X(e.data.totalCount)),a(_(!1))}))}}(s,t))},currentPage:n,totalUserCount:c,pageSize:s,users:t,followTC:function(t){e(function(e){return function(t){t($(!0,e)),C(e).then((function(a){0===a.data.resultCode&&t(R(e)),t($(!1,e))}))}}(t))},unfollowTC:function(t){e(function(e){return function(t){t($(!0,e)),B(e).then((function(a){0===a.data.resultCode&&t(H(e)),t($(!1,e))}))}}(t))},followingInProgress:i})})},ge=a(28),fe=a.n(ge),pe=a(22),he=a.n(pe),xe=a(18),Ee=c.a.memo((function(){var e=Object(l.c)(),t=Object(r.useState)(!0),a=Object(xe.a)(t,2),s=a[0],n=a[1],c=Object(l.d)((function(e){return e.ProfilePage.status})),i=Object(l.d)((function(e){return e.ProfilePage.profile.userId})),o=Object(r.useState)(c),u=Object(xe.a)(o,2),d=u[0],b=u[1],O=function(){b(c),n(!1)},A=function(){e(function(e){return function(t){I(e).then((function(a){0===a.data.resultCode&&t(J(e))}))}}(d)),n(!0)};return s&&21748!==i?Object(j.jsx)("div",{children:c}):s&&21748===i&&!c?Object(j.jsx)("div",{className:fe.a.editableDiv,onClick:O,children:"Set status"}):s&&21748===i?Object(j.jsx)("div",{className:fe.a.editableDiv,onClick:O,children:c}):Object(j.jsx)("input",{className:fe.a.input,onChange:function(e){b(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&A()},onBlur:A,type:"text",autoFocus:!0,value:d})})),De=c.a.memo((function(e){var t,a;return Object(j.jsxs)("div",{className:he.a.wrapper,children:[Object(j.jsx)("div",{className:he.a.descriptionBlock,children:Object(j.jsx)("img",{src:null!==(t=null===(a=e.profile)||void 0===a?void 0:a.photos.large)&&void 0!==t?t:d,alt:"userPhoto"})}),Object(j.jsxs)("div",{className:he.a.statusBlock,children:[Object(j.jsx)("div",{className:he.a.profileName,children:e.profile.fullName}),Object(j.jsx)("div",{className:he.a.profileStatus,children:Object(j.jsx)(Ee,{})}),Object(j.jsxs)("div",{className:he.a.lookingForAJobDescription,children:["Looking for a job status: ",e.profile.lookingForAJobDescription]}),Object(j.jsxs)("div",{className:he.a.contacts,children:[Object(j.jsx)("span",{children:"contacts: "}),Object(j.jsxs)("div",{children:["facebook: ",e.profile.contacts.facebook]}),Object(j.jsxs)("div",{children:["instagram: ",e.profile.contacts.instagram]}),Object(j.jsxs)("div",{children:["YouTube: ",e.profile.contacts.youtube]}),Object(j.jsxs)("div",{children:["Vk: ",e.profile.contacts.vk]})]})]})]})})),ve=a(65),we=a.n(ve);function Ne(e){return Object(j.jsxs)("div",{className:we.a.item,children:[Object(j.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"userPost"}),e.message,Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Like: "}),e.likeCount]})]})}var Te=a(46),Se=a.n(Te),ke=c.a.memo((function(e){var t=e.postsData.map((function(e){return Object(j.jsx)(Ne,{message:e.message,likeCount:e.likesCount},e.id)})),a=c.a.createRef();return Object(j.jsxs)("div",{className:Se.a.postBlock,children:[Object(j.jsx)("h3",{children:"My posts"}),Object(j.jsx)("div",{children:Object(j.jsx)("textarea",{ref:a,onChange:function(t){e.updateNewPostText(t.currentTarget.value)},autoFocus:!0,value:e.newPostText})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){e.addPost()},children:"Publish"})}),Object(j.jsx)("div",{className:Se.a.posts,children:t})]})})),Pe=Object(l.b)((function(e){return{newPostText:e.ProfilePage.NewPostText,postsData:e.ProfilePage.postsData}}),(function(e){return{updateNewPostText:function(t){e(G(t))},addPost:function(){e({type:x.ADD_POST}),e(G(""))}}}))(ke),We=a(66),Ie=a.n(We),Me=c.a.memo((function(){var e=Object(l.d)((function(e){return e.ProfilePage.profile}));return Object(j.jsxs)("div",{className:"".concat(fe.a.wrapper," ").concat(Ie.a.mainBox),children:[Object(j.jsx)(De,{profile:e}),Object(j.jsx)(Pe,{})]})})),Ce=c.a.memo((function(){var e=Object(E.h)(),t=Number(e.userId),a=Object(l.c)(),s=Ae(Me);return Object(r.useEffect)((function(){a(function(e){return function(t){P(e).then((function(e){t(Z(e.data))}))}}(t)),a(function(e){return function(t){W(e).then((function(e){200===e.status&&t(J(e.data))})).catch((function(){console.log("Error in getStatus")}))}}(t))}),[t,a]),Object(j.jsx)(s,{})})),Be=function(){return Object(j.jsx)("h3",{children:"Login"})},ye=a(16),Ge=a.n(ye);function Ze(e){var t=e.DialogPage.dialogs.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:e.avatar,alt:"friendAvatar"}),Object(j.jsx)(u.b,{to:"/friendDialog/"+e.id,children:e.name})]},e.id)}));return Object(j.jsx)("div",{className:Ge.a.dialog+" "+Ge.a.active,children:t})}function Je(e){return Object(j.jsx)("div",{className:Ge.a.messages,children:e.message})}function Ke(e){var t=c.a.createRef(),a=e.DialogPage.messages.map((function(e){return Object(j.jsx)(Je,{message:e.message,id:e.id},e.id)}));return Object(j.jsxs)("div",{className:Ge.a.dialogsWrapper,children:[Object(j.jsx)("div",{className:Ge.a.dialogs,children:Object(j.jsx)(Ze,{DialogPage:e.DialogPage})}),Object(j.jsxs)("div",{className:Ge.a.sendMessage,children:[Object(j.jsx)("div",{className:Ge.a.inputGroup,children:Object(j.jsx)("textarea",{className:Ge.a.textArea,onChange:function(t){e.updateNewMessageText(t.currentTarget.value)},value:e.newMessageText,autoFocus:!0,ref:t})}),Object(j.jsx)("span",{children:Object(j.jsx)("button",{onClick:function(){e.addMessageText(),e.updateNewMessageText("")},children:"Send"})})]}),Object(j.jsx)("div",{className:Ge.a.messages,children:Object(j.jsx)("div",{children:a})})]})}var Ue=function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.DialogPage})),a=Object(l.d)((function(e){return e.DialogPage.newMessageText})),s=Ae(Ke);return Object(j.jsx)(s,{newMessageText:a,DialogPage:t,updateNewMessageText:function(t){e(L(t))},addMessageText:function(){e({type:"ADD-DIALOG-MESSAGE"}),e(L(""))}})};function Le(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:"Events"})})}function Qe(){var e=Ae(Le);return Object(j.jsx)("div",{children:Object(j.jsx)(e,{})})}var Fe=a(67),Ve=a.n(Fe),Ye=function(){return Object(j.jsx)("div",{children:"Photos"})};var Re=function(){var e=Ae(Ye);return Object(j.jsx)("div",{className:Ve.a.content,children:Object(j.jsx)(e,{})})},He=c.a.memo((function(){var e=Object(l.d)((function(e){return e.auth.isFetching})),t=oe.getState(),a=Object(l.c)();return Object(r.useEffect)((function(){a(function(){var e=Object(se.a)(ae.a.mark((function e(t){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M().then((function(e){if(0===e.data.resultCode)return t(re(e.data.data)),e.data.data.id})).then((function(e){if(e)return P(e)})).then((function(e){e&&(t(Z(e.data)),t({type:"SET-MY-PROFILE_PHOTO",photo:e.data.photos.small}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[a]),e?Object(j.jsx)(Oe,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"mainContent",children:[Object(j.jsx)(h,{SideBar:t.SideBar}),Object(j.jsxs)(E.d,{children:[Object(j.jsx)(E.b,{path:"/",element:Object(j.jsx)(E.a,{to:"/profile/21748"})}),Object(j.jsx)(E.b,{path:"/login",element:Object(j.jsx)(Be,{})}),Object(j.jsx)(E.b,{path:"/profile/:userId",element:Object(j.jsx)(Ce,{})}),Object(j.jsx)(E.b,{path:"/profile",element:Object(j.jsx)(E.a,{to:"/profile/21748"})}),Object(j.jsx)(E.b,{path:"/dialogs",element:Object(j.jsx)(Ue,{})}),Object(j.jsx)(E.b,{path:"/events",element:Object(j.jsx)(Qe,{})}),Object(j.jsx)(E.b,{path:"/photos",element:Object(j.jsx)(Re,{})}),Object(j.jsx)(E.b,{path:"/users",element:Object(j.jsx)(me,{})}),Object(j.jsx)(E.b,{path:"/*",element:Object(j.jsx)("div",{children:"404"})})]})]})]})}));window.store=oe,n.a.render(Object(j.jsx)(l.a,{store:oe,children:Object(j.jsx)(u.a,{children:Object(j.jsx)(He,{})})}),document.getElementById("root"))},16:function(e,t,a){e.exports={AllMessages:"Dialogs_AllMessages__4pewI",messages:"Dialogs_messages__2FTxN",dialogs:"Dialogs_dialogs__1TcQe",active:"Dialogs_active__fQWpa",formControl:"Dialogs_formControl__1fxNh",sendMessage:"Dialogs_sendMessage__3N9F_",inputGroup:"Dialogs_inputGroup__BwM_l",textArea:"Dialogs_textArea__2Zae3"}},17:function(e,t,a){e.exports={usersWrapper:"users_usersWrapper__2NhZI",usersBlock:"users_usersBlock__30vL-",avatarAndFollowButton:"users_avatarAndFollowButton__3flk2",avatar:"users_avatar__3IP3J",nameAndStatus:"users_nameAndStatus__nYsqe",status:"users_status__2gbbh",name:"users_name__3sX1D"}},21:function(e,t,a){e.exports={navWrapper:"Navbar_navWrapper__HbHpr",NavItem:"Navbar_NavItem__3u4wb",active:"Navbar_active__2IssC",ChatBlock:"Navbar_ChatBlock__1-WE4"}},22:function(e,t,a){e.exports={wrapper:"ProfileInfo_wrapper__2zQ9G",statusBlock:"ProfileInfo_statusBlock__A6KlW",profileName:"ProfileInfo_profileName__aXVcE",profileStatus:"ProfileInfo_profileStatus__3sbu8",contacts:"ProfileInfo_contacts__3rDuc",descriptionBlock:"ProfileInfo_descriptionBlock__WC_wT"}},24:function(e,t,a){e.exports={headerTopLevel:"Header_headerTopLevel__2weLr",headerWrapper:"Header_headerWrapper__2JC-5",loginBlock:"Header_loginBlock__1rezt",smallUserHeaderPhoto:"Header_smallUserHeaderPhoto__3-GWK",login:"Header_login__2_qsa"}},25:function(e,t,a){e.exports={ChatBlock:"ChatBlock_ChatBlock__FFWkt",Title:"ChatBlock_Title__qYtbH",imgProfilePhoto:"ChatBlock_imgProfilePhoto__qg3XR",OnlineDot:"ChatBlock_OnlineDot__gbMh0",onlineFriendsWrapper:"ChatBlock_onlineFriendsWrapper__mZ0wM"}},28:function(e,t,a){e.exports={wrapper:"Profile_wrapper__3dKt0",editableDiv:"Profile_editableDiv__GFY9u",input:"Profile_input__1jMdf"}},46:function(e,t,a){e.exports={postBlock:"MyPosts_postBlock__1jfQB",posts:"MyPosts_posts__1J8DY"}},65:function(e,t,a){e.exports={item:"Post_item__1iwhA"}},66:function(e,t,a){e.exports={mainBox:"boxStyle_mainBox__1G4EF"}},67:function(e,t,a){},72:function(e,t,a){},77:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.402c4ca0.chunk.js.map