(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-520917b7"],{9363:function(e,t,a){},"966b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body"},[e.sharedChecked?n("div",[n("div",{attrs:{id:"header"}},[n("div",{attrs:{id:"header-title"}},[n("a-row",{attrs:{justify:"space-between",type:"flex"}},[n("a-col",{staticStyle:{"font-size":"20px"}},[n("a-icon",{attrs:{type:"appstore",theme:"twoTone"}}),e._v("   "),n("span",[e._v(e._s(this.sharedInfo.name))])],1),n("a-col",{staticStyle:{"margin-right":"40px"}},[n("a-button",{attrs:{icon:"download",disabled:!e.showDownload()},on:{click:e.handleDownload}},[e._v("下载")])],1)],1)],1),n("div",{attrs:{id:"header-time"}},[n("a-icon",{attrs:{type:"clock-circle"}}),e._v(" "),n("span",[e._v(e._s(e.showCreateTime()))]),e._v("    "),n("span",[e._v("过期时间："+e._s(e.showDeadline())+"后")])],1)]),n("div",{staticClass:"path"},[1===e.navs.length?[e._v(" 全部文件 ")]:[n("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.goback()}}},[e._v("返回上一级")]),n("a-divider",{attrs:{type:"vertical"}}),n("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.goto(0)}}},[e._v("全部文件")]),e._l(e.navs,(function(t,a){return[0!==a?[a===e.navs.length-1?[e._v("  >  "+e._s(t)+" ")]:[e._v("  >  "),n("a",{key:a,attrs:{href:"javascript:;"},on:{click:function(t){return e.goto(a)}}},[e._v(e._s(t))])]]:e._e()]}))]],2),n("a-table",{attrs:{columns:e.columns,"data-source":e.tableData,pagination:!1,rowKey:function(e,t){return t},"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},customRow:e.customRowFunc},scopedSlots:e._u([{key:"name",fn:function(t,a){return[a.isDir?n("a-icon",{attrs:{type:"folder"}}):n("a-icon",{attrs:{type:"file"}}),e._v("    "),a.isDir?n("a",{attrs:{href:"javascript:;"},on:{click:function(a){return e.gonext(t)}}},[e._v(e._s(t))]):n("span",[e._v(e._s(t))])]}}])})],1):n("div"),n("a-modal",{attrs:{width:"500px",centered:"",maskStyle:{opacity:1,background:"#FCFCFC"},maskClosable:!1,closable:!1,footer:""},model:{value:e.sharedModalToken,callback:function(t){e.sharedModalToken=t},expression:"sharedModalToken"}},[n("div",{staticStyle:{height:"240px"}},[n("div",{staticStyle:{height:"50px","line-height":"36px","text-align":"center","border-bottom":"2px solid #F0F0F0"}},[n("img",{staticStyle:{width:"28px",height:"28px"},attrs:{src:a("cf05"),alt:"logo"}}),e._v("  "),n("span",{staticStyle:{"font-size":"24px","font-weight":"600"}},[e._v("个人云盘")])]),n("p",{staticStyle:{"font-size":"16px","margin-top":"40px"}},[e._v("请输入提取码：")]),n("a-input",{staticStyle:{width:"320px"},attrs:{size:"large"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSharedInfo.apply(null,arguments)}},model:{value:e.sharedModalValue,callback:function(t){e.sharedModalValue=t},expression:"sharedModalValue"}}),e._v("  "),n("a-button",{attrs:{type:"primary",size:"large"},on:{click:e.handleSharedInfo}},[e._v("提取文件")]),n("p",{directives:[{name:"show",rawName:"v-show",value:this.sharedTokenCheckFailed,expression:"this.sharedTokenCheckFailed"}],staticStyle:{color:"#FF5151","font-size":"12px"}},[e._v(e._s(e.sharedTokenCheckText))])],1)])],1)},s=[],o=a("b85c"),i=(a("a434"),a("4e82"),a("a15b"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("4ec3")),r=a("c1df"),d=a.n(r),c=a("8ded"),h=a.n(c),l={name:"fileshared",data:function(){return{columns:[{title:"文件名",dataIndex:"filename",width:"50%",scopedSlots:{customRender:"name"}},{title:"大小",dataIndex:"size",width:"20%"},{title:"修改时间",dataIndex:"date"}],selectedRowKeys:[],selectedNames:[],sharedChecked:!1,sharedToken:"",sharedKey:"",sharedInfo:{},navs:[],tableData:[],sharedModalToken:!1,sharedModalValue:"",sharedTokenCheckFailed:!1,sharedTokenCheckText:""}},mounted:function(){var e=this;if(this.sharedKey=this.$route.params.key,this.sharedToken=h.a.get(this.sharedKey),this.sharedToken){var t={key:this.sharedKey,sharedToken:this.sharedToken};Object(i["k"])(t).then((function(t){e.sharedInfo=t,e.tableData=t.items,e.navs.push(t.root),e.sharedChecked=!0})).catch((function(){h.a.remove(e.sharedKey),e.sharedModalToken=!0}))}else this.sharedModalToken=!0},methods:{onSelectChange:function(e,t){this.selectedRowKeys=e;var a,n=[],s=Object(o["a"])(t);try{for(s.s();!(a=s.n()).done;){var i=a.value;n.push(i.filename)}}catch(r){s.e(r)}finally{s.f()}this.selectedNames=n},customRowFunc:function(e,t){var a=this;return{props:{},on:{click:function(){var n=a.selectedRowKeys.indexOf(t);-1===n?(a.selectedRowKeys.push(t),a.selectedNames.push(e.filename)):(a.selectedRowKeys.splice(n,1),a.selectedNames.splice(n,1))},dblclick:function(){},contextmenu:function(){},mouseenter:function(){},mouseleave:function(){}}}},getList:function(e){var t=this;Object(i["m"])({path:e,key:this.sharedKey,sharedToken:this.sharedToken}).then((function(e){t.selectedRowKeys=[],t.selectedNames=[],t.tableData=e.items,t.tableData.sort((function(e,t){return!e.isDir&&t.isDir||e.isDir==t.isDir&&e.filename>t.filename?1:-1}))}))},goback:function(){if(this.navs.length>1){this.navs.pop();var e=this.navs.join("/");this.getList(e)}},gonext:function(e){if(""!==e){this.navs.push(e);var t=this.navs.join("/");this.getList(t)}},goto:function(e){if(e>=0&&e<this.navs.length){this.navs.splice(e+1);var t=this.navs.join("/");this.getList(t)}},showDeadline:function(){var e=d.a.unix(this.sharedInfo.createTime),t=d.a.unix(this.sharedInfo.deadline);return t.to(e,!0)},showCreateTime:function(){return d.a.unix(this.sharedInfo.createTime).format("YYYY-MM-DD HH:mm:ss")},handleSharedInfo:function(){var e=this,t={key:this.sharedKey,sharedToken:this.sharedModalValue};Object(i["k"])(t).then((function(a){e.sharedModalToken=!1,e.sharedToken=t.sharedToken,h.a.set(e.sharedKey,e.sharedToken,432e5),e.sharedInfo=a,e.tableData=a.items,e.navs.push(a.root),e.sharedChecked=!0})).catch((function(t){e.sharedTokenCheckFailed=!0,e.sharedTokenCheckText=t.data.message}))},showDownload:function(){if(this.selectedRowKeys.length>0){var e,t=Object(o["a"])(this.selectedRowKeys);try{for(t.s();!(e=t.n()).done;){var a=e.value;if(this.tableData[a].isDir)return!1}}catch(n){t.e(n)}finally{t.f()}return!0}return!1},handleDownload:function(){var e=this;if(this.showDownload()){var t=function(){var t=e.selectedNames[a],n={key:e.sharedKey,sharedToken:e.sharedToken,path:e.navs.join("/"),filename:t};Object(i["j"])(n).then((function(e){var a=new Blob([e.data]),n=document.createElement("a"),s=window.URL.createObjectURL(a);n.href=s,n.download=decodeURIComponent(t),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(s)}))};for(var a in this.selectedNames)t()}}}},u=l,f=(a("d39c"),a("2877")),v=Object(f["a"])(u,n,s,!1,null,null,null);t["default"]=v.exports},cf05:function(e,t,a){e.exports=a.p+"img/logo.8dafbfe5.png"},d39c:function(e,t,a){"use strict";a("9363")}}]);
//# sourceMappingURL=chunk-520917b7.76e0b429.js.map