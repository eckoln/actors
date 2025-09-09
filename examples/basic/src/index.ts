import { Actor, handler } from '@cloudflare/actors'

export class MyActor extends Actor<Env> {
    async fetch(request: Request): Promise<Response> {
        return new Response(`Hello, World!`);
    }
}

export default handler(MyActor);
