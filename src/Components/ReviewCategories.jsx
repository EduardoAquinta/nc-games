import {useEffect, useState } from 'react';
import { fetchCategoryList } from '../Utils/api';
import CategoryListing from './CategoryListing';

const CategoryList =() => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetchCategoryList()
        .then((data) => {
            setCategories(data);
            setIsLoading(false);
        })
    }, []);


    if( isLoading) return <p>Fetching categories now...please wait...</p>

    return( 
        <section id="categoryListing">
            <p>Please Click on the category you wish to view...</p>
            {categories.categories.map((category) => {
                return (
                    <CategoryListing
                    category_name={category.slug}
                    description={category.description}
                    ></CategoryListing>
                )
            })}
        </section>
    )

}

export default CategoryList;