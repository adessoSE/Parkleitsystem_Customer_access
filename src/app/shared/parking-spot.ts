export interface ParkingSpot {
  id: number;
  // true === 'frei' && false ==='besetzt'
  status: boolean;
  // imgCoords?: {x: number, y:number};
  xCoord: number;
  yCoord: number;
  imgRot?: number;
}
