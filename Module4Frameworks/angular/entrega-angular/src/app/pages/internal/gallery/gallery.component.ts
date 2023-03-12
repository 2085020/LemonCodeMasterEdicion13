import { Component } from '@angular/core';
import { imageGallery } from 'src/app/model/image.gallery.model';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  galeria : imageGallery[];
  selected: number;
  width: number;
  intervalId: NodeJS.Timer | undefined;
  showStop : boolean;
  sliceIni:number;
  sliceFin:number;

  constructor(private images: ImagesService) {
    this.galeria = images.getImages();
    this.selected = 0;
    this.width = 300;
    this.showStop = false;
    this.sliceIni = 0;
    this.sliceFin = 3;
  }

  augmentar() {
    this.width = this.width+20;
  }

  disminuir() {
    this.width = this.width-20;
  }

  setImage(position:number) {
    this.selected = position;
  }

  siguiente() {
    this.selected++;
  }

  anterior() {
    this.selected--;
  }

  pagSiguiente() {
    if (this.sliceFin > this.galeria.length)
    {
      this.sliceIni = 0;
      this.sliceFin = 3;
    } else {
      this.sliceIni = this.sliceIni+3;
      this.sliceFin = this.sliceFin+3;
    }

  }

  pagAnterior() {
    if (this.sliceIni == 0)
    {
      this.sliceIni = 0;
      this.sliceFin = 3;
    } else {
      this.sliceIni = this.sliceIni-3;
      this.sliceFin = this.sliceFin-3;
    }
  }

  play() {
    this.showStop = true;
    this.intervalId = setInterval(()=> {
      this.playCarrusel();
    }, 2000)
  }

  playCarrusel() {
    if (this.selected === this.galeria.length-1) {
      this.selected = 0;
    } else {
      this.selected++;
    }
  }
  stop() {
    this.showStop = false;
    clearInterval(this.intervalId);
  }
}
