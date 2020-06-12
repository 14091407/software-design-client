import React, {useState} from 'react'
import Layout from '../layouts'
import Form from '../components/form'
import Button from '../components/button'
import { createSciPlan } from './api'
import Exposures from '../components/exposures'
import SpecialEquipment from '../components/specialEquipment'
import ObservingProgramFilter from '../components/observingProgramFilter'

const startSystemList = [
  'Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto', 'Moon', 'Earth-Moon barycenter', 'Comet', 'Asteroid', 
  'Near Earth Object', 'Nutation', 'Libration', 'Solar system barycenter', 'Phobos', 'Deimos', 'Io', 'Europa', 'Ganymede', 'Callisto', 'Mimas', 'Enceladus', 
  'Tethys', 'Dione', 'Rhea', 'Titan', 'Hyperion', 'Iapetus', 'Miranda', 'Ariel', 'Umbriel', 'Titania', 'Oberon', 'Triton', 'Nereid', 'Charon', 'Amalthea',
  'Thebe', 'Adrastea', 'Metis', 'Himalia', 'Elara', 'Pasiphae', 'Sinope', 'Lysithea', 'Carme', 'Ananke', 'Leda', 'Atlas', 'Prometheus', 'Pandora', 'Pan', 
  'Epimetheus', 'Janus', 'Telesto', 'Calypso', 'Helene', 'Phoebe', 'Cordelia', 'Ophelia', 'Cressida', 'Bianca', 'Desdemona', 'Juliet', 'Portia', 'Rosalind',
  'Puck', 'Belinda', 'Naiad', 'Thalassa', 'Despina', 'Galatea', 'Larissa', 'Proteus', 'Ceres', 'Pallas', 'Vesta', 'Lutetia', 'Ida', 'Eros', 'Davida', 'Gaspra',
  'Steins', 'Itokawa', '9P/Tempel 1', '19P/Borrelly', 'Not a planet'
]
const telescopeLocList = [
  'HAWAII', 'CHILE'
]
const fileType = [
  'Raw', 'PNG', 'JPEG', 'TIFF'
]
const colorTypeList = [
  'BW', 'COLOR'
]
const boolList = [
  'False', 'True'
]

const Create = () => {
  const [creator, setCreator] = useState('')
  const [fundingInUSD, setFundingInUSD] = useState('')
  const [objectives, setObjectives] = useState('')
  const [starSystem, setStarSystem] = useState('Sun')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [telescopeLoc, setTelescopeLoc] = useState('HAWAII')
  const [dataProcRequirement, setDataProcRequirement] = useState({
    fileType: 'Raw',
    fileQuality: '',
    colorType: 'BW',
    contrast: '',
    brightness: '',
    saturation: ''
  })
  const [observingProgram, setObservingProgram] = useState({
    locationElement: {
      longitude: '',
      latitude: '',
      radius: ''
    },
    lens: {
      make: '',
      model: '',
      manufacturer: '',
      year: ''
    },
    filter: []
  })
  const [specialEquipment, setSpecialEquipment] = useState([])
  const [exposures, setExposures] = useState([])
  const [lightDetectorOn, setLightDetectorOn] = useState('False')

  const handleOnChange = e => {
    const { name, value } = e.target
    const split = name.split('create-science-plan-form-')
    eval(split[1])(value)
  }

  const handleObjectChange = e => {
    const { name, value } = e.target
    const split = name.split('create-science-plan-form-')
    const split2 = split[1].split('.')
    const split3 = split2[0].split('set')
    eval(split2[0])({
      ...eval(lowercaseFirstLetter(split3[1])),
      [split2[1]]: value
    })
  }

  const handleLocationElement = e => {
    const { name, value } = e.target
    const split = name.split('create-science-plan-form-')
    setObservingProgram({
      ...observingProgram,
      locationElement: {
        ...observingProgram.locationElement,
        [split[1]]: value
      }
    })
  }

  const handleLens = e => {
    const { name, value } = e.target
    const split = name.split('create-science-plan-form-')
    setObservingProgram({
      ...observingProgram,
      lens: {
        ...observingProgram.lens,
        [split[1]]: value
      }
    })
  }

  const handleExposures = value => {
    const arr = [...exposures]
    arr.push(parseFloat(value))
    setExposures([...arr])
  }

  const handleSpecialEquipment = value => {
    const arr = [...specialEquipment]
    arr.push(value)
    setSpecialEquipment([...arr])
  }

  const handleObservingProgramFilter = value => {
    const arr = [...observingProgram.filter]
    arr.push(value)
    setObservingProgram({
      ...observingProgram,
      filter: [...arr]
    })
  }

  const removeExposures = index => {
    const arr = [...exposures]
    arr.splice(index, 1)
    setExposures([...arr])
  }

  const removeSpecialEquipment = index => {
    const arr = [...specialEquipment]
    arr.splice(index, 1)
    setSpecialEquipment([...arr])
  }

  const removeObservingProgramFilter = index => {
    const arr = [...observingProgram.filter]
    arr.splice(index, 1)
    setObservingProgram({
      ...observingProgram,
      filter: [...arr]
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      creator, 
      fundingInUSD: parseFloat(fundingInUSD), 
      objectives, starSystem, startDate, endDate, telescopeLoc,
      dataProcRequirement: {
        fileType: dataProcRequirement.fileType,
        fileQuality: parseFloat(dataProcRequirement.fileQuality),
        colorType: dataProcRequirement.colorType,
        contrast: parseFloat(dataProcRequirement.contrast),
        brightness: parseFloat(dataProcRequirement.brightness),
        saturation: parseFloat(dataProcRequirement.saturation)
      },
      observingProgram: {
        locationElement: {
          longitude: parseFloat(observingProgram.locationElement.longitude),
          latitude: parseFloat(observingProgram.locationElement.latitude),
          radius: parseFloat(observingProgram.locationElement.radius)
        },
        lens: {
          make: observingProgram.lens.make,
          model: observingProgram.lens.model,
          manufacturer: observingProgram.lens.manufacturer,
          year: parseInt(observingProgram.lens.year)
        },
        filter: [...observingProgram.filter],
        specialEquipment: [...specialEquipment],
        lightDetectorOn: lightDetectorOn.toLowerCase() == 'true' ? true : false,
        exposures: [...exposures],
      },
    }

    const res = await createSciPlan(body)
    if (res.status != 200) {
      alert('Something went wrong, please try again')
      return
    }
    alert('Create Science Plan: Success')
    // window.location.href = '/create'
  }

  function lowercaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  const formInput1 = [
    {type: 'text', placeholder: 'Creator', value: creator, set: 'Creator'},
    {type: 'number', placeholder: 'Funding in USD', value: fundingInUSD, set: 'FundingInUSD'},
    {type: 'textarea', placeholder: 'Objectives', value: objectives, set: 'Objectives'},
    {type: 'dropdown', placeholder: 'Star Systems', value: starSystem, set: 'StarSystem', options: startSystemList, label: 'Star System'},
    {type: 'date', placeholder: 'Start Date', value: startDate, set: 'StartDate', label: 'Start Date'},
    {type: 'date', placeholder: 'End Date', value: endDate, set: 'EndDate', label: 'End Date'},
    {type: 'dropdown', placeholder: 'Telescope Location', value: telescopeLoc, set: 'TelescopeLoc', options: telescopeLocList, label: 'Telescope Location'},
  ].map(o => {
    o.key = `create-science-plan-form-set${o.set}`
    return o
  })

  const formInput2 = [
    {type: 'dropdown', placeholder: 'File Type', value: dataProcRequirement.fileType, set: 'DataProcRequirement.fileType', options: fileType, label: 'File Type'},
    {type: 'number', placeholder: 'File Quality', value: dataProcRequirement.fileQuality, set: 'DataProcRequirement.fileQuality'},
    {type: 'dropdown', placeholder: 'Color Type', value: dataProcRequirement.colorType, set: 'DataProcRequirement.colorType', options: colorTypeList, label: 'Color Type'},
    {type: 'number', placeholder: 'Contrast', value: dataProcRequirement.contrast, set: 'DataProcRequirement.contrast'},
    {type: 'number', placeholder: 'Brightness', value: dataProcRequirement.brightness, set: 'DataProcRequirement.brightness'},
    {type: 'number', placeholder: 'Saturation', value: dataProcRequirement.saturation, set: 'DataProcRequirement.saturation'},
  ].map(o => {
    o.key = `create-science-plan-form-set${o.set}`
    return o
  })

  const formInput3 = [
    {type: 'number', placeholder: 'Longitude', value: observingProgram.locationElement.longitude, set: 'longitude'},
    {type: 'number', placeholder: 'Latitude', value: observingProgram.locationElement.latitude, set: 'latitude'},
    {type: 'number', placeholder: 'Radius', value: observingProgram.locationElement.radius, set: 'radius'},
  ].map(o => {
    o.key = `create-science-plan-form-${o.set}`
    return o
  })

  const formInput4 = [
    {type: 'text', placeholder: 'Make', value: observingProgram.lens.make, set: 'make'},
    {type: 'text', placeholder: 'Model', value: observingProgram.lens.model, set: 'model'},
    {type: 'text', placeholder: 'Manufacturer', value: observingProgram.lens.manufacturer, set: 'manufacturer'},
    {type: 'number', placeholder: 'Year', value: observingProgram.lens.year, set: 'year'},
  ].map(o => {
    o.key = `create-science-plan-form-${o.set}`
    return o
  })

  return(
    <Layout title='Create Page'>
      <main>
        <h1>Create New Science Plan</h1>
        <div className='form-container-large'>
          <form>
            <Form list={formInput1} handleOnChange={handleOnChange}/>
            <div><h3>Data Processing Requirement</h3></div>
            <Form list={formInput2} handleOnChange={handleObjectChange}/>
            <div><h3>Observing Program</h3></div>
            <Form list={formInput3} handleOnChange={handleLocationElement}/>
            <Form list={formInput4} handleOnChange={handleLens}/>
            <ObservingProgramFilter list={observingProgram.filter} handleOnChange={handleObservingProgramFilter} handleRemove={removeObservingProgramFilter}/>
            <SpecialEquipment list={specialEquipment} handleOnChange={handleSpecialEquipment} handleRemove={removeSpecialEquipment}/>
            <Exposures list={exposures} handleOnChange={handleExposures} handleRemove={removeExposures}/>
            <Form list={[
              {type: 'dropdown', placeholder: 'Light Detector', value: lightDetectorOn, set: 'LightDetectorOn', options: boolList, label: 'Light Detector', key: `create-science-plan-form-setLightDetectorOn`}
            ]} handleOnChange={handleOnChange}/>
            <div onClick={handleSubmit}><Button label='Submit'/></div>
          </form>
        </div>
      </main>
    </Layout>
  )
}

export default Create