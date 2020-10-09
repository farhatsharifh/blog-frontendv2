import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import { Post } from '../post';
import { PostService } from '../services/post.service';
// import { POSTS } from '../mock-posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  allPosts: Post[];
  //  allPosts = POSTS;

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.allPosts = posts);
  }

  // getPost(id: number): void {
  //   this.router.navigate(['/post', id]); 
  // }
}