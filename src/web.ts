import { WebPlugin } from '@capacitor/core';

import type { EsptouchPlugin, OpenMapOptions } from './definitions';

export class EsptouchWeb extends WebPlugin implements EsptouchPlugin {
  
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async openMap(location: OpenMapOptions): Promise<void> {
    console.log(location)
  }
}
