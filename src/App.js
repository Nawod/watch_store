import classes from './App.module.css';
import ProductData from './ProductData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className = {classes.Topbar}>
          <img src="https://i.dlpng.com/static/png/6739216_preview.png" alt="Amazon Logo"/>
        </nav> 
      </header>

      <div className ={classes.Maincontainer}>
        <div className= {classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview"/>
        </div>
        <div className={classes.ProductData}>
          <h1 className={classes.productTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDes}>{ProductData.description}</p>

          <h3 className={classes.sectionHeader}>Select Color</h3>
          <div>
          <img className={[classes.ProductImage , classes.SelectedProductImage].join(' ')} src={"https://imgur.com/iOeUBV7.png"} alt="Black Color Watch"/>
            <img className={classes.ProductImage} src={"https://imgur.com/PTgQlim.png"} alt="Red Color Watch"/>
            <img className={classes.ProductImage} src={"https://imgur.com/Mplj1YR.png"} alt="Blue Color Watch"/>
            <img className={classes.ProductImage} src={"https://imgur.com/xSIK4M8.png"} alt="Purple Color Watch"/>
          </div>

          <h3 className={classes.sectionHeader}>Features</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
