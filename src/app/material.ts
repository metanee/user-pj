import {MatButtonModule, MatCheckboxModule, MatInputModule, MatTabsModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatTabsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatTabsModule],
})
export class MaterialModule { }
