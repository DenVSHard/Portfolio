import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  @ViewChild('contactForm') formRef!: NgForm;
  inputData = { inputName: '', inputEmail: '', inputMessage: '' };
  showSuccess: boolean = false;
  privacyChecked: boolean = false;

  async sendMailData() {
    let formData = new FormData();
    this.appendFormData(formData, this.inputData);

    try {
      const response = await fetch('http://denis-weinhardt.com/mail/send_mail.php', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Fehler beim Senden der E-Mail');
      }
      this.showSuccess = true;
    } catch (error) {
      this.showSuccess = false;
    }
  }


  appendFormDatas(
    formData: FormData,
    nameField: string,
    emailField: string,
    messageField: string
  ) {
    formData.append('name', nameField);
    formData.append('email', emailField);
    formData.append('message', messageField);
  }

  appendFormData(formData: FormData, inputData: any) {
    formData.append('name', inputData.inputName);
    formData.append('email', inputData.inputEmail);
    formData.append('message', inputData.inputMessage);
  }

  async sendMail() {
    if (!this.privacyChecked) return;
    await this.sendMailData();
    this.showSuccess = true;

    setTimeout(() => {
      this.showSuccess = false;
    }, 5000);

    this.inputData = { inputName: '', inputEmail: '', inputMessage: '' };
    this.privacyChecked = false;
    this.formRef.resetForm();
  }

}