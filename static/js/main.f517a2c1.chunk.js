(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(23),r=n.n(s),o=n(20),i=n.n(o),l=n(32),u=n(11),d=n(12),j=n(14),b=n(13),p=n(38),h=n(1),v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={collapsed:!0},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.collapsed;return Object(h.jsx)(p.a,{className:"event-card",children:Object(h.jsxs)(p.a.Body,{className:"event-card-body",onClick:function(){return e.setState({collapsed:!n})},children:[Object(h.jsxs)("div",{className:"card-top",children:[Object(h.jsx)("div",{className:"card-top-left",children:Object(h.jsx)(p.a.Title,{className:"event-summary",children:t.summary})}),Object(h.jsx)("div",{className:"card-top-right",children:Object(h.jsxs)(p.a.Text,{className:"event-details",children:[t.location,Object(h.jsx)("br",{}),new Date(t.start.dateTime).toString().slice(3,21)]})})]}),Object(h.jsx)(p.a.Text,{className:"event-description ".concat(n?"d-none":""),children:t.description})]})})}}]),n}(a.Component),m=v,f=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events,t=0;return Object(h.jsx)("div",{className:"EventList row",children:e.map((function(e){return Object(h.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-3 event-card-wrapper",children:Object(h.jsx)(m,{event:e})},++t)}))})}}]),n}(a.Component),O=f,x=n(37),g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={displayedSelection:"See all cities"},e.handleItemClicked=function(t){var n=e.props.updateEvents;e.setState({displayedSelection:t}),n(t,void 0)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.locations,n=this.state.displayedSelection;return Object(h.jsx)("div",{className:"CitySearch mt-3 mb-3",children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)(x.a.Toggle,{variant:"outline-secondary",id:"dropdown-basic",children:Object(h.jsx)("span",{className:"displayed-selection",children:n})}),Object(h.jsxs)(x.a.Menu,{className:"suggestions",children:[Object(h.jsx)(x.a.Item,{className:"all-cities",onClick:function(){return e.handleItemClicked("See all cities")},children:"See all cities"}),t.map((function(t){return Object(h.jsx)(x.a.Item,{className:"city",value:t,onClick:function(){return e.handleItemClicked(t)},children:t},t)}))]})]})})}}]),n}(a.Component),w=g,k=n(45),y=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={ErrorText:""},e}return Object(d.a)(n,[{key:"changeEventsNumber",value:function(e){e>44&&this.setState({ErrorText:"Number is larger than 44"}),e<22&&this.setState({ErrorText:"Number is smaller than 22"}),e>22&&e<44&&this.setState({ErrorText:""}),this.props.updateEvents(void 0,e)}},{key:"render",value:function(){var e=this,t=this.props.numberOfEvents;return Object(h.jsx)("div",{className:"NumberOfEvents",children:Object(h.jsx)(k.a,{onSubmit:function(e){e.preventDefault()},children:Object(h.jsxs)(k.a.Group,{className:"number-of-events mt-3",controlId:"formRangeSlider",children:[Object(h.jsx)(k.a.Control,{className:"number-slider",type:"range",min:"1",max:"64",value:t,onChange:function(t){e.changeEventsNumber(t.target.value)}}),Object(h.jsxs)(k.a.Text,{className:"text-muted",children:["Events displayed: ",t]})]})})})}}]),n}(a.Component),S=y;n(86);var N=function(e){return e.showWelcomeScreen?Object(h.jsxs)("div",{className:"WelcomeScreen",children:[Object(h.jsxs)("div",{className:"background",children:[Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{})]}),Object(h.jsx)("h1",{children:"Welcome to the Meet app"}),Object(h.jsx)("div",{className:"button_cont",align:"center",children:Object(h.jsx)("div",{className:"google-btn",children:Object(h.jsxs)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:[Object(h.jsx)("span",{className:"google-icon-wrapper",children:Object(h.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(h.jsx)("b",{children:"Sign in with google"})]})})}),Object(h.jsx)("a",{href:"https://NikoSardas.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},E=n(31),C=n(73),T=n.n(C),L=n(60),W=n.n(L),I=(n(104),function(e){var t=e.map((function(e){return e.location}));return Object(E.a)(new Set(t))}),A=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W.a.start(),console.log("navigator.onLine",navigator.onLine),navigator.onLine){e.next=6;break}return t=localStorage.getItem("lastEvents"),W.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,c,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,P(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(c=e.sent){e.next=20;break}return e.next=17,T.a.get("https://tge27ua11j.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,r=s.data.authUrl,e.abrupt("return",window.location.href=r);case 20:return e.abrupt("return",c&&U(c));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://tge27ua11j.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(c=a.access_token)&&localStorage.setItem("access_token",c),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="black",a}return n}(function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component)),D=n(44),F=n(76),R=n(74),B=n(75),G=n(56),J=n.p+"static/media/wickedbackground.0ed0803d.svg",z=(n(105),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={allEvents:[],displayedEvents:[],locations:[],currentLocation:"",numberOfEvents:32,showWelcomeScreen:void 0},e.updateEvents=function(t,n){var a=e.state.allEvents;n||(n=e.state.numberOfEvents,e.setState({currentLocation:t})),t||(t=e.state.currentLocation,e.setState({numberOfEvents:n}));var c="See all cities"===t?a:a.filter((function(e){return e.location===t}));e.setState({displayedEvents:c.slice(0,n)})},e.logOut=function(){localStorage.removeItem("access_token"),e.componentDidMount()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,c,s=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,P(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!0,e.next=9;break;case 8:e.t0=!1;case 9:n=e.t0,a=new URLSearchParams(window.location.search),c=a.get("code"),console.log("accessToken",t),console.log("isTokenValid",n),console.log("searchParams",a),console.log("code",c),this.setState({showWelcomeScreen:!(c||n)}),(c||n)&&this.mounted&&A().then((function(e){console.log("getEvents events",e);var t=e;s.mounted&&s.setState({displayedEvents:e.slice(0,s.state.numberOfEvents),locations:I(e),allEvents:t,currentLocation:"See all cities"})}));case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.displayedEvents,n=e.locations,a=e.numberOfEvents,c=e.showWelcomeScreen;return void 0===c?Object(h.jsx)("div",{className:"App"}):Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)(R.a,{children:[Object(h.jsxs)(B.a,{children:[Object(h.jsx)(M,{text:navigator.onLine?"":"No internet connection"}),Object(h.jsxs)(D.a,{expand:"nope",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"navbar-logo",alt:"Logo",src:J}),Object(h.jsx)(D.a.Brand,{className:"meet-logo",children:"Meet"})]}),Object(h.jsx)(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(D.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(F.a,{className:"inputFields",children:[Object(h.jsx)("div",{className:"buttons",children:Object(h.jsx)(G.a,{variant:"outline-secondary",className:"logout-button mt-2",onClick:this.logOut,children:"Logout"})}),Object(h.jsxs)("div",{className:"inputs",children:[Object(h.jsx)("div",{className:"number-of-events-wrapper",children:Object(h.jsx)(S,{numberOfEvents:a,updateEvents:this.updateEvents})}),Object(h.jsx)("div",{className:"city-search-wrapper",children:Object(h.jsx)(w,{locations:n,updateEvents:this.updateEvents})})]})]})})]})]}),Object(h.jsx)(O,{events:t})]}),Object(h.jsx)(N,{showWelcomeScreen:c,getAccessToken:function(){_()}})]})}}]),n}(a.Component)),q=z,V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},K=n(61);K.config("610ee4fd495b4ebba32404e51e243f0e").install(),r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):$(t,e)}))}}(),H(),K.config("610ee4fd495b4ebba32404e51e243f0e").install()},86:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.f517a2c1.chunk.js.map