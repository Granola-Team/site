import '../styles/hero.scss'
import '../../public/images/HorizontalGranolaLogo.png'
 
const Nav = () => {
    return (
        <nav className='nav'>
            <a href="/"><img src="../../images/HorizontalGranolaLogo.jpg" /></a>
            <a href="/careers" style={{textDecoration: "none"}}>Careers</a>
            <a href="mailto:hello@granola.team" style={{textDecoration: "none"}}>Contact</a>
        </nav>       
    )
}

export default Nav; 