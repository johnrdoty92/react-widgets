(this["webpackJsonpreact-widgets"]=this["webpackJsonpreact-widgets"]||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_johnr_Documents_react_widgets_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_johnr_Documents_react_widgets_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_johnr_Documents_react_widgets_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),C_Users_johnr_Documents_react_widgets_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_Display__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),_Keypad__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(12),_CalculatorHistory__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(13),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__),Calculator=function(_Component){Object(C_Users_johnr_Documents_react_widgets_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,_Component);var _super=Object(C_Users_johnr_Documents_react_widgets_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(){var _this;Object(C_Users_johnr_Documents_react_widgets_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={equation:"",history:[]},_this.handleNumClick=function(e){var t=_this.state.equation.slice(),r=e;"."===e&&-1!==t.indexOf(".")&&(t.match(/[-+/*]/)&&!t.match(/[-+/*]\d*[.]/)||(r="")),0===e&&(t.length<1||t.match(/[-+/*]$/))&&(r=""),_this.setState({equation:t.concat(r)})},_this.handleOpClick=function(i){var equation=_this.state.equation.toString().slice(),history=_this.state.history.slice();if("="===i)try{var evaluated=eval(equation);return void _this.setState({equation:evaluated,history:history.concat([{eq:equation}])})}catch(err){return}if(null!==equation.match(/[-*+/]/))if(equation.match(/\d*[.]?\d+$/)){var _evaluated=eval(equation);_this.setState({equation:_evaluated+i,history:history.concat([{eq:equation}])})}else;else _this.setState({equation:equation.concat(i)})},_this.handleClearClick=function(){_this.setState({equation:""})},_this}return Object(C_Users_johnr_Documents_react_widgets_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"calculator container bg-dark rounded",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Display__WEBPACK_IMPORTED_MODULE_5__.a,{equation:this.state.equation}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Keypad__WEBPACK_IMPORTED_MODULE_6__.a,{onNumClick:this.handleNumClick,onOpClick:this.handleOpClick,onClearClick:this.handleClearClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_CalculatorHistory__WEBPACK_IMPORTED_MODULE_7__.a,{history:this.state.history})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=Calculator},11:function(e,t,r){"use strict";r(1);var s=r(0);t.a=function(e){return Object(s.jsx)("div",{className:"m-2",style:{height:"38px",backgroundColor:"white"},children:e.equation})}},12:function(e,t,r){"use strict";var s=r(2),n=r(3),a=r(5),c=r(4),_=r(1),i=r(0),o=function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(l,{onClick:this.props.onNumClick,value:"7"}),Object(i.jsx)(l,{onClick:this.props.onNumClick,value:"8"}),Object(i.jsx)(l,{onClick:this.props.onNumClick,value:"9"}),Object(i.jsx)(l,{onClick:this.props.onOpClick,value:"/"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(l,{onClick:this.props.onNumClick,value:"4"}),Object(i.jsx)(l,{onClick:this.props.onNumClick,value:"5"}),Object(i.jsx)(l,{onClick:this.props.onNumClick,value:"6"}),Object(i.jsx)(l,{onClick:this.props.onOpClick,value:"*"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(l,{onClick:this.props.onNumClick,value:"1"}),Object(i.jsx)(l,{onClick:this.props.onNumClick,value:"2"}),Object(i.jsx)(l,{onClick:this.props.onNumClick,value:"3"}),Object(i.jsx)(l,{onClick:this.props.onOpClick,value:"+"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(l,{onClick:this.props.onNumClick,value:"."}),Object(i.jsx)(l,{onClick:this.props.onNumClick,value:"0"}),Object(i.jsx)(l,{onClick:this.props.onClearClick,value:"C"}),Object(i.jsx)(l,{onClick:this.props.onOpClick,value:"-"})]}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)(l,{onClick:this.props.onOpClick,value:"="})})]})}}]),r}(_.Component);function l(e){var t="m-1 col btn btn-";switch(e.value){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":t+="primary";break;case"/":case"+":case"-":case"*":t+="warning";break;case".":t+="secondary";break;case"C":t+="success";break;case"=":t+="danger";break;default:return}return Object(i.jsx)("button",{onClick:function(){return e.onClick(e.value)},className:t,children:e.value})}t.a=o},13:function(e,t,r){"use strict";r(1);var s=r(0);t.a=function(e){if(e.history){var t=e.history.map((function(e,t){return Object(s.jsx)("div",{children:e.eq},t)}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"History"}),t]})}return Object(s.jsx)("h1",{children:"HISTORY"})}},21:function(e,t,r){},24:function(e,t,r){"use strict";r.r(t);var s=r(2),n=r(3),a=r(5),c=r(4),_=r(1),i=r.n(_),o=r(9),l=r.n(o),u=(r(21),r(10)),h=r(16),b=r(14),d=r(0),j=function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"componentWillUnmount",value:function(){console.log("Removing ".concat(this.props.counter.id))}},{key:"render",value:function(){var e=this;return console.log(this.props),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:this.getBadgeClasses(),children:this.formatCount()}),Object(d.jsx)("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm",children:"Increment"}),Object(d.jsx)("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2",children:"Delete"})]})}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),r}(_.Component),p=function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){var e=this.props,t=e.onReset,r=e.onDelete,s=e.onIncrement;return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"btn btn-primary btn-sm m-2",onClick:t,children:"Reset"}),this.props.counters.map((function(e){return Object(d.jsx)(j,{onDelete:r,counter:e,onIncrement:s},e.id)}))]})}}]),r}(_.Component),O=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(d.jsxs)("a",{className:"navbar-brand",href:"#home",children:["Navbar"," ",Object(d.jsx)("span",{className:"badge bagde-pill badge-secondary",children:e.total})]})})})},m=function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={counters:[{id:1,value:1},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleIncrement=function(t){var r=Object(b.a)(e.state.counters),s=r.indexOf(t);r[s]=Object(h.a)({},t),r[s].value++,e.setState({counters:r})},e.handleDelete=function(t){var r=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:r})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e}return Object(n.a)(r,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{total:this.state.counters.filter((function(e){return e.value>0})).length}),Object(d.jsx)(p,{onReset:this.handleReset,onIncrement:this.handleIncrement,onDelete:this.handleDelete,counters:this.state.counters})]})}}]),r}(_.Component),C=r(15);function v(e){return Object(d.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var k=function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(d.jsx)(v,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(i.a.Component);function x(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(C.a)(t[r],3),n=s[0],a=s[1],c=s[2];if(e[n]&&e[n]===e[a]&&e[n]===e[c])return e[n]}return null}var f=function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},n}return Object(n.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();x(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],n=x(s.squares),a=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to game start";return Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:s})},r)}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"game-board",children:Object(d.jsx)(k,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(d.jsxs)("div",{className:"game-info",children:[Object(d.jsx)("div",{children:e}),Object(d.jsx)("ol",{children:a})]})]})}}]),r}(i.a.Component),E=(r(23),function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){return Object(d.jsxs)("div",{id:"home",className:"widgets-group",children:[Object(d.jsx)("div",{className:"widget",children:Object(d.jsx)(f,{})}),Object(d.jsx)("div",{className:"widget",children:Object(d.jsx)(u.a,{})}),Object(d.jsx)("div",{className:"widget",children:Object(d.jsx)(m,{})})]})}}]),r}(i.a.Component));l.a.render(Object(d.jsx)(E,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.a5b953e9.chunk.js.map