#!/bin/node

const PixelKit = require("./communitysdk/retailpixelkit");

const device_ip = "10.0.1.38"
let device_pixel = new PixelKit({ip: device_ip});

function clock()
{
	const frame = [];

    for(let i = 0; i < 128; i ++)
	{
        frame.push('#' + (Math.random() * 0xFFFFFF << 0).toString(16));
    }

	device_pixel.streamFrame(frame).catch((error) => {
		console.log(`Failed to stream frame: ${error}`)
	});
}

function main()
{
	console.log(`Connected to pixel device at ${device_ip}.`);

	setInterval(() => clock(), 500);
}

device_pixel.connect().then((device) => main());
