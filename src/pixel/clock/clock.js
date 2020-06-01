#!/bin/node

const PixelKit = require("../../sdk/retailpixelkit");
const HeaderCommon = require("../common/header").Header;
const Header = require("./header").Header;
const Library = require("./library");

let header_common = new HeaderCommon();
let header = new Header();
let device_pixel = new PixelKit({ip: header_common.device_ip});

function clock()
{
    // Declare variable
	let date = new Date();
	let hour = date.getHours();
	let hour_second = hour % 10;
	let hour_first = (hour - hour_second) / 10;
	let minute = date.getMinutes();
	let minute_second = minute % 10;
	let minute_first = (minute - minute_second) / 10;
	let frame = [];

	// Initialize pixel frame
	for (let i = 0; i < header.pixel_display_total; i ++)
	{
		frame.push(header.pixel_color_background);
	}

    // Compile number frame
    frame = Library.compile_pixel_frame_number(frame, hour_first, 0,
									   header.pixel_color_hour_first);
    frame = Library.compile_pixel_frame_number(frame, hour_second, 1,
									   header.pixel_color_hour_second);
    frame = Library.compile_pixel_frame_number(frame, minute_first, 2,
									   header.pixel_color_minute_first);
    frame = Library.compile_pixel_frame_number(frame, minute_second, 3,
									   header.pixel_color_minute_second);

    // Compile separator frame
	if (header.pixel_separator_on)
	{
        frame = Library.compile_pixel_frame_separator(frame,
													  header.pixel_color_separator,
													  false);
        header.pixel_separator_on = false;
	}
    else
	{
        frame = Library.compile_pixel_frame_separator(frame,
													  header.pixel_color_separator,
													  true);
        header.pixel_separator_on = true;
	}

	// Send frame
	device_pixel.streamFrame(frame).catch((error) => {
		console.log(`Failed to stream frame: ${error}.`)
	});
}

function main()
{
	console.log(`Connected to pixel device at ${header_common.device_ip}.`);

	setInterval(() => clock(), header.pixel_refresh_interval);
}

device_pixel.connect().then((device) => main());
