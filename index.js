<script>
$document.ready(function(){
        $('#searchb').on('click', Ask())
    
    //alert('n');
});

function Ask(a){
    a.preventDefault();
if ($('#searchf').val()==''){
        alert('Enter a word.');
    }
    
    else
    
    var httpRequest = new XMLHttpRequest();
	var url='request.php='+$('#searchf').val();
	httpRequest.onreadystatechange=Response();
	httpRequest.open('GET',url);
	httpRequest.send();
};


	function Response(){
		if (this.readyState === XMLHttpRequest.DONE) {
	 		if (this .status === 200) {
	 			var response = this .responseText;
	 			$('#searchf').val('');
	 			$('#result').html(response);
		 	} 
		 	else {
		 		alert('The request had an error.');	 
		 	}
		}
	
	function AskAll(a){
		a.preventDefault();
		$.ajax('request.php?q=&all=true',{
			method:'GET',
			dataType: 'xml'
		}).done(function(response){
			var dict =$(response).find('word');
			$('#result').append("<ol></ol>");
			$(dict).each(function(){
				$('#result ol').append('<li>'+ '<strong>'+$(this).find('sr').text()+'</strong>' +'<br>'+$(this).find('defn').text()+'</li>');
			});
		}).fail(function(){
			alert('The request had an error.');
		});
	}
	}
	
	
</script>