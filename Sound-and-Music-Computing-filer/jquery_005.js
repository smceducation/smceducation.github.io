(function(a){a.fn.marquee=function(b){var e=[],d=this.length;function c(m,k,l){var j=l.behavior,h=l.width,g=l.dir;var i=0;if(j=="alternate"){i=m==1?k[l.widthAxis]-(h*2):h}else{if(j=="slide"){if(m==-1){i=g==-1?k[l.widthAxis]:h}else{i=g==-1?k[l.widthAxis]-(h*2):0}}else{i=m==-1?k[l.widthAxis]:0}}return i}function f(){var h=e.length,j=null,m=null,l={},k=[],g=false;while(h--){j=e[h];m=a(j);l=m.data("marqueeState");if(m.data("paused")!==true){j[l.axis]+=(l.scrollamount*l.dir);g=l.dir==-1?j[l.axis]<=c(l.dir*-1,j,l):j[l.axis]>=c(l.dir*-1,j,l);if((l.behavior=="scroll"&&l.last==j[l.axis])||(l.behavior=="alternate"&&g&&l.last!=-1)||(l.behavior=="slide"&&g&&l.last!=-1)){if(l.behavior=="alternate"){l.dir*=-1}l.last=-1;m.trigger("stop");l.loops--;if(l.loops===0){if(l.behavior!="slide"){j[l.axis]=c(l.dir,j,l)}else{j[l.axis]=c(l.dir*-1,j,l)}m.trigger("end")}else{k.push(j);m.trigger("start");j[l.axis]=c(l.dir,j,l)}}else{k.push(j)}l.last=j[l.axis];m.data("marqueeState",l)}else{k.push(j)}}e=k;if(e.length){setTimeout(f,25)}}this.each(function(j){var n=a(this),g=n.attr("width")||n.width(),o=n.attr("height")||n.height(),p=n.after("<div "+(b?'class="'+b+'" ':"")+'style="display: block-inline; width: '+g+"px; height: "+o+'px; overflow: hidden;"><div style="float: left; white-space: nowrap;">'+n.html()+"</div></div>").next(),m=p.get(0),k=0,l=(n.attr("direction")||"left").toLowerCase(),h={dir:/down|right/.test(l)?-1:1,axis:/left|right/.test(l)?"scrollLeft":"scrollTop",widthAxis:/left|right/.test(l)?"scrollWidth":"scrollHeight",last:-1,loops:n.attr("loop")||-1,scrollamount:2,behavior:(n.attr("behavior")||"scroll").toLowerCase(),width:/left|right/.test(l)?g:o};if(n.attr("loop")==-1&&h.behavior=="slide"){h.loops=1}n.remove();if(/left|right/.test(l)){p.find("> div").css("padding","0 "+g+"px")}else{p.find("> div").css("padding",o+"px 0")}p.bind("stop",function(){p.data("paused",true)}).bind("pause",function(){p.data("paused",true)}).bind("start",function(){p.data("paused",false)}).bind("unpause",function(){p.data("paused",false)}).data("marqueeState",h);e.push(m);m[h.axis]=c(h.dir,m,h);p.trigger("start");if(j+1==d){f()}});return a(e)}}(jQuery));