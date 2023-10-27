import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tabs from './components/Tabs'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Tab.Group>
      <Tab.List>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }
            >
              Tab 1
            </button>
          )}
        </Tab>
        {/* ...  */}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        {/* ... */}
      </Tab.Panels>
    </Tab.Group>
    </>
  )
}

export default App
