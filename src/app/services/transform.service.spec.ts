import { TestBed } from '@angular/core/testing';

import { TransformService } from './transform.service';
import { TreeNode } from '../interfaces/tree-node';
import { CarShow } from '../interfaces/car-show';
import { Car } from '../interfaces/car';
import { not } from '@angular/compiler/src/output/output_ast';


describe('TransformService', () => {

  let service: TransformService;
  let treeNode: TreeNode[];
  let carShows = createTestData();


  beforeEach(() => { 
    TestBed.configureTestingModule({})
    service = TestBed.get(TransformService);
    treeNode = service.transform(carShows);
  });

  it('should be created', () => {    
    expect(service).toBeTruthy();
  });

  it('tree node length should equal 5 (5 makes in test data)', () => {
    expect(treeNode.length).toEqual(5);
  });

  // test makes
  it('1st tree node name should be BMW (alpha sort)', () => {
    expect(treeNode[0].name).toContain('BMW');
  });

  it('2nd tree node name should be Ford (alpha sort)', () => {
    expect(treeNode[1].name).toContain('Ford');
  });

  it('3rd tree node name should be Holden (alpha sort)', () => {
    expect(treeNode[2].name).toContain('Holden');
  });

  it('4th tree node name should be Mitsubishi (alpha sort)', () => {
    expect(treeNode[3].name).toContain('Mitsubishi');
  });

  it('5th tree node name should be Volkswagen (alpha sort)', () => {
    expect(treeNode[4].name).toContain('Volkswagen');
  });

  // test models
  // BMW
  it('BMW children - contains 1 model', () => {
    expect(treeNode[0].children.length).toEqual(1);
  });

  it('BMW children - model name equals X5', () => {
    expect(treeNode[0].children[0].name).toContain('X5');
  });

  it('BMW children - model name X5 - 2 shows', () => {
    expect(treeNode[0].children[0].children.length).toEqual(2);
  });

  it('BMW children - model name X5 - Melbourne Show', () => {
    expect(treeNode[0].children[0].children).toContain({name: "Melbourne Show"});
  });

  it('BMW children - model name X5 - Sydney Show', () => {
    expect(treeNode[0].children[0].children).toContain({name: "Sydney Show"});
  });

  it('BMW children - model name X5 - not to contain Brisbane Show', () => {
    expect(treeNode[0].children[0].children).not.toContain({name: "Brisbane Show"});
  });

  // Ford
  it('Ford children - contains 1 model', () => {
    expect(treeNode[1].children.length).toEqual(1);
  });

  it('Ford children - model name equals Territory', () => {
    expect(treeNode[1].children[0].name).toContain('Territory');
  });

  it('Ford children - model name Territory - 1 show', () => {
    expect(treeNode[1].children[0].children.length).toEqual(1);
  });

  it('Ford children - model name Territory - not in Melbourne Show', () => {
    expect(treeNode[1].children[0].children).not.toContain({name: "Melbourne Show"});
  });

  it('Ford children - model name Territory - not in Sydney Show', () => {
    expect(treeNode[1].children[0].children).not.toContain({name: "Sydney Show"});
  });

  it('Ford children - model name Territory - Brisbane Show', () => {
    expect(treeNode[1].children[0].children).toContain({name: "Brisbane Show"});
  });

  // Holden
  it('Holden children - contains 1 model', () => {
    expect(treeNode[2].children.length).toEqual(1);
  });

  it('Holden children - model name equals Astra', () => {
    expect(treeNode[2].children[0].name).toContain('Astra');
  });

  it('Holden children - model name Astra - 2 shows', () => {
    expect(treeNode[2].children[0].children.length).toEqual(2);
  });

  it('Holden children - model name Astra - Melbourne Show', () => {
    expect(treeNode[2].children[0].children).toContain({name: "Melbourne Show"});
  });

  it('Holden children - model name Astra - not in Sydney Show', () => {
    expect(treeNode[2].children[0].children).not.toContain({name: "Sydney Show"});
  });

  it('Holden children - model name Astra - Brisbane Show', () => {
    expect(treeNode[2].children[0].children).toContain({name: "Brisbane Show"});
  });

  // Mitsubishi
  it('Mitsubishi children - contains 2 models', () => {
    expect(treeNode[3].children.length).toEqual(2);
  });

  it('Mitsubishi children - model name equals Outlander', () => {
    expect(treeNode[3].children[0].name).toContain('Outlander');
  });

  it('Mitsubishi children - model name equals Lancer', () => {
    expect(treeNode[3].children[1].name).toContain('Lancer');
  });

  // Outlander
  it('Mitsubishi children - model name Outlander - 3 shows', () => {
    expect(treeNode[3].children[0].children.length).toEqual(3);
  });

  it('Mitsubishi children - model name Outlander - Melbourne Show', () => {
    expect(treeNode[3].children[0].children).toContain({name: "Melbourne Show"});
  });

  it('Mitsubishi children - model name Outlander - Sydney Show', () => {
    expect(treeNode[3].children[0].children).toContain({name: "Sydney Show"});
  });

  it('Mitsubishi children - model name Outlander - Brisbane Show', () => {
    expect(treeNode[3].children[0].children).toContain({name: "Brisbane Show"});
  });

  // Lancer
  it('Mitsubishi children - model name Lancer - 2 shows', () => {
    expect(treeNode[3].children[1].children.length).toEqual(1);
  });

  it('Mitsubishi children - model name Lancer - Melbourne Show', () => {
    expect(treeNode[3].children[1].children).toContain({name: "Melbourne Show"});
  });

  it('Mitsubishi children - model name Lancer - not in Sydney Show', () => {
    expect(treeNode[3].children[1].children).not.toContain({name: "Sydney Show"});
  });

  it('Mitsubishi children - model name Lancer - not in Brisbane Show', () => {
    expect(treeNode[3].children[1].children).not.toContain({name: "Brisbane Show"});
  });


  // Volkswagen
  it('Volkswagen children - contains 2 models', () => {
    expect(treeNode[4].children.length).toEqual(2);
  });

  it('Volkswagen children - model name equals Golf', () => {
    expect(treeNode[4].children[0].name).toContain('Golf');
  });

  it('Volkswagen children - model name equals Beetle', () => {
    expect(treeNode[4].children[1].name).toContain('Beetle');
  });

  // Golf
  it('Volkswagen children - model name Golf - 1 show', () => {
    expect(treeNode[4].children[0].children.length).toEqual(1);
  });

  it('Volkswagen children - model name Golf - not in Melbourne Show', () => {
    expect(treeNode[4].children[0].children).not.toContain({name: "Melbourne Show"});
  });

  it('Volkswagen children - model name Golf - Sydney Show', () => {
    expect(treeNode[4].children[0].children).toContain({name: "Sydney Show"});
  });

  it('Volkswagen children - model name Golf - not in Brisbane Show', () => {
    expect(treeNode[4].children[0].children).not.toContain({name: "Brisbane Show"});
  });

  // Beetle
  it('Volkswagen children - model name Beetle - 1 show', () => {
    expect(treeNode[4].children[1].children.length).toEqual(1);
  });

  it('Volkswagen children - model name Beetle - not in Melbourne Show', () => {
    expect(treeNode[4].children[1].children).not.toContain({name: "Melbourne Show"});
  });

  it('Volkswagen children - model name Beetle - Sydney Show', () => {
    expect(treeNode[4].children[1].children).toContain({name: "Sydney Show"});
  });

  it('Volkswagen children - model name Beetle - not in Brisbane Show', () => {
    expect(treeNode[4].children[1].children).not.toContain({name: "Brisbane Show"});
  });  
});

function createTestData() {
    
  let astra: Car = { make: "Holden", model: "Astra"};
  let outlander: Car = { make: "Mitsubishi", model: "Outlander"};
  let lancer: Car = { make: "Mitsubishi", model: "Lancer"};
  let x5: Car = { make: "BMW", model: "X5"};
  let golf: Car = { make: "Volkswagen", model: "Golf"};
  let beetle: Car = { make: "Volkswagen", model: "Beetle"};
  let territory: Car = { make: "Ford", model: "Territory"};

  let melbShow: CarShow = { name: "Melbourne Show", cars: [] };
  let sydShow: CarShow = { name: "Sydney Show", cars: [] };
  let brisShow: CarShow = { name: "Brisbane Show", cars: [] };

  melbShow.cars.push(astra);
  melbShow.cars.push(outlander);
  melbShow.cars.push(x5);
  melbShow.cars.push(lancer);
  
  sydShow.cars.push(golf);
  sydShow.cars.push(x5);
  sydShow.cars.push(beetle);
  sydShow.cars.push(outlander);

  brisShow.cars.push(territory);
  brisShow.cars.push(astra);  
  brisShow.cars.push(outlander);

  
  let shows: CarShow[] = [];
  shows.push(melbShow);
  shows.push(sydShow);
  shows.push(brisShow);

  return shows;
}

