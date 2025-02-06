import { trpc } from '../../lib/trpc'

export const AllIdeasPage = () => {
    const {data, error, isLoading, isFetching, isError} = trpc.getIdeas.useQuery()

    if (isLoading || isFetching) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (

    <div>
      <h1>All Ideas.</h1>

      {data?.ideas.map((idea) => {
        return (
          <div key={idea.nick}>
            <h2>{idea.title}</h2>
            <p>{idea.description}</p>
          </div>
        )
      })}
    </div>
  )
}
