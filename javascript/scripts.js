
window.onload = function() {

    initGallery();
};

function initGallery() {

  var $grid = $('.js-masonry-grid-container').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 100,
    percentPosition: true
  });

  // layout Masonry after each image loads
  /*$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });*/

  $grid.on( 'click', '.grid-item', function() {
    $(this).toggleClass('gigante');
    // trigger layout after item size changes
    $grid.masonry('layout');
  });
  }
