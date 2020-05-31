class Header
{
	constructor()
	{
		this.pixel_display_total = 128;
		this.pixel_display_width = 16;
		this.pixel_display_height = 8;
		this.pixel_number_width = 3;
		this.pixel_number_height = 7;
		this.pixel_number_spacing = 1;
		this.pixel_refresh_interval = 1000;
		this.pixel_color_background = "#000000";
		this.pixel_color_error = "#FF0000";
		this.pixel_color_hour_first = "#AAAAAA";
		this.pixel_color_hour_second = "#AAAAAA";
		this.pixel_color_minute_first = "#AAAAAA";
		this.pixel_color_minute_second = "#AAAAAA";
		this.pixel_color_separator = "#AAAAAA";
	}
}

module.exports.Header = Header;
