(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{27:function(e,t,a){e.exports=a(60)},49:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),o=a(25),r=a.n(o),l=a(7),i=a(1),c=a(10),m=a.n(c);a(49);class p extends s.Component{constructor(...e){super(...e),this.logout=e=>{this.props.clearUserData(),e.push("/login")}}render(){const e=this.props.isLoggedIn?n.a.createElement(i.b,{render:({history:e})=>n.a.createElement("button",{className:"link",onClick:()=>{this.logout(e)}},"Logout")}):n.a.createElement(l.b,{to:"/login",className:"link"},"Log in");return n.a.createElement("header",null,n.a.createElement("h1",null,"ToDo List"),n.a.createElement("nav",null,e,n.a.createElement(l.b,{to:"/todo",className:"link"},"Home"),n.a.createElement(l.b,{to:"/about",className:"link"},"About")))}}var h=p;function d(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"Lorem ipsum"))}a(54);class u extends s.Component{constructor(...e){super(...e),this.state={title:""},this.handleInput=e=>{this.setState({[e.target.name]:e.target.value})},this.addToDo=e=>{e.preventDefault(),this.state.title.length>3&&(this.props.addToDo(this.state.title),this.setState({title:""}))}}render(){return n.a.createElement("form",{onSubmit:this.addToDo,className:"addTodo"},n.a.createElement("input",{type:"text",name:"title",placeholder:"Add to do item ...",value:this.state.title,onChange:this.handleInput}),n.a.createElement("input",{type:"submit",value:"Add"}))}}var E=u;a(55),a(56);class g extends s.Component{constructor(...e){super(...e),this.getStyle=()=>this.props.toDoItem.completed?"completed":"",this.toggleToDo=()=>{this.props.toggleToDo(this.props.toDoItem.id)},this.deleteToDo=()=>{this.props.deleteToDo(this.props.toDoItem.id)}}render(){const e=this.props.toDoItem,t=e.id,a=e.title;return n.a.createElement("li",null,n.a.createElement("label",{htmlFor:t},n.a.createElement("input",{type:"checkbox",id:t,checked:this.props.toDoItem.completed,onChange:this.toggleToDo}),n.a.createElement("i",null),n.a.createElement("span",null,a),n.a.createElement("button",{onClick:this.deleteToDo},"\u2013")))}}var D=g;class N extends s.Component{createList(){return this.props.toDoItems.map(e=>n.a.createElement(D,{id:e.id,key:e.id,toDoItem:e,toggleToDo:this.props.toggleToDo,deleteToDo:this.props.deleteToDo}))}render(){return n.a.createElement("ul",{className:"to-do__list"},this.createList())}}var v=N;class b extends s.Component{constructor(...e){super(...e),this._generateId=()=>"_"+Math.random().toString(36).substr(2,9),this.toggleToDo=e=>{const t=this.props.toDoItems.map(t=>(t.id===e&&(t.completed=!t.completed),t));this.props.changeState({toDoItems:t})},this.deleteToDo=e=>{m.a.delete("".concat("https://my-json-server.typicode.com/elkinny/React-to-do/toDo","/").concat(e)).then(t=>this.props.changeState({toDoItems:this.props.toDoItems.filter(t=>t.id!==e)})).catch(()=>this.props.changeState({toDoItems:this.props.toDoItems.filter(t=>t.id!==e)}))},this.addToDo=e=>{const t={id:this._generateId(),title:e,completed:!1};m.a.post("https://my-json-server.typicode.com/elkinny/React-to-do/toDo",t).then(e=>{this.props.changeState({toDoItems:[...this.props.toDoItems,e.data]})})}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(E,{addToDo:this.addToDo}),n.a.createElement(v,{toDoItems:this.props.toDoItems,toggleToDo:this.toggleToDo,deleteToDo:this.deleteToDo}))}}var S=b;class f extends s.Component{render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{type:"text",name:"username",placeholder:"Username...",value:this.props.values.username,onChange:this.props.handleInput}),n.a.createElement("input",{type:"password",name:"password",placeholder:"Password...",value:this.props.values.password,onChange:this.props.handleInput}),n.a.createElement("button",{onClick:this.props.nextStep},"Next"))}}class I extends s.Component{render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{type:"text",name:"firstName",placeholder:"firstName...",value:this.props.values.firstName,onChange:this.props.handleInput}),n.a.createElement("input",{type:"text",name:"lastName",placeholder:"lastName...",value:this.props.values.lastName,onChange:this.props.handleInput}),n.a.createElement("input",{type:"email",name:"email",placeholder:"email...",value:this.props.values.email,onChange:this.props.handleInput}),n.a.createElement("div",{className:"buttons-block"},n.a.createElement("button",{onClick:this.props.prevStep},"Back"),n.a.createElement("button",{onClick:this.props.nextStep},"Next")))}}a(57);class _ extends s.Component{constructor(...e){super(...e),this.navigateToToDo=e=>{const t=this.props.values;t.state=1,this.props.changeState({userData:t}),t.username.length>3||t.password.length>3?e.push("/todo"):alert("Too small username or password")}}render(){const e=this.props.values,t=e.username,a=e.password,s=e.firstName,o=e.lastName,r=e.email;return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"confirmation__data"},n.a.createElement("span",{className:"confirmation__label"},"username"),n.a.createElement("span",{className:"confirmation__data"},t)),n.a.createElement("p",{className:"confirmation__data"},n.a.createElement("span",{className:"confirmation__label"},"password"),n.a.createElement("span",{className:"confirmation__data"},a)),n.a.createElement("p",{className:"confirmation__data"},n.a.createElement("span",{className:"confirmation__label"},"first Name"),n.a.createElement("span",{className:"confirmation__data"},s)),n.a.createElement("p",{className:"confirmation__data"},n.a.createElement("span",{className:"confirmation__label"},"last Name"),n.a.createElement("span",{className:"confirmation__data"},o)),n.a.createElement("p",{className:"confirmation__data"},n.a.createElement("span",{className:"confirmation__label"},"email"),n.a.createElement("span",{className:"confirmation__data"},r)),n.a.createElement("div",{className:"buttons-block"},n.a.createElement("button",{onClick:this.props.prevStep},"Back"),n.a.createElement(i.b,{render:({history:e})=>n.a.createElement("button",{onClick:()=>{this.navigateToToDo(e)}},"Done")})))}}a(58);class x extends s.Component{constructor(...e){super(...e),this.state=this.props.userData,this.nextStep=()=>{this.setState({step:this.state.step+1})},this.prevStep=()=>{this.setState({step:this.state.step-1})},this.handleInput=e=>{this.setState({[e.target.name]:e.target.value})}}selectComponent(){const e=this.state.step,t=this.state,a={username:t.username,password:t.password,firstName:t.firstName,lastName:t.lastName,email:t.email};switch(e){case 1:return n.a.createElement(f,{handleInput:this.handleInput,nextStep:this.nextStep,values:a});case 2:return n.a.createElement(I,{handleInput:this.handleInput,nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 3:return n.a.createElement(_,{nextStep:this.nextStep,prevStep:this.prevStep,values:a,changeState:this.props.changeState,clearUserData:this.props.clearUserData})}}render(){return n.a.createElement("div",{className:"login"},this.selectComponent())}}a(59);class T extends s.Component{constructor(...e){super(...e),this.state={toDoItems:[],userData:{step:1,username:"",password:"",firstName:"",lastName:"",email:""}},this.changeState=e=>{this.setState(e)},this.clearUserData=()=>{this.setState({userData:{step:1,username:"",password:"",firstName:"",lastName:"",email:""}})},this.basename="/React-to-do"}componentDidMount(){m.a.get("https://my-json-server.typicode.com/elkinny/React-to-do/toDo").then(e=>this.setState({toDoItems:e.data}))}render(){const e=this.state.userData,t=e.username,a=e.password,s=t&&a;return n.a.createElement(l.a,{basename:this.basename},n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(h,{isLoggedIn:s,clearUserData:this.clearUserData}),n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/todo",render:()=>s?n.a.createElement(S,{changeState:this.changeState,toDoItems:this.state.toDoItems}):n.a.createElement(i.a,{to:"/login"})}),n.a.createElement(i.b,{path:"/about",component:d}),n.a.createElement(i.b,{exact:!0,path:"/login",render:()=>s?n.a.createElement(i.a,{to:"/todo"}):n.a.createElement(x,{changeState:this.changeState,userData:this.state.userData})}),n.a.createElement(i.b,{exact:!0,path:"/",render:()=>s?n.a.createElement(i.a,{to:"/todo"}):n.a.createElement(i.a,{to:"/login"})})))))}}var C=T;r.a.render(n.a.createElement(C,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2c484efe.chunk.js.map