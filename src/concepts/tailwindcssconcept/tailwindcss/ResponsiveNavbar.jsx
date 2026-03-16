const ResponsiveNavbar = () => {
  const navlist = ["home", "about", "contact"];
  return (
    <nav className="w-full h-[78px] bg-blue-900 flex px-5 md:px-10">
      <div className="flex gap-10 h-full items-center md:text-2xl text-white">
        <div className="">Logo</div>
        <ul className="hidden md:flex gap-5">
          {navlist.map((ele, idx) => {
            return (
              <li className="capitalize" key={idx}>
                {ele}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="h-full flex items-center ml-auto">
        <button className="md:text-2xl text-white bg-blue-600 px-3 py-2 rounded-lg cursor-pointer">
          Login
        </button>
        {/* <div>
          <GiHamburgerMenu />
          <ImCross />
        </div> */}
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
