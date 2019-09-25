import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { MatCarouselSlideComponent, Orientation } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit
{

  public slidesList = new Array<any>(5);
  public showContent = false;

  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public proportion = 25;
  public slides = this.slidesList.length;
  public overlayColor = '#00000040';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
   public orientation: Orientation = 'rtl';
  constructor() {
    
  }
  ngOnInit() {
  }

}
