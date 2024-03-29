// components
import ButtonSubmit from '../components/ButtonSubmit';
// email js
import EmailJS from '@emailjs/browser';
// sweet alert 2
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    EmailJS.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();

    // alert
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: 'Thank you!',
      text: 'I will get back to you as soon as possible.',
      icon: 'success',
    });
  };

  return (
    <div className='h-auto bg-light-blue py-20 md:py-24'>
      <div className='mx-auto w-4/5'>
        <h1 className='sub-st mb-10'>Contact</h1>
        <div className='glass rounded-md px-8'>
          <span className='hidden absolute md:block md:top-10 -right-12 -rotate-12 w-24 h-8 bg-clear-tape md:border-l-2 md:border-r-2 md:border-dotted'></span>
          <span className='hidden absolute md:block md:bottom-12 -left-12 rotate-12 w-24 h-8 bg-clear-tape md:border-l-2 md:border-r-2 md:border-dotted'></span>

          <form onSubmit={sendEmail} required>
            <h2 className='text-dark-gray text-2xl text-center font-bebas pt-8 md:text-3xl'>
              Lets Connect
            </h2>
            <p className='text-dark-gray text-lg opacity-90 text-center font-arial pb-8'>
              Please feel free to contact or connect me on{' '}
              <a
                href='https://www.linkedin.com/in/emmymanning'
                target='_blank'
                rel='noopener noreferrer'
                className='font-bebas text-lg uppercase pl-0.5 hover:underline underline-offset-4 hover:opacity-70 transition-all duration-300'
              >
                LinkedIn
              </a>
              .
              <br />I will get back to you as soon as possible.
            </p>
            {/* contact form */}
            <div className='py-2'>
              <input
                type='text'
                placeholder='Name'
                name='name'
                className='contact-st'
                required
              />
            </div>
            <div className='py-2'>
              <input
                type='email'
                placeholder='Email'
                name='email'
                className='contact-st'
                required
              />
            </div>
            <div className='pt-2'>
              <textarea
                placeholder='Message'
                name='message'
                rows='10'
                cols='50'
                className='contact-st'
                required
              />
            </div>
            <ButtonSubmit name='Send' link='#' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
