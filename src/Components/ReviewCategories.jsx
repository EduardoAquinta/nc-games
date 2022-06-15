import {useEffect, useState  } from 'react';
import { fetchCategoryList } from '../Utils/api';
import { Link } from 'react-router-dom';
import ReviewsByCategory from './ReviewsByCategories';

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
        <section id="categoryList">
            <p>Please click on a categories below to filter the results</p>
               
            {categories.map((category) => {
                return ( 
                    <div>
                        <Link to={`/reviews/${category.slug}`}>
                        <button id="categoryButtons"
                        key={category.slug}
                        value={category.slug}
                        >{category.slug}
                        </button>
                        </Link>
                    </div>            
                )
            })}
                    <p>Total Categories = {categories.length}</p>
                    <ReviewsByCategory />
                    
        </section>
    )

}

export default CategoryList;