(function(t){function e(e){for(var n,r,c=e[0],l=e[1],u=e[2],s=0,f=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);a&&a(e);while(f.length)f.shift()();return d.push.apply(d,u||[]),o()}function o(){for(var t,e=0;e<d.length;e++){for(var o=d[e],n=!0,c=1;c<o.length;c++){var l=o[c];0!==i[l]&&(n=!1)}n&&(d.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},i={app:0},d=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/todo-list/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var a=l;d.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},5714:function(t,e,o){},a2ec:function(t,e,o){"use strict";o("5714")},cd49:function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),i=["disabled"],d={key:1,class:"todos"},r=["onClick"],c=["onUpdate:modelValue","onKeydown"],l=["onClick"],u=["onClick"],a={key:2};function s(t,e,o,s,f,p){return Object(n["h"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("form",{onSubmit:e[1]||(e[1]=Object(n["n"])((function(){return t.addTodo&&t.addTodo.apply(t,arguments)}),["prevent"]))},[Object(n["l"])(Object(n["e"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.newTodoTitle=e}),placeholder:"Enter your todo"},null,512),[[n["k"],t.newTodoTitle,void 0,{trim:!0}]]),Object(n["e"])("button",{disabled:""===t.newTodoTitle},"Add todo",8,i)],32),t.todos.length>=2?(Object(n["h"])(),Object(n["d"])("button",{key:0,onClick:e[2]||(e[2]=function(){return t.deleteTodos&&t.deleteTodos.apply(t,arguments)}),class:"delete-todos"}," Delete todos ")):Object(n["c"])("",!0),t.todos.length>=1?(Object(n["h"])(),Object(n["d"])("div",d,[(Object(n["h"])(!0),Object(n["d"])(n["a"],null,Object(n["i"])(t.todos,(function(e){return Object(n["h"])(),Object(n["d"])("div",{key:e.id,class:Object(n["g"])(["todo",{completed:e.completed}])},[e.editing?Object(n["l"])((Object(n["h"])(),Object(n["d"])("input",{key:1,"onUpdate:modelValue":function(t){return e.title=t},onKeydown:Object(n["m"])((function(o){return t.toggleEditing(e.id)}),["enter"]),class:"edit-todo-input"},null,40,c)),[[n["k"],e.title,void 0,{trim:!0}]]):(Object(n["h"])(),Object(n["d"])("span",{key:0,onClick:function(o){return t.toggleCompleted(e.id)},class:"title"},Object(n["j"])(e.title),9,r)),Object(n["e"])("button",{onClick:function(o){return t.toggleEditing(e.id)}},Object(n["j"])(e.editing?"Save":"Edit"),9,l),Object(n["e"])("button",{onClick:function(o){return t.deleteTodo(e.id)}},"Delete",8,u)],2)})),128))])):(Object(n["h"])(),Object(n["d"])("h4",a,"Good job! You don't have any tasks"))],64)}o("c740"),o("a434"),o("7db0");var f="todos",p={save:function(t){localStorage.setItem(f,JSON.stringify(t))},fetch:function(){var t=localStorage.getItem(f);return null===t?[]:JSON.parse(t)}},b=Object(n["f"])({name:"App",data:function(){return{newTodoTitle:"",todos:p.fetch()}},watch:{todos:{handler:p.save,deep:!0}},methods:{addTodo:function(){this.todos.push({id:Date.now(),title:this.newTodoTitle,completed:!1,editing:!1}),this.newTodoTitle=""},deleteTodo:function(t){var e=this.todos.findIndex((function(e){return e.id===t}));-1!==e&&this.todos.splice(e,1)},deleteTodos:function(){this.todos=[]},toggleEditing:function(t){var e=this.todos.find((function(e){return e.id===t}));e&&(e.editing=!e.editing)},toggleCompleted:function(t){var e=this.todos.find((function(e){return e.id===t}));e&&(e.completed=!e.completed)}}});o("a2ec");b.render=s;var O=b;Object(n["b"])(O).mount("#app")}});
//# sourceMappingURL=app.56d830b9.js.map