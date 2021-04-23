import { Component, OnInit } from '@angular/core';
import { AdConf } from './ad-conf';
import { UtilsService } from '../../@service/utils.service';
import { MatDialog } from '@angular/material/dialog';
import { OneFocusComponent } from './dialog/one-focus/one-focus.component';

@Component({
  selector: 'app-ad-conf',
  templateUrl: './ad-conf.component.html',
  styleUrls: ['./ad-conf.component.css']
})
export class AdConfComponent implements OnInit {

  adConfList: AdConf[] = [];
  columnsToDisplay = [
    'app_name', 'app_package_name', 'scene_name',
    'scene_country', 'scene_ad_channel', 'scene_ad_name',
    'ad_priority', 'created_at', 'updated_at',
    'operators'
  ];

  constructor(
    private utilsService: UtilsService,
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    this.utilsService.getList<AdConf>('ad-conf').subscribe(value => this.adConfList = value);
  }

  edit(row: AdConf): void {
    this.matDialog.open(OneFocusComponent, {
      data: row,
      width: '50%'
    });
  }

  del(row: AdConf): void {
    this.utilsService.del('ad-conf', row.id).subscribe(() => this.search());
  }

  add(): void {
    const newOne: AdConf = {};
    const dialogRef = this.matDialog.open(OneFocusComponent, {
      data: newOne,
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(value => {
      if (value) {
        this.search();
      }
    });
  }

}
