import { NgModule } from "@angular/core";
import { CheckBoxModule } from "./checkbox/checkbox.module";
import { InputTextModule } from "./input-text/input-text.module";
import { NgSelectItemModule } from "./ng-select/ng-select.module";
import { DatatimePickerModule } from "./datetime-picker/datatime-picker.module";
import { InputPasswordComponent } from './input-password/input-password.component';

@NgModule({
    imports: [
      InputTextModule,
      NgSelectItemModule,
      CheckBoxModule,
      DatatimePickerModule
    ],
    declarations: [
  ]
  })
  export class FormsModule { }