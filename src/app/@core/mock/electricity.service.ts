import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Electricity, ElectricityChart, ElectricityData } from '../data/electricity';
import 'rxjs/add/operator/map';


@Injectable()
export class ElectricityService extends ElectricityData {

    private actionUrl: string;

    listData: Observable<Electricity[]> ;

    private chartPoints = [
        490, 490, 495, 500,
        505, 510, 520, 530,
        550, 580, 630, 720,
        800, 840, 860, 870,
        870, 860, 840, 800,
        720, 200, 145, 130,
        130, 145, 200, 570,
        635, 660, 670, 670,
        660, 630, 580, 460,
        380, 350, 340, 340,
        340, 340, 340, 340,
        340, 340, 340,
    ];

    chartData: ElectricityChart[];

    constructor(private http: HttpClient) {
        super();
        this.chartData = this.chartPoints.map((p, index) => ({
            label: (index % 5 === 3) ? `${Math.round(index / 5)}` : '',
            value: p,
        }));
        this.actionUrl = 'http://localhost:8081/listusers';

    }


    getListData(): Observable<Electricity[]> {
         this.listData= this.http.get<Electricity[]>(this.actionUrl );
        return this.listData;
    }

    getChartData(): Observable<ElectricityChart[]> {
        return observableOf(this.chartData);
    }
}
