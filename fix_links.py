import os
import re
import glob

jsx_files = glob.glob("frontend/src/pages/*.jsx")

for file in jsx_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace <a className="..." to="..."> with <Link className="..." to="...">
    content = re.sub(r'<a\b([^>]*)to=', r'<Link\1to=', content)
    # Just in case some have href=
    content = re.sub(r'<a\b([^>]*)href=', r'<Link\1to=', content)
    # Replace </a> with </Link>
    content = content.replace('</a>', '</Link>')
    
    # Fix the missing paths for login, register, dashboard
    # Find Log in and Get Started and make sure they point to /login and /register
    content = re.sub(r'<Link\b([^>]*)to=""([^>]*)>Log in</Link>', r'<Link\1to="/login"\2>Log in</Link>', content)
    content = re.sub(r'<Link\b([^>]*)to=""([^>]*)>Get Started</Link>', r'<Link\1to="/register"\2>Get Started</Link>', content)
    content = re.sub(r'<Link\b([^>]*)to=""([^>]*)>Dashboard</Link>', r'<Link\1to="/dashboard"\2>Dashboard</Link>', content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Links fixed.")
