(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+NU8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},i=function(e){return o(e,"overflow")+o(e,"overflow-y")+o(e,"overflow-x")};t.default=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(i(t)))return t;t=t.parentNode}return window}},"9/5/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,r=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,d=l||u||Function("return this")(),c=Object.prototype.toString,f=Math.max,s=Math.min,p=function(){return d.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=i.test(e);return l||a.test(e)?r(e.slice(2),l?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o,i,a,r,l,u,d=0,c=!1,h=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,a=i;return o=i=void 0,d=t,r=e.apply(a,n)}function g(e){return d=e,l=setTimeout(x,t),c?b(e):r}function w(e){var n=e-u;return void 0===u||n>=t||n<0||h&&e-d>=a}function x(){var e=p();if(w(e))return E(e);l=setTimeout(x,function(e){var n=t-(e-u);return h?s(n,a-(e-d)):n}(e))}function E(e){return l=void 0,v&&o?b(e):(o=i=void 0,r)}function _(){var e=p(),n=w(e);if(o=arguments,i=this,u=e,n){if(void 0===l)return g(u);if(h)return l=setTimeout(x,t),b(u)}return void 0===l&&(l=setTimeout(x,t)),r}return t=y(t)||0,m(n)&&(c=!!n.leading,a=(h="maxWait"in n)?f(y(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),_.cancel=function(){void 0!==l&&clearTimeout(l),d=0,o=u=i=l=void 0},_.flush=function(){return void 0===l?r:E(p())},_}}).call(this,n("yLpj"))},AJuI:function(e,t,n){e.exports=n.p+"static/real2-d48640ccacedc2b9f94e88d82111afdd.png"},HVci:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}}},JeI0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),a=p(i),r=p(n("17x9")),l=n("i8i4"),u=n("UxbX"),d=p(n("9/5/")),c=p(n("hKI/")),f=p(n("+NU8")),s=p(n("pxCl"));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.lazyLoadHandler=n.lazyLoadHandler.bind(n),e.throttle>0&&(e.debounce?n.lazyLoadHandler=(0,d.default)(n.lazyLoadHandler,e.throttle):n.lazyLoadHandler=(0,c.default)(n.lazyLoadHandler,e.throttle)),n.state={visible:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._mounted=!0;var e=this.getEventNode();this.lazyLoadHandler(),this.lazyLoadHandler.flush&&this.lazyLoadHandler.flush(),(0,u.add)(window,"resize",this.lazyLoadHandler),(0,u.add)(e,"scroll",this.lazyLoadHandler),e!==window&&(0,u.add)(window,"scroll",this.lazyLoadHandler)}},{key:"componentWillReceiveProps",value:function(){this.state.visible||this.lazyLoadHandler()}},{key:"shouldComponentUpdate",value:function(e,t){return t.visible}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this.lazyLoadHandler.cancel&&this.lazyLoadHandler.cancel(),this.detachListeners()}},{key:"getEventNode",value:function(){return(0,f.default)((0,l.findDOMNode)(this))}},{key:"getOffset",value:function(){var e=this.props,t=e.offset,n=e.offsetVertical,o=e.offsetHorizontal,i=e.offsetTop,a=e.offsetBottom,r=e.offsetLeft,l=e.offsetRight,u=e.threshold||t,d=n||u,c=o||u;return{top:i||d,bottom:a||d,left:r||c,right:l||c}}},{key:"lazyLoadHandler",value:function(){if(this._mounted){var e=this.getOffset(),t=(0,l.findDOMNode)(this),n=this.getEventNode();if((0,s.default)(t,n,e)){var o=this.props.onContentVisible;this.setState({visible:!0},(function(){o&&o()})),this.detachListeners()}}}},{key:"detachListeners",value:function(){var e=this.getEventNode();(0,u.remove)(window,"resize",this.lazyLoadHandler),(0,u.remove)(e,"scroll",this.lazyLoadHandler),e!==window&&(0,u.remove)(window,"scroll",this.lazyLoadHandler)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.height,r=e.width,l=this.state.visible,u={height:o,width:r},d="LazyLoad"+(l?" is-visible":"")+(n?" "+n:"");return a.default.createElement(this.props.elementType,{className:d,style:u},l&&i.Children.only(t))}}]),t}(i.Component);t.default=m,m.propTypes={children:r.default.node.isRequired,className:r.default.string,debounce:r.default.bool,elementType:r.default.string,height:r.default.oneOfType([r.default.string,r.default.number]),offset:r.default.number,offsetBottom:r.default.number,offsetHorizontal:r.default.number,offsetLeft:r.default.number,offsetRight:r.default.number,offsetTop:r.default.number,offsetVertical:r.default.number,threshold:r.default.number,throttle:r.default.number,width:r.default.oneOfType([r.default.string,r.default.number]),onContentVisible:r.default.func},m.defaultProps={elementType:"div",debounce:!0,offset:0,offsetBottom:0,offsetHorizontal:0,offsetLeft:0,offsetRight:0,offsetTop:0,offsetVertical:0,throttle:250}},UxbX:function(e,t,n){var o,i;void 0===(i="function"==typeof(o=function(){function e(e,t){return function(n,o,i,a){n[e]?n[e](o,i,a):n[t]&&n[t]("on"+o,i)}}return{add:e("addEventListener","attachEvent"),remove:e("removeEventListener","detachEvent")}})?o.call(t,n,t,e):o)||(e.exports=i)},"dF/s":function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),i=n.n(o),a=(n("uSmJ"),n("AJuI")),r=n.n(a),l=n("vOnD"),u=n("JeI0"),d=n.n(u),c=l.d.div.withConfig({displayName:"AboutStyle__SectionContainer",componentId:"sc-1uaxeyy-0"})(['display:flex;padding:20px;font-family:"Montserrat";max-width:1350px;@media screen and (max-width:760px){flex-wrap:wrap;padding-bottom:0;padding-top:40px;};']),f=l.d.div.withConfig({displayName:"AboutStyle__AboutContainer",componentId:"sc-1uaxeyy-1"})(["flex:0 1 50%;@media screen and (max-width:760px){flex:1 1 100%;}"]),s=l.d.div.withConfig({displayName:"AboutStyle__AboutCopyContainer",componentId:"sc-1uaxeyy-2"})(["padding-top:30px;width:80%;max-width:1350px;margin:0 auto;"]),p=l.d.span.withConfig({displayName:"AboutStyle__AboutCopy",componentId:"sc-1uaxeyy-3"})(["color:white;font-size:25px;line-height:40px;"]),m=Object(l.d)(d.a).withConfig({displayName:"AboutStyle__StyledLazyLoad",componentId:"sc-1uaxeyy-4"})(["height:178px;width:200px;filter:blur(5px);-webkit-filter:blur(5px);margin-right:15px;> img{border-radius:5px;}",""],(function(e){return e.isVisible&&Object(l.c)(["filter:none;-webkit-filter:none;"])})),y=l.d.div.withConfig({displayName:"AboutStyle__Technical",componentId:"sc-1uaxeyy-5"})(['flex:0 1 50%;color:white;align-self:center;font-weight:bold;@media screen and (max-width:760px){flex:1 1 100%;padding-top:40px;padding-bottom:40px;}@media screen and (max-width:600px){flex:1 1 100%;padding-top:40px;padding-bottom:0;}> ul > li{font-size:25px;padding-bottom:15px;position:relative;font-weight:normal;}> h1{font-size:50px;text-align:center;padding-bottom:5px;margin:0 auto;margin-bottom:35px;border-bottom:3px solid #dff959;width:fit-content;font-family:"Montserrat";@media screen and (max-width:835px){font-size:40px;}}']),h=l.d.div.withConfig({displayName:"AboutStyle__StyledCheck",componentId:"sc-1uaxeyy-6"})(["position:absolute;right:0;top:50%;transform:translateY(-50%);"]),v=l.d.div.withConfig({displayName:"AboutStyle__StyledYellow",componentId:"sc-1uaxeyy-7"})(["position:absolute;right:0;top:50%;transform:translateY(-50%);border-radius:5px;background-color:#fadd08;height:25px;width:25px;"]),b=l.d.div.withConfig({displayName:"AboutStyle__SpecsKey",componentId:"sc-1uaxeyy-8"})(["padding-top:25px;display:inline-flex;width:100%;justify-content:center;@media screen and (max-width:385px){display:flex;flex-wrap:wrap;}> span{display:inline-flex;padding:0px 10px;@media screen and (max-width:385px){flex:1 1 100%;}}> span > div{margin-right:5px;}> span:nth-of-type(1){@media screen and (max-width:385px){padding-bottom:10px;}}"]),g=l.d.div.withConfig({displayName:"AboutStyle__StyledBox",componentId:"sc-1uaxeyy-9"})(["height:16px;width:16px;border-radius:4px;background-color:#fadd08;margin-right:5px;"]),w=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return i.a.createElement(c,null,i.a.createElement(f,null,i.a.createElement(m,{width:200,height:178,isVisible:t},i.a.createElement("img",{src:r.a,onLoad:function(){return n(!0)}})),i.a.createElement(s,null,i.a.createElement(p,null,"Hi, I'm Drake McGarrah. I am a full-stack web developer primarily experienced with the MERN (MongoDB, Express, React, Node.js) stack. For me it's all about the code - I enjoy taking people's designs and web page ideas and turning them into reality."))),i.a.createElement(y,null,i.a.createElement("h1",null,"Technical Specs"),i.a.createElement("ul",null,i.a.createElement("li",null,"HTML",i.a.createElement(h,null,"✅")),i.a.createElement("li",null,"CSS",i.a.createElement(h,null,"✅")),i.a.createElement("li",null,"JavaScript",i.a.createElement(h,null,"✅")),i.a.createElement("li",null,"React",i.a.createElement(h,null,"✅")),i.a.createElement("li",null,"Node.js",i.a.createElement(h,null,"✅")),i.a.createElement("li",null,"Express",i.a.createElement(h,null,"✅")),i.a.createElement("li",null,"MongoDB",i.a.createElement(h,null,"✅")),i.a.createElement("li",null,"GraphQL",i.a.createElement(v,null)),i.a.createElement("li",null,"Redux",i.a.createElement(v,null)),i.a.createElement("li",null,"SQL",i.a.createElement(v,null)),i.a.createElement("li",null,"PHP",i.a.createElement(v,null))),i.a.createElement(b,null,i.a.createElement("span",null,i.a.createElement("div",null,"✅"),"= Firm Grasp"),i.a.createElement("span",null,i.a.createElement(g,null),"= Some Experience"))))},x=n("g7kG");t.default=function(){return i.a.createElement(x.a,null,i.a.createElement(w,null))}},g7kG:function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),a=n("vOnD"),r=Object(a.e)(["0%{opacity:0;}100%{opacity:1;}"]),l=a.d.div.withConfig({displayName:"SecondaryLayoutStyle__PageContainer",componentId:"sc-1xlw38l-0"})(["opacity:0;display:flex;min-height:100vh;flex-direction:column;display:flex;flex-flow:column;height:100%;",""],(function(e){return"show"===e.opacity&&Object(a.c)(["animation:"," 1s ease-in;opacity:1;"],r)})),u=a.d.div.withConfig({displayName:"SecondaryLayoutStyle__FadeContainer",componentId:"sc-1xlw38l-1"})(["opacity:1;background-color:#070707;min-height:100vh;width:100vw;"]),d=a.d.main.withConfig({displayName:"SecondaryLayoutStyle__MainContent",componentId:"sc-1xlw38l-2"})(["display:flex;flex:1 1 auto;align-items:center;justify-content:center;padding-bottom:80px;@media screen and (max-width:850px){padding-bottom:40px;}"]),c=n("WlUB"),f=n.n(c),s=n("DTAH"),p=n("L+y5");n("68/Q"),t.a=function(e){var t=e.children;return i.a.createElement(a.a,{theme:f.a},i.a.createElement(s.a,null),i.a.createElement(u,null,i.a.createElement(l,{opacity:"show"},i.a.createElement(d,null,t),i.a.createElement(p.a,null))))}},"hKI/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,r=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,d=l||u||Function("return this")(),c=Object.prototype.toString,f=Math.max,s=Math.min,p=function(){return d.Date.now()};function m(e,t,n){var o,i,a,r,l,u,d=0,c=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,a=i;return o=i=void 0,d=t,r=e.apply(a,n)}function g(e){return d=e,l=setTimeout(x,t),c?b(e):r}function w(e){var n=e-u;return void 0===u||n>=t||n<0||m&&e-d>=a}function x(){var e=p();if(w(e))return E(e);l=setTimeout(x,function(e){var n=t-(e-u);return m?s(n,a-(e-d)):n}(e))}function E(e){return l=void 0,v&&o?b(e):(o=i=void 0,r)}function _(){var e=p(),n=w(e);if(o=arguments,i=this,u=e,n){if(void 0===l)return g(u);if(m)return l=setTimeout(x,t),b(u)}return void 0===l&&(l=setTimeout(x,t)),r}return t=h(t)||0,y(n)&&(c=!!n.leading,a=(m="maxWait"in n)?f(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),_.cancel=function(){void 0!==l&&clearTimeout(l),d=0,o=u=i=l=void 0},_.flush=function(){return void 0===l?r:E(p())},_}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=i.test(e);return l||a.test(e)?r(e.slice(2),l?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:o,maxWait:t,trailing:i})}}).call(this,n("yLpj"))},pxCl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,n,o){if(function(e){return null===e.offsetParent}(t))return!1;var i=void 0,r=void 0,l=void 0,u=void 0;if(void 0===n||n===window)i=window.pageYOffset,l=window.pageXOffset,r=i+window.innerHeight,u=l+window.innerWidth;else{if(!e(n,window,o))return!1;var d=(0,a.default)(n);i=d.top,l=d.left,r=i+n.offsetHeight,u=l+n.offsetWidth}var c=(0,a.default)(t);return i<=c.top+t.offsetHeight+o.top&&r>=c.top-o.bottom&&l<=c.left+t.offsetWidth+o.left&&u>=c.left-o.right};var o,i=n("HVci"),a=(o=i)&&o.__esModule?o:{default:o}},uSmJ:function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),a=n("vOnD"),r=Object(a.e)(["0%{opacity:0;}100%{opacity:1;}"]),l=a.d.div.withConfig({displayName:"LayoutStyle__PageContainer",componentId:"sc-6skoc5-0"})(["opacity:0;display:flex;flex-direction:column;display:flex;flex-flow:column;height:100vh;",""],(function(e){return"show"===e.opacity&&Object(a.c)(["animation:"," 2s ease-in;opacity:1;"],r)})),u=a.d.div.withConfig({displayName:"LayoutStyle__FadeContainer",componentId:"sc-6skoc5-1"})(["background-color:#070707;overflow:hidden;height:100vh;width:100vw;"]),d=a.d.main.withConfig({displayName:"LayoutStyle__MainContent",componentId:"sc-6skoc5-2"})(["display:flex;flex:1 1 auto;align-items:center;justify-content:center;position:relative;"]),c=n("WlUB"),f=n.n(c),s=n("DTAH"),p=n("L+y5");n("68/Q"),t.a=function(e){var t=e.children;return i.a.createElement(a.a,{theme:f.a},i.a.createElement(s.a,null),i.a.createElement(u,null,i.a.createElement(l,{opacity:"show"},i.a.createElement(d,null,t),i.a.createElement(p.a,null))))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-about-js-ae815c06c1e4f5c50662.js.map