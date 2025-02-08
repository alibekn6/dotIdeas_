import { initTRPC } from '@trpc/server'
import _ from 'lodash'
import {z} from 'zod'

const trpc = initTRPC.create()


const ideas = _.times(100, (i) => ({
  nick: `cool-idea-nick-${i}`,
  title: `Idea ${i}`,
  description: `Description of idea ${i}...`,
  text: _.times(100, (j) => `<p> The paragraph ${j} of the idea ${i}.... </p>`).join('')
}))

console.log(ideas)

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas: ideas.map((idea) => _.pick(idea, ['nick', 'title', 'description'])) }
  }),
  getIdea: trpc.procedure.input(
    z.object({
      ideaNick: z.string(),
      
    })).query(({input}) => {
      const idea = ideas.find((idea) => idea.nick === input.ideaNick)
      // if (!idea) throw new Error(`Idea ${input.ideaNick} not found`)
      
      return {idea: idea || null}
    })
})

export type TrpcRouter = typeof trpcRouter
