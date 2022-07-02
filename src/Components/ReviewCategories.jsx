import {useEffect, useState  } from 'react';
import { fetchCategoryList } from '../Utils/api';
import { Link } from 'react-router-dom';
import Reviews from './Reviews';

const CategoryList =() => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCategoryList()
        .then((reviewsFromApi) => {
            setCategories(reviewsFromApi.categories);
            setIsLoading(false);
        })
    }, []);
    

    if( isLoading) return <p>Fetching categories now...please wait...</p>
    return(
        <> 
        <section className="category-list">
               
            {categories.map((category) => {
                return ( 
                    <div key={category.slug} className="category-list">
                        <Link to={`/categories/${category.slug}`}>
                        <button className="category-buttons"
                        key={category.slug}
                        value={category.slug}
                        >{category.slug}
                        </button>
                        </Link>
                    </div>            
                )
            })}
            {/* <p>Please select a category</p> */}
                    <Reviews />
        </section>
        </>
    )

}

export default CategoryList;