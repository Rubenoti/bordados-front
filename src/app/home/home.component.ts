import { Component, OnInit } from '@angular/core';
import {
  GalleryItem,
  ImageItem,
  GalleryRef,
  Gallery,
  ImageSize,
  ThumbnailsPosition,
} from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items!: GalleryItem[];
  imageData = data;
  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit() {
    /** Basic Gallery  */

    // Creat gallery items
    this.items = this.imageData.map(
      (item: any) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    /** Lightbox */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);

    var moviecontainer = document.getElementById('customcontrols'),
      movie = moviecontainer!.querySelector('video'),
      controls = moviecontainer!.querySelector('figcaption'),
      playpause = controls!.querySelector('a');
    movie!.removeAttribute('controls');
    controls!.style.display = 'block';
    playpause!.addEventListener('click', function (e) {
      e.preventDefault();
      if (movie!.paused) {
        movie!.play();
        playpause!.innerHTML = '&#x25fC';
      } else {
        movie!.pause();
        playpause!.innerHTML = '&#x25BA';
      }
    });
  }
}
const data = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
  },
];
