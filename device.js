const DeviceManager = require("./communitysdk/devicemanager");
const PixelKit = require("./communitysdk/retailpixelkit");
const MotionSensorKit = require("./communitysdk/motionsensorkit");

function discover(devices, print_info = false)
{
	console.log("");
	console.log(`Found ${devices.length} device(s) in total.`);

    let devices_pixel = devices.filter((device) => {
        return device instanceof PixelKit;
    });

    let devices_motion = devices.filter((device) => {
		return device instanceof MotionSensorKit;
	});

    console.log(`Found ${devices_pixel.length} pixel device(s).`);
	console.log(`Found ${devices_motion.length} motion device(s).`);
}

function status_pixel(devices, print_info = false)
{
    let devices_pixel = devices.filter((device) => {
        return device instanceof PixelKit;
    });

    if (devices_pixel.length > 0)
	{
		for (i = 0; i < devices_pixel.length; i ++)
		{
		    devices_pixel[i].getBatteryStatus().then((status_battery) => {
				console.log("");
				console.log(`Pixel device ${i} battery status:`);
				console.log(status_battery);
			});

			devices_pixel[i].getWifiStatus().then((status_wifi) => {
				console.log("");
				console.log(`Pixel device ${i} Wi-Fi status:`);
				console.log(status_wifi);
			});

			devices_pixel[i].scanWifi().then((status_wifi_scan) => {
				console.log("");
				console.log(`Pixel device ${i} Wi-Fi scan status:`);
				console.log(status_wifi_scan);
			});	
		}
    }
}

function main(devices)
{
	discover(devices, true);
	status_pixel(devices, true);
}

DeviceManager.listConnectedDevices().then((devices) => main(devices));
