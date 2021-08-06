(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={item:"ContactListItem_item__17pMD",button:"ContactListItem_button__1Jc_I"}},18:function(t,e,n){t.exports={label:"Filter_label__zr79B",input:"Filter_input__3J05a"}},22:function(t,e,n){t.exports={section:"Section_section__BQ7hl"}},23:function(t,e,n){t.exports={list:"ContactList_list__1sQ3A"}},38:function(t,e,n){"use strict";n.r(e);var a,c=n(0),o=n.n(c),r=n(8),i=n.n(r),s=n(5),l=n(19),u=n(11),b=n(3),d=n(20),j=n(7),m=n(2),h=n(39),p={addContact:Object(b.b)("phonebook-add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(h.a)(),name:e,number:n}}})),deleteContact:Object(b.b)("phonebook-delete"),filterContacts:Object(b.b)("phonebook-filter")},O=Object(b.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(j.a)(a,p.addContact,(function(t,e){var n=e.payload;return[].concat(Object(u.a)(t),[n])})),Object(j.a)(a,p.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),f=Object(b.c)("",Object(j.a)({},p.filterContacts,(function(t,e){return e.payload}))),C=Object(m.b)({phonebookContacts:O,phonebookFilter:f}),_=n(4),x=n(21),v={key:"contacts",storage:n.n(x).a,blacklist:["phonebookFilter"]},g=[].concat(Object(u.a)(Object(b.d)({serializableCheck:{ignoredActions:[_.a,_.f,_.b,_.c,_.d,_.e]}})),[d.logger]),k=Object(b.a)({reducer:Object(_.g)(v,C),middleware:g,devTools:!0}),y={store:k,persistor:Object(_.h)(k)},F=(n(36),n(9)),N=n(10),A=n(13),S=n(12),w=n(22),z=n.n(w),B=n(1),I=function(t){var e=t.title,n=t.children;return Object(B.jsxs)("section",{className:z.a.section,children:[Object(B.jsx)("h2",{children:e}),n]})},J=n(6),L=n.n(J),q=function(t){Object(A.a)(n,t);var e=Object(S.a)(n);function n(){var t;Object(F.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.reset=function(){t.setState({name:"",number:""})},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmitForm=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t}return Object(N.a)(n,[{key:"render",value:function(){var t=Object(h.a)(),e=Object(h.a)();return Object(B.jsxs)("form",{onSubmit:this.handleSubmitForm,className:L.a.form_contact,children:[Object(B.jsxs)("label",{htmlFor:t,className:L.a.label,children:["Name",Object(B.jsx)("input",{type:"text",id:t,onChange:this.handleChange,value:this.state.name,className:L.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(B.jsxs)("label",{htmlFor:e,className:L.a.label,children:["Number",Object(B.jsx)("input",{type:"tel",id:e,onChange:this.handleChange,value:this.state.number,className:L.a.input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(B.jsx)("button",{type:"submit",className:L.a.button,children:"Add contact"})]})}}]),n}(c.Component),D=Object(s.b)(null,(function(t){return{onSubmit:function(e,n){return t(p.addContact(e,n))}}}))(q),M=n(23),Z=n.n(M),E=n(17),H=n.n(E),Q=function(t){var e=t.contacts,n=t.deleteContact;return e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(B.jsxs)("li",{className:H.a.item,children:[Object(B.jsxs)("span",{children:[a,": ",c]}),Object(B.jsx)("button",{onClick:function(){return n(e)},type:"button",className:H.a.button,children:"Delete"})]},e)}))},T=Object(s.b)((function(t){return{contacts:function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)||t.number.includes(e)}))}(t.phonebookContacts,t.phonebookFilter)}}),(function(t){return{deleteContacts:function(e){return t(p.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.deleteContacts;return Object(B.jsx)("ul",{className:Z.a.list,children:Object(B.jsx)(Q,{contacts:e,deleteContact:n})})})),G=n(18),K=n.n(G),P=Object(s.b)((function(t){return{value:t.phonebookFilter}}),(function(t){return{onChange:function(e){return t(p.filterContacts(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(B.jsxs)("label",{className:K.a.label,children:["Find contact by name",Object(B.jsx)("input",{type:"text",className:K.a.input,value:e,onChange:n})]})})),R=function(t){Object(A.a)(n,t);var e=Object(S.a)(n);function n(){return Object(F.a)(this,n),e.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(I,{title:"Phonebook",children:Object(B.jsx)(D,{})}),Object(B.jsxs)(I,{title:"Contacts",children:[Object(B.jsx)(P,{}),Object(B.jsx)(T,{})]})]})}}]),n}(c.Component);i.a.render(Object(B.jsx)(o.a.StrictMode,{children:Object(B.jsx)(l.a,{loading:null,persistor:y.persistor,children:Object(B.jsx)(s.a,{store:y.store,children:Object(B.jsx)(R,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form_contact:"ContactForm_form_contact__3q74I",label:"ContactForm_label__AGsCH",input:"ContactForm_input__1p4Sl",button:"ContactForm_button__2XBm8"}}},[[38,1,2]]]);
//# sourceMappingURL=main.6cc7ee8e.chunk.js.map