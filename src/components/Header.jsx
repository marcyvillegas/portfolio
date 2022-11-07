
function Header({children}) {

    return(
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-inter text-white whitespace-nowrap">
            <span className="text-[#FFD500]">{"< "}</span>{children}<span className="text-[#FFD500]">{" />"}</span>
        </h1>
    )
}

export default Header