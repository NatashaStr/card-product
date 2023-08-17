import React from "react";
import { DescriptionButton } from "./styled";

function Description({ text, onShowMore, isShowAllDescription }) {
  return (
    <div>
      {text}
      <DescriptionButton onClick={onShowMore}>
        {isShowAllDescription ? "Скрыть" : "Подробнее"}
      </DescriptionButton>
    </div>
  );
}
export default Description;
