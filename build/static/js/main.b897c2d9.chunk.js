(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{11:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),s=n.n(o),a=n(4),r=n.n(a),i=(n(11),n(2)),u=function(){return Object(c.jsx)("div",{className:"flex items-center mb-5 bg-blue-600 w-full h-16 shadow-lg",children:Object(c.jsx)("h1",{className:"pl-6 text-white font-semibold text-lg",children:"Phonebook"})})},l=n(10),b=n(5),d=n(7),f=n.n(d),m="http://localhost:3001/api/contacts",j={"Access-Control-Allow-Origin":"*",Accept:"application/json;odata.metadata=full","Content-Type":"application/json"},x={getAllContacts:function(){return f.a.get(m,{headers:j}).then((function(e){return e.data}))},createContact:function(e){return f.a.post(m,e,{headers:j}).then((function(e){return e.data}))},updateContact:function(e,t){return f.a.put("".concat(m,"/").concat(e),t,{headers:j}).then((function(e){return e.data}))},deleteContact:function(e){return f.a.delete("".concat(m,"/").concat(e),{headers:j}).then((function(e){return e.data}))}},h=n(50),p={transition:"".concat(300,"ms ease-in-out"),opacity:0,marginLeft:"-5rem"},O={entering:{opacity:.95,top:"2rem",visibility:"visible"},entered:{opacity:.95,top:"2rem",visibility:"visible"},exiting:{opacity:0,top:"0rem"},exited:{opacity:0,top:"0rem",visibility:"hidden"}},g=function(e){var t,n=e.in,o=e.type,s=e.messageText,a=e.button1Text,r=e.button2Text,i=e.button1Function,u=e.button2Function;switch(o){case"confirm":t="bg-yellow-200 ring ring-yellow-400";break;case"successful":t="bg-blue-200 ring ring-blue-400";break;case"unsuccessful":t="bg-red-200 ring ring-red-400";break;default:throw Error("invalid notification type")}return Object(c.jsx)(h.a,{in:n,timeout:300,children:function(e){return Object(c.jsxs)("div",{className:"flex flex-col px-4 py-6 fixed  rounded left-2/4 h-22 w-64 md:w-80 ".concat(t),style:Object(b.a)(Object(b.a)({},p),O[e]),children:[Object(c.jsx)("h2",{className:"font-medium mb-2 text-blue-800 overflow-hidden",children:s}),"confirm"===o&&Object(c.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(c.jsx)("button",{className:"px-4 py-2 bg-red-400 transition focus:ring focus:ring-red-400 focus:outline-none hover:bg-red-300 rounded",onClick:function(){return i()},children:a}),Object(c.jsx)("button",{className:"px-4 py-2 bg-blue-400 transition focus:ring focus:ring-blue-400 focus:outline-none hover:bg-blue-300 rounded",onClick:function(){return u()},children:r})]})]})}})},w=(n(46),function(e){var t=e.props,n=Object(o.useState)(!1),s=Object(i.a)(n,2),a=s[0],r=s[1],u=Object(o.useState)(!1),d=Object(i.a)(u,2),f=d[0],m=d[1],j=Object(o.useState)(!1),h=Object(i.a)(j,2),p=h[0],O=h[1],w=Object(o.useState)(!1),N=Object(i.a)(w,2),v=N[0],y=N[1],C=Object(o.useRef)("");Object(o.useEffect)((function(){v&&(T(),O(!1))}),[v]);var T=function(){var e=t.contacts.find((function(e){return e.name===t.newName}));e=Object(b.a)(Object(b.a)({},e),{},{number:t.newNumber});var n=Object(l.a)(t.contacts).map((function(n){return n.name===t.newName?e:n}));x.updateContact(e.id,e).then((function(e){console.log(e)})),S(n)},S=function(e){t.setContactsToShow(e),t.setContacts(e),O(!1),y(!1),C.current=t.newName,r(!0),setTimeout((function(){r(!1)}),4e3),t.setNewName(""),t.setNewNumber("")};return Object(c.jsxs)("div",{className:"py-4 px-6 rounded bg-indigo-50 shadow",children:[Object(c.jsx)(g,{messageText:"".concat(C.current," is alredy added to the phonebook. Do you want to replace the old number with a new one?"),type:"confirm",in:p,button1Text:"Change",button2Text:"Cancel",button1Function:function(){return y(!0)},button2Function:function(){return O(!1)}}),Object(c.jsx)(g,{messageText:"".concat(C.current," added successfuly to the Phonebook"),type:"successful",in:a}),Object(c.jsx)(g,{messageText:"Don't submit empty credentials",type:"unsuccessful",in:f}),Object(c.jsx)("h2",{className:"mb-4 font-semibold text-blue-800 text-xl tracking-normal pt-2",children:"New Contact"}),Object(c.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!t.newName.replace(/\s/g,"").length||!t.newNumber.replace(/\s/g,"").length)return m(!0),setTimeout((function(){m(!1)}),4e3),null;var n,c;t.contacts.some((function(e){return e.name===t.newName}))?O(!0):(n={name:t.newName,number:t.newNumber},x.createContact(n).then((function(e){c=[].concat(Object(l.a)(t.contacts),[e]),S(c)})))},className:"flex flex-col",children:[Object(c.jsxs)("div",{className:"flex flex-col pr-20 md:flex-row md:gap-x-10",children:[Object(c.jsx)("div",{className:"flex flex-col py-1",children:Object(c.jsx)("input",{placeholder:"Name",value:t.newName,className:"my-2 pl-1 rounded-sm bg-indigo-50 border-indigo-300 border-b-2 outline-none",onChange:function(e){t.setNewName(e.target.value)}})}),Object(c.jsx)("div",{className:"flex flex-col py-1",children:Object(c.jsx)("input",{placeholder:"Number",value:t.newNumber,className:"mt-2 pl-1 rounded-sm bg-indigo-50 border-indigo-300 border-b-2 outline-none",onChange:function(e){t.setNewNumber(e.target.value)}})})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",className:"mt-6\r bg-blue-600 rounded font-semibold text-gray-2\r 00  mr-4 py-1 w-full text-white outline-none transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring",children:"Add"})})]})]})}),N=function(e){var t=e.contact,n=e.setContactsToShow,s=e.setContacts,a=Object(o.useState)(!1),r=Object(i.a)(a,2),u=r[0],l=r[1],b=Object(o.useState)(!1),d=Object(i.a)(b,2),f=d[0],m=d[1],j=Object(o.useState)(!1),h=Object(i.a)(j,2),p=h[0],O=h[1];Object(o.useEffect)((function(){m(!1),setTimeout((function(){O(!1)}),4e3)}),[p]),Object(o.useEffect)((function(){f&&(l(!1),setTimeout((function(){f&&w()}),300))}),[f]);var w=function(){x.deleteContact(t.id).then((function(){s((function(e){return e.filter((function(e){return e.id!==t.id}))})),n((function(e){return e.filter((function(e){return e.id!==t.id}))}))})).catch((function(e){O(!0)}))};return Object(c.jsxs)("div",{className:"flex justify-between py-4",children:[Object(c.jsx)(g,{messageText:"Information of ".concat(t.name," has alredy been removed from server"),type:"unsuccessful",in:p}),Object(c.jsx)(g,{messageText:"Are you sure you want to delete ".concat(t.name," from the Phonebook?"),type:"confirm",in:u,button1Text:"Delete",button2Text:"Cancel",button1Function:function(){return m(!0)},button2Function:function(){return l(!1)}}),Object(c.jsxs)("div",{className:"flex overflow-hidden w-full items-center",children:[Object(c.jsx)("p",{className:"flex p-2 mr-2 text-blue-500 tracking-wider text-lg font-semibold rounded max-w-3/4 truncate",children:t.name},t.id),Object(c.jsx)("p",{className:"tracking-wider border-l-2 px-4 overflow-auto",children:t.number})]}),Object(c.jsx)("button",{onClick:function(){return l(!0)},className:"transition-colors duration-200 p-2 ring-red-200 focus:ring focus:outline-none bg-red-400 rounded hover:bg-red-300",children:Object(c.jsx)("img",{className:"w-4",src:"https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png",alt:"delete_contact"})})]})},v=function(e){var t=e.props;return Object(c.jsx)("div",{className:"flex flex-col mt-4 divide-y",children:0!==t.contactsToShow.length?t.contactsToShow.map((function(e){return Object(c.jsx)(N,{contact:{id:e.id,name:e.name,number:e.number},setContactsToShow:t.setContactsToShow,setContacts:t.setContacts},e.id)})):Object(c.jsx)("h1",{className:"text-gray-400 text-center text-lg mt-20",children:"There are no contacts"})})},y=function(e){var t=e.props,n=t.contacts,s=t.setContactsToShow,a=Object(o.useState)(""),r=Object(i.a)(a,2),u=r[0],l=r[1],b=Object(o.useRef)(void 0);b.current=n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return Object(o.useEffect)((function(){s(b.current)}),[u,s]),Object(c.jsxs)("div",{className:"flex flex-col justify-between bg-purple-100 p-4 rounded shadow",children:[Object(c.jsx)("p",{className:"tracking-normal font-semibold text-purple-600 mb-3",children:"Filter Contacts"}),Object(c.jsx)("form",{className:"flex flex-col",children:Object(c.jsx)("input",{type:"text",value:u,onChange:function(e){e.preventDefault(),l(e.target.value)},className:"bg-purple-100 border-b-2 mt-2 border-purple-300 outline-none"})})]})},C=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(o.useState)([]),r=Object(i.a)(a,2),l=r[0],b=r[1],d=Object(o.useState)(""),f=Object(i.a)(d,2),m=f[0],j=f[1],h=Object(o.useState)(""),p=Object(i.a)(h,2),O=p[0],g=p[1];return Object(o.useEffect)((function(){x.getAllContacts().then((function(e){s(e),b(e)}))}),[s,b]),Object(c.jsxs)("div",{className:"pb-4",children:[Object(c.jsx)(u,{}),Object(c.jsxs)("div",{className:"flex flex-col px-6 pt-2",children:[Object(c.jsxs)("div",{className:"flex flex-col gap-y-7 gap-x-5 md:flex-row md:justify-between",children:[Object(c.jsx)(w,{props:{newName:m,setNewName:j,newNumber:O,setNewNumber:g,contacts:n,setContacts:s,setContactsToShow:b}}),Object(c.jsx)(y,{props:{contacts:n,setContactsToShow:b}})]}),Object(c.jsx)(v,{props:{contactsToShow:l,setContactsToShow:b,setContacts:s}})]})]})},T=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(C,{})})},S=document.getElementById("root");r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(T,{})}),S)}},[[47,1,2]]]);
//# sourceMappingURL=main.b897c2d9.chunk.js.map