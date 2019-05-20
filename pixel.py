#!/usr/bin/python3

import os
import time as tim
import datetime as dtm
import pytz as tmz
import header as hdr
import library as lib
import device as dev

def clock():
    # Obtain pixel devices
    devices = dev.discover()
    devices_pixel = devices[0]

    # Display current time
    if (len(devices_pixel) > 0):
        while (1):
            for device_pixel in devices_pixel:
                # Declare variables
                frame = ["#000000"] * hdr.pixel_display_total
                time_zone = tmz.timezone(hdr.pixel_time_zone)
                date_time_now = str(dtm.datetime.now(time_zone)).split(" ")
                date = date_time_now[0].split("-")
                time = date_time_now[1].split(":")
                hour = list(time[0])
                hour_first = int(hour[0])
                hour_second = int(hour[1])
                minute = list(time[1])
                minute_first = int(minute[0])
                minute_second = int(minute[1])

                # Compile frame
                frame = lib.pixel_frame_number(frame, hour_first, 0,
                                               hdr.pixel_color_hour_first)
                frame = lib.pixel_frame_number(frame, hour_second, 1,
                                               hdr.pixel_color_hour_second)
                frame = lib.pixel_frame_number(frame, minute_first, 2,
                                               hdr.pixel_color_minute_first)
                frame = lib.pixel_frame_number(frame, minute_second, 3,
                                               hdr.pixel_color_minute_second)

                # Send frame
                device_pixel.stream_frame(frame)
                tim.sleep(hdr.pixel_display_interval)

    return

if __name__ == "__main__":
    clock()
    os._exit(1)
