import React from "react";

function Popularity({ count }) {
  let result = null;
  if (count === 0) {
    return (result = <p>Будь первым. Поделись впечатлениями</p>);
  }
  if (count > 5) {
    return (result = <p style={{ color: "green" }}>Проверенный товар</p>);
  }
  return result;
}

export default Popularity;
