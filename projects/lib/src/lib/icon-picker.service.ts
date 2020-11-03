import {Injectable} from '@angular/core';
import {Icon, IconType} from './icon';
import {IconsPack} from './icons-pack';
import {BootstrapIconsPack} from './pack/bootstrap-icons-pack';
import {FontAwesome4IconsPack} from './pack/font-awesome4-icons-pack';
import {FontAwesome5IconsPack} from './pack/font-awesome5-icons-pack';
import {MaterialIconsPack} from './pack/material-icons-pack';

@Injectable()
export class IconPickerService {
  private packs = new Map<string, IconsPack>();

  constructor() {
    this.packs.set('fa', new FontAwesome4IconsPack());
    this.packs.set('fa5', new FontAwesome5IconsPack());
    this.packs.set('bs', new BootstrapIconsPack());
    this.packs.set('mat', new MaterialIconsPack());
  }

  addIcons(name: string, pack: IconsPack) {
    this.packs.set(name, pack);
  }

  getIcons(ipIconPacks: string[]): Icon[] {
    let icons: Icon[] = [];
    if (ipIconPacks.indexOf('all') >= 0) {
      for (const key of this.packs.keys()) {
        const pack = this.packs.get(key);
        icons = icons.concat(this.getPackIcons(pack));
      }
    } else {
      ipIconPacks.forEach((ipIconPack) => {
        if (this.packs.has(ipIconPack)) {
          const pack = this.packs.get(ipIconPack);
          icons = icons.concat(this.getPackIcons(pack));
        }
      });
    }
    return icons;
  }

  private getPackIcons(pack: IconsPack): Icon[] {
    return pack.getIcons().map(icon => {
      icon.type = pack.getType();
      icon.class = pack.getClass(icon.id);
      return icon;
    });
  }
}
