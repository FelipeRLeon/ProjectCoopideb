import styled from 'styled-components'



export const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: #white;
`;

export const Wrapper = styled.div`
    padding-right: 2%;
    width: 98%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;

export const LogoContainer = styled.div`
    margin-left: 10%;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: sans-serif;

    p{
        &:nth-child(2){
            color: #fff;
        }

        &:nth-child(3){
            font-size: 1.5rem;
            font-weight: 500;
            color: #e07924;
        }
    }

    svg {
        fill: var(--verde1);
        margin-right: 0.5rem;
    }
`;

export const Menu = styled.ul`
    border: 2px solid #009FE3;
    border-radius: 8px;
    background-color: var(--azul1);
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0 10px;

    @media screen and (max-width: 960px) {
        background-color: var(--azul1);
        position: absolute;
        top: 70px;
        left: ${({ open }) => (open ? "0" : "-100%")}; //importante
        width: 100%;
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
        svg {
            fill: var(--verde1);
            margin-right: 0.5rem;
        }
    }
`;

export const MenuItem = styled.li`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: ce;
        align-items: center;

        a{
            width: 100%;
        }
    }
    `;

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding: 0.5rem 2.18rem;
    background-color: #009640;
    border: 2px solid #009FE3;
    border-radius: 25px;
    text-decoration:  none;
    color: white;
    font-family: sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
    transition: 0.5s all ease;
    text-align: center;

    &:hover {
        color: #fff;
        background-color: var(--azul4);
        transition: 0.5s all ease;

        div {
            
            svg{
                fill: var(--azul1);
            }
        }
    }

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            display: none;
            fill: var(--verde1);
            margin-right: 0.5rem;
        }
    }

    @media screen and (max-width: 960px) {
        background-color: var(--azul1);
        
        
        width: 100%;

        div {
            width: 20%;
            justify-content: left;

            svg {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }

`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        background-color: var(--azul1);
        display: flex;
        height: 70px;
        justify-content: center;
        align-items: center;
        min-width: 15%;
        cursor: pointer;

        svg {
            fill: var(--verde1);
            margin-right: 0.5rem;
        }
    }
`;


