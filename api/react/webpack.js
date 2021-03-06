东方＃　任何事，原本就是个”悟性“的问题，而”悟性“的背后，离不开客观与认真两个态度。

东方＃　没有这样的态度，所谓”悟性“是无源之水，终究是聪明反被聪明误，国家战略，也是如此，更何况个人？

东方#什么是最高级的战略？就是这种按自己的节奏，以最小的代价，不仅相对顺利渡过最困难，最危险的时间段，还在过程中慢慢取得战略主动

关于打包：就是要把多个js和css合并成一个文件。快速开发时候可以引入html插件直接注入打包后的文件。
也可以不用注入，通过gulp来分开生成css或进行动态刷新。
sw-precache-webpack-plugin
https://github.com/GoogleChromeLabs/sw-precache
https://doc.webpack-china.org/api/compiler/
// 编译完成之后，注册编译监听事件，获取编译实例。
compiler.plugin('compilation', function (compilation) {
    // 在编译阶段模块被加载、封闭、优化、分块、哈希、重建。主要的编译实例。
    // 监听 html-webpack-plugin 插件的 template changes
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    // 触发页面热加载，注意不是刷新，是局部渲染或重载，特殊情况下刷新
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})
// 打包完成或重新打包完成后调用
devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

// 调用默认程序打开路径
opn(uri)

// 注意里面 jQuery 的书写
// 引用的组件都应该是 node_modules 里面的。bower 的不行，没有 module.exports
(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jQuery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {});

webstorm sourcemaps, 编辑配置，设置正确端口，然后调试运行后，webpack . 右键 visualize source map。
生成的文件 bundle.js 右键 specify local file 建立关联。

$ npm install --save react react-dom babelify babel-preset-react
$ browserify -t [ babelify --presets [ react ] ] main.js -o bundle.js

$ npm install --save react react-dom babel-preset-react
$ webpack
npm install --global babel-cli
npm install babel-preset-react
---------------------
//安装react
npm install react --save
npm install react-dom --save
//安装babel-loader
npm install babel-loader --save-dev
npm install babel-core --save-dev
npm install babel-preset-es2015 --save-dev  //支持ES2015
npm install babel-preset-react --save-dev //支持jsx
npm install babel-preset-stage-0 --save-dev //支持ES7
//但是还不够
npm install babel-polyfill --save
/*
Polyfilla是一个英国产品,在美国称之为Spackling Paste(译者注:刮墙的,在中国称为腻子).记住这一点就行:把旧的浏览器想象成为一面有了裂缝的墙.这些[polyfills]会帮助我们把这面墙的裂缝抹平,还我们一个更好的光滑的墙壁(浏览器)
*/
npm install babel-runtime  --save
npm install babel-plugin-transform-runtime --save-dev
------------------------
https://github.com/webpack/webpack-with-common-libs/blob/master/gulpfile.js
      //
/*减少打包的时候重复代码，以上要注意是放在dev还是非dev上！*/
npm install webpack-dev-server -g
webpack-dev-server --progress --colors
"dev":"webpack-dev-sever --devtool eval --progress --colors --hot --inline --content-base ./build"
//webpack-dev-server 创建一个服务器8080端口的
//devtool eval --为你的代码创建源地址，可以代码快速定位
//progress --显示进度条
//colors --命令行带颜色
//content-base build --指向设置的输出目录
//一旦启动这个就会用服务器去监听代码文件的变化，从而每次变化都自动合并
引用模块，webpack提供了require()API（也可以通过添加bable插件来支持ES6的import语法）。
webpack提供了强大的热更新支持，即HMR(hot module replace)。
webpack启动一个本地webserver（webpack-dev-server），负责处理由webpack生成的静态资源请求。
注意webpack-dev-server是把所有资源存储在内存的，所以你会发现在本地没有生成对应的chunk访问却正常。

npm install loder-css --save-dev
webpack ./entry.js boudle.js --moudle-bind 'css=style!css' --progress --colors --watch /
//in package.json
"deploy": "NODE_ENV=production webpack -p --config webpack.production.config.js"

如果要指定另外的配置文件，可以执行：webpack --config webpack.custom.config.js --display-error-details
webpack -w 提供watch方法，实时进行打包更新
webpack -p 对打包后的文件进行压缩
webpack -d 提供SourceMaps，方便调试

plugins: [
    new webpack.IgnorePlugin(/file\.js$/)
]
Note: require.ensure only loads the modules, it doesn’t evaluate them.
Note: AMD require loads and evaluate the modules. In webpack modules are evaluated left to right.
http://localhost:8080/webpack-dev-server/bundle 内嵌 iframe 模式加载页面
entry参数定义了打包后的入口文件，可以是个字符串或数组或者是对象；
如果是数组，数组中的所有文件会打包生成一个filename文件；
如果是对象，可以将不同的文件构建成不同的文件:
不要在开发环境中使用 [chunkhash]，因为它会增加编译时间。区分开发和生产环境的配置，使用 [name].js 应用于开发，使用 [name].[chunkhash].js 用于生产。
保证哈希值是根据文件内容生成的，请使用 webpack-md5-hash 插件。这里是使用示例：https://github.com/okonet/webpack-long-term-cache-demo/pull/3/files。
plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
]

path: 打包文件存放的绝对路径
publicPath: 网站运行时的访问路径
filename:打包后的文件名

注意，require()还支持在资源path前面指定loader，即require(![loaders list]![source path])形式：
require("!style!css!less!bootstrap/less/bootstrap.less");
require()时指定的loader会覆盖配置文件里对应的loader配置项。

var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//这个可以使jquery变成全局变量，妮不用在自己文件require('jquery')了
// var thirdPlugin = new webpack.ProvidePlugin({$: 'jquery', "window.jQuery": "jquery", jQuery: "jquery",});
var ignoreFiles = new webpack.IgnorePlugin(/\.\.\/lib\/jquery.js$/);

----------------------------------------------
let ExtractTextPlugin = require('extract-text-webpack-plugin');

// multiple extract instances
let extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
let extractLESS = new ExtractTextPlugin('stylesheets/[name].less');

module.exports = {
  ...
  module: {
    loaders: [
      {test: /\.scss$/i, loader: extractCSS.extract(['css','sass'])},
      {test: /\.less$/i, loader: extractLESS.extract(['css','less'])},
      ...
    ]
  },
  plugins: [
    extractCSS,
    extractLESS
  ]
};
----------------------------------
路径问题：解决 window 和 linux 分隔符不同的问题。
// es6  import 引入的文件没法单独分离出来
path.resolve(__dirname, "app/folder")
path.join(__dirname, "app", "folder")


module.exports = {
    debug: true, // set false in production
    cache: true,
    // 默认 "web", "async-node"
    target: "node",
    // context: __dirname + '/src', 这个会影响 css
    // entry: [
    //     'webpack/hot/dev-server',
    //     'webpack-dev-server/client?http://localhost:8080',
    //     'babel-polyfill',
    //     path.resolve(__dirname, 'src/app.js')
    // ],
    // 想在项目中require一些其他的类库或者API，而又不想让这些类库的源码被构建到运行时文件中，
    // 可以通过配置externals参数来解决这个问题：
    externals: {
        // 外部公共变量：引入到内部后的名称。然后就可以 var $ = jQuery = require("jQuery")
      "jQuery": "jQuery",
      'react': 'window.React',
      'react-dom':'ReactDOM',
    },
    externals: [
        "add",
        // Note: If using umd you can specify an object as external value with property commonjs, commonjs2, amd and root to set different values for each import kind.

        "subtract": {
            root: "subtract",
            commonjs2: "./subtract",
            commonjs: ["./math", "subtract"],
            amd: "subtract"
        },

        "jquery": {
            root: "jQuery",
            commonjs: "jquery"
            commonjs2: "jquery"
            amd: "jquery"
        }
    ],
    // webpack编译输出的文件包括以下2种：

    // entry：入口，可以是一个或者多个资源合并而成，由html通过script标签引入
    // chunk：被entry所依赖的额外的代码块，同样可以包含一个或者多个文件
    // 其中entry项是入口文件路径映射表，output项是对输出文件路径和名称的配置，
    // 占位符如[id]、[chunkhash]、[name]等分别代表编译后的模块id、chunk的hashnum值、chunk名等，
    // 可以任意组合决定最终输出的资源格式。
    // hashnum的做法，基本上弱化了版本号的概念，版本迭代的时候chunk是否更新只取决于chnuk的内容是否发生变化。
    // 总会有一些功能是使用过程中才会用到的，出于性能优化的需要，对于这部分资源我们希望做成异步加载，
    // 所以这部分的代码一般不用打包到入口文件里边。

    // 对于这一点，webpack提供了code splitting，即使用require.ensure()作为代码分割的标识。
    // webpack将require.ensure()包裹的部分单独打包了，
    // 即图中看到的[hash].chunk.js，既解决了异步加载的问题，又保证了加载到的是最新的chunk的内容。
    // 例如某个需求场景，根据url参数，加载不同的两个UI组件，示例代码如下：

    // var component = getUrlQuery('component');

    // if('dialog' === component) {
    //     require.ensure([], function(require) {
    //         var dialog = require('./components/dialog');
    //         // todo ...
    //     });
    // }

    // if('toast' === component) {
    //     require.ensure([], function(require) {
    //         var toast = require('./components/toast');
    //         // todo ...
    //     });
    // }
    // 多个入口文件之间可能公用一个模块，可以使用CommonsChunkPlugin插件对指定的chunks进行公共模块的提取
    // 下面代码示例演示提取所有入口文件公用的模块，将其独立打包：
    // var chunks = Object.keys(entries);
    // plugins: [
    //     new CommonsChunkPlugin({
    //         name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
    //         chunks: chunks,
    //         minChunks: chunks.length // 提取所有entry共同依赖的模块
    //     })
    // ],
    // entry: {
    //   vendor: ["jquery", "other-lib"],
    //   app: "./entry"
    // }
    context: path.resolve(__dirname, '..'),
    entry:{
        app  :[path.resolve(__dirname,'app/main.js'),],
        react: ['babel-polyfill','react','react-dom'],
        'font-awesome-webpack!./src/theme/font-awesome.config.prod.js',
        // bootstrap-sass-loader 已废弃，被 bootstrap-loader 和 sass-resources-loader 代替
        bootstrap: "bootstrap-sass!./bootstrap-sass.config.js",
        bootstrap: "bootstrap-loader/extractStyles",
    },
    output: {
        // 打包文件存放的绝对路径
        path: path.resolve(debug ? '__build' : './assets/'),
        path: path.resolve(__dirname, 'public/build'),
        // publicPath: "http://cdn.example.com/assets/[hash]/"
        // 打包后的文件名
        filename: debug ? '[name].js' : 'js/[chunkhash:8].[name].min.js',
        sourceMapFilename: '[name].map',
        chunkFilename: debug ? '[chunkhash:8].chunk.js' : 'js/[chunkhash:8].chunk.min.js',
        // 网站运行时的访问路径
        publicPath: debug ? '/__build/' : '',
        libraryTarget : "commonjs2,"
        library: ["MyLibrary", "[name]"],
        // Include comments with information about the modules.
        pathinfo: true
        // The `library` option defines the namespace.
    },
      jscs: {
        // JSCS errors are displayed by default as warnings.
        // Set `emitErrors` to `true` to display them as errors.
        emitErrors: false,

        // JSCS errors do not interrupt the compilation.
        // Set `failOnHint` to `true` if you want any file with
        // JSCS errors to fail.
        failOnHint: false
      },
    // test项表示匹配的资源类型，loader或loaders项表示用来加载这种类型的资源的loader
    // ！用来定义loader的串联关系，"-loader"是可以省略不写的，多个loader之间用“!”连接起来，
    // 但所有的加载器都需要通过 npm 来加载。
    // https://github.com/webpack/docs/wiki/shimming-modules
    // {test: require.resolve('jquery'), loader: 'expose?jQuery'},
    // {test: require.resolve('pen'), loader: 'exports?window.Pen'},
    // var nodeModules = path.resolve(__dirname, '../node_modules');
    // var pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');
    module: {
        noParse: [
          path.join(bowerRoot, '/lodash/dist/lodash.js'),
          path.join(bowerRoot, '/jquery/dist/jquery.js'),
          path.join(bowerRoot, '/angular-route'),
          path.join(bowerRoot, '/angular-ui-router'),
          path.join(bowerRoot, '/angular-sanitize'),
          path.join(bowerRoot, '/angular-ui-select'),
          path.join(bowerRoot, '/angular-mocks'),
          path.join(bowerRoot, '/angular')
        ],
        preLoaders: [
            { test: /\.js$/, loader: 'baggage?[file].html' },
            {test:    /\.js$/, exclude: /node_modules/, loader: 'jscs-loader'},
            {test: /\.js$/, loader: 'eslint', include: path.resolve('src')}
        ],

        loaders: [
            // require('./orders.orders.tpl.html');
            // templateUrl: 'orders.orders.tpl.html',
            {test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]'},
            // var templateUrl = require('ngtemplate!html!./test.html');
            // templateUrl: templateUrl
            { test: /\.html$/, loader: "ngtemplate?relativeTo=" + __dirname + "!html" },
            { test: /\.json$/, loader: "json" },
            {
            test: /\.html$/,
            loader: 'file?name=templates/[name]-[hash:6].html'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file?name=img/[name].[ext]' // inline base64 URLs for <=10kb images, direct URLs for the rest
            }
            //.css 文件使用 style-loader 和 css-loader 来处理
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            //var bourbon = require('node-bourbon').includePaths;
            { test: /\.scss$/, loader: 'style!css!autoprefixer!scss?sourceMap&indentedSyntax=true'},
            {test: /\.s?css$/, loader: 'style!css!sass?includePaths[]=' + bourbon },
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader", { publicPath: "../" })
            // node-sass Values: `nested`, `expanded`, `compact`, `compressed`
            loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true')

            , {test: /\.styl$/, loader: 'style!css!stylus'}
            {test: /\.ts(x?)$/, loader: 'ts-loader?root='},
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                query: {
                    'ignoreDiagnostics': [
                        2403, // 2403 -> Subsequent variable declarations
                        2300, // 2300 -> Duplicate identifier
                        2374, // 2374 -> Duplicate number index signature
                        2375  // 2375 -> Duplicate string index signature
                    ]
                },
                exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!less?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
            },
            // /src\/lib/, !babel
            {test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate'},
            {test: /\.html$/, loader: 'raw'},
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
            //.js 文件使用 jsx-loader 来编译处理
            // "include" is commonly used to match the directories
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            loaders: ["ng-annotate", 'babel?presets[]=es2015,plugins[]=add-module-exports'],
            // http://survivejs.com/webpack/advanced-techniques/configuring-react/
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'jsx?harmony'],
                loaders: ['react-hot', 'babel'],
                include: [
                    path.resolve(__dirname, "app/src"),
                    path.resolve(__dirname, "app/test")
                ],
                query: {
                    presets: ['es2015', 'react']
                }

            },
            // coffee-script, coffee-loader
            { test: /\.coffee$/, loader: "coffee" }
            {
                loader : 'babel-loader',
                loader: "ng-annotate?add=true!babel",
                // "exclude" should be used to exclude exceptions
                // exclude: /(node_modules|bower_components)/,
                exclude: [
                    //在node_modules的文件不被babel理会
                    path.resolve(__dirname, 'node_modules'),
                ],
                include: [
                    //指定app这个文件里面的采用babel
                    path.resolve(__dirname, 'app'),
                ],
                test: /\.jsx?$/,
                test: /\.(es6|js)$/,
                // http://babeljs.io/docs/usage/options/
                // http://babeljs.io/docs/plugins/transform-runtime/
                query : {
                    plugins: ['transform-runtime', "add-module-exports"],
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.htc$/, //ie8的部分css3的修复
                loader: 'file-loader?name=pie/[name].[ext]'
            },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'url-loader?limit=8192&name=build/[name].[ext]'
                loader: 'file?name=[path][name].[hash].[ext]',
                loader: [
                    'image?{bypassOnDebug: true, progressive:true, \
                      optimizationLevel: 3, pngquant:{quality: "65-80"}}',

                    'url?limit=10000&name=img/[path][hash:8].[name].[ext]',
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url',
                query: {
                    prefix: 'font/',
                    limit: 50000,
                    mimetype: 'application/font-woff',
                    name: './fonts/[hash:8].[name].[ext]'
                }
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url"
                query: {
                    limit: 10000,
                    mimetype: 'application/octet-stream'
                }
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url"
                query: {
                    limit: 10000,
                    mimetype: 'image/svg+xml'
                }
            },
            // https://github.com/halt-hammerzeit/webpack-isomorphic-tools
            // var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
            // var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));
            {
                test: webpackIsomorphicToolsPlugin.regular_expression('images'),
                loader: 'url-loader?limit=10240'
            }

         // {
         //      //文件加载器，处理文件静态资源
         //      test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         //      loader: 'file-loader?name=./fonts/[name].[ext]'
         //  }
            {test: /\.(tpl|ejs)$/, loader: 'ejs'},
            {
                //html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
                //比如你配置，attrs=img:src img:data-src就可以一并处理data-src引用的资源了，就像下面这样
                test: /\.html$/,
                loader: "html?attrs=img:src img:data-src"
            }


        ]
    }
    postcss: [
        require('autoprefixer')({ browsers: ['last 2 versions'] })
        require('autoprefixer-core'),
        require('postcss-color-rebeccapurple')
    ],
    // webpack在构建包的时候会按目录的进行文件的查找，
    // resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀：
    // resolve: {
    //     // Default: ["web_modules", process.cwd() +"node_modules"]
    //     //查找module的话从这里开始查找
    //     root: [ path.resolve('./app/modules'), path.resolve('./vendor/modules')],
    //     alias: {
    //         'jquery': path.resolve(__dirname, 'public/lib/jquery.js'),
    //     }
    // },
    // https://segmentfault.com/a/1190000004284681
    // 在模块开发过程中，我们可能会对可以复用的组件封装成一个可被git管控的模块，
    // 并在引用的过程中采用带[版本号的方式引用]，这就要求我们在webpack.config.js中添加相关alias配置
    // 深入源码之ModuleAliasPlugin if(request.request != aliasValue)
    ,resolve: {
      // 查找module的话从这里开始查找，需要绝对路径
        root: [
            path.resolve('./app/modules'),
            path.resolve('./vendor/modules')
        ],
        // 构建类似node 的模块查询层次            ，只是目录名。平时不用。
        modulesDirectories: ["mydir", 'node_modules', 'components']

        // 没在 rroot 和 modulesDirectories 里找到，则从这里查找。
        fallback: path.join(__dirname, "node_modules") ,
        // 这个会覆盖默认的，所以要全在项目
        extensions: ['', '.json', '.js', '.jsx','css' , 'less', '.coffee','.scss', '.png', '.jpg', '.jpeg', '.gif']
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            'angular': pathToAngular,
            AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js',
            'react-dom' : './libs/react-dom.js',
            'react' : './libs/react.js',
            'mod/slider': '/path/mods/mod/slider/0.0.5',
            'mod/footer': '/path/mods/mod/footer/0.0.2',
            'mod/slider/0.0.3': '/path/mods/mod/slider/0.0.3',
            'mod/header': '/path/mods/mod/header/0.0.1',
            'mod/slider/0.0.1': '/path/mods/mod/slider/0.0.1'
        }
    },
    // 用于 loader 的加载，一般不写，用于组织 loader
    resolveLoader: { fallback: path.join(__dirname, "node_modules") }
    singleRun: true,
    plugins: [
      new BrowserSyncPlugin({
            host: '127.0.0.1',
            port: 9090,
            proxy: 'http://127.0.0.1:9000/',
            logConnections: false,
            notify: false
          }, {
            reload: false
          })
        // 生成html
    HtmlWebpackPlugin()
    // 报错但不退出webpack进程
    new webpack.NoErrorsPlugin(),
        webpackIsomorphicToolsPlugin(),
        // var CleanWebpackPlugin = require('clean-webpack-plugin');
        new CleanWebpackPlugin([path], {
            // Without `root` CleanWebpackPlugin won't point to our
            // project and will fail to work.
            root: process.cwd(),
            "verbose": true, // Write logs to console.
            "dry": false, // Do not delete anything, good for testing.
        })
        // bower.json resolving 替换上下文的插件
        new webpack.ResolverPlugin([
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ], ['normal', 'loader']),

        // disable dynamic requires
        new webpack.ContextReplacementPlugin(/.*$/, /a^/),

        new webpack.DefinePlugin({
          'INCLUDE_ALL_MODULES': function includeAllModulesGlobalFn(modulesArray, application) {
            modulesArray.forEach(function executeModuleIncludesFn(moduleFn) {
                moduleFn(application);
            });
          },
          ENVIRONMENT: JSON.stringify(nodeEnvironment)
        }),
        new webpack.DefinePlugin({
            __CLIENT__: true,
            __SERVER__: false,
            __DEVELOPMENT__: false,
            __DEVTOOLS__: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                // Useful to reduce the size of client-side libraries, e.g. react
                NODE_ENV: JSON.stringify('production')
            }
        }),
        // 打包进了bundle 所以不用引入了
        // 自动加载模块，当配置（$:'jquery'）例如当使用$时，自动加载jquery
        new webpack.ProvidePlugin({ //加载jq
            $: 'jquery',
            jQuery: "jquery",
            "window.jQuery": "jquery",
            React: "react/addons",
            "window.React": "react/addons",
            'angular': 'exports?window.angular!bower/angular',

        }),
        // 注意下面的 exports 定义不当，如果没引用在页面，错误很难跟踪
        new webpack.ProvidePlugin({
          'angular': 'exports?window.angular!bower/angular',
          '_': 'lodash'
        }),
        // 多个 html共用一个js文件(chunk)
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
            chunks: ['index','list','about'], //提取哪些模块共有的部分
            minChunks: 3 // 提取至少3个模块共有的部分
        }),
        new webpack.optimize.CommonsChunkPlugin('react', 'react.js'),
        // 从 js 中分离出样式到单独的文件
        new ExtractTextPlugin('css/[name].css',{
            allChunks: true
        }), //单独使用link标签加载css并设置路径，相对于output配置中的publickPath
        // HtmlWebpackPlugin: Simplifies creation of HTML files to serve your webpack bundles : https://www.npmjs.com/package/html-webpack-plugin
        //HtmlWebpackPlugin，模板生成相关的配置，每个对于一个页面的配置，有几个写几个
        //插入的模板位置不能有html的注释，否则不能输出css

        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            filename: './view/about.html', //生成的html存放路径，相对于path
            template: './src/view/about.html', //html模板路径
            inject: true, //js插入的位置，true/'head'/'body'/false
            hash: true, //为静态资源生成hash值 vendor.bundle.js?2b2d63597c1b36a1c299
            chunks: ['vendors', 'about'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
              // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
        // Only emit files when there are no errors
        new webpack.NoErrorsPlugin(),
        // OccurenceOrderPlugin: Assign the module and chunk ids by occurrence count. : https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
        // 根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小，该模块推荐使用
        new webpack.optimize.OccurenceOrderPlugin(),

        // Deduplication: find duplicate dependencies & prevents duplicate inclusion : https://github.com/webpack/docs/wiki/optimization#deduplication
        // 打包的时候删除重复或者相似的文件
        new webpack.optimize.DedupePlugin()
        // 把多个小模块进行合并，以减少文件的大小,根据chars大小，如果小于设定的最小值，就合并这些小模块，以减少文件的大小
        new webpack.optimize.MinChunkSizePlugin(),
        // 使用ng-annotate来管理AngularJS的一些依赖
        new webpack.optimize.ngAnnotatePlugin(),
        // 限制打包文件的个数
        new webpack.optimize.LimitChunkCountPlugin(),
        new webpack.HotModuleReplacementPlugin() //热加载
        // Reference: https://github.com/kevlened/copy-webpack-plugin
        new CopyWebpackPlugin([{
            from: __dirname + '/src/public'
        },{from: './index.html'}]),
        // ignore dev config 不打包匹配文件
        new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

        // http://www.zcfy.cc/article/long-term-caching-of-static-assets-with-webpack-1204.html 缓存
        // 也可以使用 https://www.npmjs.com/package/webpack-manifest-plugin
        // 或者 https://www.npmjs.com/package/assets-webpack-plugin 导出 JSON 文件。
        function() {
            this.plugin("done", function(stats) {
                require("fs").writeFileSync(
                    path.join(__dirname, "...", "stats.json"),
                    JSON.stringify(stats.toJson()));
            });
        }
        // 在我们的配置下的 webpack-manifest-plugin 的一个输出看起来是：

        {
          “main.js”: “main.155567618f4367cd1cb8.js”,
          “vendor.js”: “vendor.c2330c22cd2decb5da5a.js”
        }
        // 或者你的应用不依赖于任何服务端渲染技术，生成一个单独的 index.html 就足够了，那么建议使用下面两个称赞的插件，https://github.com/ampedandwired/html-webpack-plugin
        // 和 https://github.com/szrenwei/inline-manifest-webpack-plugin，它们会显著地简化设置。
        // 问题与之前相同：当我们更改了代码的任何一部分，即使剩下的文件内容没有被修改，
        // 入口也会被更新以放入新的清单。这样反过来也就导致新的哈希值，影响了长期缓存。
        // 为了修复这个问题，我们应该使用 chunk-manifest-webpack-plugin 插件来把清单导出到单独的 JSON 文件中。
        var ManifestPlugin = require('webpack-manifest-plugin');
        var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
        var WebpackMd5Hash = require('webpack-md5-hash');
        new WebpackMd5Hash(),
        new ManifestPlugin(),
        new ChunkManifestPlugin({
          filename: "chunk-manifest.json",
          manifestVariable: "webpackManifest"
        }),
        new webpack.optimize.OccurenceOrderPlugin()
        // 第二个问题是 webpack 如何获取模块：默认地对于同样的依赖集合，模块在包中的顺序不是确定的。意思是：在两次构建之间，模块可能获取到不同的标识符，导致不同的内容，也就有了不同的哈希值。这是出现在 Github 上的 issue，建议使用 OccurenceOrderPlugin 来解决这个问题。
        // 进度条
        new NyanProgressPlugin()

        // 匹配resourceRegExp，替换为newResource
        NormalModuleReplacementPlugin(),
        // 替换上下文的插件
        ContextReplacementPlugin(),
        // 预加载的插件，提高性能
        PrefetchPlugin()
    ],
    tslint: {
        emitErrors: true,
        failOnHint: false
    },
        //使用webpack-dev-server，提高开发效率
    devServer: {
        colors: true,
        progress: true,
        host: 'localhost',
        port: 9090, //默认8080
        inline: true, //可以监控js变化
        hot: true, //热启动
        displayCached: true,
        displayErrorDetails: true,
        contentBase: 'src',
        publicPath: '/__build__',
        proxy: {
            "*": "http://localhost:54999"
        },

    },
    // 调试映射生成，直接影响生成代码的形式 eval 还是 源码
    devtool: "source-map",
    devtool: 'eval-source-map',
        // Include polyfills or mocks for various node stuff:
    node: {
        console: false,
        global: true,
        process: true,
        Buffer: true,
        __filename: "mock",
        __dirname: "mock",
        setImmediate: true
    }
};
---------------------
去除了 sourceMap 通过加 resolve-url?sourceMap
# Webpack loaders, order matters
styleLoaders:
  - style?outputStyle=compact
  - css?sourceMap
  - resolve-url?sourceMap
  - sass?sourceMap&outputStyle=compact
-------------
var nodeModulesDir = path.join(__dirname, '../node_modules');

var deps = [
  'angular/angular.min.js',
  'moment/min/moment.min.js',
  'underscore/underscore-min.js',
];
deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});
-----
var nodeEnvironment = process.env.NODE_ENV
switch (nodeEnvironment) {
  case 'production':
    config.output.path = __dirname + '/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                // Mangle matching properties
                // props: /matching_props/,
                // Don't mangle these
                except: [
                    'Array', 'BigInteger', 'Boolean', 'Buffer'
                ]
            }
        }));
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    config.plugins.push(new webpack.optimize.CommonsChunkPlugin({name: 'vendor', minChunks: Infinity}));

    config.output.filename = '[name].js';

    config.entry = {
      bundle: './index.js',
      vendor: ['angular', 'angular-ui-router', 'lodash']
    }

    break;

  case 'test':
    config.entry = './index.js';
    break;

  case 'development':
    config.entry = ['./index.js', 'webpack/hot/dev-server'];
    break;

  default:
    console.warn('Unknown or Undefigned Node Environment. Please refer to package.json for available build commands.');
}
-----------------
imports-loader

This loader allows you to put some modules or arbitrary JavaScript onto a local variable of the file.

Examples:
file.js expect a global variable $ and you have a module jquery that should be used.

require("imports?$=jquery!./file.js")
file.js expect its configuration on a global variable xConfig and you want it to be {value:123}.

require("imports?xConfig=>{value:123}!./file.js")
file.js expect that this is the global context.

require("imports?this=>window!./file.js") or require("imports?this=>global!./file.js")
--------------
exports-loader

This loader exports variables from inside the file.

Examples:
The file sets a variable in the global context with var XModule = ....

var XModule = require("exports?XModule!./file.js")
The file sets multiple variables in the global context with var XParser, Minimizer.

var XModule = require("exports?Parser=XParser&Minimizer!./file.js"); XModule.Parser; XModule.Minimizer
The file sets a global variable with XModule = ....

require("imports?XModule=>undefined!exports?XModule!./file.js") (import to not leak to the global context)
The file sets a property on window window.XModule = ....

require("imports?window=>{}!exports?window.XModule!./file.js")
----------
expose-loader

This loader exposes the exports to a module to the global context.
require('expose?$!expose?jQuery!jquery');
If you are planning to use a lot of global namespaces,
consider implementing something like Babel runtime to your project.
---------
If you use "-" or "." in your module names, you may have a problem:
convert "imports?foo-bar" to "imports?fooBar=foo-bar".
----------
  "scripts": {
    "prestart": "gulp",
    "build": "webpack",
    "dev": "webpack-dev-server --inline --devtool eval --progress --colors --line --hot",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  --
  context: __dirname + '/src',
  entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'src/app.js')
  ],
  output: {
      // path: path.resolve(__dirname, 'build'),
      // filename: 'bundle.js'
      path: path.join(__dirname, "build"),
      // publicPath: "build/",
      filename: "bundle.js"
  }

webpack.IgnorePlugin 把不想 bundle 的文件排除掉
单独打包样式：
npm install extract-text-webpack-plugin --save-dev

----------error:
----------------------------
ReferenceError: webpackJsonp is not defined
用了CommonsChunkPlugin生成了公共文件，但是页面还没有引用这个公共文件

function getTemplate(templateName) {
    return require("./templates/"+templateName);
}
console.log(getTemplate("a"));
console.log(getTemplate("b")());

 __webpack_require__(...) is not a function
When dealing with es6 modules, you should use require(...).default
For instance:
const angular = require('angular');
const ngModule = angular.module('app', []);
require('./directives').default(ngModule);
// or
var kgdir = require('./directives').default;
kgdir(ngModule);

https://github.com/webpack/webpack/issues/1685
https://github.com/59naga/babel-plugin-add-module-exports
query: {
    presets: ['es2015'],
    plugins: [
      "add-module-exports"
    ]
}
---------
// babel --presets react src --watch --out-dir build
// 在 packages.json 中的scripts下加上：
// "pack": "webpack --progress --colors --watch"
// 输入 npm run-script pack 来执行
-----------------------------------------------------
// app.js
var http = require('http');
var koa = require('koa');
var serve = require('koa-static');

var app = koa();
var debug = process.env.NODE_ENV !== 'production';
// 开发环境和生产环境对应不同的目录
var viewDir = debug ? 'src' : 'assets';

// 处理静态资源和入口文件
app.use(serve(path.resolve(__dirname, viewDir), {
    maxage: 0
}));

app = http.createServer(app.callback());

app.listen(3005, '0.0.0.0', function() {
    console.log('app listen success.');
});
// app.js
var router = require('koa-router')();
var routes = require('./routes');
routes(router, app);
app.use(router.routes());
// routes.js
var proxy = require('koa-proxy');
var list = require('./mock/list');
module.exports = function(router, app) {
    // mock api
    // 可以根据需要任意定制接口的返回
    router.get('/api/list', function*() {
        var query = this.query || {};
        var offset = query.offset || 0;
        var limit = query.limit || 10;
        var diff = limit - list.length;

        if(diff <= 0) {
            this.body = {code: 0, data: list.slice(0, limit)};
        } else {
            var arr = list.slice(0, list.length);
            var i = 0;

            while(diff--) arr.push(arr[i++]);

            this.body = {code: 0, data: arr};
        }
    });

    // proxy api
    router.get('/api/foo/bar', proxy({url: 'http://foo.bar.com'}));
}

// 将webpack开发服务器以中间件的形式集成到local webserver，不需要cli方式启动（少开一个cmd tab）：
// app.js
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpack = require('webpack');
var webpackConf = require('./webpack.config');

app.use(webpackDevMiddleware(webpack(webpackConf), {
    contentBase: webpackConf.output.path,
    publicPath: webpackConf.output.publicPath,
    hot: true,
    stats: webpackConf.devServer.stats
}));
----------------------------------------------------------------
webpack解决了资源依赖的问题，这使得封装组件变得很容易，例如：

// js/components/component-x.js
require('./component-x.css');

// @see https://github.com/okonet/ejs-loader
var template = require('./component-x.ejs');
var str = template({foo: 'bar'});

function someMethod() {}

exports.someMethod = someMethod;
使用：// js/a.js
import {someMethod} from "./components/component-x";
someMethod();
---------------------
由于入口文件是手动使用script引入的，在webpack编译之后入口文件的名称和路径一般会改变，即开发环境和生产环境引用的路径不同：

// 开发环境
// a.html
// <script src="/__build/vendors.js"></script>
// <script src="/__build/a.js"></script>
// 生产环境
// a.html
// <script src="http://cdn.site.com/js/460de4b8.vendors.min.js"></script>
// <script src="http://cdn.site.com/js/e7d20340.a.min.js"></script>
webpack提供了HtmlWebpackPlugin插件来解决这个问题，HtmlWebpackPlugin支持从模板生成html文件，
生成的html里边可以正确解决js打包之后的路径、文件名问题，配置示例：

// webpack.config.js
plugins: [
    new HtmlWebpackPlugin({
        template: './src/a.html',
        filename: 'a',
        inject: 'body',
        chunks: ['vendors', 'a']
    })
]

这里资源根路径的配置在output项：
// webpack.config.js
output: {
    publicPath: debug ? '/__build/' : 'http://cdn.site.com/'
}

在项目开发中，可能会有许多额外的任务需要完成，
比如对于使用compass生成sprites的项目，因目前webpack还不直接支持sprites，所以还需要compass watch，
再比如工程的远程部署等，所以需要使用一些构建工具或者脚本的配合，打通研发的链路。
----------------------
new AggressiveMergingPlugin({
    minSizeReduce: 1.5,
    moveToParents: true
})
common.js + a, common.js + b, a + b, pageA, pageB, pageC
common.js, a + b, pageA + a, pageB + b, pageC
块组的合并策略，有利于减少总共的尺寸。非公共模块可以被移动父级模块。

new webpack.optimize.DedupePlugin()
对于输出的模块进行去重，只用于产品环境。不改语义，不对实例作用。

对文件单独打包
require("bundle!./file.js")(function(fileJsExports) {
    console.log(fileJsExports);
});
-------------------------
不执行模块代码，只包含，暴露函数用于内部 require
entry: {
    alpha: ["./alpha", "./a"],
    beta: ["./beta", "./b"]
},
new webpack.DllPlugin({
    path: path.join(__dirname, "js", "[name]-manifest.json"),
    name: "[name]_[hash]"
})
引用上面生成的 dll.js

new webpack.DllReferencePlugin({
    context: path.join(__dirname, "../js"),
    // an object containing content and name
    manifest: require("../js/alpha-manifest.json")
}),
new webpack.DllReferencePlugin({
    // prefix which is used for accessing the content of the dll
    scope: "beta", // commonjs not used
    sourceType:"commonjs2"
    manifest: require("../js/beta-manifest.json")
})
sourceType (optional): the type how the dll is exposed (defaults to "var") (see also externals)
Using dlls via <script> tags
Dll bundle: output.library = "[name]_[hash]"
output.libraryTarget = "var"
DllPlugin.name = "[name]_[hash]"
Dll consumer: DllReferencePlugin.sourceType = "var"
---
Using dlls via node.js
Dll bundle: output.libraryTarget = "commonjs2"
Dll consumer: DllReferencePlugin.sourceType = "commonjs2"
DllReferencePlugin.name = "./path/to/dll.js"
=-------------------------
url-loader引入多张图片
const requireContext = require.context("./images", true, /^\.\/.*\.png$/);
const images = requireContext.keys().map(requireContext);
--------------------------
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    filename: "vendor.js",
    minChunks: Infinity,
    // create a additional async chunk for the common modules
    // which is loaded in parallel to the requested chunks
    async: true
});
output: {
    path: path.join(__dirname, "js"),
    publicPath: 'js/',
    filename: "[name].js",
    chunkFilename: "[id].chunk.js",
    // libraryTarget : "commonjs2"
},
new webpack.optimize.CommonsChunkPlugin(["pageC", "pageD"], null, false, function(module, count) {
    // move only module "b"
    return /b\.js$/.test(module.identifier());
}),
new webpack.optimize.CommonsChunkPlugin("admin-commons.js", ["adminPageA", "adminPageB"]),
new webpack.optimize.CommonsChunkPlugin("commons.js", ["pageA", "pageB", "admin-commons.js"], 2),

公共引用里面的css会被从commons.js里移入到 commons.css 里面
multiple-entry-points-commons-chunk-css-bundle
new webpack.optimize.CommonsChunkPlugin("commons", "commons.js", ["A", "B"]),

new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity}),
new CommonsChunkPlugin({name: 'common', filename: 'common.js', minChunks: 2, chunks: ['app', 'vendor']}),
----------
new I18nPlugin(
    languages["de"]
)
var I18nPlugin = require("i18n-webpack-plugin");
var languages = {
    "en": null,
    "de": require("./de.json")
};
name: "de",
output->filename: "de.[name].bundle.js",
------------
new webpack.dependencies.LabeledModulesPlugin()
Support Labeled Modules.

module.exports =
webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

    var __WEBPACK_LABELED_MODULE__ = __webpack_require__(1), increment = __WEBPACK_LABELED_MODULE__.increment;
    var a = 1;
    console.log( increment(a) ); // 2

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

    var __WEBPACK_LABELED_MODULE__ = __webpack_require__(2), add = __WEBPACK_LABELED_MODULE__.add;
    exports: exports["increment"] = function increment(val) {
        return add(val, 1);
    };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

    exports: exports["add"] = function add() {
        var sum = 0, i = 0, args = arguments, l = args.length;
        while (i < l) {
            sum += args[i++];
        }
        return sum;
    };

/***/ }
]);
--------
loader.js
module.exports = function(content) {
    return "exports.answer = 42;\n" + content;
}
file.js
exports.foo = "bar";
// use our loader， file.js 作为输入传到 loader.js
console.dir(require("./loader!./file"));

exports.answer = 42;
exports.foo = "bar";
--------
定义内部全局变量用于构建和日志
new webpack.DefinePlugin({
    ENV: JSON.stringify("mobile")
})

https://github.com/kenberkeley/react-demo
路径别名 的定义位于 build/webpack.base.conf.js，好处就是引入与重构都很方便

    例如，在某组件中，引入 userService 需要 import userService from '../../../services/userService'
    但有了路径别名后，只需要 import userService from 'SERVICE/userService'
    相比于 AngularJS 中的依赖注入，这种方式依赖于构建工具，显得更为简单

    您可能会说，Webpack 只需要设定了 root属性为 src/
    就可以 import userService from 'services/userService'
    但在这里其实是会引起歧义的（不过这属于强迫症的范畴。。。）
    例如，import createBrowserHistory from 'history/lib/createBrowserHistory'
    您可能会觉得这是 src/history/lib/createBrowserHistory.js
    但实际上 history 是一个 npm package
    同样地，您又怎么知道 services 不是一个 npm package？
    而且重构之后，文件夹的变动会导致相对路径的变化，services/ 目录未必仍在 src/ 下
    因此，路径别名相当有必要。其常量的形式，让人一看就知道不是一个 npm package

开发环境全局变量，由 webpack.DefinePlugin 提供（详见 build/webpack.base.conf.js）

    默认有 __DEV__ / __PROD__ / __COMPONENT_DEVTOOLS__ / __WHY_DID_YOU_UPDATE__ 四个全局变量
    若要继续添加，则还需要在 .eslintrc 中 globals 同步写入

    在此需要提醒，在 package.json 中设置 NODE_ENV 要注意末尾空格的问题
    最好就是使用前 trim 一下：process.env.NODE_ENV.trim()

    拓展阅读：解读 UglifyJS
    看看生产环境下编译 if (__PROD__) { ... } => if (true) { ... } 后 UglifyJS 会如何处理
-------------------------------------------------------
AggressiveSplittingPlugin
拆分打包的文件到更多chunks, 每个 chunk 到指定 maxSize。

ZopfliWebpackPlugin
Node.js 的Zopfli 压缩库绑定.

BannerPlugin
添加 banner 到生成的 chunk 顶部.

DefinePlugin
创建全局常量

DllPlugin 和 DllReferencePlugin 用一种比较激烈的方式拆分打包好的代码提高构建效率.
DllPlugin创建 dll-only-bundle 生成 manifest.json 文件, 供 DllReferencePlugin 映射依赖。
DllReferencePlugin
引用 dll-only-bundle(s) 预构建依赖.


EnvironmentPlugin
快捷方式使用 DefinePlugin 在 process.env 的键上.
DotenvPlugin
通过 .env 文件在项目中创建环境变量，安全的应用方式
https://github.com/mrsteele/dotenv-webpack

babel-minify 压缩es6+ 代码，也可以转换到 es5压缩。
https://github.com/babel/minify