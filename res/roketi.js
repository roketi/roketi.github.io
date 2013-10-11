// scrollTo gimmick for the navigation entries
$('ul.nav a, footer a').click(function(e){
	$('html,body').scrollTo(this.hash, this.hash, {gap: {y: -85}});
	e.preventDefault();
});