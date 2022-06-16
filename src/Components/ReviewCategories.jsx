import {useEffect, useState  } from 'react';
import { fetchCategoryList } from '../Utils/api';
import { Link, useNavigate } from 'react-router-dom';
import ReviewsByCategory from './ReviewsByCategories';

const CategoryList =() => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

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
        <button onClick={() => navigate(-1)}>Back to reviews</button>
        <section id="categoryList">
            <p>Please click on a categories below to filter the results</p>
               
            {categories.map((category) => {
                return ( 
                    <div key={category.slug}>
                        <Link to={`/categories/${category.slug}`}>
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
        </>
    )

}

export default CategoryList;