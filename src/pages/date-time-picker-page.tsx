import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const DateTimePickerPage = () => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2023-02-12T22:04:54'),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack sx={{ m: 4, width: '500px' }} spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <MobileDatePicker
          label="Date mobile"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DateTimePickerPage;
