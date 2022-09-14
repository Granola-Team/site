import '../styles/styles.css';

const JobBox2 = () => {
    return (
        <div className="max-w-sm rounded border-solid border-black overflow-hidden shadow-lg bg-white">
        <img className="w-full h-[18rem]" src="/images/arif-riyanto-G1N9kDHqBrQ-unsplash.jpg" alt="Granolas coding" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
                <a href="./careers/jobs-2" className="text-gray-700 no-underline">Senior Web3 Software Engineering Consultant (Rust)</a></div>
            <p className="text-gray-700 text-base">
            This is your chance to join a small, collaborative team and to work on fascinating cross-disciplinary problems that span cryptography, data engineering, product design, economics, distributed systems, and more. At Granola, we want the best. Compensation is top-of-the-market. Join our team!
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Leadership</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Remote</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mentorship</span>
        </div>
        </div>
    )
}

export default JobBox2;
