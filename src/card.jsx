import "./productcard.scss";

//data 
const product = [
    {
        "id": "PRD001",
        "name": "Arres White",
        "description": "Avec notre sweat Arres, passez l'hiver au chaud ! 100% Coton",
        "price": 49.80,
        "img": "./09.webp",
        "category": "Sweat"
    }
];

let data = product[0];

export default function ProductCard() {
  const imgsrc = {
    backgroundImage: `url(${data.img})`,
  };
  

  return (
    <div>
      <div className="card">
        <div className="category">{data.category}</div>
        <div className="card-content">
          <div style={imgsrc} className="product-img" alt={data.name} />
          <div className="product-info">
            <div>
              <p className="name">{data.name}</p>
              <p className="id">#{data.id}</p>
            </div>
            <p className="description">{data.description}</p>
            <p className="price">{data.price} €</p>
          </div>
          <button className="cartbutton">Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
  
}

