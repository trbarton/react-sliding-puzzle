(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(8),l=n.n(i),o=(n(15),n(1)),c=n(2),s=n(5),u=n(3),h=n(4),f=n(6),m=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).clickHandler=function(){n.props.restart()},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{id:"menu"},r.a.createElement("h3",{id:"subtitle"},this.props.status),r.a.createElement("a",{className:this.props.winClass,onClick:this.clickHandler},"Restart"))}}]),e}(a.Component),d=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).clickHandler=function(t){console.log(n.props),n.props.tileClick(t.target,n.props.pos,n.props.status)},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"tile",onClick:this.clickHandler},this.props.status)}}]),e}(a.Component),p=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).shuffle=function(t){return function(t){return t.map(function(e,n){for(var a=0,r=n+1;r<t.length;r++)t[r]&&t[r]<e&&(a+=1);return a}).reduce(function(t,e){return t+e})}(t=function(t){for(var e,n,a=t.length;a>0;)n=Math.floor(Math.random()*a),e=t[--a],t[a]=t[n],t[n]=e;return t}(t))%2!==0&&(t=function(t){for(var e=0;!t[e]||!t[e+1];)e++;var n=t[e];return t[e]=t[e+1],t[e+1]=n,t}(t)),t},n.getInitialState=function(){return{tiles:n.shuffle([1,2,3,4,5,6,7,8,""]),win:!1}},n.checkBoard=function(){for(var t=n.state.tiles,e=0;e<t.length-1;e++)if(t[e]!==e+1)return!1;return!0},n.tileClick=function(t,e,a){console.log("position: ".concat(e));var r=n.state.tiles,i=[[null,1,3,null],[null,2,4,0],[null,null,5,1],[0,4,6,null],[1,5,7,3],[2,null,8,4],[3,7,null,null],[4,8,null,6],[5,null,null,7]];function l(e,n){var a=document.querySelector(".tile:nth-child("+(n+1)+")"),r=["up","right","down","left"][e];t.classList.add("move-"+r),setTimeout(function(){a.classList.add("highlight"),t.classList.remove("move-"+r),setTimeout(function(){a.classList.remove("highlight")},400)},200)}function o(){r[e]="",r[s]=a,this.setState({tiles:r,moves:i,win:this.checkBoard()})}if(!n.state.win)for(var c=0;c<i[e].length;c++){var s=i[e][c];if("number"===typeof s&&!r[s]){l(c,s),setTimeout(o.bind(Object(f.a)(Object(f.a)(n))),200);break}}},n.restartGame=function(){n.setState(n.getInitialState())},n.state=n.getInitialState(),n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("div",{id:"game-board"},this.state.tiles.map(function(e,n){return r.a.createElement(d,{status:e,pos:n,tileClick:t.tileClick})})),r.a.createElement(m,{winClass:this.state.win?"button win":"button",status:this.state.win?"You win!":"Solve the puzzle.",restart:this.restartGame}))}}]),e}(a.Component),v=(n(17),function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{id:"game-wrapper"},r.a.createElement("h1",{className:"title"},"ReactJS Slide Puzzle"),r.a.createElement(p,null))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.ff785acc.chunk.js.map