#!/usr/bin/python3

import os
import device as dev

def test():
    # pixel devices
    devices = dev.discover(True)
    dev.status(devices, True, "pixel")

    return

if __name__ == "__main__":
    test()
    os._exit(1)
