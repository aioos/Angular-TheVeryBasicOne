import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdConf } from '../../ad-conf';
import { UtilsService } from '../../../../@service/utils.service';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormControl, NgForm } from '@angular/forms';
import { Country } from '../../../../@enum/country.enum';
import { AppID } from '../../../../@enum/app-id.enum';
import { Scene } from '../../../../@enum/scene.enum';

@Component({
  selector: 'app-one-focus',
  templateUrl: './one-focus.component.html',
  styleUrls: ['./one-focus.component.css']
})
export class OneFocusComponent implements OnInit {

  countryParamList = this.utilsService.enumToArray(Country);
  appIDParamList = this.utilsService.enumToArray(AppID);
  sceneParamList = this.utilsService.enumToArray(Scene);

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

  save(iForm: NgForm): void {
    if (iForm.invalid) {
      // console.log(iForm.value);
      return;
    }
    this.utilsService.save<AdConf>('ad-conf', Object.assign({}, this.item, iForm.value)).subscribe(() => {
      Object.assign(this.item, iForm.value);
      return this.close(true);
    });
  }

}
