export function Model({ id, header, body, footer }) {
  return (
    <div id={id || "Model"} className="model">
      <div className="header">
        <span className="close-model-icon">&times;</span>
        <h2>{header ? header : "Header"}</h2>
      </div>
      <div className="body">
        {body ? (
          body
        ) : (
          <div>
            <p>This is our model body</p>
          </div>
        )}
      </div>
      <div className="footer">{footer ? footer : <h2>footer</h2>}</div>
    </div>
  );
}
