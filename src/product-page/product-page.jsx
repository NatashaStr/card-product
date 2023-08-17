import React, { useState } from "react";
import Title from "/src/title/title";
import Code from "/src/code/code";
import Slider from "/src/slider/slider";
import Description from "/src/description/description";
import Comments from "/src/comments/comments";
import Popularity from "/src/popularity/popularity";
import {
  ProductInfoLine,
  BuyButton,
  PageCounter,
  PageFullPrice,
  StyledProductPage,
  Header,
  ProductWrapper,
  ProductInfo,
  DeliveryValue
} from "./styled";
import Tabs from "/src/tabs/tabs";
import PopUp from "../popup/popup";
import Order from "../order/order";
import Accordion from "../accordion/accordion";

function ProductPage({ product, showInfoInAccordion }) {
  const MAX_TEXT_SIZE = 200;
  const COMMENTS_COUNT = 3;
  const [productCount, setProductCount] = useState(1);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowAllDescription, setIsShowAllDescription] = useState(false);
  const [commentsShow, setCommentsShow] = useState(COMMENTS_COUNT);

  const price = product.price * productCount;
  const oldPrice = product.oldPrice * productCount;
  const tabs = [
    {
      title: "Описание",
      content: (
        <Description
          text={
            isShowAllDescription
              ? product.description
              : product.description.slice(0, MAX_TEXT_SIZE)
          }
          onShowMore={() => setIsShowAllDescription(!isShowAllDescription)}
          isShowAllDescription={isShowAllDescription}
        />
      )
    },
    {
      title: "Комментарии",
      content: (
        <Comments
          comments={product.comments.slice(0, commentsShow)}
          onShowMore={() => setCommentsShow(commentsShow + COMMENTS_COUNT)}
          allCommentsLength={product.comments.length}
        />
      )
    }
  ];

  return (
    <StyledProductPage>
      <Header>
        <Title>{product.name}</Title>
        <Code>{product.code}</Code>
      </Header>
      <ProductWrapper>
        <Slider images={product.images} />
        <ProductInfo>
          <ProductInfoLine>
            Цена: <PageFullPrice oldPrice={oldPrice} price={price} />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество:{" "}
            <PageCounter
              value={productCount}
              onChange={setProductCount}
              minValue={1}
            />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>
              Доставка:
              <DeliveryValue>{product.delivery}</DeliveryValue>
            </span>
          </ProductInfoLine>
          <BuyButton size="large" onClick={() => setIsShowPopup(true)}>
            Купить
          </BuyButton>
          <Popularity count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      {showInfoInAccordion ? <Accordion items={tabs} /> : <Tabs tabs={tabs} />}
      <PopUp
        isShow={isShowPopup}
        onClose={() => setIsShowPopup(false)}
        title="Оформление заказа"
      >
        <Order />
      </PopUp>
    </StyledProductPage>
  );
}

export default ProductPage;
