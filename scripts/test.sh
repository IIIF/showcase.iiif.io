#!/bin/bash
#
# Run the tests
#
bundle exec jekyll build
bundle exec htmlproofer --check-html ./_site --url-ignore '//universalviewer.io/vendor/uv/lib/embed.js'

./scripts/check_mixedcontent.sh
