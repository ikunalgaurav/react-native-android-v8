__d(function(e,t,r,o){'use strict';var i=t(142),s=t(52),l=t(126),a=t(148),n=t(51),u=i.roundToNearestPixel(.4);0===u&&(u=1/i.get());var b={position:'absolute',left:0,right:0,top:0,bottom:0},c=s.register(b);r.exports={hairlineWidth:u,absoluteFill:c,absoluteFillObject:b,flatten:n,setStyleAttributePreprocessor:function(e,t){var r=void 0;if('string'==typeof l[e])r={};else{if('object'!=typeof l[e])return void console.error(e+" is not a valid style attribute");r=l[e]}l[e]=babelHelpers.extends({},r,{process:t})},create:function(e){var t={};for(var r in e)a.validateStyle(r,e),t[r]=e[r]&&s.register(e[r]);return t}}},147);