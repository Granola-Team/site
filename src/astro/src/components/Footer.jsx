import Nav from './Nav'
import '../styles/hero.scss'
import '../../public/images/GranolaLogo.png'

const Footer = () => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <p style={{fontWeight: "lighter", fontSize: "75%", margin: 0}}>Copyright © 2022 Granola Systems. All rights reserved.</p>
        </div>
    )
}

export default Footer;
