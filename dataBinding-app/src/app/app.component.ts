import { Component } from '@angular/core';
import { elementAttribute } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  //styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  text = 'look at the star';
  i = ' ';
  counter:number =0;
  checkStar:number = 0;
      count()
      {
        this.counter++;
        //console 
      }

      showStarText()
      {
        //alert("hello");
        this.checkStar++;
        if(this.checkStar%2 == 1)
        {
          
           this.i = 'look at the star';
        }
        else
        {
          this.i = ' '; 
        }
      }
}


