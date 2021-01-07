import React,{ Component } from 'react';
import SHOP_DATA from './Shopdata';
import CollectionPreview from '../../components/Collection-preview/CollectionPreview'

class Shoppage extends Component
{
  constructor() {
    super();
    this.state={
      collections:SHOP_DATA
    }
  }
  render() {
    return(
      <div className='shop-page'>
        {this.state.collections.map(collection => (<CollectionPreview key={collection.id} title={collection.title} items={collection.items} />))}
      </div>
    )
  }
}

export default Shoppage