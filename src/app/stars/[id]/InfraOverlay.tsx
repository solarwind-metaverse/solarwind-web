'use client'

import styles from './InfraOverlay.module.css'

import { useSelector } from 'react-redux'
import { selectAuth } from '@/state/slices/authSlice'
import HandymanIcon from '@mui/icons-material/Handyman'
import Tooltip from '@mui/material/Tooltip'
import { Star } from 'solarwind-common/dist/model/star'
import { useGetTaxPaymentsQuery } from '@/state/api/starsApiSlice'

const evStages: { [key: string ]: string } = {
  'red_supergiant': 'Red supergiant',
  'main_sequence': 'Main sequence',
  'white_dwarf': 'White dwarf'
}

const formatTime = (time: Date) => {
  const timeStr = time.toISOString().substring(0, 19)
  return timeStr.split('T').join(' ')
}
export const InfraOverlay = ({ star } : { star: Star }) => {

  const auth = useSelector(selectAuth)

  const { data: taxes } = useGetTaxPaymentsQuery(star.id)
  console.log('taxes', taxes)

  return (
    <>
      <div className={styles.controls}>
        <div id="star-ctrl-radar" className={styles.control} onClick={() => {
          console.log('Build - feature coming soon.')
        }}>
          <Tooltip title="Build (coming soon)">
            <HandymanIcon />
          </Tooltip>
        </div>
      </div>
      <div className={styles.income}>
        <div className={styles.heading}>INCOME</div>
        {
          (taxes || []).map((tax) => (
            <div key={`tax-${tax.id}`} className={styles.incomeRow}>
              <div className={styles.incomeRowHeader}>
                <div className={styles.incomeType}>
                  TAX
                </div>
                <div className={styles.incomeAmount}>
                  { tax.amount } SLW
                </div>
              </div>
              <div className={styles.incomeDetails}>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )

}
 
export default InfraOverlay