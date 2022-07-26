import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1368px;
  //width: 100%;
  margin: 64px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 21px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 21px 16px;
  }
`;

export const Section = styled.div`
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 21px;
  } ;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 5.35vw;
  } ;
`;

export const Container = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 12px;
  }
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  gap: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
  }
`;

export const Image = styled.img`
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
`;

export const Name = styled.p`
  margin: 14px 0px 0px 0px;
  text-align: center;
  color: ${({ theme }) => theme.colors.woodSmoke};
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    margin: 0;
  } ;
`;

export const Role = styled.p`
  margin: 8px 0px 0px 0px;
  text-align: center;
  color: ${({ theme }) => theme.colors.waterloo};
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    margin: 0;
  } ;
`;
