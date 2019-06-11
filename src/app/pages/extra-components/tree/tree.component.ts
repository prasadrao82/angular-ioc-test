import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface DeviceDataModel {
  name: string;
  children?: DeviceDataModel[];
}

const TREE_DATA: DeviceDataModel[] = [
  {
    name: 'Charter',
    children: [
      {name: 'GPS Tracker'},
      {name: 'KonaIndustrialSensor'},
      {name: 'KonaIndustrialEventSensor'},
      {name: 'DecentLabsAirMonitor'},
      {name: 'LairdWeatherSensor'},
    ],
  }, {
    name: 'Italy',
    children: [
      {
        name: 'Raiway',
        children: [
          {name: 'Intrusion Detection Camera'},
          {name: 'Air Quality Sensor'},
        ],
      }, {
        name: 'TIM',
        children: [
          {name: 'Sorama Sound Camera'},
          {name: 'Smart Bench'},
        ],
      },
    ],
  },
  {
    name: 'Germany',
    children: [
      {
        name: 'Munich',
        children: [
          {name: 'Intrusion Detection Camera'},
          {name: 'Air Quality Sensor'},
           {name: 'Smart Light'},
          {name: 'Environmental Sensor'},
          {name: 'Panic Camera'},
        ],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface DeviceTreeNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'ngx-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],

})

export class TreeComponent {
  private _transformer = (node: DeviceDataModel, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<DeviceTreeNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: DeviceTreeNode) => node.expandable;
}
