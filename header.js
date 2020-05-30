class Header
{
	constructor()
	{
		this.pixel_display_total = 128;
		this.pixel_display_width = 16;
		this.pixel_display_height = 8;
		this.pixel_number_width = 3;
		this.pixel_number_height = 7;
		this.pixel_display_interval = 1;
		this.pixel_refresh_interval = 1000;
		this.pixel_separator_interval = 0; 
		this.pixel_separator_step = 1;
		this.pixel_color_hour_first = "#FFFFFF";
		this.pixel_color_hour_second = "#FFFFFF";
		this.pixel_color_minute_first = "#FFFFFF";
		this.pixel_color_minute_second = "#FFFFFF";
		this.pixel_color_separator = "#FFFFFF";
	}
}

module.exports.Header = Header;
