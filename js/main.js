
$(document).ready(function() {

  $('.main-slider').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   adaptiveHeight: true
  });

  $('.reviews-carousel').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   adaptiveHeight: true
  });
});



$( function(){

  $( document ).on( "beforecreate.offcanvas", function( e ){
    var dataOffcanvas = $( e.target ).data('offcanvas-component');
    // console.log(dataOffcanvas);
    dataOffcanvas.onInit =  function() {
      // console.log(this);
    };
  } );

  $( document ).on( "create.offcanvas", function( e ){
    var dataOffcanvas = $( e.target ).data('offcanvas-component');
    // console.log(dataOffcanvas.options);
    dataOffcanvas.onOpen =  function() {
      console.log('Callback onOpen');
    };
    dataOffcanvas.onClose =  function() {
      console.log('Callback onClose');
    };
  } );

  $( document ).on( "clicked.offcanvas-trigger clicked.offcanvas", function( e ){
    var dataBtnText = $( e.target ).text();
    console.log(e.type + '.' + e.namespace + ': ' + dataBtnText);
  } );

  $( document ).on( "open.offcanvas", function( e ){
    var dataOffcanvasID = $( e.target ).attr('id');
    console.log(e.type + ': #' + dataOffcanvasID);
  } );

  $( document ).on( "resizing.offcanvas", function( e ){
    var dataOffcanvasID = $( e.target ).attr('id');
    console.log(e.type + ': #' + dataOffcanvasID);
  } );

  $( document ).on( "close.offcanvas", function( e ){
    var dataOffcanvasID = $( e.target ).attr('id');
    console.log(e.type + ': #' + dataOffcanvasID);
  } );

  $( document ).on( "destroy.offcanvas", function( e ){
    var dataOffcanvasID = $( e.target ).attr('id');
    console.log(e.type + ': #' + dataOffcanvasID);
  } );

  $( '#bottom' ).on( "create.offcanvas", function( e ){
    var api = $(this).data('offcanvas-component');

    console.log(api);
    $('.js-destroy').on('click', function () {
      api.destroy();
      //$( '#top' ).data('offcanvas-component').destroy();
      console.log(api);
      console.log( $( '#top' ).data() );
    });
  } );

  $( '#left' ).offcanvas( {
    modifiers: "left,overlay",
    triggerButton: '.js-offcanvas-trigger-left'
  } );

  $('.js-enhance').on('click', function () {
    console.log('enhance');
    $( document ).trigger( "enhance" );
  });

  $( document ).trigger( "enhance" );
});
