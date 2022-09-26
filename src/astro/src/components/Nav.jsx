import '../styles/styles.css';
import '../../public/images/GranolaHorizontalDarkBg.png'
 
const Nav = () => {
    return (
        <div className="border-b-[0.03rem] border-solid border-white border-t-0 border-x-0 overflow-auto">
            <nav className="flex items-center gap-6">
                <a href="/" ><img className="h-[3rem] w-[9rem] sm:h-20 sm:w-60" src="../../images/GranolaHorizontalDarkBg.png" /></a>
                <a href="/" className="text-xl sm:text-2xl text-white no-underline">Careers</a>
                <a href="mailto:hello@granola.team" className="text-xl sm:text-2xl text-white no-underline">Contact</a>
            </nav>       
        </div>
    )
}

export default Nav; 