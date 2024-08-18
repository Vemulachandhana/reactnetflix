import Qpcards from './qp-cards';
import './questions-container.css'

function Questioncontainer(){
    const qpcard=[{
        content:"what is Netflix?"
    },
    {
        content:"How much does Netflix cost?"
    },
    {
        content:"Where can i watch?"
    },
    {
        content:"How do i cancel?"
    },
    {
content:"What can i watch on Netflix?"
    },
    {
        content:"Is Netflix good for kids?"
    }



]
    return(
        <div className='qp-container'>
            <h1 className='qp-heading text-white text-center py-5'>Frequently Asked Questions</h1>
          {
            qpcard.map((qpcard)=>{
                return(
                 <Qpcards content={qpcard.content}></Qpcards>
                )
            })
          }
            
            <p className='text-white text-center pt-5'>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>

            <div className='d-lg-flex justify-content-center pb-5 '>
                <input className='py-3 px-5 mx-2 form-control-sm' type='text' placeholder='Email or mobile number '></input>
                <button className='px-4 '>Get Started <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg></span></button>
            </div>
        </div>
        
    )

}
export default Questioncontainer;