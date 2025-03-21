export async function GET(req: Request) {
    return Response.json({
        clients: 15084,
        moderated: 5939,
        networks: 116718,
        mitigated: 2384,
    })
}