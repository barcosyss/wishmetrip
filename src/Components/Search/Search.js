import React, {useState, useEffect, useMemo} from 'react'
import Select from 'react-select'
import './Search.css' ;
// import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import $ from 'jquery';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import countryList from 'react-select-country-list'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Modal from 'react-modal';
import banner2 from '../../assets/images/banner2.jpg'

// $('.datepicker1').attr("placeholder","Check In");

const customStyles = {
  
  control: (base, state) => ({
    ...base,
    background: "none",
    border: 'none',
    color: 'black'
    // match with the menu
  }),
}

const options1 = [
  { value: 'return', label: 'Return'},
  { value: 'one-way', label: 'One-way'},
  { value: 'multi-city', label: 'Multi-city'},
  { value: 'nomad', label: 'Nomad'}
]
const options2 = [
  { value: 'economy', label: 'Economy'},
  { value: 'premium-economy', label: 'Premium Economy'},
  { value: 'Business', label: 'Business'},
  { value: 'first-class', label: 'First Class'}
]

const Search = () => {
  const [value, setValue] = React.useState(2);

  const options = useMemo(() => countryList().getData(), [])

  const [countFlight, setCountFlight] = useState(['return'])
  const [check1, setCheck1] = useState(true)
  const [check2, setCheck2] = useState(true)
  const [check3, setCheck3] = useState(true)
  const [check4, setCheck4] = useState(true)
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  const setNoOfFlight = (option) => {
    console.log(option)
    setCountFlight(option.value)
  }

  const showTextNow = () => {
    setShowText(true)
  }

  const notShow = () => {
    setShowText(false)
  }

  const [showText, setShowText] = useState(false)

  const [startDate, setStartDate] = useState('');
  const selectionRange = {
    startDate: null,
    endDate: null,
    key: 'selection',
  }
  const [dateRange, setDateRange] = useState([
    {
      startDate: '',
      endDate: '',
      key: 'selection'
    }
  ]);

const [openModal, setOpenModal] = useState(false)


  function clickDepartureHandle(e) {
    setDeparture(e);
    // setShouldOpen(true);
    // document.getElementById("return-trip").setAttribute("open", "true"); 
  }

  function clickReturnHandle(e) {
    setReturnDate(e);
    // setShouldOpen(false);
  }
  
    const [departure, setDeparture] = useState('');
    const [returnDate, setReturnDate] = useState('');
    // const [shouldOpen, setShouldOpen] = useState('true');
    
  return (
    <>
    <div className='search-bg'>
    <div className='container search'>
    <Tabs>
      <div className='search-header'>
        <TabList>
        <Tab><i class='fas fa-suitcase-rolling'></i> Holidays</Tab>
        <Tab><i class="fa fa-building" aria-hidden="true"></i> Hotels</Tab>
        <Tab><i class="fa fa-plane" aria-hidden="true"></i> Flights</Tab>
      </TabList>
      </div>
    

    <TabPanel>
      <div className='main-search-div'>
            <div className='row'>
                <div className='col-12'>
                  Where to spend holidays?
                </div>
                {/* <div className='col-2'>
                  <Select styles={customStyles} options={options2}
                  className='shadow1'
                    id='trip_class'
                    placeholder={<div className='placeHolder '>Premium</div>}
                    components={{
                      IndicatorSeparator: () => null
                    }} />
                </div> */}
            </div>
            <div className='row mt-3'>
              <div className='col-5 position-relative height-54'>
                  <Select options={options}
                  className='shadow1'
                    placeholder={<div className='placeHolder'>Search destination<br/></div>}
                    components={{
                      IndicatorSeparator: () => null
                    }} />
                </div>
                <div className="col-2" style={{ paddingRight: '0'}}>
                  <div className='datepicker-div'>
                    <DatePicker className='simple-datepicker check-in-hotel' placeholderText='From' selected={startDate ==="" ? null : startDate} onChange={(date) => setStartDate(date)} />
                    {/* <div className='departure-datepicker'>Departure</div> */}
                  </div>
                </div>
                <div className="col-2" style={{ paddingLeft: '0' }}>
                  <div className='datepicker-div'>
                    <DatePicker className='simple-datepicker check-out-hotel' placeholderText='To' selected={startDate ==="" ? null : startDate} onChange={(date) => setStartDate(date)} />
                    {/* <div className='departure-datepicker'>Departure</div> */}
                  </div>
                </div>
                <div className='col-3 add-border'>
              <div class="dropdown shadow1 d-flex align-items-center h-100">
                <input type="checkbox" id="my-dropdown" value="" name="my-checkbox"/>
                <label for="my-dropdown"
                  data-toggle="dropdown" className='adult-and-child-label'>
                2 adults 0 child
                </label>
                <ul className='adult_child'>
                  <li>
                    <label className='make-heavy-font'><i class="fa fa-male" aria-hidden="true"></i> Adults</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'><i class="fa fa-child" aria-hidden="true"></i> Children</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'><i class='fas fa-hotel'></i> Rooms</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                      <input type='text' className='form-control' placeholder="Child's Age"  />
                  </li>
                </ul>
              </div>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-9 flight-last-row'>
                Package including
                <div className='mx-3 d-flex align-items-center'>
                <input type="checkbox" className='direct-flight' id="direct-flight1" name="direct-flight1" value="direct-flight" checked={check1} onChange={()=>setCheck1(check1 => !check1)}/>
                <label for="direct-flight">Flights</label>
                </div>
                <div className='mx-3 d-flex align-items-center'>
                <input type="checkbox" className='direct-flight' id="direct-flight2" name="direct-flight2" value="direct-flight" checked={check2} onChange={()=>setCheck2(check2 => !check2)}/>
                <label for="direct-flight">Hotel</label>
                </div>
                <div className='mx-3 d-flex align-items-center'>
                <input type="checkbox" className='direct-flight' id="direct-flight3" name="direct-flight3" value="direct-flight" checked={check3} onChange={()=>setCheck3(check3 => !check3)}/>
                <label for="direct-flight">Activities</label>
                </div>
                <div className='mx-3 d-flex align-items-center'>
                <input type="checkbox" className='direct-flight' id="direct-flight4" name="direct-flight4" value="direct-flight" checked={check4} onChange={()=>setCheck4(check4 => !check4)}/>
                <label for="direct-flight">Cab Facility</label>
                </div>
              </div>
                <div className='col-3 d-flex justify-content-end'>
                  <button className='btn btn-primary' style={{ borderRadius: '25px' }}>Search</button>
                </div>
            </div>
          </div>
    </TabPanel>
    <TabPanel>
      <div className='main-search-div'>
            <div className='row'>
                <div className='col-12'>
                  Where do you want to stay?
                </div>
                {/* <div className='col-2'>
                  <Select styles={customStyles} options={options2}
                  className='shadow1'
                    id='trip_class'
                    placeholder={<div className='placeHolder '>Premium</div>}
                    components={{
                      IndicatorSeparator: () => null
                    }} />
                </div> */}
            </div>
            <div className='row mt-3'>
              <div className='col-5 position-relative height-54'>
                  <Select options={options}
                  className='shadow1'
                    placeholder={<div className='placeHolder'>Search destination</div>}
                    components={{
                      IndicatorSeparator: () => null
                    }} />
                </div>
                <div className="col-2" style={{ paddingRight: '0'}}>
                  <div className='datepicker-div'>
                    <DatePicker className='simple-datepicker check-in-hotel' placeholderText='Check-in' selected={startDate ==="" ? null : startDate} onChange={(date) => setStartDate(date)} />
                    {/* <div className='departure-datepicker'>Departure</div> */}
                  </div>
                </div>
                <div className="col-2" style={{ paddingLeft: '0' }}>
                  <div className='datepicker-div'>
                    <DatePicker className='simple-datepicker check-out-hotel' placeholderText='Check-out' selected={startDate ==="" ? null : startDate} onChange={(date) => setStartDate(date)} />
                    {/* <div className='departure-datepicker'>Departure</div> */}
                  </div>
                </div>
                <div className='col-3 add-border'>
              <div class="dropdown shadow1 d-flex align-items-center h-100">
                <input type="checkbox" id="my-dropdown" value="" name="my-checkbox"/>
                <label for="my-dropdown"
                  data-toggle="dropdown" className='adult-and-child-label'>
                2 adults 0 child
                </label>
                <ul className='adult_child'>
                  <li>
                    <label className='make-heavy-font'><i class="fa fa-male" aria-hidden="true"></i> Adults</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'><i class="fa fa-child" aria-hidden="true"></i> Children</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'><i class='fas fa-hotel'></i> Rooms</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                      <input type='text' className='form-control' placeholder="Child's Age"  />
                  </li>
                </ul>
              </div>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-6 flight-last-row'>
                <input type="checkbox" className='direct-flight' id="direct-flight" name="direct-flight" value="direct-flight"/>
                <label for="direct-flight"> Pay at hotel</label>
              </div>
                <div className='col-6 d-flex justify-content-end'>
                  <button className='btn btn-primary' style={{ borderRadius: '25px' }}>Search</button>
                </div>
            </div>
          </div>
    </TabPanel>
    {/* <TabPanel>
    <div className='main-search-div'>
          <div className='row mt-3'>
              <div className='col-3'>
                <Select options={options}
                className='shadow1'
                  placeholder={<div className='placeHolder'>Where are you going</div>}
                  components={{
                    IndicatorSeparator: () => null
                  }} />
              </div>
              <div className="col-3">
                <div className='datepicker-div'>
                  <DatePicker className='simple-datepicker' selected={startDate} onChange={(date) => setStartDate(date)} />
                  <div className='departure-datepicker'>Departure Date</div>
                </div>
              </div>
              <div className="col-3">
                <div className='datepicker-div'>
                  <DatePicker className='simple-datepicker' selected={startDate} onChange={(date) => setStartDate(date)} />
                  <div className='departure-datepicker'>Return Date</div>
                </div>
              </div>
              <div className='col-3'>
              <div class="dropdown shadow1">
                <input type="checkbox" id="my-dropdown" value="" name="my-checkbox"/>
                <label for="my-dropdown"
                  data-toggle="dropdown">
                2 adults 0 child
                </label>
                <ul className='adult_child'>
                  <li>
                    <label className='make-heavy-font'>Adults</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'>Children</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'>Rooms</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                      <input type='text' className='form-control' placeholder="Child's Age"  />
                  </li>
                </ul>
              </div>
              <button style={{ marginLeft: '16px', marginTop: '-5px'}} className='btn btn-primary'>Search</button>
              </div>
              <div className='col-1 pl-0'>
                
              </div>
          </div>
        </div>
    </TabPanel> */}
    <TabPanel>
      <div className='main-search-div'>
            <div className='row'>
                <div className='col-12'>
                  <button className='trip-side-count'>One-way</button>
                  <button className='trip-side-count'>Round-trip</button>
                  <button className='trip-side-count'>Multi-city</button>

                    {/* <Select styles={customStyles} options={options1}
                    className='shadow1'
                    id='trip_way'
                    placeholder={<div className='placeHolder '>Return</div>}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={setNoOfFlight} /> */}
                </div>
                {/* <div className='col-2'>
                  <Select styles={customStyles} options={options2}
                  className='shadow1'
                    id='trip_class'
                    placeholder={<div className='placeHolder '>Premium</div>}
                    components={{
                      IndicatorSeparator: () => null
                    }} />
                </div> */}
            </div>
            <div className='row mt-3'>
                <div className='col-3 position-relative'>
                  <Select options={options}
                  className='shadow1'
                    placeholder={<div className='placeHolder'>From<br/> <span style={{ color: '#1d1d1d', fontWeight: '600'}}>New Delhi, India ( DEL )</span></div>}
                    components={{
                      IndicatorSeparator: () => null
                    }} />
                    <button className='both-side-indicator'>
                      <svg viewBox="0 0 24 24"><path d="m17 4-1.41 1.41L18.17 8H11v2h7.17l-2.58 2.59L17 14l5-5-5-5zM7 20l1.41-1.41L5.83 16H13v-2H5.83l2.58-2.59L7 10l-5 5 5 5z"></path></svg>
                    </button>
                </div>
                <div className='col-3'>
                  <Select options={options}
                  className='shadow1 increase-height'
                  style={{ height: '100%' }}
                    placeholder={<div className='placeHolder'>To</div>}
                    components={{
                      IndicatorSeparator: () => null
                    }} />
                </div>
                {countFlight=='return'?
                <div className='col-6 row'>
                <div className="col-6" style={{ paddingRight: '0'}}>
                <div className='datepicker-div'>
                  <DatePicker className='simple-datepicker check-in-hotel' placeholderText='Departure' selected={startDate ==="" ? null : startDate} onChange={(date) => setStartDate(date)} />
                  {/* <div className='departure-datepicker'>Departure</div> */}
                </div>
              </div>
              <div className="col-6" style={{ paddingLeft: '0' }}>
                <div className='datepicker-div'>
                  <DatePicker className='simple-datepicker check-out-hotel' placeholderText='Return' selected={startDate ==="" ? null : startDate} onChange={(date) => setStartDate(date)} />
                  {/* <div className='departure-datepicker'>Departure</div> */}
                </div>
              </div>
              </div>:
                <div className="col-4">
                  <div className='datepicker-div'>
                    <DatePicker className='simple-datepicker' selected={startDate} onChange={(date) => setStartDate(date)} />
                    <div className='departure-datepicker'>Departure</div>
                  </div>
                </div>
                }
                
            </div>
            <div className='row mt-4'>
              <div className='col-6 flight-last-row'>
                <input type="checkbox" className='direct-flight' id="direct-flight" name="direct-flight" value="direct-flight"/>
                <label for="direct-flight"> Direct flight only</label>
              </div>
              <div className='col-2'>
              <div class="dropdown shadow1">
                <input type="checkbox" id="my-dropdown" value="" name="my-checkbox"/>
                <label for="my-dropdown"
                  data-toggle="dropdown">
                2 adults 0 child
                </label>
                <ul className='adult_child'>
                  <li>
                    <label className='make-heavy-font'><i class="fa fa-male" aria-hidden="true"></i> Adults</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'><i class="fa fa-child" aria-hidden="true"></i> Children</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'><i class='fas fa-hotel'></i> Rooms</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                      <input type='text' className='form-control' placeholder="Child's Age"  />
                  </li>
                </ul>
              </div>
              </div>
              <div className='col-2'>
                <Select styles={customStyles} options={options2}
                    className='shadow1'
                    id='trip_way'
                    placeholder={<div className='placeHolder '>Economy</div>}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={setNoOfFlight} />
              </div>
                <div className='col-2 d-flex justify-content-end'>
                  <button className='btn btn-primary' style={{ borderRadius: '25px' }}>Search</button>
                </div>
            </div>
          </div>
    </TabPanel>
  </Tabs>

      {/* <div className='searchCard'>
        
        
      </div> */}
      {/* <div className="col">
                  <div className='position-relative flight-div'>
                    <button onClick={() => setOpenModal(true)}></button>
                    <Modal
                    isOpen={openModal}
                    
                     ><DateRangePicker
                     onChange={item => setDateRange([item.selection])}
                     ranges={dateRange===''? null : dateRange}
                     startDatePlaceholder='hi'
                     /></Modal>
                    
                    {showText?<p className='position-absolute departure-text'>
                      Departure
                      </p>:''}
                    {showText?<p className='position-absolute return-text'>Return</p>:''}
                  </div>
                </div> */}
    </div>
    </div>
  </>
  )
}

export default Search