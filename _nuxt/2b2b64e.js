(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{308:function(t,e,r){"use strict";var n=r(82),o=r.n(n);e.a={getAnnouncement:function(){return o.a.get("/announcement.md")},getRepos:function(){return o.a.get("/repos.json")},getBuilds:function(t){return o.a.get("/f/".concat(t,"/builds.json"))}}},309:function(t,e,r){"use strict";r(19),r(10),r(24),r(2);var n=r(310),o=r.n(n),c=r(308);e.a={loadRepos:function(t){return new Promise((function(e,r){o.a.isNil(t.$store.getters["repos/getRepos"])?c.a.getRepos().then((function(r){var n=[],o=[];for(var c in r.data){n.push(c);var l=c.split("/")[0];l in o?o[l]++:o[l]=1}t.$store.commit("repos/setRepos",n),t.$store.commit("repos/setUsers",o),e()})):e()}))},getRepos:function(t){return t.$store.getters["repos/getRepos"]},getUsers:function(t){return t.$store.getters["repos/getUsers"]},exists:function(t,e){var r=!1;return o.a.forEach(t,(function(t){return!o.a.isNil(e.user)&&e.user!==t.split("/")[0]||(!o.a.isNil(e.repo)&&e.repo!==t.split("/")[1].split(":")[0]||(!o.a.isNil(e.branch)&&e.branch!==t.split(":")[1]||(r=!0,!1)))})),r}}},311:function(t,e,r){"use strict";r.r(e);var n=r(82),o=r.n(n),c={props:{info:Object},data:function(){return{imgSource:""}},computed:{source:function(){return"/f/"+this.info.user+"/"+this.info.repo+"/"+this.info.branch+"/badge.svg"}},mounted:function(){var t=this;o.a.get(this.source).then((function(e){t.imgSource=t.source})).catch((function(){t.imgSource="/images/default_badge.svg"}))}},l=r(45),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.imgSource,alt:"构建状态"}})}),[],!1,null,null,null);e.default=component.exports},312:function(t,e,r){"use strict";r(19),r(2),r(36);var n=r(310),o=r.n(n),c=r(308);e.a={loadBuilds:function(t,e,r){return new Promise((function(n,l){o.a.isNil(t.$store.getters["builds/getBuilds"](e))?c.a.getBuilds(r).then((function(r){t.$store.commit("builds/setLatest",{repoStr:e,latest:r.data.latest}),t.$store.commit("builds/setBuilds",{repoStr:e,builds:r.data.builds}),n()})).catch(l):n()}))},getLatest:function(t,e){return t.$store.getters["builds/getLatest"](e)},getBuilds:function(t,e){return t.$store.getters["builds/getBuilds"](e)},exists:function(t,e){var r=!1;return o.a.forEach(t,(function(t){return!o.a.isNil(e.id)&&e.id.toString()!==t.id.toString()||(!o.a.isNil(e.commit)&&e.commit!==t.commit||(!o.a.isNil(e.timestamp)&&e.timestamp!==t.timestamp||(r=!0,!1)))})),r}}},314:function(t,e,r){var content=r(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("74c94b1c",content,!0,{sourceMap:!1})},319:function(t,e,r){"use strict";r(314)},320:function(t,e,r){var n=r(83)(!1);n.push([t.i,".repo-name[data-v-3ffd2ddd]{font-weight:500;font-size:1.8rem}.repo-branch[data-v-3ffd2ddd]{font-weight:300;font-size:.9rem}",""]),t.exports=n},325:function(t,e,r){"use strict";r.r(e);r(11),r(19),r(36),r(130);var n=r(310),o=r.n(n),c=r(309),l=r(312),d={layout:"main",data:function(){return{user:this.$route.params.user,repo:this.$route.params.repo,branch:this.$route.params.branch,build:this.$route.params.build,builds:null,buildInfo:null,buildTitle:"",buildTime:"",commitTime:""}},head:function(){return{title:"".concat(this.repo,"(").concat(this.branch,") - ybw0014 的 Maven 构建页面")}},computed:{repoDir:function(){return"".concat(this.user,"/").concat(this.repo,"/").concat(this.branch)},repoStr:function(){return"".concat(this.user,"/").concat(this.repo,":").concat(this.branch)}},mounted:function(){var t=this;try{var e=parseInt(this.build);if(e.toString()!==this.build.toString())throw new Error("无效的构建版本");this.build=e}catch(t){this.$router.push({name:"user-repo-branch"})}c.a.loadRepos(this).then((function(){var e={user:t.user,repo:t.repo,branch:t.branch};c.a.exists(c.a.getRepos(t),e)||t.$nuxt.error({statusCode:404,message:"Not found"}),l.a.loadBuilds(t,t.repoStr,t.repoDir).then((function(){t.builds=l.a.getBuilds(t,t.repoStr),l.a.exists(t.builds,{id:t.build})||t.$router.push({name:"user-repo-branch"}),t.buildInfo=o.a.find(t.builds,(function(e){return e.id===t.build})),t.buildTitle="构建 #"+t.buildInfo.id,t.buildTime=new Date(t.buildInfo.build_timestamp).toLocaleString(),t.commitTime=new Date(t.buildInfo.timestamp).toLocaleString()})).catch((function(){t.$nuxt.error({statusCode:404,message:"Not found"})}))}))},methods:{}},f=(r(319),r(45)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-breadcrumb",{staticClass:"mb-0"},[r("b-breadcrumb-item",{attrs:{to:"/"}},[r("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}}),t._v("\n            首页\n        ")],1),t._v(" "),r("b-breadcrumb-item",{attrs:{to:"/"+t.user}},[t._v("\n            "+t._s(t.user)+"\n        ")]),t._v(" "),r("b-breadcrumb-item",{attrs:{to:"/"+t.user+"/"+t.repo}},[t._v("\n            "+t._s(t.repo)+"\n        ")]),t._v(" "),r("b-breadcrumb-item",{attrs:{active:""}},[t._v("\n            "+t._s(t.branch)+"\n        ")])],1),t._v(" "),r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-list-group",{staticClass:"col-md-3 pr-0",attrs:{flush:""}},[r("b-list-group-item",{attrs:{to:"/?tab=all"}},[r("b-icon",{attrs:{icon:"arrow-left"}}),t._v("\n                    返回仓库列表\n                ")],1),t._v(" "),r("b-list-group-item",{attrs:{href:"https://github.com/"+t.user+"/"+t.repo+"/tree/"+t.branch,target:"_blank"}},[r("b-icon",{attrs:{icon:"github"}}),t._v("\n                    项目 GitHub 主页\n                ")],1),t._v(" "),r("b-list-group-item",{attrs:{href:"https://github.com/"+t.user+"/"+t.repo+"/issues",target:"_blank"}},[r("b-icon",{attrs:{icon:"bug"}}),t._v("\n                    问题追踪器\n                ")],1),t._v(" "),r("b-list-group-item",{attrs:{href:"/f/"+t.repoDir+"/badge.svg",target:"_blank"}},[r("b-icon",{attrs:{icon:"cloud"}}),t._v(" "),r("build-status",{attrs:{info:{user:t.user,repo:t.repo,branch:t.branch}}})],1)],1),t._v(" "),r("b-col",{staticClass:"pt-2 border-left",attrs:{md:"9"}},[r("h3",{staticClass:"repo-name"},[t._v("\n                    "+t._s(t.repo)+"\n                    "),r("small",{staticClass:"repo-branch"},[t._v(t._s(t.branch))])]),t._v(" "),r("b-container",{staticClass:"mt-4",attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{xs:"12",md:"8","offset-md":"2"}},[null!==t.buildInfo?r("b-card",[t._t("header",(function(){return[r("h4",{staticClass:"card-title"},[t._v("\n                                        "+t._s(t.buildTitle)+"\n                                        "),t.buildInfo.success?r("b-icon",{staticClass:"text-success",attrs:{icon:"check-circle-fill"}}):r("b-icon",{staticClass:"text-danger",attrs:{icon:"x-circle-fill"}})],1)]})),t._v(" "),r("b-card-text",[t._v("\n                                    构建于 "+t._s(t.buildTime)+"\n                                    "),r("a",{attrs:{href:"/f/"+t.repoDir+"/"+t.repo+"-"+t.branch+"-"+t.buildInfo.id+".log",target:"_blank"}},[t._v("\n                                        日志\n                                    ")])]),t._v(" "),r("b-button",{attrs:{href:"/f/"+t.repoDir+"/"+t.buildInfo.target,disabled:!t.buildInfo.success,variant:"primary",target:"_blank"}},[t._v("\n                                    直接下载\n                                ")]),t._v(" "),r("b-button",{attrs:{disabled:"",variant:"primary",target:"_blank"}},[t._v("\n                                    网盘下载(即将推出)\n                                ")]),t._v(" "),r("b-card",{staticClass:"mt-4 text-center"},[r("b-card-text",[t._v("\n                                        "+t._s(t.buildInfo.author)+" 于 "+t._s(t.commitTime)+" 提交\n                                        ("),r("a",{attrs:{href:"https://github.com/"+t.user+"/"+t.repo+"/commit/"+t.buildInfo.commit,target:"_blank"}},[t._v(t._s(t.buildInfo.commit.substr(0,7)))]),t._v("):\n                                    ")]),t._v(" "),r("b-card-text",[t._v("\n                                        "+t._s(t.buildInfo.message)+"\n                                    ")])],1)],2):t._e()],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"3ffd2ddd",null);e.default=component.exports;installComponents(component,{BuildStatus:r(311).default})}}]);