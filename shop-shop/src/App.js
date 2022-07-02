import logo from './favicon.png';
import './categories.styles.scss'

const  App = () => {

    const categories = [
        {
            id: 1,
            title: 'Fashion',
        },
        {
            id: 2,
            title: 'Architecture',
        },
        {
            id: 3,
            title: 'Nature',
        },
        {
            id: 4,
            title: 'Design',
        },
        {
            id: 5,
            title: 'Blog',
        },
        {
            id: 6,
            title: 'Lifestyle',
        },
    ]
  return (
    <div className="App">
        <h1 className="title"> Shop Shop</h1>
      <div className="categories-container">
          {categories.map(({title}) => (
              <div className="category-container hover">
                  <div className="background-img">
                      <img src="" alt=""/>
                  </div>
                  <div className="category-body-container">
                      <h2>{title}</h2>
                  </div>
              </div>
              ))}
      </div>
    </div>
  );
}

export default App;


