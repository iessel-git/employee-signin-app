import { useState } from 'react';
import { supabase } from '../supabaseClient';


export default function SignOutPage() {
const [employeeId, setEmployeeId] = useState('');
const [message, setMessage] = useState('');


const handleSignOut = async () => {
if (!employeeId) return setMessage('Enter employee ID');


const { data, error } = await supabase
.from('attendance')
.select('*')
.eq('employee_id', employeeId)
.is('sign_out', null)
.order('sign_in', { ascending: false })
.limit(1)
.single();


if (error || !data) return setMessage('No active sign-in found');


const { error: updateError } = await supabase
.from('attendance')
.update({ sign_out: new Date() })
.eq('id', data.id);


if (updateError) setMessage(updateError.message);
else setMessage('Sign-out recorded');
};


return (
<div style={{ padding: '20px' }}>
<h2>Employee Sign Out</h2>


<input
type="text"
placeholder="Employee ID"
value={employeeId}
onChange={(e) => setEmployeeId(e.target.value)}
/>


<button onClick={handleSignOut}>Sign Out</button>
<p>{message}</p>
</div>
);
}
