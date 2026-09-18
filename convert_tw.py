import glob
import re

def convert_bootstrap_to_tailwind(content):
    # Containers
    content = content.replace('container-fluid', 'w-full px-4')
    content = content.replace('container', 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')
    
    # Grid
    content = content.replace('row', 'flex flex-wrap -mx-4')
    content = re.sub(r'col-md-(\d+)', lambda m: f"w-full md:w-{m.group(1)}/12 px-4", content)
    content = re.sub(r'col-lg-(\d+)', lambda m: f"w-full lg:w-{m.group(1)}/12 px-4", content)
    content = re.sub(r'col-(\d+)', lambda m: f"w-{m.group(1)}/12 px-4", content)
    
    # Typography
    content = content.replace('text-center', 'text-center')
    content = content.replace('fw-bold', 'font-bold')
    content = content.replace('fw-medium', 'font-medium')
    content = content.replace('display-2', 'text-5xl md:text-7xl font-black')
    content = content.replace('display-3', 'text-4xl md:text-6xl font-black')
    content = content.replace('display-4', 'text-3xl md:text-5xl font-black')
    content = content.replace('lead', 'text-xl md:text-2xl')
    content = content.replace('text-uppercase', 'uppercase')
    content = content.replace('text-white', 'text-white')
    content = content.replace('text-dark', 'text-slate-900')
    
    # Buttons
    content = content.replace('btn btn-primary', 'inline-block px-6 py-3 bg-brand-yellow text-slate-900 font-bold brutal-border brutal-shadow brutal-hover')
    content = content.replace('btn btn-outline-primary', 'inline-block px-6 py-3 bg-white text-slate-900 font-bold brutal-border brutal-shadow brutal-hover')
    content = content.replace('btn-lg', 'text-xl px-8 py-4')
    content = content.replace('btn-sm', 'text-sm px-4 py-2')
    content = content.replace('rounded-pill', 'rounded-full')
    
    # Spacing (Basic)
    content = re.sub(r'\bmy-(\d+)\b', lambda m: f"my-{(int(m.group(1)) * 2) + 2}", content)
    content = re.sub(r'\bmy-lg-(\d+)\b', lambda m: f"lg:my-{(int(m.group(1)) * 2) + 2}", content)
    content = re.sub(r'\bpy-(\d+)\b', lambda m: f"py-{(int(m.group(1)) * 2) + 2}", content)
    content = re.sub(r'\bpx-(\d+)\b', lambda m: f"px-{(int(m.group(1)) * 2) + 2}", content)
    content = re.sub(r'\bmb-(\d+)\b', lambda m: f"mb-{(int(m.group(1)) * 2) + 2}", content)
    content = re.sub(r'\bmt-(\d+)\b', lambda m: f"mt-{(int(m.group(1)) * 2) + 2}", content)
    content = re.sub(r'\bme-(\d+)\b', lambda m: f"mr-{(int(m.group(1)) * 2) + 2}", content)
    content = re.sub(r'\bms-(\d+)\b', lambda m: f"ml-{(int(m.group(1)) * 2) + 2}", content)
    
    # Backgrounds
    content = content.replace('bg-primary', 'bg-brand-blue')
    content = content.replace('bg-warning', 'bg-brand-yellow')
    content = content.replace('bg-success', 'bg-brand-green')
    content = content.replace('bg-white', 'bg-white')
    
    # Flex
    content = content.replace('d-flex', 'flex')
    content = content.replace('align-items-center', 'items-center')
    content = content.replace('justify-content-center', 'justify-center')
    content = content.replace('justify-content-between', 'justify-between')
    content = content.replace('flex-column', 'flex-col')
    content = content.replace('mx-auto', 'mx-auto')
    
    # Navbar specific
    content = content.replace('navbar navbar-expand-lg', 'flex items-center justify-between py-4')
    content = content.replace('navbar-brand', 'text-2xl font-black tracking-tighter')
    
    return content

for file in glob.glob("frontend/src/pages/*.jsx"):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = convert_bootstrap_to_tailwind(content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Converted generic Bootstrap to Tailwind.")
