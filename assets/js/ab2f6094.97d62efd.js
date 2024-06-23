"use strict";(self.webpackChunktest_case_manager_doc=self.webpackChunktest_case_manager_doc||[]).push([[4177],{7389:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var t=r(5893),s=r(1151);const a={sidebar_position:3},i="Running UnitTCMS manually",d={id:"getstarted/manual",title:"Running UnitTCMS manually",description:"Prerequisite: v20 or higher node must be installed.",source:"@site/docs/getstarted/manual.md",sourceDirName:"getstarted",slug:"/getstarted/manual",permalink:"/unittcms/docs/getstarted/manual",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getstarted/manual.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Running UnitTCMS with Docker",permalink:"/unittcms/docs/getstarted/docker"},next:{title:"Deployment",permalink:"/unittcms/docs/getstarted/deployment"}},c={},l=[{value:"Run backend server",id:"run-backend-server",level:2},{value:"Run frontend server",id:"run-frontend-server",level:2}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"running-unittcms-manually",children:"Running UnitTCMS manually"}),"\n",(0,t.jsx)(n.admonition,{title:"Prerequisite",type:"info",children:(0,t.jsx)(n.p,{children:"Prerequisite: v20 or higher node must be installed."})}),"\n",(0,t.jsx)(n.p,{children:"To use UnitTCMS, you need run frontend server and backend(API) server."}),"\n",(0,t.jsx)(n.p,{children:"First, clone the repository."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:kimatata/unittcms.git\n"})}),"\n",(0,t.jsx)(n.h2,{id:"run-backend-server",children:"Run backend server"}),"\n",(0,t.jsx)(n.p,{children:"Move to backend directory, then install dependencies."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd backend\nnpm install\n"})}),"\n",(0,t.jsx)(n.p,{children:"Initialize the database with the following command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run migrate\n"})}),"\n",(0,t.jsx)(n.p,{children:"Start backend server."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,t.jsx)(n.h2,{id:"run-frontend-server",children:"Run frontend server"}),"\n",(0,t.jsx)(n.p,{children:"Move to frontend directory, then install dependencies."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd frontend\nnpm install\n"})}),"\n",(0,t.jsx)(n.p,{children:"Build frontend code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,t.jsx)(n.p,{children:"Start frontend server"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"PORT=8000 npm run start\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);