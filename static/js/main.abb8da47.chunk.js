(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c),s=n(20),i=n.n(s),l=n(32),u=n(11),d=n(12),v=n(14),h=n(13),p=n(38),f=n(1),b=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!0},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.collapsed;return Object(f.jsx)(p.a,{className:"event-card",children:Object(f.jsxs)(p.a.Body,{className:"event-card-body",onClick:function(){return e.setState({collapsed:!n})},children:[Object(f.jsxs)("div",{className:"card-top",children:[Object(f.jsx)("div",{className:"card-top-left",children:Object(f.jsx)(p.a.Title,{className:"event-summary",children:t.summary})}),Object(f.jsx)("div",{className:"card-top-right",children:Object(f.jsxs)(p.a.Text,{className:"event-details",children:[t.location,Object(f.jsx)("br",{}),new Date(t.start.dateTime).toString().slice(3,21)]})})]}),Object(f.jsx)(p.a.Text,{className:"event-description ".concat(n?"d-none":""),children:t.description})]})})}}]),n}(a.Component),j=b,m=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events,t=0;return Object(f.jsx)("div",{className:"EventList row",children:e.map((function(e){return Object(f.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-3 event-card-wrapper",children:Object(f.jsx)(j,{event:e})},++t)}))})}}]),n}(a.Component),O=m,w=n(37),g=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={displayedSelection:"See all cities",infoText:""},e.handleItemClicked=function(t){var n=e.props.updateEvents;e.setState({displayedSelection:t}),n(t,void 0),"See all cities"!==t?e.setState({infoText:t+" selected"}):e.setState({infoText:""})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.locations,n=this.state.displayedSelection;return Object(f.jsx)("div",{className:"CitySearch mt-3 mb-3",children:Object(f.jsxs)(w.a,{children:[Object(f.jsx)(w.a.Toggle,{variant:"outline-secondary",id:"dropdown-basic",children:Object(f.jsx)("span",{className:"displayed-selection",children:n})}),Object(f.jsxs)(w.a.Menu,{className:"suggestions",children:[Object(f.jsx)(w.a.Item,{className:"all-cities",onClick:function(){return e.handleItemClicked("See all cities")},children:"See all cities"}),t.map((function(t){return Object(f.jsx)(w.a.Item,{className:"city",value:t,onClick:function(){return e.handleItemClicked(t)},children:t},t)}))]})]})})}}]),n}(a.Component),x=g,y=n(46),k=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ErrorText:""},e}return Object(d.a)(n,[{key:"changeEventsNumber",value:function(e){e>44&&this.setState({ErrorText:"Number is larger than 44"}),e<22&&this.setState({ErrorText:"Number is smaller than 22"}),e>22&&e<44&&this.setState({ErrorText:""}),this.props.updateEvents(void 0,e)}},{key:"render",value:function(){var e=this,t=this.props.numberOfEvents;return Object(f.jsx)("div",{className:"NumberOfEvents",children:Object(f.jsx)(y.a,{onSubmit:function(e){e.preventDefault()},children:Object(f.jsxs)(y.a.Group,{className:"number-of-events mt-3",controlId:"formRangeSlider",children:[Object(f.jsx)(y.a.Control,{className:"number-slider",type:"range",min:"1",max:"64",value:t,onChange:function(t){e.changeEventsNumber(t.target.value)}}),Object(f.jsxs)(y.a.Text,{className:"text-muted",children:["Events displayed: ",t]})]})})})}}]),n}(a.Component),S=k;n(86);var N,E=n(31),C=n(61),L=n.n(C),T=n(58),I=n.n(T);n(104);window.addEventListener("load",(function(){N=!!navigator.onLine,window.addEventListener("online",(function(){N=!0})),window.addEventListener("offline",(function(){N=!1}))}));var W=function(e){var t=e.map((function(e){return e.location}));return Object(E.a)(new Set(t))},A=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("isOnline:",N,"navigator.onLine:",navigator.onLine),I.a.start(),N){e.next=6;break}return t=localStorage.getItem("lastEvents"),I.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 6:return e.next=8,U();case 8:if(!(n=e.sent)){e.next=18;break}return B(),a="https://tge27ua11j.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=14,L.a.get(a);case 14:return(r=e.sent).data&&(console.log("token result",r),c=W(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(c))),I.a.done(),e.abrupt("return",r.data.events);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,_(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,L.a.get("https://tge27ua11j.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return c=e.sent,o=c.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&D(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},D=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://tge27ua11j.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="black",a}return n}(function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component)),J=n(45),M=n(76),P=n(75),R=n(62),z=n(44),q=n.p+"static/media/wickedbackground.0ed0803d.svg",G=(n(105),function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={allEvents:[],displayedEvents:[],locations:[],currentLocation:"",numberOfEvents:32,showWelcomeScreen:void 0},e.updateEvents=function(t,n){var a=e.state.allEvents;n||(n=e.state.numberOfEvents,e.setState({currentLocation:t})),t||(t=e.state.currentLocation,e.setState({numberOfEvents:n}));var r="See all cities"===t?a:a.filter((function(e){return e.location===t}));e.setState({displayedEvents:r.slice(0,n)})},e.logOut=function(){localStorage.removeItem("access_token"),e.componentDidMount()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.mounted=!0,A().then((function(e){var n=e;t.mounted&&t.setState({displayedEvents:e.slice(0,t.state.numberOfEvents),locations:W(e),allEvents:n,currentLocation:"See all cities"})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.displayedEvents,n=e.locations,a=e.numberOfEvents;e.showWelcomeScreen;return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(P.a,{children:[Object(f.jsxs)(R.a,{children:[Object(f.jsx)(F,{text:navigator.onLine?"":"No internet connection"}),Object(f.jsxs)(J.a,{expand:"nope",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{className:"navbar-logo",alt:"Logo",src:q}),Object(f.jsx)(J.a.Brand,{className:"meet-logo",children:"Meet"})]}),Object(f.jsx)(J.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(J.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsx)(M.a,{className:"inputFields",children:Object(f.jsxs)("div",{className:"buttons",children:[Object(f.jsx)(z.a,{variant:"outline-secondary",className:"portfolio-link mt-2",onClick:function(){window.open("http://www.nikosardas.com/")},children:"By Niko Sardas"}),Object(f.jsx)(z.a,{variant:"outline-secondary",className:"logout-button mt-2",onClick:this.logOut,children:"Logout"})]})})})]})]}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)("div",{className:"number-of-events-wrapper",children:Object(f.jsx)(S,{numberOfEvents:a,updateEvents:this.updateEvents})}),Object(f.jsx)("div",{className:"city-search-wrapper",children:Object(f.jsx)(x,{locations:n,updateEvents:this.updateEvents})})]}),Object(f.jsx)(O,{events:t})]})})}}]),n}(a.Component)),$=G,H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},V=n(63);V.config("610ee4fd495b4ebba32404e51e243f0e").install(),o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)($,{})}),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");H?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}(),Q(),V.config("610ee4fd495b4ebba32404e51e243f0e").install()},86:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.abb8da47.chunk.js.map