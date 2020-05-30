#!/bin/node

const DeviceManager = require("./communitysdk/devicemanager");
const PixelKit = require("./communitysdk/retailpixelkit");
const MotionSensorKit = require("./communitysdk/motionsensorkit");

function discover(devices, print_info = false)
{
    let devices_pixel = devices.filter((device) => {
        return device instanceof PixelKit;
    });

    let devices_motion = devices.filter((device) => {
		return device instanceof MotionSensorKit;
	});

	if (print_info)
	{
		console.log("");
		console.log(`Found ${devices.length} device(s) in total.`);
		console.log(`Found ${devices_pixel.length} pixel device(s).`);
		console.log(`Found ${devices_motion.length} motion device(s).`);
	}

	return [devices_pixel, devices_motion];
}

function status_pixel(devices_pixel, print_info = false)
{
	let devices_status = []

    if (devices_pixel.length > 0)
	{
		for (let i = 0; i < devices_pixel.length; i ++)
		{
		    let status_battery = devices_pixel[i].getBatteryStatus()
				.then((status_battery) => {
					if (print_info)
					{
						console.log("");
						console.log(`Pixel device ${i} battery status:`);
						console.log(status_battery);
					}

					return status_battery;
				});

			let status_wifi = devices_pixel[i].getWifiStatus()
				.then((status_wifi) => {
					if (print_info)
					{
						console.log("");
						console.log(`Pixel device ${i} Wi-Fi status:`);
						console.log(status_wifi);
					}

					return status_wifi;
				});

			let status_wifi_scan = devices_pixel[i].scanWifi()
				.then((status_wifi_scan) => {
					if (print_info)
					{
						console.log("");
						console.log(`Pixel device ${i} Wi-Fi scan status:`);
						console.log(status_wifi_scan);
					}

					return status_wifi_scan;
				});

			devices_status.push([status_battery, status_wifi, status_wifi_scan]);
		}
    }

	return devices_status;
}

function main(devices)
{
	const [devices_pixel, devices_motion] = discover(devices, true);
	const devices_status = status_pixel(devices_pixel, true);

	return devices_status;
}

DeviceManager.listConnectedDevices().then((devices) => main(devices));
