__d(function(e,t,n,s){'use strict';var i=t(59),r=t(58),a=t(62);n.exports=(function(e){function t(e){e._map=new i,e.size=e._map.size}if(!r('Set'))return e.Set;var n=(function(){function e(n){if(babelHelpers.classCallCheck(this,e),null==this||'object'!=typeof this&&'function'!=typeof this)throw new TypeError('Wrong set object type.');if(t(this),null!=n)for(var s,i=a(n);!(s=i.next()).done;)this.add(s.value)}return babelHelpers.createClass(e,[{key:"add",value:function(e){return this._map.set(e,e),this.size=this._map.size,this}},{key:"clear",value:function(){t(this)}},{key:"delete",value:function(e){var t=this._map.delete(e);return this.size=this._map.size,t}},{key:"entries",value:function(){return this._map.entries()}},{key:"forEach",value:function(e){for(var t,n=arguments[1],s=this._map.keys();!(t=s.next()).done;)e.call(n,t.value,t.value,this)}},{key:"has",value:function(e){return this._map.has(e)}},{key:"values",value:function(){return this._map.values()}}]),e})();return n.prototype[a.ITERATOR_SYMBOL]=n.prototype.values,n.prototype.keys=n.prototype.values,n})(Function('return this')())},63);