import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportService } from '../sport.service';
import { MessageService } from '../message.service';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id: number = 0;
	content: Content | undefined = undefined;
	

	constructor(
		private route: ActivatedRoute,
		private contentService: SportService,
		private messageService: MessageService
	) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			this.id = Number(params.get('id') ?? 0);
			this.contentService.getSport(this.id).subscribe((content) => {
				this.content = content;
			});
			this.messageService.add(`Retrieved:sport ID ${this?.content?.id} with name ${this?.content?.title}`);
		});
	}
}
