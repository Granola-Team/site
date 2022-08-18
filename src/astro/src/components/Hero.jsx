import Nav from './Nav'
import '../styles/hero.scss'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container'>
                <header>
                    <h1>Granola Systems</h1>

                    <p>Granola is a software consultancy. We make winning software teams using our expertise in software team leadership, DevOps, Web3, distributed systems, blockchain, functional programming, and data engineering.</p>
                    <p>You can reach out to us here: <a href="mailto:hello@granola.team">hello@granola.team</a></p>
                </header>
            </div>
        </section>
    )
}

export default Hero;