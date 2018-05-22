import * as React from 'react'
import * as enzyme from 'enzyme'
import { Mappist } from './Mappist'

interface Person {
  name: string
  id: number
}
const fakeData: Person[] = [{ name: 'bob', id: 0 }, { name: 'alice', id: 1 }]
const Person: React.SFC<Person> = ({ name, id }) => <div>{name}</div>

it('renders the correct text when no enthusiasm level is given', () => {
  const mappedList = enzyme.shallow(
    <Mappist data={fakeData} keyProp="id" component={Person} />
  )
  // expect(mappedList.find('.greeting').text()).toEqual('Hello Daniel!')
})
