import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() image: string | undefined;
  @Output() openProfile =new EventEmitter();
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  goToProfile()
  {
    this.openProfile.emit();
  }
}
