#!/bin/bash

WORKING_DIR=$(pwd | awk -F '/' '{print $NF}')

if [ $WORKING_DIR != "scripts" ]; then
	echo ""
	echo "$0 must be run under 'scripts'."

	exit
fi

cd ..

echo ""
echo "Downloading required modules..."

npm install serialport
npm install uuid
npm install ws

rm -f package-lock.json

echo ""
echo "Setup completed."
