import {Component, OnInit} from "@angular/core";
import {ParkingSpot} from "../shared/parking-spot";
import {parkingSpots} from "../shared/parking-spots.model";


@Component({
  selector:'app-svg',
  templateUrl:'./test-svg.svg',
  styleUrl:'./svg.component.css',
})
export class SvgComponent implements OnInit{
  parkingSpots: ParkingSpot[] = parkingSpots;
  thisGroup = document.querySelector('#thisGroup');

  constructor() {
  }

  ngOnInit() {
    if(this.thisGroup){
      for(let spot of this.parkingSpots){
        const newRect = document.createElement('rect');
        newRect.setAttribute('x', String(spot.xCoord));
        newRect.setAttribute('y',String(spot.yCoord));
        newRect.setAttribute('height', "150");
        newRect.setAttribute('width',"150");

        this.thisGroup.appendChild(newRect);
      }
    }
  }
}
