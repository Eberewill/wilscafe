import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Category = [
    { key: 1, value: "Food" },
    { key: 2, value: "Snacks" },
    { key: 3, value: "Fruits" },
    { key: 4, value: "Drinks" },
    { key: 3, value: "Others" },
    
]
 
 function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [CategoryValue, setCategoryValue] = useState(1)

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onContinentsSelectChange = (event) => {
        setCategoryValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !CategoryValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            category: CategoryValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }
     return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Title level={2}> Upload Travel Product</Title>
        </div>


        <Form onSubmit={onSubmit} >

            {/* DropZone */}
            <FileUpload refreshFunction={updateImages} />

            <br />
            <br />
            <label>Title</label>
            <Input
                onChange={onTitleChange}
                value={TitleValue}
            />
            <br />
            <br />
            <label>Description</label>
            <TextArea
                onChange={onDescriptionChange}
                value={DescriptionValue}
            />
            <br />
            <br /> 
            <label>Price(₦)</label>
            <Input
                onChange={onPriceChange}
                value={PriceValue}
                type="number"
            />
            <br/>
            <br /><label>Category</label><br />
            
            <select onChange={onContinentsSelectChange}>
                {Category.map(item => (
                    <option key={item.key} value={item.key}>{item.value} </option>
                ))}
            </select>
            <br />
            <br />

            <Button
                onClick={onSubmit}
            >
                Submit
            </Button>

        </Form>

    </div>
     );
 }
 
 export default UploadProductPage;