#!/bin/bash
#
# Run the tests
# 
bundle exec jekyll build --drafts
grunt test
bundle exec htmlproofer ./_site
