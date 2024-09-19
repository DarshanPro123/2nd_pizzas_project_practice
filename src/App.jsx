{
  /* <></> That's called React_fragments 


  some rules of jsx 
  1.. any js javascript expression add to use "{}" currly brases
  2.. we can use so many methods in HTML usiing jsx to map, reduce , add  objects and array 
  in file of html
  3.. used in component to more than one element in html so used <></> fragment of react in jsx..   
  
  */
}

import "./App.css";
import pizzaData from "../public/data";

const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;

export const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Fast react Pizza com.</h1>
      </div>
    </>
  );
};

export const Menu = () => {
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>

        {/* props example */}
        <Pizza nme="pizzas" nmeprice={100} />
      </main>{" "}
    </>
  );
};

export const Pizza = () => {
  // console.log(nme, nmeprice);

  return (
    <>
      <div className="cards">
        {pizzaData.map((data) => {
          return (
            <>
              {" "}
              <div
                className={`card ${data.soldOut ? "sold-out" : ""}`}
                key={data.name}
              >
                <div className="img-card">
                  <img src={data.url} alt="" />
                </div>
                <div className="content">
                  <h1>{data.name}</h1>
                  <h4>{data.ingredients}</h4>
                  <p>${data.price}</p>
                  <p>{data.soldOut ? "SOLD OUT" : ""}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen); //that js logic using in jsx
  return (
    <>
      <footer className="footer">
        {" "}
        <h1>we are best pizza supplier</h1>
      </footer>
    </>
  );
};
