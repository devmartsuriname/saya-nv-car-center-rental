import React, { useState } from 'react';

interface CheckboxState {
    [key: string]: boolean;
}

const CarListingRight: React.FC = () => {
    const [valueRange, setValueRange] = useState<number>(50);
    const min: number = 100;
    const max: number = 500;
    const percentage: number = ((valueRange - min) / (max - min)) * 100;

    const [categories, setCategories] = useState<CheckboxState>({
        skipper: true,
        skipper2: false,
        skipper3: false,
        skipper4: false,
        skipper5: false,
        skipper6: false,
        skipper7: false,
    });

    const [features, setFeatures] = useState<CheckboxState>({
        feature1: false,
        feature2: false,
        feature3: false,
        feature4: false,
        feature5: false,
        feature6: false,
        feature7: false,
    });

    const [fuelTypes, setFuelTypes] = useState<CheckboxState>({
        f_type1: false,
        f_type2: false,
        f_type3: false,
        f_type4: false,
        f_type5: false,
        f_type6: false,
    });

    const [selectedRating, setSelectedRating] = useState<string>('');

    const handleCategoryChange = (name: string) => {
        setCategories(prev => ({ ...prev, [name]: !prev[name] }));
    };

    const handleFeatureChange = (name: string) => {
        setFeatures(prev => ({ ...prev, [name]: !prev[name] }));
    };

    const handleFuelTypeChange = (name: string) => {
        setFuelTypes(prev => ({ ...prev, [name]: !prev[name] }));
    };

    const handleRatingChange = (rating: string) => {
        setSelectedRating(rating);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const search = form.search.value;
        if (search) {
            form.reset();
        }
    };

    return (
        <div className="col-xl-3">
            <div className="car-listing-page-one__right">
                <div className="car-listing__sidebar">
                    <div className="car-listing__search car-listing__sidebar-single">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name='search' placeholder="Search" />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>

                    <div className="car-listing__price-ranger car-listing__sidebar-single">
                        <h3 className="car-listing__sidebar-title">Filter Price</h3>
                        <div className="price-ranger">
                            <div className="ranger-min-max-block">
                                <input
                                    type="range"
                                    min={min}
                                    max={max}
                                    value={valueRange}
                                    onChange={(e) => setValueRange(Number(e.target.value))}
                                    style={{
                                        WebkitAppearance: 'none',
                                        appearance: 'none',
                                        width: '100%',
                                        height: '8px',
                                        borderRadius: '5px',
                                        outline: 'none',
                                        background: `linear-gradient(to right, #FFB51D ${percentage}%, #ddd ${percentage}%)`
                                    }}
                                    className="custom-range-slider"
                                />
                                <div className="d-flex justify-content-between valuRange">
                                    <div className="d-flex values">
                                        <span>{valueRange}</span>
                                        <span>-</span>
                                        <span>{max}</span>
                                    </div>
                                    <button>Filter</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="car-listing__category car-listing__sidebar-single">
                        <h3 className="car-listing__sidebar-title">Categories</h3>
                        <ul className="list-unstyled">
                            {[
                                { key: 'skipper', id: 'skipper', label: 'All', count: '200' },
                                { key: 'skipper2', id: 'skipper2', label: 'sport cars', count: '50' },
                                { key: 'skipper3', id: 'skipper3', label: 'sedan', count: '100' },
                                { key: 'skipper4', id: 'skipper4', label: 'luxury cars', count: '150' },
                                { key: 'skipper5', id: 'skipper5', label: 'Minibus', count: '80' },
                                { key: 'skipper6', id: 'skipper6', label: 'Coupes', count: '60' },
                                { key: 'skipper7', id: 'skipper7', label: 'Trucks', count: '90' },
                            ].map(item => (
                                <li key={item.key}>
                                    <div className="checked-box">
                                        <input
                                            type="checkbox"
                                            name={item.key}
                                            id={item.id}
                                            checked={categories[item.key]}
                                            onChange={() => handleCategoryChange(item.key)}
                                        />
                                        <label htmlFor={item.id}><span></span>{item.label}</label>
                                    </div>
                                    <div className="counts-box">
                                        <p>{item.count}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="car-listing__category car-listing__sidebar-single">
                        <h3 className="car-listing__sidebar-title">Car Features</h3>
                        <ul className="list-unstyled">
                            {[
                                { key: 'feature1', label: 'All', count: '200' },
                                { key: 'feature2', label: 'sport cars', count: '50' },
                                { key: 'feature3', label: 'sedan', count: '100' },
                                { key: 'feature4', label: 'luxury cars', count: '150' },
                                { key: 'feature5', label: 'Minibus', count: '80' },
                                { key: 'feature6', label: 'Coupes', count: '60' },
                                { key: 'feature7', label: 'Trucks', count: '90' },
                            ].map(item => (
                                <li key={item.key}>
                                    <div className="checked-box">
                                        <input
                                            type="checkbox"
                                            name={item.key}
                                            id={item.key}
                                            checked={features[item.key]}
                                            onChange={() => handleFeatureChange(item.key)}
                                        />
                                        <label htmlFor={item.key}><span></span>{item.label}</label>
                                    </div>
                                    <div className="counts-box">
                                        <p>{item.count}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="car-listing__category car-listing__tuel-type car-listing__sidebar-single">
                        <h3 className="car-listing__sidebar-title">Fuel Type</h3>
                        <ul className="list-unstyled">
                            {[
                                { key: 'f_type1', label: 'Diesel', count: '20' },
                                { key: 'f_type2', label: 'Gasoline', count: '25' },
                                { key: 'f_type3', label: 'Petrol', count: '29' },
                                { key: 'f_type4', label: 'Electric', count: '40' },
                                { key: 'f_type5', label: 'Ethanol', count: '20' },
                                { key: 'f_type6', label: 'Hybrid', count: '27' },
                            ].map(item => (
                                <li key={item.key}>
                                    <div className="checked-box">
                                        <input
                                            type="checkbox"
                                            name={item.key}
                                            id={item.key}
                                            checked={fuelTypes[item.key]}
                                            onChange={() => handleFuelTypeChange(item.key)}
                                        />
                                        <label htmlFor={item.key}><span></span>{item.label}</label>
                                    </div>
                                    <div className="counts-box">
                                        <p>{item.count}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="car-listing__rating car-listing__sidebar-single">
                        <h3 className="car-listing__sidebar-title">Reviews</h3>
                        <div className="car-listing__rating-box">
                            <ul className="list-unstyled">
                                {[
                                    { id: 'fivestar', stars: 5 },
                                    { id: 'fourstar', stars: 4 },
                                    { id: 'threestar', stars: 3 },
                                    { id: 'twostar', stars: 2 },
                                    { id: 'onestar', stars: 1 },
                                ].map(item => (
                                    <li key={item.id}>
                                        <input
                                            type="radio"
                                            id={item.id}
                                            name="rating"
                                            checked={selectedRating === item.id}
                                            onChange={() => handleRatingChange(item.id)}
                                        />
                                        <label htmlFor={item.id}>
                                            <i></i>
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span key={i} className={`fas fa-star${i >= item.stars ? ' gray' : ''}`}></span>
                                            ))}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="car-listing__google-map car-listing__sidebar-single">
                        <h3 className="car-listing__sidebar-title">Google Map</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                            className="car-listing__google-map-box"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CarListingRight;
