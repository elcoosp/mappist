import * as React from 'react'
import * as enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { Mappist } from './Mappist'
enzyme.configure({ adapter: new Adapter() })

interface Person {
  name: string
  id: number
}
const fakeData: Person[] = [{ name: 'bob', id: 0 }, { name: 'alice', id: 1 }]
const PersonComp: React.SFC<Person> = ({ name, id }) => (
  <div>
    {name} with some id: {id}
  </div>
)

it('renders all the items in the list', () => {
  const mappedList = enzyme.shallow(
    <Mappist data={fakeData} keyProp="id" component={PersonComp} />
  )

  expect(mappedList.children()).toHaveLength(fakeData.length)
  expect(
    mappedList.equals(
      <React.Fragment>
        <PersonComp name="bob" id={0} />
        <PersonComp name="alice" id={1} />
      </React.Fragment>
    )
  ).toEqual(true)
})
