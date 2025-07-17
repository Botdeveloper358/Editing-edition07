import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useRouter } from "next/router";

export default function Dashboard() {
    const [userEmail, setUserEmail] = useState('');
    const router = useRouter();

    useEffect(() => {
        const user = auth.currentUser;
        if (!user) {
            router.push('/login');
        } else {
            setUserEmail(user.email);
        }
    }, []);

    const handleLogout = async () => {
        await auth.signOut();
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white space-y-6">
            <h1 className="text-3xl font-bold">Welcome to Dashboard 🎬</h1>
            <p className="text-gray-400">Logged in as: <span className="text-yellow-400">{userEmail}</span></p>
            <button onClick={handleLogout} className="px-6 py-2 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
                Logout
            </button>
        </div>
    );
}
