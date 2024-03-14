$(document).ready(function(){
    $('#hide').click(function(){
       $('p').hide(2000); 
    })
    $('#show').click(function(){
       $('p').show(2000); 
    })
    $('#toggle').click(function(){
       $('p').toggle(); 
    })
    $('#fadeOut').click(function(){
       $('p').fadeOut(); 
    })
    $('#fadeIn').click(function(){
       $('p').fadeIn(); 
    });
    $('#fadeToggle').click(function(){
       $('p').fadeToggle(); 
    })
   
            });
      