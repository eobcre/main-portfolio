// EmailJS
import EmailJS from 'emailjs-com';
// Components
import { ButtonSubmit } from '../components/ButtonSubmit';

export const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    EmailJS.sendForm(
      'service_lkcx1hs',
      'template_ia4piap',
      e.target,
      '8amCye5YPJ3JRgePo'
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  // JSX
  return (
    <div className='bg-light-blue h-auto py-20'>
      <div className='mx-auto w-4/5'>
        <h1 className='sub-st'>Contact</h1>
        <div className='glass px-8'>
          <span className='hidden absolute md:block md:top-10 -right-12 -rotate-12 w-24 h-8 bg-clear-tape md:border-l-2 md:border-r-2 md:border-dotted'></span>
          <span className='hidden absolute md:block md:bottom-12 -left-12 rotate-12 w-24 h-8 bg-clear-tape md:border-l-2 md:border-r-2 md:border-dotted'></span>
          <form onSubmit={sendEmail} required>
            {/* Title */}
            <h2 className='text-dark-gray text-2xl text-center font-bebas pt-8 md:text-3xl'>
              Lets Connect
            </h2>
            <p className='text-dark-gray text-lg opacity-90 text-center font-arial pb-8'>
              Feel free to contact or connect me on{' '}
              <a
                href='https://www.linkedin.com/in/emmymanning'
                target='_blank'
                rel='noopener noreferrer'
                className='font-bebas text-lg uppercase pl-0.5 hover:underline underline-offset-4 hover:opacity-70'
              >
                LinkedIn
              </a>
              .
              <br />I will get back to you as soon as possible.
            </p>
            {/* "Name" field */}
            <div className='py-2'>
              <input
                type='text'
                placeholder='Name'
                name='name'
                className='contact-st'
                required
              />
            </div>
            {/* "Email" field */}
            <div className='py-2'>
              <input
                type='email'
                placeholder='Email'
                name='email'
                className='contact-st'
                required
              />
            </div>
            {/* "Message" field */}
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
