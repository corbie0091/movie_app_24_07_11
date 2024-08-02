import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors, spacing } from "../GlobalStyled";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Container = styled.header`
  padding: 20px ${spacing.side};
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
    padding: 20px ${spacing.moSide};
  }
`;

const LOGO = styled.div`
  font-size: 26px;
  font-weight: 700;
  a {
    color: ${colors.point};
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 150px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      margin-left: 50px;
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
    font-size: 24px;
  }

  &:hover {
    color: ${colors.primaryDark};
  }
`;

const UserButton = styled(StyledLink)`
  background-color: ${colors.primary};
  padding: 10px 20px;
  border-radius: 20px;

  &:hover {
    background-color: ${colors.primaryDark};
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
