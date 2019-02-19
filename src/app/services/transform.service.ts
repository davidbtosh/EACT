import { Injectable } from '@angular/core';
import { isUndefined } from 'util';
import { Car } from '../interfaces/car';
import { CarShow } from '../interfaces/car-show';
import { TreeNode } from '../interfaces/tree-node'

@Injectable({
  providedIn: 'root'
})
export class TransformService {

  constructor() { }

  transform(carShows: CarShow[]) {
    
    // flatten car arrays (reduce) and remove duplicate makes and models (filter)
    let uniqueCars: Car[] = carShows.map(ar => ar.cars)
      .reduce((a,b) => a.concat(b), [])
      .filter((value, index, self) => index === self.findIndex((t) => (t.model === value.model && t.make === value.make && !isUndefined(t.model))))
      .map(ac => ac);

    // build filtered and sorted car makes tree - load children array (models) with function "this.getModels"
    let makesTree: TreeNode[] = uniqueCars
      .filter((value, index, self) => index === self.findIndex((t) => (t.make === value.make)))
        .map(makes => ({ name: makes.make, children: this.getModels(makes.make, uniqueCars, carShows) }))
        .sort((x,y) => x.name > y.name ? 1 : -1);

    return makesTree;      
  }


  getModels(make: string, uniqueCars: Car[], carShows: CarShow[]) : TreeNode[] {
    // build models tree - load children with function "this.getShows" 
    let modelsTree: TreeNode[] =  uniqueCars
      .filter(x => x.make === make)
      .map(y => ({ name: y.model !== "" ? y.model : "Unknown Model", children: this.getShows(y.model, carShows) })); 
    return modelsTree;
  }

  getShows(model: string, carShows: CarShow[]): TreeNode[] {    
    let shows: TreeNode[] = [];
    // iterrate carShows array and check cars sub array for model parameter - add to collection if found
    carShows.forEach(x => {
      if(x.cars.find(f => f.model === model)) {
        shows.push({name: x.name});
      }
    });
    //found shows for model
    return shows;
  }
}
