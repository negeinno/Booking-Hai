import glob
import re

for file in glob.glob("frontend/src/pages/*.jsx"):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = re.sub(r'<a\b([^>]*)to=', r'<Link\1to=', content)
    content = re.sub(r'<a\b([^>]*)href=', r'<Link\1to=', content)
    # Make sure we don't have <Link ...></a>
    content = content.replace('</a>', '</Link>')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print("Fixed JSX.")
