import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; //required for dynamic routing
import { Location } from '@angular/common'; //normalizes paths
import { Album } from '../album.model';//we most import this model to reference it
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: number; //will be redefined later by the id passed from the URL
  albumToDisplay: Album;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService
  ){}

  //component lifecyle hook
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }

}
