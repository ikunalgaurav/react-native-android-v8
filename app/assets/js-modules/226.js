__d(function(e,t,r,o){'use strict';var s=t(227),n=t(228),i=t(106),l=t(109),a=t(39),h=t(225),p=t(203),c=t(147),d=t(149),u=t(229),f=(t(51),t(103)),m=t(13),_=(t(27),t(230).computeWindowedRenderLimits),g=!1,v=(function(e){function t(e,r){babelHelpers.classCallCheck(this,t);var o=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return y.call(o),m(!e.onScroll||!e.onScroll.__isNative,"Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver"),m(!(o._isNestedWithSameOrientation()&&e.onViewableItemsChanged),"Nesting lists that scroll in the same direction does not support onViewableItemsChangedon the inner list."),o._fillRateHelper=new n(o._getFrameMetrics),o._updateCellsToRenderBatcher=new s(o._updateCellsToRender,o.props.updateCellsBatchingPeriod),o.props.viewabilityConfigCallbackPairs?o._viewabilityTuples=o.props.viewabilityConfigCallbackPairs.map(function(e){return{viewabilityHelper:new u(e.viewabilityConfig),onViewableItemsChanged:e.onViewableItemsChanged}}):o.props.onViewableItemsChanged&&o._viewabilityTuples.push({viewabilityHelper:new u(o.props.viewabilityConfig),onViewableItemsChanged:o.props.onViewableItemsChanged}),o.state={first:o.props.initialScrollIndex||0,last:Math.min(o.props.getItemCount(o.props.data),(o.props.initialScrollIndex||0)+o.props.initialNumToRender)-1},o}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"scrollToEnd",value:function(e){var t=!e||e.animated,r=this.props.getItemCount(this.props.data)-1,o=this._getFrameMetricsApprox(r),s=Math.max(0,o.offset+o.length+this._footerLength-this._scrollMetrics.visibleLength);this._scrollRef.scrollTo(this.props.horizontal?{x:s,animated:t}:{y:s,animated:t})}},{key:"scrollToIndex",value:function(e){var t=this.props,r=t.data,o=t.horizontal,s=t.getItemCount,n=t.getItemLayout,i=t.onScrollToIndexFailed,l=e.animated,a=e.index,h=e.viewOffset,p=e.viewPosition;if(m(a>=0&&a<s(r),"scrollToIndex out of range: "+a+" vs "+(s(r)-1)),!n&&a>this._highestMeasuredFrameIndex)return m(!!i,"scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures."),void i({averageItemLength:this._averageCellLength,highestMeasuredFrameIndex:this._highestMeasuredFrameIndex,index:a});var c=this._getFrameMetricsApprox(a),d=Math.max(0,c.offset-(p||0)*(this._scrollMetrics.visibleLength-c.length))-(h||0);this._scrollRef.scrollTo(o?{x:d,animated:l}:{y:d,animated:l})}},{key:"scrollToItem",value:function(e){for(var t=e.item,r=this.props,o=r.data,s=r.getItem,n=(0,r.getItemCount)(o),i=0;i<n;i++)if(s(o,i)===t){this.scrollToIndex(babelHelpers.extends({},e,{index:i}));break}}},{key:"scrollToOffset",value:function(e){var t=e.animated,r=e.offset;this._scrollRef.scrollTo(this.props.horizontal?{x:r,animated:t}:{y:r,animated:t})}},{key:"recordInteraction",value:function(){this._viewabilityTuples.forEach(function(e){e.viewabilityHelper.recordInteraction()}),this._updateViewableItems(this.props.data)}},{key:"flashScrollIndicators",value:function(){this._scrollRef.flashScrollIndicators()}},{key:"getScrollResponder",value:function(){if(this._scrollRef&&this._scrollRef.getScrollResponder)return this._scrollRef.getScrollResponder()}},{key:"getScrollableNode",value:function(){return this._scrollRef&&this._scrollRef.getScrollableNode?this._scrollRef.getScrollableNode():a.findNodeHandle(this._scrollRef)}},{key:"setNativeProps",value:function(e){this._scrollRef&&this._scrollRef.setNativeProps(e)}},{key:"getChildContext",value:function(){return{virtualizedList:{horizontal:this.props.horizontal}}}}]),babelHelpers.createClass(t,[{key:"componentDidMount",value:function(){var e=this;this.props.initialScrollIndex&&(this._initialScrollIndexTimeout=setTimeout(function(){return e.scrollToIndex({animated:!1,index:e.props.initialScrollIndex})},0))}},{key:"componentWillUnmount",value:function(){this._updateViewableItems(null),this._updateCellsToRenderBatcher.dispose(),this._viewabilityTuples.forEach(function(e){e.viewabilityHelper.dispose()}),this._fillRateHelper.deactivateAndFlush(),clearTimeout(this._initialScrollIndexTimeout)}},{key:"componentWillReceiveProps",value:function(e){var t=e.data,r=e.extraData,o=e.getItemCount,s=e.maxToRenderPerBatch;this.setState({first:Math.max(0,Math.min(this.state.first,o(t)-1-s)),last:Math.max(0,Math.min(this.state.last,o(t)-1))}),t===this.props.data&&r===this.props.extraData||(this._hasDataChangedSinceEndReached=!0)}},{key:"_pushCells",value:function(e,t,r,o,s,n){var i=this,a=this.props,h=a.CellRendererComponent,p=a.ItemSeparatorComponent,c=a.data,d=a.getItem,u=a.getItemCount,f=a.horizontal,m=a.keyExtractor,_=this.props.ListHeaderComponent?1:0,g=u(c)-1,v=void 0;s=Math.min(g,s);for(var y=function(o){var s=d(c,o),a=m(s,o);r.has(o+_)&&t.push(e.length),e.push(l.createElement(b,{CellRendererComponent:h,ItemSeparatorComponent:o<g?p:void 0,cellKey:a,fillRateHelper:i._fillRateHelper,horizontal:f,index:o,inversionStyle:n,item:s,key:a,prevCellKey:v,onUpdateSeparators:i._onUpdateSeparators,onLayout:function(e){return i._onCellLayout(e,a,o)},onUnmount:i._onCellUnmount,parentProps:i.props,ref:function(e){i._cellRefs[a]=e}})),v=a},C=o;C<=s;C++)y(C)}},{key:"_isVirtualizationDisabled",value:function(){return this.props.disableVirtualization||this._isNestedWithSameOrientation()}},{key:"_isNestedWithSameOrientation",value:function(){var e=this.context.virtualizedList;return!(!e||!!e.horizontal!=!!this.props.horizontal)}},{key:"render",value:function(){var e=this.props,t=e.ListEmptyComponent,r=e.ListFooterComponent,o=e.ListHeaderComponent,s=this.props,n=s.data,i=s.horizontal,a=this._isVirtualizationDisabled(),h=this.props.inverted?this.props.horizontal?C.horizontallyInverted:C.verticallyInverted:null,p=[],c=new Set(this.props.stickyHeaderIndices),u=[];if(o){c.has(0)&&u.push(0);var f=l.isValidElement(o)?o:l.createElement(o,null);p.push(l.createElement(d,{key:"$header",onLayout:this._onLayoutHeader,style:h},f))}var m=this.props.getItemCount(n);if(m>0){g=!1;var _=i?'width':'height',v=this.props.initialScrollIndex?-1:this.props.initialNumToRender-1,y=this.state,b=y.first,x=y.last;this._pushCells(p,u,c,0,v,h);var L=Math.max(v+1,b);if(!a&&b>v+1){var S=!1;if(c.size>0)for(var E=o?1:0,I=L-1;I>v;I--)if(c.has(I+E)){var M=this._getFrameMetricsApprox(v),R=this._getFrameMetricsApprox(I),k=R.offset-(M.offset+M.length);p.push(l.createElement(d,{key:"$sticky_lead",style:babelHelpers.defineProperty({},_,k)})),this._pushCells(p,u,c,I,I,h);var w=this._getFrameMetricsApprox(b).offset-(R.offset+R.length);p.push(l.createElement(d,{key:"$sticky_trail",style:babelHelpers.defineProperty({},_,w)})),S=!0;break}if(!S){var T=this._getFrameMetricsApprox(v),H=this._getFrameMetricsApprox(b).offset-(T.offset+T.length);p.push(l.createElement(d,{key:"$lead_spacer",style:babelHelpers.defineProperty({},_,H)}))}}if(this._pushCells(p,u,c,L,x,h),!this._hasWarned.keys&&g&&(console.warn("VirtualizedList: missing keys for items, make sure to specify a key property on each item or provide a custom keyExtractor."),this._hasWarned.keys=!0),!a&&x<m-1){var z=this._getFrameMetricsApprox(x),F=this.props.getItemLayout?m-1:Math.min(m-1,this._highestMeasuredFrameIndex),P=this._getFrameMetricsApprox(F),V=P.offset+P.length-(z.offset+z.length);p.push(l.createElement(d,{key:"$tail_spacer",style:babelHelpers.defineProperty({},_,V)}))}}else if(t){var D=l.isValidElement(t)?t:l.createElement(t,null);p.push(l.createElement(d,{key:"$empty",onLayout:this._onLayoutEmpty,style:h},D))}if(r){var O=l.isValidElement(r)?r:l.createElement(r,null);p.push(l.createElement(d,{key:"$footer",onLayout:this._onLayoutFooter,style:h},O))}var U=babelHelpers.extends({},this.props,{onContentSizeChange:this._onContentSizeChange,onLayout:this._onLayout,onScroll:this._onScroll,onScrollBeginDrag:this._onScrollBeginDrag,onScrollEndDrag:this._onScrollEndDrag,onMomentumScrollEnd:this._onMomentumScrollEnd,scrollEventThrottle:this.props.scrollEventThrottle,stickyHeaderIndices:u});h&&(U.style=[h,this.props.style]);var A=l.cloneElement((this.props.renderScrollComponent||this._defaultRenderScrollComponent)(U),{ref:this._captureScrollRef},p);return this.props.debug?l.createElement(d,{style:{flex:1}},A,this._renderDebugOverlay()):A}},{key:"componentDidUpdate",value:function(){this._scheduleCellsToRenderUpdate()}},{key:"_computeBlankness",value:function(){this._fillRateHelper.computeBlankness(this.props,this.state,this._scrollMetrics)}},{key:"_onCellLayout",value:function(e,t,r){var o=e.nativeEvent.layout,s={offset:this._selectOffset(o),length:this._selectLength(o),index:r,inLayout:!0},n=this._frames[t];n&&s.offset===n.offset&&s.length===n.length&&r===n.index?this._frames[t].inLayout=!0:(this._totalCellLength+=s.length-(n?n.length:0),this._totalCellsMeasured+=n?0:1,this._averageCellLength=this._totalCellLength/this._totalCellsMeasured,this._frames[t]=s,this._highestMeasuredFrameIndex=Math.max(this._highestMeasuredFrameIndex,r),this._scheduleCellsToRenderUpdate()),this._computeBlankness()}},{key:"_renderDebugOverlay",value:function(){for(var e=this._scrollMetrics.visibleLength/this._scrollMetrics.contentLength,t=[],r=this.props.getItemCount(this.props.data),o=0;o<r;o++){var s=this._getFrameMetricsApprox(o);s.inLayout&&t.push(s)}var n=this._getFrameMetricsApprox(this.state.first).offset,i=this._getFrameMetricsApprox(this.state.last),a=i.offset+i.length-n,h=this._scrollMetrics.offset,p=this._scrollMetrics.visibleLength,c={position:'absolute',top:0,right:0};return l.createElement(d,{style:babelHelpers.extends({},c,{bottom:0,width:20,borderColor:'blue',borderWidth:1})},t.map(function(t,r){return l.createElement(d,{key:'f'+r,style:babelHelpers.extends({},c,{left:0,top:t.offset*e,height:t.length*e,backgroundColor:'orange'})})}),l.createElement(d,{style:babelHelpers.extends({},c,{left:0,top:n*e,height:a*e,borderColor:'green',borderWidth:2})}),l.createElement(d,{style:babelHelpers.extends({},c,{left:0,top:h*e,height:p*e,borderColor:'red',borderWidth:2})}))}},{key:"_selectLength",value:function(e){return this.props.horizontal?e.width:e.height}},{key:"_selectOffset",value:function(e){return this.props.horizontal?e.x:e.y}},{key:"_maybeCallOnEndReached",value:function(){var e=this.props,t=e.data,r=e.getItemCount,o=e.onEndReached,s=e.onEndReachedThreshold,n=this._scrollMetrics,i=n.contentLength,l=n.visibleLength,a=i-l-n.offset;o&&this.state.last===r(t)-1&&a<s*l&&(this._hasDataChangedSinceEndReached||this._scrollMetrics.contentLength!==this._sentEndForContentLength)&&(this._hasDataChangedSinceEndReached=!1,this._sentEndForContentLength=this._scrollMetrics.contentLength,o({distanceFromEnd:a}))}},{key:"_scheduleCellsToRenderUpdate",value:function(){var e=this.state,t=e.first,r=e.last,o=this._scrollMetrics,s=o.offset,n=o.visibleLength,i=o.velocity,l=this.props.getItemCount(this.props.data),a=!1;if(t>0||r<l-1){var h=s-this._getFrameMetricsApprox(t).offset,p=this._getFrameMetricsApprox(r).offset-(s+n),c=this.props.onEndReachedThreshold*n/2;a=Math.min(h,p)<0||i<-2&&h<c||i>2&&p<c}if(a&&this._averageCellLength)return this._updateCellsToRenderBatcher.dispose({abort:!0}),void this._updateCellsToRender();this._updateCellsToRenderBatcher.schedule()}},{key:"_updateViewableItems",value:function(e){var t=this,r=this.props.getItemCount;this._viewabilityTuples.forEach(function(o){o.viewabilityHelper.onUpdate(r(e),t._scrollMetrics.offset,t._scrollMetrics.visibleLength,t._getFrameMetrics,t._createViewToken,o.onViewableItemsChanged,t.state)})}}]),t})(l.PureComponent);v.defaultProps={disableVirtualization:!1,horizontal:!1,initialNumToRender:10,keyExtractor:function(e,t){return null!=e.key?e.key:(g=!0,String(t))},maxToRenderPerBatch:10,onEndReachedThreshold:2,scrollEventThrottle:50,updateCellsBatchingPeriod:50,windowSize:21},v.contextTypes={virtualizedList:i.shape({horizontal:i.bool})},v.childContextTypes={virtualizedList:i.shape({horizontal:i.bool})};var y=function(){var e=this;this._onUpdateSeparators=function(t,r){t.forEach(function(t){var o=null!=t&&e._cellRefs[t];o&&o.updateSeparatorProps(r)})},this._averageCellLength=0,this._cellRefs={},this._hasDataChangedSinceEndReached=!0,this._hasWarned={},this._highestMeasuredFrameIndex=0,this._headerLength=0,this._initialScrollIndexTimeout=0,this._frames={},this._footerLength=0,this._scrollMetrics={contentLength:0,dOffset:0,dt:10,offset:0,timestamp:0,velocity:0,visibleLength:0},this._scrollRef=null,this._sentEndForContentLength=0,this._totalCellLength=0,this._totalCellsMeasured=0,this._viewabilityTuples=[],this._captureScrollRef=function(t){e._scrollRef=t},this._defaultRenderScrollComponent=function(t){return e._isNestedWithSameOrientation()?l.createElement(d,t):t.onRefresh?(m('boolean'==typeof t.refreshing,'`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `'+JSON.stringify(t.refreshing)+'`'),l.createElement(p,babelHelpers.extends({},t,{refreshControl:l.createElement(h,{refreshing:t.refreshing,onRefresh:t.onRefresh,progressViewOffset:t.progressViewOffset})}))):l.createElement(p,t)},this._onCellUnmount=function(t){var r=e._frames[t];r&&(e._frames[t]=babelHelpers.extends({},r,{inLayout:!1}))},this._onLayout=function(t){e._scrollMetrics.visibleLength=e._selectLength(t.nativeEvent.layout),e.props.onLayout&&e.props.onLayout(t),e._scheduleCellsToRenderUpdate(),e._maybeCallOnEndReached()},this._onLayoutEmpty=function(t){e.props.onLayout&&e.props.onLayout(t)},this._onLayoutFooter=function(t){e._footerLength=e._selectLength(t.nativeEvent.layout)},this._onLayoutHeader=function(t){e._headerLength=e._selectLength(t.nativeEvent.layout)},this._onContentSizeChange=function(t,r){e.props.onContentSizeChange&&e.props.onContentSizeChange(t,r),e._scrollMetrics.contentLength=e._selectLength({height:r,width:t}),e._scheduleCellsToRenderUpdate(),e._maybeCallOnEndReached()},this._onScroll=function(t){e.props.onScroll&&e.props.onScroll(t);var r=t.timeStamp,o=e._selectLength(t.nativeEvent.layoutMeasurement),s=e._selectLength(t.nativeEvent.contentSize),n=e._selectOffset(t.nativeEvent.contentOffset),i=e._scrollMetrics.timestamp?Math.max(1,r-e._scrollMetrics.timestamp):1;i>500&&e._scrollMetrics.dt>500&&s>5*o&&!e._hasWarned.perf&&(f("VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.",{dt:i,prevDt:e._scrollMetrics.dt,contentLength:s}),e._hasWarned.perf=!0);var l=n-e._scrollMetrics.offset,a=l/i;e._scrollMetrics={contentLength:s,dt:i,dOffset:l,offset:n,timestamp:r,velocity:a,visibleLength:o},e._updateViewableItems(e.props.data),e.props&&(e._maybeCallOnEndReached(),0!==a&&e._fillRateHelper.activate(),e._computeBlankness(),e._scheduleCellsToRenderUpdate())},this._onScrollBeginDrag=function(t){e._viewabilityTuples.forEach(function(e){e.viewabilityHelper.recordInteraction()}),e.props.onScrollBeginDrag&&e.props.onScrollBeginDrag(t)},this._onScrollEndDrag=function(t){var r=t.nativeEvent.velocity;r&&(e._scrollMetrics.velocity=e._selectOffset(r)),e._computeBlankness(),e.props.onScrollEndDrag&&e.props.onScrollEndDrag(t)},this._onMomentumScrollEnd=function(t){e._scrollMetrics.velocity=0,e._computeBlankness(),e.props.onMomentumScrollEnd&&e.props.onMomentumScrollEnd(t)},this._updateCellsToRender=function(){var t=e.props,r=t.data,o=t.getItemCount,s=t.onEndReachedThreshold,n=e._isVirtualizationDisabled();e._updateViewableItems(r),r&&e.setState(function(t){var i=void 0;if(n){var l=e._scrollMetrics,a=l.contentLength,h=l.offset,p=l.visibleLength,c=a-p-h<s*p?e.props.maxToRenderPerBatch:0;i={first:0,last:Math.min(t.last+c,o(r)-1)}}else e._scrollMetrics.visibleLength&&(e.props.initialScrollIndex&&!e._scrollMetrics.offset||(i=_(e.props,t,e._getFrameMetricsApprox,e._scrollMetrics)));return i})},this._createViewToken=function(t,r){var o=e.props,s=o.data,n=o.getItem,i=o.keyExtractor,l=n(s,t);return{index:t,item:l,key:i(l,t),isViewable:r}},this._getFrameMetricsApprox=function(t){var r=e._getFrameMetrics(t);if(r&&r.index===t)return r;var o=e.props.getItemLayout;return m(!o,'Should not have to estimate frames when a measurement metrics function is provided'),{length:e._averageCellLength,offset:e._averageCellLength*t}},this._getFrameMetrics=function(t){var r=e.props,o=r.data,s=r.getItem,n=r.getItemCount,i=r.getItemLayout,l=r.keyExtractor;m(n(o)>t,'Tried to get frame for out of range index '+t);var a=s(o,t),h=a&&e._frames[l(a,t)];return h&&h.index===t||i&&(h=i(o,t)),h}},b=(function(e){function t(){var e,r,o,s;babelHelpers.classCallCheck(this,t);for(var n=arguments.length,i=Array(n),l=0;l<n;l++)i[l]=arguments[l];return r=o=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={separatorProps:{highlighted:!1,leadingItem:o.props.item}},o._separators={highlight:function(){var e=o.props,t=e.cellKey,r=e.prevCellKey;o.props.onUpdateSeparators([t,r],{highlighted:!0})},unhighlight:function(){var e=o.props,t=e.cellKey,r=e.prevCellKey;o.props.onUpdateSeparators([t,r],{highlighted:!1})},updateProps:function(e,t){var r=o.props,s=r.cellKey,n=r.prevCellKey;o.props.onUpdateSeparators(['leading'===e?n:s],t)}},s=r,babelHelpers.possibleConstructorReturn(o,s)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"updateSeparatorProps",value:function(e){this.setState(function(t){return{separatorProps:babelHelpers.extends({},t.separatorProps,e)}})}},{key:"componentWillUnmount",value:function(){this.props.onUnmount(this.props.cellKey)}},{key:"render",value:function(){var e=this.props,t=e.CellRendererComponent,r=e.ItemSeparatorComponent,o=e.fillRateHelper,s=e.horizontal,n=e.item,i=e.index,a=e.inversionStyle,h=e.parentProps,p=h.renderItem,c=h.getItemLayout;m(p,'no renderItem!');var u=p({item:n,index:i,separators:this._separators}),f=!c||h.debug||o.enabled()?this.props.onLayout:void 0,_=r&&l.createElement(r,this.state.separatorProps),g=a?s?[{flexDirection:'row-reverse'},a]:[{flexDirection:'column-reverse'},a]:s?[{flexDirection:'row'},a]:a;return t?l.createElement(t,babelHelpers.extends({},this.props,{style:g,onLayout:f}),u,_):l.createElement(d,{style:g,onLayout:f},u,_)}}]),t})(l.Component),C=c.create({verticallyInverted:{transform:[{scaleY:-1}]},horizontallyInverted:{transform:[{scaleX:-1}]}});r.exports=v},226);