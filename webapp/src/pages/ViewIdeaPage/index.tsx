import { useParams } from 'react-router-dom'
import {trpc} from '../../lib/trpc'
import { ViewIdeaRouteParams } from '../../lib/routes'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as ViewIdeaRouteParams

  const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery({
    ideaNick
})

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if (!data?.idea) {
    return <span>Idea not found</span>
  }

  return (
    <div>
      <h1>{data.idea.title}</h1>
      <p>{data.idea.description}</p>
      <div dangerouslySetInnerHTML={{__html: data.idea.text}}>
        
      </div>
    </div>
  )
}
