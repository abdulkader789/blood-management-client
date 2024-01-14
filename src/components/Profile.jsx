import '../styles/Profile.css';

const Profile = () => {
    return (
        <div className="bg-gray-200  pb-24">
            <header className="px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
                <div className="flex-1 flex justify-between items-center font-black text-gray-700">
                    <a href="#">Profile</a>
                </div>

                <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
                    <svg className="fill-current text-gray-600 hover:text-gray-800" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />

                <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                    <nav>
                        <ul className="lg:flex items-center justify-between text-sm font-medium text-gray-700 pt-4 lg:pt-0">

                            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent text-gray-600 hover:text-gray-900" href="#">Settings</a></li>

                            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent text-gray-600 hover:text-gray-900 lg:mb-0 mb-2" href="#">Logout</a></li>
                        </ul>
                    </nav>


                </div>
            </header>

            <div className="container  px-12 mt-8">
                <h1 className="text-2xl font-bold text-gray-700 px-6 md:px-0">Account Settings</h1>
                <ul className="flex border-b border-gray-300 text-sm font-medium text-gray-600 mt-3 px-6 md:px-0">
                    <li className="mr-8 text-gray-900 border-b-2 border-gray-800"><a href="#_" className="py-4 inline-block">Profile Info</a></li>
                    <li className="mr-8 hover:text-gray-900"><a href="#_" className="py-4 inline-block">Security</a></li>
                    <li className="mr-8 hover:text-gray-900"><a href="#_" className="py-4 inline-block">Billing</a></li>
                </ul>
                <form action="/profile/save" method="POST" encType="multipart/form-data">

                    <div className="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
                        <div className="w-1/3 bg-gray-100 p-8 hidden md:inline-block">
                            <h2 className="font-medium text-md text-gray-700 mb-4 tracking-wide">Profile Info</h2>
                            <p className="text-xs text-gray-500">Update your basic profile information such as Email Address, Name, and Image.</p>
                        </div>
                        <div className="md:w-2/3 w-full">
                            <div className="py-2 px-16">
                                <label htmlFor="name" className="text-sm text-gray-600">Name</label>
                                <input className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="text" value="" name="name" />
                            </div>
                            <hr className="border-gray-200" />
                            <div className="py-2 px-16">
                                <label htmlFor="email" className="text-sm text-gray-600">Email Address</label>
                                <input className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="email" name="email" value="" />
                            </div>
                            <hr className="border-gray-200" />
                            <div className="py-2 px-16 clearfix">
                                <label htmlFor="photo" className="text-sm text-gray-600 w-full block">Photo</label>
                                <img className="rounded-full w-16 h-16 border-4 mt-2 border-gray-200 float-left" id="photo" src="https://pbs.twimg.com/profile_images/1163965029063913472/ItoFLWys_400x400.jpg" alt="photo" />
                                <div className="bg-gray-200 text-gray-500 text-xs mt-5 ml-3 font-bold px-4 py-2 rounded-lg float-left hover:bg-gray-300 hover:text-gray-600 relative overflow-hidden cursor-pointer">
                                    <input type="file" name="photo" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" /> Change Photo
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex p-16 py-8 bg-gray-300 clearfix rounded-b-lg border-t border-gray-200 items-center justify-between">
                        <p className="text-xs text-gray-500 tracking-tight">Click on Save to update your Profile Info</p>
                        <button type="submit" className="bg-indigo-500 text-white text-sm font-medium px-6 py-2 rounded uppercase cursor-pointer">Save</button>
                    </div>

                </form>
            </div>
        </div>

    )

};

export default Profile;
