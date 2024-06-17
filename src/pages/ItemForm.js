import { useEffect, useState } from "react";
import "./ItemForm.css";
import axios from "axios";
import { api } from "../config";
import FormInput from "../components/common/FormInput";
import SubmitButton from "../components/common/SubmitButton";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function ItemForm(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            const result = await axios.get(api + "/item/" + params.id);
            const item = result.data;
    
            setName(item.name);
            setPrice(item.price);
            setImage(item.image);
        };
        if(params.id){
            fetchItem();
        }    
    }, [params.id]);
    
    const handleUpload = async(e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        const result = await axios.post(api + "/upload", formData);
        setImage(result.data.path);
    };

    const handleSubmit = async() => {
        try{
            if(params.id){
                await axios.put(api + "/item/edit/" + params.id, {
                    name,
                    price,
                    image,
                });
                toast.success("Item Updated Successfully");
            } else{  
                await axios.post(api + "/item/add", {
                    name,
                    price,
                    image,
                });
                toast.success("Item Added Successfully"); 
            }      
            navigate("/admin/items");

        }catch(err) {
            console.log(err);
            toast.error("Something went wrong");
        }
    };

    return(
        <div className="item-form-container">
            <h2 className="subtitle">{params.id ? "Edit" : "Add"} Item</h2>
            <form>
                <FormInput 
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <FormInput 
                    label="Price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <FormInput label="Image" type="file" onChange={handleUpload} />
                {image && (
                    <img src={`${api}${image}`} width="100px" height="100px" alt="" />
                )}

                <SubmitButton
                    text={params.id ? "Update" : "Add item"}
                    className="submit-button" 
                    onClick={handleSubmit}
                />
            </form>
        </div>
    );
}

export default ItemForm;
