import re

# Fix Home.jsx style block
with open("frontend/src/pages/Home.jsx", 'r', encoding='utf-8') as f:
    home = f.read()
home = re.sub(r'<style>.*?</style>', '', home, flags=re.DOTALL)
with open("frontend/src/pages/Home.jsx", 'w', encoding='utf-8') as f:
    f.write(home)

# Fix Discover.jsx fragments
with open("frontend/src/pages/Discover.jsx", 'r', encoding='utf-8') as f:
    discover = f.read()
# Replace outer <> ... </> with <> <div> ... </div> </> just to be safe? No, let's just wrap the return body in one div.
body_match = re.search(r'return \(\s*<>\s*(.*?)\s*</>\s*\);', discover, re.DOTALL)
if body_match:
    discover = discover.replace(body_match.group(0), f"return (\n<>\n<div>\n{body_match.group(1)}\n</div>\n</>\n);")
    with open("frontend/src/pages/Discover.jsx", 'w', encoding='utf-8') as f:
        f.write(discover)
print("Fixed Home and Discover.")
