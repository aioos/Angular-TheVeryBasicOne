import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdConf } from '../../ad-conf';
import { UtilsService } from '../../../../@service/utils.service';

@Component({
  selector: 'app-one-focus',
  templateUrl: './one-focus.component.html',
  styleUrls: ['./one-focus.component.css']
})
export class OneFocusComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<OneFocusComponent>,
    @Inject(MAT_DIALOG_DATA) public item: AdConf,
    private utilsService: UtilsService,
  ) {
  }

  ngOnInit(): void {
  }

  close(afterSaved = false): void {
    this.matDialogRef.close(afterSaved);
  }

  save(): void {
    this.utilsService.save<AdConf>('ad-conf', this.item).subscribe(() => this.close(true));
  }

}
