import { Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
// MatDialogRef用于Dialog往调用处传数据
  constructor(@Inject(MAT_DIALOG_DATA) private data,private dialogRef: MatDialogRef<NewProjectComponent>) { }

  ngOnInit() {
    console.log(JSON.stringify(this.data))
  }

  onClick(){
    this.dialogRef.close('I received your message');
  }

}
