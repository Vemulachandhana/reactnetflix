import './Nffooter.css'
function Footer(){
    return(
        <div className="footer-container">
<div className="footer-card bg-black w-100">
<div className='footer-list d-lg-flex justify-content-between py-5'>
    <div className='list-one'>
        <ul className='text-white'>
            <li className='py-lg-2'>Questions? Call<a href='#' className='text-white'>000-800-919-1694</a></li>
            <li className='py-lg-2'><a href='#'>FAQ</a></li>
            <li><a href='#'>Cookie Preference</a></li>
        </ul>
        <select className='lang-selection bg-black text-white rounded-1 py-1  px-4 mx-4'>
            <option>English</option>
            <option>Hindi</option>
        </select>
    </div>
    <div className='list-two'>
<ul>
<li><a href='#'>Help Center</a></li>
<li className='py-2'><a href='#'>Corporate Information</a></li>
</ul>
    </div>
    <div>
        <ul>
            <li><a href="#">Terms of Use</a></li>
        </ul>
    </div>
    <div>
        <ul>
            <li><a href="#">Privacy</a></li>
        </ul>
    </div>

</div>
</div>
        </div>
    )
}
export default Footer