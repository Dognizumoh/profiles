import Writers from "./writers"

function App(){
  return(
    <div>
    <h1> Writers Profile</h1>
    <div className="container"> 
    {
      Writers.map((writers)=>(
        <div key={writers.id} className="card">
        <img src={`images/${writers.avatar}.png`}
        height = '300px'
        width = '300px' alt={writers.img}
        />
        <div className="textGroup">
        <h3>{writers.name}</h3>
        <p>{writers.email}</p>
        <p>{writers.phone}</p>
        
        </div>
        
        </div>
      )

      )
    }
    
    
    
    </div>
    
    
    
    
    </div>
    )
  
  }

  export default App