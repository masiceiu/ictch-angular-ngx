import {Component, Input,  TemplateRef} from '@angular/core';
import {Observable, timer} from 'rxjs';

@Component({
  selector: 'app-state-button',
  templateUrl: './state-button.component.html',
  styleUrls: ['./state-button.component.css']
})
export class StateButtonComponent {

  action$ = timer(2000);

  @Input()
  initialTemplate: TemplateRef<any>;
  @Input()
  workingTemplate: TemplateRef<any>;
  @Input()
  doneTemplate: TemplateRef<any>;

  currentTemplate: TemplateRef<any>;

  ngOnInit() {
    this.currentTemplate = this.initialTemplate;
  }

  triggerAction() {
    this.currentTemplate = this.workingTemplate;
    this.action$.subscribe(() => this.currentTemplate = this.doneTemplate);
  }

}