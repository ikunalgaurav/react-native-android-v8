__d(function(e,n,t,i){'use strict';var r=n(19),a=n(103),o=e.nativePerformanceNow||n(24),s={},c={},m={},u={addTimespan:function(e,n,t){s[e]||(s[e]={description:t,totalTime:n})},startTimespan:function(e,n){s[e]||(s[e]={description:n,startTime:o()},m[e]=r.beginAsyncEvent(e))},stopTimespan:function(e){var n=s[e];n&&n.startTime&&(n.endTime||(n.endTime=o(),n.totalTime=n.endTime-(n.startTime||0),r.endAsyncEvent(e,m[e]),delete m[e]))},clear:function(){s={},c={}},clearCompleted:function(){for(var e in s)s[e].totalTime&&delete s[e];c={}},clearExceptTimespans:function(e){s=Object.keys(s).reduce(function(n,t){return-1!==e.indexOf(t)&&(n[t]=s[t]),n},{}),c={}},currentTimestamp:function(){return o()},getTimespans:function(){return s},hasTimespan:function(e){return!!s[e]},logTimespans:function(){for(var e in s)s[e].totalTime&&a(e+': '+s[e].totalTime+'ms')},addTimespans:function(e,n){for(var t=0,i=e.length;t<i;t+=2){var r=n[t/2];u.addTimespan(r,e[t+1]-e[t],r)}},setExtra:function(e,n){c[e]||(c[e]=n)},getExtras:function(){return c}};t.exports=u},102);