// Ваша задача сделать счетчик (counter).
// У вас должны быть три кнопки: Кнопка “Плюс”, “Минус” и “Reset”.
// Когда нажимаешь плюс счетчик должен увеличиваться на один, когда минус то уменьшаться на один.
// Кнопка Reset должна обнулять весь счетчик.
import React, { useState } from "react";

const Counter = () => {
  let [nums, setNums] = useState(0);
  return (
    <>
      <div id="digits">{nums}</div>
      <button id="btnPlus" onClick={() => setNums(++nums)}>
        “Плюс”
      </button>
      <button id="btnMinus" onClick={() => setNums(--nums)}>
        “Минус”
      </button>
      <button id="btnReset" onClick={() => setNums(0)}>
        “Reset”
      </button>
      <button className="dig" onClick={() => setNums(1)}>
        1
      </button>
      <button className="dig" onClick={() => setNums(2)}>
        2
      </button>
      <button className="dig" onClick={() => setNums(3)}>
        3
      </button>
      <button className="dig" onClick={() => setNums(4)}>
        4
      </button>
      <button className="dig" onClick={() => setNums(5)}>
        5
      </button>
      <button className="dig" onClick={() => setNums(6)}>
        6
      </button>
      <button className="dig" onClick={() => setNums(7)}>
        7
      </button>
      <button className="dig" onClick={() => setNums(8)}>
        8
      </button>
      <button className="dig" onClick={() => setNums(9)}>
        9
      </button>
      <button className="dig" onClick={() => setNums(0)}>
        /
      </button>
      <button className="dig" onClick={() => setNums(0)}>
        0
      </button>
      <button className="dig" onClick={() => setNums(0)}>
        *
      </button>
    </>
  );
};
export default Counter;
