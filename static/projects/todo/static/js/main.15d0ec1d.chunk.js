(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,a,e){},16:function(t,a,e){"use strict";e.r(a);var n=e(0),s=e.n(n),r=e(3),i=e.n(r),l=(e(15),e(1)),o=e(4),c=e(5),u=e(7),d=e(6),k=e(8),p=function(){return s.a.createElement("div",{className:"background"})},m=function(t){var a=["btn",t.styles].join(" ");return s.a.createElement("button",{className:a,onClick:t.click},t.children)},f=function(t){return s.a.createElement("form",{className:"taskForm",onSubmit:t.addTask},s.a.createElement("input",{type:"text",className:"taskForm__input",placeholder:"Add new task...",value:t.inputValue,onChange:t.changeInputValue}),s.a.createElement("div",{className:"taskForm__container-btn"},s.a.createElement(m,{styles:"btn--form",click:t.addTask},"Add task"),s.a.createElement(m,{styles:"btn--form",click:t.clearTasks},"Clear tasks")))},D=s.a.createContext({changeTaskStatus:function(){},updateTask:function(){}}),v=function(t){var a=Object(n.useContext)(D);return s.a.createElement("div",{className:"task__icons"},s.a.createElement("i",{className:"task__icon fas fa-trash-alt",title:"Remove task",onClick:function(t){return a.changeTaskStatus(t,"delete")}}),s.a.createElement("i",{className:"task__icon fas fa-edit",title:"Edit task",onClick:function(t){return a.changeTaskStatus(t,"open")}}),s.a.createElement("i",{className:"task__icon fas fa-star",title:t.priorityTitle,onClick:function(t){return a.changeTaskStatus(t,"priority")}}),s.a.createElement("i",{className:"task__icon fas fa-check",title:"Mark task as done",onClick:function(t){return a.changeTaskStatus(t,"done")}}))},h=function(t){var a=Object(n.useContext)(D);return s.a.createElement("div",{className:"task__extention"},s.a.createElement("input",{className:"task__title-input",type:"text",value:t.data.title,onChange:function(t){return a.updateTask(t,"title")}}),s.a.createElement("textarea",{className:"task__description-input",placeholder:"Describe your task here...",value:t.data.description,onChange:function(t){return a.updateTask(t,"description")}}))},T=function(t){var a=["task"],e="Add priority";t.data.priority?(a.push("task--priority"),e="Remove priority"):t.data.open&&a.push("task--open");var n=t.data.open?s.a.createElement(h,{data:t.data}):null;return s.a.createElement("li",{className:a.join(" "),id:t.data.id},s.a.createElement("div",{className:"task__main"},t.children,s.a.createElement(v,{priorityTitle:e})),n)},g=function(t){var a=["taskList"];t.isDone&&a.push("taskList--done");var e=t.data.map(function(a){return a.done===t.isDone?s.a.createElement(T,{data:a,key:a.id},a.title):null});return s.a.createElement("ul",{className:a.join(" ")},e)},y=function(t){function a(){var t,e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=Object(u.a)(this,(t=Object(d.a)(a)).call.apply(t,[this].concat(s)))).state={isDoneListVisible:!1,taskInputValue:"",lastID:1e4,tasksData:[]},e.lsGetData=function(){return{data:JSON.parse(localStorage.getItem("tasksData")),id:JSON.parse(localStorage.getItem("lastID"))}},e.lsSetData=function(t,a){localStorage.setItem("tasksData",JSON.stringify(t)),localStorage.setItem("lastID",JSON.stringify(a))},e.lsClearData=function(){localStorage.removeItem("tasksData"),localStorage.removeItem("lastID")},e.changeInputValueHandler=function(t){var a=t.target.value;e.setState({taskInputValue:a})},e.clearTasksDataHandler=function(t){t.preventDefault(),e.lsClearData(),e.setState({tasksData:[]})},e.addTaskHandler=function(t){t.preventDefault();var a=e.state,n=a.lastID,s=a.tasksData,r=a.taskInputValue,i=n+1;if(""!==r){var o={title:r,id:i,description:"",priority:!1,done:!1,open:!1},c=[].concat(Object(l.a)(s),[o]);e.lsSetData(c,i),e.setState({tasksData:c,lastID:i,taskInputValue:""})}else alert("Please add a task below...")},e.showDoneListHandler=function(){var t=e.state.isDoneListVisible;e.setState({isDoneListVisible:!t})},e.getTaskHandler=function(t){var a=Number(t.target.closest(".task").getAttribute("id")),n=Object(l.a)(e.state.tasksData),s=n.findIndex(function(t){return t.id===a});return{newTasksData:n,taskArrayIndex:s}},e.markDoneTaskHandler=function(t){var a=t.newTasksData;return a[t.taskArrayIndex].done=!0,a},e.removeTaskHandler=function(t){var a=t.newTasksData,e=t.taskArrayIndex;return a.splice(e,1),a},e.openTaskHandler=function(t){var a=t.newTasksData,e=t.taskArrayIndex,n=a[e].open;return a[e].open=!n,a},e.prioritiseTaskHandler=function(t){var a=t.newTasksData,e=t.taskArrayIndex,n=a.splice(e,1)[0];if(a=[n].concat(Object(l.a)(a)),n.priority){n.priority=!1;var s=a.filter(function(t){return!0===t.priority}),r=a.filter(function(t){return!1===t.priority});a=[].concat(Object(l.a)(s),Object(l.a)(r))}else n.priority=!0;return a},e.changeTaskStatusHandler=function(t,a){var n,s=e.getTaskHandler(t);"done"===a?n=e.markDoneTaskHandler(s):"delete"===a?n=e.removeTaskHandler(s):"open"===a?n=e.openTaskHandler(s):"priority"===a&&(n=e.prioritiseTaskHandler(s)),e.lsSetData(n,e.state.lastID),e.setState({tasksData:n})},e.updateTaskHandler=function(t,a){var n=e.getTaskHandler(t),s=n.newTasksData,r=n.taskArrayIndex;"description"===a?s[r].description=t.target.value:"title"===a&&(s[r].title=t.target.value),e.lsSetData(s,e.state.lastID),e.setState({tasksData:s})},e}return Object(k.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this.lsGetData();if(null!==t.data&&null!==t.lastID){var a=t.data,e=t.id;a.map(function(t){t.open=!1}),this.setState({tasksData:a,lastID:e})}}},{key:"render",value:function(){var t=this.state.isDoneListVisible?s.a.createElement(g,{data:this.state.tasksData,isDone:!0}):null;return s.a.createElement("main",{className:"app"},s.a.createElement(p,null),s.a.createElement(f,{inputValue:this.state.taskInputValue,changeInputValue:this.changeInputValueHandler,clearTasks:this.clearTasksDataHandler,addTask:this.addTaskHandler}),s.a.createElement(D.Provider,{value:{changeTaskStatus:this.changeTaskStatusHandler,updateTask:this.updateTaskHandler}},s.a.createElement(g,{data:this.state.tasksData,isDone:!1}),s.a.createElement(m,{styles:"btn--done",click:this.showDoneListHandler},"Show done tasks"),t))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,a,e){t.exports=e(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.15d0ec1d.chunk.js.map