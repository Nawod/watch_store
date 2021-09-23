import React from "react";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductImage]
        if(pos === props.currentPreviewImagePos) {
            classArr.push(classes.SelectedProductImage);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName}
             onClick={() => props.onColorOptionClick(pos)} />
        );
    
    })

    const featureList = props.data.featureList.map((item,pos) => {
        const classArr2 = [classes.FeatureItem]
        if(pos === props.showHeartBeat) {
            classArr2.push(classes.SelectedFeatureItem);
        }
        return(
            <button key={pos} className={classArr2.join(' ')} onClick={() => props.onFeatureClick(pos)}>{item}</button>
        );
    })

    return(
        <div className={classes.ProductData}>
          <h1 className={classes.productTitle}>{props.data.title}</h1>
          <p className={classes.ProductDes}>{props.data.description}</p>

          <h3 className={classes.sectionHeader}>Select Color</h3>
          <div>
              {colorOptions}
          </div>

          <h3 className={classes.sectionHeader}>Features</h3>
          <div>
            {featureList}
          </div>

          <button className={classes.buyButton}>Buy Now</button>
        </div>
    );
}

export default ProductDetails;