export default function ContactUs() {
    const handleCopy = (text) => {
      navigator.clipboard.writeText(text);
      alert('Copied to clipboard: ' + text);
    };
  
    return (
      <section className="text-center mt-4">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.</p>
  
        <form className="mt-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input type="text" id="name" className="form-control" placeholder="Your name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input type="email" id="email" className="form-control" placeholder="Your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              <strong>Phone</strong>
            </label>
            <input type="text" id="phone" className="form-control" placeholder="Your Phone" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              <strong>Message</strong>
            </label>
            <textarea id="message" className="form-control" rows="4" placeholder="Your message (Optional)"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
  
        <section className="mt-4">
          <h3>Other Ways to Contact Us</h3>
          <p>
            <strong>Facebook:</strong> <a href="https://facebook.com/purrfectadoption">facebook.com/purrfectadoption</a>
          </p>
          <p>
            <strong>Contact Numbers:</strong>
            <button className="btn btn-link" onClick={() => handleCopy('+8801756998922')}>
              +8801756998922
            </button>
            ,
            <button className="btn btn-link" onClick={() => handleCopy('+8801727832585')}>
              +8801727832585
            </button>
          </p>
        </section>
      </section>
    );
  }
  