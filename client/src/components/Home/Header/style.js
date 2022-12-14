import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.div`
  padding-right: 12px;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 50px;
  max-width: 100%;
  background-color: hsl(210, 8%, 97.5%);
  border-top: 3px solid hsl(27, 90%, 55%);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  z-index: 2;
  @media screen and (max-width: 1160px) {
    left: 0;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
    height: 50px;
    max-width: 100%;
    background-color: hsl(210, 8%, 97.5%);
    border-top: 3px solid hsl(27, 90%, 55%);
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
    z-index: 2;
  }

  > .navbar-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 100%;
    background-color: hsl(210, 8%, 97.5%);
    position: relative;

    > .menuBtn {
      display: none;
      justify-content: center;
      align-items: center;
      height: 44px;
      padding: 0px 16px;
      cursor: pointer;
      :hover {
        border: none;
        background-color: #e2e6e8;
      }
      // Mobile
      @media screen and (max-width: 640px) {
        display: flex;
      }
    }
    > .dropdown-menu2 {
      position: absolute;
      top: 47px;
      left: 0;
      box-shadow: 0px 0 5px 0px #e2e6e8;
    }
    > .logo-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 166px;
      height: 44px;
      padding: 0px 8px;
      border: none;
      :hover {
        border: none;
        background-color: #e2e6e8;
      }
      > .logo {
        background: url(https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27)
          no-repeat 0 -502px;
        width: 146px;
        height: 30px;
      }
      // Mobile
      @media screen and (max-width: 580px) {
        display: none;
      }
    }

    > .nav-items {
      position: relative;
      display: flex;
      white-space: nowrap;
      text-decoration: none;
      color: #525960;
      font-size: 13px;
      margin: 2px;
      padding: 6px 12px;
      cursor: pointer;
      :hover {
        border: none;
        background-color: #e2e6e8;
        border-radius: 15px;
      }
      // Mobile
      @media screen and (max-width: 910px) {
        display: none;
      }
    }

    > form {
      padding: 0 12px;
      width: 100%;
      max-width: 700px;
      @media screen and (max-width: 910px) {
        /* position: absolute; */
        left: 0;
        right: 0;
        top: 100%;
        max-width: 100%;
      }
      > .input-search {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        flex-wrap: nowrap;
        flex-shrink: 10000;
        flex-grow: 1;
        position: relative;
        padding: 5px 5px;
        background-color: #ffffff;
        border: 1px solid #babfc4;
        border-radius: 4px;
        :focus {
          border: 3px solid blue;
        }

        > input {
          font-size: 12px;
          width: 100%;
          flex-grow: 1;
          height: 14.994px;
          border: none;
          :focus {
            outline: none;
          }
        }

        > .search-hints {
          display: none;
          position: absolute;
          top: 31px;
          margin-left: -5px;
          width: 100%;
          background-color: white;
          box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06),
            0 2px 6px hsla(0, 0%, 0%, 0.06), 0 3px 8px hsla(0, 0%, 0%, 0.09);
          z-index: 2000;
          border-radius: 5px;
          border: 1px solid hsl(210, 8%, 85%);
          white-space: normal;
        }
      }
    }

    > .button-login {
      margin: -1px;
      height: 33px;
      background-color: #e1ecf4;
      color: #39739d;
      font-size: 12px;
      padding: 7px 10.4px;
      border: 1px solid #39739d;
      border-radius: 4px;
      :hover {
        background-color: #b3d3ea;
      }
      // Mobile
      @media screen and (max-width: 910px) {
        display: inline-block;
      }
    }

    > .button-signup {
      height: 33px;
      background-color: hsl(206, 100%, 52%);
      color: hsl(0, 0%, 100%);
      font-size: 12px;
      margin: 0 0 0 4px;
      padding: 7px 10.4px;
      border: 1px solid transparent;
      box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
      border-radius: 4px;
      :hover {
        background-color: #0074cc;
      }
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  margin-left: 5px;
`;
