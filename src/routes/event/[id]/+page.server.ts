import type { Load } from "@sveltejs/kit";
import axios from "axios";


export const load: Load = async ({ params }) => {
    const response = await axios.get(`http://localhost:3000/events/${params.id}`)
    return response.data;
}