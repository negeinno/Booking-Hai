import glob
import re

for file in glob.glob("frontend/src/pages/*.jsx"):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = re.sub(r'<Link([^>]*)to=""([^>]*)>Log in</Link>', r'<Link\1to="/login"\2>Log in</Link>', content)
    content = re.sub(r'<Link([^>]*)to=""([^>]*)>Get Started</Link>', r'<Link\1to="/register"\2>Get Started</Link>', content)
    content = re.sub(r'<Link([^>]*)to=""([^>]*)>Dashboard</Link>', r'<Link\1to="/dashboard"\2>Dashboard</Link>', content)
    content = re.sub(r'<Link([^>]*)to=""([^>]*)>Booking Hai.</Link>', r'<Link\1to="/"\2>Booking Hai.</Link>', content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print("Fixed missing links.")
