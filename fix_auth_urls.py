import os

src_dir = 'frontend/src'

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            if "fetch('/api/" in content:
                print(f"Fixing {filepath}")
                rel_path = os.path.relpath(os.path.join(src_dir, 'config'), root).replace('\\', '/')
                if rel_path == '.':
                    api_import = "import { API_BASE } from './api';\n"
                else:
                    api_import = f"import {{ API_BASE }} from '{rel_path}/api';\n"
                    
                if "import { API_BASE }" not in content:
                    lines = content.split('\n')
                    last_import_idx = 0
                    for i, line in enumerate(lines):
                        if line.startswith('import '):
                            last_import_idx = i
                    lines.insert(last_import_idx + 1, api_import)
                    content = '\n'.join(lines)
                
                content = content.replace("fetch('/api/", "fetch(API_BASE + '/api/v1/")
                content = content.replace("fetch(${API_BASE}/api/v1/", "fetch(API_BASE + '/api/v1/")
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
