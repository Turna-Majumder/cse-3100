import { useEffect, useState } from 'react';
import { availableCats } from '../data/cats';

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [generalFilter, setGeneralFilter] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json()))
        );
        const catsWithImages = availableCats.map((cat, index) => ({
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

  const filteredCats = cats.filter(
    (cat) =>
      (breedFilter === '' || cat.breed === breedFilter) &&
      (nameFilter === '' || cat.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
      (generalFilter === '' ||
        cat.name.toLowerCase().includes(generalFilter.toLowerCase()) ||
        cat.age.includes(generalFilter) ||
        cat.breed.toLowerCase().includes(generalFilter.toLowerCase()))
  );

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      
    
      <div>
        <select className="form-select d-inline-block w-auto" onChange={(e) => setBreedFilter(e.target.value)}>
          <option value="">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
        </select>
        <input
          type="text"
          className="form-control d-inline-block w-auto ms-2"
          placeholder="Search by name"
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <input
          type="text"
          className="form-control d-inline-block w-auto ms-2"
          placeholder="Search"
          onChange={(e) => setGeneralFilter(e.target.value)}
        />
      </div>

      <hr className="my-4" />

      <div className="mt-2 row g-4 cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card" style={{ minHeight: '300px' }}>
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0" style={{ fontSize: '0.9rem' }}>Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
