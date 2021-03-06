import { Outlet } from 'react-router-dom'
import CategoryMenu from "../../category-menu/category-menu.component";

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'Fashion',
            // imageUrl: require('./images/hp-fashion.jpg'),
            imageUrl: require('../../../images/hp-fashion.jpg'),
        },
        {
            id: 2,
            title: 'Architecture',
            imageUrl: require('../../../images/hp-architecture.jpg'),
        },
        {
            id: 3,
            title: 'Nature',
            imageUrl: require('../../../images/hp-nature.jpg'),
        },
        {
            id: 4,
            title: 'Design',
            imageUrl: require('../../../images/hp-design.jpg'),
        },
        {
            id: 5,
            title: 'Blog',
            imageUrl: require('../../../images/blog-random-1.jpg'),
        },
        {
            id: 6,
            title: 'Lifestyle',
            imageUrl: require('../../../images/hp-lifestyle.jpg'),
        },
    ];
    return (
        <div>
            <Outlet />
            <CategoryMenu categories={categories}/>
        </div>
    );
};

export default Home