import re

with open('frontend/src/pages/Register.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove 'required' from terms checkbox
content = content.replace('className="w-5 h-5 border-[2px] border-black text-brand-pink focus:ring-brand-pink/20"\\n                                    required', 'className="w-5 h-5 border-[2px] border-black text-brand-pink focus:ring-brand-pink/20 cursor-pointer"')
# Also cover standard spaces
content = content.replace('className="w-5 h-5 border-[2px] border-black text-brand-pink focus:ring-brand-pink/20"\n                                    required', 'className="w-5 h-5 border-[2px] border-black text-brand-pink focus:ring-brand-pink/20 cursor-pointer"')

# Change <label htmlFor="termsAccepted"> to <span>
content = content.replace('<label htmlFor="termsAccepted" className="text-sm font-bold cursor-pointer">', '<span className="text-sm font-bold">')
content = content.replace('</label>\\n                                </div>\\n\\n                                <button', '</span>\\n                            </div>\\n\\n                            <button')
content = content.replace('</label>\n                            </div>\n\n                            <button', '</span>\n                            </div>\n\n                            <button')

# Add error and loading state
if "const [error, setError]" not in content:
    content = content.replace("const [token, setToken] = useState(null);", "const [token, setToken] = useState(null);\n    const [error, setError] = useState('');\n    const [isLoading, setIsLoading] = useState(false);")

# Update handleSubmit
submit_replacement = """    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (!formData.termsAccepted) {
            setError('Please accept the Terms and Privacy Policy');
            return;
        }
        
        setIsLoading(true);
        const nameParts = formData.fullName.trim().split(' ');
        const first_name = nameParts[0] || '';
        const last_name = nameParts.slice(1).join(' ') || '';

        const payload = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            first_name,
            last_name
        };

        try {
            const response = await fetch(API_BASE + '/api/v1/auth/register/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (response.ok || response.status === 201) {
                navigate('/verify-otp', { state: { requiresVerification: true, tokens: data } });
            } else {
                setError(data.error || data.detail || JSON.stringify(data));
            }
        } catch (err) {
            setError('An error occurred during signup.');
        } finally {
            setIsLoading(false);
        }
    };"""

content = re.sub(r'    const handleSubmit = async \(e\) => \{[\s\S]*?\n    \};', submit_replacement, content)

# Inject error message display and loading text
button_replacement = """                            {error && <p className="text-red-600 font-bold text-center">{error}</p>}
                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className="w-full py-3 bg-black text-white font-black text-lg brutal-shadow hover:-translate-y-1 hover:shadow-lg transition-transform uppercase mt-2 disabled:opacity-50"
                            >
                                {isLoading ? 'Sending OTP...' : 'Send OTP & Sign Up'}
                            </button>"""
content = re.sub(r'                            <button \n                                type="submit" [\s\S]*?Send OTP & Sign Up\n                            </button>', button_replacement, content)


with open('frontend/src/pages/Register.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
