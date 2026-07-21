import React, { useState, useEffect } from 'react';

const App = () => {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setShoppingList(json))
  }, [])

  return (
    <div>
      <h1>Shop!</h1>
        <div style={{display: 'flex', gap: '12px',flexWrap: 'wrap', marginTop: '16px'}}>
        {shoppingList.map((item, index) => (
              <div key={item.id} style={{
              flex: '1 0 calc(33.333% - 16px)',
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '16px'}}>
              
              <img alt={item.title} src={item.image}
                style={{height: '100px', width: '100px',
                        borderRadius: '50%', objectFit: 'cover'}} />
              <div style={{fontSize: '15px', color: '#333'}}>
                <strong>User: {item.userId}</strong>{item.title}
              </div>
                </div>
          )
        )}
      </div>
    </div>
  )
}

export default App