import { useEffect, useState } from "react";
import { getFuel, updateFuel } from "./services";
import {
  Box,
  Container,
  FuelInput,
  FuelPrice,
  FuelText,
  InfoText,
  Panel,
  Row,
  SaveButton,
  SaveIcon,
  SettingsIcon,
  Title,
} from "./styles";
import { FuelComponentProps, IFuel, IFuelState } from "./types";
import { FiEdit2 } from "react-icons/fi";

export const FuelComponent = ({
  editMode,
  toggleEditMode,
}: FuelComponentProps) => {
  const [fuels, setFuels] = useState<IFuelState[]>();

  async function fetchAndUpdateData() {
    const data = await getFuel();

    setFuels(data);
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  function onUpdatePrice(fuelId: number, price: string) {
    const updatedFuels = fuels?.map((fuel) => {
      if (fuel.id === fuelId) {
        fuel.price = Number(price);
        fuel.updated = true;
      }

      return fuel;
    });

    setFuels(updatedFuels);
  }

  async function onSave() {
    //obter combustiveis com valores alterados
    const changed = fuels?.filter((f) => f.updated === true);

    if (!changed || changed.length === 0) {
      toggleEditMode();
      return;
    }

    //atualizar estes combustiveis na api
    for (const changedFuel of changed) {
      const { updated, ...rest } = changedFuel;

      console.log(rest);

      await updateFuel(rest);
    }

    fetchAndUpdateData();
    toggleEditMode();
  }

  return (
    <Container>
      <Title>Posto ReactJS</Title>
      <SettingsIcon onClick={toggleEditMode} />

      <Panel>
        {editMode && (
          <Row>
            <InfoText>
              <FiEdit2 />
              Altere o preço do item e salve
            </InfoText>
          </Row>
        )}
        {fuels?.map((fuel) => (
          <Row key={fuel.id}>
            <Box>
              <FuelText>{fuel.name}</FuelText>
            </Box>
            <Box>
              {editMode ? (
                <FuelInput
                  type="number"
                  value={fuel.price}
                  onChange={(ev) => onUpdatePrice(fuel.id, ev.target.value)}
                />
              ) : (
                <FuelPrice>{fuel.price}</FuelPrice>
              )}
            </Box>
          </Row>
        ))}
        {editMode && (
          <Row>
            <SaveButton onClick={onSave}>
              <SaveIcon />
              <span>Save</span>
            </SaveButton>
          </Row>
        )}
      </Panel>
    </Container>
  );
};
