#!/bin/node

const PixelKit = require("./communitysdk/retailpixelkit");
const Header = require("./header").Header;
const Library = require("./library");

const device_ip = "10.0.1.38"
let device_pixel = new PixelKit({ip: device_ip});
let header = new Header();
let date = new Date();
let separator_on = true;
let separator_time_counter = 0;

function clock()
{
    // Declare variable
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
		frame.push("#000000");
	}

    // Compile number frame
    frame = Library.pixel_frame_number(frame, hour_first, 0,
									   header.pixel_color_hour_first);
    frame = Library.pixel_frame_number(frame, hour_second, 1,
									   header.pixel_color_hour_second);
    frame = Library.pixel_frame_number(frame, minute_first, 2,
									   header.pixel_color_minute_first);
    frame = Library.pixel_frame_number(frame, minute_second, 3,
									   header.pixel_color_minute_second);

    // Compile separator frame
    if (separator_on == true &&
		separator_time_counter < header.pixel_separator_interval)
	{
        frame = Library.pixel_frame_separator(frame, header.pixel_color_separator,
											  true);
		separator_time_counter += header.pixel_separator_step;
	}
    else if (separator_on == true &&
			 separator_time_counter >= header.pixel_separator_interval)
	{
        frame = Library.pixel_frame_separator(frame, header.pixel_color_separator,
											  false);
        separator_on = false;
        separator_time_counter = 0;
	}
    else if (separator_on == false &&
			 separator_time_counter < header.pixel_separator_interval)
	{
        frame = Library.pixel_frame_separator(frame, header.pixel_color_separator,
											  false);
        separator_time_counter += header.pixel_separator_step;
	}
    else if (separator_on == false &&
			 separator_time_counter >= header.pixel_separator_interval)
	{
        frame = Library.pixel_frame_separator(frame, header.pixel_color_separator,
											  true);
        separator_on = true;
		separator_time_counter = 0;
	}

	// Send frame
	device_pixel.streamFrame(frame).catch((error) => {
		console.log(`Failed to stream frame: ${error}.`)
	});
}

function main()
{
	console.log(`Connected to pixel device at ${device_ip}.`);

	setInterval(() => clock(), header.pixel_refresh_interval);
}

device_pixel.connect().then((device) => main());
