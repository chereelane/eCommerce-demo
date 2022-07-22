import CategoryItem from "../category-item/category-item.component"
import './category-menu.styles.scss'

const CategoryMenu = ({ categories }) => {
    return(
        <div className="categories-menu-container">
            <h1 className="title">Shop Shop</h1>
            <div className="categories-container">
            {categories.map(( category ) => (
                <CategoryItem key={ category.id} category={category}/>
            ))}
            </div>
        </div>

    );
};

export default CategoryMenu;