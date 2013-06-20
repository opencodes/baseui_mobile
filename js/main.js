$(document).ready( function() {
	var home_page = "";
	//Load Today Expense
	$.getJSON('./js/data.js',{cache: false},function(data){
		home_page = new EJS({url: './views/gmail.ejs'}).render(data);
		$('#news-container').html(home_page);
	});
});