__d(function(e,n,t,i){'use strict';function r(e,n){o.configureNextLayoutAnimation(e,n||function(){},function(){})}function a(e,n,t){return{duration:e,create:{type:n,property:t},update:{type:n},delete:{type:n,property:t}}}var p=n(106),o=n(54),s=n(129),u=p.checkPropTypes,c=s({spring:!0,linear:!0,easeInEaseOut:!0,easeIn:!0,easeOut:!0,keyboard:!0}),y=s({opacity:!0,scaleXY:!0}),l=p.shape({duration:p.number,delay:p.number,springDamping:p.number,initialVelocity:p.number,type:p.oneOf(Object.keys(c)).isRequired,property:p.oneOf(Object.keys(y))}),d=p.shape({duration:p.number.isRequired,create:l,update:l,delete:l}),g={easeInEaseOut:a(300,c.easeInEaseOut,y.opacity),linear:a(500,c.linear,y.opacity),spring:{duration:700,create:{type:c.linear,property:y.opacity},update:{type:c.spring,springDamping:.4},delete:{type:c.linear,property:y.opacity}}},f={configureNext:r,create:a,Types:c,Properties:y,checkConfig:function(e,n,t){u({config:d},{config:e},n,t)},Presets:g,easeInEaseOut:r.bind(null,g.easeInEaseOut),linear:r.bind(null,g.linear),spring:r.bind(null,g.spring)};t.exports=f},236);