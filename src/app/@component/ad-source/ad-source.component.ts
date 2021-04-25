import { Component, OnInit } from '@angular/core';
import { AdSource } from './ad-source';
import { UtilsService } from '../../@service/utils.service';
import { MatDialog } from '@angular/material/dialog';
import { Params } from './params';
import { Country } from '../../@enum/country.enum';
import { ExportType } from 'mat-table-exporter';

@Component({
  selector: 'app-ad-source',
  templateUrl: './ad-source.component.html',
  styleUrls: ['./ad-source.component.css']
})
export class AdSourceComponent implements OnInit {
  list: AdSource[] = [];
  params: Params = {};
  columnsToDisplay = [
    'data_date',
    'app_name', 'scene_name', 'scene_country',
    'ad_name', 'ad_id', 'ad_id_income',
    'ad_id_display_amount', 'ad_id_ecpm'
  ];

  countryParamList = this.utilsService.enumKeys(Country);
  exportTypeList = this.utilsService.enumKeys(ExportType);

  private urlPath = 'ad-source';
  public chosenExportType = ExportType.CSV;

  constructor(
    private utilsService: UtilsService,
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.search();
  }

  search(e?): void {
    // console.log(this.params);
    this.utilsService.getList<AdSource>(this.urlPath, this.params).subscribe(value => this.list = value);
  }

  resolveDate(): void {
    if (this.params.date_start) {
      const start = new Date(this.params.date_start);
      start.setHours(0, 0, 0);
      this.params.date_start = start;
    }
    if (this.params.date_end) {
      const end = new Date(this.params.date_end);
      end.setHours(23, 59, 59);
      this.params.date_end = end;
    }
  }

  generateFilename(): string {
    return `各平台广告数据${this.params.date_start ? ' ' + new Date(this.params.date_start).toLocaleDateString() : ''}${this.params.date_end ? ' ' + new Date(this.params.date_end).toLocaleDateString() : ''}`;
  }

  // edit(row: AdSource): void {
  //   this.matDialog.open(OneFocusComponent, {
  //     data: row,
  //     width: '50%'
  //   });
  // }
  //
  // del(row: AdSource): void {
  //   this.utilsService.del(this.urlPath, row.id).subscribe(() => this.search());
  // }
  //
  // add(): void {
  //   const newOne: AdSource = {};
  //   const dialogRef = this.matDialog.open(OneFocusComponent, {
  //     data: newOne,
  //     width: '50%'
  //   });
  //
  //   dialogRef.afterClosed().subscribe(value => {
  //     if (value) {
  //       this.search();
  //     }
  //   });
  // }
}
