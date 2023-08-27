(()=>{"use strict";var e={807:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateChords=void 0;const o=n(835);t.generateChords=e=>e.map((t=>d(e,t)));const d=(e,t)=>[(0,o.findNextNote)(e,t,0),(0,o.findNextNote)(e,t,2),(0,o.findNextNote)(e,t,4),(0,o.findNextNote)(e,t,6)]},804:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateFretboard=void 0;const o=n(835);t.generateFretboard=e=>e.map((e=>Array.from({length:25}).map(((t,n)=>(0,o.findNextNote)(o.chromaticScale,e,n)))))},334:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.renderHtml=void 0,t.renderHtml=(e,t)=>{const n=document.createElement("table");n.style.cssText="border: 1px solid;width: 100%;font-family: Arial, Helvetica, sans-serif;border-collapse: collapse;padding: 8px;table-layout: fixed";const o=document.createElement("tr");e[0].forEach(((e,t)=>{const n=document.createElement("th");n.appendChild(document.createTextNode(t.toString())),n.style.cssText="border: 1px solid;text-align: center;background-color: #a9a9a9;",o.appendChild(n)})),n.appendChild(o),e.forEach(((e,o)=>{const d=document.createElement("tr");d.style.cssText="height:30px",e.forEach(((e,n)=>{const r=document.createElement("td");r.appendChild(document.createTextNode(e)),r.style.cssText="border: 1px solid;text-align: center;",0===t[o][n]?r.style.cssText+="background-color: #38761d;":1===t[o][n]||2===t[o][n]?r.style.cssText+="background-color: #6aa84f;":3===t[o][n]?r.style.cssText+="background-color: #ffe599;":0===n&&(r.style.cssText+="background-color: #a9a9a9;"),d.appendChild(r)})),n.appendChild(d)}));const d=document.getElementsByTagName("table");d.length&&d[0].remove(),document.body.appendChild(n)}},887:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateHighlightScale=t.generateHighlightChord=void 0,t.generateHighlightChord=(e,t)=>e.map((e=>e.map((e=>t.indexOf(e))))),t.generateHighlightScale=(e,t)=>e.map((e=>e.map((e=>t.includes(e)?1:-1))))},519:(e,t,n)=>{t.D=void 0;const o=n(807),d=n(804),r=n(334),a=n(887);t.D=()=>{const e=[document.getElementById("chord1").value,document.getElementById("chord2").value,document.getElementById("chord3").value,document.getElementById("chord4").value,document.getElementById("chord5").value,document.getElementById("chord6").value,document.getElementById("chord7").value],t=[document.getElementById("string6").value,document.getElementById("string5").value,document.getElementById("string4").value,document.getElementById("string3").value,document.getElementById("string2").value,document.getElementById("string1").value],n=Number(document.getElementById("chord-index").value),l=(0,d.generateFretboard)(t),c=-1===n?(0,a.generateHighlightScale)(l,e):(0,a.generateHighlightChord)(l,(0,o.generateChords)(e)[n]);(0,r.renderHtml)(l,c)},window.main=t.D},835:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.findNextNote=t.chromaticScale=void 0,t.chromaticScale=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],t.findNextNote=(e,t,n)=>{if(e.length<1)throw"Scale is empty";const o=e.indexOf(t);if(-1===o)throw`Cannot find ${t} in ${e}`;return e[(o+n)%e.length]}}},t={};!function n(o){var d=t[o];if(void 0!==d)return d.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(519)})();