import React, { useState } from "react";

const letters = ["A", "B", "C", "D", "E", "F", "G"];

function Question() {
  const [variants, setVariants] = useState([
    { id: 1, name: "Learn how to do this shit" },
    { id: 2, name: "Copy paste this shit" },
    { id: 3, name: "Don't give a fuck about this shit" },
    { id: 4, name: "None of the shits above" }
  ]);

  return (
    <div className="quiz">
      <p>How am I supposed to do this shit?</p>
      <form>
        {variants.map((variant, index) => (
          <span key={index} className="variant">
            <input type="radio" name="answer" id={`vr-${variant.id}`} />
            <span className="letter">{letters[index]}</span>
            <label htmlFor={`vr-${variant.id}`}>{variant.name}</label>
          </span>
        ))}
      </form>
    </div>
  );
}

export default Question;
