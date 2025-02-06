import { initTRPC } from "@trpc/server";

const trpc = initTRPC.create()

const ideas = [
    { nick: 'cool-idea-nick-1', title: 'Idea 1', description: 'Description of idea 1...' },
    { nick: 'cool-idea-nick-2', title: 'Idea 2', description: 'Description of idea 2...' },
    { nick: 'cool-idea-nick-3', title: 'Idea 3', description: 'Description of idea 3...' },
    { nick: 'cool-idea-nick-4', title: 'Idea 4', description: 'Description of idea 4...' },
    { nick: 'cool-idea-nick-5', title: 'Idea 5', description: 'Description of idea 5...' },
]



export const trpcRouter = trpc.router({
    getIdeas: trpc.procedure.query(() => {
        return {ideas}
    })
})

export type TrpcRouter = typeof trpcRouter
