(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),o=n(3),a=n.n(o),i=(n(13),n(4)),h=n(5),l=n(7),u=n(6),d=(n(14),function(e){return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2")}),Object(r.jsxs)("h2",{children:[" ",e.monster.name]}),Object(r.jsx)("p",{children:e.monster.email})]})}),j=(n(15),function(e){return console.log(e),Object(r.jsx)("div",{className:"card-list",children:e.monster.map((function(e){return Object(r.jsx)(d,{monster:e},e.id)}))})}),m=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(r.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monster:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monster:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monster,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Monster Rolodex"}),Object(r.jsx)(m,{placeholder:"Search monsters",handleChange:this.handleChange}),Object(r.jsx)(j,{monster:c})]})}}]),n}(s.a.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.fb5a3e36.chunk.js.map