import { Component, Input } from '@angular/core';

import { Post } from '../model/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  // posts = [
  //   { title: 'First post', content: 'First post content' },
  //   { title: 'Second post', content: 'Second post content' },
  //   { title: 'Third post', content: 'Third post content' },
  // ];
  @Input() posts: Post[] = [];
}
