/*
* @Author: wsc
* @Date:   2018-03-15 15:11:48
* @Last Modified by:   wsc
* @Last Modified time: 2018-03-16 09:53:25
*/

'use strict';

var email = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
var phone = /^1[34578]\d{9}$/;
var tel = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
//身份证正则表达式(15位)
var isIDCard1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
//身份证正则表达式(18位)
ivar sIDCard2=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
// 身份证正则合并：(^\d{15}$)|(^\d{17}([0-9]|X)$)

// 提取信息中的网络链接:
href = /(h|H)(r|R)(e|E)(f|F) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)?/;
// 提取信息中的邮件地址:
emaiAddress = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
// 提取信息中的图片链接:
picSrc = /(s|S)(r|R)(c|C) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)?/;
// 提取信息中的IP地址:
ip = /(\d+)\.(\d+)\.(\d+)\.(\d+)/
// 提取信息中的中国电话号码（包括移动和固定电话）:
phoneTel = /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}/
//"兼容格式: 国家代码j(2到3位)-区号(2到3位)-电话号码(7到8位)-分机号(3位)"
// return (/^(([0+]d{2,3}-)?(0d{2,3})-)?(d{7,8})(-(d{3,}))?$/);
country = (/^(([0+]d{2,3}-)?(0d{2,3})-)(d{7,8})(-(d{3,}))?$/);
// 提取信息中的中国邮政编码:
zip = [1-9]{1}(\d+){5}
// 提取信息中的中国身份证号码:
idcard = \d{18}|\d{15}
// 提取信息中的浮点数（即小数）：
float = (-?\d*)\.?\d+
// 提取信息中的任何数字 ：
num = (-?\d*)(\.\d+)?
// 提取信息中的中文字符串：
han = [\u4e00-\u9fa5]*
// 提取信息中的双字节字符串 (汉字)：
dhan = [^\x00-\xff]*

// console.log(addCommas(12345678)); 12,345,678
// 数字逗号分隔
function addCommas(nStr) {
  nStr += '';
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }

  return x1 + x2;
}