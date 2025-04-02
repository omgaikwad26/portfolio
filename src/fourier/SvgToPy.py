import os
import xml.etree.ElementTree as ET
from svgpathtools import parse_path
from math import cos, sin, pi

# Get the directory where the script is located
script_dir = os.path.dirname(os.path.abspath(__file__))
svg_path = os.path.join(script_dir, "Om.svg")
output_js_path = os.path.join(script_dir, "code/datas.js")

# Max value for normalization
MAX_VALUE = 200

# Open and read the SVG file
with open(svg_path, "r", encoding="utf-8") as f:
    svg_data = f.read()

# Parse the SVG XML structure
root = ET.fromstring(svg_data)
namespace = {"svg": "http://www.w3.org/2000/svg"}  # Define SVG namespace

# Find the first <path> element in the SVG
path_element = root.find(".//{http://www.w3.org/2000/svg}path", namespace)
if path_element is None:
    raise ValueError("No <path> element found in the SVG file.")

# Extract the path's "d" attribute (path data)
path_data = path_element.attrib.get("d")
if not path_data:
    raise ValueError("Found <path> element, but it has no 'd' attribute.")

# Convert the SVG path data into a list of (x, y) points
path = parse_path(path_data)

# Sample points along the path
num_samples = 100  # Increase for higher accuracy
coordinates = [(segment.point(i / num_samples).real, segment.point(i / num_samples).imag)
               for segment in path for i in range(num_samples)]

# Get max value for normalization
max_value = max(max(abs(x), abs(y)) for x, y in coordinates)

# Normalize all values to MAX_VALUE
normalized_coords = [(x / max_value * MAX_VALUE, y / max_value * MAX_VALUE) for x, y in coordinates]

# Rotate by -90 degrees to convert to Cartesian coordinate system
theta = -pi / 2
rotated_coords = []
for x, y in normalized_coords:
    x_new = x * cos(theta) + y * sin(theta)
    y_new = -x * sin(theta) + y * cos(theta)
    rotated_coords.append((x_new, y_new))

# Create the output JavaScript file with the converted data
js_output = "let drawing = [\n"
for x, y in rotated_coords:
    js_output += f"    {{x: {x}, y: {y}}},\n"
js_output += "];"

# Ensure output directory exists
output_dir = os.path.dirname(output_js_path)
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Write the data to the JavaScript file
with open(output_js_path, "w", encoding="utf-8") as f:
    f.write(js_output)

# Print success message
print("Successfully converted SVG path to JavaScript file:", output_js_path)
