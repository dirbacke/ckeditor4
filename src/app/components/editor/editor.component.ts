import { Component, OnInit } from '@angular/core';
import { CkeditorConfigService } from '../../services/internal/ckeditor-config.service';

@Component({
  selector: 'test-ckeditor-app',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [
    CkeditorConfigService
  ]
})
export class EditorComponent implements OnInit {
  ckeditorContent: string = '<p>Some html</p>';
  private myCkeditorConfig: any;
  constructor(private ckService: CkeditorConfigService) {}

  ngOnInit() {
    this.myCkeditorConfig = this.ckService.getConfig(150, 400);
  }

}
