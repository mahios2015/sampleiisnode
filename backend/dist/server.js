(()=>{"use strict";var e={252:e=>{e.exports=require("express")},577:e=>{e.exports=require("cors")},818:e=>{e.exports=require("dotenv")},859:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=o(r(252)),s=o(r(577)),n=(0,u.default)();n.use((0,s.default)()),n.use(u.default.json()),n.get("/data",((e,t)=>{t.json({receivedData:e.body})})),n.post("/data",((e,t)=>{t.json({receivedData:e.body})})),t.default=n},894:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=o(r(859)),s=o(r(818)),n=o(r(252)),a=o(r(928));s.default.config();const i=process.env.PORT||3e3;u.default.use(n.default.static(a.default.join(__dirname,"build"))),u.default.get("*",((e,t)=>{t.sendFile(a.default.join(__dirname,"build","index.html"))})),u.default.listen(i,(()=>{console.log(`Server running on http://localhost:${i}`)}))},928:e=>{e.exports=require("path")}},t={};!function r(o){var u=t[o];if(void 0!==u)return u.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,r),s.exports}(894)})();