module.exports = function( grunt ) {
    "use strict";
    var key;

    grunt.initConfig( {
        pkg: grunt.file.readJSON( "package.json" ),
        jsonlint: {
            pkg: {
                src: [
                    "package.json"
                ]
            }
        },
        connect: {
            server: {
                options: {
                    base: "",
                    port: 9999
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'themes/prism-greenprint.css': 'themes/prism-greenprint.scss'
                }
            }
        },
        watch: {}
    } );

    for ( key in grunt.file.readJSON( "package.json" ).devDependencies ) {
        if ( key !== "grunt" && key.indexOf( "grunt" ) === 0 ) {
            grunt.loadNpmTasks( key );
        }
    }

    grunt.registerTask( "default", [ "jsonlint", "sass" ] );
    grunt.registerTask( "dev", [ "connect", "watch" ] );
    grunt.registerTask( "ci", [ "jsonlint", "sass" ] );
};
