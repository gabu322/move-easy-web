export async function POST(request) {
    console,log("here?")
    const { email, password } = await request.json();
    const response = await fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    }).then((res) =>{

        res.json()
        console.log(res.JSON())
    }
    );
    console.log(response)
    return new Response(null, {
        status: response.status,
        statusText: response.statusText,
        headers: {
            'Location': '/',
        },
    });
}
