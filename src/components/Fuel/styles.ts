import styled from "styled-components";
import imageGasStation from "../../assets/gas-station.jpg";
import { FiSettings } from "react-icons/fi";

export const Container = styled.div`
  background: url(${imageGasStation});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  height: 100vh;

  text-align: center;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: bold;

  font-size: 48px;

  color: ${(props) => props.theme.colorGrey200};

  padding-top: 10px;
`;

export const SettingsIcon = styled(FiSettings)`
  color: ${(props) => props.theme.colorGrey200};
  font-size: 32px;
  cursor: pointer;

  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Panel = styled.section`
  width: 300px;
  height: 500px;
  background-color: ${(props) => props.theme.colorGrey100};

  border-radius: 5px;

  position: relative;
  left: calc(100vw - 350px);
  margin-top: 60px;
`;

export const Box = styled.div`
  width: 135px;
  height: 65px;

  background-color: ${(props) => props.theme.colorBlue200};

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
`;

export const FuelText = styled.span`
  color: ${(props) => props.theme.colorWhite};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const FuelPrice = styled.span`
  font-family: "Digital-7 Mono", sans-serif;

  color: ${(props) => props.theme.colorYellow600};
  font-size: 3.5rem;
  text-align: left;
`;
