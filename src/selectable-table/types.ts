export enum Status {
  Available = "available",
  Scheduled = "scheduled",
}

export interface TableLine {
  name: string;
  device: string;
  path: string;
  status: Status;
}
