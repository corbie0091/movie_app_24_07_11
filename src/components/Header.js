import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors, spacing } from "../GlobalStyled";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Container = styled.header`
  padding: 10px ${spacing.side};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: ${(props) =>
    props.isScrolled ? "rgba(0, 0, 0, 0.7)" : "black"};

  @media screen and (max-width: 768px) {
    padding: 10px ${spacing.moSide};
  }

  @media screen and (max-width: 360px) {
    padding: 8px ${spacing.moSide};
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LOGO = styled.div`
  font-size: 20px;
  font-weight: 700;
  a {
    color: ${colors.point};
  }

  @media screen and (max-width: 360px) {
    font-size: 18px;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-left: 20px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      margin-left: 15px;
    }

    @media screen and (max-width: 360px) {
      margin-left: 10px;
      font-size: 14px;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;

  svg {
    margin-right: 8px;
    font-size: 20px;

    @media screen and (max-width: 360px) {
      font-size: 18px;
    }
  }

  &:hover {
    color: ${colors.primaryDark};
  }
`;

const UserButton = styled(StyledLink)`
  background-color: ${colors.primary};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;

  &:hover {
    background-color: ${colors.primaryDark};
  }

  @media screen and (max-width: 360px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

export const Header = ({ openLoginModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container isScrolled={isScrolled}>
      <LOGO>
        <Link to={routes.home}>MOVIE</Link>
      </LOGO>

      <Menu>
        <li>
          <StyledLink to={routes.search}>
            <FaSearch />
            Search
          </StyledLink>
        </li>
        <li>
          <UserButton to={routes.login}>
            <FaUserCircle />
            LOGIN
          </UserButton>
        </li>
      </Menu>
    </Container>
  );
};
