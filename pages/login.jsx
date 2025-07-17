import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/dashboard');
        } catch (error) {
            setError('Invalid email or password ❌');
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="bg-white/10 p-10 rounded-xl backdrop-blur-md shadow-xl w-96">
                <h2 className="text-center text-white text-2xl font-semibold mb-6">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        className="w-full p-2 rounded bg-black/30 text-white"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className="w-full p-2 rounded bg-black/30 text-white"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="w-full py-2 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">Login</button>
                </form>
                <p className="text-red-400 text-center pt-4">{error}</p>
            </div>
        </div>
    );
}
