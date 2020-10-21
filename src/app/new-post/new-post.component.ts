import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // var navElement = document.getElementById('navbar');
    // navElement.classList.add('removeHeader');
  }

  addNewPost(title: string, text: string): void {
    title = title.trim();
    text = text.trim();
    var _creatorId = localStorage.getItem('userId');
    // user not logged in case handled with authentication guard approach
    if (!title || !text || !_creatorId) { return; }
    this.postService.createNewPost({ title, text, _creatorId } as Post)
      .subscribe(post => {
        this.router.navigate(['posts']);
    });
  }

}
