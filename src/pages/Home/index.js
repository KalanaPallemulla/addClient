import React, { useState } from "react";
import Container from "../../components/Container";
import Card from "./Card";

export default function Home() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  };
  return (
    <Container>
      <div className="h-36">
        <button className="block md:hidden" onClick={handleShow}>
          {!isShow ? "Show" : "Hide"}
        </button>
        <div className={` md:grid md:grid-cols-6`}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3">
        <div className="sm:col-span-3 p-4 ">
          <div className="sm:grid sm:grid-cols-3 ">
            <div className="p-2">
              <Card />
            </div>
            <div className="p-2">
              <Card />
            </div>
            <div className="p-2">
              <Card />
            </div>
            <div className="p-2">
              <Card />
            </div>
            <div className="p-2">
              <Card />
            </div>
            <div className="p-2">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
