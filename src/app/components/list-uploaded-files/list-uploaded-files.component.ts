import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-uploaded-files',
  templateUrl: './list-uploaded-files.component.html',
  styleUrls: ['./list-uploaded-files.component.css']
})
export class ListUploadedFilesComponent implements OnInit {
  public file: any;
  public listFiles: any[];
  today: number = Date.now();

  constructor() {
    this.listFiles = [];
  }

  ngOnInit() {
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.file = file;
      console.log(this.file);

      this.listFiles.push(this.file);
      console.log(this.listFiles);
    }
  }

}
