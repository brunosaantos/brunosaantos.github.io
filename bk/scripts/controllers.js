function frasesCtrl ($scope){
	$scope.frases = [
		"pergunta1",
		"pergunta2",
		"pergunta3",
		"pergunta4",
		"pergunta5",
		"pergunta6",
		"pergunta7",
	];

	$scope.random = Math.floor(Math.random() * ($scope.frases.length - 0) + 0); 
}

$(document).ready(function(){
	var h = Math.floor(($(window).height())*0.3);
	$("h1").css("margin", h+"px 0 0 0");
});
