const teamMembers = [
    { name: 'Devid Leo', role: 'Founder & CEO', photo: 'https://r2.erweima.ai/imgcompressed/img/compressed_ab2ab9ba050488f43d71862286a0d1b9.webp' },
    { name: 'Jack Smith', role: 'Marketing Manager', photo: 'https://static.vecteezy.com/system/resources/previews/044/249/597/non_2x/a-young-handsome-smiling-american-man-free-png.png' },
    { name: 'Murphy Cooper', role: 'Lead Developer', photo: 'https://www.looper.com/img/gallery/whatever-happened-to-young-murph-from-interstellar/l-intro-1615510602.jpg' },
    { name: 'Riana Marchant', role: 'Volunteer Coordinator', photo: 'https://img.pikbest.com/photo/20240620/confident-young-american-woman-lawyer-office-business-suit_10628049.jpg!bw700' },
  ];
  
  export default function AboutUs() {
    const contactNumbers = ['01756998922', '01727832585'];
  
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
      alert(`Copied ${text} to clipboard!`);
    };
  
    return (
      <section className="text-center">
        
  
        <h3 className="mt-4">Our Mission</h3>
        <p>
          At Purrfect Adoption, our mission is to rescue, rehabilitate, and rehome cats in need. We strive to provide a safe
          and nurturing environment for every cat, ensuring they find a loving family to call their own.
        </p>
  
        <h3 className="mt-5">Our History</h3>
        <p>
          Founded in 2015, Purrfect Adoption began as a small group of passionate animal lovers. Over the years, we have
          grown into a thriving organization, thanks to the support of our community and the dedication of our volunteers.
          To date, we have successfully rehomed over 1,000 cats.
        </p>
  
        <h3 className="mt-5">Contact Information</h3>
        <p>Feel free to reach out to us through the following numbers:</p>
        {contactNumbers.map((number, index) => (
          <p key={index}>
            <strong>{number}</strong>
            <button className="btn btn-sm btn-outline-primary ms-2" onClick={() => copyToClipboard(number)}>
              Copy
            </button>
          </p>
        ))}
  
        <h3 className="mt-5">Meet Our Team</h3>
        <div className="row mt-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-3">
              <div className="card">
                <img
                  src={member.photo}
                  className="card-img-top"
                  style={{ height: '250px', width: '280px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">{member.name}</h5>
                  <p className="card-text text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  