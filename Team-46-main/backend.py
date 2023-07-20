import pytesseract
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
import pyautogui
import time
from PIL import Image
import pyttsx3
import time
# Initialize text-to-speech engine
sound = pyttsx3.init()
rate = sound.getProperty('rate')  # Get the current speech rate
sound.setProperty('rate', rate + 0)

# Store the previous cursor position
previous_cursor_position = pyautogui.position()

def take_screenshot():
    # Capture a screenshot of the entire screen
    screenshot = pyautogui.screenshot()
    cursor_position = pyautogui.position()
    
    # Determine the region of interest around the cursor position
    x, y = cursor_position
    region = (x , y - 2 , x + 250, y + 20)
    region_image = screenshot.crop(region)
    # current_time = time.strftime("%Y%m%d%H%M%S")
    # region_image.save(f"screenshot_{current_time}.png")
    # Convert the region image to grayscale
    region_image_gray = region_image.convert('L')
    extracted_text = pytesseract.image_to_string(region_image_gray)
    # print(extracted_text)
    # sound.say(extracted_text)
    # sound.runAndWait()
    return extracted_text

def detect_screen_change(previous_text):
    global previous_cursor_position
    current_cursor_position = pyautogui.position()

    # Check if the cursor has moved from its previous position
    if current_cursor_position != previous_cursor_position:
        # Capture a new screenshot and perform OCR
        new_text = take_screenshot()

        # Compare the text extracted from the current and previous screenshots
        if new_text != previous_text:
            # If the text has changed, alert the user
            sound.stop()

            # sound.say("Screen change detected.")
            print(new_text)
            sound.say(new_text)
            sound.runAndWait()
            # sound.runAndWait()

        previous_cursor_position = current_cursor_position
        return new_text
    else:
        return previous_text

def main():
    # Take an initial screenshot and extract text
    initial_text = take_screenshot()

    while True:
        # Wait for a specified time interval before checking for cursor movement
        time.sleep(0.1)

        # Check for cursor movement and screen change
        initial_text = detect_screen_change(initial_text)

# Start the main script
# if _name_ == "_main_":
main()