__d(function(e,r,t,o){'use strict';function s(e){return e&&e.map(c)}r(23);var n=r(125),a=r(126),i=r(54),p=r(135),l=r(136),u=r(137),v=r(138),c=r(131),f=r(139),y=r(134),b=(r(146),r(13)),T=r(27),d=!1,C={CATransform3D:u,CGPoint:v,CGSize:y,UIEdgeInsets:l},g={CGColor:c,CGColorArray:s,UIColor:c,UIColorArray:s,CGImage:f,UIImage:f,RCTImageSource:f,Color:c,ColorArray:s};t.exports=function(e,r,t){function o(e,r){if(!r)return e;if(!e)return r;for(var t in r)if(r.hasOwnProperty(t)){var s=r[t];if(e.hasOwnProperty(t)){var n=e[t];'object'==typeof s&&'object'==typeof n&&(s=o(n,s))}e[t]=s}return e}return p(e,function(){var t=i[e];b(null!=t&&null!=!t.NativeProps,'Native component for "%s" does not exist',e),t.uiViewClassName=e,t.validAttributes={},t.propTypes=r?'object'==typeof r.__propTypesSecretDontUseThesePlease?r.__propTypesSecretDontUseThesePlease:r.propTypes:null;for(var s=t.baseModuleName,p=babelHelpers.extends({},t.NativeProps);s;){var l=i[s];l?(p=babelHelpers.extends({},p,l.NativeProps),s=l.baseModuleName):(T(!1,'Base module "%s" does not exist',s),s=null)}for(var u in p){var v=!1,c={},f=C[p[u]];f&&(c.diff=f,v=!0);var y=g[p[u]];y&&(c.process=y,v=!0),t.validAttributes[u]=!v||c}return t.validAttributes.style=a,d||((function(e){i.ViewManagerNames?e=o(e,i.getDefaultEventTypes()):(e.bubblingEventTypes=o(e.bubblingEventTypes,i.genericBubblingEventTypes),e.directEventTypes=o(e.directEventTypes,i.genericDirectEventTypes))})(t),d=!0),n.processEventTypes(t),t})}},124);