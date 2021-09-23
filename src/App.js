import React from 'react';
import classes from './App.module.css';
import ProductData from './ProductData/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/topbar';

class App extends React.Component{
  state = {
    productData: ProductData,
    currentPreviewImagePos : 0,
    showHeartBeat : 0,
  }

  onColorOptionClick = (pos) =>{
    this.setState({
      currentPreviewImagePos:pos
    })
  }

  onFeatureClick = (pos) =>{
    this.setState({
      showHeartBeat:pos
    })
  }
  
  
  render() {
    return (
      <div className="App">
          <Topbar />
  
        <div className ={classes.Maincontainer}>
          <div className= {classes.ProductPreview}>
            <ProductPreview currentPreviewImageImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
              showHeartBeat={this.state.showHeartBeat} />
          </div>

          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureClick={this.onFeatureClick} 
            showHeartBeat={this.state.showHeartBeat}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
