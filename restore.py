import os
import re

html_files = [
    "index.html", "login.html", "register.html", 
    "dashboard.html", "discover.html", "business.html"
]

def css_to_dict_string(css_str):
    rules = css_str.split(';')
    styles = []
    for rule in rules:
        if not rule.strip(): continue
        parts = rule.split(':', 1)
        if len(parts) == 2:
            key = parts[0].strip()
            if key.startswith('-ms-'):
                key = 'ms' + key[4:]
            elif key.startswith('-'):
                key = key[1:]
            key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
            val = parts[1].strip().replace("'", "\\'")
            styles.append(f"{key}: '{val}'")
    return "{{" + ", ".join(styles) + "}}"

def html_to_jsx(html):
    jsx = re.sub(r'\bclass=', 'className=', html)
    jsx = re.sub(r'\bfor=', 'htmlFor=', jsx)
    jsx = re.sub(r'(<img[^>]*?)(?<!/)>', r'\1 />', jsx)
    jsx = re.sub(r'(<input[^>]*?)(?<!/)>', r'\1 />', jsx)
    jsx = re.sub(r'(<br[^>]*?)(?<!/)>', r'\1 />', jsx)
    jsx = re.sub(r'(<hr[^>]*?)(?<!/)>', r'\1 />', jsx)
    jsx = jsx.replace('javascript:void(0)', '#')
    jsx = re.sub(r'onclick="[^"]*"', '', jsx, flags=re.IGNORECASE)
    jsx = re.sub(r'onsubmit="[^"]*"', '', jsx, flags=re.IGNORECASE)
    jsx = jsx.replace('fill-rule=', 'fillRule=').replace('clip-rule=', 'clipRule=').replace('stroke-width=', 'strokeWidth=').replace('stroke-linecap=', 'strokeLinecap=').replace('stroke-linejoin=', 'strokeLinejoin=')
    
    def style_replacer(match):
        css_str = match.group(1)
        return f"style={css_to_dict_string(css_str)}"
        
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    jsx = jsx.replace('<!--', '{/*').replace('-->', '*/}')
    return jsx

for file in html_files:
    os.system(f"git show HEAD~1:frontend/{file} > temp.html")
    if not os.path.exists("temp.html") or os.path.getsize("temp.html") == 0:
        continue
    with open("temp.html", 'r', encoding='utf-8') as f:
        content = f.read()
        
    body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL | re.IGNORECASE)
    if body_match:
        body = body_match.group(1)
    else:
        body = content
        
    body = re.sub(r'<script.*?</script>', '', body, flags=re.DOTALL | re.IGNORECASE)
    
    jsx = html_to_jsx(body)
    
    component_name = file.replace('.html', '').capitalize()
    if component_name == 'Index':
        component_name = 'Home'
        
    react_code = f"""import React from 'react';\nimport {{ Link }} from 'react-router-dom';\n\nconst {component_name} = () => {{\n    return (\n        <>\n            {jsx}\n        </>\n    );\n}};\n\nexport default {component_name};\n"""
    
    react_code = re.sub(r'<a\s+([^>]*?)href="index\.html"([^>]*)>', r'<Link \g<1>to="/" \g<2>>', react_code)
    react_code = re.sub(r'<a\s+([^>]*?)href="([^"]+)\.html"([^>]*)>', r'<Link \g<1>to="/\g<2>" \g<3>>', react_code)
    react_code = react_code.replace('</a>', '</Link>')
    react_code = react_code.replace('href=', 'to=')
    
    react_code = re.sub(r'<Link\b([^>]*)to=""([^>]*)>Log in</Link>', r'<Link\g<1>to="/login"\g<2>>Log in</Link>', react_code)
    react_code = re.sub(r'<Link\b([^>]*)to=""([^>]*)>Get Started</Link>', r'<Link\g<1>to="/register"\g<2>>Get Started</Link>', react_code)
    react_code = re.sub(r'<Link\b([^>]*)to=""([^>]*)>Dashboard</Link>', r'<Link\g<1>to="/dashboard"\g<2>>Dashboard</Link>', react_code)
    
    with open(f"frontend/src/pages/{component_name}.jsx", 'w', encoding='utf-8') as f:
        f.write(react_code)
        
print("Conversion complete.")
