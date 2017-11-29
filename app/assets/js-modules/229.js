__d(function(e,t,i,r){'use strict';function a(e,t,i,r,a,n){if((function(e,t,i){return e>=0&&t<=i&&t>e})(i,r,a))return!0;var s=(function(e,t,i){var r=Math.min(t,i)-Math.max(e,0);return Math.max(0,r)})(i,r,a);return 100*(e?s/a:s/n)>=t}var n=t(13),s=(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{viewAreaCoveragePercentThreshold:0};babelHelpers.classCallCheck(this,e),this._hasInteracted=!1,this._lastUpdateTime=0,this._timers=new Set,this._viewableIndices=[],this._viewableItems=new Map,this._config=t}return babelHelpers.createClass(e,[{key:"dispose",value:function(){this._timers.forEach(clearTimeout)}},{key:"computeViewableItems",value:function(e,t,i,r,s){var l=this._config,o=l.itemVisiblePercentThreshold,h=l.viewAreaCoveragePercentThreshold,c=null!=h,f=c?h:o;n(null!=f&&null!=o!=(null!=h),'Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold');var u=[];if(0===e)return u;var v=-1,m=s||{first:0,last:e-1},d=m.first,b=m.last;n(b<e,'Invalid render range '+JSON.stringify({renderRange:s,itemCount:e}));for(var _=d;_<=b;_++){var p=r(_);if(p){var y=p.offset-t,w=y+p.length;if(y<i&&w>0)v=_,a(c,f,y,w,i,p.length)&&u.push(_);else if(v>=0)break}}return u}},{key:"onUpdate",value:function(e,t,i,r,a,n,s){var l=this,o=Date.now();0===this._lastUpdateTime&&e>0&&r(0)&&(this._lastUpdateTime=o);var h=this._lastUpdateTime?o-this._lastUpdateTime:0;if(!this._config.waitForInteraction||this._hasInteracted){var c=[];if(e&&(c=this.computeViewableItems(e,t,i,r,s)),this._viewableIndices.length!==c.length||!this._viewableIndices.every(function(e,t){return e===c[t]}))if(this._viewableIndices=c,this._lastUpdateTime=o,this._config.minimumViewTime&&h<this._config.minimumViewTime){var f=setTimeout(function(){l._timers.delete(f),l._onUpdateSync(c,n,a)},this._config.minimumViewTime);this._timers.add(f)}else this._onUpdateSync(c,n,a)}}},{key:"recordInteraction",value:function(){this._hasInteracted=!0}},{key:"_onUpdateSync",value:function(e,t,i){var r=this;e=e.filter(function(e){return r._viewableIndices.includes(e)});for(var a=this._viewableItems,n=new Map(e.map(function(e){var t=i(e,!0);return[t.key,t]})),s=[],l=n,o=Array.isArray(l),h=0,l=o?l:l["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var c;if(o){if(h>=l.length)break;c=l[h++]}else{if((h=l.next()).done)break;c=h.value}var f=c,u=babelHelpers.slicedToArray(f,2),v=u[0],m=u[1];a.has(v)||s.push(m)}for(var d=a,b=Array.isArray(d),_=0,d=b?d:d["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var p;if(b){if(_>=d.length)break;p=d[_++]}else{if((_=d.next()).done)break;p=_.value}var y=p,w=babelHelpers.slicedToArray(y,2),g=w[0],T=w[1];n.has(g)||s.push(babelHelpers.extends({},T,{isViewable:!1}))}s.length>0&&(this._viewableItems=n,t({viewableItems:Array.from(n.values()),changed:s,viewabilityConfig:this._config}))}}]),e})();i.exports=s},229);