google.maps.__gjsload__('overlay', function(_){var Du=_.oa("b"),Eu=_.l(),Fu=function(){var a=this.lg;if(this.getPanes()){if(this.getProjection()){if(!a.b&&this.onAdd)this.onAdd();a.b=!0;this.draw()}}else{if(a.b)if(this.onRemove)this.onRemove();else this.remove();a.b=!1}},Gu=function(a){a.lg=a.lg||new Eu;return a.lg},Hu=function(a){_.Cf.call(this);this.pa=(0,_.y)(Fu,a)},Ku=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;c.ug()}if(b&&b instanceof _.Gd){var d=b.__gm;d.overlayLayer?a.__gmop=new Iu(b,a,d.overlayLayer):
d.b.then(function(c){c=c.wa;var e=new Ju(b,c);c.qb(e);d.overlayLayer=e;Ku(a)})}}},Iu=function(a,b,c){this.map=a;this.ma=b;this.Mm=c;this.Uf=!1;_.X(this.map,"Ox");_.Am("Ox","-p",this.ma);c.f.push(this);c.b&&Lu(this,c.b);c.j.Ac()},Lu=function(a,b){a.ma.get("projection")!=b&&(a.ma.bindTo("panes",a.map.__gm),a.ma.set("projection",b))},Mu=function(a,b){this.f=a;this.l=b;this.j=new _.bc(0,0);this.m=new _.bc(0,0);this.b=_.fc(0,0,0)},Nu=function(a){var b=a.l.dd();return a.l.Cb({clientX:b.left,clientY:b.top})},
Ou=function(a,b,c){if(!c||!b)return null;b=_.Yl(b,a.f.getProjection());b=_.Ai(a.l.f,b,a.m);a=_.Bi(_.Ci(a.b,_.wi(b,c)));return new _.H(a.V,a.X)},Pu=function(a,b,c,d){return c&&a.b?_.Zl(_.vi(c,_.gc(a.b,{V:b.x,X:b.y})),a.f.getProjection(),d):null},Ju=function(a,b){this.l=a;this.j=b;this.b=null;this.f=[]};_.A(Du,_.M);
Du.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.F(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.b:null))};_.A(Hu,_.Cf);Iu.prototype.draw=function(){this.Uf||(this.Uf=!0,this.ma.onAdd&&this.ma.onAdd());this.ma.draw&&this.ma.draw()};Iu.prototype.ug=function(){_.Bm("Ox","-p",this.ma);this.ma.unbindAll();this.ma.set("panes",null);this.ma.set("projection",null);_.Ya(this.Mm.f,this);this.ma.onRemove?this.ma.onRemove():this.ma.remove();this.Uf=!1};_.m=Mu.prototype;_.m.fromLatLngToContainerPixel=function(a){var b=Nu(this);return Ou(this,a,b)};_.m.fromLatLngToDivPixel=function(a){return Ou(this,a,this.j)};
_.m.fromDivPixelToLatLng=function(a,b){return Pu(this,a,this.j,b)};_.m.fromContainerPixelToLatLng=function(a){var b=Nu(this);return Pu(this,a,b)};_.m.getWorldWidth=function(){return this.b?_.Ci(this.b,new _.bc(256,256)).V:256*Math.pow(2,this.f.getZoom()||0)};Ju.prototype.la=_.l();Ju.prototype.Qb=function(a,b,c,d){a=this.b=this.b||new Mu(this.l,this.j);a.b=c;a.j=b;a.m=d;b=_.Aa(this.f);for(c=b.next();!c.done;c=b.next())c=c.value,Lu(c,a),c.draw()};_.ae("overlay",{qk:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.Gd||a.__gmop)Ku(a);else{b=a.getMap();var c=Gu(a),d=c.gm;c.gm=b;d&&(c=Gu(a),(d=c.ba)&&d.unbindAll(),(d=c.ki)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.D(c.O,_.L.removeListener),c.O=null,c.Wb&&(c.Wb.pa(),c.Wb=null),_.Bm("Ox","-p",a));if(b){c=Gu(a);d=c.Wb;d||(d=c.Wb=new Hu(a));_.D(c.O||[],_.L.removeListener);var e=c.ba=c.ba||new _.Dk,f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",
f,"projectionCenterQ");e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);e=c.ki=c.ki||new Du(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=(0,_.y)(d.S,d);c.O=[_.L.addListener(a,"panes_changed",e),_.L.addListener(f,"zoom_changed",e),_.L.addListener(f,"offset_changed",e),_.L.addListener(b,"projection_changed",e),_.L.addListener(f,"projectioncenterq_changed",e),_.L.forward(b,"forceredraw",
d)];d.S();b instanceof _.Gd&&(_.X(b,"Ox"),_.Am("Ox","-p",a))}}}},Um:function(a){_.qn(a,{jb:function(a){return _.Im(a.event)},Ja:function(a){return _.Fm(a)},fc:function(a){return _.Gm(a)},Ua:function(a){return _.Gm(a)},Ka:function(a){return _.Hm(a)}}).Fc(!0)},Tm:function(a){a.addEventListener("click",_.zc);a.addEventListener("contextmenu",_.zc);a.addEventListener("dblclick",_.zc);a.addEventListener("mousedown",_.zc);a.addEventListener("mousemove",_.zc);a.addEventListener("MSPointerDown",_.zc);a.addEventListener("pointerdown",
_.zc);a.addEventListener("touchstart",_.zc);a.addEventListener("wheel",_.zc)}});});