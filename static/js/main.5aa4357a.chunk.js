(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(4),s=a.n(o),c=(a(18),a(2)),i=a.n(c),l=a(10),u=a(5),m=a(6),d=a(7),p=a(11),f=a(8),g=a(12),b=a(9),h=(a(20),a(21),a(1)),E=a.n(h);E.a.arrayOf(E.a.object).isRequired,E.a.shape({id:E.a.number,title:E.a.string,user:E.a.object}).isRequired,E.a.shape({name:E.a.string,email:E.a.string,website:E.a.string}).isRequired;var O=function(e){var t=e.user;return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"user-name"},t.name),n.a.createElement("p",{className:"user-mail"},t.email),n.a.createElement("p",{className:"user-website"},t.website))};a(24);var v=function(e){var t=e.todo;return n.a.createElement("li",{className:t.completed?"todo-item completed":"todo-item"},n.a.createElement("div",{className:"drawing-pin"},n.a.createElement("img",{className:"drawing-pin__img",alt:"drawing-pin",src:"./images/Drawing-Pin.png"})),n.a.createElement("h1",{className:"item-title"},t.title),n.a.createElement("div",{className:"item-user"},n.a.createElement(O,{user:t.user})))};a(25);var j=function(e){var t=e.todos;return n.a.createElement("ul",{className:"todo-list"},t.map(function(e){return n.a.createElement(v,{todo:e,key:e.id})}))};function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var y="https://jsonplaceholder.typicode.com/todos",N="https://jsonplaceholder.typicode.com/users";function P(e,t){return e.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{user:t.find(function(t){return t.id===e.userId})})})}var L=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={todos:[],users:[],isLoaded:!1,isLoading:!1,hasError:!1},a.getApi=function(e){return fetch(e).then(function(e){return e.json()})},a.loadTodos=Object(u.a)(i.a.mark(function e(){var t,r,n,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0,hasError:!1}),e.prev=1,e.next=4,Promise.all([a.getApi(y),a.getApi(N)]);case 4:t=e.sent,r=Object(l.a)(t,2),n=r[0],o=r[1],a.setState({todos:n,users:o,isLoaded:!0}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),a.setState({hasError:!0});case 14:a.setState({isLoading:!1});case 15:case"end":return e.stop()}},e,null,[[1,11]])})),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todos,a=e.users,r=e.isLoaded,o=e.isLoading,s=e.hasError,c=P(t,a);return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"header"},"Static list of todos"),r?n.a.createElement("div",null,n.a.createElement(j,{todos:c})):n.a.createElement(n.a.Fragment,null,s&&n.a.createElement("h2",{className:"error-title"},"Oh, failed, try again"),n.a.createElement("button",{type:"button",className:"load-button",onClick:this.loadTodos},o?"Loading...":"Load todos")))}}]),t}(n.a.Component);s.a.render(n.a.createElement(L,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.5aa4357a.chunk.js.map