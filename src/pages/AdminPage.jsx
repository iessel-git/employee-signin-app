import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';


export default function AdminPage() {
const [records, setRecords] = useState([]);


useEffect(() => {
loadRecords();
}, []);


const loadRecords = async () => {
const { data, error } = await supabase
.from('attendance')
.select('*')
.order('sign_in', { ascending: false });


if (!error) setRecords(data);
};


return (
<div style={{ padding: '20px' }}>
<h2>Admin Dashboard</h2>


<table border="1" cellPadding="8">
<thead>
<tr>
<th>Employee ID</th>
<th>Sign In</th>
<th>Sign Out</th>
<th>Total Hours</th>
</tr>
</thead>
<tbody>
{records.map((row) => (
<tr key={row.id}>
<td>{row.employee_id}</td>
<td>{row.sign_in}</td>
<td>{row.sign_out}</td>
<td>{row.total_hours?.toFixed(2)}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}
