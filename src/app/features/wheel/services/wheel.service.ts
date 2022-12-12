import { emotions } from '../mock-data/wheel-stats';
import { items } from '../mock-data/wheel-items';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WheelService {
  public randomId!: number;
  public wheelItems: any[] = items;
  public statItems: any[] = emotions;

  constructor() {
    this.generateRandomId();
  }

  public generateRandomId(): void {
    this.randomId = Math.floor(
      0 + Math.random() * (this.wheelItems.length - 1 - 0 + 1)
    );
  }

  public getEmoji(): any {
    return this.wheelItems[this.randomId];
  }

  public updateStat(answer: boolean): void {
    const id = this.statItems.findIndex((e) => e.id === this.getEmoji().id);

    this.statItems[id].count++;

    answer === true ? this.statItems[id].yes++ : this.statItems[id].no++;
  }
}
