#!/bin/bash

SRC_DIR="/opt/kano/src"
DEVICE=$1
PROGRAM=$2
ARG=$3

if [ "$DEVICE" = "" ]; then
	DEVICE="pixel"
fi

if [ "$PROGRAM" = "" ]; then
	PROGRAM="clock"
fi

echo ""
echo "Launching $DEVICE device $PROGRAM program..."

cd $SRC_DIR/$DEVICE/$PROGRAM && node $PROGRAM.js $ARG
