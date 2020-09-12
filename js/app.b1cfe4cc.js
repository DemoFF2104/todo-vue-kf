(function(t){function e(e){for(var o,s,l=e[0],a=e[1],d=e[2],u=0,p=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,l=1;l<n.length;l++){var a=n[l];0!==i[a]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/todo-vue-kf/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var c=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"todo"},[t._m(0),n("TaskField",{on:{onAddTask:t.onAddTask}}),n("div",{staticClass:"todo__list"},t._l(t.tasks,(function(e,o){return n("ListItem",{key:o,attrs:{index:o,text:e.text,completed:e.completed},on:{onToggleCompleted:t.onToggleCompleted,onRemoveTask:t.onRemoveTask}})})),1)],1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo__header"},[n("h4",[t._v("Список задач")])])}],s=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo__list-item",class:{"todo__list-item--completed":t.completed}},[n("div",{staticClass:"todo__list-item-check",on:{click:function(e){return t.toggleCompleted(t.index)}}},[n("svg",{attrs:{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.43434 0.26763C8.60579 0.0968096 8.83724 0.000672966 9.07865 3.51967e-06C9.32006 -0.000665926 9.55204 0.0941856 9.72442 0.264052C9.89681 0.433918 9.99575 0.665151 9.99987 0.907757C10.004 1.15036 9.91293 1.38485 9.74641 1.56052L4.85587 7.70484C4.77182 7.79584 4.67038 7.86886 4.55761 7.91955C4.44483 7.97023 4.32305 7.99754 4.19954 7.99984C4.07602 8.00214 3.95332 7.97938 3.83876 7.93293C3.72419 7.88647 3.62013 7.81727 3.53278 7.72947L0.292438 4.47138C0.202165 4.38683 0.12976 4.28488 0.0795416 4.1716C0.029323 4.05832 0.0023197 3.93603 0.000142992 3.81203C-0.00203372 3.68803 0.0206608 3.56487 0.0668722 3.44987C0.113084 3.33488 0.181865 3.23042 0.269114 3.14273C0.356363 3.05504 0.460292 2.98591 0.5747 2.93946C0.689108 2.89301 0.811652 2.8702 0.935022 2.87239C1.05839 2.87458 1.18006 2.90172 1.29277 2.95219C1.40547 3.00267 1.50691 3.07544 1.59103 3.16617L4.15635 5.74334L8.41107 0.294719C8.41866 0.285181 8.42684 0.276133 8.43557 0.26763H8.43434Z",fill:"white"}})])]),n("p",[t._v(t._s(t.text))]),n("div",{staticClass:"todo__list-item-remove",on:{click:function(e){return t.removeTask(t.index)}}},[n("svg",{attrs:{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M19 4.00138H14V2.33138C13.9765 1.6912 13.7002 1.08644 13.2316 0.649671C12.7629 0.212905 12.1402 -0.0202285 11.5 0.00137844H8.5C7.85975 -0.0202285 7.23706 0.212905 6.76843 0.649671C6.2998 1.08644 6.02346 1.6912 6 2.33138V4.00138H1C0.734784 4.00138 0.48043 4.10674 0.292893 4.29427C0.105357 4.48181 0 4.73616 0 5.00138C0 5.2666 0.105357 5.52095 0.292893 5.70849C0.48043 5.89602 0.734784 6.00138 1 6.00138H2V17.0014C2 17.797 2.31607 18.5601 2.87868 19.1227C3.44129 19.6853 4.20435 20.0014 5 20.0014H15C15.7956 20.0014 16.5587 19.6853 17.1213 19.1227C17.6839 18.5601 18 17.797 18 17.0014V6.00138H19C19.2652 6.00138 19.5196 5.89602 19.7071 5.70849C19.8946 5.52095 20 5.2666 20 5.00138C20 4.73616 19.8946 4.48181 19.7071 4.29427C19.5196 4.10674 19.2652 4.00138 19 4.00138ZM8 2.33138C8 2.17138 8.21 2.00138 8.5 2.00138H11.5C11.79 2.00138 12 2.17138 12 2.33138V4.00138H8V2.33138ZM16 17.0014C16 17.2666 15.8946 17.521 15.7071 17.7085C15.5196 17.896 15.2652 18.0014 15 18.0014H5C4.73478 18.0014 4.48043 17.896 4.29289 17.7085C4.10536 17.521 4 17.2666 4 17.0014V6.00138H16V17.0014Z",fill:"#C7C7C7"}})])])])}),l=[],a=(n("a9e3"),{props:{completed:Boolean,text:String,index:Number},methods:{removeTask:function(t){confirm("Вы действительно хотите удалить?")&&this.$emit("onRemoveTask",t)},toggleCompleted:function(t){this.$emit("onToggleCompleted",t)}}}),d=a,c=n("2877"),u=Object(c["a"])(d,s,l,!1,null,null,null),p=u.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo__add-field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"Введите текст задачи..."},domProps:{value:t.text},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.addTask(e):null},input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{staticClass:"todo__add-field-button",on:{click:t.addTask}},[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M16.875 7.875H10.125V1.125C10.125 0.826631 10.0065 0.540484 9.79549 0.329505C9.58452 0.118527 9.29837 0 9 0C8.70163 0 8.41548 0.118527 8.20451 0.329505C7.99353 0.540484 7.875 0.826631 7.875 1.125V7.875H1.125C0.826631 7.875 0.540484 7.99353 0.329505 8.20451C0.118527 8.41548 0 8.70163 0 9C0 9.29837 0.118527 9.58452 0.329505 9.79549C0.540484 10.0065 0.826631 10.125 1.125 10.125H7.875V16.875C7.875 17.1734 7.99353 17.4595 8.20451 17.6705C8.41548 17.8815 8.70163 18 9 18C9.29837 18 9.58452 17.8815 9.79549 17.6705C10.0065 17.4595 10.125 17.1734 10.125 16.875V10.125H16.875C17.1734 10.125 17.4595 10.0065 17.6705 9.79549C17.8815 9.58452 18 9.29837 18 9C18 8.70163 17.8815 8.41548 17.6705 8.20451C17.4595 7.99353 17.1734 7.875 16.875 7.875Z",fill:"#C7C7C7"}})])])])},f=[],m={data:function(){return{text:""}},methods:{addTask:function(){this.text&&(this.$emit("onAddTask",this.text),this.text="")}}},v=m,h=Object(c["a"])(v,C,f,!1,null,null,null),g=h.exports,x={name:"App",data:function(){return{tasks:[{text:"Изучить VueJS",completed:!0},{text:"Разработать ToDo на VueJS",completed:!1}]}},methods:{onToggleCompleted:function(t){this.tasks[t].completed=!this.tasks[t].completed},onRemoveTask:function(t){this.tasks.splice(t,1)},onAddTask:function(t){this.tasks.push({text:t,completed:!1})}},components:{ListItem:p,TaskField:g}},_=x,k=(n("034f"),Object(c["a"])(_,i,r,!1,null,null,null)),w=k.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(w)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.b1cfe4cc.js.map