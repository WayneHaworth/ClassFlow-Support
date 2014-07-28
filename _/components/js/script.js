

$(document).ready(function() {

  //TODO setup content loading for mobile menu/search
  //Mobile search is not passing string through properly

  function sendQuery() {

    var search_query = $('#search-input').val();
    var string_arr = search_query.split(' ');
    var query = "";

    $.each(string_arr, function(key, value) {
      query = query + (value + "+");
    });

    var complete_query = query.slice(0,-1);

    var link_to_form = "https://support.classflow.com/classflow/topics/search?utf8=✓&search%5Bkeywords%5D=" + complete_query;

    window.location.href = link_to_form;
  }

  //So we have 2 different search inputs - one for mobile (dropdown via handburger menu) and the desktop one
  //TODO: refactor into one function
  function sendQuery_med() {

    var search_query = $('#med-search-input').val();
    var string_arr = search_query.split(' ');
    var query = "";

    $.each(string_arr, function(key, value) {
      query = query + (value + "+");
    });

    var complete_query = query.slice(0,-1);

    var link_to_form = "https://support.classflow.com/classflow/topics/search?utf8=✓&search%5Bkeywords%5D=" + complete_query;

    window.location.href = link_to_form;
  }

  //same as above
  //TODO: refacfor when have time
  var form = document.getElementById("search-form");
  form.onsubmit = function() {
    sendQuery();
    return false;
  };

  var form2 = document.getElementById("med-search-form");
  form2.onsubmit = function() {
    sendQuery_med();
    return false;
  };

  $('.menu').on("click", function() {
    $('.search-field').hide();
    $('.nav').slideToggle(100);
  });

  $('.search').on("click", function() {
    //$('.nav').hide();
    $('.search-field').slideToggle(100);
  });

  /*

  if (parseInt($(window).width()) >= 880)
  {

    $('.royalSlider').insertAfter($('.medium-nav'));
  }
  if (parseInt($(window).width()) >= 640)
  {
    $('.royalSlider').addClass('move-up');
  }*/

});



