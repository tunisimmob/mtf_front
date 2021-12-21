import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import { Appartement } from "src/app/interfaces/appartement";
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-appartement',
  templateUrl: './list-appartement.component.html',
  styleUrls: ['./list-appartement.component.css']
})
export class ListAppartementComponent implements OnInit {
  appartement: Observable<Appartement[]>;
  p: number = 1;
  deleteMessage = false;

  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.appartement = this.DataService.getAppartementList();
  }


  appartementUpdate(id: number) {
    this.router.navigate(['update-appartement', id]);
  }


  appartementDelete(id: number) {

    swal.fire({
      title: 'Voulez vous vraiment supprimer cet appartement de façon permanente ?',
      showDenyButton: true,
      confirmButtonText: `Oui`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        swal.fire('Appartement supprimé !', '', 'success')
        this.appartement = this.DataService.getAppartementList();

        this.DataService.deleteAppartement(id)
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
