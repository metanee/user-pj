import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule],
})
export class MaterialModule { }
