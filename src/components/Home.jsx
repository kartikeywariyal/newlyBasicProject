import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center text-center px-6 py-16 bg-gray-50 min-h-screen">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Welcome to <span className="text-indigo-600">ShopVerse</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
                Discover amazing products at unbeatable prices. From the latest tech
                gadgets to stylish accessories, ShopVerse brings everything you love in
                one place. Fast delivery, trusted quality, and secure payments.
            </p>

            <button
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700 transition"
                onClick={() => {
                    navigate('/products');
                }}
            >
                Explore Products
            </button>

            <div className="mt-16 max-w-4xl grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        Fast Shipping
                    </h3>
                    <p className="text-gray-600">
                        Get your products delivered quickly with our trusted logistics
                        network.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        Best Quality
                    </h3>
                    <p className="text-gray-600">
                        Every item is quality-checked and sourced from verified sellers.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        24/7 Support
                    </h3>
                    <p className="text-gray-600">
                        Our support team is always available to assist with your queries.
                    </p>
                </div>
            </div>
        </div>
    );
}
