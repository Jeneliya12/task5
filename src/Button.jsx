import "./button.css";
function Button({ label }) {
  return (
    <div className="button">
      <button>{label}</button>
    </div>
  );
}

export default Button;
