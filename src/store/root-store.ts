export const storeInstances: any[] = []

const addRefStore: (store: any) => void = (store: any) => {
  storeInstances.push(store)
}

const dispatch: (action: any) => void = (action: any) => {
  if (storeInstances.length === 0) {
    return
  }

  storeInstances[0].dispatch(action)
}

const getState: () => void = () => {
  if (storeInstances.length === 0) {
    return
  }

  return storeInstances[0].getState()
}

export { addRefStore, dispatch, getState }
