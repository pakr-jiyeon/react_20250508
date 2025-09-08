import React from 'react'

const contactText =[
    
    {
        link:"/",
        title:"KAKAO:choa2378",

    },{
        link:"mailto:choa2378@naver.com",
        title:"mail:choa2378@naver.com",

    }
]

const Contact = () => {
    return (
        <section id='contact'>
            <div className="contact_inner">
                <div className="contact_title">Contact</div>
                <div className="conact_lines" aria-hidden="true">
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>
                <div className="contact_text">
                    <div className="text">
                        {contactText.map((contact,key)=>(
                            <div key={key}>
                                <a href={contact.link} target='_blank' rel='noreferrer'>{contact.title}</a>
                            </div>
                        ))}
                        
                    </div>
                </div>
                <div className="conact_lines bottom" aria-hidden="true">
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>
            </div>
        </section>
    )
}

export default Contact