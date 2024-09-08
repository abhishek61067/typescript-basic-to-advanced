export type PostProps = {
  id: number;
  title: string;
  body: string;
};

export type ObjType2 = {
  name: string;
  age: number;
  maritalStatus: boolean;
  sex?: string;
};

export type Type3 = string | number | boolean;

export type funcType1 = () => { x: number };

export type funcType2 = (p1: { x: number }, p2: { y: number }) => void;

export type ObjType3 = { name: string };
