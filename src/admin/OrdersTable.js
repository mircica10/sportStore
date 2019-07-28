import React, {Component} from "react";
import {OrdersRow} from "./OrdersRow";
import {PaginationControls} from "../PaginationControls";

export class OrdersTable extends Component {
    render = () => 
        <div>
            <h4 className="bg-info text-white text-center p-2">
                {this.props.totalSize } Orders
            </h4>

            <PaginationControls keys={["ID", "Name"]} 
                {...this.props} />

            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th className="text-right">Total</th>
                        <th className="text-center">Shipped</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.orders.map(order => 
                        <OrdersRow key = {order.id} order = {order} 
                            toggleShip={ () =>
                                this.props.toggleShip(order.id, !order.shipped)        
                            }
                        />
                    )}
                </tbody>
            </table>
        </div>
}