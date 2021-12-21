import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import { Presentation } from "src/app/interfaces/presentation";
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.component.html',
  styleUrls: ['./list-presentation.component.css']
})
export class ListPresentationComponent implements OnInit {
  presentation: Observable<Presentation[]>;
  p: number = 1;
  deleteMessage = false;
  
  
  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.presentation = this.DataService.getPresentationList();
  }



  presentationUpdate(id: number) {
    this.router.navigate(['update-presentation', id]);
  }
 

  presentationDelete(id: number) {

    swal.fire({
      title: 'Voulez vous vraiment supprimer cet presentation de façon permanente ?',
      showDenyButton: true,
      confirmButtonText: `Oui`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        swal.fire('Presentation supprimé !', '', 'success')
        this.presentation = this.DataService.getPresentationList();

        this.DataService.deletePresentation(id)
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
