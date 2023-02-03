import { useState } from 'react'
import { DocumentNode, OperationVariables, QueryHookOptions, TypedDocumentNode, useQuery } from '@apollo/client'

export function useFetch<TData = any, TVariables = OperationVariables> (
  query: DocumentNode | TypedDocumentNode<TData, TVariables>, 
  options?: QueryHookOptions<TData, TVariables>
) {

  const [data, setData] = useState<TData | null>(null)

  const response = useQuery(query, {
    ...options,
    onCompleted: (queryData) => setData(queryData)
  })

  return { ...response, data, setData }
}
