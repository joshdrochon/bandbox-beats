import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

//component decorator
@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {

  albums: FirebaseListObservable<any[]>;

  //typescript automatically creates a property behind the scenes ie MarketplaceComponent.router
  constructor(private router: Router, private albumService: AlbumService){}

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }

  toAlbumDetails(clickedAlbum: Album){
    this.router.navigate(['albums', clickedAlbum.id]);
  };
}
