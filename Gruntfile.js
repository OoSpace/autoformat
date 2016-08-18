'use strict';
module.exports = function (grunt) {//所有的代码必须放在这个里面
  // 项目配置
  grunt.initConfig({//初始化配置

    //任务一：压缩合并常用js库
    lib: grunt.file.readJSON('json/lib.json'),//读取json文件配置信息
    uglify: {//任务名，看最后一行代码就明白了
      options: {//文件的一些描述信息，可按需配置
        banner: '/*! <%= lib.file %> \n<%= lib.author %> \n<%= lib.description %> \n<%= lib.version %> \n<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        //需要压缩合并的文件目录src,后面拼接的是上面json文件中file字段
        //src: 'src/<%=pkg.file %>.js',
        //多个文件
        src: ['src/lib/jquery-1.11.3.js','src/lib/backbone.js', 'src/lib/underscore.js','src/lib/swiper.min.js','src/lib/zmd5.js'],
        //也可以
        //src: ['src/<%=pkg.file %>.js', 'src/<%=pkg.file1 %>.js'],
        //压缩合并后放置的文件目录dest
        dest: 'js/<%= lib.file %>.min.js'
      }
    },

    //任务二：压缩合并主模块
    main: grunt.file.readJSON('json/main.json'),//读取json文件配置信息
    minify: {//任务名，看最后一行代码就明白了
      options: {//文件的一些描述信息，可按需配置
        banner: '/*! <%= main.file %> \n<%= main.author %> \n<%= main.description %> \n<%= main.version %> \n<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        //需要压缩合并的文件目录src,后面拼接的是上面json文件中file字段
        src: 'src/<%=main.file %>.js',
        //多个文件
        //src: ['src/lib/jquery-1.11.3.js','src/lib/backbone.js', 'src/lib/underscore.js','src/lib/swiper.min.js','src/lib/zmd5.js'],
        //也可以
        //src: ['src/<%=pkg.file %>.js', 'src/<%=pkg.file1 %>.js'],
        //压缩合并后放置的文件目录dest
        dest: 'js/<%= main.file %>.min.js'
      }
    }

  });

  // 加载提供"uglify"任务的插件 //调用压缩合并功能需要的模块
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 添加任务一
  //grunt.registerTask('libs', ['libs']);

  // 添加任务二
  //grunt.registerTask('default', ['mains']);

  grunt.registerTask('default', ['uglify']);

}