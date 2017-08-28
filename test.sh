#!/bin/bash
#
# Run the tests
#
bundle exec jekyll build
bundle exec htmlproofer --check-html ./_site
