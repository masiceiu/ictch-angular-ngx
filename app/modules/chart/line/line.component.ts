import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { DatePipe } from "@angular/common";
import { ApiService, Covid, Country } from "./../../../service/api.service";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
  providers: [DatePipe, ApiService],
})
export class LineComponent implements OnInit {

  name = "Angular";
  covid!: Covid[];
  error: any;

  @ViewChild("meuCanvas", { static: true }) elemento!: ElementRef;

  constructor(public datepipe: DatePipe, private apiService: ApiService) {}

  datas: any[] = [];
  confirmados: any[] = [];
  mortos: any[] = [];
  recuperados: any[] = [];
  countries!: Country[];

  getCountries() {
    this.apiService.getCountries()
    .subscribe(
      response => {
        this.countries = response;
        //console.log(this.countries);
      });
  }

  showConfig() {
    this.apiService.getCovid().subscribe(
      data => {
        this.covid = data;
        this.covid.forEach(covid => {
          this.datas.push(this.datepipe.transform(covid.Date.toString().replace('Z',''), "dd-MM-yyyy"));
          this.confirmados.push(covid.Confirmed);
          this.mortos.push(covid.Deaths);
          this.recuperados.push(covid.Recovered);
          console.log(covid);
        });
        console.log(this.datas);
        console.log(this.covid);
        this.showGrafic();
      },
      error => (this.error = error)
    );
  }

  showGrafic() {
    new Chart(this.elemento.nativeElement, {
      type: "line",
      data: {
        labels: this.datas,
        datasets: [
          {
            label: 'Confirmados',
            data: this.confirmados,
            borderColor: "#0000FF",
            fill: false
          },
          {
            label: 'Mortos',
            data: this.mortos,
            borderColor: "#FF0000",
            fill: false
          },
          {
            label: 'Recuperados',
            data: this.recuperados,
            borderColor: "#00ff00",
            fill: false
          }
        ]
      },
      options: {       
      aspectRatio: 1,
      responsive: false,
      maintainAspectRatio: true,
      layout: {
        padding: {
          top: 0
        }
      },
    /*
        legend: {
          display: true,
          position: 'bottom'
        }*/
      }
    });
  }

  ngOnInit() {
    this.showConfig();
    this.getCountries();
  }
}
