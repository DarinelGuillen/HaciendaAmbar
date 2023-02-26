import Main from "../organism/Main";
import "../../assets/style/AdminView.css";
function AdminView() {
  return (
    <>
      <h1>VIEW ADMIN</h1>
      <table className="default">
        <tr>
          <th>Usuario</th>
          <th>Nombre de paquete</th>
          <th>Inicio de renta</th>
          <th>Fin de renta</th>
          <th>Costo</th>
        </tr>

        <tr>
          <td>Dario Antonio</td>
          <td>Albercazo Ámbar</td>
          <td>24/02/2023</td>
          <td>24/02/2023</td>
          <td>$2,300</td>
          <td>
            <button>Aceptar Renta</button>
          </td>
          <td>
            <button>Denegar Renta</button>
          </td>
        </tr>
        <tr>
          <td>José Merliny Linguini</td>
          <td>Paquete Gold 200</td>
          <td>26/02/2023</td>
          <td>27/02/2023</td>
          <td>$4,300</td>
          <td>
            <button>Aceptar Renta</button>
          </td>
          <td>
            <button>Denegar Renta</button>
          </td>
        </tr>
        <tr>
          <td>Darinel de Jesús Ochoa</td>
          <td>Paquete Platinum 200</td>
          <td>28/02/2023</td>
          <td>29/02/2023</td>
          <td>$10,200</td>
          <td>
            <button>Aceptar Renta</button>
          </td>
          <td>
            <button>Denegar Renta</button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default AdminView;
