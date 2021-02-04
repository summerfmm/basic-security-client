/**
 * webpack module 路径解析规则，即 import * from 'path' 中的 path 的解析规则
 *
 * webpack 路径分为三种： 绝对路径，相对路径，模块路径
 *  import Default from '/home/kasei/Desktop/file'       # 绝对路径
 *  import Default from './file'                         # 相对路径
 *  import Default from '../file'                        # 相对路径
 *  import Default from 'module/lib/file'                # 模块路径，即：不是 ., .., / 三个字符开头的路径都认为是 module path
 *
 *  模块路径根据 webpack.config.babel.js 中配置的 resolve 来解析
 *
 *
 *
 * */
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';

/**
 * __dirname: webpack.config.babel.js 所在的目录
 * */
export default {
    context: path.resolve(__dirname, ''), // webpack 解析 入口点 和 加载模块文件 的 base directory
    entry: './src/index.js', // webpack 构建当前 module 依赖图谱的入口
    mode: 'development', // 开发模式 webpack 根据不同的模式做不同优化
    devtool: 'source-map', // 用于配置 source-map 文件生成规则
    // webpack bundle 之后，产物相关的配置
    output: {
        path: path.resolve(__dirname, 'dist'), // 产物保存路径
        filename: '[contenthash:4].bundle.js', // 产物名称
    },
    // 用于配置 webpack 如何对待不同类型的 module
    module: {
        // 用于自定义 webpack 针对不同资源，创建 module 的过程
        rules: [
            // 配置如何加载 js 文件
            {
                test: /.js$/,
                use: 'babel-loader',
                exclude: /node_modules/, // 排除掉 node_modules 模块下的代码，防止被 babel 重复编译
            },
            // 配置如何加载 css 文件
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 配置如何加载 图片 文件
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader'
            },
            // 配置如何加载 字体 文件
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            // 配置如何加载 .vue 文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

        ]
    },
    // 插件，用于扩展 webpack 的功能
    plugins: [
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true, // true 开启 Vue Optional API
            __VUE_PROD_DEVTOOLS__: false, // true 表示在 production 中开启 devtools 支持
        }),
        /* 用于在 bundle.js 文件名包含 hash 值的时候，动态插入正确的 bundle.js 名称到指定的 index.html 中
         * html-webpack-plugin 会把全部 entry 的输出都集中到一个 .html 里，只适合单页应用
         * 所以如果是多页应用，则需要使用 multipage-webpack-plugin 替代 html-webpack-plugin
         * */
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'), // 配置需要动态添加 <script> 标签的 html 路径
        }),
        /* 用于自动清理 dist 目录 */
        new CleanWebpackPlugin(),
        /* 用于扩展 webpack 使其能够编译 .vue 文件 */
        new VueLoaderPlugin(),
    ],
    // 配置 webpack 如何加载 module
    resolve: {
        /* 给 import xxx from 'path' 中的 path 取别名
         * 修改别名后，需要在 idea
         *  File -> Settings -> Languages & Frameworks -> JavaScript -> Webpack
         * 中配置 webpack.config.babel.js 的路径，否则别名会提示找不到路径
         * */
        alias: {
            /* 将 ./src 目录取别名为 srcDir 模块，
             * 这样在 import src 目录下的文件时，可以使用模块路径，即：import Default from 'srcDir/...'
             * 这样可以避免相对路径, 避免出现类似 ../../../file 形式的路径
             * */
            srcDir: path.resolve(__dirname, 'src/'),
            // 用于开启 vue 的运行时编译
            // vue: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js')
            vue: '@vue/runtime-dom',

        },
    },
    // 开发服务器
    devServer: {
        contentBase: [path.join(__dirname, './dist')],
        compress: false,
        port: 8416
    },
};
