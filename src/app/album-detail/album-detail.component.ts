import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; //required for dynamic routing
import { Location } from '@angular/common'; //normalizes paths
import { Album } from '../album.model';//we most import this model to reference it

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  albumId: number = null; //will be redefined later by the id passed from the URL

  constructor(private route: ActivatedRoute, private location: Location){}

  //component lifecyle hook
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });
  }

}
