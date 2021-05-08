import React from 'react'
import BCSmallColor from '../images/BCSmallColor.png'

export default class BrokerCheck extends React.Component{
    
    render(){
    return <div className='brokercheck'>
        <a href='https://brokercheck.finra.org/individual/summary/4199157' target='_blank'>
            <img  src={BCSmallColor} width='100%' className='broker-check-logo'/>
        </a>
    </div>
    }
}