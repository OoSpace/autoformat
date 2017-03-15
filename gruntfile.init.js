'use strict';

module.exports = function (grunt) {

    // Project configuration.

    grunt.initConfig({
        releaseDir: '../build_artifacts/',
        jshint: {
            files: ['gruntfile.js', '../js/app.js', '../js/**/*.js'],
            options: {
                // options here to override JSHint defaults
                curly: false,
                eqeqeq: false,
                eqnull: false,
                browser: false,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        clean: {
            output: {
                files: [{
                    src: '../build_artifacts/'
                }]
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
            },
            combine: {
                files: {
                    '../build_artifacts/main.min.css': ['../css/reset.css', '../css/mobile-nav.css', '../css/common.css', '../css/color.css', '../css/icon.css', '../css/page.css', '../css/loading.css', '../css/modals.css', '../css/input-clear.css', '../css/banner.css']
                }
            }
        },
        copy: {
            img: {expand: true, src: '../img/*', dest: '../build_artifacts/img/'},
            html: {expand: true, src: '../index.html', dest: '../build_artifacts/index.html'}
        },
        browserify:{
            js: {
                src:"../js/app.js",
                dest:'../js/bundle.js'
            }
        },
        uglify: {
            // options: {
            //     report: 'min',
            //     mangle: false
            // },
            bundle: {
                files: {
                    '../build_artifacts/js/main.min.js': ['../js/bundle.js', '../js/zepto.js']
                }
            },
            angular: {
                files: {
                    '../build_artifacts/js/libs/angular.min.js': ['../js/libs/angular.js']
                }
            }
            /*,
             release: {
             files: {
             //'../js/libs/bridge.js': ['../js/common/tc_bridge.js']//740版本
             // '../js/libs/bridge.js': ['../js/common/tc_bridge.1.5.1.js']//750版本
             //'../js/libs/bridge.js': ['../js/common/tc_bridge.2.0.7.js']//807版本
             // '../js/libs/bridge.js': ['../js/common/tc_bridge.2.1.0.js']//810版本
             // '../js/libs/bridge.js': ['../js/common/tc_bridge.2.1.4.js']//814版本
             '../build_artifacts/js/libs/bridge.min.js': ['../js/common/tc_bridge.2.2.5.js']//825版本
             }
             }*/
        },

        htmlmin: {
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true, //启用动态扩展
                    cwd: '../partials/', //批匹配相对lib目录的src来源
                    src: '*.html',
                    dest: '../build_artifacts/partials/' //目标路径前缀
                }],
            }
        },
        compress: {
            main: {
                files: [
                    /*{src: ['path/!*'], dest: 'internal_folder/', filter: 'isFile'}, //path下所有的js*/
                    {src: ['../build_artifacts/**'], dest: '../release.zip'}, // path下的所有目录和文件
                ]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['../build_artifacts/**'],
                },
                options: {

                    watchTask: true,
                    ghostMode: {
                        clicks: true,
                        scroll: true,
                        links: true,
                        forms: true
                    },
                    server: {
                        baseDir: "../build_artifacts/",
                        //directory:true
                        host: "dev.ship.cn",
                        // proxy: 'mylaravel.com',
                        // port:''
                    },

                },
            },
            //配置https
            //https: true,
            //startPath: "../build_artifacts/index.html"
        },
        watch:{
            files:['../partials/*.html', '../*.html', '../js/*.js', '../js/libs/*.js', '../css/*.css','../grunt/Gruntfile.js'],
            tasks:['cssmin:combine','browserify', 'uglify', 'htmlmin','copy', 'compress']

        },
        bsReload: {
            all: {
                /*tasks:['cssmin:combine', 'uglify', 'htmlmin','copy', 'compress'],*/
                reload: true
            }
        }


    });

    /*============== 发布打包模块 ===================*/
    // require('load-grunt-tasks')(grunt); //自动加载所有模块
    //grunt.loadNpmTasks('grunt-contrib-qunit');  //html语法检查
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-jshint');     //检查js语法错误

    grunt.loadNpmTasks('grunt-contrib-uglify');  //压缩和合并css、js文件
    grunt.loadNpmTasks('grunt-contrib-cssmin');     //css压缩
    grunt.loadNpmTasks('grunt-contrib-htmlmin');  //html压缩
    /*============== 本地开发模块 ===================*/
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    //执行各模块的方法
    // this would be run by typing "grunt test" on the command line
    //grunt.registerTask('test', ['qunit']);
    // the default task can be run just by typing "grunt" on the command line


    /*默认命令 打包发布*/
    //grunt.registerTask('default', ['cssmin:combine', 'uglify', 'htmlmin'/*,'clean'*/,'copy','compress']);

    grunt.registerTask('develop', ['cssmin:combine','browserify', 'uglify', 'htmlmin','copy', 'compress', 'browserSync','watch']);

    //以下两个命令结果一样，只是发布的时候需要到config/index.js里面修改接口地址。待完善
    grunt.registerTask('advance', ['cssmin:combine','browserify', 'uglify', 'htmlmin','copy', 'compress', 'browserSync','watch']);
    grunt.registerTask('product', ['cssmin:combine','browserify', 'uglify', 'htmlmin','copy', 'compress', 'browserSync','watch']);

    grunt.registerTask('default');
};
