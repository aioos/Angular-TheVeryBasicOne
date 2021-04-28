import { Country } from '../../@enum/country.enum';
import { AppID } from '../../@enum/app-id.enum';

export interface Params {
  app_package_name?: AppID;
  scene_name?: string;
  scene_country?: Country;
}
