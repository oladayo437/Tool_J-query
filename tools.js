$(init);

function init() {

	$('.tool').draggable({
		helper: 'clone'
	});

	$(".canvas").droppable({
		drop: (event, ui) =>{
			var node ={
				position: ui.position,
				html: ui.draggable[0].innerHTML

			};
			if(ui.helper.hasClass('tool')){
			render(node);}
		}
	})
}

function render(node){
	var html = "<h3>"+node.html + '</h3>'
	var dom = $(html).css({
		position: 'absolute',
		top: node.position.top,
		left: node.position.left -= $(".canvas").position().left
	})
	$(".canvas").append(dom.draggable());
}