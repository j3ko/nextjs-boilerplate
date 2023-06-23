import { type PropsWithChildren, useRef } from 'react'
import { initializeStore, Provider, StoreType } from '.'

const StoreProvider = ({ children, ...props }: PropsWithChildren) => {
  const storeRef = useRef<StoreType>()

  console.log(JSON.stringify(props));

  if (!storeRef.current) {
    storeRef.current = initializeStore(props)
  }

  return <Provider value={storeRef.current}>{children}</Provider>
}

export default StoreProvider