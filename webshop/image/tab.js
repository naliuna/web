
function SetTab(objId,objContentId,hoverCss,type)
{
	var event="click";
	if(type==1)
	{
		event="mouseover";
	}
	$("#"+objId).children().each(function(i){ 
		$(this).bind(event,function(){ 
			$("#"+objId+" ."+hoverCss).removeClass(hoverCss); 
			 $(this).addClass(hoverCss);
			 $("#"+objContentId).children().css("display","none");
			 $("#"+objContentId).children().eq(i).css("display","");
			});
		});
}



