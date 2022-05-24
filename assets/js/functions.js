
$(window).scroll(function() {
    if ( $(window).width() < 500 ){return}



    if (checkVisible($('#Q1'))) {
      var elem = document.getElementById("Q1");
      $(elem).animate({opacity:"1"},2000,"swing");} 

    if (checkVisible($('#Q2'))) {
      var elem = document.getElementById("Q2");
      $(elem).animate({opacity:"1"},2000,"swing");}   


    if (checkVisible($('#Q3'))) {
      var elem = document.getElementById("Q3");
      $(elem).animate({opacity:"1"},2000,"swing");} 


    if (checkVisible($('#Q4'))) {
      var elem = document.getElementById("Q4");
      $(elem).animate({opacity:"1"},2000,"swing");} 




  
    if (checkVisible($('#team-title'))) {
      var elem = document.getElementById("team-title");
      var elem2 = document.getElementsByClassName("team-img")
      var elem3 = document.getElementsByClassName("info")
      $(elem).animate({opacity:"1"},3000,"swing");
      $(elem2).animate({width:"95%",opacity:"1"},1000,"swing", function(){
        $(elem3).animate({opacity:"1"},1500,"swing");
      });
  
    } 


    if (checkVisible2($('#row1'))) {
      var elem = document.getElementById("row1");
      var elem2 = document.getElementById("row1").getElementsByClassName("PI-L");
      var elem3 = document.getElementById("row1").getElementsByClassName("PI-C");
      var elem4 = document.getElementById("row1").getElementsByClassName("PI-R");

      $(elem).animate({opacity:"1"},1000,"swing");
      $(elem2).animate({padding:"1.5vw 0.75vw 0.75vw 3vw"},500,"swing");
      $(elem3).animate({padding:"1.5vw 0.75vw 0.75vw 0.75vw"},500,"swing");
      $(elem4).animate({padding:"1.5vw 3vw 0.75vw 0.75vw"},500,"swing");
    } 

 

    if (checkVisible2($('#row2'))) {
      var elem = document.getElementById("row2");
      var elem2 = document.getElementById("row2").getElementsByClassName("PI-L");
      var elem3 = document.getElementById("row2").getElementsByClassName("PI-C");
      var elem4 = document.getElementById("row2").getElementsByClassName("PI-R");

      $(elem).animate({opacity:"1"},1000,"swing");
      $(elem2).animate({padding:"0.75vw 0.75vw 0.75vw 3vw"},500,"swing");
      $(elem3).animate({padding:"0.75vw 0.75vw 0.75vw 0.75vw"},500,"swing");
      $(elem4).animate({padding:"0.75vw 3vw 0.75vw 0.75vw"},500,"swing");
    } 
  


    if (checkVisible2($('#row3'))) {
      var elem = document.getElementById("row3");
      var elem2 = document.getElementById("row3").getElementsByClassName("PI-L");
      var elem3 = document.getElementById("row3").getElementsByClassName("PI-C");
      var elem4 = document.getElementById("row3").getElementsByClassName("PI-R");

      $(elem).animate({opacity:"1"},1000,"swing");
      $(elem2).animate({padding:"0.75vw 0.75vw 0.75vw 3vw"},500,"swing");
      $(elem3).animate({padding:"0.75vw 0.75vw 0.75vw 0.75vw"},500,"swing");
      $(elem4).animate({padding:"0.75vw 3vw 0.75vw 0.75vw"},500,"swing");
    } 

    if (checkVisible2($('#row4'))) {
      var elem = document.getElementById("row4");
      var elem2 = document.getElementById("row4").getElementsByClassName("PI-L");
      var elem3 = document.getElementById("row4").getElementsByClassName("PI-C");
      var elem4 = document.getElementById("row4").getElementsByClassName("PI-R");

      $(elem).animate({opacity:"1"},1000,"swing");
      $(elem2).animate({padding:"0.75vw 0.75vw 0.75vw 3vw"},500,"swing");
      $(elem3).animate({padding:"0.75vw 0.75vw 0.75vw 0.75vw"},500,"swing");
      $(elem4).animate({padding:"0.75vw 3vw 0.75vw 0.75vw"},500,"swing");
    } 

    if (checkVisible2($('#row5'))) {
      var elem = document.getElementById("row5");
      var elem2 = document.getElementById("row5").getElementsByClassName("PI-L");
      var elem3 = document.getElementById("row5").getElementsByClassName("PI-C");
      var elem4 = document.getElementById("row5").getElementsByClassName("PI-R");

      $(elem).animate({opacity:"1"},1000,"swing");
      $(elem2).animate({padding:"0.75vw 0.75vw 0.75vw 3vw"},500,"swing");
      $(elem3).animate({padding:"0.75vw 0.75vw 0.75vw 0.75vw"},500,"swing");
      $(elem4).animate({padding:"0.75vw 3vw 0.75vw 0.75vw"},500,"swing");
    } 


  
  
  
  });
  
  
  
  function checkVisible( elm, eval ) {
    eval = eval || "visible";
    var vpH = $(window).height(),
        st = $(window).scrollTop(),
        y = $(elm).offset().top + (($(elm).height()*85)/100),
        elementHeight = $(elm).height();
    
    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
  }



  function checkVisible2( elm, eval ) {
    eval = eval || "visible";
    var vpH = $(window).height(),
        st = $(window).scrollTop(),
        y = $(elm).offset().top + (($(elm).height()*60)/100),
        elementHeight = $(elm).height();
    
    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
  }
  
  
  