(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{102:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(22),s=n.n(i),r=n(11),c=n(12),l=n(17),d=n(16),u=n(37),p=n(1),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={collapsed:!0},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.collapsed;return Object(p.jsx)(u.a,{className:"event-card",children:Object(p.jsxs)(u.a.Body,{className:"event-card-body",onClick:function(){return e.setState({collapsed:!n})},children:[Object(p.jsxs)("div",{className:"card-top",children:[Object(p.jsx)("div",{className:"card-top-left",children:Object(p.jsx)(u.a.Title,{className:"event-summary",children:t.summary})}),Object(p.jsx)("div",{className:"card-top-right",children:Object(p.jsxs)(u.a.Text,{className:"event-details",children:[t.location,Object(p.jsx)("br",{}),new Date(t.start.dateTime).toString().slice(3,21)]})})]}),Object(p.jsx)(u.a.Text,{className:"event-description ".concat(n?"d-none":""),children:t.description})]})})}}]),n}(a.Component),h=m,v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsx)("div",{className:"EventList row",children:e.map((function(e){return Object(p.jsx)("div",{className:"col-sm-12 col-md-6 col-xxl-6 event-card-wrapper",children:Object(p.jsx)(h,{event:e})},e.etag)}))})}}]),n}(a.Component),f=v,b=n(36),w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={displayedSelection:"See all cities"},e.handleItemClicked=function(t){var n=e.props.updateEvents;e.setState({displayedSelection:t}),n(t,void 0)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.locations,n=this.state.displayedSelection;return Object(p.jsxs)("div",{className:"CitySearch mt-3 mb-3",children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)(b.a.Toggle,{variant:"outline-secondary",id:"dropdown-basic",children:"Filter by city"}),Object(p.jsxs)(b.a.Menu,{className:"suggestions",children:[Object(p.jsx)(b.a.Item,{className:"all-cities",onClick:function(){return e.handleItemClicked("See all cities")},children:"See all cities"}),t.map((function(t){return Object(p.jsx)(b.a.Item,{className:"city",value:t,onClick:function(){return e.handleItemClicked(t)},children:t},t)}))]})]}),Object(p.jsx)("p",{children:n})]})}}]),n}(a.Component),y=w,g=n(45),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"changeEventsNumber",value:function(e){e>64&&(e=64),e<1&&(e=1),this.props.updateEvents(void 0,e),localStorage.setItem("numberOfEvents",e)}},{key:"render",value:function(){var e=this,t=this.props.numberOfEvents;return Object(p.jsx)("div",{className:"numberOfEvents",children:Object(p.jsx)(g.a,{onSubmit:function(e){e.preventDefault()},children:Object(p.jsxs)(g.a.Group,{className:"number-of-events mt-3",controlId:"formBasicEmail",children:[Object(p.jsx)(g.a.Control,{className:"number-slider",type:"range",min:"1",max:"64",value:t,onChange:function(t){e.changeEventsNumber(t.target.value)}}),Object(p.jsxs)(g.a.Text,{className:"text-muted",children:["Events displayed: ",t]})]})})})}}]),n}(a.Component),k=j,O=n(23),S=n.n(O),x=n(43),T=n(31),E=[{kind:"calendar#event",etag:"31811617847120028",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:"31811617847120027",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:"31811617847120026",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:"31811617847120025",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:"31811617847120024",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:"31811617847120023",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:"3181159875584000",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:"3181161784712001",summary:"Learn asdsadasdsadsaJavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"Londodasdasdasdasdn, UK",organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:"3181159875584002",summary:"Reaasdasdsadsadsadasdct is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlinasdsadsadasdasd, Germany",start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:"3181161784712003",summary:"Learn asdsadasdsadJavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"Londoasdasdasdasdasdn, UK",organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:"3181159875584004",summary:"React iasdsadsadsadsads Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin,asdsadsadsadasd Germany",start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:"3181161784712005",summary:"Learn JavaSadsadsadasdsadascript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:"3181159875584006",summary:"React is Fuasdsadasdasdasdn",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"}}],J=n(60),L=n.n(J),B=n(57),C=n.n(B),N=function(e){var t=e.map((function(e){return e.location}));return Object(T.a)(new Set(t))},Z=function(){var e=Object(x.a)(S.a.mark((function e(){var t,n,a,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",E);case 4:return e.next=6,G();case 6:if(!(t=e.sent)){e.next=16;break}return R(),n="https://tge27ua11j.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,L.a.get(n);case 12:return(a=e.sent).data&&(o=N(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),C.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(x.a)(S.a.mark((function e(){var t,n,a,o,i,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,H(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,L.a.get("https://tge27ua11j.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return i=e.sent,s=i.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",o&&W(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(x.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},W=function(){var e=Object(x.a)(S.a.mark((function e(t){var n,a,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://tge27ua11j.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=n(44),A=n(74),U=n(72),z=n(73),F=(n(102),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={allEvents:[],displayedEvents:[],locations:[],currentLocation:"",numberOfEvents:Number(localStorage.getItem("numberOfEvents"))||32},e.updateEvents=function(t,n){console.log("update");var a=e.state.allEvents;n||(n=e.state.numberOfEvents,e.setState({currentLocation:t})),t||(t=e.state.currentLocation);var o="See all cities"===t?a:a.filter((function(e){return e.location===t}));e.setState({displayedEvents:o.slice(0,4),numberOfEvents:n})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),this.mounted=!0,Z().then((function(t){var n=t;e.mounted&&e.setState({displayedEvents:t.slice(0,4),locations:N(t),allEvents:n,currentLocation:"See all cities"})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.displayedEvents,n=e.locations,a=e.numberOfEvents;return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(U.a,{children:[Object(p.jsx)(z.a,{children:Object(p.jsxs)(I.a,{expand:"xxl",children:[Object(p.jsxs)(I.a.Brand,{children:[Object(p.jsx)("img",{alt:"",src:"meet_logo.png",width:"30",height:"30",className:"d-inline-block align-top"}),"Meet"]}),Object(p.jsx)(I.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(I.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(A.a,{className:"inputFields",children:[Object(p.jsx)("div",{children:Object(p.jsx)(k,{numberOfEvents:a,updateEvents:this.updateEvents})}),Object(p.jsx)("div",{children:Object(p.jsx)(y,{locations:n,updateEvents:this.updateEvents})})]})})]})}),Object(p.jsx)(f,{events:t})]})})}}]),n}(a.Component)),K=F;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(K,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),M()}},[[105,1,2]]]);
//# sourceMappingURL=main.c508f741.chunk.js.map