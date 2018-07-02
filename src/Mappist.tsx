import * as React from 'react'
import { Fragment } from 'react'

export interface Props {
  keyProp: string
  data: Object[]
  component: React.ComponentType
}

export const Mappist: React.SFC<Props> = ({
  data,
  component: Comp,
  keyProp
}) => (
  <Fragment>
    {data.map(props => <Comp key={props[keyProp]} {...props} />)}
  </Fragment>
)
