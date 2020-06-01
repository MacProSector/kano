#!/bin/node

const PixelKit = require("../../sdk/retailpixelkit");
const HeaderCommon = require("../common/header").Header;
const Header = require("./header").Header;
const Library = require("./library");

let header_common = new HeaderCommon();
let header = new Header();
let device_pixel = new PixelKit({ip: header_common.device_ip});
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
	console.log(`Connected to pixel device at ${header_common.device_ip}.`);

	frame = Library.initialize_frame(frame);
	setInterval(() => cpu(), header.pixel_refresh_interval);
}

device_pixel.connect().then((device) => main());
