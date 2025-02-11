const Blocks = () => {
    return (
        <>
            <div className="rounded-md flex">
                <div className="flex pr-8 space-x-2">
                    <div className="bg-red-600 p-8 px-10 w-24 h-24"></div>
                    <div className="bg-red-600 p-8 px-10 w-24 h-24"></div>
                    <div className="bg-red-800 p-8 px-10 w-24 h-24"></div>
                </div>
                <div className="flex pr-8">
                    <div className="bg-red-600 p-6 w-24 h-24"></div>
                    <div className="bg-green-500 p-6 w-24 h-24"></div>
                </div>
                <div className="flex pr-8 space-x-2">
                    <div className="bg-green-500 p-8 px-10 w-24 h-24"></div>
                    <div className="bg-green-500 p-8 px-10 w-24 h-24"></div>
                    <div className="bg-green-500 p-8 px-10 w-24 h-24"></div>
                </div>
            </div>
        </>
    );
}

export default Blocks;
