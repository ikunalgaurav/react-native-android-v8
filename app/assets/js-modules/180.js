__d(function(e,t,i,a){'use strict';var _=t(178),n=t(179),s=(function(e){function t(){babelHelpers.classCallCheck(this,t);var e=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._children=[],e}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"__makeNative",value:function(){if(!this.__isNative){this.__isNative=!0;for(var e=this._children,t=Array.isArray(e),i=0,e=t?e:e["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var a;if(t){if(i>=e.length)break;a=e[i++]}else{if((i=e.next()).done)break;a=i.value}var _=a;_.__makeNative(),n.API.connectAnimatedNodes(this.__getNativeTag(),_.__getNativeTag())}}}},{key:"__addChild",value:function(e){0===this._children.length&&this.__attach(),this._children.push(e),this.__isNative&&(e.__makeNative(),n.API.connectAnimatedNodes(this.__getNativeTag(),e.__getNativeTag()))}},{key:"__removeChild",value:function(e){var t=this._children.indexOf(e);-1!==t?(this.__isNative&&e.__isNative&&n.API.disconnectAnimatedNodes(this.__getNativeTag(),e.__getNativeTag()),this._children.splice(t,1),0===this._children.length&&this.__detach()):console.warn("Trying to remove a child that doesn't exist")}},{key:"__getChildren",value:function(){return this._children}}]),t})(_);i.exports=s},180);