#!/usr/bin/python3

import os
import communitysdk.devicemanager as dev
import communitysdk.retailpixelkit as pxl
import communitysdk.motionsensorkit as mtn

def main():
    # Obtain device list
    devices = dev.list_connected_devices()

    # Obtain pixel and motion objects
    object_pixel = pxl.RetailPixelKitSerial
    object_motion = mtn.MotionSensorKit

    # Obtain pixel and motion device lists
    devices_pixel = list(filter(lambda device: isinstance(device, object_pixel), devices))
    devices_motion = list(filter(lambda device: isinstance(device, object_motion), devices))

    # Print device lists
    print("Found", str(len(devices)), "device(s) in total.")
    print("Found", str(len(devices_pixel)), "pixel device(s).")
    print("Found", str(len(devices_motion)), "motion device(s).")

    # Exit program
    os._exit(1)

    return

if __name__ == "__main__":
    main()
