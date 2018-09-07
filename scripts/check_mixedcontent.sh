#!/bin/bash

SCANNER_VERSION="0.1.2"

mkdir files
cd files
curl -LO "https://github.com/IIIF/phantomjs-mixed-content-scan/archive/$SCANNER_VERSION.tar.gz"
tar zxvf "$SCANNER_VERSION.tar.gz"
mv phantomjs-mixed-content-scan-$SCANNER_VERSION/* .
rmdir phantomjs-mixed-content-scan-$SCANNER_VERSION

phantomjs --version

./check_mixedcontent.sh ../_site debug
rm *
cd ..
rmdir files
