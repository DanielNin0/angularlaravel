import { Component } from '@angular/core';
import { ApiLoginService } from "../../service/api/api-login/api-login.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isLoggedIn: boolean = false;

  constructor(private api: ApiLoginService) {}

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('token') !== null;
  }

  logout() {
    this.api.logout().subscribe(
      response => {
        // Eliminar el token del local storage
        localStorage.removeItem('token');
        // Realizar cualquier otra acción necesaria después del cierre de sesión
        // Por ejemplo, redireccionar a la página de inicio de sesión
        window.location.href = '/login';
      },
      error => {
        // Manejar cualquier error que ocurra durante el cierre de sesión
        console.error(error);
      }
    );
  }
}
