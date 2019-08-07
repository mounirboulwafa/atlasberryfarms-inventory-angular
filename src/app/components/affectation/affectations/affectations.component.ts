import { Component, OnInit } from '@angular/core';
import { AffectationsService } from 'src/app/services/affectations.service';

@Component({
  selector: 'app-affectations',
  templateUrl: './affectations.component.html',
  styleUrls: ['./affectations.component.css']
})
export class AffectationsComponent implements OnInit {
  affectationsList;
  empName: string;

  constructor(private affectationService: AffectationsService) {}

  ngOnInit() {
    this.getAffectations();
  }

  getAffectations() {
    this.affectationService.getAffetations().subscribe(
      data => {
        this.affectationsList = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  searchAffectation() {
    this.affectationService.searchAffetationByEmpName(this.empName).subscribe(
      data => {
        this.affectationsList = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
