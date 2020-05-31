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
		this.pixel_separator_on = true;
		this.pixel_error_screen_on = false;
		this.pixel_color_background = "#000000";
		this.pixel_color_error = "#FF0000";
		this.pixel_color_minute_first = "#AAAAAA";
		this.pixel_color_minute_second = "#AAAAAA";
		this.pixel_color_second_first = "#AAAAAA";
		this.pixel_color_second_second = "#AAAAAA";
		this.pixel_color_separator = "#AAAAAA";
		this.pixel_color_rows = ["#FF2222", "#FF6622", "#FFAA22", "#FFEE22",
								 "#EEFF22", "#AAFF22", "#66FF22", "#22FF22"];
		this.timer_seconds = 0;
	}
}

module.exports.Header = Header;
