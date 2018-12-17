$("#tet").click(function(){
  var html = '';
  $.ajax({
	  url: '../index.xml',
      dataType: 'xml',
	  success: function (data) {
		var count = 0;
		html = '<table class="table table-bordered"><thead><tr><th scope="col" class="mb-2">#</th><th scope="col" class="mb-2">标题</th><th scope="col" class="mb-5">链接</th></tr></thead><tbody>';
		var keyword = $('#keyword').val().toLowerCase();
		if (keyword == ""){
			html = '<h2>No Input!</h2>'
		}else{
		   $(data).find('item').each(function () {
           var $this = $(this);
		   var judge = $this.find('title').text().toLowerCase();
           var key = $this.find('title').text();
		   if(judge.indexOf(keyword)!=-1){
             $this.find('title').each(function () {
				html += '<tr><th scope="row">' + count + '</th><td>' + key + '</td><td><a href="' + $this.find('link').text() + '">' + $this.find('link').text() + '</a></td></tr>';
			   });	
			  count = count + 1;
		     }		   
			});
			html += '</tbody></table>';
			if(count == 0){
				html = '<h2>Not Found!</h2>'
			}        
	    }
		$('#search').html('查询结果');	
	    $('#result').html(html);
		},      
		error: function () {
		$('#search').html('查询结果');	
        $('#result').html('连接失败');
     }

  });
});
