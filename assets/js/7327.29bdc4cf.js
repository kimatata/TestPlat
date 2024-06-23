"use strict";(self.webpackChunktest_case_manager_doc=self.webpackChunktest_case_manager_doc||[]).push([[7327],{7327:(e,t,l)=>{l.d(t,{diagram:()=>f});var a=l(6336),n=l(4218),o=l(5625),i=l(6447),s=l(4015);l(7484),l(7967),l(7856),l(1644),l(6060);const d=e=>i.e.sanitizeText(e,(0,i.c)());let r={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const c=function(e,t,l,a,n){const o=Object.keys(e);i.l.info("keys:",o),i.l.info(e),o.filter((t=>e[t].parent==n)).forEach((function(l){var o,s;const r=e[l],c=r.cssClasses.join(" "),p=(0,i.k)(r.styles),b=r.label??r.id,f={labelStyle:p.labelStyle,shape:"class_box",labelText:d(b),classData:r,rx:0,ry:0,class:c,style:p.style,id:r.id,domId:r.domId,tooltip:a.db.getTooltip(r.id,n)||"",haveCallback:r.haveCallback,link:r.link,width:"group"===r.type?500:void 0,type:r.type,padding:(null==(o=(0,i.c)().flowchart)?void 0:o.padding)??(null==(s=(0,i.c)().class)?void 0:s.padding)};t.setNode(r.id,f),n&&t.setParent(r.id,n),i.l.info("setNode",f)}))};function p(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const b={setConf:function(e){r={...r,...e}},draw:async function(e,t,l,a){i.l.info("Drawing class - ",t);const b=(0,i.c)().flowchart??(0,i.c)().class,f=(0,i.c)().securityLevel;i.l.info("config:",b);const g=(null==b?void 0:b.nodeSpacing)??50,y=(null==b?void 0:b.rankSpacing)??50,u=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:g,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),h=a.db.getNamespaces(),v=a.db.getClasses(),w=a.db.getRelations(),k=a.db.getNotes();let m;i.l.info(w),function(e,t,l,a){const n=Object.keys(e);i.l.info("keys:",n),i.l.info(e),n.forEach((function(n){var o,s;const r=e[n],p={shape:"rect",id:r.id,domId:r.domId,labelText:d(r.id),labelStyle:"",style:"fill: none; stroke: black",padding:(null==(o=(0,i.c)().flowchart)?void 0:o.padding)??(null==(s=(0,i.c)().class)?void 0:s.padding)};t.setNode(r.id,p),c(r.classes,t,l,a,r.id),i.l.info("setNode",p)}))}(h,u,t,a),c(v,u,t,a),function(e,t){const l=(0,i.c)().flowchart;let a=0;e.forEach((function(e){var o;a++;const s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:`id_${e.id1}_${e.id2}_${a}`,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:p(e.relation.type1),arrowTypeEnd:p(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,i.n)(null==l?void 0:l.curve,n.c_6)};if(i.l.info(s,e),void 0!==e.style){const t=(0,i.k)(e.style);s.style=t.style,s.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(o=(0,i.c)().flowchart)?void 0:o.htmlLabels)??(0,i.c)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(i.e.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,s,a)}))}(w,u),function(e,t,l,a){i.l.info(e),e.forEach((function(e,o){var s,c;const p=e,b="",f="",g=p.text,y={labelStyle:b,shape:"note",labelText:d(g),noteData:p,rx:0,ry:0,class:"",style:f,id:p.id,domId:p.id,tooltip:"",type:"note",padding:(null==(s=(0,i.c)().flowchart)?void 0:s.padding)??(null==(c=(0,i.c)().class)?void 0:c.padding)};if(t.setNode(p.id,y),i.l.info("setNode",y),!p.class||!(p.class in a))return;const u=l+o,h={id:`edgeNote${u}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,i.n)(r.curve,n.c_6)};t.setEdge(p.id,p.class,h,u)}))}(k,u,w.length+1,v),"sandbox"===f&&(m=(0,n.Ys)("#i"+t));const x="sandbox"===f?(0,n.Ys)(m.nodes()[0].contentDocument.body):(0,n.Ys)("body"),T=x.select(`[id="${t}"]`),S=x.select("#"+t+" g");if(await(0,s.r)(S,u,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),i.u.insertTitle(T,"classTitleText",(null==b?void 0:b.titleTopMargin)??5,a.db.getDiagramTitle()),(0,i.o)(u,T,null==b?void 0:b.diagramPadding,null==b?void 0:b.useMaxWidth),!(null==b?void 0:b.htmlLabels)){const e="sandbox"===f?m.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of l){const l=t.getBBox(),a=e.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("rx",0),a.setAttribute("ry",0),a.setAttribute("width",l.width),a.setAttribute("height",l.height),t.insertBefore(a,t.firstChild)}}}},f={parser:a.p,db:a.d,renderer:b,styles:a.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,a.d.clear()}}}}]);