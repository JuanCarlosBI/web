import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  itemList: any[];

  constructor(private myService: MyServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.myService.getList().subscribe(data => {
      this.itemList = data;
    });
  }

 

  showDetails(id: number) {
    this.myService.getDetails(id).subscribe(details => {
      this.openDialog(details);
    });
  }

  openDialog(details: any): void {
    this.dialog.open(DetailsComponent, {
      width: '400px',
      height:'400px',
      data: details
    });
  }

}
