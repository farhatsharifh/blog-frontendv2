import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../services/post.service';
import { Comment } from '../comment';
import { CommentService } from '../services/comment.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  singlePost: Post;
  postId: string;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
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

  verifyUser() {
    if (this.authService.loggedIn())
      return true;
    else {
      this.router.navigate(['login']);
      return false;
    }
  }

  addNewComment(comment: string) {
    var text = comment.trim();
    var _creatorId = localStorage.getItem('userId');
    var _postId = this.postId;

    this.commentService.createNewComment({ text, _creatorId, _postId } as Comment)
      .subscribe(post => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/post', this.postId]); // doesnot refreshes the page
    });

  }
}
