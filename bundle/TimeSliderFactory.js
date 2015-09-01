define("dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/date/locale esri/dijit/TimeSlider ct/mapping/geometry ct/mapping/mapcontent/ServiceTypes".split(" "),function(k,e,l,m,n,p,q){return e([],{activate:function(){var d=this._properties,c=k.mixin({},d.timeSliderOpts||{});try{var a=this._timeSlider=new n(c),b=d.sliderLayout;this._esriMap.setTimeSlider(a);a.setThumbCount(c.thumbCount||1);if(b){var g=b.timeExtent?p.createTimeExtent(b.timeExtent):null;b.timeStops?a.setTimeStops(b.timeStops):
a.createTimeStopsByTimeInterval(g,b.stops,b.unit,b.opts||{});var h=d.service,f=this._mapModel.getNodeById(h.id+"/"+h.layer);if(!f)throw Error("TileSliderFactory: Service/Layer not found!");f.get("type")===q.AGS_FEATURE&&this._esriMapReference.getEsriLayer(f).setTimeDefinition(g)}a.setThumbIndexes(c.thumbIndexes||[0,1]);a.setThumbMovingRate(c.thumbMovingRate||1E3);a.setLoop(c.loop||!1);var e={selector:b.selector||"date time",datePattern:b.datePattern||"yyyy-MM-dd",timePattern:b.timePattern||"HH:mm:ss"},
r=l.map(a.timeStops,function(a){return m.format(a,e)},this);a.setLabels(r)}catch(s){throw Error("TileSliderFactory: Cannot create time slider!",s);}},createInstance:function(){return this._timeSlider},deactivate:function(){var d=this._timeSlider,c=this._esriMap;c.setTimeSlider(null);c.setTimeExtent(null);if(d){try{d.destroyRecursive()}catch(a){console.error("TimeSliderFactory: Error destroying timeslider",a)}this._timeSlider=null}}})});