(function(){var
reMailto=/^mailto:my_name_is_(\S+)_and_the_domain_is_(\S+)$/,reRemoveTitleIf=/^my name is/,oo=window.onload,fixHrefs=function(){var i=0,l,m;while(l=document.links[i++]){if(m=l.href.match(reMailto)){l.href='mailto:'+m[1]+'@'+m[2];if(reRemoveTitleIf.test(l.title)){l.title='';}}}};window.onload=function(){oo&&oo();fixHrefs();};})();;var MrClay=window.MrClay||{};MrClay.QueryString=function(){var parse=function(str){var assignments=str.split('&'),obj={},propValue;for(var i=0,l=assignments.length;i<l;++i){propValue=assignments[i].split('=');if(propValue.length>2||-1!=propValue[0].indexOf('+')||propValue[0]==''){continue;}
if(propValue.length==1){propValue[1]=propValue[0];}
obj[unescape(propValue[0])]=unescape(propValue[1].replace(/\+/g,' '));}
return obj;};function construct_(spec){spec=spec||window;if(typeof spec=='object'){this.window=spec;spec=spec.location.search.substr(1);}else{this.window=window;}
this.vars=parse(spec);}
construct_.reload=function(vars,window_){window_=window_||window;vars=vars||(new MrClay.QueryString(window_)).vars;var l=window_.location,currUrl=l.href,s=MrClay.QueryString.toString(vars),newUrl=l.protocol+'//'+l.hostname+l.pathname
+(s?'?'+s:'')+l.hash;if(currUrl==newUrl){l.reload();}else{l.assign(newUrl);}};construct_.get=function(key,default_,window_){window_=window_||window;return(new MrClay.QueryString(window_)).get(key,default_);};construct_.set=function(key,value,window_){window_=window_||window;(new MrClay.QueryString(window_)).set(key,value).reload();};construct_.toString=function(vars){var pieces=[];for(var prop in vars){pieces.push(escape(prop)+'='+escape(vars[prop]));}
return pieces.join('&');};construct_.prototype.reload=function(){MrClay.QueryString.reload(this.vars,this.window);return this;};construct_.prototype.get=function(key,default_){if(typeof default_=='undefined'){default_=null;}
return(this.vars[key]==null)?default_:this.vars[key];};construct_.prototype.set=function(key,value){var obj={};if(typeof key=='string'){obj[key]=value;}else{obj=key;}
for(var prop in obj){if(obj[prop]==null){delete this.vars[prop];}else{this.vars[prop]=obj[prop];}}
return this;};construct_.prototype.toString=function(){return QueryString.toString(this.vars);};return construct_;}();
