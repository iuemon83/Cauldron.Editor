(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[118],{40202:function(e,n,a){"use strict";var r=a(94054),t=a(40476),l=a(53457),s=(a(67294),a(85893));n.Z=function(e){return(0,s.jsxs)(r.Z,{component:"fieldset",children:[(0,s.jsx)(t.Z,{component:"legend",children:e.label}),(0,s.jsx)(l.Z,{style:{marginLeft:"2rem"},children:e.children})]})}},44441:function(e,n,a){"use strict";var r=a(59499),t=a(61903),l=a(85893);n.Z=function(e){var n=e.label,a=e.model,s=e.keyName,i=e.onChanged,o=e.sx;return(0,l.jsx)(t.Z,{label:n,type:"number",value:a[s],onChange:function(e){return i((0,r.Z)({},s,Number(e.target.value)))},sx:o})}},68321:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return f}});var r=a(59499),t=a(67294),l=a(83321),s=a(44441),i=a(40202),o=a(14689),d=a(52900),m=a(41733),u=a(85893);function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function x(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){(0,r.Z)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var f=function(){var e=(0,t.useState)({firstPlayerStartMp:0,secondPlayerStartMp:0,maxLimitMp:0,minMp:0,limitMpToIncrease:0,startNumHands:0,maxNumHands:0,numDraws:0,firstPlayerNumDrawsInFirstTurn:0,secondPlayerNumDrawsInFirstTurn:0,startPlayerHp:0,maxPlayerHp:0,minPlayerHp:0,maxNumDeckCards:0,minNumDeckCards:0,startMaxNumFields:0,maxNumFields:0,defaultNumTurnsToCanAttack:0,defaultNumAttacksLimitInTurn:0,defaultLimitNumCardsInDeck:0}),n=e[0],a=e[1],r=function(e){return a((function(n){return x(x({},n),e)}))},c=function(){return(0,u.jsx)(l.Z,{variant:"contained",onClick:function(){!function(e,n){var a=JSON.stringify(n),r=document.createElement("a");r.setAttribute("href","data:application/json;charset=utf-8,"+encodeURIComponent(a)),r.setAttribute("download",e),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}("rulebook.json",n)},color:"success",startIcon:(0,u.jsx)(o.Z,{}),children:"Save"})},f=function(){return(0,u.jsxs)("label",{htmlFor:"load-rulebook",children:[(0,u.jsx)("input",{style:{display:"none"},id:"load-rulebook",onChange:function(e){if(e.target.files&&0!==e.target.files.length){var n=e.target.files[0],r=new FileReader;r.onload=function(n){var r,t=null===(r=n.target)||void 0===r?void 0:r.result;if("string"===typeof t){console.log(t);if(confirm("\u7de8\u96c6\u4e2d\u306e\u30eb\u30fc\u30eb\u30d6\u30c3\u30af\u306f\u524a\u9664\u3055\u308c\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")){var l=JSON.parse(t);a(l),e.target.value=""}}},r.readAsText(n)}},type:"file"}),(0,u.jsx)(l.Z,{variant:"contained",color:"primary",component:"span",startIcon:(0,u.jsx)(d.Z,{}),children:"Open"})]})},y=function(){return(0,u.jsx)(l.Z,{variant:"contained",onClick:function(){confirm("\u524a\u9664\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")&&a({firstPlayerStartMp:0,secondPlayerStartMp:0,maxLimitMp:0,minMp:0,limitMpToIncrease:0,startNumHands:0,maxNumHands:0,numDraws:0,firstPlayerNumDrawsInFirstTurn:0,secondPlayerNumDrawsInFirstTurn:0,startPlayerHp:0,maxPlayerHp:0,minPlayerHp:0,maxNumDeckCards:0,minNumDeckCards:0,startMaxNumFields:0,maxNumFields:0,defaultNumTurnsToCanAttack:0,defaultNumAttacksLimitInTurn:0,defaultLimitNumCardsInDeck:0})},color:"error",startIcon:(0,u.jsx)(m.Z,{}),children:"Clear"})};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{}),(0,u.jsx)(f,{}),(0,u.jsx)(y,{}),(0,u.jsx)("div",{children:(0,u.jsxs)(i.Z,{label:"MP",children:[(0,u.jsx)(s.Z,{label:"\u5148\u653b\u306e\u30b2\u30fc\u30e0\u958b\u59cb\u6642",model:n,keyName:"firstPlayerStartMp",onChanged:r}),(0,u.jsx)(s.Z,{label:"\u5f8c\u653b\u306e\u30b2\u30fc\u30e0\u958b\u59cb\u6642",model:n,keyName:"secondPlayerStartMp",onChanged:r}),(0,u.jsx)(s.Z,{label:"\u4e0a\u9650\u5024",model:n,keyName:"maxLimitMp",onChanged:r}),(0,u.jsx)(s.Z,{label:"\u4e0b\u9650\u5024",model:n,keyName:"minMp",onChanged:r}),(0,u.jsx)(s.Z,{label:"\u30bf\u30fc\u30f3\u3054\u3068\u306e\u5897\u52a0\u5024",model:n,keyName:"limitMpToIncrease",onChanged:r})]})}),(0,u.jsx)("div",{children:(0,u.jsxs)(i.Z,{label:"\u624b\u672d\u306e\u679a\u6570",children:[(0,u.jsx)(s.Z,{label:"\u30b2\u30fc\u30e0\u958b\u59cb\u6642",model:n,keyName:"startNumHands",onChanged:r}),(0,u.jsx)(s.Z,{label:"\u4e0a\u9650\u5024",model:n,keyName:"maxNumHands",onChanged:r})]})}),(0,u.jsx)("div",{children:(0,u.jsxs)(i.Z,{label:"\u30c9\u30ed\u30fc",children:[(0,u.jsx)(s.Z,{label:"\u30bf\u30fc\u30f3\u958b\u59cb\u6642\u306e\u30c9\u30ed\u30fc\u679a\u6570",model:n,keyName:"numDraws",onChanged:r}),(0,u.jsx)(s.Z,{label:"\u5148\u653b1\u30bf\u30fc\u30f3\u76ee\u306e\u30c9\u30ed\u30fc\u679a\u6570",model:n,keyName:"firstPlayerNumDrawsInFirstTurn",onChanged:r}),(0,u.jsx)(s.Z,{label:"\u5f8c\u653b1\u30bf\u30fc\u30f3\u76ee\u306e\u30c9\u30ed\u30fc\u679a\u6570",model:n,keyName:"secondPlayerNumDrawsInFirstTurn",onChanged:r})]})}),(0,u.jsx)("div",{children:(0,u.jsxs)(i.Z,{label:"\u30d7\u30ec\u30a4\u30e4\u30fc\u306eHP",children:[(0,u.jsx)(s.Z,{label:"\u30b2\u30fc\u30e0\u958b\u59cb\u6642",model:n,keyName:"startPlayerHp",onChanged:r}),(0,u.jsx)(s.Z,{label:"\u4e0a\u9650\u5024",model:n,keyName:"maxPlayerHp",onChanged:r}),(0,u.jsx)(s.Z,{label:"\u4e0b\u9650\u5024",model:n,keyName:"minPlayerHp",onChanged:r})]})}),(0,u.jsx)("div",{children:(0,u.jsxs)(i.Z,{label:"\u30c7\u30c3\u30ad\u679a\u6570",children:[(0,u.jsx)(s.Z,{label:"\u4e0a\u9650\u5024",model:n,keyName:"maxNumDeckCards",onChanged:r}),(0,u.jsx)(s.Z,{label:"\u4e0b\u9650\u5024",model:n,keyName:"minNumDeckCards",onChanged:r}),(0,u.jsx)(s.Z,{label:"1\u7a2e\u985e\u306e\u30ab\u30fc\u30c9\u3092\u30c7\u30c3\u30ad\u306b\u542b\u3081\u3089\u308c\u308b\u4e0a\u9650\u679a\u6570\u306e\u57fa\u672c\u5024",model:n,keyName:"defaultLimitNumCardsInDeck",onChanged:r})]})}),(0,u.jsx)("div",{children:(0,u.jsxs)(i.Z,{label:"\u5834\u306e\u679a\u6570",children:[(0,u.jsx)(s.Z,{label:"\u30b2\u30fc\u30e0\u958b\u59cb\u6642\u306e\u4e0a\u9650\u5024",model:n,keyName:"startMaxNumFields",onChanged:r}),(0,u.jsx)(s.Z,{label:"\u6700\u7d42\u7684\u306a\u4e0a\u9650\u5024",model:n,keyName:"maxNumFields",onChanged:r})]})}),(0,u.jsx)("div",{children:(0,u.jsx)(s.Z,{label:"1\u30bf\u30fc\u30f3\u306e\u653b\u6483\u56de\u6570\u306e\u57fa\u672c\u5024",model:n,keyName:"defaultNumTurnsToCanAttack",onChanged:r})}),(0,u.jsx)("div",{children:(0,u.jsx)(s.Z,{label:"\u653b\u6483\u53ef\u80fd\u3068\u306a\u308b\u307e\u3067\u306e\u30bf\u30fc\u30f3\u6570\u306e\u57fa\u672c\u5024",model:n,keyName:"defaultNumAttacksLimitInTurn",onChanged:r})})]})}},76930:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rulebook",function(){return a(68321)}])}},function(e){e.O(0,[313,774,888,179],(function(){return n=76930,e(e.s=n);var n}));var n=e.O();_N_E=n}]);