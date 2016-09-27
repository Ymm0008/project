/**
 * Created by feique on 16/9/18.
 */
/**
 * Created by feique on 16/8/15.
 */
module.exports=function (grunt) {
    var pkg=grunt.file.readJSON('package.json');
    grunt.initConfig({
        pkg:pkg,
        less:{
            development:{
                files:[{
                    expand:true,
                    cwd:'less',
                    src:['*.less'],
                    dest:'build',
                    ext:'.css'
                }]
            }
        },
        postcss: {
            options: {
                processors: [
                    require('postcss-px2rem')({remUnit: 75})
                ]
            },
            dist: {
                expand:true,
                flatten:true,
                src: 'finally/css/*.css',
                dest: 'css'
            }
        },

        // clean:['build'],
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: ['*.css'],
                    dest: 'finally/css',
                    ext: '.min.css'
                }]
            }
        },
        
        uglify: {
            options: {
                banner: '/*! ymm <%= pkg.name %> - <%= pkg.version %> -v ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: '*.js',
                    dest: 'finally/js',
                    ext: '-<%= pkg.version %>-<%= grunt.template.today("yyyy-mm-dd") %>.min.js'
                }]
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {expand: true, flatten: true,src: ['img/*'], dest: 'finally/img', filter: 'isFile'},
                    // includes files within path and its sub-directories
                    {expand: true, flatten: true, src: ['js/lib/*'], dest: 'finally/js/lib'},
        
        
                    // makes all src relative to cwd
        
                    // flattens results to a single level
                    {expand: true, flatten: true, src: ['*.html'], dest: 'finally/', filter: 'isFile'},
                ],
            },
        },
        
        usemin: {
            html: '*.html',
            options: {
                blockReplacements: {
                    css: function (block) {
                        var src=block.dest+"-"+pkg.version+"-"+grunt.template.today("yyyy-mm-dd")+
                            ".min.css";

                        return '<link rel="stylesheet" href="' + src + '">';
                    },
                    js: function (block) {
                        var src=block.dest+"-"+pkg.version+"-"+grunt.template.today("yyyy-mm-dd")+
                            ".min.js";

                        return '<script src="'+ src + '"></script>';
                    }
                }
            }
        }

    });
    require('load-grunt-tasks')(grunt);

    //grunt.registerTask('default',['less','postcss','clean','cssmin','uglify','copy','usemin'])
    grunt.registerTask('default',['less','uglify','cssmin','postcss','usemin','copy'])
};