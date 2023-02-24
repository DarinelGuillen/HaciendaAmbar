import Main from "../organism/Main";
import "../../assets/style/TestAdminView.css"
function TestAdminView() {
    return ( 
        <>
        <h1>VIEW ADMIN</h1>
        <Main/>
        <table class="default">
            <tr>
                <th>Usuario</th>
                <th>Mañana</th>
                <th>Domingo</th>
            </tr>
            <tr>
                <td>...</td>
                <td>...</td>
                <td>...</td>
            </tr>
            <tr>
                <td>......</td>
                <td>......</td>
                <td>......</td>
            </tr>
            <tr>
                <td>.........</td>
                <td>.........</td>
                <td>.........</td>
            </tr>
        </table>
        </>
     );
}

export default TestAdminView;