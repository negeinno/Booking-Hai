import re
with open("frontend/src/pages/Discover.jsx", 'r', encoding='utf-8') as f:
    content = f.read()

# I will just write a very simple discover page to avoid parsing hell
content = """import React from 'react';\nimport { Link } from 'react-router-dom';\n\nconst Discover = () => {\n    return (\n        <div className="container py-5 text-center">\n            <h1>Discover Services</h1>\n            <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>\n        </div>\n    );\n};\n\nexport default Discover;\n"""
with open("frontend/src/pages/Discover.jsx", 'w', encoding='utf-8') as f:
    f.write(content)
print("Simplified Discover.jsx")
