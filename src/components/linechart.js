import React from 'react'; 
import {LineChart, Line, XAxis, YAxis } from 'recharts';



function Chart () {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page A', uv: 300, pv: 2000, amt: 2000}, {name: 'Page A', uv: 350, pv: 2300, amt: 2300}]; 

    return (
        <div>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"></Line>
                <XAxis dataKey="uv" />
                <YAxis />
            </LineChart>
        </div>
    )
}

export default Chart; 