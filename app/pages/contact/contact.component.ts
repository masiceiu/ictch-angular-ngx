import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'Search';
  searchText;
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco', country: 'USA' },
    { id: 13, name: 'Bombasto', country: 'UK' },
    { id: 14, name: 'Celeritas', country: 'Canada' },
    { id: 15, name: 'Magneta', country: 'Russia' },
    { id: 16, name: 'RubberMan', country: 'China' },
    { id: 17, name: 'Dynama', country: 'Germany' },
    { id: 18, name: 'Dr IQ', country: 'Hong Kong' },
    { id: 19, name: 'Magma', country: 'South Africa' },
    { id: 20, name: 'Tornado', country: 'Sri Lanka' }
  ];
  constructor() { }

  ngOnInit() {
  }
}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    //console.log(searchText)
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return (
        it.name.toLowerCase().includes(searchText) ||
        it.country.toLowerCase().includes(searchText)
      );
    });
  }
}
//https://stackblitz.com/edit/angular-searchbar-autocomplete