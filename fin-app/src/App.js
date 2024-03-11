
import NavBar from "./components/NavBar";

function App(props) {
  return (
    <div> 
      <NavBar />
      <div className="w-3/4 m-auto">
          <div className="mt-50">
              {props.data.map(d => (
                <div className="bg-white h-[450px] text-black round-xl">
                  <div>
                      <img src={d.img} alt="" className="h-50 w-500"/>
                  </div>

                  <div>
                      <p>{d.name}</p>
                      <p>{d.review}</p>
                      <button>Read More</button>
                  </div>
                </div>
              ))}
          </div>
      </div>

    </div>
   
  );
}

// const data = 


export default App;
