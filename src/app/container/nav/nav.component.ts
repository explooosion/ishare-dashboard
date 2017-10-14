import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public sideActive: String = 'home';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.scrollShow();
    this.scrollMove();
  }

  /**
   * 切換選單底色
   *
   * @param {any} e
   * @memberof NavComponent
   */
  public sidebarActive(e: any) {
    this.sideActive = e.srcElement.hash.replace('#/', '');
  }


  public scrollShow() {
    $(document).scroll(function () {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  }

  public scrollMove() {
    $(document).on('click', 'a.scroll-to-top', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
      }, 1000, 'easeInOutExpo');
      event.preventDefault();
    });
  }

}
