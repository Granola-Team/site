import '../styles/styles.css';
import '../../public/images/HorizontalGranolaLogo.png'
 
const Nav = () => {
    return (
        <div className="border-b-[0.03rem] border-solid border-white border-t-0 border-x-0">
            <nav className="flex items-center gap-6">
                <a href="/" ><img className="h-20 w-60" src="../../images/GranolaHorizontalDarkBg.png" /></a>
                <a href="/" className="text-2xl text-white no-underline">Home</a>
                <a href="/careers" className="text-2xl text-white no-underline">Careers</a>
                <a href="mailto:hello@granola.team" className="text-2xl text-white no-underline">Contact</a>
            </nav>       
        </div>
    )
}

export default Nav; 