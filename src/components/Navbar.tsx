
const Navbar =() =>{
    return(
        <>
            <nav className=" flex justify-between p-4">
                <h1 className="text-xl font-bold">Navbar</h1>
                <button className=" bg-blue-500 rounded-md p-2">
                    Connect Wallet
                </button>
            </nav>
            <hr className="border-2 rounded-md mb-2"></hr>
        </>
    )
}

export default Navbar;