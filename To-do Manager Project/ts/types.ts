export enum taskStatus {
  Uncompleted,
  Completed,
}

export interface task {
  description: string;
  status?: taskStatus;
}
