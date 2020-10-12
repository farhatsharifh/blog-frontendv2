import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../services/post.service';
import { Comment } from '../comment';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  singlePost: Post;
  postId: string;
  returnUrl: string;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.postId = this.route.snapshot.params['id'];
    this.getSinglePost(this.postId);
  }

  getSinglePost(id: string): void {
    this.postService.getPost(id)
      .subscribe(post => 
      {
        this.singlePost = post;
      });
  }

  addNewComment(comment: string) {
    var text = comment.trim();
    var _creatorId = localStorage.getItem('userId');
    var _postId = this.postId;

    console.log("*** commenttext ",comment);
    console.log("*** singlePost id ",_postId);
    console.log("*** singlePost user ", _creatorId);

    this.commentService.createNewComment({ text, _creatorId, _postId } as Comment)
      .subscribe(post => {
        this.router.navigate([this.returnUrl]);
    });

  }
}
