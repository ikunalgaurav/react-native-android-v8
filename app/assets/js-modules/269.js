__d(function(o,n,e,t){'use strict';var s=n(201),i=n(38),r=n(109),c=n(106),p=(n(150),n(54)),l=n(110),a=n(36),h=n(151),d=n(124),v=n(139),b=c.oneOfType([s.propTypes.source,c.oneOf([])]),f=h({displayName:'ToolbarAndroid',mixins:[i],propTypes:babelHelpers.extends({},l,{actions:c.arrayOf(c.shape({title:c.string.isRequired,icon:b,show:c.oneOf(['always','ifRoom','never']),showWithText:c.bool})),logo:b,navIcon:b,onActionSelected:c.func,onIconClicked:c.func,overflowIcon:b,subtitle:c.string,subtitleColor:a,title:c.string,titleColor:a,contentInsetStart:c.number,contentInsetEnd:c.number,rtl:c.bool,testID:c.string}),render:function(){var o=babelHelpers.extends({},this.props);if(this.props.logo&&(o.logo=v(this.props.logo)),this.props.navIcon&&(o.navIcon=v(this.props.navIcon)),this.props.overflowIcon&&(o.overflowIcon=v(this.props.overflowIcon)),this.props.actions){for(var n=[],e=0;e<this.props.actions.length;e++){var t=babelHelpers.extends({},this.props.actions[e]);t.icon&&(t.icon=v(t.icon)),t.show&&(t.show=p.ToolbarAndroid.Constants.ShowAsAction[t.show]),n.push(t)}o.nativeActions=n}return r.createElement(u,babelHelpers.extends({onSelect:this._onSelect},o))},_onSelect:function(o){var n=o.nativeEvent.position;-1===n?this.props.onIconClicked&&this.props.onIconClicked():this.props.onActionSelected&&this.props.onActionSelected(n)}}),u=d('ToolbarAndroid',f,{nativeOnly:{nativeActions:!0}});e.exports=f},269);