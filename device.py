#!/usr/bin/python3

import os
import communitysdk.devicemanager as dev
import communitysdk.retailpixelkit as pxl
import communitysdk.motionsensorkit as mtn

def discover(print_lists = False):
    # Declare variables
    devices = []
    devices_pixel = []
    devices_motion = []
    object_pixel = pxl.RetailPixelKitSerial
    object_motion = mtn.MotionSensorKit

    # Obtain device list
    devices = dev.list_connected_devices()

    # Obtain pixel and motion device lists
    for device in devices:
        if (isinstance(device, object_pixel)):
            devices_pixel.append(device)
        elif (isinstance(device, object_motion)):
            devices_motion.append(device)

    # Print device lists
    if (print_lists):
        print("Found", str(len(devices)), "device(s) in total.")
        print("Found", str(len(devices_pixel)), "pixel device(s).")
        print("Found", str(len(devices_motion)), "motion device(s).")

    return (devices_pixel, devices_motion)

if __name__ == "__main__":
    discover(True)
    os._exit(1)
