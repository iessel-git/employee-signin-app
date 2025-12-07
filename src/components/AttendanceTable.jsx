export default function AttendanceTable({ records }) {
return (
<table border="1" cellPadding="8" style={{ width: '100%', marginTop: '20px' }}>
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
);
}
