import { useParams } from 'react-router-dom'
import {trpc} from '../../lib/trpc'
import { ViewIdeaRouteParams } from '../../lib/routes'
import styles from './index.module.scss'
import { Segment } from '../../components/Segment'


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
    <Segment title={data.idea.title} description={data.idea.description}>
       
       <div className={styles.text} dangerouslySetInnerHTML={{ __html: data.idea.text }} />
        
      </Segment>
  )
}
