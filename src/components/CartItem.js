import { IconButton } from "@chakra-ui/react";
import { api } from "../config";
import { AddIcon, CloseIcon, DeleteIcon } from '@chakra-ui/icons';

function CartItem({ item, handleAdd, handleReduce, handleRemove }) {
    return (
        <div className="cart-item-container">
            <img src={`${api}${item.image}`} alt="meal" />
            <div className="cart-item-details">
                <h3 className="cart-item-title">{item.name}</h3>
                <h5 className="cart-item-price">{item.price} x {item.qty}</h5>
                <div className="add-delete-btns">
                    <IconButton
                        colorScheme='blue'
                        size='sm'
                        icon={<AddIcon w={3} h={3} />}
                        onClick={handleAdd}
                    />
                    <IconButton
                        colorScheme='yellow'
                        size='sm'
                        icon={<CloseIcon w={3} h={3} />}
                        onClick={handleReduce}
                    />
                </div>
            </div>
        
            <IconButton 
                colorScheme='red' 
                icon={<DeleteIcon />} 
                onClick={handleRemove}
            />
        </div>
    );
}

export default CartItem;
