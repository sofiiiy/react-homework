function Car(props) {
  const carStyle = {
    boxShadow: "0 0 5px #ccc",
    display: "inline-block",
    padding: "15px",
    margin: "5px",
    textAlign: "center",
    background: `${props.color}`
  };

  return (
    <div className="Car" style={carStyle}>
      <h1>{props.name}</h1>
      <p>{props.year}</p>
      <span>
        id <strong>{Math.floor(Math.random() * 100)}</strong>
      </span>
      <br />
      <input
        type="text"
        onChange={(e) => {
          props.onCarClick(e.target.value, props.idx);
        }}
        value={props.name}
      />
      <br />
      <button onClick={props.onChange}>Change title</button>
      <div className="action">
        <button onClick={props.deleteCard}>Delete card</button>
        <button onClick={props.changeBg}>Change background</button>
      </div>
    </div>
  );
}

export default Car;
