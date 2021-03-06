https://reqres.in/api/users?per_page=10
http://placehold.it/150/24f355
function LoadJS(id, fileUrl) {
    return new Promise(function(resolve, reject){
        var scriptTag = document.getElementById(id);
        var oHead = document.getElementsByTagName('HEAD').item(0);
        var oScript= document.createElement("script");
        if ( scriptTag  ) oHead.removeChild(scriptTag);
        oScript.id = id;
        oScript.type = "text/javascript";
        oScript.src=fileUrl ;
        oHead.appendChild(oScript);
        resolve();
    });
}
ajax的同源策略，同一个域名或子域名，并且端口一致。一个ajax请求被发送，所有的请求都会附带主语的cookie信息一起发送。
跨域策略文件。
cross-origin resource sharing.
corss赋予前端代码访问可信的远程服务的权限。ie》=8
服务器添加为受信任的数据源：
http协议的响应头添加：
Access-Control-Allow-Origin: example.com
Access-Control-Request-Method: GET,POST

var req = new XMLHttpRequest();
req.open("POST","/endpoint",true);
req.setRequestHeader("Authorization",oauth_signature);

ie:XDomainRequest 代替上面进行跨域通信，只支持GET，POST，不支持验证和自定义字段，
只支持“Content-Type:text/plain”类型的请求。

jsonp ： 所有script 标签获取脚本文件不受跨域的限制。
jsonCallback({"data":"foo"})

内部系统不要跨域，只ajax。

rest：
创建：post，更新：put，

ajax抓取规则：
http://twitter.com/#!/maccman
http://twitter.com/?_escape_fragment_=maccan
uglyUrl

websocket 服务器直接推送信息到客户端

白名单属性避免恶意输入，序列化时不要在json中包含模型名称。
curl -v http://twitter.com/?_escape_fragment_=maccan 302 redircted to http://twitter.com/maccman

---------------------
REST 风格的 CRUD 类似下面这样：
    create → POST   /collection
    read → GET   /collection[/id]
    update → PUT   /collection/id
    delete → DELETE   /collection/id

访问授权问题越早考虑越好
http://www.cnblogs.com/think8848/archive/2009/12/01/1614520.html
如果把Atom10ItemFormatter<TSyndicationItem>做为WCF服务方法的参数类型，再使用HTTP 的PUT方式把数据推到WCF服务的方法上，这个Atom10ItemFormatter<TSyndicationItem>应该会将推进来的XML数据自动转换成SyndicationItem对象吧
---------------------------------------------------------
-----------------------------------------------------------
REST架构下，浏览器怎么发送put与delete请求：
例如后台已经搞定，REST服务已经建好了，那么前台浏览器怎么使用呢？

------解决方案--------------------
前端比较麻烦，因为：
The other HTTP methods (i.e. other than GET and POST) are not available in HTML 4.1 or XHTML 1.0.

---也就是说实际上HTML5以前，FORM都仅支持GET和POST。---

即便你尝试自己用Ajax来做，都未必能成功。
在jQuery的文档中说：
The type of request to make ("POST" or "GET"), default is "GET". Note: Other HTTP request methods, such as PUT and DELETE, can also be used here, but they are not supported by all browsers.（最后一句话：不是所有浏览器支持其它方式）
------解决方案--------------------
可以用POST来代替PUT和DELETE, 比如你可以埋一个hidden field叫 _method, <input type= "hidden " name= "_method " value= "PUT "> . 这样,你在后台可以根据这个字段来识别.
-------------------------------------------------
http://www.myexception.cn/operating-system/889647.html
幂等有以下几种定义： 　　对于单目运算，如果一个运算对于在范围内的所有的一个数多次进行该运算所得的结果和进行一次该运算所得的结果是一样的，那么我们就称该运算是幂等的。
安全和幂等的意义在于：当操作没有达到预期的目标时，我们可以不停的重试，而不会对资源产生副作用。从这个意义上说，POST操作往往是有害的，但很多时候我们还是不得不使用它。

还有一点需要注意的就是，创建操作可以使用POST，也可以使用PUT，区别在于POST 是作用在一个集合资源之上的（/uri），而PUT操作是作用在一个具体资源之上的（/uri/xxx），再通俗点说，如果URL可以在客户端确定，那么就使用PUT，如果是在服务端确定，那么就使用POST，比如说很多资源使用数据库自增主键作为标识信息，而创建的资源的标识信息到底是什么只能由服务端提供，这个时候就必须使用POST。
------------------------------------------------
两者都能向服务器发送数据，提交的“内容”[注1]的格式相同，都是
var_1=value_1&var_2=value_2&....

get 和 post 区别如字面，一个是get（获取），一个是post（发送）。

get用来告诉服务器需要获取哪些内容（uri+query），向静态页面（uri）请求则直接返回文件内容给浏览器，向一个动态页面请求时可以提供查询参数（query）以获得相应内容。

post用来向服务器提交内容，主要是为了提交，而不是为了请求内容，就是说post的初衷并不要求服务器返回内容[注2]，只是提交内容让服务器处理（主要是存储或者处理之后再存储）。
------
首先说下什么是REST，这个四个字母是Representational State Transfer的简写，它是一套设计原则：表示性状态转移。接着我们再看下Web背后的暗藏的设计理念和传统的Web服务（RPC式的）的差别：

    Web是基于资源的，但很多传统的Web服务并不会暴露资源；
    Web是基于URI与链接的，但很多传统的Web服务一般也只暴露一个URI和零个链接；
    Web是基于HTTP的，但很多传统的Web服务几乎很少使用HTTP的特性；
    Web是可以面向对象的，但很多传统的Web服务几乎都面向过程。

从而传统的Web服务，就会出现一些不好地方：

    不具有寻址性；
    不具有可缓存性；
    没有连通性；
    不是冥等的，也不是安全的；
    不符合统一接口（通常一个不同服务的操作千差万别）；
    不透明（即你熟悉了一个服务不代表另一个也熟悉）。

大家可能对上面的一些关键词不太理解，现在我就做一下说明，这里还包括一些下面可能用到的词语：

    寻址性：如果一个Web服务将其数据集里有价值的部分作为资源发布出来，那么该应用就是可以寻址的，每个资源必须对应唯一的一个URI，建议同一资源的不同表示也对应一个URI；
    资源状态：即关于资源的信息，一定要保存到服务器端，且只能以表示的实现的形式发给客户端；
    应用状态：即关于客户端在应用中所处的状态信息，比如起始页码，一定要保存到客户端，可以作为请求的一部分发给服务端，甚至成为资源状态的一部分；
    冥等性：不管你对某资源做多少次同样的操作，结果总是一样的；
    安全性：始终不会改变服务器的状态；
    连通性：资源应该是可以容易的相互连接起来的，服务器通过超媒体（即超文本表示里的链接和表单）可以引导资源从一个状态进入下一个状态，Roy Field也在论文里说：“将超媒体作为应用状态的引擎”；
    统一接口：客户端和资源之间的所有交互都应该是通过为数不多的几个基本的HTTP方法进行的。

若一个REST式的服务从不保存任何应用状态，那么就称它为无状态的。在一个无状态的应用里，服务是按照当前的资源状态来独立处理各个客户端请求的，是冥等的。而无状态的好处是：

    提升应用的规模十分简单；
    具有更高的可靠性，就是说多次重发一对一个资源的请求是冥等的。

若一个服务的连通性做得好，那么客户端就不需要去理解这个服务的潜在规则来构造uri。在REST式服务中，对于HTTP几个基本方法的约定：

    GET：用于获取关于资源的信息；
    HEAD：只获取报头（一些元信息），不获取表示；
    PUT：请求设定资源状态（创建或者修改），若客户端向一个URI发送PUT请求时未提供表示，则表明此URI处已经存在一个资源了；
    DELETE：请求用于删除资源；
    POST：请求为已有的资源创建一个从属资源或者；
    OPTIONS：请求用于查看一个资源支持统一接口里的哪些方法。

重载POST方法虽然可以不违背REST的设计原则（符合最低要求），但它是违反面向资源的架构原则的，而统一接口的好处并不在于它所暴露的具体方法，而在于统一性，从而提高与其他Web服务的兼容性。一个服务应该是自描述的，而不依赖于辅助的文字描述来告诉程序员怎么编码，而且，依赖于URI构造规则的客户端是比较脆弱的，一但改变了规则，所有客户端都要重写。在REST式的Web服务的资源设计时，要注意资源的合理设计，资源可以分为三类：

    预定义的一次性资源：比如服务的主页；
    大量（或者无数个）对应于个数据项的资源；
    大量（或者无数个）对应于一个可能的算法输出结果的资源。

记住：拿不准时，就可以把它作为资源。在设计资源的URI时，路径变量被用于分隔一个层次结构或者有向图的元素，如果同一层次的多项数据有次序关系就用逗号（ , ），如果同一层次的多项数据没有先后关系就用分号（ ; ）。表示应当是人类可读的，但同时也应当是面向计算机的。也应当是有用的，应该暴露的是有价值的数据而不是无用的数据。记住，你的服务可能要考虑版本化的问题，如果拿不准就在资源的最前面加上路径变量来表示版本吧。
----------------------------------------------
<a href="/users/1">view</a>
<form action="/users/1" method="post" accept="text/html">
    <input type="text" name="name" />
    <input type="text" name="email" />
    <input type="submit" value="create"/>
</form>

资源多重表述
也就是客户端，可以通过修改"Accept"请求头信息，来要求服务器端返回不同类型的数据结果，如：
Accept: text/json 返回JSON数据
Accept: text/xml 返回XML数据
Accept: text/html 返回HTML页面
Accept: text/wml 返回WML页面

// context.Response.Headers.Add("Access-Control-Expose-Headers", "Content-Disposition");
this.downloadFileName = response.headers("Content-Disposition").split(";")[1].split("filename=")[1];
let fileNameUnicode = response.headers("Content-Disposition").split("filename*=")[1];

if (fileNameUnicode) {
    //当存在 filename* 时，取filename* 并进行解码（为了解决中文乱码问题）
    this.downloadFileName = decodeURIComponent(fileNameUnicode.split("''")[1]);
}