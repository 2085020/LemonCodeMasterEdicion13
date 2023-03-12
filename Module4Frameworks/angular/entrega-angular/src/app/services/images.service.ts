import { Injectable } from '@angular/core';
import { imageGallery } from '../model/image.gallery.model';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {

  imagesList : imageGallery[];
  constructor() {
    this.imagesList =  [
      { id: 0, src: 'assets/gallery/201.jpg', imagen_title: 'Gatito 1' },
      { id: 1, src: 'assets/gallery/202.jpg', imagen_title: 'Gatito 2' },
      { id: 2, src: 'assets/gallery/203.jpg', imagen_title: 'Gatito 3' },
      { id: 3, src: 'assets/gallery/204.jpg', imagen_title: 'Gatito 4' },
      { id: 4, src: 'assets/gallery/207.jpg', imagen_title: 'Gatito 5' },
      { id: 5, src: 'assets/gallery/208.jpg', imagen_title: 'Gatito 6' },
      { id: 6, src: 'assets/gallery/209.jpg', imagen_title: 'Gatito 7' },
      { id: 7, src: 'assets/gallery/2010.jpg', imagen_title: 'Gatito 8' }
    ];

  }

  getImages(): imageGallery[] {
    return this.imagesList;
  }

}
