#!/bin/node

const PixelKit = require("../../sdk/retailpixelkit");
const Header = require("./header").Header;
const Library = require("./library");

const device_ip = "10.0.1.38"
let device_pixel = new PixelKit({ip: device_ip});
let header = new Header();
let frame = [];
let frame_initialized = false;

function timer()
{
    // Declare variable
	let second = header.timer_seconds % 60;
	let second_second = second % 10;
	let second_first = (second - second_second) / 10;
	let minute = (header.timer_seconds - second) / 60;
	let minute_second = minute % 10;
	let minute_first = (minute - minute_second) / 10;

	if (header.timer_seconds < 0)
	{
		frame = [];

		if (header.pixel_error_screen_on)
		{
			for (let i = 0; i < header.pixel_display_total; i ++)
			{
				frame.push(header.pixel_color_background);
			}

			header.pixel_error_screen_on = false;
		}
		else
		{
			for (let i = 0; i < header.pixel_display_total; i ++)
            {
                frame.push(header.pixel_color_error);
            }

			header.pixel_error_screen_on = true;
		}
	}
	else if (header.timer_seconds <= header.pixel_display_total)
	{
		if (!frame_initialized)
		{
			frame = [];

			for (let i = 0; i < header.pixel_display_total; i ++)
			{
				frame.push(header.pixel_color_background);
			}

			for (let i = 0; i < header.timer_seconds; i ++)
			{
				let row = Math.floor(i / header.pixel_display_width);
				frame[i] = header.pixel_color_rows[row];
			}

			frame_initialized = true;
		}

		frame[header.timer_seconds] = header.pixel_color_background;

		header.timer_seconds --;
	}
	else
	{
		frame = [];

		// Initialize pixel frame
		for (let i = 0; i < header.pixel_display_total; i ++)
		{
			frame.push(header.pixel_color_background);
		}

		// Compile number frame
		frame = Library.compile_pixel_frame_number(frame, minute_first, 0,
												   header.pixel_color_minute_first);
		frame = Library.compile_pixel_frame_number(frame, minute_second, 1,
												   header.pixel_color_minute_second);
		frame = Library.compile_pixel_frame_number(frame, second_first, 2,
												   header.pixel_color_second_first);
		frame = Library.compile_pixel_frame_number(frame, second_second, 3,
												   header.pixel_color_second_second);

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

		// Update timer seconds
		header.timer_seconds --;
	}

	// Send frame
	device_pixel.streamFrame(frame).catch((error) => {
		console.log(`Failed to stream frame: ${error}.`)
	});
}

function main()
{
	console.log(`Connected to pixel device at ${device_ip}.`);

	let argvs = process.argv.slice(2);
	let timer_minutes = 0;
	let timer_seconds = 0;

	if (argvs.length > 0)
	{
		timer_minutes = parseInt(argvs[0]);

		if (timer_minutes == NaN)
		{
			timer_minutes = 0;
		}
		else if (timer_minutes > 99)
		{
			timer_minutes = 99;
		}
	}

	if (argvs.length > 1)
	{
		timer_seconds = parseInt(argvs[1]);

		if (timer_seconds == NaN)
        {
            timer_seconds = 0;
        }
		else if (timer_seconds > 59)
		{
			timer_seconds = 59;
		}
	}

	header.timer_seconds = timer_minutes * 60 + timer_seconds;

	if (header.timer_seconds > 5999)
	{
		header.timer_seconds = 5999;
	}

	setInterval(() => timer(), header.pixel_refresh_interval);
}

device_pixel.connect().then((device) => main());
