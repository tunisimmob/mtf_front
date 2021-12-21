import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';
import { Video } from "src/app/interfaces/video";

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.css']
})
export class ListVideoComponent implements OnInit {

  video: Observable<Video[]>;
  p: number = 1;
  deleteMessage = false;
  
  
  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.video = this.DataService.getVideoList();
  }



  videoUpdate(id: number) {
    this.router.navigate(['update-video', id]);
  }
 


  videoDelete(id: number) {
    swal.fire({
      title: 'Voulez vous vraiment supprimer cette video de façon permanente ?',
      showDenyButton: true,
      confirmButtonText: `Oui`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        swal.fire('Video supprimé !', '', 'success')
        this.video = this.DataService.getVideoList();

        this.DataService.deleteVideo(id)
          .subscribe(
            data => {
              console.log(data);
              this.deleteMessage = true;
              this.ngOnInit()
            },
            error => console.log(error));
      }
    })
  }


}
