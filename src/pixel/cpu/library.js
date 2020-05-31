const execSync = require("child_process").execSync;
const Header = require("./header").Header;

let header = new Header();
let column = 0;

function calculate_row_top()
{
	let cpu_speed_mhz = parseFloat(execSync(
		"lscpu | grep 'CPU MHz' | sed 's/[^0-9.]*//g'", {encoding: "utf-8"}));
	let cpu_speed_percentage = cpu_speed_mhz / header.cpu_speed_max_mhz;
	let row_top = Math.round((1 - cpu_speed_percentage) *
							 header.pixel_display_height);

	return row_top;
}

function initialize_frame(frame)
{
	for (let i = 0; i < header.pixel_display_total; i ++)
	{
		frame.push(header.pixel_color_background);
	}

	return frame;
}

function compile_frame(frame)
{	
	let row_top = calculate_row_top();

	if (column >= header.pixel_display_width)
	{
		column --;
		frame = shift_frame(frame);
	}
	
	for (let row = 0; row < header.pixel_display_height; row ++)
	{
		if (row < row_top)
		{
			frame[row * header.pixel_display_width + column] =
				header.pixel_color_background;
		}
		else
		{
			frame[row * header.pixel_display_width + column] = header.pixel_color;
		}
	}

	if (column < header.pixel_display_width)
	{
		column ++;
	}

	return frame;
}

function shift_frame(frame)
{
	for (let col = 0; col < header.pixel_display_width - 1; col ++)
	{
		for (let row = 0; row < header.pixel_display_height; row ++)
		{
			frame[row * header.pixel_display_width + col] =
				frame[row * header.pixel_display_width + col + 1];
		}
	}

	for (let row = 0; row < header.pixel_display_height; row ++)
    {
        frame[row * header.pixel_display_width + header.pixel_display_width - 1] =
            header.pixel_color_background;
    }

	return frame;
}

exports.calculate_row_top = calculate_row_top;
exports.initialize_frame = initialize_frame;
exports.compile_frame = compile_frame;
