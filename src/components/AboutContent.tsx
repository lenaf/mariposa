import React from "react"
import buildingLA from "../images/building-la.png"
import buildingNY from "../images/building-ny.png"

const AboutContent = () => (
  <div className="flex min-h-[calc(100vh-200px)] md:min-h-screen items-center justify-center">
    <div className="max-w-[240px] w-full text-center">
      {/* LA Location */}
      <div className="mb-8">
        <img
          src={buildingLA}
          alt="Mariposa Gallery Los Angeles"
          className="w-full max-w-[220px] mx-auto mb-5"
        />
        <div
          className="font-bigcaslon font-medium text-sm leading-tight"
          style={{ fontFeatureSettings: '"onum" 1' }}
        >
          <p>2700 N Beachwood Drive</p>
          <p>Los Angeles, California</p>
        </div>
      </div>

      {/* NY Location */}
      <div className="mb-24">
        <img
          src={buildingNY}
          alt="Mariposa Gallery New York"
          className="w-full max-w-[220px] mx-auto mb-5"
        />
        <div
          className="font-bigcaslon font-medium text-sm leading-tight"
          style={{ fontFeatureSettings: '"onum" 1' }}
        >
          <p>150 W 28th Street</p>
          <p>New York, New York</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="font-bigcaslon font-medium text-sm leading-tight max-w-[200px]">
        <p className="text-left ml-6">to reach us:</p>
        <p className="text-right">
          <a
            href="mailto:info@mariposa.gallery"
            className="hover:opacity-70 transition-opacity"
          >
            info@mariposa.gallery
          </a>
        </p>
        <p className="text-right">
          <a
            href="https://www.instagram.com/mariposa.drive/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            @mariposa.drive
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default AboutContent
