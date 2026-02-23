import React from 'react';
import useGorentContext from '../context/useGorentContext';

const SearchProp: React.FC = () => {
    const { isSearch, setIsSearch } = useGorentContext();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const search = form.search.value;
        
        if (search) { 
            form.reset();
        };
    }

    return (
        <div className={`search-popup ${isSearch ? 'active' : ''}`}>
            <div className="search-popup__overlay search-toggler" onClick={() => setIsSearch((pre) => !pre)}></div>
            <div className="search-popup__content">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search" className="sr-only">search here</label>
                    <input type="text" id="search" name='search' placeholder="Search Here..." />
                    <button type="submit" aria-label="search submit" className="thm-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchProp;