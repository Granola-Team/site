import '../styles/styles.css';
import '../../public/images/GranolaLogo.png'

const Front = () => {
    return (
        <section className="flex flex-col items-center lg:flex-row">
            <div className="robin">
                <img className="max-w-full"
                     src="../../images/DarkTransparentGranolaLogo.png" />
            </div>
            <div className="flex flex-col px-12 lg:h-screen lg:justify-center">
                <h1 className="text-4xl sm:text-5xl text-white"
                    >Winning Software Teams</h1>
                <p className="text-2xl sm:text-3xl text-white"
	            >Granola is a software consultancy. We make winning teams
                    using our expertise in leadership, DevOps, Web3,
                    distributed systems, functional programming, and data
                    engineering.</p>
                <p className="text-2xl sm:text-3xl text-white">
                    <a href="mailto:hello@granola.team"
                       className="mb-0 text-2xl sm:text-3xl text-logoOrange z-20"
                        >hello@granola.team</a></p>
            </div>
        </section>
    )
}

export default Front;
