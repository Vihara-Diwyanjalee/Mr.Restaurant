import { useEffect, useState } from "react";
import "./Orders.css";
import axios from "axios";
import { api } from "../config";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, Badge } from '@chakra-ui/react';

function Orders(){
    const [orders, setOrders] = useState([]);

    const fetchOrders = async() => {
        const result = await axios.get(`${api}/item/orders`);
        setOrders(result.data);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const handleComplete = async (orderId) => {
        await axios.post(`${api}/item/order-complete/${orderId}`, {});
        fetchOrders();
    };

    return(
        <div className="orders-container">
            <h2 className="subtitle">Orders</h2>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Order Code</Th>
                            <Th>Items</Th>
                            <Th isNumeric>Total</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {orders.map((order) => (
                            <Tr key={order.id}>
                                <Td>{order.code}</Td>
                                <Td>
                                    {order.items.map((item) => (
                                        <div key={item.name}>
                                            {item.name} ({item.qty})
                                        </div>
                                    ))}
                                </Td>
                                <Td isNumeric>{order.total}</Td>
                                <Td>
                                    {order.complete ? (
                                        <Badge colorScheme="green">Completed</Badge>
                                    ) : (
                                        <Button colorScheme="green" onClick={() => handleComplete(order.id)}>
                                            Complete
                                        </Button>
                                    )}
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Orders;
