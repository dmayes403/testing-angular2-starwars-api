import { Component, OnInit, Inject } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig, MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA, MdCheckboxChange } from '@angular/material';

@Component({
    selector: 'app-update-user-dialog',
    templateUrl: './update-user-dialog.component.html',
    styleUrls: ['./update-user-dialog.component.css']
})
export class UpdateUserDialogComponent implements OnInit {

    constructor(
                public dialogRef: MdDialogRef<UpdateUserDialogComponent>,
                @Inject(MD_DIALOG_DATA) public data: any
                ) { }

    ngOnInit() {
    }

    changePicUrl(event: any) {
        this.dialogRef.close(event.target.value);
    }

}
