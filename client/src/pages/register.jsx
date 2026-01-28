function Register () {
    return(
        <div>
            <h1>Register</h1>

            <form >
                <input type="text"  placeholder="Name"/>
                <br /><br />

                <input type="email"  placeholder="Email"/>
                <br /><br />

                <input type="password" placeholder="Password" />
                <br /><br />

                <select>
                    <option value="">Select Role</option>
                    <option value="jobseeker">Job Seeker</option>
                    <option value="recruiter">Recruiter</option>
                </select>
                <br /><br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;