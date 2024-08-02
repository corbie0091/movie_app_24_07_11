import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TbArrowBarToUp } from "react-icons/tb";

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 24px;
  }

  @media (max-width: 360px) {
    width: 50px;
    height: 50px;
    border-width: 1px;

    svg {
      font-size: 20px;
    }
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
