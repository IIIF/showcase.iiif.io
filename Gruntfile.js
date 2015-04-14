module.exports = function(grunt) {
  grunt.initConfig({
    htmllint: {
      all: [
        '_site/**/*.html'
      ],
      options: {
        ignore: [
          'Attribute “ontouchstart” not allowed on element “div” at this point.',
          'Bad value “self” for attribute “rel” on element “link”: The string “self” is not a registered keyword.',
          'Section lacks heading. Consider using “h2”-“h6” elements to add identifying headings to all sections.',
          'Quote “"” in attribute name. Probable cause: Matching quote missing somewhere earlier.',
          'Attribute “data-rotation"0"” is not serializable as XML 1.0.',
          '“data-*” attribute names must be XML 1.0 4th ed. plus Namespaces NCNames.',
          '“&” did not start a character reference. (“&” probably should have been escaped as “&amp;”.)'
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-html');
  grunt.registerTask('test', ['htmllint']);
};
