import * as React from 'react';
// import { useState } from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import Box from '@mui/material/Box';

const DateRangePickerPage = () => {
  const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);
  //   const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log('value', value);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ m: 4 }}>
        <DateRangePicker
          calendars={2}
          value={value}
          onChange={(newValue: any) => {
            setValue(newValue);
          }}
          renderInput={(startProps: any, endProps: any) => (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </>
          )}
        />
      </Box>
      {/* <Box width="500px">
        <DateRangePicker
          startText="Check-in"
          endText="Check-out"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </>
          )}
        />
      </Box> */}
    </LocalizationProvider>
  );
};

export default DateRangePickerPage;
