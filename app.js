jQuery(document).ready(function() {

   var imageUrls = [
     'http://www.themarysue.com/wp-content/uploads/2014/07/Han-Solo-640x360.jpg',
     'https://s-media-cache-ak0.pinimg.com/564x/ae/b4/8c/aeb48cc61f1edbf44646b22e202342e2.jpg',
     'http://images.hellogiggles.com/uploads/2015/12/02/star-wars-harrison-ford-episode-4.jpg',
     'http://underscoopfire.com/wp-content/uploads/2013/03/han-solo-sexy_opt.jpg',
     'http://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/54999f49e4b02e9f5e612661/1419353930632/final-concept-art-for-han-solo-and-chewbacca-in-star-wars-the-force-awakens',
     'http://i0.wp.com/www.tor.com/wp-content/uploads/2014/12/han-solo1.jpg?fit=475%2C%209999&crop=0%2C0%2C100%2C264px',
     'https://images.chesscomfiles.com/proxy/www.amerika.org/wp-content/uploads/han_solo/http/e7f828defc.jpg'
   ];

   function initialize() {

      var thumbsContainerElem = $( "div#thumbs" );

      for ( i = 0; i < imageUrls.length; i++ ) {

        var thumbImgElem = $( "<img/>" )
           .addClass( 'thumb' )
           .attr( 'id', "thumb" + i )
           .attr( 'src', imageUrls[i] )
           .data( 'index', i );

          thumbImgElem.bind( 'click', selectPic );

         thumbsContainerElem.append( thumbImgElem );
      }
   };

   function selectPic() {
     var thumbImgElem = $( this );

     i = thumbImgElem.data( 'index' );

     $( "img#pic" ).attr( 'src', imageUrls[i] );
   }
    initialize();
});
