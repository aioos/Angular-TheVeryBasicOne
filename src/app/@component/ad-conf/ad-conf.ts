import { Country } from '../../@enum/country.enum';
import { Scene } from '../../@enum/scene.enum';
import { AppID } from '../../@enum/app-id.enum';

export interface AdConf {
  id?: number;
  ad_priority?: number;
  app_name?: string;
  app_package_name?: AppID;
  created_at?: string;
  scene_ad_channel?: string;
  scene_ad_id?: string;
  scene_ad_name?: string;
  scene_country?: Country;
  scene_name?: Scene;
  updated_at?: string;
}
