$(":button").click(function() {
	var isbn = this.id;
     $.ajax({
         type: 'PUT',
         contentType: 'application/json',
         url: 'v1/books/'+isbn+'?status=lost',
         dataType: "json",
         success: function(){
             alert('Updated successfully');
             $('#bookStatus'+isbn).html('lost');
             $('#'+isbn).attr("disabled", true);
         }
     });
});
