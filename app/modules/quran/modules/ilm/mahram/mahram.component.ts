import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mahram',
  templateUrl: './mahram.component.html',
  styleUrls: ['./mahram.component.css'],
})
export class MahramComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  get data(): any {
    return {
      name: 'মাহরাম',
      items: [
        {
          name: 'পুরুষদের মাহরাম',
          items: [
            {
              name: 'মায়ের মত ৫ জন',
              items: [
                { name: 'মা, সৎ মা' },
                { name: 'নানি (মা এর মা), সৎ নানি' },
                { name: 'দাদি (বাবার মা), সৎ দাদি' },
                { name: 'শাশুড়ি (স্ত্রী এর মা), সৎ শাশুড়ি' },
                { name: 'দুধ-মা (যে মা ছোট বেলায় দুধ খাইয়ে ছিলেন)' },
              ],
            },
            {
              name: 'বোনের মত ৫ জন',
              items: [
                { name: 'সহদর বোন' },
                { name: 'খালা (মা এর বোন)' },
                { name: 'ফুফু (বাবার বোন)' },
                { name: 'নাতনি (আপন ছেলে ও মেয়ের কন্যা)' },
                { name: 'দুধ-বোন' },
              ],
            },
            {
              name: 'মেয়ের মত ৪ জন',
              items: [
                { name: 'মেয়ে' },
                { name: 'ভাই-এর মেয়ে' },
                { name: 'বোনের মেয়ে' },
                { name: 'ছেলের বউ' },
              ],
            },
          ],
        },
        {
          name: 'মহিলাদের মাহরাম',
          items: [
            {
              name: 'বাবার মত ৪ জন',
              items: [
                { name: 'পিতা' },
                { name: 'চাচা' },
                { name: 'মামা' },
                { name: 'শ্বশুর' },
              ],
            },
            {
              name: 'ভাই-এর মত ৫ জন',
              items: [
                { name: 'সহদর ভাই' },
                { name: 'নিজ দাদা' },
                { name: 'নিজ নানা' },
                { name: 'নিজ নাতি' },
                { name: 'দুধ-ভাই' },
              ],
            },
            {
              name: 'ছেলের মত ৫ জন',
              items: [
                { name: 'ছেলে' },
                { name: 'ভাই-এর ছেলে' },
                { name: 'বোনের ছেলে' },
                { name: 'মেয়ের জামাই' },
                { name: 'দুধ-ছেলে' },
              ],
            },
          ],
        },
      ],
    };
  }
}
