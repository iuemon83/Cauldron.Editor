(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[118],{40202:function(e,n,a){"use strict";var t=a(94054),r=a(40476),l=a(53457),i=(a(67294),a(85893));n.Z=function(e){return(0,i.jsxs)(t.Z,{component:"fieldset",children:[(0,i.jsx)(r.Z,{component:"legend",children:e.label}),(0,i.jsx)(l.Z,{style:{marginLeft:"2rem"},children:e.children})]})}},44441:function(e,n,a){"use strict";var t=a(59499),r=a(61903),l=a(85893);n.Z=function(e){var n=e.label,a=e.model,i=e.keyName,o=e.onChanged,s=e.sx;return(0,l.jsx)(r.Z,{label:n,type:"number",value:a[i],onChange:function(e){return o((0,t.Z)({},i,Number(e.target.value)))},sx:s})}},68321:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return f}});var t=a(59499),r=a(67294),l=a(83321),i=a(44441),o=a(40202),s=a(14689),d=a(52900),c=a(41733),u=a(85893);function m(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function x(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?m(Object(a),!0).forEach((function(n){(0,t.Z)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var f=function(){var e=(0,r.useState)({initialMp:0,maxLimitMp:0,minMp:0,limitMpToIncrease:0,initialNumHands:0,maxNumHands:0,initialPlayerHp:0,maxPlayerHp:0,minPlayerHp:0,maxNumDeckCards:0,minNumDeckCards:0,maxNumFieldCards:0,defaultNumTurnsToCanAttack:0,defaultNumAttacksLimitInTurn:0}),n=e[0],a=e[1],t=function(e){return a((function(n){return x(x({},n),e)}))},m=function(){return(0,u.jsx)(l.Z,{variant:"contained",onClick:function(){!function(e,n){var a=JSON.stringify(n),t=document.createElement("a");t.setAttribute("href","data:application/json;charset=utf-8,"+encodeURIComponent(a)),t.setAttribute("download",e),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}("rulebook.json",n)},color:"success",startIcon:(0,u.jsx)(s.Z,{}),children:"Save"})},f=function(){return(0,u.jsxs)("label",{htmlFor:"load-rulebook",children:[(0,u.jsx)("input",{style:{display:"none"},id:"load-rulebook",onChange:function(e){if(e.target.files&&0!==e.target.files.length){var n=e.target.files[0],t=new FileReader;t.onload=function(n){var t,r=null===(t=n.target)||void 0===t?void 0:t.result;if("string"===typeof r){console.log(r);if(confirm("\u7de8\u96c6\u4e2d\u306e\u30eb\u30fc\u30eb\u30d6\u30c3\u30af\u306f\u524a\u9664\u3055\u308c\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")){var l=JSON.parse(r);a(l),e.target.value=""}}},t.readAsText(n)}},type:"file"}),(0,u.jsx)(l.Z,{variant:"contained",color:"primary",component:"span",startIcon:(0,u.jsx)(d.Z,{}),children:"Open"})]})},p=function(){return(0,u.jsx)(l.Z,{variant:"contained",onClick:function(){confirm("\u524a\u9664\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")&&a({initialMp:0,maxLimitMp:0,minMp:0,limitMpToIncrease:0,initialNumHands:0,maxNumHands:0,initialPlayerHp:0,maxPlayerHp:0,minPlayerHp:0,maxNumDeckCards:0,minNumDeckCards:0,maxNumFieldCards:0,defaultNumTurnsToCanAttack:0,defaultNumAttacksLimitInTurn:0})},color:"error",startIcon:(0,u.jsx)(c.Z,{}),children:"Clear"})};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{}),(0,u.jsx)(f,{}),(0,u.jsx)(p,{}),(0,u.jsx)("div",{children:(0,u.jsxs)(o.Z,{label:"MP",children:[(0,u.jsx)(i.Z,{label:"\u521d\u671f\u5024",model:n,keyName:"initialMp",onChanged:t}),(0,u.jsx)(i.Z,{label:"\u4e0a\u9650\u5024",model:n,keyName:"maxLimitMp",onChanged:t}),(0,u.jsx)(i.Z,{label:"\u4e0b\u9650\u5024",model:n,keyName:"minMp",onChanged:t}),(0,u.jsx)(i.Z,{label:"\u30bf\u30fc\u30f3\u3054\u3068\u306e\u5897\u52a0\u5024",model:n,keyName:"limitMpToIncrease",onChanged:t})]})}),(0,u.jsx)("div",{children:(0,u.jsxs)(o.Z,{label:"\u624b\u672d\u306e\u679a\u6570",children:[(0,u.jsx)(i.Z,{label:"\u521d\u671f\u5024",model:n,keyName:"initialNumHands",onChanged:t}),(0,u.jsx)(i.Z,{label:"\u4e0a\u9650\u5024",model:n,keyName:"maxNumHands",onChanged:t})]})}),(0,u.jsx)("div",{children:(0,u.jsxs)(o.Z,{label:"\u30d7\u30ec\u30a4\u30e4\u30fc\u306eHP",children:[(0,u.jsx)(i.Z,{label:"\u521d\u671f\u5024",model:n,keyName:"initialPlayerHp",onChanged:t}),(0,u.jsx)(i.Z,{label:"\u4e0a\u9650\u5024",model:n,keyName:"maxPlayerHp",onChanged:t}),(0,u.jsx)(i.Z,{label:"\u4e0b\u9650\u5024",model:n,keyName:"minPlayerHp",onChanged:t})]})}),(0,u.jsx)("div",{children:(0,u.jsxs)(o.Z,{label:"\u30c7\u30c3\u30ad\u679a\u6570",children:[(0,u.jsx)(i.Z,{label:"\u4e0a\u9650\u5024",model:n,keyName:"maxNumDeckCards",onChanged:t}),(0,u.jsx)(i.Z,{label:"\u4e0b\u9650\u5024",model:n,keyName:"minNumDeckCards",onChanged:t})]})}),(0,u.jsx)("div",{children:(0,u.jsx)(o.Z,{label:"\u5834\u306e\u679a\u6570",children:(0,u.jsx)(i.Z,{label:"\u4e0a\u9650\u5024",model:n,keyName:"maxNumFieldCards",onChanged:t})})}),(0,u.jsx)("div",{children:(0,u.jsx)(i.Z,{label:"1\u30bf\u30fc\u30f3\u306e\u653b\u6483\u56de\u6570\u306e\u521d\u671f\u5024",model:n,keyName:"defaultNumTurnsToCanAttack",onChanged:t})}),(0,u.jsx)("div",{children:(0,u.jsx)(i.Z,{label:"\u653b\u6483\u53ef\u80fd\u3068\u306a\u308b\u307e\u3067\u306e\u30bf\u30fc\u30f3\u6570\u306e\u521d\u671f\u5024",model:n,keyName:"defaultNumAttacksLimitInTurn",onChanged:t})})]})}},76930:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rulebook",function(){return a(68321)}])}},function(e){e.O(0,[313,774,888,179],(function(){return n=76930,e(e.s=n);var n}));var n=e.O();_N_E=n}]);