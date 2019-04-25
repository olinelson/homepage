(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t(50)},32:function(e,a,t){},33:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(23),r=t.n(c),o=(t(32),t(11)),i=t(12),s=t(14),m=t(13),h=t(15),u=t(7),d=t(8);t(33);function p(e){return l.a.createElement("nav",{className:function(){switch(e.display){case"drums":return"nav-dark";case"code":return"nav-light";default:return"nav-home"}}()},l.a.createElement(u.b,{id:"nav-link-home",to:"/",activeClassName:"selected"},l.a.createElement("h4",null,"oli nelson")),l.a.createElement(u.b,{className:"nav-link",id:"nav-link-code",to:"/code",activeClassName:"selected"},"code"),l.a.createElement(u.b,{className:"nav-link",id:"nav-link-drums",to:"/drums",activeClassName:"selected"},"drums"))}var g=t(2);function E(){return l.a.createElement("div",{className:"coding-links"},l.a.createElement("a",{href:"https://github.com/olinelson"},l.a.createElement(g.a,{icon:["fab","github"]})),l.a.createElement("a",{href:"https://www.linkedin.com/in/oliver-nelson-a5961793/"},l.a.createElement(g.a,{icon:["fab","linkedin"]})),l.a.createElement("a",{href:"https://medium.com/@olinelson93"},l.a.createElement(g.a,{icon:["fab","medium"]})))}function v(){return l.a.createElement("div",{className:"coding-about container"},l.a.createElement("img",{alt:"oli nelson promo",src:"images/headshot.jpg"}),l.a.createElement("div",{className:"coding-about-body"},l.a.createElement("h4",null,"about"),l.a.createElement(E,null),l.a.createElement("p",null,"Full stack web developer with a passion for innovation and efficiency. With experience in Ruby on Rails, JavaScript, React and a background in music, I discovered web development through intense personal curiosity that then motivated me to seek accredited training with the Flatiron school. I bring strong skills in project management, problem solving and creativity that help innovative companies to create efficient and effective products. As an established musician, I am very comfortable as a self-directed learner and I understand the long term benefits of practice, patience and persistence when building skills and developing unique products."),l.a.createElement("a",{className:"resume-link",href:"https://docs.google.com/presentation/d/1--AjndSnU3yztOyNebUBDgXGvodAWFGYgK6zKJV3xyg/edit?usp=sharing"},"Click here to view resum\xe9.")))}var f=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={languages:[]},t.getProjectsLanguages=function(){fetch("https://api.github.com/repos/olinelson/".concat(t.props.name,"/languages")).then(function(e){return e.json()}).then(function(e){var a=[];for(var n in e)a.push(n);t.setState({languages:a})})},t.componentDidMount=function(){t.getProjectsLanguages()},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"project-card"},l.a.createElement("img",{onClick:function(){return window.open(e.props.homepage,"_blank")},className:"website-image",alt:"".concat(this.props.name," screen shot"),src:"https://raw.githubusercontent.com/olinelson/".concat(this.props.name,"/master/public/preview_image.jpg")}),l.a.createElement("h5",null,this.props.name.replace(/_/g," ")),l.a.createElement("p",null,this.props.description),l.a.createElement("a",{href:this.props.gitHubLink},l.a.createElement(g.a,{icon:["fab","github"]})),l.a.createElement("a",{href:this.props.homepage},l.a.createElement(g.a,{icon:"desktop"})),l.a.createElement("div",{className:"languages-grid"},this.state.languages.map(function(e){return l.a.createElement("small",null,e)})))}}]),a}(n.Component),b=t(44),w=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={starredProjects:[]},t.getGitHubStarredProjects=function(){fetch("https://api.github.com/users/olinelson/starred").then(function(e){return e.json()}).then(function(e){return t.setState({starredProjects:e})})},t.componentDidMount=function(){t.getGitHubStarredProjects()},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"projects container"},l.a.createElement("h4",null,"projects"),l.a.createElement("div",{className:"projects-grid"},this.state.starredProjects.map(function(e){return l.a.createElement(f,{key:b(),name:e.name,gitHubLink:e.html_url,description:e.description,homepage:e.homepage})})))}}]),a}(n.Component);function y(){return l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement(g.a,{icon:"copyright"})," Oli Nelson ",(new Date).getFullYear()))}function z(){return l.a.createElement("div",{className:"technical-skills container"},l.a.createElement("h4",null,"technical skills"),l.a.createElement("div",{className:"technical-skills-grid"},l.a.createElement("p",null,l.a.createElement(g.a,{className:"logo",icon:"gem"})," Ruby"),l.a.createElement("p",null,l.a.createElement(g.a,{className:"logo",icon:["fab","js"]})," Javascript"),l.a.createElement("p",null,l.a.createElement("img",{className:"logo",alt:"Ruby on Rails logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ruby_on_Rails_logo.svg/256px-Ruby_on_Rails_logo.svg.png"})," ","Ruby on Rails"),l.a.createElement("p",null,l.a.createElement(g.a,{className:"logo",icon:["fab","react"]})," React"),l.a.createElement("p",null,l.a.createElement("svg",{className:"logo",width:"2500",height:"2383",viewBox:"0 0 256 244",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},l.a.createElement("path",{d:"M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z",fill:"#764ABC"}))," ","Redux"),l.a.createElement("p",null,l.a.createElement("img",{alt:"javascript web token logo",className:"logo",src:"http://jwt.io/img/icon.svg"})," JWT"),l.a.createElement("p",null,l.a.createElement("svg",{className:"logo",width:"2424",height:"2500",viewBox:"0 0 256 264",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMin meet"},l.a.createElement("path",{d:"M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99.087-.729.167-1.425.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351"}),l.a.createElement("path",{d:"M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002",fill:"#336791"}),l.a.createElement("path",{d:"M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28.282.04.563.058.842.058 3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35M196.86 81.599c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863.258 0 .518-.017.78-.054 2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225",fill:"#FFF"}),l.a.createElement("path",{d:"M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016zM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473.313.255.656.508 1.032.756 6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772z",fill:"#FFF"}))," ","PostgreSQL"),l.a.createElement("p",null,l.a.createElement("svg",{className:"logo",width:"2500",height:"1113",viewBox:"0 0 512 228",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},l.a.createElement("defs",null,l.a.createElement("linearGradient",{x1:"57.662%",y1:"2.046%",x2:"57.662%",y2:"94.439%",id:"a"},l.a.createElement("stop",{"stop-color":"#97D9F6",offset:"0%"}),l.a.createElement("stop",{"stop-color":"#0F80CC",offset:"92.024%"}),l.a.createElement("stop",{"stop-color":"#0F80CC",offset:"100%"}))),l.a.createElement("path",{d:"M194.52 112.044c-6.821 0-12.368 2.02-16.62 6.055-4.251 4.04-6.408 9.335-6.408 15.824 0 3.362.535 6.428 1.59 9.237 1.056 2.815 2.699 5.423 4.907 7.78 2.208 2.358 6.628 5.561 13.215 9.635 8.084 4.934 13.373 8.939 15.912 12.066 2.54 3.124 3.801 6.398 3.801 9.812 0 4.57-1.504 8.219-4.597 10.961-3.097 2.744-7.24 4.11-12.375 4.11-5.417 0-10.136-1.909-14.188-5.7-4.052-3.798-6.098-8.821-6.144-15.117h-2.52v22.851h2.52c.77-2.164 1.834-3.27 3.227-3.27.67 0 2.24.461 4.685 1.325 5.949 2.117 10.834 3.138 14.674 3.138 6.617 0 12.266-2.317 16.972-7.027 4.7-4.708 7.072-10.387 7.072-17.017 0-5.14-1.566-9.715-4.64-13.701-3.075-3.992-9.054-8.635-17.99-13.967-7.689-4.62-12.68-8.382-14.983-11.315-2.307-2.929-3.492-6.169-3.492-9.724 0-3.845 1.413-6.934 4.199-9.238 2.786-2.305 6.437-3.447 11.006-3.447 5.14 0 9.426 1.526 12.817 4.597 3.388 3.076 5.347 7.339 5.923 12.817h2.52v-19.8h-2.343c-.287 1.009-.552 1.654-.796 1.944-.237.288-.693.442-1.37.442-.815 0-2.268-.343-4.332-1.017-4.42-1.488-8.495-2.254-12.243-2.254zm82.342 0c-8.311 0-15.857 1.96-22.674 5.879-6.828 3.912-12.233 9.345-16.221 16.265-3.987 6.92-5.967 14.268-5.967 22.1 0 10.52 3.444 19.894 10.387 28.11 6.946 8.21 15.27 13.326 24.928 15.293 2.208 1.15 5.367 4.12 9.503 8.928 4.66 5.425 8.603 9.338 11.845 11.668a35.592 35.592 0 0 0 10.43 5.172c3.7 1.126 7.699 1.68 12.023 1.68 5.237 0 9.925-.911 14.055-2.785l-.928-2.299c-2.397.865-4.954 1.282-7.646 1.282-3.655 0-7.348-1.205-11.05-3.624-3.697-2.426-8.32-7.053-13.834-13.879-2.592-3.27-4.381-5.334-5.393-6.143 10.568-2.064 19.257-7.185 26.034-15.382 6.774-8.192 10.165-17.542 10.165-28.022 0-12.442-4.427-22.9-13.215-31.425-8.796-8.527-19.612-12.818-32.442-12.818zm51.403 0l.133 2.696c5.533 0 8.633 1.63 9.326 4.906.258 1.173.376 3.337.397 6.453l-.044 59.625c-.046 4.453-.68 7.296-1.9 8.53-1.222 1.225-3.287 1.993-6.276 2.298l-.133 2.697h55.16l1.415-13.525h-2.52c-.72 3.684-2.369 6.324-4.994 7.823-2.633 1.51-7.288 2.254-14.011 2.254h-5.216c-6.05 0-9.55-2.187-10.475-6.586-.19-.87-.256-1.803-.265-2.828l.22-60.288c0-4.446.561-7.425 1.725-8.884 1.175-1.453 3.295-2.266 6.364-2.475l-.132-2.696h-28.774zm-50.52 3.27c9.375 0 17.028 3.693 22.94 11.139 5.91 7.449 8.84 17.658 8.84 30.586 0 12.25-2.972 22.058-8.928 29.436-5.957 7.376-13.884 11.05-23.735 11.05-9.464 0-17.139-3.789-23.028-11.403-5.884-7.615-8.795-17.501-8.795-29.658 0-12.492 2.947-22.492 8.884-29.967 5.933-7.466 13.878-11.182 23.823-11.182zm126.852 12.819c-1.346 0-2.371.454-3.138 1.37-.785.912-1.026 2.017-.752 3.359.265 1.302 1 2.442 2.166 3.403 1.16.96 2.411 1.459 3.757 1.459 1.301 0 2.293-.499 3.005-1.459.713-.96.93-2.101.663-3.403-.274-1.342-.983-2.447-2.077-3.36-1.107-.915-2.323-1.37-3.624-1.37zm36.375 9.149c-2.286 8.794-7.241 13.553-14.85 14.32l.088 2.52h8.884l-.177 29.79c.014 5.093.17 8.484.53 10.21.876 4.131 3.574 6.232 8.089 6.232 6.533 0 13.385-3.98 20.552-11.934l-2.165-1.856c-5.175 5.238-9.75 7.867-13.746 7.867-2.456 0-3.978-1.412-4.553-4.199-.157-.677-.22-1.468-.22-2.387l.088-33.723h13.569l-.133-4.023h-13.392v-12.817h-2.564zm52.464 11.226c-7.59 0-13.763 3.685-18.563 11.006-4.775 7.333-6.253 15.458-4.376 24.398 1.105 5.236 3.306 9.294 6.674 12.154 3.363 2.86 7.629 4.288 12.73 4.288 4.748 0 11.36-1.203 14.143-3.625 2.79-2.42 5.36-6.342 7.735-11.712l-1.9-1.99c-3.788 6.968-11.43 10.476-17.194 10.476-7.924 0-12.777-4.348-14.586-12.995a31.614 31.614 0 0 1-.53-3.536c9.427-1.492 16.571-4.135 21.392-7.955 4.818-3.823 9.655-7.875 8.752-12.155-.538-2.544-1.858-4.544-3.89-6.055-2.058-1.511-7.4-2.299-10.387-2.299zm-82.96.31l-16.354 3.757v2.917l5.657-.707c2.74 0 4.353 1.24 4.862 3.712.171.827.28 1.99.31 3.448l-.178 26.74c-.045 3.7-.456 5.851-1.281 6.497-.833.647-3.029.973-6.586.973l-.088 2.519h25.944l-.044-2.52c-3.605 0-5.942-.284-6.983-.84-1.024-.55-1.73-1.555-2.033-3.093-.235-1.108-.338-3.018-.354-5.657l.089-37.746h-2.962zm78.806 4.95c1.579 0 3.104.61 4.64 1.812 1.516 1.198 2.439 2.53 2.741 3.978 1.48 7.11-4.823 12.024-19.006 14.762-.404-5.183.494-9.89 2.785-14.143 2.274-4.25 5.235-6.409 8.84-6.409z",fill:"#003B57"}),l.a.createElement("path",{d:"M157.888 9.952H17.15C7.717 9.952 0 17.67 0 27.102V182.31c0 9.432 7.717 17.15 17.15 17.15h92.693c-1.052-46.122 14.698-135.63 48.045-189.508z",fill:"#0F80CC"}),l.a.createElement("path",{d:"M152.775 14.955H17.15c-6.698 0-12.148 5.449-12.148 12.148v143.883c30.716-11.788 76.817-21.96 108.693-21.498 6.406-33.494 25.232-99.134 39.08-134.533z",fill:"url(#a)"}),l.a.createElement("path",{d:"M190.715 4.872c-9.639-8.595-21.31-5.143-32.827 5.08-1.71 1.518-3.416 3.203-5.113 5.003-19.704 20.903-37.994 59.62-43.676 89.19 2.214 4.489 3.943 10.217 5.081 14.593.292 1.122.555 2.176.766 3.072.5 2.122.769 3.497.769 3.497s-.177-.668-.902-2.77c-.138-.403-.292-.843-.474-1.361a15.78 15.78 0 0 0-.304-.752c-1.285-2.988-4.84-9.294-6.405-12.04a300.723 300.723 0 0 0-3.511 10.983c4.517 8.265 7.27 22.429 7.27 22.429s-.239-.918-1.374-4.122c-1.008-2.833-6.027-11.628-7.216-13.684-2.034 7.509-2.842 12.578-2.113 13.812 1.415 2.391 2.762 6.518 3.946 11.081 2.673 10.28 4.53 22.796 4.53 22.796s.06.83.162 2.106c-.372 8.633-.149 17.584.52 25.674.885 10.71 2.552 19.91 4.677 24.834l1.443-.786c-3.12-9.701-4.388-22.414-3.833-37.076.84-22.41 5.997-49.437 15.526-77.606 16.1-42.523 38.436-76.641 58.879-92.935-18.633 16.828-43.851 71.297-51.4 91.467-8.453 22.588-14.443 43.784-18.053 64.092 6.229-19.039 26.368-27.222 26.368-27.222s9.877-12.182 21.42-29.586c-6.914 1.577-18.268 4.277-22.071 5.875-5.61 2.353-7.121 3.156-7.121 3.156s18.17-11.066 33.76-16.076c21.44-33.768 44.799-81.74 21.276-102.724",fill:"#003B57"}))),l.a.createElement("p",null,l.a.createElement("svg",{className:"logo",width:"2500",height:"2217",viewBox:"0 0 256 227",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMin meet"},l.a.createElement("path",{d:"M81.558 190.482l-44.94-77.835 44.94-77.836h89.876l44.939 77.836-44.94 77.835H81.559",fill:"#CAC9C2"}),l.a.createElement("path",{d:"M127.997 148.176c-19.315 0-35.028-15.714-35.028-35.029 0-19.314 15.713-35.027 35.028-35.027 19.314 0 35.027 15.713 35.027 35.027 0 19.315-15.713 35.029-35.027 35.029",fill:"#FFF"}),l.a.createElement("path",{d:"M198.465 8.716C195.71 3.946 188.95.044 183.443.044H72.7c-5.508 0-12.268 3.903-15.021 8.672L25.32 64.764c-.254 3.621.41 7.403 2.007 10.167l21.904 37.45L88.332 44.83h123.59c2.924 0 6.196 1.107 9.04 2.851L198.465 8.716",fill:"#5072AA"}),l.a.createElement("path",{d:"M26.727 62.311l-1.416 2.453c-.254 3.621.41 7.403 2.006 10.167l21.904 37.45L60.875 92.25 26.727 62.311",fill:"#4D6796"}),l.a.createElement("path",{d:"M75.554 28.837a6.766 6.766 0 0 1-6.758-6.758 6.766 6.766 0 0 1 6.758-6.758 6.765 6.765 0 0 1 6.759 6.758 6.766 6.766 0 0 1-6.759 6.758M186.296 22.079a6.258 6.258 0 1 1-12.515 0 6.258 6.258 0 0 1 12.515 0z",fill:"#FFF"}),l.a.createElement("g",null,l.a.createElement("path",{d:"M253.837 104.624L220.962 47.68c-2.844-1.744-6.116-2.85-9.04-2.85h-44.568l38.537 67.924-61.012 107.794c-1.343 2.324-3.639 4.439-6.275 6h44.839c5.508 0 12.268-3.903 15.022-8.672l55.372-95.907c2.755-4.77 2.755-12.575 0-17.345",fill:"#CC4232"}),l.a.createElement("path",{d:"M222.446 50.235l-1.474-2.555c-2.842-1.744-6.114-2.85-9.038-2.85h-44.568l11.6 20.447 43.48-15.042",fill:"#B23F33"}),l.a.createElement("path",{d:"M180.038 209.982a6.766 6.766 0 0 1-6.758-6.759 6.766 6.766 0 0 1 6.758-6.758 6.766 6.766 0 0 1 6.759 6.758 6.766 6.766 0 0 1-6.759 6.759M232.634 119.906a6.766 6.766 0 0 1-6.759-6.759 6.766 6.766 0 0 1 6.759-6.758 6.766 6.766 0 0 1 6.758 6.758 6.765 6.765 0 0 1-6.758 6.759",fill:"#FFF"})),l.a.createElement("g",null,l.a.createElement("path",{d:"M89.184 180.69L27.327 74.93c-1.596-2.764-2.26-6.546-2.007-10.167l-23.013 39.86c-2.754 4.77-2.754 12.575 0 17.345l55.372 95.907c2.753 4.769 9.513 8.671 15.021 8.671h65.904c2.636-1.56 4.932-3.675 6.275-6l22.559-39.857H89.184",fill:"#ECB02A"}),l.a.createElement("path",{d:"M134.857 226.547h3.833c2.637-1.56 4.932-3.675 6.274-6l22.56-39.857H143.5l-8.643 45.857",fill:"#C79732"}),l.a.createElement("path",{d:"M75.554 209.982a6.766 6.766 0 0 1-6.758-6.759 6.766 6.766 0 0 1 6.758-6.758 6.765 6.765 0 0 1 6.759 6.758 6.765 6.765 0 0 1-6.759 6.759M22.865 119.906a6.766 6.766 0 0 1-6.759-6.759 6.766 6.766 0 0 1 6.759-6.758 6.766 6.766 0 0 1 6.758 6.758 6.766 6.766 0 0 1-6.758 6.759",fill:"#FFF"})))," ","Google Cloud"),l.a.createElement("p",null,l.a.createElement("svg",{className:"logo",xmlns:"http://www.w3.org/2000/svg",width:"1771",height:"2500",viewBox:"74.634 0 362.733 512"},l.a.createElement("path",{d:"M107.644 470.877L74.634 100.62h362.733l-33.046 370.199L255.778 512z"}),l.a.createElement("path",{d:"M256 480.522l120.03-33.276 28.24-316.352H256z"}),l.a.createElement("g",{fill:"#ebebeb"},l.a.createElement("path",{d:"M256 268.217h-60.09l-4.15-46.501H256v-45.411H142.132l1.087 12.183 11.161 125.139H256zM256 386.153l-.198.053-50.575-13.656-3.233-36.217h-45.585l6.362 71.301 93.02 25.823.209-.058z"})),l.a.createElement("path",{d:"M108.382 0h23.077v22.8h21.11V0h23.078v69.044H152.57v-23.12h-21.11v23.12h-23.076V0h-.002zM205.994 22.896h-20.315V0h63.72v22.896h-20.325v46.148h-23.078l-.002-46.148zM259.511 0h24.062l14.802 24.26L313.163 0h24.072v69.044h-22.982V34.822l-15.877 24.549h-.396l-15.889-24.549v34.222h-22.579V0zM348.72 0h23.084v46.222h32.453v22.822H348.72V0z"}),l.a.createElement("g",{fill:"#fff"},l.a.createElement("path",{d:"M255.844 268.217v45.41h55.917l-5.271 58.894-50.646 13.67v47.244l93.093-25.801.683-7.672 10.671-119.551 1.108-12.194h-12.237zM255.844 176.305V221.716h109.687l.911-10.207 2.069-23.021 1.086-12.183z"})))," ","HTML"),l.a.createElement("p",null,l.a.createElement("svg",{className:"logo","enable-background":"new 0 0 1771 2499.8",viewBox:"0 0 1771 2499.8",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"m1387.8 92.5h-146.9l152.8 165.9v78.9h-314.8v-92.4h152.8l-152.8-165.9v-79h309zm-371.4 0h-147.1l153 165.9v78.9h-314.9v-92.4h152.8l-152.8-165.9v-79h309zm-367.8 3.8h-158.5v144.8h158.5v96.3h-271.3v-337.4h271.3z",fill:"#131313"}),l.a.createElement("path",{d:"m161.2 2299.1-161.2-1807.7h1771l-161.4 1807.4-725.2 201z",fill:"#1572b6"}),l.a.createElement("path",{d:"m885.5 2346.2 586-162.5 137.8-1544.5h-723.8z",fill:"#33a9dc"}),l.a.createElement("path",{d:"m885.5 1294.1h293.4l20.2-227h-313.6v-221.6h556l-5.3 59.5-54.5 611h-496.2z",fill:"#fff"}),l.a.createElement("path",{d:"m886.7 1869.9h-1l-246.9-66.7-15.8-176.8h-222.4l31.1 348.1 454.2 126.4h1.3v-231z",fill:"#ebebeb"}),l.a.createElement("path",{d:"m1160.1 1506.3-26.7 296.7-247.3 66.7v231l454.5-126 3.3-37.5 38.6-431h-222.4z",fill:"#fff"}),l.a.createElement("path",{d:"m886.3 845.5v221.7h-535.4l-4.6-49.8-10.1-112.4-5.3-59.5zm-.8 448.6v221.7h-244.1l-4.3-49.8-10.1-112.4-5.3-59.5h263.7z",fill:"#ebebeb"}))," ","CSS"),l.a.createElement("p",null,l.a.createElement("svg",{className:"logo",width:"2500",height:"1055",viewBox:"0 0 256 108",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMin meet"},l.a.createElement("path",{d:"M152.984 37.214c-5.597 0-9.765 2.748-9.765 9.362 0 4.983 2.747 8.443 9.463 8.443 5.693 0 9.56-3.355 9.56-8.65 0-6-3.46-9.155-9.258-9.155zm-11.19 46.701c-1.325 1.625-2.645 3.353-2.645 5.39 0 4.067 5.186 5.291 12.31 5.291 5.9 0 13.938-.414 13.938-5.9 0-3.261-3.867-3.462-8.753-3.768l-14.85-1.013zm30.113-46.394c1.828 2.34 3.764 5.597 3.764 10.276 0 11.292-8.851 17.904-21.667 17.904-3.259 0-6.209-.406-8.038-.914l-3.359 5.39 9.969.61c17.602 1.122 27.975 1.632 27.975 15.157 0 11.702-10.272 18.311-27.975 18.311-18.413 0-25.433-4.68-25.433-12.716 0-4.578 2.035-7.015 5.596-10.378-3.358-1.419-4.476-3.961-4.476-6.71 0-2.24 1.118-4.273 2.952-6.208 1.83-1.93 3.864-3.865 6.306-6.103-4.984-2.442-8.75-7.732-8.75-15.262 0-11.697 7.733-19.731 23.295-19.731 4.376 0 7.022.402 9.362 1.017h19.84v8.644l-9.361.713zM199.166 19.034c-5.8 0-9.157-3.36-9.157-9.161 0-5.793 3.356-8.95 9.157-8.95 5.9 0 9.258 3.157 9.258 8.95 0 5.801-3.357 9.161-9.258 9.161zM186.04 80.171v-8.033l5.19-.71c1.425-.205 1.627-.509 1.627-2.038V39.48c0-1.116-.304-1.832-1.325-2.134l-5.492-1.935 1.118-8.238h21.061V69.39c0 1.63.098 1.833 1.629 2.039l5.188.71v8.032H186.04zM255.267 76.227c-4.376 2.135-10.785 4.068-16.586 4.068-12.106 0-16.682-4.878-16.682-16.38V37.264c0-.61 0-1.017-.817-1.017h-7.12V27.19c8.955-1.02 12.513-5.496 13.632-16.585h9.666v14.45c0 .71 0 1.017.815 1.017h14.343v10.173H237.36v24.313c0 6.002 1.426 8.34 6.917 8.34 2.852 0 5.799-.71 8.24-1.626l2.75 8.954",fill:"#2F2707"}),l.a.createElement("path",{d:"M104.529 49.53L58.013 3.017a6.86 6.86 0 0 0-9.703 0l-9.659 9.66 12.253 12.252a8.145 8.145 0 0 1 8.383 1.953 8.157 8.157 0 0 1 1.936 8.434L73.03 47.125c2.857-.984 6.154-.347 8.435 1.938a8.161 8.161 0 0 1 0 11.545 8.164 8.164 0 0 1-13.324-8.88L57.129 40.716l-.001 28.98a8.248 8.248 0 0 1 2.159 1.544 8.164 8.164 0 0 1 0 11.547c-3.19 3.19-8.36 3.19-11.545 0a8.164 8.164 0 0 1 2.672-13.328v-29.25a8.064 8.064 0 0 1-2.672-1.782c-2.416-2.413-2.997-5.958-1.759-8.925l-12.078-12.08L2.011 49.314a6.863 6.863 0 0 0 0 9.706l46.516 46.514a6.862 6.862 0 0 0 9.703 0l46.299-46.297a6.866 6.866 0 0 0 0-9.707",fill:"#DE4C36"})))))}function M(){return l.a.createElement(n.Fragment,null,l.a.createElement(p,{display:"code"}),l.a.createElement("div",{className:"code-page"},l.a.createElement(v,null),l.a.createElement(w,null),l.a.createElement(z,null)),l.a.createElement(y,null))}function N(){return l.a.createElement("div",{className:"social-bar"},l.a.createElement("a",{href:"https://www.youtube.com/user/MrOlibobo"},l.a.createElement(g.a,{icon:["fab","youtube"]})),l.a.createElement("a",{href:"https://www.facebook.com/oli.nelson1"},l.a.createElement(g.a,{icon:["fab","facebook"]})),l.a.createElement("a",{href:"https://www.instagram.com/olinelsondrums/"},l.a.createElement(g.a,{icon:["fab","instagram"]})),l.a.createElement("a",{href:"https://medium.com/@olinelson93"},l.a.createElement(g.a,{icon:["fab","medium"]})))}function j(){return l.a.createElement("div",{className:"about container"},l.a.createElement("h4",null,"about"),l.a.createElement("p",null,"Oli Nelson is an acclaimed Australian drummer from Sydney Australia, now based in New York City. He has performed alongside leading jazz artists including Arturo Sandoval, James Muller, Mike Nock, Gian Slater, Kristin Berardi, and the Jazzgroove Mothership Orchestra. In 2016, he played on both the Sydney Conservatorium Big Band\u2019s album \u2018Okay\u2019 featuring James Muller (54 Records), and Hieronymus Trio\u2019s debut album, both recorded at renowned Systems Two studios in New York. As a member of Hieronymus Trio, he also recorded at the ABC (\u2018Where the Rest of the World Begins\u2019 - 54 Records 2017), performed at the Sydney Conservatorium International Jazz Festival (2017), and the Freedman Jazz Finals held at the Sydney Opera House (2017). Oli has appeared at major jazz venues across Australia as well as touring internationally, including with the Sydney Conservatorium Big Band, who performed at the prestigious Midwest Clinic in Chicago IL on their 2015/16 USA tour. He is known as a versatile and innovative artist who enjoys performing both \u2018within\u2019 and \u2018on the edges\u2019 of the jazz and improvised dialects."))}function k(){return l.a.createElement("div",{className:"albums container"},l.a.createElement("h4",null,"albums"),l.a.createElement("div",{className:"albums-grid container"},l.a.createElement("a",{href:"https://54records.com.au/hieronymus-trio-where-the-rest-of-the-world-begins"},l.a.createElement("img",{alt:"where the rest of the world begins album cover",src:"images/wtrotwb.jpg"})),l.a.createElement("a",{href:"https://trashcandream.bandcamp.com/track/out-on-the-sea-single-release"},l.a.createElement("img",{alt:"trash can dream album cover",src:"images/tcd.jpg"})),l.a.createElement("a",{href:"https://54records.com.au/james-muller-big-band-okay"},l.a.createElement("img",{alt:"sydney conservatorium jazz orchestra album cover",src:"images/scjo.jpg"})),l.a.createElement("a",{alt:"hieronymus trio album cover",href:"https://hieronymustrio.bandcamp.com/releases"},l.a.createElement("img",{alt:"hieronymus trio album cover",src:"images/hrt.jpg"}))))}function C(){return l.a.createElement("div",{className:"press-container"},l.a.createElement("div",{className:"press-card"},l.a.createElement(g.a,{className:"quote-left",icon:"quote-left"}),l.a.createElement("p",null,"Fearlessly individualistic talent who defies easy categorization"),l.a.createElement(g.a,{icon:"quote-right"}),l.a.createElement("a",{href:"https://newyorkmusicdaily.wordpress.com/2018/04/27/egs/"},"delarue | New York Music Daily")),l.a.createElement("div",{className:"press-card"},l.a.createElement(g.a,{className:"quote-left",icon:"quote-left"}),l.a.createElement("p",null,"An astonishing big band made up of some of Australia\u2019s most accomplished young lions"),l.a.createElement(g.a,{icon:"quote-right"}),l.a.createElement("a",{href:"http://toypianorecords.de/Archive/260"},"John Mcbeath | Toy Piano Records")),l.a.createElement("div",{className:"press-card"},l.a.createElement(g.a,{className:"quote-left",icon:"quote-left"}),l.a.createElement("p",null,"The band was fuelled by the formidable talent of drummer Oli Nelson"),l.a.createElement(g.a,{icon:"quote-right"}),l.a.createElement("a",{href:"https://scenestr.com.au/music/jazzgroove-mothership-orchestra-brisbane-powerhouse-review"},"Lynette Irwin | Scenestr.")),l.a.createElement("div",{className:"press-card"},l.a.createElement(g.a,{className:"quote-left",icon:"quote-left"}),l.a.createElement("p",null,"This has such a fragile, diaphanous beauty that I sometimes had to remind myself to breathe as I listened"),l.a.createElement(g.a,{icon:"quote-right"}),l.a.createElement("a",{href:"https://www.smh.com.au/entertainment/music/music-reviews-the-killers-grizzly-bear-gian-slater-and-more-20170821-gy0xpc.html"},"John Shand | The Sydney Morning Herald")))}function F(){return l.a.createElement(n.Fragment,null,l.a.createElement(p,{display:"drums"}),l.a.createElement("div",{className:"drums-page"},l.a.createElement("img",{alt:"oli nelson promo",className:"banner-image",src:"images/promo1.jpg"}),l.a.createElement(j,null),l.a.createElement(N,null),l.a.createElement(k,null),l.a.createElement(C,null)),l.a.createElement(y,null))}function x(){return l.a.createElement(n.Fragment,null,l.a.createElement(p,{display:"home"}),l.a.createElement("div",{className:"home-page"},l.a.createElement(u.b,{to:"/code"},"code "),l.a.createElement(u.b,{to:"/drums"},"drums ")))}var A=t(17),H=t(26),O=t(9);t(47).config(),A.b.add(H.a,O.f,O.e,O.d,O.b,O.c,O.a);var R=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,{basename:"/"},l.a.createElement("div",{className:"app"},l.a.createElement(d.a,{path:"/code",exact:!0,component:M}),l.a.createElement(d.a,{path:"/drums",exact:!0,component:F}),l.a.createElement(d.a,{path:"/",exact:!0,component:x})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.3076f2de.chunk.js.map