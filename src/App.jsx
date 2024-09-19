{
  /* <></> That's called React_fragments */
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
        {pizzaData.map((data, index) => {
          return (
            <>
              {" "}
              <div className="card" key={index}>
                <div className="img-card">
                  <img src={data.url} alt="" />
                </div>
                <div className="content">
                  <h1>{data.name}</h1>
                  <h4>{data.ingredients}</h4>
                  <p>${data.price}</p>
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
