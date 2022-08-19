export interface IFuel {
  id: number;
  name: string;
  price: number;
}

//possui todas as propriedades de IFuel + updated
export type IFuelState = IFuel & {
  updated: boolean;
};

export type FuelComponentProps = {
  editMode: boolean;
  toggleEditMode: () => void;
};
