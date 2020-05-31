#!/bin/node

const PixelKit = require("../../sdk/retailpixelkit");
const Header = require("./header").Header;
const Library = require("./library");

const device_ip = "10.0.1.38"
let device_pixel = new PixelKit({ip: device_ip});
let header = new Header();
let frame = [];

function cpu()
{
	// Compile frame
	frame = Library.compile_frame(frame);

	// Send frame
	device_pixel.streamFrame(frame).catch((error) => {
		console.log(`Failed to stream frame: ${error}.`)
	});
}

function main()
{
	console.log(`Connected to pixel device at ${device_ip}.`);

	frame = Library.initialize_frame(frame);
	setInterval(() => cpu(), header.pixel_refresh_interval);
}

device_pixel.connect().then((device) => main());
