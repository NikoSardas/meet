(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{63:function(e,t,n){},86:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),s=(n(63),n(9)),i=n(10),u=n(15),l=n(14),d=n(27),h=n(55),p=n(1),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!0},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.collapsed;return Object(p.jsx)(d.a,{className:"event-card",children:Object(p.jsxs)(d.a.Body,{children:[Object(p.jsx)(d.a.Title,{className:"event-summary",children:t.summary}),Object(p.jsxs)(d.a.Text,{className:"event-details",children:[t.location,Object(p.jsx)("br",{}),new Date(t.start.dateTime).toString().slice(3,21)]}),Object(p.jsx)(d.a.Text,{className:"event-description ".concat(n?"d-none":""),children:t.description}),Object(p.jsx)(h.a,{onClick:function(){return e.setState({collapsed:!n})},className:"event-toggle-button",variant:"outline-secondary",children:n?"Show Details":"Hide Details"})]})})}}]),n}(a.Component),m=v,b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsx)("div",{className:"EventList row",children:e.map((function(e){return Object(p.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-4 event-card-wrapper",children:Object(p.jsx)(m,{event:e})},e.etag)}))})}}]),n}(a.Component),f=b,j=n(20),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=e.props.locations,a=t.target.value,r=n.filter((function(e){return e.toUpperCase().indexOf(a.toUpperCase())>-1}));e.setState({query:a,suggestions:r})},e.handleItemClicked=function(t){var n=e.props.updateEvents;e.setState({query:t}),n(t,void 0)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.suggestions;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)(j.a,{children:Object(p.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(p.jsx)(j.a.Label,{children:"Filter by city"}),Object(p.jsx)(j.a.Control,{type:"text",className:"city",value:n,onChange:this.handleInputChanged,placeholder:"Enter city name"})]})}),Object(p.jsxs)("ul",{className:"suggestions",children:[a.map((function(t){return Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(p.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),g=O,x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"changeEventsNumber",value:function(e){e>64&&(e=64),e<1&&(e=1),this.props.updateEvents(void 0,e),localStorage.setItem("numberOfEvents",e)}},{key:"render",value:function(){var e=this,t=this.props.numberOfEvents;return Object(p.jsx)("div",{className:"numberOfEvents",children:Object(p.jsx)(j.a,{children:Object(p.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(p.jsx)(j.a.Label,{children:"Max displayed events"}),Object(p.jsx)(j.a.Control,{type:"number",min:"1",max:"64",value:t,onChange:function(t){e.changeEventsNumber(t.target.value)},placeholder:"Enter city name"})]})})})}}]),n}(a.Component),w=x,y=n(22),k=n.n(y),S=n(30),E=n(40),C=[{kind:"calendar#event",etag:'"3181161784712000"',summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:'"3181159875584000"',summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"}}],N=n(45),I=n.n(N),T=n(41),L=n.n(T),B=function(e){var t=e.map((function(e){return e.location}));return Object(E.a)(new Set(t))},J=function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return L.a.done(),e.abrupt("return",C);case 4:return e.next=6,F();case 6:if(!(t=e.sent)){e.next=16;break}return R(),n="https://tge27ua11j.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,I.a.get(n);case 12:return(a=e.sent).data&&(r=B(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),L.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a,r,o,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,U(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,I.a.get("https://tge27ua11j.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&W(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},W=function(){var e=Object(S.a)(k.a.mark((function e(t){var n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://tge27ua11j.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=n(31),D=n(42),G=n(56),M=n(57),_=(n(86),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:localStorage.getItem("numberOfEvents")||32},e.updateEvents=function(t,n){J().then((function(a){n||(n=e.state.numberOfEvents,a="all"===t?a:a.filter((function(e){return e.location===t}))),e.setState({events:a.slice(0,n),numberOfEvents:n})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,J().then((function(t){e.mounted&&e.setState({events:t,locations:B(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.events,n=e.locations,a=e.numberOfEvents;return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(G.a,{children:[Object(p.jsx)(M.a,{children:Object(p.jsxs)(A.a,{bg:"light",expand:"xlg",children:[Object(p.jsx)(A.a.Brand,{children:"Meet"}),Object(p.jsx)(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(A.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(D.a,{className:"inputFields",children:[Object(p.jsx)(D.a.Link,{children:Object(p.jsx)(w,{numberOfEvents:a,updateEvents:this.updateEvents})}),Object(p.jsx)(D.a.Link,{children:Object(p.jsx)(g,{locations:n,updateEvents:this.updateEvents})})]})})]})}),Object(p.jsx)(f,{events:t})]})})}}]),n}(a.Component)),q=_;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),z()}},[[90,1,2]]]);
//# sourceMappingURL=main.7555f78b.chunk.js.map