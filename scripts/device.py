#!/usr/bin/python3

import os
import sdk.devicemanager as dem
import sdk.retailpixelkit as pxl
import sdk.motionsensorkit as mtn

def discover(print_info = False):
    # Declare variables
    devices = []
    devices_pixel = []
    devices_motion = []
    object_pixel = pxl.RetailPixelKitSerial
    object_motion = mtn.MotionSensorKit

    # Obtain device list
    devices = dem.list_connected_devices()

    # Obtain pixel and motion device lists
    for device in devices:
        if (isinstance(device, object_pixel)):
            devices_pixel.append(device)
        elif (isinstance(device, object_motion)):
            devices_motion.append(device)

    # Print device lists
    if (print_info):
        print("")
        print("Found", str(len(devices)), "device(s) in total.")
        print("Found", str(len(devices_pixel)), "pixel device(s).")
        print("Found", str(len(devices_motion)), "motion device(s).")

    return (devices_pixel, devices_motion)

def status_pixel(devices, print_info = False):
    # Obtain pixel devices
    devices_pixel = devices[0]
    devices_pixel_status = []

    # Obtain pixel device status
    if (len(devices_pixel) > 0):
        for (counter, device_pixel) in enumerate(devices_pixel, 1):
            device_pixel_status = []
            status_battery = device_pixel.get_battery_status()
            status_wifi = device_pixel.get_wifi_status()
            status_wifi_scan = device_pixel.scan_wifi()
            device_pixel_status.append(status_battery)
            device_pixel_status.append(status_wifi)
            device_pixel_status.append(status_wifi_scan)
            devices_pixel_status.append(device_pixel_status)

            if (print_info):
                print("")
                print("Pixel device", counter, "battery status:")
                print(status_battery)
                print("")
                print("Pixel device", counter, "Wi-Fi status:")
                print(status_wifi)
                print("")
                print("Pixel device", counter, "Wi-Fi scan status:")
                print(status_wifi_scan)

    return devices_pixel_status

if __name__ == "__main__":
    devices = discover(True)
    status_pixel(devices, True)    
    os._exit(1)
