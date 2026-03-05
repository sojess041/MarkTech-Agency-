const items = [
    "Constant Efficiency","Technology Marketing","O(1) Agency",
    "Reaching New Audiences","Precision. Scale. Impact.",
    "Constant Efficiency","Technology Marketing","O(1) Agency",
    "Reaching New Audiences","Precision. Scale. Impact.",
  ];
  
  export default function Ticker() {
    return (
      <div className="ticker">
        <div className="ticker-track">
          {items.map((item, i) => <div key={i} className="ticker-item">{item}</div>)}
        </div>
      </div>
    );
  }