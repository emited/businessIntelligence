google.charts.packageLoadedCallback("map", 'var hZ=".normal",a3a=".selected",b3a="No data points to show on map",c3a="Some of the data rows were truncated",d3a="error: cannot draw map",iZ="icons.",e3a="mapTypeIds",f3a="satellite",g3a="styles",h3a="terrain",i3a="tilesloaded",j3a={RDa:CB,SATELLITE:f3a,TERRAIN:h3a,HYBRID:eA},k3a={mapType:eA,icons:{"default":{normal:"https://maps.google.com/mapfiles/ms/micons/red-dot.png",selected:"https://maps.google.com/mapfiles/ms/micons/blue-dot.png"}},enableScrollWheel:!1,showTip:!1,showLine:!1,lineColor:"#0033ff",\nlineWidth:10,useMapTypeControl:!1,zoomLevel:null};function jZ(a){Ss.call(this,a);this.L=vk(a);this.dd=new Qs(this,this.L,!0);this.Xq=new as;this.O3=this.XK=this.ZK=0;this.m=this.Ec=this.SS=this.bB=this.Aq=this.gf=this.aN=this.WN=this.xS=null;this.ll=!1}O(jZ,Ss);I=jZ.prototype;I.Pj=function(a,b,c){try{aea(M(this.Tpa,this,b,c))}catch(d){this.dd.Qd(d.message||d3a)}};\nI.Tpa=function(a,b){b=Ol(Ll(b||{}));this.m=new sm([b,k3a]);var c=this.L;this.Xq.cancel();this.dd.Dc();if(a){var d=0;Wh&&(d=7>fi?50:6);c.offsetWidth<=d&&(c.style.width=ek(c,this.m,400)+G);c.offsetHeight<=d&&(c.style.height=gk(c,this.m,400)+G);try{var e=a.S();if(0==e)throw Error(ppa);c=[];c.push(a.R(0));if(c[0]==H){if(3<e)throw Error("Only 1-3 columns allowed in address mode.");}else{if(2>e)throw Error("At least 2 columns are required in lat/long mode");c.push(a.R(1));if(c[0]!=C)throw Error("First column must be numbers in lat/long mode.");\nif(c[1]!=C)throw Error("Second column must be numbers in lat/long mode.");if(4<e)throw Error("Only 2-4 columns allowed in lat/long mode.");}}catch(h){this.dd.Qd(Gqa);return}this.$j();this.XK=e=a.aa();400<e&&(this.XK=400,Rs(this.dd,c3a));var e=a.S(),d=a.R(0)==H,f=-1,c=-1;d?(f=1<e?1:0,c=2<e?2:-1):(f=2<e?2:-1,c=3<e?3:-1);if(d){e=f;for(d=0;d<this.XK;d++)this.WN[d]={address:a.getStringValue(d,0)||k},this.aN[d]=-1!=e?a.Ha(d,e):a.Ha(d,0),this.gf[d]=-1!==c?a.getStringValue(d,c)||By:By;null!=this.WN&&this.Xq.create(this.WN,\nM(this.Rsa,this))}else{e=f;for(d=0;d<this.XK;d++){var f=a.getValue(d,0),g=a.getValue(d,1);null!=f&&null!=g&&90>f&&-90<f&&180>g&&-180<g?(this.aN[d]=-1!=e?a.Ha(d,e):f+r+g,this.gf[d]=-1!==c?a.getStringValue(d,c)||By:By,f=new google.maps.LatLng(f,g,!0),this.xS.push({Rq:f,title:this.ll?this.aN[d]:null}),this.SS.push(d),this.bB.push(this.O3++)):this.bB.push(-1)}l3a(this)}}else this.dd.Qd(Dv)};\nfunction m3a(a,b){switch(a){case eA:return google.maps.MapTypeId.HYBRID;case CB:return google.maps.MapTypeId.ROADMAP;case f3a:return google.maps.MapTypeId.SATELLITE;case h3a:return google.maps.MapTypeId.TERRAIN}return b}\nI.$j=function(){var a=this.m;this.Ec=new $s;this.ll=U(a,sD);this.xS=[];this.WN=[];this.aN=[];this.gf=[];this.Aq=[];this.bB=[];this.SS=[];this.O3=this.XK=this.ZK=0;var b={mapTypeControl:U(a,cEa),mapTypeControlOptions:{},navigationControl:!0,scrollwheel:U(a,$va),navigationControlOptions:{style:U(a,bEa)?google.maps.ZoomControlStyle.DEFAULT:google.maps.ZoomControlStyle.SMALL}},c={},d={},e=Zea(a);if(0<e.length){P(e,function(b){d[b]=a.view(Yea(Ad,b))});var f=0;qg(d,function(a,b){var d=Mm(a,zB);null!=d&&\n(f++,c[b]=new google.maps.StyledMapType(hn(a,g3a),{name:d}))});e=a.Y(e3a,null,dn);null!=e?e=Q(e,function(a){return m3a(a,a)},this):0<f&&(e=$f([google.maps.MapTypeId.ROADMAP,google.maps.MapTypeId.TERRAIN,google.maps.MapTypeId.SATELLITE,google.maps.MapTypeId.HYBRID],xg(c)));b.mapTypeControlOptions.mapTypeIds=e}this.gb=new google.maps.Map(this.L,b);qg(c,function(a,b){this.gb.mapTypes.set(b,a)},this);this.V1=new google.maps.InfoWindow;var b=this.gb,e=google.maps.MapTypeId.HYBRID,g=Mm(a,UA);null!=g&&g in\nc?e=g:(g=fn(a,UA,j3a),e=m3a(g,e));b.setMapTypeId(e)};I.Rsa=function(a){for(var b=0;b<a.length;b++)a[b]&&a[b][0]?(this.xS.push({Rq:a[b][0].geometry.location,title:this.ll?this.aN[this.ZK]:null}),this.SS.push(this.ZK),this.bB.push(this.O3++)):this.bB.push(-1),this.ZK+=1;l3a(this)};\nfunction l3a(a){var b=a.xS;if(0==b.length)Rs(a.dd,b3a);else{for(var c=a.gb,d=new google.maps.LatLngBounds,e,f,g=[],h=0;h<b.length;h++)if(e=b[h],f=e.Rq)g.push(f),d.extend(f);f=a.m;h=Dm(f,BEa);null!=h?(c.setZoom(h),c.setCenter(d.getCenter())):c.fitBounds(d);for(h=0;h<b.length;h++)d=a.gf[h],e=b[h],e.Rq&&(a.Aq[h]=a.ll?new google.maps.Marker({map:c,position:e.Rq,title:e.title,icon:Lm(f,iZ+d+hZ)}):new google.maps.Marker({map:c,position:e.Rq,icon:Lm(f,iZ+d+hZ)}),google.maps.event.addListener(a.Aq[h],to,\nM(a.kta,a,a.Aq[h],a.SS[h])));U(f,rD)&&(b=Lm(f,Zya),f=V(f,cza),(new google.maps.Polyline({path:g,strokeColor:b,strokeWeight:f})).setMap(c));google.maps.event.addListener(c,i3a,M(Pr,a,a,rp,null))}}I.kta=function(a,b){var c=et(this.Ec,b)?null:[{row:b}];this.setSelection(c);Pr(this,xp,{});c&&this.ll&&(this.V1.close(),this.V1.setContent(a.getTitle()),this.V1.open(this.gb,a))};\nI.setSelection=function(a){var b=this.Ec.setSelection(a);a=this.bB;for(var c=this.Aq,d=this.gf,e,f,g=this.gb,h=bt(b.sE),l=0;l<h.length;l++)f=h[l],e=c[a[f]],f=d[a[f]],e&&e.setIcon(Lm(this.m,iZ+f+hZ));b=bt(b.aB);for(l=0;l<b.length;l++)f=b[l],e=c[a[f]],f=d[a[f]],e&&e.setIcon(Lm(this.m,iZ+f+a3a));e&&g.panTo(e.getPosition())};I.getSelection=function(){return this.Ec.getSelection()};I.hc=function(){this.Xq.cancel()};K("google.visualization.Map",jZ,void 0);jZ.prototype.draw=jZ.prototype.draw;jZ.prototype.setSelection=jZ.prototype.setSelection;jZ.prototype.getSelection=jZ.prototype.getSelection;;window.google&&window.google.loader&&window.google.loader.eval&&window.google.loader.eval.visualization&&(window.google.loader.eval.visualization=function(){eval(arguments[0])});\n');