const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
    return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
}

export const getAllIdeasRoute = () => '/'

export const viewIdeaRouteParams = getRouteParams({ ideaNick: true })
export type ViewIdeaRouteParams = typeof viewIdeaRouteParams

export const getViewIdeaRoute = ({ideaNick}: ViewIdeaRouteParams) => `/ideas/${ideaNick}`


// export const getViewIdeaRoute = ({ideaNick}: {ideaNick: string}) => `/ideas/${ideaNick}`
// export const viewRouteParams = { ideaNick: ':ideaNick' }
// export type viewRouteTypes = {ideaNick: string}




