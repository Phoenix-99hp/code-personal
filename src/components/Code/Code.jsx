import React, { useReducer, useEffect, useContext } from "react"
import {
  BackgroundContainer,
  GridItem,
  GridContainer,
  AbsoluteDiv,
  AnimatedCursor,
  OuterContainer,
} from "./CodeStyle"
import Prism from "prismjs"
import "../../theme/prismTheme.css"
import { AnimationContext } from "../../contexts/GlobalContext"

const Code = ({ rowsNum, rowsArr }) => {
  const { show, setShow } = useContext(AnimationContext)
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const initialState = {
    assignRef: 0,
    removeRef: null,
    isWriting: true,
    rows: rowsArr,
    shouldFlash: true,
    shouldRotate: false,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "START_WRITING":
        return {
          ...state,
          isWriting: true,
        }
      case "WRITE_NEXT_ROW":
        return {
          ...state,
          assignRef: state.assignRef + 1,
          isWriting: true,
        }
      case "DONE_WRITING":
        return {
          ...state,
          isWriting: false,
          shouldRotate: true,
        }
      case "STOP_CURSOR":
        return {
          ...state,
          shouldFlash: false,
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleAnimationEnd = () => {
    state.assignRef !== state.rows.length - 1
      ? dispatch({
          type: "WRITE_NEXT_ROW",
        })
      : dispatch({
          type: "DONE_WRITING",
        })
  }

  const handleAnimationStart = () => {
    dispatch({
      type: "STOP_CURSOR",
    })
  }

  return (
    <OuterContainer>
      <BackgroundContainer
        className={"language-javascript"}
        shouldRotate={state.shouldRotate}
        onAnimationEnd={() => {
          setShow(false)
          console.log(show)
        }}
      >
        {
          't=[1,2,3,4,5,6,7,8,9,10],i=function(){let n=0,e=0;const t=["A","B","C","D","E","F","G","H","I","J"],i=[1,2,3,4,5,6,7,8,9,10],o=[];for(let a=0;a<100;a++)o[a]=t[n]+i[e],n++,!0===/9$/.test(a)&&(e++,n=0);return o}();for(let o=0;o<e.Gameboard.board.length; <div class="square label-left-mini" draggable="false">${t[0]}</div><div id="${i[o]}" class="square game-tile ${e.Gameboard.board[o]}"></div>, t.splice(0, 1)):n+=<div id="${i[o]}" class="square game-tile ${e.Gameboard.board[o]}"></div>;return n}();t.Gameboard.generateBoard(),function(){let n=[];for(let e=0;e<5;e++)n[e]=Math.floor(2*Math.random()),0===n[e]?n[e]="Vertical":n[e]="Horizontal";t.Battleship.orientation=n[0],t.Carrier.orientation=n[1],t.Destroyer.orientation=n[2],t.Patrol.orientation=n[3],t.Submarine.orientation=n[4]}(),function n(e,i){let o=t.Gameboard.board;for(let t=0;t<e.length; {let r=i||Math.floor(2*Math.random());if(!0!==/(Sunk)$/.test(e[t].position[0])){!1 === /d$/.test(e[t].position[0]) && !1 === /(- Hit)$/.test(e[t].position[0]) && !1 === /(Sunk)$/.test(e[t].position[0]) && (e[t].position[0] = o[Math.floor(Math.random() * o.length)]);for(let i=1;i<e[{function a(e, a, r) { 0 === e && /d$/.test(!1 === o[o.indexOf(r[t].position[i - 1]) + a]) || 0 === e && o[o.indexOf(r[t].position[i - 1])] !== o[r[t].position[0]] ? (r[t].position.splice(0), n(r, e)) : 0 === e && !0 === /d$/.test(o[o.indexOf(r[t].position[i - 1]) + a]) ? r[t].position[i] = o[o.indexOf(r[t].position[i - 1]) + a] : 1 === e && !1 === /d$/.test(o[o.indexOf(r[t].position[i - 1]) - a]) || 1 === e && o[o.indexOf(r[t].position[i - 1])] !== o[r[t].position[0]] ? (r[t].position.splice(0), n(r, e)) : 1 === e && !0 === /d$/.test(o[o.indexOf(r[t].position[i - 1]) - a]) && (r[t].position[i] = o[o.indexOf(r[t].position[i]) - a]) } /d$/.test(!1===e[t].position[i-1])&&/(- Hit)$/.test(!1===e[t].position[i-1])&&i>=2?(e[t].splice(1),i=1):"Horizontal"===e[t].orientation?0===r&&!1===/d$/.test(o[o.indexOf(e[t].position[i-1])+1])||!0===/^J/i.test(o[o.indexOf(e[t].position[i-1])])&&!0===/^A/i.test(o[o.indexOf(e[t].position[i-1])+1])?(r=1,a(r,1,e)):0===r&&!0===/d$/.test(o[o.indexOf(e[t].position[i-1])+1])?e[t].position[i]=o[o.indexOf(e[t].position[i-1])+1]:1===r&&!1===/d$/.test(o[o.indexOf(e[t].position[i-1])-1])||!0===/^A/i.test(o[o.indexOf(e[t].position[i-1])])&&!0===/^J/i.test(o[o.indexOf(e[t].position[i-1])-1])?(r=0,a(r,1,e)):1===r&&!0===/d$/i.test(o[o.indexOf(e[t].position[i-1])-1])&&(e[t].position[i]=o[o.indexOf(e[t].position[i-1])-1]):"Vertical"===e[t].orientation&&(0===r&&!1===/d$/.test(o[o.indexOf(e[t].position[i-1])+10])?(r=1,a(r,10,e)):0===r&&!0===/d$/.test(o[o.indexOf(e[t].position[i-1])+10])?e[t].position[i]=o[o.indexOf(e[t].position[i-1])+10]:1===r&&!1===/d$/.test(o[o.indexOf(e[t].position[i-1])-10])?(r=0,a(r,10,e)):1===r&&!0===/d$/.test(o[o.indexOf(e[t].position[i-1])-10])&&(e[t].position[i]=o[o.indexOf(e[t].position[i-1])-10]))}}}!function(n){const e=n[0].position.concat(n[1].position,n[2].position,n[3].position,n[4].position);e.forEach(t=>{if(e.lastIndexOf(t)!==e.indexOf(t)){let i=e.lastIndexOf(t);i>0&&i<=3?n[0].position.splice(0):i>3&&i<9?n[1].position.splice(0):i>=9&&i<12?n[2].position.splice(0):i>=12&&i<14?n[3].position.splice(0):i>=14&&i<17&&n[4].position.splice(0)}})}(e),!0===function(n){let e=!0;for(let t=0;t<n.length&&!1!==e;t++)for(let i=0;i<n[{e = !1;break}return e}(e)||n(e)}(p)function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var o=(r=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([o]).join("\n")}var r,s,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(i)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(o[r]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);i&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},function(n,e,t){"use strict";t.r(e);var i=class{constructor(){this.battleshipPosition=null,this.carrierPosition=null,this.destroyerPosition=null,this.patrolPosition=null,this.submarinePosition=null,this.board=[]}generateBoard(){let n=0,e=0;const t=["A","B","C","D","E","F","G","H","I","J"],i=[1,2,3,4,5,6,7,8,9,10];for(let o=0;o<100;o++)this.board[o]=t[n]+i[e],n++,!0===/9$/.test(o)&&(e++,n=0)}placeShips(n,e,t,i,o){this.battleshipPosition=n,this.carrierPosition=e,this.destroyerPosition=t,this.patrolPosition=i,this.submarinePosition=o;for(let a=0,r=0;a<this.board.length;a++,r++)r>4&&(r=0),this.board[a]===n[r]?this.board.splice(a,1,"Battleship"):this.board[a]===e[r]?this.board.splice(a,1,"Carrier"):this.board[a]===t[r]?this.board.splice(a,1,"Destroyer"):this.board[a]===i[r]?this.board.splice(a,1,"Patrol"):this.board[a]===o[r]&&this.board.splice(a,1,"Submarine")}};var o=class{constructor(){this.position=[]}};var a=class extends o{constructor(n,e){super(n),this.type="Battleship",this.orientation=e,this.size=4}};var r=class{constructor(){this.turn=!1}};var s=class extends o{constructor(n,e){super(n),this.type="Destroyer",this.size=3,this.orientation=e}};var l=class{constructor(){this.turn=!1}};var d=class extends o{constructor(n,e){super(n),this.type="Carrier",this.size=5,this.orientation=e}};var c=class extends o{constructor(n,e){super(n),this.type="Patrol",this.size=2,this.orientation=e}};var p=class extends o{constructor(n,e){super(n),this.type="Submarine",this.size=3,this.orientation=e}};this.board=[]}generateBoard(){let n=0,e=0;const t=["A","B","C","D","E","F","G","H","I","J"],i=[1,2,3,4,5,6,7,8,9,10];for(let o=0;o<100;o++)this.board[o]=t[n]+i[e],n++,!0===/9$/.test(o)&&(e++,n=0)}placeShips(n,e,t,i,o){this.battleshipPosition=n,this.carrierPosition=e,this.destroyerPosition=t,this.patrolPosition=i,this.submarinePosition=o;for(let a=0,r=0;a<this.board.length;a++,r++)r>4&&(r=0),this.board[a]===n[r]?this.board.splice(a,1,"Battleship"):this.board[a]===e[r]?this.board.splice(a,1,"Carrier"):this.board[a]===t[r]?this.board.splice(a,1,"Destroyer"):this.board[a]===i[r]?this.board.splice(a,1,"Patrol"):this.board[a]===o[r]&&this.board.splice(a,1,"Submarine")}};var o=class{constructor(){this.position=[]}};var a=class extends o{constructor(n,e){super(n),this.type="Battleship",this.orientation=e,this.size=4}};var r=class{constructor(){this.turn=!1}};var s=class extends o{constructor(n,e){super(n),this.type="Destroyer",this.size=3,this.orientation=e}};var l=class{constructor(){this.turn=!1}};var d=class extends o{constructor(n,e){super(n),this.type="Carrier",this.size=5,this.orientation=e}};var c=class extends o{constructor(n,e){super(n),this.type="Patrol",this.size=2,this.orientation=e}};var p=class extends o{constructor(n,e){super(n),this.type="Submarine",this.size=3,this.orientation=e}}(n,i,o){let a=function(n,e){let t=!1,i=!1;for(let o=0;o<e.length&&!0!==i;o++)for(let a=0;a<e[o].position.length;a++)if(n===e[o].position[a]){e[o].position.splice(a,1,n+" - Hit"),t=!0,i=!0;break}return t}(n,i),r=document.getElementById("playerBoard");if(!0===a){let a=function(n,e){let t=!1,i=0,o="";for(let e=0;e<n.length;e++)if("Sunk"!==n[e].position[n[e].position.length-1]){let t=n[e].position.filter(n=>{if(!0===/(- Hit)$/.test(n))return n});if(n[e].position[t.length-1]===n[e].position[n[e].position.length-1]){o=e;break}}if(!0===/d/.test(o))for(let e=0;e<n[o].position.length;e++){if(!1===/(- Hit)$/.test(n[o].position[e])){i=0;break}if(!0===/(- Hit)$/.test(n[o].position[e])&&i++,!0===/(- Hit)$/.test(n[o].position[e])&&i===n[o].position.length){t=!0;break}}return{sunk:t,index:o}}(i);if(o===e.Gameboard.board&&!1===a.sunk){async function s(){const n=document.getElementById("toast");await g(1e3),n.classList.add("hide")}o.splice(o.indexOf(n),1,n+" - Hit"),toast.classList.remove("hide"),toast.style.color="red",toast.innerText="Hit",s()}else if(o===t.Gameboard.board&&!1===a.sunk){o.splice(o.indexOf(n),1,n+" - Hit");for(let e=10;e<r.children.length;e++)n===r.children[e].id&&(r.children[e].innerText="x",r.children[e].style.color="red")}else if(!0===a.sunk){o.splice(o.indexOf(n),1,n+" - Hit");for(let n=0;n<i[a.index].position.length;n++)null!==i[a.index].position[n].match(/^(w10)/i)?o.splice(o.indexOf(i[a.index].position[n]),1,i[a.index].position[n].match(/^(w10)/i)[0]+" - Sunk"):o.splice(o.indexOf(i[a.index].position[n]),1,i[a.index].position[n].match(/^(wd)/i)[0]+" - Sunk"),i[a.index].position[n]="Sunk";function l(n){let e=o.filter(n=>{if(!0===/(Sunk)$/.test(n))return n});for(let t=10;t<n.children.length;t++)for(let i=0;i<e.length;i++)null!==e[i].match(/^(w10)/i)?e[i].match(/^(w10)/i)[0]===n.children[t].id&&(n.children[t].innerText="X",n.children[t].style.color="black",n.children[t].style.backgroundColor="orangered"):e[i].match(/^(wd -)/i)[0].match(/^(wd)/i)[0]===n.children[t].id&&(n.children[t].innerText="X",n.children[t].style.color="black",n.children[t].style.backgroundColor="orangered")}if(o===e.Gameboard.board){async function s(){const n=document.getElementById("toast");await g(1e3),n.classList.add("hide"),b("You",i)}l(computerBoard),toast.classList.remove("hide"),toast.style.color="orangered",toast.innerText="Ship sunk!",s()}else o===t.Gameboard.board&&(l(r),b("The Computer",i))}}else if(o.splice(o.indexOf(n),1,"Miss"),o===e.Gameboard.board){async function s(){const n=document.getElementById("toast");await g(1e3),n.classList.add("hide")}toast.classList.remove("hide"),toast.style.color="blue",toast.innerText="Miss",s()}else if(o===t.Gameboard.board)for(let e=10;e<r.children.length;e++)n===r.children[e].id&&(r.children[e].innerText="o",r.children[e].style.color="blue")}function g(n){return new Promise(e=>setTimeout(e,n))}function b(e,t){let i=!1,o=0;for(let n=0;n<t.length;n++)for(let e=0;e<t[n].position.length;e++)"Sunk"===t[n].position[e]&&o++,"Sunk"===t[n].position[e]&&17===o&&(i=!0);if(!i)return!1;{async function a(){const e=document.getElementById("toast");await g(3e3),e.classList.add("hide"),u(),n()}toast.classList.remove("hide"),toast.style.color="black",toast.innerText=${e} won!${t[0]}</div><div id="${i[o]}" class="square game-tile ${e.Gameboard.board[o]}"></div>,t.splice(0,1)):n+=`<div id="${i[o]}" class="square game-tile ${e.Gameboard.board[o]}"></div>;return n}();t.Gameboard.generateBoard(),function(){let n=[];for(let e=0;e<5;e++)n[e]=Math.floor(2*Math.random()),0===n[e]?n[e]="Vertical":n[e]="Horizontal";t.Battleship.orientation=n[0],t.Carrier.orientation=n[1],t.Destroyer.orientation=n[2],t.Patrol.orientation=n[3],t.Submarine.orientation=n[4]}(),function n(e,i){let o=t.Gameboard.board;for(let t=0;t<e.length;t++){let r=i||Math.floor(2*Math.random());if(!0!==/(Sunk)$/.test(e[t].position[0])){!1===/d$/.test(e[t].position[0])&&!1===/(- Hit)$/.test(e[t].position[0])&&!1===/(Sunk)$/.test(e[t].position[0])&&(e[t].position[0]=o[Math.floor(Math.random()*o.length)]);for(let i=1;i<e[t].size;i++){function a(e,a,r){0===e&&/d$/.test(!1===o[o.indexOf(r[t].position[i-1])+a])||0===e&&o[o.indexOf(r[t].position[i-1])]!==o[r[t].position[0]]?(r[t].position.splice(0),n(r,e)):0===e&&!0===/d$/.test(o[o.indexOf(r[t].position[i-1])+a])?r[t].position[i]=o[o.indexOf(r[t].position[i-1])+a]:1===e&&!1===/d$/.test(o[o.indexOf(r[t].position[i-1])-a])||1===e&&o[o.indexOf(r[t].position[i-1])]!==o[r[t].position[0]]?(r[t].position.splice(0),n(r,e)):1===e&&!0===/d$/.test(o[o.indexOf(r[t].position[i-1])-a])&&(r[t].position[i]=o[o.indexOf(r[t].position[i])-a])}/d$/.test(!1===e[t].position[i-1])&&/(- Hit)$/.test(!1===e[t].position[i-1])&&i>=2?(e[t].splice(1),i=1):"Horizontal"===e[t].orientation?0===r&&!1===/d$/.test(o[o.indexOf(e[t].position[i-1])+1])||!0===/^J/i.test(o[o.indexOf(e[t].position[i-1])])&&!0===/^A/i.test(o[o.indexOf(e[t].position[i-1])+1])?(r=1,a(r,1,e)):0===r&&!0===/d$/.test(o[o.indexOf(e[t].position[i-1])+1])?e[t].position[i]=o[o.indexOf(e[t].position[i-1])+1]:1===r&&!1===/d$/.test(o[o.indexOf(e[t].position[i-1])-1])||!0===/^A/i.test(o[o.indexOf(e[t].position[i-1])])&&!0===/^J/i.test(o[o.indexOf(e[t].position[i-1])-1])?(r=0,a(r,1,e)):1===r&&!0===/d$/i.test(o[o.indexOf(e[t].position[i-1])-1])&&(e[t].position[i]=o[o.indexOf(e[t].position[i-1])-1]):"Vertical"===e[t].orientation&&(0===r&&!1===/d$/.test(o[o.indexOf(e[t].position[i-1])+10])?(r=1,a(r,10,e)):0===r&&!0===/d$/.test(o[o.indexOf(e[t].position[i-1])+10])?e[t].position[i]=o[o.indexOf(e[t].position[i-1])+10]:1===r&&!1===/d$/.test(o[o.indexOf(e[t].position[i-1])-10])?(r=0,a(r,10,e)):1===r&&!0===/d$/.test(o[o.indexOf(e[t].position[i-1])-10])&&(e[t].position[i]=o[o.indexOf(e[t].position[i-1])-10]))}}}!function(n){const e=n[0].position.concat(n[1].position,n[2].position,n[3].position,n[4].position);e.forEach(t=>{if(e.lastIndexOf(t)!==e.indexOf(t)){let i=e.lastIndexOf(t);i>0&&i<=3?n[0].position.splice(0):i>3&&i<9?n[1].position.splice(0):i>=9&&i<12?n[2].position.splice(0):i>=12&&i<14?n[3].position.splice(0):i>=14&&i<17&&n[4].position.splice(0)}})}(e),!0===function(n){let e=!0;for(let t=0;t<n.length&&!1!==e;t++)for(let i=0;i<n[t].size&&!1!==e;i++)if(!0!==/d$/.test(n[t].position[i])){e=!1;break}return e}(e)||n(e)}(p)let b=p[0].position.concat(p[1].position,p[2].position,p[3].position,p[4].position);e.Gameboard.generateBoard();let m=t.Gameboard.board;const x=document.getElementById("errorMsg");document.getElementById("mainContent");function i(){if(!0===t.turn){let a=m.filter(n=>{if(!0===/(- Hit)$/.test(n))return n}),r=a[Math.floor(Math.random()*a.length)];if(!0===/(- Hit)$/.test(r))!function n(e,t,i,a,r,s,l,d){let c,p,u=l.filter(n=>{if(!1===/(- Hit)$/.test(n)&&!1===/(Miss)$/.test(n)&&!1===/(- Sunk)$/.test(n))return n});if(void 0===s&&(c=u[Math.floor(Math.random()*u.length)],o(c,r,l)),!0===/^A/.test(l[l.indexOf(s)])&&!0===/^J/.test(l[l.indexOf(s)-1])&&(t=!1),!0===/^J/.test(l[l.indexOf(s)])&&!0===/^A/.test(l[l.indexOf(s)+1])&&(e=!1),l.includes(s))if(e&&t&&i&&a)p=Math.floor(2*Math.random()),0===p?(p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)+1],o(c,r,l)):1===p&&(c=l[l.indexOf(s)-1],o(c,r,l))):1===p&&(p=Math.floor(2*Math.random()),0===p&&(p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)+10],o(c,r,l)):1===p&&(c=l[l.indexOf(s)-10],o(c,r,l))));else if(e&&t&&i&&!a)p=Math.floor(2*Math.random()),0===p?(p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)+1],o(c,r,l)):1===p&&(c=l[l.indexOf(s)-1],o(c,r,l))):1===p&&(c=l[l.indexOf(s)+10],o(c,r,l));else if(e&&t&&a&&!i)p=Math.floor(2*Math.random()),0===p?(p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)+1],o(c,r,l)):1===p&&(c=l[l.indexOf(s)-1],o(c,r,l))):1===p&&(c=l[l.indexOf(s)-10],o(c,r,l));else if(t&&i&&a&&!e)p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)-1],o(c,r,l)):1===p&&(p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)+10],o(c,r,l)):1===p&&(c=l[l.indexOf(s)-10],o(c,r,l)));else if(e&&i&&a&&!t)p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)+1],o(c,r,l)):1===p&&(p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)+10],o(c,r,l)):1===p&&(c=l[l.indexOf(s)-10],o(c,r,l)));else if(e&&t&&!i&&!a)p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)+1],o(c,r,l)):1===p&&(c=l[l.indexOf(s)-1],o(c,r,l));else if(!e&&!t&&i&&a)p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)+10],o(c,r,l)):1===p&&(c=l[l.indexOf(s)-10],o(c,r,l));else if(e&&!t&&i&&!a)p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)+1],o(c,r,l)):1===p&&(c=l[l.indexOf(s)+10],o(c,r,l));else if(e&&!t&&!i&&a)p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)+1],o(c,r,l)):1===p&&(c=l[l.indexOf(s)-10],o(c,r,l));else if(!e&&t&&i&&!a)p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)-1],o(c,r,l)):1===p&&(c=l[l.indexOf(s)+10],o(c,r,l));else if(e&&!t&&!i&&a)p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)+1],o(c,r,l)):1===p&&(c=l[l.indexOf(s)-10],o(c,r,l));else if(!e&&t&&!i&&a)p=Math.floor(2*Math.random()),0===p?(c=l[l.indexOf(s)-1],o(c,r,l)):1===p&&(c=l[l.indexOf(s)-10],o(c,r,l));else if(!e||t||i||a)if(!t||e||i||a)if(e||t||!i||a)if(e||t||i||!a)if(e||t||i||a){let n=l.filter(n=>{if(!1===/(- Hit)$/.test(n)&&"Miss"!==n&&!1===/(- Sunk)$/.test(n))return n});c=n[Math.floor(Math.random()*n.length)],o(c,r,l)}else{d.splice(d.indexOf(s),1);let e=d[Math.floor(Math.random()*d.length)];n(/d$/.test(l[l.indexOf(e)+1]),/d$/.test(l[l.indexOf(e)-1]),/d$/.test(l[l.indexOf(e)+10]),/d$/.test(l[l.indexOf(e)-10]),r,e,l,d)}else c=l[l.indexOf(s)-10],o(c,r,l);else c=l[l.indexOf(s)+10],o(c,r,l);else c=l[l.indexOf(s)-1],o(c,r,l);else c=l[l.indexOf(s)+1],o(c,r,l)}(/d$/.test(m[m.indexOf(r)+1]),/d$/.test(m[m.indexOf(r)-1]),/d$/.test(m[m.indexOf(r)+10]),/d$/.test(m[m.indexOf(r)-10]),n,r,m,a);else{let e=m.filter(n=>{if(!1===/(- Hit)$/.test(n)&&!1===/(Miss)$/.test(n)&&!1===/(Sunk)$/.test(n))return n});o(e[Math.floor(Math.random()*e.length)],n,m)}t.turn=!1,e.turn=!0,i()}}g.forEach(n=>{n.addEventListener("click",()=>{if(n.classList.contains("game")){n.style.pointerEvents="auto";for(let a=0;a<b.length;a++){if("x"===n.innerText||"o"===n.innerText||"X"===n.innerText'
        }
      </BackgroundContainer>
      <GridContainer
        doneWriting={state.assignRef > rowsNum - 1 ? true : false}
        rows={rowsNum}
      >
        {rowsArr[0] === 0
          ? rowsArr.map(row => {
              return (
                <GridItem key={row}>
                  <AbsoluteDiv
                    first={row === 0 ? true : false}
                    key={row}
                    isWriting={state.assignRef === row ? true : false}
                    onAnimationEnd={() => handleAnimationEnd()}
                    onAnimationStart={
                      row === 0 ? () => handleAnimationStart() : null
                    }
                    doneWriting={
                      state.assignRef > row ||
                      (state.assignRef === row && !state.isWriting)
                        ? true
                        : false
                    }
                  />
                  {row === 0 ? (
                    <AnimatedCursor shouldFlash={state.shouldFlash} />
                  ) : null}
                </GridItem>
              )
            })
          : null}
      </GridContainer>
    </OuterContainer>
  )
}

export default Code
