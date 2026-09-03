import React from "react"
import { Container, Section, Bar } from '@column-resizer/react';

const DesktopView = ({ renderTextCol, renderImageCol }) => {
  return (
    <Container className="h-screen">

      <Section
        defaultSize={500}
        minSize={50}
        className="!overflow-scroll pt-14 pb-9 px-4">
        {renderTextCol()}
      </Section>

      <Bar size={10} className='divider' />

      <Section
        defaultSize={500}
        minSize={50}
        className="!overflow-scroll pt-14 pb-9 pr-9.5 pl-4">
        {renderImageCol()}
      </Section>

    </Container>
  )
}

export default DesktopView
