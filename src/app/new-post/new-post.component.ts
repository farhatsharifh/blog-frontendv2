import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    // var navElement = document.getElementById('navbar');
    // navElement.classList.add('removeHeader');
  }

  addNewPost(title: string, text: string): void {
    title = title.trim();
    text = text.trim();
    if (!title || !text) { return; }
    this.postService.createNewPost({ title, text } as Post)
      .subscribe(post => {
    });
  }

}
