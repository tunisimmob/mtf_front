import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';
import { Actualites } from "src/app/interfaces/actualites";

@Component({
  selector: 'app-list-actualites',
  templateUrl: './list-actualites.component.html',
  styleUrls: ['./list-actualites.component.css']
})
export class ListActualitesComponent implements OnInit {

  actualite: Observable<Actualites[]>;
  p: number = 1;
  deleteMessage = false;

  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.actualite = this.DataService.getActualiteList();
  }


 


  actualiteDelete(id: number) {

    swal.fire({
      title: 'Voulez vous vraiment supprimer cette actualite de façon permanente ?',
      showDenyButton: true,
      confirmButtonText: `Oui`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.actualite = this.DataService.getActualiteList();

        this.DataService.deleteActualite(id)
          .subscribe(
            data => {
              swal.fire('Actualite supprimé !', '', 'success')

              console.log(data);
              this.deleteMessage = true;
              this.ngOnInit()
            },
            error => {
              console.log(error),
              swal.fire('Actualite non supprimé !', 'error')
            }

          );


      }
    })

  }
}
