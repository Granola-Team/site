import '../styles/hero.scss'
import '../../public/images/GranolaLogo.png'

const Front = () => {
    return (
        <section className='hero'>
            <div className='containerWords'>
                <h1><b><span style={{fontSize: "150%"}}>We make winning software teams.</span></b></h1>
                <p style={{fontWeight: "lighter", marginBottom: "-1em", marginTop: "2em"}}>Granola is a software consultancy.</p>
                <p style={{fontWeight: "lighter"}}>We make winning teams using our expertise in leadership, DevOps, Web3, distributed systems, 
                    functional programming, and data engineering.</p>
                <br/><br/>
                <p style={{fontWeight: "lighter"}}>Say hello: <a href="mailto:hello@granola.team">hello@granola.team</a></p>
            </div>
            <div className='container'>
                <img src="../../images/GranolaDarkLogo.jpg" />
            </div>
        </section>
    )
}

export default Front;
