import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TbArrowBarToUp } from "react-icons/tb";

const Button = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  font-size: 40px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s;
  z-index: 99;

  svg {
    padding: 6px;
    font-size: 40px;
  }
`;

export const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button visible={visible} onClick={scrollToTop}>
      <TbArrowBarToUp />
    </Button>
  );
};
