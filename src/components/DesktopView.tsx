import React from "react"
import Nav from "./Nav";
import { Link } from "gatsby";
import Logo from "./Logo";
import { Container, Section, Bar } from '@column-resizer/react';

const DesktopView = ({ renderTextCol, renderImageCol }) => {
  return (
    <Container className="h-screen">

      <Section className="flex flex-col pt-10.5 pb-9 pl-9.5 pr-4" minSize={50} >
        <nav>
          <Link className="shrink flex mb-6" to={`/`}>
            <h1><Logo className="flex justify-start" /></h1>
          </Link>
          <Nav />
        </nav>
        <div className={`text-base font-glaston text-center mt-auto`}>
          50 Rue de Turenne, Paris 3
        </div>
      </Section>

      <Bar size={10} style={{ background: 'transparent', cursor: 'col-resize' }} />

      <Section className="!overflow-scroll pt-14 pb-9 px-4">
        {renderTextCol()}
      </Section>

      <Bar size={10} style={{ background: 'transparent', cursor: 'col-resize' }} />

      <Section className="!overflow-scroll pt-14 pb-9 pr-9.5 pl-4">
        {renderImageCol()}
      </Section>

    </Container>
  )
}

export default DesktopView
