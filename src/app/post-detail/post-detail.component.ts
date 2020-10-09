import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  singlePost: Post;
  postId: number;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.params['id'];
    this.getSinglePost(this.postId);
  }

  getSinglePost(id: number): void {
    this.postService.getPost(id)
      .subscribe(post => 
        {
          this.singlePost = post;
        });
  }

  addNewComment(comment: string) {

  }
}
