import React from 'react'
import './Notes.css';

export default function Notes() {
    return (
        <div className='p-4'>
            <div className='p-4'>
                <h1 className='text-3xl text-gray-700'>Benefits of Cloud Computing</h1>
                <ul className="p-4 list-disc list-outside">
                    <li>Trade upfront expense for variable expense</li>
                    <li>Stop spending money to run and maintain datacentres</li>
                    <li>Stop guessing capacity</li>
                    <li>Benefit from massive economies of scale</li>
                    <li>Increase speed and agility</li>
                    <li>Go global in minutes</li>
                </ul>
            </div>
            <div className='p-4'>
                <h1 className="text-3xl text-gray-700">EC2 Instance Types</h1>
                <ul className="p-4 list-disc list-outside">
                    <li>General purpose instances</li>
                    <li>Compute optimized instances (web servers, batch processing, gaming)</li>
                    <li>Memory optimized instances (High performance databases</li>
                    <li>Accelerated computing instances (graphics applications, game streaming, and application streaming)</li>
                    <li>Storage optimized instances (distributed file systems, data warehousing applications, OLTP)</li>
                </ul>
            </div>

            <div className='p-4'>
                <h1 className="text-3xl text-gray-700">EC2 Pricing</h1>
                <ul className='p-4 list-disc list-outside'>
                    <li>On-Demand</li>
                    <li>Savings Plan</li>
                    <li>Reserved Instances</li>
                    <li>Spot Instances</li>
                    <li>Dedicated Hosts</li>
                </ul>
            </div>

            <div className='p-4'>
                <h1 className="text-3xl text-gray-700">Networking</h1>
                <div className="vpc">vpc
                    <div className="igw">igw</div>
                    <div className="elastic-load-balancer">elastic-load-balancer</div>
                    <div className="gateway-load-balancer not used"></div>
                    <div className="autoscale-group"></div>
                    <div className='az1'>
                        <div className='public-subnet'>
                            <div className='ec2'></div>
                        </div>
                        <div className='private-subnet'>
                            <div className='ec2'></div>
                        </div>
                    </div>
                </div>
                <div className="nat-gateway"></div>
                <div className='az2'>
                    <div className='public-subnet'>
                        <div className='ec2'></div>
                    </div>
                    <div className='private-subnet'>
                        <div className='ec2'></div>
                    </div>
                </div>
            </div>
            <div className='p-4'>
                <h1 className="text-3xl text-gray-700">Databases</h1>
                <div className=""></div>
            </div>
        </div>
    )
}
