const Footer = () => {
    return(
        <div className="w-screen h-screen bg-black">
            <h2 className="text-white pl-6 pt-6">Ready to launch your next project?</h2>
            <p className="text-gray-400 pl-6 pt-6">With lots of unique blocks, you can easily build a page without<br/>
            coding. Build your next landing page.</p>
            <button className="bg-blue-800 rounded-sm text-white h-8 pr-2 text-right ml-96 ">Get started a project</button>
            <div className="flex justify-between pt-32 pl-6 pr-6">
                <div>
                    <h2 className="text-white">Brainwave.io</h2>
                    <p className="text-white">With lots of unique blocks, you can<br/>
                         easily build a page without coding.<br/>
                          Build your next landing page.</p>
                </div>
                <div>
                    <p className="text-gray-400">Company</p>
                    <p className="text-white">about us</p>
                    <p className="text-white">contact us</p>
                    <p className="text-white"> careers</p>
                    <p className="text-white">press</p>
                </div>
                <div>
                    <p className="text-gray-400">Product</p>
                    <p className="text-white">features</p>
                    <p className="text-white">pricing</p>
                    <p className="text-white">news</p>
                    <p className="text-white">help desk</p>
                    <p className="text-white">support</p>
                </div>
                <div>
                    <p className="text-gray-400">Services</p>
                    <p className="text-white">digital marketing</p>
                    <p className="text-white">content writing</p>
                    <p className="text-white">seo for business</p>
                    <p className="text-white">ui design</p>
                </div>
            </div>
            
        </div>

    )
}
export default Footer;