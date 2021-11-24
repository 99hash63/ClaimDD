export interface Cp {
  nameOfDefendant: string;
  contractRef: string;
  currency: string;
  originalContractPrice: Number;
  durationUnit: string;
  originalContractDuration: Number;
  commencementDate: Date;
  workingHours: Number;
  claimCause: [string];
  projectStatus: string;
  latestAmendmentReference: string;
  revisedContractPrice: Number;
  revisedContractDuration: Number;
  project: string;
}
