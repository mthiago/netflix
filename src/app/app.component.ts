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
    let actived = document.getElementsByClassName('actived')[0]
    let movie = document.getElementById(actived.id)
    movie.classList.remove('actived')
    movie.style.display = 'none'
  }
}
