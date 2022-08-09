export interface Spend {
  _id: number;
  name: string;
  createDate: string;
  value: number;
  isEditing: boolean;
}

export interface QueryParams {
  [_id: string]: number;
}
