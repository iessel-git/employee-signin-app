import { useState } from 'react';
import { supabase } from '../supabaseClient';


export default function SignInPage() {
const [employeeId, setEmployeeId] = useState('');
const [message, setMessage] = useState('');


const handleSignIn = async () => {
if (!employeeId) return setMessage('Enter employee ID');


const { error } = await supabase
.from('attendance')
.insert([{ employee_id: employeeId, sign_in: new Date() }]);


if (error) setMessage(error.message);
else setMessage('Sign-in recorded');
};


return (
<div style={{ padding: '20px' }}>
<h2>Employee Sign In</h2>


<input
type="text"
placeholder="Employee ID"
value={employeeId}
onChange={(e) => setEmployeeId(e.target.value)}
/>


<button onClick={handleSignIn}>Sign In</button>
<p>{message}</p>
</div>
);
}
