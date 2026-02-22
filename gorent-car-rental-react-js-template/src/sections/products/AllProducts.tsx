import React, { useState } from 'react';
import CustomSelect from '../../components/elements/CustomSelect';
import ProductGridView from './ProductGridView';
import ProductListView from './ProductListView';
import type { ProductItem } from '../../all-content/products/productType';
import { productsList } from '../../all-content/products/productData';

const AllProducts: React.FC = () => {
    const [sortValue, setSortValue] = useState<string>("Sort by popular");
    const [isGrid, setGrid] = useState<boolean>(true)

    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 12;
    // Calculate paginated product
    const totalPages = Math.ceil(productsList.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = productsList.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <div className="col-xl-9 col-lg-12">
            <div className="product__items">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="product__showing-result">
                            <div className="product__showing-text-box">
                                <p className="product__showing-text">Showing 1–12/14 of 14 results</p>
                            </div>
                            <div className="product__showing-sort">
                                <div className="select-box">
                                    <CustomSelect optionArray={[
                                        { id: 1, value: `Sort by popular`, label: `Sort by popular` },
                                        { id: 2, value: `Sort by Price`, label: `Sort by Price` },
                                        { id: 3, value: `Sort by Ratings`, label: `Sort by Ratings` },
                                    ]}
                                        value={sortValue}
                                        onChange={(v) => setSortValue(v)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product__all">
                    <div className="product__all-tab">
                        <div className="product__all-tab-button">
                            <ul className="tabs-button-box clearfix">
                                <li className={`tab-btn-item ${isGrid ? 'active-btn-item' : ''}`} onClick={() => setGrid(true)}>
                                    <div className="product__all-tab-button-icon one">
                                        <i className="fa fa-solid fa-bars"></i>
                                    </div>
                                </li>
                                <li className={`tab-btn-item ${!isGrid ? 'active-btn-item' : ''}`} onClick={() => setGrid(false)}>
                                    <div className="product__all-tab-button-icon">
                                        <i className="fa fa-solid fa-list-ul"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="tabs-content-box">
                            <div className="tab-content-box-item tab-content-box-item-active">
                                <div className="product__all-tab-content-box-item">
                                    <div className="product__all-tab-single">
                                        <div className="row">
                                            {
                                                currentProducts.map((item: ProductItem) => isGrid ? <ProductGridView product={item} key={item?.id} /> : <ProductListView product={item} key={item?.id} />)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="styled-pagination text-center clearfix list-unstyled">
                        <li className="arrow prev">
                            <button
                                onClick={(e) => { handlePageChange(currentPage - 1); e.preventDefault() }}
                                disabled={currentPage === 1}
                            ><span className="fas fa-angle-left"></span> </button>
                        </li>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <li
                                key={index}
                                className={`count ${currentPage === index + 1 ? "active" : ""}`}
                            >
                                <button
                                    onClick={() => handlePageChange(index + 1)}
                                    className="pg-btn"
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                        <li className="arrow next">
                            <button aria-label="Next"
                                onClick={(e) => { handlePageChange(currentPage + 1); e.preventDefault() }}
                                disabled={currentPage === totalPages}
                            >
                                <span className="fas fa-angle-right"></span>
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AllProducts;