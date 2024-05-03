import './Faq.css';
import { useState } from 'react';
import user from '../assets/user-solid.svg';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
      { id: 1, title: 'Is there a free trial available?',
      ans: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'},
      { id: 2, title: 'What is your cancellation policy?',
      ans: 'You can cancel your subscription at any time. Your subscription will remain active until the end of the current billing period. You will not be charged again.'},
      { id: 3, title: 'Can I change my plan later?',
      ans: 'Yes, you can upgrade or downgrade your plan at any time. You will be charged or credited the difference at the end of the billing period.'},
      { id: 4, title: 'What information is added to an invoice?',
      ans: 'Your invoice will show the plan you are on, the number of users, and any additional charges. You can download your invoice as a PDF.'},
      { id: 5, title: 'How do I change my account email?',
      ans: 'You can change your account email by contacting our support team. We will send you an email to verify your new email address.'},
    ];
  
    const toggleFAQ = index => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="faq-container">
        <div className="faq-head">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about the product and billing.</p>
        </div>
        {questions.map((q, index) => (
          <div key={q.id} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
            <div className="toggle-faq">
              <h5 className="faq-title">{q.title}</h5>
              <button className='tog-btn'>
                  {activeIndex === index ? '-' : '+'}
              </button>
            </div>
            <div className="faq-content">{q.ans}</div>
          </div>
        ))}
        <div className="have-questions">
          <div className="contact-img">
            <img className='img-down' src={user} />
            <img id='img-up' src={user} />
            <img className='img-down' src={user} />
          </div>
          <h5>Have more questions?</h5>
          <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          <button className='contact-btn'>Get in Touch</button>
        </div>
      </div>
    )
}

export default Faq;
