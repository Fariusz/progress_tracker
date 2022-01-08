import {Component, OnInit} from '@angular/core';
import {ContentDto} from "../../models/ContentDto";
import {ContentService} from "./content.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  content: ContentDto[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(
      (content: ContentDto[]) => { this.content = content; });
  }

}
