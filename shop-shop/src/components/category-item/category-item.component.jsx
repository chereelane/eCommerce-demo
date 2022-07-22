import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
    const { imageUrl, title  } = category;
    return (
            <div  className="category-container">
                <div
                    className="background-img "
                    style={{backgroundImage: `url(${imageUrl})`}}/>
                <div className="category-body-container">
                    <h2 className="category-title">{title}</h2>
                </div>
            </div>
    )
}

export default CategoryItem