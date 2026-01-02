import React, { useState } from 'react'
import { MapPin, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react'
import RcSlider from 'rc-slider'
import 'rc-slider/assets/index.css'

import { Slider as PrimeSlider } from 'primereact/slider'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


import { Rating } from 'primereact/rating';




const FilterSidebar = ({ showMap, setShowMap }) => {
  const [expandedSections, setExpandedSections] = useState({
    typeOfPlace: true,
    roomsAndBeds: true,
    roomSize: true,
    priceRange: true,
    distance: true,
    guestReview: true,
    propertyClassification: true,
    amenities: true,
    popular: true,
    essentials: false,
    onsite: false,
    features: false,
    location: false,
    safety: false,

  })
  const [priceRange, setPriceRange] = useState({ min: 200, max: 1500 })
  const [bedrooms, setBedrooms] = useState(1)
  const [beds, setBeds] = useState(1)
  const [bathrooms, setBathrooms] = useState('Any')
  const [roomSizes, setRoomSizes] = useState({
    small: false,
    medium: true,
    large: false
  })

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const histogramData = [5, 12, 25, 40, 60, 85, 70, 45, 30, 20, 15,10, 5, 2]
  const MIN = 0
  const MAX = 1500

  const isBarActive = (index) => {
    const step = (MAX - MIN) / histogramData.length
    const barMin = MIN + index * step
    const barMax = barMin + step
    return barMax >= priceRange.min && barMin <= priceRange.max
  }

  const [distance, setDistance] = useState(10)



  return (<>
    <div className="relative mb-6">
          {/* Map Image */}
          <img
            src="/assets/images/map.jpg"
            alt="Map"
            className="w-full h-40 object-cover rounded-lg border border-gray-200"
          />

          {/* Button Overlay */}
          <button
            onClick={() => setShowMap(!showMap)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex items-center space-x-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg px-4 py-2 hover:bg-blue-100 shadow-sm">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Show on Map</span>
            </div>
          </button>
        </div>
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      
      {/* Type of place */}
      <div className="space-y-6">

        <div className='flex items-center justify-between'>
          
          <h3 className="text-lg font-semibold text-gray-900">Filter by:</h3>
          

          <button className="text-blue-600 text-sm font-medium hover:underline">
            Clear
          </button>
        </div>


        <div>
          <button
            onClick={() => toggleSection('typeOfPlace')}
            className="w-full flex items-center justify-between text-left mb-3"
          >
            <h4 className="font-medium text-gray-900">Type of Place</h4>
            {expandedSections.typeOfPlace ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.typeOfPlace && (
            <div className="space-y-2">
              <div className="inline-flex shadow-xs -space-x-px">
                <button
                  type="button"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md hover:bg-gray-50 font-medium text-gray-900"
                >
                  Any type
                </button>
                <button
                  type="button"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 hover:bg-gray-50 font-medium text-gray-900"
                >
                  Room
                </button>
                <button
                  type="button"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-r-md hover:bg-gray-50 font-medium text-gray-900"
                >
                  Entire home
                </button>
              </div>
            </div>
          )}
        </div>


                    <div className="border-t border-gray-300 my-4"></div>

        {/* Price Range Slider */}
        <div>
          <button
            onClick={() => toggleSection('priceRange')}
            className="w-full flex items-center justify-between text-left mb-3"
          >
            <h4 className="font-medium text-gray-900">Price Range</h4>
            {expandedSections.priceRange ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {expandedSections.priceRange && (
            <>
              <p className="text-sm text-gray-600 mb-3">
                Nightly prices including fees and taxes
              </p>

              <div className="space-y-4">

                {/* Histogram */}
                <div className="flex items-end h-12 gap-0.5 -mb-2">
                  {histogramData.map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-sm transition-colors"
                      style={{
                        height: `${height}%`,
                        backgroundColor: isBarActive(index)
                          ? '#14b8a6'
                          : '#e5e7eb'
                      }}
                    />
                  ))}
                </div>

                {/* RcSlider */}
                <RcSlider
                  range
                  min={MIN}
                  max={MAX}
                  value={[priceRange.min, priceRange.max]}
                  onChange={([min, max]) => setPriceRange({ min, max })}
                  trackStyle={[{ backgroundColor: 'transparent' }]}
                  railStyle={{ backgroundColor: '#e5e7eb', height: 2 }}
                  handleStyle={[
                    {
                      borderColor: '#14b8a6',
                      backgroundColor: '#fff',
                      opacity: 1,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    },
                    {
                      borderColor: '#14b8a6',
                      backgroundColor: '#fff',
                      opacity: 1,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }
                  ]}
                />

                {/* Min / Max display */}
                <div className="flex justify-between mt-4">
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-500">Minimum</span>
                    <div className="font-semibold border border-gray-300 rounded-full px-4 py-1">
                      $ {priceRange.min}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-500">Maximum</span>
                    <div className="font-semibold border border-gray-300 rounded-full px-4 py-1">
                      $ {priceRange.max}+
                    </div>
                  </div>
                </div>


              </div>
            </>
          )}
        </div>


                    <div className="border-t border-gray-300 my-4"></div>

        {/* Beds And Rooms */}
        <div>
          <button
            onClick={() => toggleSection('roomsAndBeds')}
            className="w-full flex items-center justify-between text-left mb-3"
          >
            <h4 className="font-medium text-gray-900">Rooms and Beds</h4>
            {expandedSections.roomsAndBeds ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.roomsAndBeds && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Bedrooms</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                    className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center text-sm">{bedrooms}</span>
                  <button
                    onClick={() => setBedrooms(bedrooms + 1)}
                    className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Beds</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setBeds(Math.max(1, beds - 1))}
                    className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center text-sm">{beds}</span>
                  <button
                    onClick={() => setBeds(beds + 1)}
                    className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Bathrooms</span>
                <select
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                </select>
              </div>
            </div>
          )}
        </div>

                    <div className="border-t border-gray-300 my-4"></div>
 
        {/* Room Size */}
        <div>
          <button
            onClick={() => toggleSection('roomSize')}
            className="w-full flex items-center justify-between text-left mb-3"
          >
            <h4 className="font-medium text-gray-900">Room Size</h4>
            {expandedSections.roomSize ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.roomSize && (
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={roomSizes.small}
                  onChange={(e) => setRoomSizes(prev => ({ ...prev, small: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">Small ( 25 m²)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={roomSizes.medium}
                  onChange={(e) => setRoomSizes(prev => ({ ...prev, medium: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">Medium (26-40 m²)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={roomSizes.large}
                  onChange={(e) => setRoomSizes(prev => ({ ...prev, large: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">Large ( 41 m²)</span>
              </label>
            </div>
          )}
        </div>

                    <div className="border-t border-gray-300 my-4"></div>

        {/* Distance From Centre */}
        <div>
          <button
            onClick={() => toggleSection('distance')}
            className="w-full flex items-center justify-between text-left mb-3"
          >
            <h4 className="font-medium text-gray-900">Distance From Centre</h4>
            {expandedSections.distance ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {expandedSections.distance && (
            <div className="space-y-3">

              <div className="px-1">
                <PrimeSlider
                  value={distance}
                  onChange={(e) => setDistance(e.value)}
                  min={1}
                  max={10}
                  className="w-full"
                />
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>1 km</span>
                <span>10+ km</span>
              </div>

            </div>
          )}
        </div>


              <div className="border-t border-gray-300 my-4"></div>


        {/* Guest review Score */}
        <div>
          <button
            onClick={() => toggleSection('guestReview')}
            className="w-full flex items-center justify-between text-left mb-3"
          >
            <h4 className="font-medium text-gray-900">Guest Review Score</h4>
            {expandedSections.guestReview ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {expandedSections.guestReview && (
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">5.0 Excellent</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">+4.0 Very good</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">+3.0 Good</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">+2.0 Fair</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">2.0 Poor</span>
              </label>
            </div>
          )}
        </div>

              <div className="border-t border-gray-300 my-4"></div>

        {/* Property classification */}
        <div>
          <button
            onClick={() => toggleSection('propertyClassification')}
            className="w-full flex items-center justify-between text-left mb-3"
          >
            <h4 className="font-medium text-gray-900">Property classification</h4>
            {expandedSections.propertyClassification ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {expandedSections.propertyClassification && (
            <div className="space-y-3">

              {/* 5 stars */}
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-sm text-gray-600 ml-2">5-Star</span>
                </div>
              </label>

              {/* 4 stars */}
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-sm text-gray-600 ml-2">4-Star</span>
                </div>
              </label>

              {/* 3 stars */}
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-sm text-gray-600 ml-2">3-Star</span>
                </div>
              </label>

              {/* 2 stars */}
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-sm text-gray-600 ml-2">2-Star</span>
                </div>
              </label>

              {/* 2 stars */}
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-sm text-gray-600 ml-2">1-Star</span>
                </div>
              </label>

              {/* No rating */}
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-sm text-gray-600 ml-2">No rating</span>
                </div>
              </label>

            </div>
          )}
        </div>


          {/*  فاصـــل  */}  <div className="border-t border-gray-300 my-4"></div>


        {/* Amenities */}
        <div>
          <button
            onClick={() => toggleSection("amenities")}
            className="w-full flex items-center justify-between mb-3"
          >
            <h4 className="font-medium text-gray-900">Amenities</h4>
            {expandedSections.amenities ? <ChevronUp /> : <ChevronDown />}
          </button>

          {expandedSections.amenities && (
            <div className="space-y-4">

              {/* Popular */}
              <button
                onClick={() => toggleSection("popular")}
                className="w-full flex items-center justify-between text-sm text-gray-700"
              >
                Popular
                {expandedSections.popular ? <ChevronUp /> : <ChevronDown />}
              </button>

              {expandedSections.popular && (
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-full border text-teal-600 border-teal-500">
                    Air Conditioning
                  </button>
                  <button className="px-4 py-2 rounded-full border text-teal-600 border-teal-500">
                    Wi-Fi
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300 text-teal-600">
                    BBQ Grill
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Washing machine
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    TV
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Kitchen
                  </button>
                </div>
              )}

              {/* Essentials */}
              <button
                onClick={() => toggleSection("essentials")}
                className="w-full flex items-center justify-between text-sm text-gray-700"
              >
                Essentials
                {expandedSections.essentials ? <ChevronUp /> : <ChevronDown />}
              </button>

              {expandedSections.essentials && (
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Radiant Heating
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Iron
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Hair Dryer
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Dedicated Workspace
                  </button>
                </div>
              )}

              {/* On-site Services */}
              <button
                onClick={() => toggleSection("onsite")}
                className="w-full flex items-center justify-between text-sm text-gray-700"
              >
                On-site Services
                {expandedSections.onsite ? <ChevronUp /> : <ChevronDown />}
              </button>

              {expandedSections.onsite && (
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    24-hour Front Desk
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Room service
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Luggage Storage
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Airport Shuttle
                  </button>
                </div>
              )}

              {/* Features */}
              <button
                onClick={() => toggleSection("features")}
                className="w-full flex items-center justify-between text-sm text-gray-700"
              >
                Features
                {expandedSections.features ? <ChevronUp /> : <ChevronDown />}
              </button>

              {expandedSections.features && (
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-full border text-teal-600 border-teal-500">
                    Breakfast Included
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Pool
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Hot Tub
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Free Parking
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Gym
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Bar
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Restaurant
                  </button>
                </div>
              )}

              {/* Location */}
              <button
                onClick={() => toggleSection("location")}
                className="w-full flex items-center justify-between text-sm text-gray-700"
              >
                Location
                {expandedSections.location ? <ChevronUp /> : <ChevronDown />}
              </button>

              {expandedSections.location && (
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-full border text-teal-600 border-teal-500">
                    Private Beach Area
                  </button>
                  <button className="px-4 py-2 rounded-full border text-teal-600 border-teal-500">
                    Waterfront
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Balcony
                  </button>
                </div>
              )}

              {/* Safety */}
              <button
                onClick={() => toggleSection("safety")}
                className="w-full flex items-center justify-between text-sm text-gray-700"
              >
                Safety
                {expandedSections.safety ? <ChevronUp /> : <ChevronDown />}
              </button>

              {expandedSections.safety && (
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Smoke Alarm
                  </button>
                  <button className="px-4 py-2 rounded-full border border-gray-300">
                    Carbon monoxide Alarm
                  </button>
                </div>
              )}

            </div>
          )}
        </div>


          {/*  فاصـــل  */}  <div className="border-t border-gray-300 my-4"></div>


                {/* Booking Options */}
        <div>
          <button
            onClick={() => toggleSection("bookingOptions")}
            className="w-full flex items-center justify-between mb-3"
          >
            <h4 className="font-medium text-gray-900">Booking Options</h4>
            {expandedSections.bookingOptions ? <ChevronUp /> : <ChevronDown />}
          </button>

          {expandedSections.bookingOptions && (
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded-full border text-teal-600 border-teal-500">
                Instant Book
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300">
                Self Check-in
              </button>
              <button className="px-4 py-2 rounded-full border text-teal-600 border-teal-500">
                Free Cancellation
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300">
                Allow Pets
              </button>
            </div>
          )}
        </div>

        {/* Payment Options */}
        <div>
          <button
            onClick={() => toggleSection("paymentOptions")}
            className="w-full flex items-center justify-between mb-3"
          >
            <h4 className="font-medium text-gray-900">Payment Options</h4>
            {expandedSections.paymentOptions ? <ChevronUp /> : <ChevronDown />}
          </button>

          {expandedSections.paymentOptions && (
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm">
                <input type="radio" name="payment" />
                <span>Pay at property</span>
              </label>
              <label className="flex items-center space-x-2 text-sm">
                <input type="radio" name="payment" />
                <span>No prepayment needed</span>
              </label>
            </div>
          )}
        </div>

        {/* Property Type */}
        <div>
          <button
            onClick={() => toggleSection("propertyType")}
            className="w-full flex items-center justify-between mb-3"
          >
            <h4 className="font-medium text-gray-900">Property Type</h4>
            {expandedSections.propertyType ? <ChevronUp /> : <ChevronDown />}
          </button>

          {expandedSections.propertyType && (
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded-lg border border-gray-300">
                House
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300">
                Apartment
              </button>
              <button className="px-4 py-2 rounded-lg border text-teal-600 border-teal-500">
                Hotel
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300">
                Guesthouse
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300">
                Dorm
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300">
                Cabin
              </button>
            </div>
          )}
        </div>

        {/* Accessibility features */}
        <div>
          <button
            onClick={() => toggleSection("accessibility")}
            className="w-full flex items-center justify-between mb-3"
          >
            <h4 className="font-medium text-gray-900">Accessibility features</h4>
            {expandedSections.accessibility ? <ChevronUp /> : <ChevronDown />}
          </button>

          {expandedSections.accessibility && (
            <div className="space-y-4">

              {/* Guest entrance and parking */}
              <button
                onClick={() => toggleSection("guestEntrance")}
                className="w-full flex items-center justify-between text-sm text-gray-700"
              >
                Guest entrance and parking
                {expandedSections.guestEntrance ? <ChevronUp /> : <ChevronDown />}
              </button>

              {expandedSections.guestEntrance && (
                <div className="space-y-2 pl-2 text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Step-free access</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Entrance door width ≥ 81 cm</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Disabled parking spot</span>
                  </label>
                </div>
              )}

              {/* Bedroom */}
              <button
                onClick={() => toggleSection("bedroom")}
                className="w-full flex items-center justify-between text-sm text-gray-700"
              >
                Bedroom
                {expandedSections.bedroom ? <ChevronUp /> : <ChevronDown />}
              </button>

              {expandedSections.bedroom && (
                <div className="space-y-2 pl-2 text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Step-free bedroom access</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Bedroom door width ≥ 81 cm</span>
                  </label>
                </div>
              )}

              {/* Bathroom */}
              <button
                onClick={() => toggleSection("bathroom")}
                className="w-full flex items-center justify-between text-sm text-gray-700"
              >
                Bathroom
                {expandedSections.bathroom ? <ChevronUp /> : <ChevronDown />}
              </button>

              {expandedSections.bathroom && (
                <div className="space-y-2 pl-2 text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Step-free bathroom access</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Bathroom door width ≥ 81 cm</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Toilet grab rail</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Shower grab rail</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Step-free shower</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Shower or bath chair</span>
                  </label>
                </div>
              )}

            </div>
          )}
        </div>



        
      </div>
    </div></>
  )
}

export default FilterSidebar
