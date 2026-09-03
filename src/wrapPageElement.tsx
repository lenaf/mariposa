import React from "react"
import Layout from "./components/layout"

// Wraps every page in the same Layout instance so Nav (and its accordion
// state) persists across page navigation instead of remounting fresh.
export const wrapPageElement = ({ element }: { element: React.ReactNode }) => (
  <Layout>{element}</Layout>
)
