export class Icon {
  name: string;
  id: string;
  class?: string;
  filter?: string[];
  aliases?: string[];
  type?: IconType;
}

export enum IconType {
  CLASS_DEFINED,
  LIGATURE_DEFINED,
}
