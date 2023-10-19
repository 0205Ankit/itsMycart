export type DepartmentType = {
  id: number;
  name: string;
  categories: {
    name: string;
    type: string[];
  }[];
};
