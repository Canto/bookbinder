/*
 * jQuery Book Binder Plugin
 * Copyright (c) 2013 Yoon JoonYoung ( Canto )
 * 
 * Homepage : http://canto.btool.kr
 * Version  : 1.0
 * License  : The MIT License (MIT)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

;(function($){
    $.fn.extend({ 
        //plugin name - bookBinder
        bookBinder: function(options) {
 
            //Settings list and the default values
            var defaults = {
                color : "#000000",
				background : "#ededed",
				innerbackground : "#ffffff",
				width : 400,
				height : 500,
				bookborder : 20,
				padding	: 10,
				bookborder : 20,
				lineheight : 1.5
            };
             
		
            var options = $.extend(defaults, options);
         
            return this.each(function(){
            
            
			var i = 0;
			var start = 0;
			var opts = options;
			
			$('.book-content').wrap('<div id="book"/>').wrap('<div class="border"/>').wrap(function(){ return '<div class="text-content" id="book'+i+'"/>';});
			$('.text-content').css({
				'position'			:	'relative',
				'width'				:	opts.width-(opts.bookborder*2)-(opts.padding*2),
				'height'			:	opts.height-(opts.bookborder*2)-(opts.padding*2),
				'background-color'	:	opts.innerbackground,
				'padding'			:	opts.padding,
				'line-height'		:	opts.lineheight
			});
			$('.book-content').css({'word-wrap':'break-word','position':'relative'});
			$('.border').css({
				'position'			:	'relative',
				'background-color'	:	opts.background,
				'width'				:	opts.width-(opts.bookborder*2),
				'height'			:	opts.height-(opts.bookborder*2),
				'margin'			:	0,
				'border-color'		: 	opts.background,
				'border-width'		:	opts.bookborder,
				'border-style'		:	'solid'
			});
			
			
			var tmp = $('#book'+ i + ' > div').text();
			var res = tmp.split(/\n/g);
			var tmp2;
			var j = 0;
			//var z = 0;
			$('#book' + i + ' > div').text('');
			
			var arry_length = res.length;
			
			while(1)
			{
				var tmp2 = res[start];
				var length2 = tmp2.length;
				//console.log(tmp2);
				while($('#book' + i).height() > $('#book' + i + " > div").height())
				{
					if( start == arry_length ) break; 
					if(last_character){
						 $('#book' + i + ' > div').append( last_character);
						 last_character = '';
					}
					
					if(j!=length2){
						$('#book' + i + ' > div').append( tmp2.slice(j,(j+1)) );
						j++;
					}else{
						j = 0;
						start++;
						tmp2 = res[start];
						if(tmp2) length2 = tmp2.length;
						$('#book' + i + ' > div').append( "<br/>" );
					}
					
				}
				var last_character = $('#book' + i + ' > div').html().slice($('#book' + i + ' > div').html().length-1,$('#book' + i + ' > div').html().length);
				$('#book' + i + ' > div').html($('#book' + i + ' > div').html().slice(0,$('#book' + i + ' > div').html().length-1));
				$('#book' + i).append( "<p align='center' style='position:absolute;margin:0px;bottom:0px;width:"+$('#book' + i + ' > div').width()+"px;text-align:center;'>- "+(i+1)+" -</p>" );
				
				
				if( start != arry_length ){
					$('#book').append('<div class="border" />');
					$('.border:eq('+(i+1)+')').append('<div class="text-content" id="book' + (i+1) + '" />');
					$('#book'+(i+1)).append('<div class="book-content"/>');
					$('.text-content').css({
					'position'		:	'relative',
					'width'			:	opts.width-(opts.bookborder*2)-(opts.padding*2),
					'height'		:	opts.height-(opts.bookborder*2)-(opts.padding*2),
					'background-color'	:	opts.innerbackground,
					'padding'		:	opts.padding,
					'line-height'	:	opts.lineheight
				});
				$('.book-content').css({'word-wrap':'break-word','position':'relative'});
				$('.border').css({
					'position'			:	'relative',
					'background-color'	:	opts.background,
					'width'				:	opts.width-(opts.bookborder*2),
					'height'			:	opts.height-(opts.bookborder*2),
					'margin'			:	0,
					'padding'			:	0,
					'border-color'		: 	opts.background,
					'border-width'		:	opts.bookborder,
					'border-style'		:	'solid'
				});
				
				}
				i++;
				if( start == arry_length ) break; 
				
			}
			$('#book').css('background-color',opts.background);
		});
        
        }
    });
})(jQuery);