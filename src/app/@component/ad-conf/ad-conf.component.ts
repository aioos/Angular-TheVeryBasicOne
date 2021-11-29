import { Component, OnInit } from '@angular/core';
import { AdConf } from './ad-conf';
import { UtilsService } from '../../@service/utils.service';
import { MatDialog } from '@angular/material/dialog';
import { OneFocusComponent } from './dialog/one-focus/one-focus.component';
import { MatTableDataSource } from '@angular/material/table';
import { Params } from './params';
import { Country } from '../../@enum/country.enum';
import { AppID } from '../../@enum/app-id.enum';
import { Scene } from '../../@enum/scene.enum';
import { ChannelsEnum } from '../../@enum/channels.enum';

@Component({
  selector: 'app-ad-conf',
  templateUrl: './ad-conf.component.html',
  styleUrls: ['./ad-conf.component.css']
})
export class AdConfComponent implements OnInit {

  adConfList: MatTableDataSource<AdConf>;
  columnsToDisplay = [
    'app_name', 'app_package_name', 'scene_name',
    'scene_country', 'scene_ad_channel', 'scene_ad_name',
    'ad_priority', 'created_at', 'updated_at',
    'operators'
  ];
  baseUrl = 'ad-conf';
  params: Params = {};
  countryParamList = this.utilsService.enumToArray(Country);
  appIDParamList = this.utilsService.enumToArray(AppID);
  sceneParamList = this.utilsService.enumToArray(Scene);
  channelList = this.utilsService.enumToArray(ChannelsEnum);

  constructor(
    private utilsService: UtilsService,
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    this.utilsService.getList<AdConf>(this.baseUrl, this.params)
      .subscribe(value => this.adConfList = new MatTableDataSource<AdConf>(value));
  }

  edit(row: AdConf): void {
    this.matDialog.open(OneFocusComponent, {
      data: row,
      width: '50%'
    });
  }

  del(row: AdConf): void {
    if (confirm('确认删除该条目？')) {
      this.utilsService.del(this.baseUrl, row.id).subscribe(() => this.search());
    }
  }

  add(): void {
    const newOne: AdConf = {};
    const dialogRef = this.matDialog.open(OneFocusComponent, {
      data: newOne,
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(afterSaved => {
      if (afterSaved) {
        this.search();
      }
    });
  }

}
