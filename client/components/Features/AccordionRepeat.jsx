import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import InfoIcon from '@mui/icons-material/Info';

function AccordionRepeat({summary,details}) {
  return (
    <Accordion>
      <AccordionSummary>
        {summary}
      </AccordionSummary>
      <AccordionDetails>
        {details}
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionRepeat
