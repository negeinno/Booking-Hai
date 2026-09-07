import os
import re

html_files = [
    ('templates/core/index.html', 'frontend/index.html'),
    ('templates/registration/login.html', 'frontend/login.html'),
    ('templates/accounts/register.html', 'frontend/register.html'),
    ('templates/locations/discover_grid.html', 'frontend/discover.html'),
    ('templates/businesses/public_page.html', 'frontend/business.html'),
    ('templates/accounts/customer_dashboard.html', 'frontend/dashboard.html'),
]

try:
    with open('templates/base.html', 'r', encoding='utf-8') as f:
        base_content = f.read()
except:
    base_content = "<html><head><script src='js/config.js'></script><script src='js/api.js'></script><link rel='stylesheet' href='css/style.css'></head><body><!-- CONTENT --></body></html>"

base_content = re.sub(r'\{%.*?%\}', '', base_content)
base_content = re.sub(r'\{\{.*?\}\}', '', base_content)

for src, dest in html_files:
    try:
        with open(src, 'r', encoding='utf-8') as f:
            content = f.read()
            content = re.sub(r'\{%.*?%\}', '', content)
            content = re.sub(r'\{\{.*?\}\}', '', content)
            final_content = base_content.replace('<!-- Main Content -->', f'<!-- Main Content -->\n{content}')
            with open(dest, 'w', encoding='utf-8') as out:
                out.write(final_content)
    except Exception as e:
        print(f"Failed {src}: {e}")
