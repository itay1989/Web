(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{11:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n(20),i=n.n(c),s=(n(11),n(4)),o=n(5),u=n(8),l=n(7),h=function(e){e.searchfield;var t=e.searchChange;return Object(a.jsx)("div",{className:"pa2",children:Object(a.jsx)("input",{className:"pa3 ba b--green bg-light-yellow",type:"search",placeholder:"Search Robots",onChange:t})})},d=function(e){var t=e.name,n=e.email,r=e.id;return Object(a.jsxs)("div",{className:"tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(a.jsx)("img",{alt:"Robots",src:"https://robohash.org/".concat(r,"?100x100")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("p",{children:n})]})]})},m=function(e){var t=e.robots;return Object(a.jsx)("div",{children:t.map((function(e,n){return Object(a.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},b=[{id:"lll",name:"itay",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],j=(n(27),function(e){return Object(a.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})}),p=n(3),f=n.n(p),O=n(6),y=n(10),v=n(21),x=n.n(v),g=function(){var e=Object(O.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:t,units:"metric",APPID:"0207cfe4e1e6df89d0d65423d6368f60"}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){e.weathersearch,e.searchChange;var t=Object(r.useState)(""),n=Object(y.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)({}),o=Object(y.a)(s,2),u=o[0],l=o[1],h=function(){var e=Object(O.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=6;break}return e.next=3,g(c);case 3:n=e.sent,l(n),i("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"main-container",children:[Object(a.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],n=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a," ").concat(r)}(new Date)}),Object(a.jsx)("input",{type:"text",className:"search",placeholder:"Enter your city to see Weather",value:c,onChange:function(e){return i(e.target.value)},onKeyPress:h}),u.main&&Object(a.jsxs)("div",{className:"city",children:[Object(a.jsxs)("h2",{className:"city-name",children:[Object(a.jsx)("span",{children:u.name}),Object(a.jsx)("sup",{children:u.sys.country})]}),Object(a.jsxs)("div",{className:"city-temp",children:[Math.round(u.main.temp),Object(a.jsx)("sup",{children:"\xb0C"})]}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/".concat(u.weather[0].icon,"@2x.png"),alt:u.weather[0].description}),Object(a.jsx)("p",{children:u.weather[0].description})]})]})]})},C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={time:new Date},e}return Object(o.a)(n,[{key:"currentTime",value:function(){this.setState({time:new Date})}},{key:"componentWillMount",value:function(){var e=this;setInterval((function(){return e.currentTime()}),1e3)}},{key:"render",value:function(){return Object(a.jsx)("h1",{children:this.state.time.toLocaleTimeString()})}}]),n}(r.Component),S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:b,searchfield:"",weathersearch:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(a.jsx)(w,{searchChange:this.on}),Object(a.jsx)(C,{}),Object(a.jsx)(h,{searchChange:this.onSearchChange}),Object(a.jsx)(j,{children:Object(a.jsx)(m,{robots:r})})]})}}]),n}(r.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(46);i.a.render(Object(a.jsx)(S,{}),document.getElementById("root")),k()}},[[47,1,2]]]);
//# sourceMappingURL=main.76dcfe8e.chunk.js.map