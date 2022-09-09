import '../styles/hero.scss'
import '../../public/images/GranolaLogo.png'

const Front = () => {
    return (
        <div className='hero'>
            <div className='containerWords'>
                <h1><b><span style={{fontSize: "150%"}}>We make winning software teams.</span></b></h1>
                <p style={{marginBottom: "-1em", marginTop: "2em"}}>Granola is a software consultancy.</p>
                <p>We make winning teams using our expertise in leadership, DevOps, Web3, distributed systems, 
                    functional programming, and data engineering.</p>
                <br/><br/>
                <p>Say hello: <a href="mailto:hello@granola.team">hello@granola.team</a></p>
            </div>
            <div className='container'>
                <img src="../../images/DarkTransparentGranolaLogo.png" />
            </div>
        </div>
    )
}

export default Front;
