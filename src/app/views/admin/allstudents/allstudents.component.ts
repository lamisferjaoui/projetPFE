import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrl: './allstudents.component.css'
})
export class AllstudentsComponent implements OnInit {

  dataArray:any

constructor(private ds:DataService){
  this.ds.getAllstudents().subscribe(data=>this.dataArray=data)
}
ngOnInit(): void {
  
}
}
