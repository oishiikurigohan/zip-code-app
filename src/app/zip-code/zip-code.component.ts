import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiAccessService } from '../service/api-access.service';

@Component({
  selector: 'app-zip-code',
  templateUrl: './zip-code.component.html',
  styleUrls: ['./zip-code.component.scss']
})

export class ZipCodeComponent implements OnInit {

  fullAddress: string;
  testForm = new FormGroup({
    zipCode: new FormControl('')
  });

  constructor(private apiAccessService: ApiAccessService) { }

  ngOnInit() { }

  public onSubmit(): void {
    this.apiAccessService.getAddress(this.testForm.value.zipCode).subscribe(
      response => this.fullAddress = response.data.fullAddress,
      err => alert(err)
    );
  }
}
