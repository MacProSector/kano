import header as hdr

def pixel_frame_number(frame, number, section, color):
    # Declare variables
    section_start = section * hdr.pixel_number_width

    # Compile frame for each number
    if (number == 0):
        for row in range(0, hdr.pixel_number_height):
            frame[(row + 1) * hdr.pixel_display_width + 0 + section_start] = color
            frame[(row + 1) * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
                  + section_start] = color
        frame[1 * hdr.pixel_display_width + 1 + section_start] = color
        frame[1 * hdr.pixel_display_width + 2 + section_start] = color
        frame[hdr.pixel_number_height * hdr.pixel_display_width + 1 + section_start] = color
        frame[hdr.pixel_number_height * hdr.pixel_display_width + 2 + section_start] = color
    elif (number == 1):
        for row in range(0, hdr.pixel_number_height):
            frame[(row + 1) * hdr.pixel_display_width + section_start] = color
    elif (number == 2):
        for col in range(0, hdr.pixel_number_width):
            frame[1 * hdr.pixel_display_width + col + section_start] = color
            frame[4 * hdr.pixel_display_width + col + section_start] = color
            frame[hdr.pixel_number_height * hdr.pixel_display_width + col
                  + section_start] = color

        frame[2 * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
              + section_start] = color
        frame[3 * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
              + section_start] = color
        frame[5 * hdr.pixel_display_width + 0 + section_start] = color
        frame[6 * hdr.pixel_display_width + 0 + section_start] = color
    elif (number == 3):
        for col in range(0, hdr.pixel_number_width):
            frame[1 * hdr.pixel_display_width + col + section_start] = color
            frame[4 * hdr.pixel_display_width + col + section_start] = color
            frame[hdr.pixel_number_height * hdr.pixel_display_width + col
                  + section_start] = color

        frame[2 * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
              + section_start] = color
        frame[3 * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
              + section_start] = color
        frame[5 * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
              + section_start] = color
        frame[6 * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
              + section_start] = color
    elif (number == 4):
        for row in range(0, hdr.pixel_number_height):
            frame[(row + 1) * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
                  + section_start] = color

        frame[1 * hdr.pixel_display_width + 0 + section_start] = color
        frame[2 * hdr.pixel_display_width + 0 + section_start] = color
        frame[3 * hdr.pixel_display_width + 0 + section_start] = color
        frame[4 * hdr.pixel_display_width + 0 + section_start] = color
        frame[4 * hdr.pixel_display_width + 1 + section_start] = color
        frame[4 * hdr.pixel_display_width + 2 + section_start] = color
    elif (number == 5):
        for col in range(0, hdr.pixel_number_width):
            frame[1 * hdr.pixel_display_width + col + section_start] = color
            frame[4 * hdr.pixel_display_width + col + section_start] = color
            frame[hdr.pixel_number_height * hdr.pixel_display_width + col
                  + section_start] = color

        frame[2 * hdr.pixel_display_width + 0
              + section_start] = color
        frame[3 * hdr.pixel_display_width + 0
              + section_start] = color
        frame[5 * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
              + section_start] = color
        frame[6 * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
              + section_start] = color
    elif (number == 6):
        for row in range(0, hdr.pixel_number_height):
            frame[(row + 1) * hdr.pixel_display_width + section_start] = color
        for col in range(0, hdr.pixel_number_width):
            frame[1 * hdr.pixel_display_width + col + section_start] = color
            frame[4 * hdr.pixel_display_width + col + section_start] = color
            frame[hdr.pixel_number_height * hdr.pixel_display_width + col
                  + section_start] = color

        frame[5 * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
              + section_start] = color
        frame[6 * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
              + section_start] = color
    elif (number == 7):
        for row in range(0, hdr.pixel_number_height):
            frame[(row + 1) * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
                  + section_start] = color
        frame[1 * hdr.pixel_display_width + 0 + section_start] = color
        frame[1 * hdr.pixel_display_width + 1 + section_start] = color
        frame[1 * hdr.pixel_display_width + 2 + section_start] = color
    elif (number == 8):
        for row in range(0, hdr.pixel_number_height):
            frame[(row + 1) * hdr.pixel_display_width + 0 + section_start] = color
            frame[(row + 1) * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
                  + section_start] = color
        frame[1 * hdr.pixel_display_width + 1 + section_start] = color
        frame[1 * hdr.pixel_display_width + 2 + section_start] = color
        frame[4 * hdr.pixel_display_width + 1 + section_start] = color
        frame[4 * hdr.pixel_display_width + 2 + section_start] = color
        frame[hdr.pixel_number_height * hdr.pixel_display_width + 1 + section_start] = color
        frame[hdr.pixel_number_height * hdr.pixel_display_width + 2 + section_start] = color
    elif (number == 9):
        for row in range(0, hdr.pixel_number_height):
            frame[(row + 1) * hdr.pixel_display_width + (hdr.pixel_number_width - 1)
                  + section_start] = color
        for col in range(0, hdr.pixel_number_width):
            frame[1 * hdr.pixel_display_width + col + section_start] = color
            frame[4 * hdr.pixel_display_width + col + section_start] = color
            frame[hdr.pixel_number_height * hdr.pixel_display_width + col
                  + section_start] = color

        frame[2 * hdr.pixel_display_width + 0 + section_start] = color
        frame[3 * hdr.pixel_display_width + 0 + section_start] = color
    else:
        frame = ["#FF0000"] * hdr.pixel_display_total

    return frame
