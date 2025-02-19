import "./Classes.css";

export default function Classes() {
  const color = "blue";
  const dangerous = true;

  return (
    <div id="wd-classes">
      <h2>Classes</h2>
      
      {/* Conditional background color (Red or Green) */}
      <div className={`wd-bg-${dangerous ? "red" : "green"} wd-fg-black wd-padding-10px`}>
        Dangerous background
      </div>

      {/* Dynamically assigned blue background */}
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Dynamic {color} background
      </div>
      
      <hr />
    </div>
  );
}
