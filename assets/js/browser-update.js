"use strict";var $bu_=new function(){var s=this;this.vsakt={e:16,i:14,f:59,o:52,o_a:45.1,s:11.1,c:66,y:"18.2",v:1.14,uc:11.5,samsung:6.4,ios:11.3};this.vsinsecure_below={i:11,e:13,c:62,f:56,y:17.1,s:"10.1.2",ios:"9.3.5",v:"1.12",uc:"11.3",samsung:"5.0",o_a:40,o:45};this.vsdefault={e:-3,i:11,f:-3,o:-3,o_a:-3,s:-1,c:-3,a:535,y:18.1,v:1.12,uc:11.4,samsung:6.1,ios:9};this.names={i:'Internet Explorer',e:"Edge",f:'Firefox',o:'Opera',o_a:'Opera',s:'Safari',c:"Chrome",a:"Android Browser",y:"Yandex Browser",v:"Vivaldi",uc:"UC Browser",samsung:"Samsung Internet",x:"Other",ios:"iOS",silk:"Silk"};this.get_browser=function(ua){var n,ua=(ua||navigator.userAgent).replace("_","."),r={n:"x",v:0,t:"other browser",age_years:undefined,no_os_update:false};function ignore(reason,pattern){if(new RegExp(pattern,"i").test(ua))return reason;return false}
r.other=ignore("bot","bot|spider|archiver|transcoder|crawl|checker|monitoring|screenshot|python-|php|uptime|validator|fetcher|facebook|slurp|google|yahoo|microsoft|node|mail.ru|github|cloudflare|addthis|thumb|proxy|feed|fetch|favicon|link|http|scrape|seo|page|search console|AOLBuild|Teoma|Gecko Expeditor")||ignore("TV","SMART-TV|SmartTV")||ignore("niche browser","Dorado|Whale|MIDP|k-meleon|wii|Chromium|Puffin|Opera Mini|maxthon|maxton|dolfin|dolphin|seamonkey|opera mini|netfront|moblin|maemo|arora|kazehakase|epiphany|konqueror|rekonq|symbian|webos|PaleMoon|QupZilla|Otter|Midori|qutebrowser")||ignore("mobile without upgrade path or landing page","kindle|tizen|silk|blackberry|bb10|RIM|PlayBook|meego|nokia|ucweb|ZuneWP7|537.85.10");r.mobile=(/iphone|ipod|ipad|android|mobile|phone|ios|iemobile/i.test(ua));var pats=[["CriOS.VV","c",'ios'],["FxiOS.VV","f",'ios'],["Trident.*rv:VV","i",'i'],["Trident.VV","io",'i'],["UCBrowser.VV","uc",'c'],["MSIE.VV","i",'i'],["Edge.VV","e",'e'],["Vivaldi.VV","v",'c'],["Android.*OPR.VV","o_a",'c'],["OPR.VV","o",'c'],["YaBrowser.VV","y",'c'],["SamsungBrowser.VV","samsung",'c'],["Silk.VV","silk",'c'],["Chrome.VV","c",'c'],["Firefox.VV","f",'f'],[" OS.VV.*Safari","ios",'ios'],["Version.VV.*Safari","s",'s'],["Safari.VV","so",'s'],["Opera.*Version.VV","o"],["Opera.VV","o"]];var VV="(\\d+\\.?\\d+\\.?\\d*\\.?\\d*)";for(var i=0;i<pats.length;i++){if(ua.match(new RegExp(pats[i][0].replace("VV",VV),"i"))){r.n=pats[i][1];r.engine=pats[i][2];break;}}
r.fullv=RegExp.$1;r.v=parseFloat(r.fullv);if(/windows.nt.5.0|windows.nt.4.0|windows.95|windows.98|os x 10.2|os x 10.3|os x 10.4|os x 10.5|os x 10.6|os x 10.7/i.test(ua))
r.no_os_update=true;if(/iphone|ipod|ipad|ios/i.test(ua)){ua.match(new RegExp("OS."+VV,"i"));r.n="ios";r.fullv=RegExp.$1;r.v=parseFloat(r.fullv);r.engine='ios';var h=Math.max(window.screen.height,window.screen.width);if(!r.v>11.0&&(h<=480||window.devicePixelRatio<2)||r.v<8)
r.no_os_update=true;}
if(ua.indexOf('Android')>-1&&r.n==="s"){var v=parseInt((/WebKit\/([0-9]+)/i.exec(ua)||0)[1],10)||2000;if(v<=534){r.n="a";r.fullv=r.v=v;}}
if(r.n==="so"){r.v=r.fullv=4.0;r.n="s";}
if(r.n==="io"){r.n="i";if(r.v>6)r.v=11;else if(r.v>5)r.v=10;else if(r.v>4)r.v=9;else if(r.v>3.1)r.v=8;else if(r.v>3)r.v=7;else r.v=9;r.fullv=r.v;}
r.t=s.names[r.n]+" "+r.v;r.is_supported=r.is_latest=!s.vsakt[r.n]?undefined:s.less(r.fullv,s.vsakt[r.n])<=0;r.vmaj=Math.round(r.v);r.is_insecure=!s.vsinsecure_below[r.n]?undefined:s.less(r.fullv,s.vsinsecure_below[r.n])===1;if((r.n==="f"&&(r.vmaj===52||r.vmaj===60))||(r.n==="i"&&r.vmaj===11)){r.is_supported=true;r.is_insecure=false;if(r.n==="f")
r.lts=true;}
if((r.n==="c"||r.n==="f"||r.n==="o")&&s.less(r.fullv,parseFloat(s.vsakt[r.n])-1)<=0)
r.is_supported=true;if(r.n==="ios"&&r.v>10.3)
r.is_supported=true;if(r.n==="a"||r.n==="x")
r.t=s.names[r.n];if(r.n==="e")
r.t=s.names[r.n]+" "+r.vmaj;var releases_per_year={'f':7,'c':8,'o':8,'i':1,'e':1,'s':1}
if(releases_per_year[r.n]){r.age_years=Math.round(((s.vsakt[r.n]-r.v)/releases_per_year[r.n])*10)/10||0}
var engines={e:"Edge.VV",c:"Chrome.VV",f:"Firefox.VV",s:"Version.VV",i:"MSIE.VV","ios":" OS.VV"}
if(r.engine){ua.match(new RegExp(engines[r.engine].replace("VV",VV),"i"))
r.engine_version=parseFloat(RegExp.$1)}
return r;}
this.semver=function(vstr){if(vstr instanceof Array)
return vstr
var x=(vstr+(".0.0.0")).split('.')
return[parseInt(x[0])||0,parseInt(x[1])||0,parseInt(x[2])||0,parseInt(x[3])||0]}
this.less=function(v1,v2){v1=s.semver(v1)
v2=s.semver(v2)
for(var i=0;;i++){if(i>=v1.length)return i>=v2.length?0:1;if(i>=v2.length)return-1;var diff=v2[i]-v1[i]
if(diff)return diff>0?1:-1;}}}
window.$bu_getBrowser=$bu_.get_browser;var $buo=function(op,test){var n=window.navigator,b;op=window._buorgres=op||{};var ll=op.l||(n.languages?n.languages[0]:null)||n.language||n.browserLanguage||n.userLanguage||document.documentElement.getAttribute("lang")||"en";op.llfull=ll.replace("_","-").toLowerCase().substr(0,5);op.ll=op.llfull.substr(0,2);op.domain=op.domain!==undefined?op.domain:(/file:/.test(location.href)?"https:":"")+"//"+document.location.hostname+"";op.apiver=op.api||op.c||-1;op.jsv="3.0.6";var required_min={i:10,f:11,o:21,s:8,c:30}
var vs=op.notify||op.vs||{};vs.e=vs.e||vs.i;var required=op.required||{};required.e=required.e||required.i;for(b in $bu_.vsdefault){if(vs[b]){if($bu_.less(vs[b],0)>=0)
required[b]=parseFloat($bu_.vsakt[b])+parseFloat(vs[b])+0.01
else
required[b]=parseFloat(vs[b])+0.01}
if(!required[b])
required[b]=$bu_.vsdefault[b]
if($bu_.less(required[b],0)>=0)
required[b]=$bu_.vsakt[b]+required[b]
if(required_min[b]&&$bu_.less(required[b],required_min[b])===1)
required[b]=required_min[b]}
required.i=required.i||required.e;required.ios=required.ios||required.s;op.required=required;if(op.reminder<0.1||op.reminder===0)
op.reminder=0;else
op.reminder=op.reminder||24;op.reminderClosed=op.reminderClosed||(24*7);op.onshow=op.onshow||function(o){};op.onclick=op.onclick||function(o){};op.onclose=op.onclose||function(o){};op.pageurl=op.pageurl||location.hostname||"x";op.newwindow=(op.newwindow!==false);op.test=test||op.test||(location.hash==="#test-bu")||false;
op.test=test||op.test||location.hash==="#test-bu";op.reasons=[];function check_show(op){var bb=$bu_.get_browser(op.override_ua);op.is_below_required=required[bb.n]&&$bu_.less(bb.fullv,required[bb.n])===1;if(bb.other!==false||bb.lts)
return false
if(bb.mobile&&op.mobile===false)
return false
if(bb.no_os_update)
return false
if(op.is_below_required)
op.reasons.push("below required")
if((op.insecure||op.unsecure)&&bb.is_insecure)
op.reasons.push("insecure")
if(op.unsupported&&!bb.is_supported)
op.reasons.push("no vendor support")
if(op.reasons.length>0)
return true
return false}
op.notified=check_show(op);op.already_shown=document.cookie.indexOf("browserupdateorg=pause")>-1&&op.reminder>0;if(!op.test&&(!op.notified||op.already_shown))
return;op.setCookie=function(hours){document.cookie='browserupdateorg=pause; expires='+(new Date(new Date().getTime()+3600000*hours)).toGMTString()+'; path=/';};if(op.reminder>0)
op.setCookie(op.reminder);if(op.nomessage){op.onshow(op);return;}

var e=document.createElement("script");e.src="/assets/js/browser-update-show.js";document.body.appendChild(e);
};

$buo({
    notify: {e:-6,f:-4,o:-4,s:-2,c:-4},
    insecure: true,
    api: 5,
    no_permanent_hide: true,
    text:
        "This browser might be a bit old for my site. " +
        "Sorry if things look broken. " +
        "<br>" +
        "(You’re on {brow_name}. <a{ignore_but}>Ignore this</a>)"});

