import Nav from './Nav'
import '../styles/hero.scss'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container'>
                <header>
                    <h1>Granola</h1>
                    <p>We make winning software teams.</p>
                    <p>Granola is a software consultancy. We make winning teams using our expertise in leadership, DevOps, Web3, distributed systems, functional programming, and data engineering.</p>
                    <p>Say hello: <a href="mailto:hello@granola.team">hello@granola.team</a></p>
                </header>
            </div>
        </section>
    )
}

export default Hero;
