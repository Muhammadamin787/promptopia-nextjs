/** @format */

import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json();

    try {
        await connectToDB();
        console.log({
            creator: userId,
            prompt,
            tag,
        });

        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag,
        });

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {
        return new Response(error, { status: 500 });
    }
};
