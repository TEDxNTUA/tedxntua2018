!function(t){function n(o){if(i[o])return i[o].exports;var e=i[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,n),e.l=!0,e.exports}var i={};n.m=t,n.c=i,n.d=function(t,i,o){n.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=1)}({1:function(t,n,i){t.exports=i("btEs")},LvWW:function(t,n){var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0;this.valid=t,this.x=n,this.y=i,this.z=o,this.v=e,this.sigma=r,this.rho=a,this.beta=s};o.prototype.integrate=function(t){this.x+=t*this.v*this.sigma*(this.y-this.x),this.y+=t*this.v*(this.x*(this.rho-this.z)-this.y),this.z+=t*this.v*(this.x*this.y-this.beta*this.z)},o.prototype.getCopy=function(){return new o(this.valid,this.x,this.y,this.z,this.v,this.sigma,this.rho,this.beta)};window.Lorenz=function(t){function n(t){return(t+1)/y}function e(t,n){p.fillStyle="rgba("+b.R+","+b.G+","+b.B+","+n+")";var i=d[m.charAt(0)]*t[m.charAt(0)],o=d[m.charAt(1)]*t[m.charAt(1)];p.fillRect(i,o,v,v)}function r(){p.clearRect(-A,-S,f,g)}function a(){r(),function(){for(var t=0;t<y;++t){var i=(t+w+1)%y;x[i].valid&&e(x[i],n(t))}}()}function s(t){null!==u.offsetParent&&(a(),function(t){++w,x[w%=y]=t}(function(t){return z.integrate(t),z.getCopy()}(1))),window.requestAnimationFrame(s)}var c,l,h={target:"lorenz",length:1e3,color:"#FFFFFF",pointSize:3,initial:{x:0,y:10,z:10},scale:{x:10,y:10,z:10},project:"xz",velocity:.008,sigma:10,rho:38,beta:8/3};if("object"===(void 0===t?"undefined":i(t)))for(c in t)l=t[c],h[c]=l;var u=document.getElementById(h.target),f=u.clientWidth,g=u.clientHeight,p=u.getContext("2d"),y=h.length,v=h.pointSize,d=h.scale,m=h.project,b={R:parseInt(h.color.substring(1,3),16),G:parseInt(h.color.substring(3,5),16),B:parseInt(h.color.substring(5,7),16)},z=new o(!0,h.initial.x,h.initial.y,h.initial.z,h.velocity,h.sigma,h.rho,h.beta),x=[],w=0,A=f/2,S=g/2;"z"==m.charAt(0)&&(A=0),"z"==m.charAt(1)&&(S=g),p.translate(A,S),x.push(z);for(var F=1;F<y;++F)x.push(new o);return{run:function(){window.requestAnimationFrame(s)},clear:function(){r()}}}},btEs:function(t,n,i){i("LvWW"),window.homeAnimations=function(){var t=Lorenz({target:"lorenz",length:1e3,color:"#E62B1E",pointSize:4,initial:{x:30,y:0,z:400},scale:{x:15,y:6,z:-8},project:"xz",velocity:.008,sigma:10,rho:28,beta:8/3}),n=parseInt($("#logo-animation").width()/2),i=parseInt($("#logo-animation").height()/2),o=$("#logo-animation .container").attr("transform");$("#logo-animation .container").attr("transform","translate("+n+", "+i+")"+o),$("#logo-animation .container g").css("animation-play-state","running"),window.setTimeout(function(){t.run(),$("#logo-animation").fadeOut(2e3),$("#hero .section-content").addClass("slideIn")},5e3)}}});