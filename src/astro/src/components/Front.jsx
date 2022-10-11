import '../styles/styles.css';

const Front = () => {
    return (
        <section className="min-h-[90%] flex flex-col items-center">
            <div class="pb-[15px] overflow-auto">
            <header><h1 className="mt-12 text-center text-5xl text-white">
                    Granola's Projects</h1></header>
            <div className="flex flex-col mt-6 px-12 justify-center">
                <div className="flex flex-col items-center">
                    <a href="https://github.com/Granola-Team/mina-security-report" 
                    className="card text-3xl text-white hover:text-logoOrange
                    focus:text-logoOrange active:text-logoOrange">
                        Mina Security Report made by Granola &rarr; 
                        <br></br><br></br>
                        <span className="text-2xl">Come see our source code.</span>
                    </a>
                    <a href="/" className="card text-3xl text-white hover:text-logoOrange
                    focus:text-logoOrange active:text-logoOrange">
                        Granola Blog Posts and Articles &rarr;
                        <br></br><br></br>
                        <span className="text-2xl">Our views and what's next.</span>
                    </a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Front;
