import React from "react"
import BrandsListItem from "../components/brands-list-item"
import RetinaImage from "../components/retina-image"
import Link from "../components/link"

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      <div className="container max-w-screen-lg mx-auto px-4 text-center py-16 lg:py-20 xl:py-32">
        <h1 className="heading mb-6">Built Using Quality Brands</h1>
        <p className="text-lg">When you look at a Clayton Built® home, you will see it is complete with appliances and materials from other dependable brands built right in. We partner with some of the world’s leading homebuilding brands to ensure your home is equipped with safe, sustainable, long-lasting and innovative products.</p>
        <p className="text-xs leading-snug">Material brands are subject to change depending on availability, home model and building facility constructing the home.</p>
      </div>

      <div className="grid grid-flow-row lg:gap-8 lg:max-w-screen-lg xl:max-w-screen-xl lg:mx-auto lg:px-4">
        <BrandsListItem swap="false" large="ecobee_desktop.jpg" small="ecobee_Tablet.jpg">
          <RetinaImage src="images/brand-logos/ecobee_Logo_Grey.png" className="mb-6" />
          <p><Link href="#" text="ecobee" /> smart thermostats are engineered for enhanced energy savings and controlling comfort.</p>
          <p>ecobee smart thermostats seamlessly integrates with several smart home systems such as Google Assistant™, Apple® HomeKit™  and Amazon Alexa. Monitor and adjust your ecobee thermostat from anywhere using your smart device.</p>
          <p>ecobee thermostats can understand your schedule, local weather and HVAC system performance over time, optimizing for comfort based on your preferences.</p>
          <p className="text-xs leading-snug">Google Assistant is a trademark of Google LLC. Apple and HomeKit are trademarks of Apple, Inc., registered in the U.S. and other countries. Amazon, Alexa and all related trademarks and logos are trademarks of Amazon.com, Inc., or its affiliates.</p>
          <img className="mt-6" src="images/Exclusive Tag.svg" />
        </BrandsListItem>
        <BrandsListItem swap="true" large="SmartComfort_Desktop.jpg" small="Carrier_Tablet.jpg">
          <RetinaImage src="images/brand-logos/SmartComfort_BC Logo.png" className="mb-6" />
          <p><Link href="#" text="SmartComfort® by Carrier" /> is a fully insulated, sealed furnace unit that ensures you feel the comfort but don't hear it. SmartComfort air conditioners and heat pumps offer a range of impressive SEER (seasonal energy efficiency ratio) ratings to help save energy and reduce utility bills.</p>
          <p>SmartComfort by Carrier heating and cooling products undergo some of the most detailed and stringent quality processes during assembly, including a 100% run-testing of every unit made.</p>
          <img className="mt-6" src="images/Exclusive Tag.svg" />
        </BrandsListItem>
        <BrandsListItem swap="false" large="Duracraft_Desktop.jpg" small="Duracraft_Tablet.jpg">
          <RetinaImage src="images/brand-logos/DuraCraft__Logo_K.png" className="mb-6" />
          <p><Link href="#" text="DuraCraft®" /> cabinetry surfaces are made from a sturdy, water-repellent material developed in Europe that is exclusive to Clayton Built® homes in the off-site housing industry.</p>
          <p>DuraCraft cabinets are assembled using modern machinery and installed by hand at a Clayton home building facility with precision and care.</p>
          <p>These cabinets are designed to be unique and beautiful with fresh, on-trend colors, giving your spaces the look and feel you want.</p>
          <img className="mt-6" src="images/Exclusive Tag.svg" />
        </BrandsListItem>
        <BrandsListItem swap="true" large="Lux_Desktop.jpg" small="Lux_Tablet.jpg">
          <RetinaImage src="images/brand-logos/Lux_Logo_Color.png" className="mb-6" />
          <p>Exclusive to Clayton Built® homes, <Link href="#" text="Lux windows" /> are more than just a beautiful design feature, they help homes be more energy efficient. That’s why they only use Low-E glass and have optional argon gas-filled windows for even more efficiency.</p>
          <p>Keeping the elements out of your home is a window’s top job, that’s why all Lux windows also contain double-paned insulated glass to help reduce energy use and outside noise.</p>
          <img className="mt-6" src="images/Exclusive Tag.svg" />
        </BrandsListItem>
        <BrandsListItem swap="false" large="Kwikset_Desktop.jpg" small="Kwikset_Tablet.jpg">
          <RetinaImage src="images/brand-logos/Kwikset_Logo_Grey.png" className="mb-6" />
          <p>You never have to sacrifice style for security.</p>
          <p><Link href="#" text="Kwikset®" /> SmartKey Security™, with one-key convenience, allows you to re-key your lock yourself in seconds and provides security that protects against advanced break-ins - it's bump proof and pick resistant.</p>
          <p>Kwikset door handles featuring Microban® technology have an added layer of protection against bacteria and are cleaner than unprotected surfaces.</p>
          <p className="text-xs leading-snug">Microban is the registered trademark of Microban Products Company.</p>
        </BrandsListItem>
        <BrandsListItem swap="true" large="Shaw_Desktop.jpg" small="Shaw_Tablet.jpg">
          <RetinaImage src="images/brand-logos/ShawFloors_Logo.png" className="mb-6" />
          <p><Link href="#" text="Shaw®" /> Floors are designed with you in mind.</p>
          <p>Shaw Floors’ R2X industry-leading applied chemistry for carpet defense provides consumers the long-term benefit of cleaning spills, soil and pet accidents quickly and easily. Spills and messes easily stay on top of the carpet fiber and won’t seep deep. This gives you time to simply wipe away the mess.</p>
          <p>Committed to continuously improve the performance and material health profile of its flooring, Shaw ensures each product undergoes a rigorous material health assessment in alignment with Cradle to Cradle™ principles.</p>
        </BrandsListItem>
        <BrandsListItem swap="false" large="Frigidaire_Desktop.jpg" small="Frigidaire_Tablet.jpg">
          <RetinaImage src="images/brand-logos/Frigidaire_Grey_c66m59y58k40.png" className="mb-6" />
          <p>We are proud to partner with <Link href="#" text="Frigidaire®" /> for  kitchen appliances in Clayton Built® homes.</p>
          <p>Frigidaire offers modern, family-friendly designs purposefully crafted with time-saving solutions like premium fingerprint-resistant Smudge-Proof® finishes. Frigidaire appliances are designed to help your everyday feel more manageable so you can spend more time making memories with those that matter the most.</p>
        </BrandsListItem>
        <BrandsListItem swap="true" large="Rheem_Desktop.jpg" small="Rheem_Tablet.jpg">
          <RetinaImage src="images/brand-logos/Rheem_Logo_Red.png" className="mb-6" />
          <p>In all Clayton Built® homes, Rheem®’s 40-gallon, dual element hot water heater comes standard, meaning more hot water for longer.</p>
          <p>As the largest manufacturer of water heating products in North America, <Link href="#" text="Rheem" /> is committed to providing its customers long-lasting comfort and savings through features like its automatic thermostat, which keeps water heated to your desired temperature. Rheem’s EverKleen™ self-cleaning system also fights sediment build-up to sustain operating efficiency and improve the life of the tank.</p>
        </BrandsListItem>
      </div>

      <div className="container max-w-screen-lg mx-auto px-4 text-center py-16 lg:py-20 xl:py-32">
        <h1 className="heading mb-6">Additional Brands</h1>
        <div className="extra-brands-list mb-8">
          <RetinaImage className="height-fit" src="images/additional-brands/CertainTeed_Logo.png" />
          <RetinaImage className="height-fit" src="images/additional-brands/Formica_Logo.png" />
          <RetinaImage className="height-fit" src="images/additional-brands/Hunter_Logo.png" />
          <RetinaImage className="height-fit" src="images/additional-brands/JamesHardie_Logo.png" />
          <RetinaImage className="height-fit" src="images/additional-brands/JM_Logo.png" />
          <RetinaImage className="height-fit" src="images/additional-brands/Knauf_Logo.png" />
          <RetinaImage className="height-fit" src="images/additional-brands/LP_Logo.png" />
          <RetinaImage className="height-fit" src="images/additional-brands/PlyGem_Logo.png" />
          <RetinaImage className="height-fit" src="images/additional-brands/PPG_Logo.png" />
          <RetinaImage className="height-fit" src="images/additional-brands/Sherwin-Williams_Logo.png" />
          <RetinaImage className="height-fit" src="images/additional-brands/Tamko_Logo.png" />
          <RetinaImage className="height-fit" src="images/additional-brands/Wilsonart_Logo.png" />
        </div>
        <p className="text-xs leading-snug">Trademarks of companies other than Clayton Homes are the property of those other companies.</p>
        <p className="text-lg">We partner with some of the world’s leading homebuilding brands to ensure your home is equipped with safe, sustainable, long-lasting and innovative products. Beyond the elevated products in our homes, we build Clayton Built® homes to our own exact standard, exceeding minimum requirements.  Whether it’s added strength in your flooring system, or extra protection against the elements, we obsess over the details of your home to ensure durability and quality are there for a lifetime.</p>
        <p className="text-lg">We believe in going above and beyond what’s expected to build homes that are efficient, dependable and beautiful so that you can sit back, relax and enjoy your new home.</p>
      </div>

    </div>
  )
}
