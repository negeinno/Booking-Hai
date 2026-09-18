import re

def css_to_dict_string(css_str):
    rules = css_str.split(';')
    styles = []
    for rule in rules:
        if not rule.strip(): continue
        parts = rule.split(':', 1)
        if len(parts) == 2:
            key = parts[0].strip()
            # Convert kebab-case to camelCase
            key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
            val = parts[1].strip().replace("'", "\\'")
            styles.append(f"{key}: '{val}'")
    return "{{ " + ", ".join(styles) + " }}"

content = open("frontend/src/pages/Home.jsx", "r", encoding="utf-8").read()

# I will checkout the old index.html to read the styles
import subprocess
subprocess.run(["git", "show", "HEAD~1:frontend/index.html"], capture_output=True, text=True)

# Actually, it is easier to just run my initial conversion script again, but this time keeping the styles!
