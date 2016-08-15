jQuery(document).ready(function() {
   console.log("ready");

   var imageUrls = [
     'http://www.themarysue.com/wp-content/uploads/2014/07/Han-Solo-640x360.jpg',
     'https://s-media-cache-ak0.pinimg.com/564x/ae/b4/8c/aeb48cc61f1edbf44646b22e202342e2.jpg',
     'http://images.hellogiggles.com/uploads/2015/12/02/star-wars-harrison-ford-episode-4.jpg',
     'http://underscoopfire.com/wp-content/uploads/2013/03/han-solo-sexy_opt.jpg'
   ];

   function initialize() {

      var thumbsContainerElem = $( "div#thumbs" );

      for ( i = 0; i < imageUrls.length; i++ ) {

         var thumbImgElem = $( "<img/>" )
            .attr( 'id', "thumb" + i )
            .attr( 'src', imageUrls[i] );

         thumbsContainerElem.append( thumbImgElem );
      }

   }

   initialize();
});
