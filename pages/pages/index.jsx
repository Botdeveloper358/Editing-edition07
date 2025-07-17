import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center space-y-8 p-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                Editing Edition 🎬 Official Portfolio
            </h1>
            <p className="text-gray-400 text-center max-w-xl">
                Delivering Clean • Premium • Cinematic Visuals For Serious Clients Only
            </p>
            <div className="flex space-x-4">
                <Link href="/register">
                    <button className="px-6 py-2 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
                        Register
                    </button>
                </Link>
                <Link href="/login">
                    <button className="px-6 py-2 rounded border border-white text-white">
                        Login
                    </button>
                </Link>
            </div>

            <p className="text-gray-400 pt-4 text-sm">
                📧 Email: ediitingedition@gmail.com <br />
                Telegram: @editingedition_supportbot <br />
                Instagram: editing___edition7 <br />
                Payment UPI: hariomgupta8538@axl
            </p>

            <p className="text-xs text-gray-500">🚨 Limited Offer: Now Lifetime Membership ₹ 1,000 Only</p>
        </div>
    );
}
