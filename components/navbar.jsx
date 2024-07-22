const Navbar = () => {
    return (
        <div className="flex justify-between ">
            <div className="flex gap-7">
            <h1 className="font-bold">Brainwave.io</h1>
            <ul className="flex gap-3">
                <li>demos</li>
                <li>pages</li>
                <li>support</li>
                <li>contact</li>
            </ul>

            </div>
            <button className="bg-blue-800 rounded-sm text-white h-10 pr-2">Get started a project</button>
        </div>
    )
}
export default Navbar;