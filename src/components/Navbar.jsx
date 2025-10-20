const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 shadow-md">
            <div className="flex items-center space-x-3">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                    alt="Logo"
                    className="w-10 h-10"
                />
                <h1 className="text-2xl font-bold text-white tracking-wide">
                    ShopVerse
                </h1>
            </div>

            <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
                <li className="hover:text-indigo-400 cursor-pointer"><a href="/">Home</a></li>
                <li className="hover:text-indigo-400 cursor-pointer"><a href="/products">Products</a></li>
                <li className="hover:text-indigo-400 cursor-pointer">About Us</li>
                <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
            </ul>

            <div className="hidden md:flex space-x-4">
                <button className="px-4 py-2 border border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-white transition">
                    Sign In
                </button>
                <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
                    Sign Up
                </button>
            </div>

            <div className="md:hidden text-white text-3xl cursor-pointer">
                ☰
            </div>
        </nav>
    )
}

export default Navbar
