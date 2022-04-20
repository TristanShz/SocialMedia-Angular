import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  articleList:{title: string, content: string}[]
  constructor() {
    this.articleList = [
      {
        title: "Title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed" +
          "      do eiusmod tempor incididunt ut labore et dolore" +
          "      magna aliqua. Ut enim ad minim veniam, quis nostrud" +
          "      exercitation ullamco laboris nisi ut aliquip ex ea" +
          "      commodo consequat. Duis aute irure dolor in reprehenderit in" +
          "      voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
      },

      {
        title: "Title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed" +
          "      do eiusmod tempor incididunt ut labore et dolore" +
          "      magna aliqua. Ut enim ad minim veniam, quis nostrud" +
          "      exercitation ullamco laboris nisi ut aliquip ex ea" +
          "      commodo consequat. Duis aute irure dolor in reprehenderit in" +
          "      voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
      },
      {
        title: "Title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed" +
          "      do eiusmod tempor incididunt ut labore et dolore" +
          "      magna aliqua. Ut enim ad minim veniam, quis nostrud" +
          "      exercitation ullamco laboris nisi ut aliquip ex ea" +
          "      commodo consequat. Duis aute irure dolor in reprehenderit in" +
          "      voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
      },
    ]
  }

  ngOnInit(): void {
  }

}
