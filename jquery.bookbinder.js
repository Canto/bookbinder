/***********
jQuery & CSS Bookbinder
************/

(function($){
    $.fn.extend({ 
        //plugin name - bookBinder
        bookBinder: function(options) {
 
            //Settings list and the default values
            var defaults = {
                color : "#000000",
				background : "#ededed",
				width : 400,
				height : 400,
				lineheight : 1.5
            };
             
		
            var options = $.extend(defaults, options);
         
            return this.each(function(){
            
            
			var i = 0;
			var start = 0;
			var opts = options;
			
			$('.book-content').wrap('<div id="book"/>').wrap('<div class="border"/>').wrap(function(){ return '<div class="text" id="book'+i+'"/>';});
			$('.text').css({
				'position'		:	'relative',
				'width'			:	opts.width,
				'height'		:	opts.height,
				'margin'		:	5,
				'line-height'	:	opts.lineheight
			});
			$('.book-content').css({'word-wrap':'break-word','position':'relative'});
			$('.border').css({
				'position'			:	'relative',
				'background-color'	:	opts.background,
				'width'				:	opts.width,
				'height'			:	opts.height,
				'margin'			:	10,
				'padding'			:	0,
				'border-color'		: 	opts.background,
				'border-width'		:	50,
				'border-style'		:	'solid'
			});
			
			
			var tmp = $('#book'+ i + ' > div').text();
			var res = tmp.split(/\n/g);

			$('#book' + i + ' > div').text('');
			
			var arry_length = res.length;
			
			while(1)
			{
				
				while($('#book' + i).height() > $('#book' + i + " > div").height())
				{
					if( start == 0 )
					{
						$('#book' + i + ' > div').append( res[0] + '<br/>' );
						start++;
					}
					else
					{
					
						$('#book' + i + ' > div').append( res[start] + '<br/>' );
						start++;
						if( start == arry_length )
						{
						
							break;
						}
					}
				
				}
				
				
				if( start != arry_length ){
					$('#book').append('<div class="border" />');
					$('.border:eq('+(i+1)+')').append('<div class="text" id="book' + (i+1) + '" />');
					$('#book'+(i+1)).append('<div class="book-content"/>');
					$('.text').css({
					'position'		:	'relative',
					'width'			:	opts.width,
					'height'		:	opts.height,
					'margin'		:	5,
					'line-height'	:	opts.lineheight
				});
				$('.book-content').css({'word-wrap':'break-word','position':'relative'});
				$('.border').css({
					'position'			:	'relative',
					'background-color'	:	opts.background,
					'width'				:	opts.width,
					'height'			:	opts.height,
					'margin'			:	10,
					'padding'			:	0,
					'border-color'		: 	opts.background,
					'border-width'		:	50,
					'border-style'		:	'solid'
				});
				}
				i++;
				if( start == arry_length ) break; 
				
			}
			
			//$('.border').css('height',opts.height+80);
		});
        
        }
    });
})(jQuery);