import '../styles/styles.css';
import '../../public/images/GranolaLogo.png'

const Front = () => {
    return (
        <section className="flex items-center">
            <div className="flex flex-col h-screen px-12">
                    <h1 className="mt-24 h-10 text-5xl text-white"><b>
                        <span className="z-50">Winning Software Teams</span></b></h1>
                <p className="flex-grow text-3xl text-white">Granola is a software consultancy. We make winning teams using our expertise 
                    in leadership, DevOps, Web3, distributed systems, functional programming, and data engineering.</p>
                <p className="mb-36 text-3xl text-white">Say hello: 
                    <a href="mailto:hello@granola.team" className="mb-0 text-3xl text-logoOrange z-20">
                        hello@granola.team
                    </a></p>
            </div>
            <div className="flex items-center">
                <img className="h-500 w-400" src="../../images/DarkTransparentGranolaLogo.png" />
            </div>
        </section>
    )
}

export default Front;
