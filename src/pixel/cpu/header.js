const execSync = require("child_process").execSync;

class Header
{
	constructor()
	{
		this.pixel_display_total = 128;
		this.pixel_display_width = 16;
		this.pixel_display_height = 8;
		this.pixel_refresh_interval = 1000;
		this.pixel_color = "#AAAAAA";
		this.pixel_color_background = "#000000";
		this.pixel_color_rows = ["#FF2222", "#FF6622", "#FFAA22", "#FFEE22",
								 "#EEFF22", "#AAFF22", "#66FF22", "#22FF22"];
		this.cpu_speed_min_mhz = parseFloat(execSync(
			"lscpu | grep 'CPU min MHz' | sed 's/[^0-9.]*//g'", {encoding: "utf-8"}));
		this.cpu_speed_max_mhz = parseFloat(execSync(
			"lscpu | grep 'CPU max MHz' | sed 's/[^0-9.]*//g'", {encoding: "utf-8"}));
	}
}

module.exports.Header = Header;
