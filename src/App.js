import React from 'react';
import './App.css';

function App() {
  const apiKEY = "c8d240cd165a450b9a480bb6d6b0bd93";
  const dataUrl = `https://newsapi.org/v2/everything?q=javascript&sortBy=publishedAt&apiKey=${apiKEY}`;
  
  const [items, setItems] = React.useState([]);

  const fetchData = async () => {

    
    	const response = await fetch(dataUrl);
    	const data = await response.json();
		  console.log(data);
      setItems(data["articles"]);
      
	
  };

  
  React.useEffect(() => {

    fetchData();

  }, []);


  return (
  <>
    <h1>
      Daily News
    </h1>
    <div className="container">
      
          {
            items.map((item,id) => {
              
              return (
                			<div className="card" key={id}>
                      <img src= { item.urlToImage } alt='news'/>
                      <div className="card-body">
                        <h3>{item.title}</h3>
                        <p> {item.description} </p>
                        <a href= { item.url } >Read</a>
                      </div>
                    </div>
              );
            })
          }
    </div>
    </>
  );
}

export default App;