
$('.fa-cog').ready(function() {
    $('#slide').hide();
    $('.fa-cog').on('click', function() {
      $('#slide').slideToggle();
      $('.fa-cog').toggleClass('fa-spin fa-window-close')
  
    });
    
    
  })
  
  // $('.fa-cog').click(function(){
    
  //   $('.fa-cog').toggleClass('fa-spin');

  //           $('#slide').slideToggle();
  //         })