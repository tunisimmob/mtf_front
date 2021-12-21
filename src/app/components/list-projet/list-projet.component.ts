import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';
import { Projet } from "src/app/interfaces/projet";



@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {
  projet: Observable<Projet[]>;
  p: number = 1;
  deleteMessage = false;

  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.projet = this.DataService.getProjetList();
  }


  projetUpdate(id: number) {
    this.router.navigate(['update-projet', id]);
  }


  projetDelete(id: number) {

    swal.fire({
      title: 'Voulez vous vraiment supprimer ce projet de façon permanente ?',
      showDenyButton: true,
      confirmButtonText: `Oui`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.projet = this.DataService.getProjetList();

        this.DataService.deleteProjet(id)
          .subscribe(
            data => {
              swal.fire('Projet supprimé !', '', 'success')

              console.log(data);
              this.deleteMessage = true;
              this.ngOnInit()
            },
            error => {
              console.log(error),
              swal.fire('Projet non supprimé !', "vous devez supprimer l'appartement ou le video qui contient ce projet", 'error')
            }

          );


      }
    })

  }
}
