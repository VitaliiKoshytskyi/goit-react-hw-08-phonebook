"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[165],{165:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(434),r=function(e){return e.contacts.contacts},o=function(e){return e.filter},s=n(74),c="ContactItem_item__pER5Q",u="ContactItem_button__3O59k",l="ContactItem_phone__rNUF7",i="ContactItem_name__+rhVe",m="ContactItem_delete__05w1Z",_=n(329),h=function(){var e=(0,a.v9)(r),t=(0,a.v9)(o),n=(0,a.I0)(),h=function(){if(""===t)return e;var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return h.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,_.jsxs)("li",{className:c,children:[(0,_.jsx)("p",{className:i,children:a}),(0,_.jsx)("p",{className:l,children:r}),(0,_.jsx)("div",{className:u,children:(0,_.jsx)("button",{className:m,onClick:function(){return function(e){var t=(0,s.GK)(e);n(t)}(t)},children:"Delete"})})]},t)}))},d={},p=function(){return(0,_.jsx)("ul",{className:d.list,children:(0,_.jsx)(h,{})})},f=n(942),x=n(413),b=n(439),j=n(791),v={App:"ContactForm_App__+ARhV",form:"ContactForm_form__dhl+T",input:"ContactForm_input__Bl93P",button:"ContactForm_button__eSwX9",list:"ContactForm_list__yfsov"},N=function(){var e=(0,j.useState)({name:"",number:""}),t=(0,b.Z)(e,2),n=t[0],r=t[1],o=n.name,c=n.number,u=(0,a.I0)();(0,j.useEffect)((function(){u((0,s.yF)())}),[u]);var l=function(e){var t=e.target.name,n=e.target.value;r((function(e){return(0,x.Z)((0,x.Z)({},e),{},(0,f.Z)({},t,n))}))};return(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=(0,x.Z)({},n);u((0,s.el)(t)),r({name:"",number:""})},className:v.form,children:[(0,_.jsxs)("div",{className:v.formBox,children:[(0,_.jsx)("label",{}),(0,_.jsx)("input",{onChange:l,className:v.input,value:o,type:"text",name:"name",placeholder:"Name",required:!0})]}),(0,_.jsxs)("div",{className:v.formBox,children:[(0,_.jsx)("label",{}),(0,_.jsx)("input",{onChange:l,className:v.input,value:c,type:"tel",name:"number",placeholder:"Phone number",required:!0})]}),(0,_.jsx)("button",{className:v.button,type:"submit",children:"Add contact"})]})},C=n(653),k="Filter_input__N7T3z",F=function(){var e=(0,a.v9)(o),t=(0,a.I0)();return(0,_.jsx)("input",{className:k,type:"text",name:e,placeholder:"Name",onChange:function(e){var n=(0,C.T)(e.target.value);t(n)}})},y={phonebook:"ContactsPage_phonebook__kQnF0",text:"ContactsPage_text__zIut8"},I=function(){return(0,_.jsxs)("div",{className:y.App,children:[(0,_.jsx)("h1",{className:y.phonebook,children:"This is your Phone Book"}),(0,_.jsx)("p",{className:y.text,children:"Put some name and phone number and add this contact to database."}),(0,_.jsx)(N,{}),(0,_.jsx)("h2",{className:y.phonebook,children:"Contacts"}),(0,_.jsx)("p",{className:y.text,children:"Find contacts by name and delete unnecessary one."}),(0,_.jsx)(F,{}),(0,_.jsx)(p,{})]})}}}]);
//# sourceMappingURL=165.e68cba06.chunk.js.map