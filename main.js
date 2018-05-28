function gatherResults(result)
{
  $(".search").remove();
  for(let i in result){
   $('body').append("<div class=" +"search" + " id="+ JSON.stringify(result[i].title) +"'"+">"+"<b>"+result[i].title+"</b>"+"<br>" +"<br>"+result[i].snippet+"... "+"</div>");
  }
}



function results(search)
{
  $.ajax({
  url: '//en.wikipedia.org/w/api.php',
  data: { action: 'query', list: 'search', srsearch: search, format: 'json' },
  dataType: 'jsonp',
  success:
    function (x) {
     gatherResults(x.query.search);
  }
});
}

$(document).ready(function(){
  $('input').keypress(function(e){
      if(e.which===13){
        $('input').css("top", "10%");
        results($('input').val())
      }
  });
  $('#random').on('click', function()
  {
      $(this).css('background-color', 'grey');
      window.open('https://en.wikipedia.org/wiki/Special:Random');
      $(this).css('background-color', '#f6f6f6');
  });
});
$(document).on('click', '.search', function(){
   window.open('https://wikipedia.com/wiki/'+$(this).attr('id'));
});
