const Navbar = () => {

    return (
        <div className='h-12 bg-property-dark-blue flex justify-center px-5 relative top-0 z-10 w-full'>
            <div className='w-full max-w-275 text-white flex items-center justify-between md:mr-12 pt-0'>
                <span className='font-medium'>GETRent</span>
                <div>
                    <button className='mr-1 border-none py-2.5 px-3.5 cursor-pointer text-property-light-blue border-[#9BA3EB] border text-xs bg-white outline-none'>Register</button>
                    <button className='mr-1 border-none py-2.5 px-3.5 cursor-pointer text-property-light-blue border-[#9BA3EB] border text-xs bg-white outline-none'>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar