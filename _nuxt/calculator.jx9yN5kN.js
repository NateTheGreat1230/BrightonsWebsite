import{d as p,u as c,r as d,c as m,o as x,a as k,b as r,t as C}from"./entry.5tMcdP01.js";const $={class:"flex items-center justify-center h-full p-10"},h={class:"flex flex-col justify-center items-center gap-4 w-80 min-h-96 p-6 bg-black bg-opacity-80 border-4 border-gray-700 rounded-lg shadow-lg"},w={class:"w-full h-20 rounded-md bg-gray-900 text-right text-white flex items-start justify-end p-4 mb-4 border-2 border-gray-600 overflow-hidden"},N={class:"text-xl font-mono leading-snug break-all"},S={class:"grid grid-cols-4 gap-2 w-full"},B=p({__name:"calculator",setup(F){c({title:"Calculator"});const t=d(""),g=d(""),a=d(""),s=m(()=>a.value?`${g.value} ${a.value} ${t.value}`:t.value||"0");function n(l){t.value.length<10&&(t.value+=l)}function i(){t.value="",g.value="",a.value=""}function v(){t.value=(parseFloat(t.value)*-1).toString()}function y(){t.value=(parseFloat(t.value)/100).toString()}function b(l){t.value!==""&&(g.value!==""&&u(),a.value=l,g.value=t.value,t.value="")}function f(){t.value.includes(".")||(t.value+=".")}function u(){let l;const e=parseFloat(g.value),o=parseFloat(t.value);if(!(isNaN(e)||isNaN(o))){switch(a.value){case"+":l=e+o;break;case"−":l=e-o;break;case"×":l=e*o;break;case"÷":l=e/o;break;default:return}t.value=l.toString(),g.value="",a.value=""}}return(l,e)=>(x(),k("div",$,[r("div",h,[r("div",w,[r("h1",N,C(s.value),1)]),r("div",S,[r("button",{onClick:i,class:"bg-gray-500 text-lg font-mono p-3 rounded hover:bg-gray-400 border border-gray-600"},"AC"),r("button",{onClick:v,class:"bg-gray-500 text-lg font-mono p-3 rounded hover:bg-gray-400 border border-gray-600"},"+/-"),r("button",{onClick:y,class:"bg-gray-500 text-lg font-mono p-3 rounded hover:bg-gray-400 border border-gray-600"},"%"),r("button",{onClick:e[0]||(e[0]=o=>b("÷")),class:"bg-green-500 text-white text-lg font-mono p-3 rounded hover:bg-green-400 border border-gray-600"},"÷"),r("button",{onClick:e[1]||(e[1]=o=>n("7")),class:"bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500"},"7"),r("button",{onClick:e[2]||(e[2]=o=>n("8")),class:"bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500"},"8"),r("button",{onClick:e[3]||(e[3]=o=>n("9")),class:"bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500"},"9"),r("button",{onClick:e[4]||(e[4]=o=>b("×")),class:"bg-green-500 text-white text-lg font-mono p-3 rounded hover:bg-green-400 border border-gray-600"},"×"),r("button",{onClick:e[5]||(e[5]=o=>n("4")),class:"bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500"},"4"),r("button",{onClick:e[6]||(e[6]=o=>n("5")),class:"bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500"},"5"),r("button",{onClick:e[7]||(e[7]=o=>n("6")),class:"bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500"},"6"),r("button",{onClick:e[8]||(e[8]=o=>b("−")),class:"bg-green-500 text-white text-lg font-mono p-3 rounded hover:bg-green-400 border border-gray-600"},"−"),r("button",{onClick:e[9]||(e[9]=o=>n("1")),class:"bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500"},"1"),r("button",{onClick:e[10]||(e[10]=o=>n("2")),class:"bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500"},"2"),r("button",{onClick:e[11]||(e[11]=o=>n("3")),class:"bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500"},"3"),r("button",{onClick:e[12]||(e[12]=o=>b("+")),class:"bg-green-500 text-white text-lg font-mono p-3 rounded hover:bg-green-400 border border-gray-600"},"+"),r("button",{onClick:e[13]||(e[13]=o=>n("0")),class:"col-span-2 bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500"},"0"),r("button",{onClick:f,class:"bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500"},"."),r("button",{onClick:u,class:"bg-green-500 text-white text-lg font-mono p-3 rounded hover:bg-green-400 border border-gray-600"},"=")])])]))}});export{B as default};
