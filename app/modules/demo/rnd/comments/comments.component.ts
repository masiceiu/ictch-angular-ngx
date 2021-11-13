import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comments;
  constructor() { 
    this.comments = this.getComments();
  }

  ngOnInit() {
    
  }
  getComments(): Comment[]{ 
      return [
      {
        text: "1",
        comments: [
          {
            text: "1.1",
            comments: [
              {
                text: "1.1.1 "
              }
            ]
          },
          {
            text: "1.2",
            comments: [
              {
                text: "1.2.1"
              }
            ]
          }
        ]
      },
      {
        text: "2",
        comments: [
          {
            text: "2.1",
            comments: [
              {
                text: "2.1.1"
              }
            ]
          }
        ]
      }
    ];
  }
}
export class Comment {
  text: string;
  comments?: Comment[]
}