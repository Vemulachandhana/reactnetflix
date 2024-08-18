import './footer.css'

function Footer() {
    return (
        <div className='bg-black'>
            <div className='  '>
        <div className='footer-container d-lg-flex d-lg-flex justify-content-lg-between ' >
            <div className='footer-list-one'>
                <ul className='footer-ul-one '>
                    <li className='text-white'>Questions Call?<a href="#">000-800-919-1694</a></li>
                    <li ><a href="#">Faq</a></li>

                    <li><a href="#">Investor Relation</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Speed test</a></li>
                </ul>
                <div className='lang-selct mx-4'> <select className='lang-selection text-white rounded-1 py-1 px-4 mx-2'>
                    <option>English</option>
                    <option>Hindi</option>
                </select></div>
                <p className='text-white mx-4'>Netflix India</p>
            </div>
            <div className='footer-list-two'>
                <ul className='footer-ul-two'>
                    <li><a href="#">Help Centre</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Cookie Prefernces</a></li>
                    <li><a href="#">Legal Notices</a></li>
                </ul>
            </div>

            <div className='footer-list-three'>
                <ul className='footer-ul-three'>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Way to watch</a></li>
                    <li><a href="#">Corporate Information</a></li>
                    <li><a href="#">Only on Netflix</a></li>
                </ul>
            </div>
            <div className='footer-list-four'>
                <ul className='footer-ul-four'>
                    <li><a href="#">Media Centre</a></li>
                    <li><a href="#">terms of Use</a></li>
                    <li><a href="#">Contact Us</a></li>
                    
                </ul>
            </div></div>
        </div></div>
    )
}
export default Footer