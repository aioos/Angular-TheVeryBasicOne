import { Country } from '../../@enum/country.enum';
import { AppID } from '../../@enum/app-id.enum';
import { ChannelsEnum } from '../../@enum/channels.enum';

export interface Params {
  app_package_name?: AppID;
  scene_name?: string;
  scene_country?: Country;
  scene_ad_channel?: ChannelsEnum;
}
