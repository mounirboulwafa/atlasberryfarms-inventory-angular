import { employee } from './employee.model';

export class Affectation {
  idAffectation: number;
  dateAffectation: string;
  commentAffectatioin: string;
  employeeAffectation: employee;
  gasoilCardAffectation: GasoilCard;
  vehicleAffectation: Vehicle;
  furnitureListAffectation: Furniture[];
  equipmentListAffectation: Equipment[];
}

export class EmployeeAffectation {
  idEmp: number;
  nameEmp: string;
  matriculeEmp: string;
  emailEmp: string;
  phoneEmp: string;
  cinEmp: string;
  commentEmp: null;
  functionEmp: Function;
  localisationEmp: Localisation;
}

export class Function {
  idFunction: number;
  nameFunction: string;
  commentFunction: string;
  serviceFunction: null;
}

export class Localisation {
  idLocalisation: number;
  nameLocalisation: string;
  commentLocalisation: string;
}

export class Equipment {
  idEquipment: number;
  nameEquipment: string;
  modelEquipment: string;
  referenceEquipment: string;
  supplierEquipment: string;
  statutEquipment: string;
  commentEquipment: null;
  priceEquipment: number;
  datePurchaseEquipment: string;
}

export class Furniture {
  idFurniture: number;
  nameFurniture: string;
  modelFurniture: string;
  referenceFurniture: string;
  supplierFurniture: string;
  statutFurniture: string;
  commentFurniture: null;
  priceFurniture: number;
  datePurchaseFurniture: string;
}

export class GasoilCard {
  idGasCard: number;
  nameGasCard: string;
  statutGasCard: string;
  commentGasCard: string;
  supplierGasCard: string;
  serialNumberGasCard: string;
  plafondGasCard: number;
}

export class Vehicle {
  idVehicle: number;
  nameVehicle: string;
  modelVehicle: string;
  numberplateVehicle: string;
  vinVehicle: string;
  statutVehicle: string;
  supplierVehicle: string;
  commentVehicle: null;
  klmsVehicle: number;
}
