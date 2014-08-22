/*
* ol.wordCount		ͳ���ı������Ѿ�������ַ���(����΢����ʽͳ��,������һ����)
* Version 1.0 (2012-1-10)
* @requires jQuery v1.2.6 or later
*
* Example at: http://www.open-lib.com/
*
* Copyright (c) 2009-2012 Open-Lib.Com
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
* Read the related post and contact the author at http://www.open-lib.com/
*
* This version is far from perfect and doesn't manage it's own state, therefore contributions are more than welcome!
*
* Usage:
*		1.		ol.wordCount("#countTextArea","#countTips",{max:100});
*		2.		ol.wordCount(".countTextArea",".countTips",
*						[
*							{max:100},
*							{
*								max:200,exceedCallback:function(count){
*								}
*							}
*						]
*				);
*
* Tested in IE6 IE7 Firefox Chrome. Any browser strangeness, please report.
*/

window.ol || (window.ol = {});

(function(){
	var wordCountDefaultOptions = {
		max : Number.MAX_VALUE,		//�����������������ַ���
		exceedCallback : null			//��������ַ���ʱִ�еĻص�����
	},
	count = function(val){
		var allLen = val.length,//�ַ�����
		enLen = val.replace(/[^\x00-\xff]/g,"").length,//Ӣ���ַ�����
		inputLength = (enLen%2==0?enLen/2:parseInt(enLen/2)+1) + (allLen-enLen);
		return inputLength;
	};
	/**
	*selector	��Ҫͳ�������Ķ���
	*callback	����������Ϣ�Ķ���򷽷�
	*options	�������ã�������һ���������飬����ĳ��ȱ��������Ķ������һ��
	*/
	ol.wordCount = function(selector, callback, options){
		var $=jQuery ,
			isArray = $.isArray(options);
		$(selector).each(function(i){
			var opt=isArray?options[i]:options;
			opt = $.extend({},wordCountDefaultOptions, opt);
			if(typeof(callback)=="function"){
				callback.call(this,count(this.value));
			}else{
				$(callback).eq(i).html(count(this.value));
			}

			$(this).bind("keyup", function(){
				var inputLength = count(this.value);
				if(inputLength > opt.max){
					if(opt.exceedCallback){
						opt.exceedCallback(inputLength);
					}

				}
				if(typeof(callback)=="function"){
					callback.call(this,inputLength);
				}else{
					$(callback).eq(i).html(inputLength);
				}
			});
		});
	};
})();

