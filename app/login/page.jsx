export default function Page() {
    return <main className="w-full h-screen flex items-center justify-center">
        <form className="w-96 h-96 margin-auto border border-black rounded-md shadow-lg">

            <h1>Login</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Login</button>
            </form>
        </form>
    </main>
}
