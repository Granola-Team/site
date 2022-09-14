import '../styles/styles.css';

const JobBox1 = () => {
    return (
        <div class="max-w-sm rounded border-solid border-black overflow-hidden shadow-lg bg-white">
        <img class="w-full h-[18rem]" src="/images/robert-lukeman-_RBcxo9AU-U-unsplash.jpg" alt="Granolas in nature" />
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
                <a href="./careers/jobs-1" class="text-gray-700 no-underline">Web3 Software Engineering Consultant (Rust)</a></div>
            <p class="text-gray-700 text-base">
            This is your chance to join a small, collaborative team and to work on fascinating cross-disciplinary problems that span cryptography, data engineering, product design, economics, distributed systems, and more. At Granola, we want the best. Compensation is top-of-the-market. Join our team!
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rust</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Remote</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mentorship</span>
        </div>
        </div>
    )
}

export default JobBox1;
