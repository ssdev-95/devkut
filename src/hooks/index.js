import { useContext } from 'react'
import { DevkutContext } from '@/contexts/DevkutContext'

function useDevkut() {
    return useContext(DevkutContext)
}

export { useDevkut }