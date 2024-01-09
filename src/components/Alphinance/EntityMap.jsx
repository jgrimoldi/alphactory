import { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { Location } from '../Interface/Icons';

export function EntityMap () {
  const [activeMarker, setActiveMarker] = useState(null);
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);

  function handleZoomIn () {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut () {
    if (position.zoom < 1.5) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleReset () {
    setPosition({ coordinates: [0, 0], zoom: 1 });
  }

  function handleMoveEnd (position) {
    setPosition(position);
  }

  function filterZoomEvent () {
    return isMobile;
  }

  const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json';
  const markers = [
    { id: 'USA', name: 'Estados Unidos', coordinates: [-120.740135, 47.751076], entities: ['Insurers (1)', 'Banks (2)'] },
    { id: 'UK', name: 'Reino Unido', coordinates: [-0.125740, 51.508530], entities: ['Insurers (3)', 'Banks (2)', 'Retails'] },
    { id: 'ARG', name: 'Argentina', coordinates: [-58.381592, -34.603722], entities: ['Insurers (3)'] },
    { id: 'CL', name: 'Chile', coordinates: [-70.673676, -33.447487], entities: ['Retails (5)'] },
    { id: 'BR', name: 'Brasil', coordinates: [-60.025, -3.10194], entities: ['Retails (1)'] },
    { id: 'ALE', name: 'Alemania', coordinates: [13.404954, 52.520008], entities: ['Banks(2)'] },
    { id: 'IND', name: 'Indonesia', coordinates: [140.717, -2.533], entities: ['Retails (1)'] }
  ];

  return (
    <div style={{ position: 'relative' }}>
      <ComposableMap
        style={{ position: 'relative', backgroundColor: '#0A2729' }}
        width={940}
        height={510}
        projection='geoEqualEarth'
        projectionConfig={{
          scale: 180,
          center: [15, 0.5]
        }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          filterZoomEvent={filterZoomEvent}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: '#2D7965' },
                    hover: { fill: '#2D7965' },
                    pressed: { fill: '#2D7965' }
                  }}
                />
              ))}
          </Geographies>
          {markers.map(({ id, name, coordinates, entities }) => (
            <Marker
              key={name}
              className='relative z-0'
              coordinates={coordinates}
              onMouseEnter={() => setActiveMarker(id)}
              onMouseLeave={() => setActiveMarker(null)}
            >
              <circle data-id data-for={id} r={4} className='stroke-ft-light-green fill-ft-dark-green hover:fill-ft-light-green ahover:stroke-ft-dark-green' strokeWidth={2} />
              {activeMarker === id && (
                <g className='relative z-10' style={{ transform: coordinates[0] <= 0 ? 'translate(16px,-41px)' : 'translate(-206px,-41px)' }}>
                  <foreignObject width={190} height={141} style={{ zIndex: 15 }}>
                    <div xmlns='http://www.w3.org/1999/xhtml' className='w-full max-w-[190px] max-h-[141px] p-4 rounded-lg bg-op-green text-center'>
                      <h4 className='font-semibold text-base text-ft-light-green'>{name}</h4>
                      <ul className='w-full flex flex-col gap-2.5 pt-3 pb-1 justify-center items-end text-white text-sm'>
                        {entities.map((entity, index) => (
                          <li key={index}>{entity}</li>
                        ))}
                      </ul>
                    </div>
                  </foreignObject>
                  <line x1={coordinates[0] <= 0 ? '-11' : '16'} y1='41' x2={coordinates[0] <= 0 ? '170' : '201'} y2='41' stroke='white' style={{ zIndex: 20 }} />
                </g>
              )}
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
      {isMobile &&
        <div role='group' aria-label='Map actions' style={{ position: 'absolute', top: 0, right: 0 }}>
          <button className='w-8 h-8 mb-2 rounded-lg fill-black bg-white p-2' title='Reset Location' aria-label='Reset' onClick={handleReset}><Location /></button>
          <div role='group' aria-label='Zoom' className='flex flex-col text-black text-sm bg-white px-1.5 rounded-lg'>
            <button className='py-2 border-b-2' title='Zoom In' aria-label='Zoom In' onClick={handleZoomIn}><i className='pi pi-plus' /></button>
            <button className='py-2' title='Zoom Out' aria-label='Zoom Out' onClick={handleZoomOut}><i className='pi pi-minus' /></button>
          </div>
        </div>}
    </div>
  );
}
