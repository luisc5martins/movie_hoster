import{_ as h,r as d,o as b,a as t,c as a,b as s,F as r,d as u,u as p,e as k,t as _,p as w,f as y,g as S}from"./index-1e1caeff.js";import{g as v,L as B}from"./genre-e93cef24.js";const L=l=>(w("data-v-dbfb12b7"),l=l(),y(),l),M=L(()=>s("h1",null,"Filmes",-1)),V={class:"genre-list"},x=["onClick"],C={class:"movie-list"},D=["src","alt"],I={class:"movie-details"},F={class:"movie-title"},N={class:"movie-release-date"},$={class:"movie-genres"},G=["onClick"],R={__name:"MoviesView",setup(l){const o=d(!1),m=d([]);d([]);const f=i=>new Date(i).toLocaleDateString("pt-BR"),g=async i=>{o.value=!0;const n=await S.get("discover/movie",{params:{with_genres:i,language:"pt-BR"}});m.value=n.data.results,o.value=!1};return b(async()=>{o.value=!0,await v.getAllGenres("movie"),o.value=!1}),(i,n)=>(t(),a(r,null,[M,s("ul",V,[(t(!0),a(r,null,u(p(v).genres,e=>(t(),a("li",{key:e.id,onClick:c=>g(e.id),class:"genre-item"},_(e.name),9,x))),128))]),k(p(B),{active:o.value,"onUpdate:active":n[0]||(n[0]=e=>o.value=e),"is-full-page":""},null,8,["active"]),s("div",C,[(t(!0),a(r,null,u(m.value,e=>(t(),a("div",{key:e.id,class:"movie-card"},[s("img",{src:`https://image.tmdb.org/t/p/w500${e.poster_path}`,alt:e.title},null,8,D),s("div",I,[s("p",F,_(e.title),1),s("p",N,_(f(e.release_date)),1),s("p",$,[(t(!0),a(r,null,u(e.genre_ids,c=>(t(),a("span",{key:c,onClick:A=>g(c)},_(p(v).getGenreName(c)),9,G))),128))])])]))),128))])],64))}},j=h(R,[["__scopeId","data-v-dbfb12b7"]]);export{j as default};
