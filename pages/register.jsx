import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess('Registered Successfully ✅');
        } catch (error) {
            setSuccess(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="bg-white/10 p-10 rounded-xl backdrop-blur-md shadow-xl w-96">
                <h2 className="text-center text-white text-2xl font-semibold mb-6">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <button type="submit" className="w-full py-2 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">Register</button>
                </form>
                <p className="text-green-400 text-center pt-4">{success}</p>
            </div>
        </div>
    );
}
