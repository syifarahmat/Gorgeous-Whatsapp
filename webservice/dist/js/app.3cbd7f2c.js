(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],d=0,u=[];d<i.length;d++)s=i[d],n[s]&&u.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(u.length)u.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,i=1;i<o.length;i++){var l=o[i];0!==n[l]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},n={app:0},a=[];function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var r=o("64a9"),n=o.n(r);n.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("HelloWorld",{attrs:{msg:"Gorgeous Websocket Api"}})],1)},a=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("h1",[e._v(e._s(e.msg))]),o("el-button",{attrs:{slot:"append",type:"primary",icon:"el-icon-question"},on:{click:function(t){e.drawer=!0}},slot:"append"},[e._v("Help")]),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.proxyVisible=!0}}},[e._v("设置代理")]),o("el-input",{attrs:{placeholder:"websocket server"},model:{value:e.host,callback:function(t){e.host=t},expression:"host"}}),o("el-divider",{attrs:{"content-position":"left"}},[e._v("Login/Register")]),o("div",[o("el-input",{attrs:{placeholder:"Country Code"},model:{value:e.cc,callback:function(t){e.cc=t},expression:"cc"}},[o("template",{slot:"prepend"},[e._v("cc:")])],2),o("el-input",{staticStyle:{"margin-top":"5px"},attrs:{placeholder:"Phone"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}},[o("template",{slot:"prepend"},[e._v("phone:")]),o("template",{slot:"append"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}]},[o("el-radio",{attrs:{label:"1"},model:{value:e.codetype,callback:function(t){e.codetype=t},expression:"codetype"}},[e._v("SMS")]),o("el-radio",{attrs:{label:"2"},model:{value:e.codetype,callback:function(t){e.codetype=t},expression:"codetype"}},[e._v("Voice")]),o("el-button",{attrs:{type:"primary"},on:{click:e.CodeRequest}},[e._v("CodeRequest")])],1)])],2),o("el-input",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],staticStyle:{"margin-top":"5px"},attrs:{placeholder:"SMS code or Voice code"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[o("template",{slot:"prepend"},[e._v("code:")]),o("template",{slot:"append"},[o("el-button",{attrs:{type:"primary"},on:{click:e.Verify}},[e._v("Verify")])],1)],2)],1),o("el-row",{staticStyle:{"margin-top":"5px"},attrs:{gutter:20}},[o("el-button",{attrs:{type:"primary"},on:{click:e.Login}},[e._v("Login")]),o("el-button",{attrs:{type:"primary"},on:{click:e.Register}},[e._v("Register")])],1),o("el-divider",{attrs:{"content-position":"left"}},[e._v("Command")]),o("el-input",{staticStyle:{"margin-top":"5px"},attrs:{placeholder:"please input command",clearable:""},model:{value:e.command,callback:function(t){e.command=t},expression:"command"}},[o("el-button",{attrs:{slot:"append",type:"primary",icon:"el-icon-s-promotion"},on:{click:e.Send},slot:"append"})],1),o("el-input",{staticStyle:{"margin-top":"5px"},attrs:{type:"textarea",rows:5,placeholder:""},model:{value:e.log,callback:function(t){e.log=t},expression:"log"}}),o("el-dialog",{attrs:{title:"提示",visible:e.errorDialogVisible,width:"80%",center:""},on:{"update:visible":function(t){e.errorDialogVisible=t}}},[o("span",[e._v(e._s(e.errorContent))]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.errorDialogVisible=!1}}},[e._v("确 定")])],1)]),o("el-dialog",{attrs:{title:"设置代理",visible:e.proxyVisible},on:{"update:visible":function(t){e.proxyVisible=t}}},[o("el-form",{attrs:{model:e.proxyInfo}},[o("el-form-item",{attrs:{label:"服务器","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.proxyInfo.server,callback:function(t){e.$set(e.proxyInfo,"server",t)},expression:"proxyInfo.server"}})],1),o("el-form-item",{attrs:{label:"端口","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.proxyInfo.port,callback:function(t){e.$set(e.proxyInfo,"port",t)},expression:"proxyInfo.port"}})],1),o("el-form-item",{attrs:{label:"代理类型","label-width":e.formLabelWidth}},[o("el-select",{attrs:{placeholder:"选择代理类型"},model:{value:e.proxyInfo.proxyType,callback:function(t){e.$set(e.proxyInfo,"proxyType",t)},expression:"proxyInfo.proxyType"}},[o("el-option",{attrs:{label:"http",value:"http"}}),o("el-option",{attrs:{label:"socks5",value:"socks"}})],1)],1),o("el-form-item",{attrs:{label:"用户名(可选)","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.proxyInfo.username,callback:function(t){e.$set(e.proxyInfo,"username",t)},expression:"proxyInfo.username"}})],1),o("el-form-item",{attrs:{label:"密码(可选)","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.proxyInfo.password,callback:function(t){e.$set(e.proxyInfo,"password",t)},expression:"proxyInfo.password"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:e.HandleCancelProxy}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.HandleSetProxy}},[e._v("确 定")])],1),o("el-checkbox",{model:{value:e.enableProxy,callback:function(t){e.enableProxy=t},expression:"enableProxy"}},[e._v("启用代理")])],1),o("el-drawer",{attrs:{visible:e.drawer,"with-header":!1},on:{"update:visible":function(t){e.drawer=t}}},[o("div",[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.commandTable}},[o("el-table-column",{attrs:{prop:"id",label:"功能",width:"180"}}),o("el-table-column",{attrs:{prop:"command",label:"命令"}}),o("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){return e.Copy(t.row)}}},[e._v("复制命令")])]}}])})],1)],1)])],1)},i=[],l=(o("28a5"),o("c5f6"),{name:"HelloWorld",props:{msg:String},data:function(){return{host:"ws://8.210.124.139:16090",cc:"55",phone:"11931514584",code:"",log:"",codetype:"1",command:"",errorDialogVisible:!1,errorContent:"",websocket:null,showCode:!1,taskId:0,isLogin:!1,drawer:!1,heartBeatTimer:null,proxyVisible:!1,enableProxy:!1,proxyInfo:{server:"",port:80,proxyType:"http",username:"",password:""},formLabelWidth:"120px",commandTable:[{id:"同步联系人",command:"SyncContact +661212 +123218 +819822"},{id:"发送文本消息",command:"SendText 8541264751254 hello"},{id:"获取头像",command:"GetHDHead 6645824511"},{id:"设置显示名",command:"SetPushName myname"},{id:"设置状态",command:"SetStatus mystatus"},{id:"创建群",command:"CreateGroup mygroup 686564512 78121545 7832154981"},{id:"修改群主题",command:"ModifyGroupSubject 123122132@g.us newsubject"},{id:"修改群描述",command:"ModifyGroupDesc 123122132@g.us newdesc"},{id:"邀请加入群",command:"ModifyGroupDesc 123122132@g.us 6541567412 872131571 654024645"},{id:"踢出群成员",command:"RemoveGroupMembers 123122132@g.us 6541567412 872131571 654024645"},{id:"设置管理员",command:"PromoteGroupMembers 123122132@g.us 6541567412 872131571 654024645"},{id:"删除管理员",command:"DemoteGroupMembers 123122132@g.us 6541567412 872131571 654024645"},{id:"获取群信息",command:"GetGroupInfo 123122132@g.us"},{id:"接受群邀请",command:"AcceptInviteToGroup afjjfasdfnsdfl"},{id:"获取群链接",command:"GetInviteLink 123122132@g.us"},{id:"离开群",command:"LeaveGroups 123122132@g.us 16546132165@g.us"},{id:"订阅状态",command:"Subscribe 54567121654"},{id:"发送位置",command:"SendLocation 54567121654 22.59202003479004 113.96762084960938 name address comment"},{id:"发送名片",command:"SendVcard 54567121654 myname BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:681330000000\nitem1.TEL:+681330000000\nitem1.X-ABLabel:xxx\nEND:VCARD"}]}},mounted:function(){this.InitWebsocket(),this.InitLocalStorage()},methods:{HandleCancelProxy:function(){this.proxyVisible=!1},InitLocalStorage:function(){var e=localStorage.getItem("proxyInfo");e&&(this.proxyInfo=JSON.parse(e)),this.enableProxy="true"==localStorage.getItem("enableProxy")},HandleSetProxy:function(){(""!=this.proxyInfo.server&&""!=this.proxyInfo.port||!this.enableProxy)&&(localStorage.setItem("proxyInfo",JSON.stringify(this.proxyInfo)),localStorage.setItem("enableProxy",this.enableProxy),this.proxyVisible=!1)},InitWebsocket:function(){var e=this;this.websocket=new WebSocket(this.host),this.websocket.onopen=function(t){e.PrintfLog("connect server success"),e.heartBeatTimer=setInterval(function(){var t={command:"HeartBeat"};e.SendCommand(t)},6e4)},this.websocket.onclose=function(t){e.PrintfLog("disconnect:"+t.reason),e.websocket=null,clearInterval(e.heartBeatTimer)},this.websocket.onmessage=function(t){e.HandleMessage(t.data)},this.websocket.onerror=function(t){e.PrintfLog("error"),e.websocket=null,clearInterval(e.heartBeatTimer)}},HandleMessage:function(e){this.PrintfLog(e);var t=JSON.parse(e),o=t["command"];"CheckAccountExist"==o?this.HandleCheckAccountExist(t):"CodeRequest"==o?this.HandleCodeRequest(t):"Register"==o?this.HandleRegister(t):"login"==o&&this.HandleLogin(t)},HandleLogin:function(e){0==e["code"]?this.isLogin=!0:this.isLogin=!1},HandleRegister:function(){},Verify:function(e){if(""==this.code)return this.errorContent="验证码不能为空",void(this.errorDialogVisible=!0);this.PrintfLog("正在注册...");var t={command:"Register"};t["code"]=this.code,this.SendCommand(t)},HandleCodeRequest:function(e){var t=JSON.parse(e["content"]);"fail"==t["status"]?this.PrintfLog("发送验证码请求失败"):this.PrintfLog("发送验证码请求成功，等待输入验证码...")},HandleCheckAccountExist:function(e){if(0==e["code"])this.PrintfLog("可以开始登录了");else{this.PrintfLog("正在请求验证码");var t={command:"CodeRequest"};"1"==this.codetype?t["method"]="sms":t["method"]="voice",this.SendCommand(t)}},CodeRequest:function(e){if(""==this.cc||""==this.phone)return this.errorContent="cc or phone can't be empty",void(this.errorDialogVisible=!0);this.log+="检查账号...\n";var t={command:"CheckAccountExist",token:"test"};t["cc"]=this.cc,t["phone"]=this.phone,this.enableProxy&&""!=this.proxyInfo.server&&("http"==this.proxyInfo.proxyType?t["proxy_type"]=0:"socks5"==this.proxyInfo.proxyType?t["proxy_type"]=1:t["proxy_type"]=-1,t["proxy_server"]=this.proxyInfo.server,t["proxy_port"]=Number(this.proxyInfo.port),""!=this.proxyInfo.username&&(t["proxy_username"]=this.proxyInfo.username,t["proxy_password"]=this.proxyInfo.password)),this.SendCommand(t)},Login:function(e){if(this.showCode)this.showCode=!1;else{if(""==this.cc||""==this.phone)return this.errorContent="cc or phone can't be empty",void(this.errorDialogVisible=!0);var t={command:"login",token:"test"};t["userName"]=this.cc+this.phone,t["config"]="none",this.enableProxy&&""!=this.proxyInfo.server&&("http"==this.proxyInfo.proxyType?t["proxy_type"]=0:"socks5"==this.proxyInfo.proxyType?t["proxy_type"]=1:t["proxy_type"]=-1,t["proxy_server"]=this.proxyInfo.server,t["proxy_port"]=Number(this.proxyInfo.port),""!=this.proxyInfo.username&&(t["proxy_username"]=this.proxyInfo.username,t["proxy_password"]=this.proxyInfo.password)),this.SendCommand(t)}},SendCommand:function(e){if(null!=this.websocket){var t=JSON.stringify(e);this.PrintfLog("发送命令: "+t),this.websocket.send(t)}else this.PrintfLog("需要先连接服务器， 或者刷新一下页面重连")},Register:function(e){this.showCode=!0},PrintfLog:function(e){this.log+=e,this.log+="\n"},Copy:function(e){this.command=e.command},Send:function(){if(""!=this.command){if(!this.isLogin)return this.errorContent="需要先登录",void(this.errorDialogVisible=!0);var e=this.command.split(" "),t={};t["command"]=e[0],t["task_id"]=++this.taskId;var o=e[0];switch(o){case"SyncContact":for(var r=[],n=1;n<e.length;n++)r.push(e[n]);t["phones"]=r;break;case"SendText":t["jid"]=e[1],t["content"]=e[2];break;case"SetHDHeadData":break;case"GetHDHead":t["jid"]=e[1];break;case"SetPushName":t["pushname"]=e[1];break;case"SetStatus":t["status"]=e[1];break;case"CreateGroup":t["subject"]=e[1];var a=[];for(n=2;n<e.length;n++)a.push(e[n]);t["members"]=a;break;case"ModifyGroupSubject":t["jid"]=e[1],t["subject"]=e[2];break;case"ModifyGroupDesc":t["jid"]=e[1],t["desc"]=e[2];break;case"InviteGroupMembers":case"RemoveGroupMembers":case"PromoteGroupMembers":case"DemoteGroupMembers":t["jid"]=e[1];for(a=[],n=2;n<e.length;n++)a.push(e[n]);t["members"]=a;break;case"GetGroupInfo":t["jid"]=e[1];break;case"GetInviteLink":t["jid"]=e[1],t["reset"]=!1;break;case"AcceptInviteToGroup":t["token"]=e[1];break;case"LeaveGroups":var s=[];for(n=1;n<e.length;n++)s.push(e[n]);t["groups"]=s;break;case"Subscribe":t["jid"]=e[1];break;case"SendDocument":break;case"SendImage":break;case"SendVideo":break;case"SendPTT":break;case"SendLocation":t["jid"]=e[1],t["latitude"]=Number(e[2]),t["longitude"]=Number(e[3]),t["name"]=e[4],t["address"]=e[5],t["comment"]=e[6];break;case"SendVcard":t["jid"]=e[1],t["showname"]=e[2],t["vcard"]=e[3];break}this.SendCommand(t)}}}}),c=l,p=(o("a870"),o("2877")),d=Object(p["a"])(c,s,i,!1,null,"41b1d7ec",null),u=d.exports,m={name:"app",components:{HelloWorld:u}},f=m,h=(o("034f"),Object(p["a"])(f,n,a,!1,null,null,null)),b=h.exports,y=o("5c96"),x=o.n(y);o("0fae");r["default"].use(x.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(b)}}).$mount("#app")},"64a9":function(e,t,o){},a682:function(e,t,o){},a870:function(e,t,o){"use strict";var r=o("a682"),n=o.n(r);n.a}});
//# sourceMappingURL=app.3cbd7f2c.js.map