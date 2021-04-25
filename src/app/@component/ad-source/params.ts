import { Country } from '../../@enum/country.enum';

export interface Params {
  date_start?: Date;
  date_end?: Date;
  scene_country?: Country;
  scene_name?: string;
  ad_name?: string[];
  ad_id?: string[];
}
