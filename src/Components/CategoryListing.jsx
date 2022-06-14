export default function CategoryListing({category_name, description}) {
    return(
        <li id="categoryList">
            <article>
                {category_name} - {description}
            </article>
        </li>
    )
}