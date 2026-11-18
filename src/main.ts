import {desk} from "@shared/desk";
import {wrap} from "@shared/surface";
let lists=[["Passport","Charger","Wallet","Headphones"],["Map","Water","Lamp","Shell","Charger"]];
type S={trip:number;at:number;late:boolean;packed:string[];door:string[]};
const code=(s:S,t:string)=>s.trip+"/"+t;
const visible=(s:S)=>lists[s.trip].filter(t=>!s.late||s.door.includes(code(s,t)));
function toggle(a:string[],t:string){const n=a.indexOf(t);if(n>=0)a.splice(n,1);else a.push(t);}
desk<S>({name:"Runway Bag",accent:"#ED8B86",motion:{"motif":"bookmark","color":"#ED8B86","shine":"#FFF0DB"},initial:()=>({trip:0,at:0,late:false,packed:[],door:[]}),configure:(s,v)=>{for(const [i,k] of ["city","trail"].entries()){const a=String(v[k]||"").split(",").map(x=>x.trim()).filter(Boolean).slice(0,12);if(a.length)lists[i]=a;}s.at=0;},
 render:s=>{const a=visible(s),item=a[s.at%Math.max(a.length,1)],packed=lists[s.trip].filter(x=>s.packed.includes(code(s,x))).length;
 return {title:(s.trip?"Trail":"City")+(s.late?" / door":" / bag"),value:item||"No door items",progress:packed/lists[s.trip].length,
 lines:[item?s.packed.includes(code(s,item))?"Packed":"Still needed":"Empty departure list","Ready "+packed+"/"+lists[s.trip].length,
 item&&s.door.includes(code(s,item))?"Leave until departure":"Main packing list","Click: packed / Start: door","Hold OK: departure list","Hold Start: switch trip"]};},
 action:(s,k)=>{const a=visible(s),item=a[s.at%Math.max(a.length,1)];if(k==="up"||k==="down"){if(a.length)s.at=wrap(s.at+(k==="up"?1:-1),a.length);}
 if(k==="ok"&&item)toggle(s.packed,code(s,item));if(k==="start"&&item){toggle(s.door,code(s,item));s.at=0;}
 if(k==="hold-ok"){s.late=!s.late;s.at=0;}if(k==="hold-start"){s.trip=1-s.trip;s.late=false;s.at=0;}}});
