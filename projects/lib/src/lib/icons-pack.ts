import {Icon, IconType} from './icon';

export interface IconsPack {
  getClass(id: string): string;
  getType(): IconType;
  getIcons(): Icon[];
}
