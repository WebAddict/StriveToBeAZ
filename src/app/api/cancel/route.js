import { cancelRegistration} from "@/app/services/RegisterService";


export async function POST(req) {
    try {
        const { uniqueid, id } = await req.json();
        const result = await cancelRegistration(uniqueid, id);
        return new Response(
          JSON.stringify({ message: "Registration cancelled", result }),
          { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: 'Something went wrong.',
                details: error?.toString(),
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
