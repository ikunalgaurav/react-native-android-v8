__d(function(e,r,t,n){'use strict';function a(e){switch(e){case.75:return'ldpi';case 1:return'mdpi';case 1.5:return'hdpi';case 2:return'xhdpi';case 3:return'xxhdpi';case 4:return'xxxhdpi'}throw new Error('no such scale')}function s(e){var r=e.httpServerLocation;return'/'===r[0]&&(r=r.substr(1)),r}t.exports={getAndroidAssetSuffix:a,getAndroidDrawableFolderName:function(e,r){var t=a(r);if(!t)throw new Error('Don\'t know which android drawable suffix to use for asset: '+JSON.stringify(e));return'drawable-'+t},getAndroidResourceIdentifier:function(e){return(s(e)+'/'+e.name).toLowerCase().replace(/\//g,'_').replace(/([^a-z0-9_])/g,'').replace(/^assets_/,'')},getBasePath:s}},145);