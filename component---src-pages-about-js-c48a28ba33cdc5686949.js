(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+NU8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},o=function(e){return i(e,"overflow")+i(e,"overflow-y")+i(e,"overflow-x")};t.default=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(o(t)))return t;t=t.parentNode}return window}},"7UuI":function(e,t,n){},"8ycl":function(e,t,n){},"9/5/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,r=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")(),f=Object.prototype.toString,d=Math.max,s=Math.min,p=function(){return c.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=o.test(e);return l||a.test(e)?r(e.slice(2),l?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var i,o,a,r,l,u,c=0,f=!1,h=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=i,a=o;return i=o=void 0,c=t,r=e.apply(a,n)}function g(e){return c=e,l=setTimeout(w,t),f?v(e):r}function x(e){var n=e-u;return void 0===u||n>=t||n<0||h&&e-c>=a}function w(){var e=p();if(x(e))return E(e);l=setTimeout(w,function(e){var n=t-(e-u);return h?s(n,a-(e-c)):n}(e))}function E(e){return l=void 0,b&&i?v(e):(i=o=void 0,r)}function _(){var e=p(),n=x(e);if(i=arguments,o=this,u=e,n){if(void 0===l)return g(u);if(h)return l=setTimeout(w,t),v(u)}return void 0===l&&(l=setTimeout(w,t)),r}return t=m(t)||0,y(n)&&(f=!!n.leading,a=(h="maxWait"in n)?d(m(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),_.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=u=o=l=void 0},_.flush=function(){return void 0===l?r:E(p())},_}}).call(this,n("yLpj"))},AJuI:function(e,t,n){e.exports=n.p+"static/real2-d48640ccacedc2b9f94e88d82111afdd.png"},HVci:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}}},JeI0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n("q1tI"),a=p(o),r=p(n("17x9")),l=n("i8i4"),u=n("UxbX"),c=p(n("9/5/")),f=p(n("hKI/")),d=p(n("+NU8")),s=p(n("pxCl"));function p(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.lazyLoadHandler=n.lazyLoadHandler.bind(n),e.throttle>0&&(e.debounce?n.lazyLoadHandler=(0,c.default)(n.lazyLoadHandler,e.throttle):n.lazyLoadHandler=(0,f.default)(n.lazyLoadHandler,e.throttle)),n.state={visible:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this._mounted=!0;var e=this.getEventNode();this.lazyLoadHandler(),this.lazyLoadHandler.flush&&this.lazyLoadHandler.flush(),(0,u.add)(window,"resize",this.lazyLoadHandler),(0,u.add)(e,"scroll",this.lazyLoadHandler),e!==window&&(0,u.add)(window,"scroll",this.lazyLoadHandler)}},{key:"componentWillReceiveProps",value:function(){this.state.visible||this.lazyLoadHandler()}},{key:"shouldComponentUpdate",value:function(e,t){return t.visible}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this.lazyLoadHandler.cancel&&this.lazyLoadHandler.cancel(),this.detachListeners()}},{key:"getEventNode",value:function(){return(0,d.default)((0,l.findDOMNode)(this))}},{key:"getOffset",value:function(){var e=this.props,t=e.offset,n=e.offsetVertical,i=e.offsetHorizontal,o=e.offsetTop,a=e.offsetBottom,r=e.offsetLeft,l=e.offsetRight,u=e.threshold||t,c=n||u,f=i||u;return{top:o||c,bottom:a||c,left:r||f,right:l||f}}},{key:"lazyLoadHandler",value:function(){if(this._mounted){var e=this.getOffset(),t=(0,l.findDOMNode)(this),n=this.getEventNode();if((0,s.default)(t,n,e)){var i=this.props.onContentVisible;this.setState({visible:!0},(function(){i&&i()})),this.detachListeners()}}}},{key:"detachListeners",value:function(){var e=this.getEventNode();(0,u.remove)(window,"resize",this.lazyLoadHandler),(0,u.remove)(e,"scroll",this.lazyLoadHandler),e!==window&&(0,u.remove)(window,"scroll",this.lazyLoadHandler)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,i=e.height,r=e.width,l=this.state.visible,u={height:i,width:r},c="LazyLoad"+(l?" is-visible":"")+(n?" "+n:"");return a.default.createElement(this.props.elementType,{className:c,style:u},l&&o.Children.only(t))}}]),t}(o.Component);t.default=y,y.propTypes={children:r.default.node.isRequired,className:r.default.string,debounce:r.default.bool,elementType:r.default.string,height:r.default.oneOfType([r.default.string,r.default.number]),offset:r.default.number,offsetBottom:r.default.number,offsetHorizontal:r.default.number,offsetLeft:r.default.number,offsetRight:r.default.number,offsetTop:r.default.number,offsetVertical:r.default.number,threshold:r.default.number,throttle:r.default.number,width:r.default.oneOfType([r.default.string,r.default.number]),onContentVisible:r.default.func},y.defaultProps={elementType:"div",debounce:!0,offset:0,offsetBottom:0,offsetHorizontal:0,offsetLeft:0,offsetRight:0,offsetTop:0,offsetVertical:0,throttle:250}},UxbX:function(e,t,n){var i,o;void 0===(o="function"==typeof(i=function(){function e(e,t){return function(n,i,o,a){n[e]?n[e](i,o,a):n[t]&&n[t]("on"+i,o)}}return{add:e("addEventListener","attachEvent"),remove:e("removeEventListener","detachEvent")}})?i.call(t,n,t,e):i)||(e.exports=o)},"dF/s":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),o=n.n(i),a=(n("uSmJ"),n("AJuI")),r=n.n(a),l=n("vOnD"),u=n("JeI0"),c=n.n(u),f=l.b.div.withConfig({displayName:"AboutStyle__SectionContainer",componentId:"sc-1uaxeyy-0"})(['display:flex;padding:20px;font-family:"Montserrat";max-width:1350px;@media screen and (max-width:760px){flex-wrap:wrap;padding-bottom:0;padding-top:40px;};']),d=l.b.div.withConfig({displayName:"AboutStyle__AboutContainer",componentId:"sc-1uaxeyy-1"})(["flex:0 1 50%;@media screen and (max-width:760px){flex:1 1 100%;}"]),s=l.b.div.withConfig({displayName:"AboutStyle__AboutCopyContainer",componentId:"sc-1uaxeyy-2"})(["padding-top:30px;width:80%;max-width:1350px;margin:0 auto;"]),p=l.b.span.withConfig({displayName:"AboutStyle__AboutCopy",componentId:"sc-1uaxeyy-3"})(["color:white;font-size:25px;line-height:40px;"]),y=Object(l.b)(c.a).withConfig({displayName:"AboutStyle__StyledLazyLoad",componentId:"sc-1uaxeyy-4"})(["height:178px;width:200px;filter:blur(5px);-webkit-filter:blur(5px);margin-right:15px;> img{border-radius:5px;}",""],(function(e){return e.isVisible&&Object(l.a)(["filter:none;-webkit-filter:none;"])})),m=l.b.div.withConfig({displayName:"AboutStyle__Technical",componentId:"sc-1uaxeyy-5"})(['flex:0 1 50%;color:white;align-self:center;font-weight:bold;@media screen and (max-width:760px){flex:1 1 100%;padding-top:40px;padding-bottom:40px;}@media screen and (max-width:600px){flex:1 1 100%;padding-top:40px;}> ul > li{font-size:25px;margin-bottom:15px;position:relative;font-weight:normal;}> h1{font-size:50px;text-align:center;margin:0 auto;margin-bottom:35px;width:fit-content;opacity:0.7;border-radius:3px;background-color:white;color:black;padding:20px;font-family:"Montserrat";font-weight:bold;@media screen and (max-width:835px){font-size:40px;}}']),h=l.b.div.withConfig({displayName:"AboutStyle__StyledCheck",componentId:"sc-1uaxeyy-6"})(["display:flex;justify-content:center;height:25px;width:25px;position:absolute;right:0;top:50%;transform:translateY(-50%);"]),b=l.b.div.withConfig({displayName:"AboutStyle__StyledYellow",componentId:"sc-1uaxeyy-7"})(["position:absolute;right:0;top:50%;transform:translateY(-50%);border-radius:5px;background-color:#fadd08;height:25px;width:25px;"]),v=l.b.div.withConfig({displayName:"AboutStyle__SpecsKey",componentId:"sc-1uaxeyy-8"})(["padding-top:25px;display:inline-flex;width:100%;justify-content:center;@media screen and (max-width:385px){display:flex;flex-wrap:wrap;}> span{display:inline-flex;padding:0px 10px;@media screen and (max-width:385px){flex:1 1 100%;}}> span > div{margin-right:5px;}> span:nth-of-type(1){@media screen and (max-width:385px){padding-bottom:10px;}}"]),g=l.b.div.withConfig({displayName:"AboutStyle__StyledBox",componentId:"sc-1uaxeyy-9"})(["height:16px;width:16px;border-radius:4px;background-color:#fadd08;margin-right:5px;"]),x=function(){var e=Object(i.useState)(!1),t=e[0],n=e[1];return o.a.createElement(f,null,o.a.createElement(d,null,o.a.createElement(y,{width:200,height:178,isVisible:t},o.a.createElement("img",{src:r.a,onLoad:function(){return n(!0)}})),o.a.createElement(s,null,o.a.createElement(p,null,"Hi, I'm Drake McGarrah. I am a full-stack web developer primarily experienced with the MERN (MongoDB, Express, React, Node.js) stack. I enjoy taking people's designs and web page ideas and turning them into reality."))),o.a.createElement(m,null,o.a.createElement("h1",null,"Relevant Skills"),o.a.createElement("ul",null,o.a.createElement("li",null,"HTML",o.a.createElement(h,null,"✅")),o.a.createElement("li",null,"CSS",o.a.createElement(h,null,"✅")),o.a.createElement("li",null,"JavaScript",o.a.createElement(h,null,"✅")),o.a.createElement("li",null,"React",o.a.createElement(h,null,"✅")),o.a.createElement("li",null,"Node.js",o.a.createElement(h,null,"✅")),o.a.createElement("li",null,"Express",o.a.createElement(h,null,"✅")),o.a.createElement("li",null,"MongoDB",o.a.createElement(h,null,"✅")),o.a.createElement("li",null,"GraphQL",o.a.createElement(b,null)),o.a.createElement("li",null,"Redux",o.a.createElement(b,null)),o.a.createElement("li",null,"SQL",o.a.createElement(b,null)),o.a.createElement("li",null,"PHP",o.a.createElement(b,null)),o.a.createElement("li",null,"Ruby on Rails",o.a.createElement(b,null))),o.a.createElement(v,null,o.a.createElement("span",null,o.a.createElement("div",null,"✅"),"= Firm Grasp"),o.a.createElement("span",null,o.a.createElement(g,null),"= Some Experience"))))},w=n("g7kG");t.default=function(){return o.a.createElement(w.a,null,o.a.createElement(x,null))}},g7kG:function(e,t,n){"use strict";var i=n("q1tI"),o=n.n(i),a=n("vOnD"),r=(Object(a.c)(["0%{opacity:0;}100%{opacity:1;}"]),a.b.div.withConfig({displayName:"SecondaryLayoutStyle__PageContainer",componentId:"sc-1xlw38l-0"})(["opacity:",";display:flex;min-height:100vh;flex-direction:column;display:flex;flex-flow:column;height:100%;transition:opacity 1s ease-in;"],(function(e){return e.opacity}))),l=a.b.div.withConfig({displayName:"SecondaryLayoutStyle__FadeContainer",componentId:"sc-1xlw38l-1"})(["opacity:1;background-color:#070707;min-height:100vh;width:100vw;"]),u=a.b.main.withConfig({displayName:"SecondaryLayoutStyle__MainContent",componentId:"sc-1xlw38l-2"})(["display:flex;flex:1 1 auto;align-items:center;justify-content:center;"]),c=n("L+y5");n("8ycl"),t.a=function(e){var t=e.children,n=Object(i.useReducer)((function(e,t){switch(t.type){case"SHOW_OPACITY":return Object.assign({},e,{opacity:1});default:return e}}),{opacity:0}),a=n[0],f=n[1];return Object(i.useEffect)((function(){f({type:"SHOW_OPACITY"})}),[]),o.a.createElement(l,null,o.a.createElement(r,{opacity:a.opacity},o.a.createElement(u,null,t),o.a.createElement(c.a,null)))}},"hKI/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,r=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")(),f=Object.prototype.toString,d=Math.max,s=Math.min,p=function(){return c.Date.now()};function y(e,t,n){var i,o,a,r,l,u,c=0,f=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=i,a=o;return i=o=void 0,c=t,r=e.apply(a,n)}function g(e){return c=e,l=setTimeout(w,t),f?v(e):r}function x(e){var n=e-u;return void 0===u||n>=t||n<0||y&&e-c>=a}function w(){var e=p();if(x(e))return E(e);l=setTimeout(w,function(e){var n=t-(e-u);return y?s(n,a-(e-c)):n}(e))}function E(e){return l=void 0,b&&i?v(e):(i=o=void 0,r)}function _(){var e=p(),n=x(e);if(i=arguments,o=this,u=e,n){if(void 0===l)return g(u);if(y)return l=setTimeout(w,t),v(u)}return void 0===l&&(l=setTimeout(w,t)),r}return t=h(t)||0,m(n)&&(f=!!n.leading,a=(y="maxWait"in n)?d(h(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),_.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=u=o=l=void 0},_.flush=function(){return void 0===l?r:E(p())},_}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=o.test(e);return l||a.test(e)?r(e.slice(2),l?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})}}).call(this,n("yLpj"))},pxCl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,n,i){if(function(e){return null===e.offsetParent}(t))return!1;var o=void 0,r=void 0,l=void 0,u=void 0;if(void 0===n||n===window)o=window.pageYOffset,l=window.pageXOffset,r=o+window.innerHeight,u=l+window.innerWidth;else{if(!e(n,window,i))return!1;var c=(0,a.default)(n);o=c.top,l=c.left,r=o+n.offsetHeight,u=l+n.offsetWidth}var f=(0,a.default)(t);return o<=f.top+t.offsetHeight+i.top&&r>=f.top-i.bottom&&l<=f.left+t.offsetWidth+i.left&&u>=f.left-i.right};var i,o=n("HVci"),a=(i=o)&&i.__esModule?i:{default:i}},uSmJ:function(e,t,n){"use strict";var i=n("q1tI"),o=n.n(i),a=n("vOnD"),r=(Object(a.c)(["0%{opacity:0;}100%{opacity:1;}"]),a.b.div.withConfig({displayName:"LayoutStyle__PageContainer",componentId:"sc-6skoc5-0"})(["opacity:",";background-color:#070707;display:flex;flex-direction:column;display:flex;flex-flow:column;height:100vh;transition:opacity 2s ease-in;"],(function(e){return e.opacity}))),l=a.b.div.withConfig({displayName:"LayoutStyle__FadeContainer",componentId:"sc-6skoc5-1"})(["background-color:#070707;overflow:hidden;height:100vh;width:100vw;"]),u=a.b.main.withConfig({displayName:"LayoutStyle__MainContent",componentId:"sc-6skoc5-2"})(["display:flex;flex:1 1 auto;align-items:center;justify-content:center;position:relative;"]),c=n("L+y5");n("7UuI"),t.a=function(e){var t=e.children,n=Object(i.useReducer)((function(e,t){switch(t.type){case"SHOW_OPACITY":return Object.assign({},e,{opacity:1});default:return e}}),{opacity:0}),a=n[0],f=n[1];return Object(i.useEffect)((function(){setTimeout((function(){f({type:"SHOW_OPACITY"})}),500)}),[]),o.a.createElement(l,null,o.a.createElement(r,{opacity:a.opacity},o.a.createElement(u,null,t),o.a.createElement(c.a,null)))}}}]);
//# sourceMappingURL=component---src-pages-about-js-c48a28ba33cdc5686949.js.map