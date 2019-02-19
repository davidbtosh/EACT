import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { TransformService } from './services/transform.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { CarShow } from './interfaces/car-show';
import { FlatTreeNode } from './interfaces/flat-tree-node'
import { TreeNode } from './interfaces/tree-node'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private transformer = (node: TreeNode, level: number) => {
    return {
      expandable: node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  // tree control properties
  treeControl = new FlatTreeControl<FlatTreeNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatTreeNode) => node.expandable;

  title: string = 'Solution to Energy Aust Code Test for David Mackintosh.';
  
  constructor(
    private dataService: DataService,
    private transformService: TransformService) {}
  
    
  loadTree() {    
    // get data from http service    
    this.dataService.getCars().subscribe(
      resp => {        
        if(resp) {
          let carShows: CarShow[] = resp;             
          this.dataSource.data = this.transformService.transform(carShows);            
        }
      }
    );
  }
}
