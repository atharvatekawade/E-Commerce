import React from 'react';
import './CollectionPreview.scss';
import '../Collection-item/CollectionItem';
import CollectionItem from '../Collection-item/CollectionItem';

const CollectionPreview = (props) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{props.title.toUpperCase()}</h1>
      <div className='preview'>
        {props.items.map((item,index) => {
          if(index<4) {
            return (
              <CollectionItem key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
            )
          }
        })}
      </div>
    </div>
  )
}

export default CollectionPreview