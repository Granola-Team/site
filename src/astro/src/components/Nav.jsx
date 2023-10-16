import '../styles/styles.css';
import '../../public/images/GranolaHorizontalDarkBg.png'

const Nav = () => {
    return (
        <nav className="flex justify-between border-b-[0.03rem] border-solid
            border-white border-t-0 border-x-0 overflow-auto">
                <div className="flex justify-start">
                    <a href="/" ><img className="h-[3rem] w-[9rem] sm:h-20 sm:w-60"
                        src="../../images/GranolaHorizontalDarkBg.png" /></a>
                </div>
                <div className="flex justify-end items-center mr-6 gap-6">
                    <a href="/blog/"
                        className="text-xl sm:text-2xl text-white no-underline">Blog</a>
                    <a href="/careers/"
                        className="text-xl sm:text-2xl text-white no-underline">Careers</a>
                    <a href="mailto:hello@granola.team"
                        className="text-xl sm:text-2xl text-white no-underline">Contact</a>
                </div>
        </nav>
    )
}

export default Nav;