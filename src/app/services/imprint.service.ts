import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ImprintService {
  private _showImprint: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _shutImprint: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get showImprint() {
    return this._showImprint.asObservable();
  }

  openImprint() {
    this._showImprint.next(true);
  }

  closeImprint() {
    this._showImprint.next(false);
    this._shutImprint.next(false);
  }

  shutdownImprint() {
    this._shutImprint.next(true);
    setTimeout(() => {
      this.closeImprint();
    }, 1000);
  }

  get shutImprint() {
    return this._shutImprint.asObservable();
  }
}