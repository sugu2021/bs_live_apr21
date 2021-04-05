import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
   providedIn: 'root'
})

export class MetaService {
   constructor(@Inject(DOCUMENT) private dom: Document) { }

   createCanonicalURL() {
      let link: HTMLLinkElement = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
      var CUR=this.dom.URL.replace('http://','https://');
      console.log(CUR);
      link.setAttribute('href',CUR);
   }
}
