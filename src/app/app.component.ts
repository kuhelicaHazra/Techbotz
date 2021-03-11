import { Component, ElementRef, Renderer, Input } from '@angular/core';
import { $ } from '../../node_modules/protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(window:scroll)': 'onScroll($event)'
}
})
export class AppComponent {
  isCollapsed = false;
  isScrolled = false;
currPos: Number = 0;
startPos: Number = 0;
changePos: Number = 100;
constructor(private el: ElementRef, private renderer: Renderer) {
}

onScroll(evt) {
    /**
     * BAD BAD way to do this
     * window object can be wrapped as a service
     * and then be imported here
    */
    this.currPos = (window.pageYOffset || evt.target.scrollTop)  - (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos ) {
        this.isScrolled = true;
    } else {
        this.isScrolled = false;
    }
}

initStateSave(evt) {
    // trigger an event so child components can listen and save their states
}
  onActivate(event) {
    const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}

}
