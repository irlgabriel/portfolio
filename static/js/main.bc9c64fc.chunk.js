(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{36:function(e,t,a){e.exports=a(84)},48:function(e,t,a){e.exports=a.p+"static/media/covid2.30337861.png"},49:function(e,t,a){e.exports=a.p+"static/media/covid1.bb8421d2.png"},50:function(e,t,a){e.exports=a.p+"static/media/covid3.28c2ce92.png"},51:function(e,t,a){e.exports=a.p+"static/media/facebook6.59adcf10.png"},52:function(e,t,a){e.exports=a.p+"static/media/facebook2.847e2c3d.png"},53:function(e,t,a){e.exports=a.p+"static/media/facebook3.5ad0eb9b.png"},54:function(e,t,a){e.exports=a.p+"static/media/facebook4.b92d099d.png"},55:function(e,t,a){e.exports=a.p+"static/media/facebook5.faa26ef6.png"},56:function(e,t,a){e.exports=a.p+"static/media/weather2.ffc61a58.png"},57:function(e,t,a){e.exports=a.p+"static/media/weather3.3346052f.png"},58:function(e,t,a){e.exports=a.p+"static/media/mern1.457ef9ad.png"},59:function(e,t,a){e.exports=a.p+"static/media/mern2.53a11ec5.png"},60:function(e,t,a){e.exports=a.p+"static/media/library3.93f5074b.png"},61:function(e,t,a){e.exports=a.p+"static/media/library4.bccd5800.png"},62:function(e,t,a){e.exports=a.p+"static/media/library5.4ad57d21.png"},63:function(e,t,a){e.exports=a.p+"static/media/project3.1a411aa4.png"},64:function(e,t,a){e.exports=a.p+"static/media/cv2.74e1af5c.png"},65:function(e,t,a){e.exports=a.p+"static/media/memory-game.9098cfff.png"},66:function(e,t,a){e.exports=a.p+"static/media/memory-game-2.5d4ec9ff.png"},67:function(e,t,a){e.exports=a.p+"static/media/memory-game-3.e9209321.png"},84:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(17),i=a.n(o),c=a(13),l=a(14);function s(){var e=Object(c.a)(["\n  z-index: 1;\n  width: 100%;\n  max-width: 1300px;\n  margin: 0 auto;\n"]);return s=function(){return e},e}function m(){var e=Object(c.a)(["\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\n.slide {\n  background-color: gray !important;\n}\n\nbody {\n  position: relative;\n}\n\n.footer-item {\n  transition: all 0.3s ease-in-out;\n  &:hover {\n    transform: translateY(-10px);\n  }\n}\n\n#everywhere-container {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n#intro-image {\n  position: absolute;\n  top:0px;\n  bottom:0px;\n  left:0px;\n  right: 0px;\n  background-image: url(\"https://images.pexels.com/photos/2546926/pexels-photo-2546926.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260\");\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover;\n  z-index: -1;\n}\n\n\n\n#main {\n  width: 100%;\n  flex: 1;\n  position: relative;\n}\n\n.list-group h5 {\n  font-family: 'Press Start 2P', 'Roboto';\n  font-size: 12px;\n}\n\n.list-group-item {\n  border: none;\n}\n\n.selected {\n  border: none;\n  color: royalblue !important;\n  h5, a {\n    transform: translateY(-0.5rem);\n    color: royalblue !important;\n    padding-bottom: .25rem;\n    border-bottom: 1px solid royalblue;\n  }\n}\n\n.border-right-radius-5 {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.border-left-radius-5 {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n#footer {\n  width: 50%;\n  @media screen and (max-width: 768px) {\n    width: 90%;\n  }\n}\n\n.border-radius-0{\n  border-radius: 0px !important;\n}\n\n.card {\n  border: 1px solid darkslategrey;\n}\n.container-info {\n  position: absolute;\n  top:0;\n  left:0;\n  padding: .5rem 1rem;\n  background: white;\n}\n\n#img-me {\n  background-image: url(\"images/me.jpeg\")\n}\n.projects-carousel {\n  display: inline-block;\n  width: 90%;\n}\n.carousel-bubbles {\n  width: 5%;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.bubble {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: 1px solid gray;\n  margin: 5px 0;\n  transition: all 600ms ease-in-out;\n}\n.checked-bubble {\n  background: royalblue;\n}\n\n// REACT-TRANSITION-GROUP ANIMATIONS\n.page {\n  position: absolute;\n  left: 15px;\n  right: 15px;\n}\n\n.page-enter {\n  opacity: 0;\n  transform: scale(1.1);\n}\n\n.page-enter-active {\n  opacity: 1;\n  transform: scale(1);\n  transition: opacity 300ms, transform 300ms;\n}\n\n.page-exit {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.page-exit-active {\n  opacity: 0;\n  transform: scale(0.9);\n  transition: opacity 300ms, transform 300ms;\n}\n\n.section-scroll-exit {\n  transform: translateY(200%);\n}\n.section-scroll-exit-active {\n  transform: translateY(0%);\n  transition: all 600ms ease-in-out;\n}\n.section-scroll-enter {\n  transform: translateY(0%);\n}\n.section-scroll-enter-active {\n  transform: translateY(-200%);\n  transition: all 600ms ease-in-out;\n}\n"]);return m=function(){return e},e}var d=Object(l.a)(m()),p=(l.b.div(s()),d),u=a(19),b=a(8),h=(a(43),a(85));function g(){var e=Object(c.a)(["\n  background: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return g=function(){return e},e}var f=Object(l.b)(h.a)(g(),(function(e){return e.image})),y=a(15),E=a(86),x=a(87);function v(){var e=Object(c.a)(['\n  font-family: "Press Start 2P", "Roboto", cursive;\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  color: lightgray;\n  padding: 0.5rem 1rem;\n  transition: all 0.4s ease;\n  &:hover {\n    text-decoration: none;\n    color: royalblue;\n  }\n']);return v=function(){return e},e}var w=Object(l.b)(u.b)(v());function k(){var e=Object(n.useState)(Object(b.e)().pathname),t=Object(y.a)(e,2),a=t[0],o=t[1];return r.a.createElement(h.a,{fluid:!0,className:"px-0"},r.a.createElement(E.a,{className:"w-75 ml-auto"},r.a.createElement(x.a,{className:"w-100 flex-row justify-content-between"},r.a.createElement(w,{onClick:function(){return o("/")},className:"/"===a?"selected":"",to:"/"},"Intro"),r.a.createElement(w,{onClick:function(){return o("/what")},className:"/what"===a?"selected":"",to:"/what"},"What"),r.a.createElement(w,{onClick:function(){return o("/who")},className:"/who"===a?"selected":"",to:"/who"},"Who"))))}var j=a(6),I=a(24),N=a(9),R=[{id:"covid-app",name:"Covid-19 Charts",images:[{src:a(48)},{src:a(49)},{src:a(50)}],techIcons:[r.a.createElement(j.j,{color:"lightblue"}),r.a.createElement(j.b,{color:"purple"}),r.a.createElement(j.c,{color:"royalblue"}),r.a.createElement(j.f,{color:"red"}),r.a.createElement(N.c,{color:"yellow"}),r.a.createElement(j.k,{color:"red"})],desc:"A react app that takes data from two different APIs and uses Recharts npm library to display some (hopefully useful) charts with Covid-19 information around the world. ",liveURL:"https://irlgabriel.github.io/covid-19-tracker",codeURL:"https://github.com/irlgabriel/covid-19-tracker",key:"0"},{id:"facebook-clone",name:"Facebook Clone",images:[{src:a(51),idx:0},{src:a(52),idx:1},{src:a(53),idx:2},{src:a(54),idx:3},{src:a(55),idx:4}],techIcons:[r.a.createElement(N.f,{color:"red"}),r.a.createElement(I.a,{color:"red"}),r.a.createElement(j.b,{color:"purple"}),r.a.createElement(j.f,{color:"orange"}),r.a.createElement(j.c,{color:"royalblue"}),r.a.createElement(N.e,{color:"green"}),r.a.createElement(j.a,{color:"yellow"}),r.a.createElement(N.b,{color:"violet"})],desc:"A facebook clone built with ruby on rails. This was a great challenge for me, I learned a lot about Rails' Model-View-Controller arhitecture, Forms, HTTP requests, Relational Databases, Schemas and so much more. By far the greatest challenge was figuring out how to add the Friend Request and Notification features, with a very close second being rails' database associations.",liveURL:"https://whispering-bayou-85275.herokuapp.com/",codeURL:"https://github.com/irlgabriel/facebook-odin",projectIcon:r.a.createElement(I.a,{fontSize:"2.5rem",color:"red"}),key:"1"},{name:"Weather App",id:"weather-app",images:[{src:a(56),idx:0},{src:a(57),idx:1}],techIcons:[r.a.createElement(j.j,{color:"lightblue"}),r.a.createElement(N.i,{color:"gray"}),r.a.createElement(N.c,{color:"yellow"}),r.a.createElement(j.f,{color:"orange"}),r.a.createElement(j.c,{color:"royalblue"})],desc:"An ugly weather app that integrates OpenWeatherMap API and HTML's Geolocation API to display weather forecast for the next week based on your location or the city that you input. This was the first app in which I integrated an API and I was introduced to the ways you can send requests in javascript - XMLHttpRequest vs Fetch(newer).",liveURL:"https://irlgabriel.github.io/weather-app/",codeURL:"https://github.com/irlgabriel/weather-app/",projectIcon:r.a.createElement(j.j,{fontSize:"2.5rem",color:"lightblue"}),key:"2"},{name:"MERN Shopping List",id:"mern-app",images:[{src:a(58),idx:0},{src:a(59),idx:1}],techIcons:[r.a.createElement(j.i,{color:"green"}),r.a.createElement(N.d,{color:"olivedrab"}),r.a.createElement(j.j,{color:"lightblue"}),r.a.createElement(N.h,{color:"purple"}),r.a.createElement(N.b,{color:"pink"}),r.a.createElement(N.c,{color:"yellow"}),r.a.createElement(j.b,{color:"purple"}),r.a.createElement(j.f,{color:"orange"}),r.a.createElement(j.c,{color:"royalblue"})],desc:"A simple shopping list built with the MERN stack. I know it is pointless(the app in itself too) and overkill to have a custom back-end for such an app while I could have used firebase or other BaaS but I created this one to get familiar with node, Express and mongoDB. I plan to turn it into a e-commerce style website with items and a shopping cart in the future. Oh and it also has custom JWT Authentication on the backend!",liveURL:"https://tranquil-anchorage-36599.herokuapp.com",codeURL:"https://github.com/irlgabriel/mern-shopping-list",projectIcon:r.a.createElement(j.i,{fontSize:"2.5rem",color:"lightgreen"}),key:"3"},{name:"Book Library",id:"book-library",images:[{src:a(60),idx:0},{src:a(61),idx:1},{src:a(62),idx:2}],alt:"Photo of library project",projectTitle:"Library",techIcons:[r.a.createElement(j.j,{color:"lightblue"}),r.a.createElement(N.g,null),r.a.createElement(N.c,{color:"yellow"}),r.a.createElement(N.a,{color:"orange"}),r.a.createElement(N.i,{color:"gray"}),r.a.createElement(j.f,{color:"orange"}),r.a.createElement(j.c,{color:"royalblue"})],desc:"A small app that I've built to get used with firebase and its services (firestore and auth more specifically). I reached the conclusion that it is a great tool (and very easy to learn and implement) for smaller apps that do not need full fledged backends.",liveURL:"https://irlgabriel.github.io/library-project-redo/#/",codeURL:"https://github.com/irlgabriel/library-project-redo/",projectIcon:r.a.createElement(j.j,null),key:"4"},{name:"CV Generator",id:"cv-generator",images:[{src:a(63),idx:0},{src:a(64)}],techIcons:[r.a.createElement(j.j,{color:"lightblue"}),r.a.createElement(N.c,{color:"yellow"}),r.a.createElement(N.i,{color:"gray"}),r.a.createElement(j.f,{color:"orange"}),r.a.createElement(j.c,{color:"royalblue"})],desc:"Just a small app that helped me understand and manage state more easily. I have got a bit of a taste of form client-side validations since it revolves a lot around valid informations being input.",liveURL:"https://irlgabriel.github.io/Cv-project",codeURL:"https://github.com/irlgabriel/Cv-project",projectIcon:r.a.createElement(j.j,null),key:"5"},{name:"Netflix Memory Game",id:"netflix-memory-game",images:[{src:a(65),idx:0},{src:a(66),idx:1},{src:a(67),idx:2}],techIcons:[r.a.createElement(j.j,{color:"lightblue"}),r.a.createElement(N.c,{color:"yellow"}),r.a.createElement(N.i,{color:"gray"}),r.a.createElement(j.f,{color:"orange"}),r.a.createElement(j.c,{color:"royalblue"})],desc:"More React Hooks practice - A very brief app without any backend (I don't think it is necessary either with this kind of game anyway - maybe just to store the highest-score, but this is not a game that you come back to anyway because it is very boring and the only reason I've built it is to practice React Hooks).",liveURL:"https://irlgabriel.github.io/memory-card-game/#/",codeURL:"https://github.com/irlgabriel/memory-card-game",projectIcon:r.a.createElement(j.j,null),key:"6"}],O=a(98),C=a(32),L=(j.e,j.h,C.a,j.g,j.d,a(88),a(89));var A=a(90),U=a(91),S=a(92),T=a(93),P=a(94),z=a(95),M=a(96),W=a(97);function Y(){var e=Object(c.a)(["\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 70%;\n  margin: 0 auto;\n  min-height: 350px;\n  max-height: 400px;\n  transition: all 0.3s ease;\n"]);return Y=function(){return e},e}l.b.div(Y(),(function(e){return e.src}));function B(e){e.images;var t=e.id,a=e.name,o=e.techIcons,i=e.desc,c=e.liveURL,l=e.codeURL,s=(e.setParentAnimating,Object(n.useState)(0)),m=Object(y.a)(s,2),d=(m[0],m[1],Object(n.useState)(!1)),p=Object(y.a)(d,2);p[0],p[1];return r.a.createElement(A.a,{id:t,className:"card mt-2 p-relative",style:{background:"transparent"}},r.a.createElement(U.a,null,r.a.createElement(S.a,{className:"d-inline-block h3"},a),o.map((function(e){return r.a.createElement("span",{className:"mx-2",style:{fontSize:"2rem"}},e)})),r.a.createElement(T.a,{className:"mb-3"})),r.a.createElement(P.a,null,r.a.createElement("p",null,i)),r.a.createElement(z.a,null,r.a.createElement(M.a,{noGutters:!0,className:"mx-0"},r.a.createElement(W.a,{className:"border-left-radius-5 text-center text-dark "},r.a.createElement(L.a,{style:{borderRight:"1px solid white",backgroundColor:"darkslategray"},className:"text-light",tag:"a",href:c,action:!0},r.a.createElement("span",{className:"font-weight-bold"},"Live"))),r.a.createElement(W.a,{className:"border-right-radius-5 text-center text-dark "},r.a.createElement(L.a,{style:{backgroundColor:"darkslategray"},className:"text-light",tag:"a",href:l,action:!0},r.a.createElement("span",{className:"font-weight-bold"},"Code"))))))}a(33);function F(){var e=Object(c.a)(['\n  height: 100%;\n  font-family: "Press Start 2P", "Roboto", cursive;\n']);return F=function(){return e},e}l.b.div(F());var q=[{path:"/",name:"Intro",Component:function(){return r.a.createElement(h.a,{className:"mb-auto",fluid:!0},r.a.createElement("h2",null,"INTRO"))}},{path:"/who",name:"Who",Component:function(){return r.a.createElement(M.a,{className:"mb-auto"},r.a.createElement(W.a,{className:"border d-flex justify-content-center align-items-center",id:"img-me",md:"6",sm:"12"},r.a.createElement("h2",null,"A NICE PICTURE OF ME")),r.a.createElement(W.a,{className:"border d-flex justify-content-center align-items-center",md:"6",sm:"12"},r.a.createElement("h2",null,"SOME NICE INFO ABOUT ME")))}},{path:"/what",name:"What",Component:function(){var e=R.length,t=Object(n.useState)(0),a=Object(y.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(!1),l=Object(y.a)(c,2),s=l[0],m=l[1],d=(new Date).getTime();return r.a.createElement("div",{className:"mx-2 my-2 p-relative",onWheel:function(t){var a=(new Date).getTime();if("undefined"!==typeof d&&a-d>100){if(s)return;t.deltaY>0&&o!==e-1&&(m(!0),i(o+1)),t.deltaY<0&&0!==o&&(m(!0),i(o-1))}d=a}},r.a.createElement("div",null,r.a.createElement(O.a,{in:s,classNames:"section-scroll",timeout:600,onEntered:function(){return m(!1)}},r.a.createElement("div",{className:"projects-carousel section-scroll"},r.a.createElement(B,R[o]))),r.a.createElement("div",{className:"carousel-bubbles"},R.map((function(e,t){return r.a.createElement("div",{onClick:function(){return i(t)},className:"bubble ".concat(R[o].id===e.id?"checked-bubble":""),"data-id":e.id})})))))}}];var D=function(){return r.a.createElement(u.a,{basename:"/"},r.a.createElement(f,{id:"everywhere-container",fluid:!0,className:"px-0"},r.a.createElement(p,null),r.a.createElement(k,null),r.a.createElement(f,{className:"p-relative"},q.map((function(e){var t=e.path,a=e.Component;return r.a.createElement(b.a,{key:t,exact:!0,path:t},(function(e){var t=e.match;return r.a.createElement(O.a,{in:null!==t,timeout:300,classNames:"page",unmountOnExit:!0},r.a.createElement("div",{className:"page mb-auto"},r.a.createElement(a,null)))}))})))))};i.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.bc9c64fc.chunk.js.map