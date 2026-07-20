import urllib.request
import re
from PIL import Image
from collections import Counter

# 1. Scrape the weblium template for hero image
url = "https://weblium.com/templates/demo/security-agency-website-design-131"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    
    # Look for background images or image tags
    images = re.findall(r'url\([\'"]?(https://[^)]+\.(?:jpg|jpeg|png|webp))[\'"]?\)', html)
    img_tags = re.findall(r'<img[^>]+src=[\'"](https://[^"\']+\.(?:jpg|jpeg|png|webp))[\'"]', html)
    
    print("Found background images:")
    for img in set(images):
        print("-", img)
        
    print("\nFound img tags:")
    for img in set(img_tags):
        print("-", img)
except Exception as e:
    print("Error fetching URL:", e)

# 2. Extract dominant color from logo
try:
    img = Image.open('public/logo.png')
    img = img.convert('RGB')
    
    # Get colors, excluding pure white/near white (background)
    pixels = img.getdata()
    valid_pixels = [p for p in pixels if not (p[0] > 240 and p[1] > 240 and p[2] > 240)]
    
    counts = Counter(valid_pixels)
    most_common = counts.most_common(5)
    
    print("\nDominant non-white colors in logo:")
    for color, count in most_common:
        print(f"- RGB: {color} (Hex: #{color[0]:02x}{color[1]:02x}{color[2]:02x}) Count: {count}")
        
except Exception as e:
    print("Error analyzing logo:", e)
