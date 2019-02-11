import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {Data} from '../../model/data';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DataService]
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public errorMessages: any;
  public isModalOpen: boolean;

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {

    this.form = this.fb.group({
      fullName: new FormControl('', [
        Validators.minLength(2),
        Validators.required
      ]),
      address: new FormControl('', [
        Validators.maxLength(200),
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      phoneNumber: new FormControl('', [
        Validators.pattern('^[0-9]{10}$'),
        Validators.required
      ]),
    });

    this.errorMessages = {
      fullName: [
        {type: 'required', message: 'Full name is required'},
        {type: 'minlength', message: 'Full name must be at least 2 characters'}
      ],
      address: [
        {type: 'required', message: 'Address is required'},
        {type: 'maxlength', message: 'Address can not exceed 200 characters'}
      ],
      email: [
        {type: 'required', message: 'Email is required'},
        {type: 'email', message: 'Enter a valid email'}
      ],
      phoneNumber: [
        {type: 'required', message: 'Phone number is required'},
        {type: 'pattern', message: 'Phone number should only contain 10 digits'},
      ]
    };
  }

  sendData() {
    if (this.form.valid) {
      this.isModalOpen = true;
    }
  }

  onModalClose(isDataCorrect: boolean) {
    this.isModalOpen = false;
    const { fullName, address, email, phoneNumber } = this.form.value;
    if (isDataCorrect) {
      const data: Data = new Data(fullName, address, email, phoneNumber);
      this.dataService.save(data).subscribe(
        (res) => {
          console.log('Data is saved');
        }
      );
    }
  }
  reset() {
    this.form.reset();
  }

}
