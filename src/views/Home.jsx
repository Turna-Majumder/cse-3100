import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json()))
        );
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'justify' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
          </p>
        </div>
      </section>

      <section className="mt-5">
  <h2>Featured Cats</h2>
  <div
    className="mt-2 row g-4"
    id="cats-container"
    style={{
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',      
      flexWrap: 'wrap',         
    }}
  >
    {cats.map((cat, i) => (
      <div key={i} className="col-md-4" style={{ textAlign: 'center' }}>
        <div className="cat-card" style={{ width: '400px', height: '300px' }}>
          <img
            src={cat.image}
            alt={cat.name}
            className="img-fluid mb-2"
            style={{
              borderRadius: '8px',
              width: '100%', 
              height: '100%',
              objectFit: 'cover', 
            }}
          />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
