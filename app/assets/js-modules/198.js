__d(function(e,n,u,t){'use strict';var r=void 0,a=(function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,null,[{key:"step0",value:function(e){return e>0?1:0}},{key:"step1",value:function(e){return e>=1?1:0}},{key:"linear",value:function(e){return e}},{key:"ease",value:function(n){return r||(r=e.bezier(.42,0,1,1)),r(n)}},{key:"quad",value:function(e){return e*e}},{key:"cubic",value:function(e){return e*e*e}},{key:"poly",value:function(e){return function(n){return Math.pow(n,e)}}},{key:"sin",value:function(e){return 1-Math.cos(e*Math.PI/2)}},{key:"circle",value:function(e){return 1-Math.sqrt(1-e*e)}},{key:"exp",value:function(e){return Math.pow(2,10*(e-1))}},{key:"elastic",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*Math.PI;return function(n){return 1-Math.pow(Math.cos(n*Math.PI/2),3)*Math.cos(n*e)}}},{key:"back",value:function(e){return void 0===e&&(e=1.70158),function(n){return n*n*((e+1)*n-e)}}},{key:"bounce",value:function(e){return e<.36363636363636365?7.5625*e*e:e<.7272727272727273?7.5625*(e-=.5454545454545454)*e+.75:e<.9090909090909091?7.5625*(e-=.8181818181818182)*e+.9375:7.5625*(e-=.9545454545454546)*e+.984375}},{key:"bezier",value:function(e,u,t,r){return n(199)(e,u,t,r)}},{key:"in",value:function(e){return e}},{key:"out",value:function(e){return function(n){return 1-e(1-n)}}},{key:"inOut",value:function(e){return function(n){return n<.5?e(2*n)/2:1-e(2*(1-n))/2}}}]),e})();u.exports=a},198);