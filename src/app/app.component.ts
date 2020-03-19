import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'netflix';

  close() {
    document.getElementById('close').style.display = 'none'
    let movie = document.getElementsByClassName('actived')[0]
    movie.classList.remove('actived')
    movie.style.display = 'none'
  }
}
