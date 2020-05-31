const Header = require("./header").Header;

function pixel_frame_number(frame, number, section, color)
{
	let header = new Header();
	let section_start = 0;

	// Obtain section start
	if (section == 0 || section == 1)
	{
        section_start = section * (header.pixel_number_width +
								   header.pixel_display_interval);
	}
    else if (section == 2 || section == 3)
	{
        section_start = section * (header.pixel_number_width +
                                   header.pixel_display_interval) +
			header.pixel_display_interval;
	}
    else
	{
		for (let i = 0; i < header.pixel_display_total; i ++)
		{
			frame.push(header.pixel_color_error);
		}

        return frame;
	}

    // Compile frame for each number
    if (number == 0)
	{
        for (let row = 0; row < header.pixel_number_height; row ++)
		{
            frame[(row + 1) * header.pixel_display_width + 0 + section_start] = color;
            frame[(row + 1) * header.pixel_display_width +
				  (header.pixel_number_width - 1) + section_start] = color;
		}

        frame[1 * header.pixel_display_width + 1 + section_start] = color;
        frame[1 * header.pixel_display_width + 2 + section_start] = color;
        frame[header.pixel_number_height * header.pixel_display_width + 1 +
			  section_start] = color;
        frame[header.pixel_number_height * header.pixel_display_width + 2 +
			  section_start] = color;
	}
    else if (number == 1)
	{
        for (let row = 0; row < header.pixel_number_height; row ++)
		{
			frame[(row + 1) * header.pixel_display_width + section_start + 1] = color;
		}
	}
    else if (number == 2)
	{
        for (let col = 0; col < header.pixel_number_width; col ++)
		{
            frame[1 * header.pixel_display_width + col + section_start] = color;
            frame[4 * header.pixel_display_width + col + section_start] = color;
            frame[header.pixel_number_height * header.pixel_display_width + col
                  + section_start] = color;
		}

        frame[2 * header.pixel_display_width + (header.pixel_number_width - 1)
              + section_start] = color;
        frame[3 * header.pixel_display_width + (header.pixel_number_width - 1)
              + section_start] = color;
        frame[5 * header.pixel_display_width + 0 + section_start] = color;
        frame[6 * header.pixel_display_width + 0 + section_start] = color;
	}
    else if (number == 3)
	{
        for (let col = 0; col < header.pixel_number_width; col ++)
		{
            frame[1 * header.pixel_display_width + col + section_start] = color;
            frame[4 * header.pixel_display_width + col + section_start] = color;
            frame[header.pixel_number_height * header.pixel_display_width + col
                  + section_start] = color;
		}

        frame[2 * header.pixel_display_width + (header.pixel_number_width - 1)
              + section_start] = color;
        frame[3 * header.pixel_display_width + (header.pixel_number_width - 1)
              + section_start] = color;
        frame[5 * header.pixel_display_width + (header.pixel_number_width - 1)
              + section_start] = color;
        frame[6 * header.pixel_display_width + (header.pixel_number_width - 1)
              + section_start] = color;
	}
    else if (number == 4)
	{
        for (let row = 0; row < header.pixel_number_height; row ++)
		{
            frame[(row + 1) * header.pixel_display_width +
				  (header.pixel_number_width - 1) + section_start] = color;
		}

        frame[1 * header.pixel_display_width + 0 + section_start] = color;
        frame[2 * header.pixel_display_width + 0 + section_start] = color;
        frame[3 * header.pixel_display_width + 0 + section_start] = color;
        frame[4 * header.pixel_display_width + 0 + section_start] = color;
        frame[4 * header.pixel_display_width + 1 + section_start] = color;
        frame[4 * header.pixel_display_width + 2 + section_start] = color;
	}
    else if (number == 5)
	{
        for (let col = 0; col < header.pixel_number_width; col ++)
		{
            frame[1 * header.pixel_display_width + col + section_start] = color;
            frame[4 * header.pixel_display_width + col + section_start] = color;
            frame[header.pixel_number_height * header.pixel_display_width + col
                  + section_start] = color;
		}

        frame[2 * header.pixel_display_width + 0 + section_start] = color;
        frame[3 * header.pixel_display_width + 0 + section_start] = color;
        frame[5 * header.pixel_display_width + (header.pixel_number_width - 1)
              + section_start] = color;
        frame[6 * header.pixel_display_width + (header.pixel_number_width - 1)
              + section_start] = color;
	}
    else if (number == 6)
	{
        for (let row = 0; row < header.pixel_number_height; row ++)
		{
            frame[(row + 1) * header.pixel_display_width + section_start] = color;
		}

        for (let col = 0; col < header.pixel_number_width; col ++)
		{
            frame[1 * header.pixel_display_width + col + section_start] = color;
            frame[4 * header.pixel_display_width + col + section_start] = color;
            frame[header.pixel_number_height * header.pixel_display_width + col
                  + section_start] = color;
		}

        frame[5 * header.pixel_display_width + (header.pixel_number_width - 1)
              + section_start] = color;
        frame[6 * header.pixel_display_width + (header.pixel_number_width - 1)
              + section_start] = color;
	}
    else if (number == 7)
	{
        for (let row = 0; row < header.pixel_number_height; row ++)
		{
            frame[(row + 1) * header.pixel_display_width +
				  (header.pixel_number_width - 1) + section_start] = color;
		}

        frame[1 * header.pixel_display_width + 0 + section_start] = color;
        frame[1 * header.pixel_display_width + 1 + section_start] = color;
        frame[1 * header.pixel_display_width + 2 + section_start] = color;
	}
    else if (number == 8)
	{
        for (let row = 0; row < header.pixel_number_height; row ++)
		{
            frame[(row + 1) * header.pixel_display_width + 0 + section_start] = color;
            frame[(row + 1) * header.pixel_display_width +
				  (header.pixel_number_width - 1) + section_start] = color;
		}

        frame[1 * header.pixel_display_width + 1 + section_start] = color;
        frame[1 * header.pixel_display_width + 2 + section_start] = color;
        frame[4 * header.pixel_display_width + 1 + section_start] = color;
        frame[4 * header.pixel_display_width + 2 + section_start] = color;
        frame[header.pixel_number_height * header.pixel_display_width + 1 +
			  section_start] = color;
        frame[header.pixel_number_height * header.pixel_display_width + 2 +
			  section_start] = color;
	}
    else if (number == 9)
	{
        for (let row = 0; row < header.pixel_number_height; row ++)
		{
            frame[(row + 1) * header.pixel_display_width +
				  (header.pixel_number_width - 1) + section_start] = color;
		}

        for (let col = 0; col < header.pixel_number_width; col ++)
		{
            frame[1 * header.pixel_display_width + col + section_start] = color;
            frame[4 * header.pixel_display_width + col + section_start] = color;
            frame[header.pixel_number_height * header.pixel_display_width + col
                  + section_start] = color;
		}

        frame[2 * header.pixel_display_width + 0 + section_start] = color;
        frame[3 * header.pixel_display_width + 0 + section_start] = color;
	}
    else
	{
		for (let i = 0; i < header.pixel_display_total; i ++)
		{
			frame.push(header.pixel_color_error);
		}
	}

	return frame;
}

function pixel_frame_separator(frame, color, display = true)
{
	let header = new Header();
	
	if (display == false)
	{
		color = header.pixel_color_background;;
	}

    pixel_display_middle = Math.round(header.pixel_display_width / 2) - 1;

    frame[2 * header.pixel_display_width + pixel_display_middle] = color;
    frame[2 * header.pixel_display_width + pixel_display_middle + 1] = color;
    frame[3 * header.pixel_display_width + pixel_display_middle] = color;
    frame[3 * header.pixel_display_width + pixel_display_middle + 1] = color;
    frame[5 * header.pixel_display_width + pixel_display_middle] = color;
    frame[5 * header.pixel_display_width + pixel_display_middle + 1] = color;
    frame[6 * header.pixel_display_width + pixel_display_middle] = color;
    frame[6 * header.pixel_display_width + pixel_display_middle + 1] = color;

    return frame;
}

exports.pixel_frame_number = pixel_frame_number;
exports.pixel_frame_separator = pixel_frame_separator;
