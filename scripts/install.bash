#!/bin/bash

WORKING_DIR=$(pwd | awk -F '/' '{print $NF}')
PROJECT_DIR=$(pwd | awk -F '/' '{print $(NF - 1)}')
INSTALL_DIR="/opt/kano"
SCRIPTS_DIR="/opt/kano/scripts"

if [ $WORKING_DIR != "scripts" ]; then
	echo ""
    echo "$0 must be run under 'scripts'."

    exit
fi

PWD=$(pwd)

if [ $PWD != $SCRIPTS_DIR ]; then
	echo ""
	echo "Installing project to '/opt/kano'..."

	cd ../..
	sudo mv -v $PROJECT_DIR $INSTALL_DIR

	echo ""
	echo "Installed project to '/opt/kano'."
fi

cd $INSTALL_DIR

echo ""
echo "Installing systemd service files..."

sudo cp -v systemd/* /usr/lib/systemd/system
sudo systemctl daemon-reload

cd $SCRIPTS_DIR

echo ""
echo "Installation completed."
