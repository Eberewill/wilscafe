import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            background: "#5D4332",
            color: 'white'
        }}>
           <p> WILLS CAFE  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
