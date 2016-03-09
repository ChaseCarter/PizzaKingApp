$(document).ready(function() {
    $('select').material_select();
	setData();
	
});

var overallPizzas=["No Data"];
var harryPizzas=["No Data"];
var cicilianPizzas=["No Data"];

function setData(){
	for(var i=0;i<overallPizzas.length;i++){
		$('#overallPopular.collection').append('<li class="collection-item">'+overallPizzas[i]+'</li>');
	}
	for(var i=0;i<harryPizzas.length;i++){
		$('#harryPopular.collection').append('<li class="collection-item">'+harryPizzas[i]+'</li>');
	}
	for(var i=0;i<cicilianPizzas.length;i++){
		$('#cicilianPopular.collection').append('<li class="collection-item">'+cicilianPizzas[i]+'</li>');
	}
}