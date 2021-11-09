(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3],{308:function(t,e,n){"use strict";var r=n(82),o=n.n(r);e.a={getAnnouncement:function(){return o.a.get("/announcement.md")},getRepos:function(){return o.a.get("/repos.json")},getBuilds:function(t){return o.a.get("/f/".concat(t,"/builds.json"))}}},309:function(t,e,n){"use strict";n(19),n(10),n(24),n(2);var r=n(310),o=n.n(r),l=n(308);e.a={loadRepos:function(t){return new Promise((function(e,n){o.a.isNil(t.$store.getters["repos/getRepos"])?l.a.getRepos().then((function(n){var r=[],o=[];for(var l in n.data){r.push(l);var c=l.split("/")[0];c in o?o[c]++:o[c]=1}t.$store.commit("repos/setRepos",r),t.$store.commit("repos/setUsers",o),e()})):e()}))},getRepos:function(t){return t.$store.getters["repos/getRepos"]},getUsers:function(t){return t.$store.getters["repos/getUsers"]},exists:function(t,e){var n=!1;return o.a.forEach(t,(function(t){return!o.a.isNil(e.user)&&e.user!==t.split("/")[0]||(!o.a.isNil(e.repo)&&e.repo!==t.split("/")[1].split(":")[0]||(!o.a.isNil(e.branch)&&e.branch!==t.split(":")[1]||(n=!0,!1)))})),n}}},311:function(t,e,n){"use strict";n.r(e);var r=n(82),o=n.n(r),l={props:{info:Object},data:function(){return{imgSource:""}},computed:{source:function(){return"/f/"+this.info.user+"/"+this.info.repo+"/"+this.info.branch+"/badge.svg"}},mounted:function(){var t=this;o.a.get(this.source).then((function(e){t.imgSource=t.source})).catch((function(){t.imgSource="/images/default_badge.svg"}))}},c=n(45),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.imgSource,alt:"构建状态"}})}),[],!1,null,null,null);e.default=component.exports},313:function(t,e,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("fda0988c",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";n(313)},318:function(t,e,n){var r=n(83)(!1);r.push([t.i,".announcement[data-v-25cf3f18]{font-weight:300}.sidebar-title[data-v-25cf3f18]{font-size:1.4rem}",""]),t.exports=r},321:function(t,e,n){"use strict";n.r(e);n(10),n(24),n(163),n(11);var r=n(315),o=n.n(r),l=new o.a.Renderer;l.link=function(t,title,text){return'<a href="'.concat(t,'" title="').concat(title,'" target="_blank">').concat(text,"</a>")};var c=function(source){return o()(source,{renderer:l})},f=n(308),d=n(309),v={layout:"main",data:function(){return{announcement:"公告加载中",listTab:1,repos:null,users:null,usersFields:[{key:"name",label:"用户",sortable:!0},{key:"amount",label:"仓库数量",sortable:!0}],reposFields:[{key:"repo",label:"项目名称",sortable:!0},{key:"user",label:"用户"},{key:"branch",label:"分支"},{key:"status",label:"最新构建状态"}]}},computed:{listRepos:function(){var t=[];for(var e in this.repos){var n=this.repos[e],r=n.split("/")[0],o=n.split("/")[1].split(":")[0],l=n.split(":")[1];t.push({repo:o,user:r,branch:l})}return t},listUsers:function(){var t=[];for(var e in this.users)t.push({name:e,amount:this.users[e]});return t}},created:function(){"all"===this.$route.query.tab&&(this.listTab=0)},mounted:function(){var t=this;f.a.getAnnouncement().then((function(e){t.announcement=c(e.data)})).catch((function(){t.announcement="公告加载失败"})),d.a.loadRepos(this).then((function(){t.repos=d.a.getRepos(t),t.users=d.a.getUsers(t)}))},methods:{}},m=(n(317),n(45)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-breadcrumb",{staticClass:"mb-0"},[n("b-breadcrumb-item",{attrs:{to:"/",active:""}},[n("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}}),t._v("\n            首页\n        ")],1)],1),t._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3 pt-2"},[n("h3",{staticClass:"sidebar-title"},[n("b-icon",{attrs:{icon:"bell"}}),t._v("\n                    公告\n                ")],1),t._v(" "),n("div",{staticClass:"announcement",domProps:{innerHTML:t._s(t.announcement)}})]),t._v(" "),n("div",{staticClass:"col-md-9 pt-2 border-left"},[n("b-tabs",{attrs:{"content-class":"mt-3",lazy:""},model:{value:t.listTab,callback:function(e){t.listTab=e},expression:"listTab"}},[n("b-tab",{attrs:{title:"所有仓库"}},[n("b-table",{attrs:{striped:"",hover:"",items:t.listRepos,fields:t.reposFields,"head-variant":"dark"},scopedSlots:t._u([{key:"cell(repo)",fn:function(data){return[n("nuxt-link",{attrs:{to:"/"+data.item.user+"/"+data.value+"/"+data.item.branch}},[t._v("\n                                    "+t._s(data.value)+"\n                                ")])]}},{key:"cell(user)",fn:function(data){return[n("nuxt-link",{attrs:{to:"/"+data.value}},[t._v("\n                                    "+t._s(data.value)+"\n                                ")])]}},{key:"cell(status)",fn:function(data){return[n("build-status",{attrs:{info:data.item}})]}}])})],1),t._v(" "),n("b-tab",{attrs:{title:"所有用户"}},[n("b-table",{attrs:{striped:"",hover:"",items:t.listUsers,fields:t.usersFields,"head-variant":"dark"},scopedSlots:t._u([{key:"cell(name)",fn:function(data){return[n("nuxt-link",{attrs:{to:"/"+data.value}},[t._v("\n                                    "+t._s(data.value)+"\n                                ")])]}}])})],1)],1)],1)])])],1)}),[],!1,null,"25cf3f18",null);e.default=component.exports;installComponents(component,{BuildStatus:n(311).default})}}]);