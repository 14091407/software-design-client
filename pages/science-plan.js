import React, {useState, useEffect} from 'react'
import Layout from '../layouts'
import {getSciPlan} from './api'
import ViewTemplate from '../components/viewTemplate'
import _ from 'lodash'

const SciencePlan = () => {
  const [list, setList] = useState([{
    creator: "Prach Yothaprasert", 
    fundingInUSD: 1000000.00, 
    objectives: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
    starSystem: "Mercury",
    startDate: "2020-07-01",
    endDate: "2021-05-15",
    telescopeLoc: "HAWAII",
    dataProcRequirement: {
      fileType: "PNG",
      fileQuality: 100.00,
      colorType: "COLOR",
      contrast: 0.00,
      brightness: 0.00,
      saturation: 0.00
    },
    observingProgram: {
      locationElement: {
        longitude: 1925849.110,
        latitude: 192293.00,
        radius: 0.00
      },
      lens: {
        make: "China",
        model: "RX-78-2",
        manufacturer: "GIGA FACT",
        year: 2550
      },
      filter: [{
        make: 'HongKong',
        model: 'ShinanChu',
        manufacturer: 'TERA',
        year: 2550,
        size: 100.00,
        weight: 98.5
      }],
      specialEquipment: [{
        equipmentName: 'Wood',
        ownerName: 'Klua',
        installedDate: '2015-03-14'
      }],
      lightDetectorOn: false,
      exposures: [0.0, 14.5, 44.22, 123.4],
    },
  }])
  
  useEffect(() => {
    // async function useGetSciPlan() {
    //   const res = await getSciPlan()
    //   if (res.status != 200) {
    //     return
    //   }
    //   const data = await res.json()
    //   return data
    // }
    // const data = useGetSciPlan()
    // console.log(data)
    // setList([...data.list])
  }, [])

  return(
    <Layout title='Science Plan Page'>
      <main>
        <h1>Science Plan</h1>
        <div className='form-container-large'>
          {list != undefined && list.length > 0 && (
            <div>{_.range(0, list.length).map(value => (
              <ViewTemplate
                list={list[value]}
              />
            ))}</div>
          )}
        </div>
      </main>
    </Layout>
  )
}

export default SciencePlan