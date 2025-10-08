import { Table } from "reactstrap";
import { MenuInfo } from "../Utilities/MenuInfo.js";

function MenuTable() {

    const usdFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <Table id="Menu" style={{ border: '#F0E68C 2px solid', boxShadow: 'black 2px 2px 2px'}}>
            <thead>
            <tr>
                <th className= "text-white">Image</th>
                <th className= "text-white">Name</th>
                <th className= "text-white">Description</th>
                <th className= "text-white">Price</th>
            </tr>
            </thead>
            <tbody>
            {MenuInfo.map((m, index) => (
                <tr key={index}>
                    <th scope="row" className= "text-white">
                        <img src={m.img} alt={m.name} id="MenuImage" />
                    </th>
                    <td className= "text-white">{m.name}</td>
                    <td className= "text-white">{m.desc}</td>
                    <td className= "text-white">{usdFormatter.format(m.price)}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default MenuTable;