import {data} from './api/db'

function App() {
  console.log(data)

  return (
    <div className="App">
      <div>
        {data.map(product => (
          <div>
            <p>{product.title}</p>
            <img src={product.image}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
