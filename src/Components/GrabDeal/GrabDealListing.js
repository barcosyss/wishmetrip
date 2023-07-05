import React, { useState } from 'react'
import './GrabDealListing.css'
import SimpleHeader from '../SimpleHeader/SimpleHeader'
import PackageCallRequest from '../PackageCallRequest/PackageCallRequest'

const GrabDealListing = () => {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <div className='grabdeallisting'>
            <SimpleHeader />
            <div class="grabdeallistingwrapper">
                <div className='container'>
                    <div class="d-md-flex align-items-md-center">
                        <div class="h3 mb-0">Best Deals</div>
                    </div>

                    <div class="d-sm-flex align-items-sm-center pt-2 clear">
                        <div class="text-muted filter-label">Applied Filters:</div>
                        <div class="green-label font-weight-bold p-1 mx-sm-1 mx-0 my-sm-0 my-2" style={{ cursor: 'pointer', color: 'black' }}>Price : &lt; 20000 <span class=" px-1 close" style={{ marginTop: '1px' }}>&times;</span> </div>
                        <div class="green-label font-weight-bold p-1 mx-sm-1 mx-0" style={{ cursor: 'pointer', color: 'black' }}>Stops: Any <span class=" px-1 close">&times;</span> </div>
                    </div>
                    <div class="filters"> <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter">Filter<span class="px-1 fas fa-filter"></span></button> </div>
                    <div id="mobile-filter">
                        <div class="py-3">
                            <h5 class="font-weight-bold">Stops</h5>
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> Any <span class="badge badge-primary badge-pill">328</span> </li>
                                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 0 <span class="badge badge-primary badge-pill">112</span> </li>
                                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 1 <span class="badge badge-primary badge-pill">32</span> </li>
                                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 2 or <span class="badge badge-primary badge-pill">48</span> </li>
                            </ul>
                        </div>
                        <div class="py-3">
                            <h5 class="font-weight-bold">Brands</h5>
                            <form class="brand">
                                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Royal Fields <input type="checkbox" /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Crasmas Fields <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Vegetarisma Farm <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Farmar Field Eve <input type="checkbox" /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">True Farmar Steve <input type="checkbox" /> <span class="check"></span> </label> </div>
                            </form>
                        </div>
                        <div class="py-3">
                            <h5 class="font-weight-bold">Rating</h5>
                            <form class="rating">
                                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                            </form>
                        </div>
                    </div>
                </div>
                <section>
                    <div class="content row">
                        <div id="sidebar" className='col-md-3'>
                            <div className='py-3'>
                                <h5 class="font-weight-bold">Price</h5>
                                <form class="brand">
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Any<input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">&lt; 10000 <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">&lt; 20000 <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">&lt; 30000 <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">&lt; 40000 <input type="checkbox" /> <span class="check"></span> </label> </div>
                                </form>
                            </div>
                            <div class="py-3">
                                <h5 class="font-weight-bold">Stops</h5>
                                <ul class="list-group">
                                    <button className='stops-grabdeallist' style={{ border: 'none', backgroundColor: 'transparent' }}><li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> Any <span class="badge badge-primary badge-pill">328</span> </li></button>
                                    <button className='stops-grabdeallist' style={{ border: 'none', backgroundColor: 'transparent' }}><li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 0 <span class="badge badge-primary badge-pill">112</span> </li></button>
                                    <button className='stops-grabdeallist' style={{ border: 'none', backgroundColor: 'transparent' }}><li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 1 <span class="badge badge-primary badge-pill">32</span> </li></button>
                                    <button className='stops-grabdeallist' style={{ border: 'none', backgroundColor: 'transparent' }}><li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 2 <span class="badge badge-primary badge-pill">48</span> </li></button>
                                </ul>
                            </div>
                            <div class="py-3">
                                <h5 class="font-weight-bold">Carriers</h5>
                                <form class="brand">
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Air India <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Indigo <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Air Arabia <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Jet Airways <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Emirates Airline <input type="checkbox" /> <span class="check"></span> </label> </div>
                                </form>
                            </div>
                            <div class="py-3">
                                <h5 class="font-weight-bold">Rating</h5>
                                <form class="rating">
                                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                </form>
                            </div>
                        </div>
                        <div id="products" className='col-md-9'>
                            <div class="container py-3">
                                <div class="d-lg-flex" style={{ marginTop: '-16px', marginBottom: '10px', marginLeft: '-11px' }}>
                                    <div class="form-inline d-flex grabdeallistselectors">
                                        <div>
                                            <button className='btn btn-danger'>Best : 1200 $ - 24h</button>
                                        </div>
                                        <div>
                                            <button className='btn btn-danger mx-2'>Fatest : 1600 $ - 20h 12m</button>
                                        </div>
                                        <div>
                                            <button className='btn btn-danger'>Cheapest : 1000 $ - 24h</button>
                                        </div>
                                    </div>
                                    {/* <div class="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2"> <label class="tick">Farm <input type="checkbox" checked="checked"/> <span class="check"></span> </label> <span class="text-success px-2 count"> 328</span> </div>
                            <div class="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2"> <label class="tick">Bio <input type="checkbox"/> <span class="check"></span> </label> <span class="text-success px-2 count"> 72</span> </div>
                            <div class="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2"> <label class="tick">Czech republic <input type="checkbox"/> <span class="check"></span> </label> <span class="border px-1 mx-2 mr-3 font-weight-bold count"> 12</span> <select name="country" id="country" class="bg-light">
                                <option value="" hidden>Country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="Uk">UK</option>
                            </select> </div> */}
                                </div>
                                <div className='grabdeallist-listing row'>
                                    <div className='col-md-9'>
                                        <p>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                        <div className='position-relative'>
                                            <hr style={{ position: 'absolute', width: '100%', color: 'red' }}></hr>
                                            <div style={{ textAlign: 'center', paddingTop: '5px', cursor: 'pointer' }}><span style={{ background: 'red', borderRadius: '12px', padding: '5px 10px', color: 'white' }}>2 Nights in Bali</span></div>
                                        </div>
                                        <p style={{ marginTop: '20px' }}>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                    </div>
                                    <div className='col-md-3' style={{ borderLeft: '1px solid #10a5b2' }}>
                                        <div style={{ textAlign: 'center', marginTop: '140px' }}>
                                            <span>Only 10 seats left</span>
                                            <p style={{ fontSize: '22px' }}>$ 1000</p>
                                            <button className='btn btn-primary' onClick={() => setShowLogin(true)} style={{ padding: '10px 30px', marginTop: '40px' }}>Select</button>
                                            <PackageCallRequest show={showLogin} close={() => setShowLogin(false)} />
                                        </div>
                                    </div>
                                </div>
                                <div className='grabdeallist-listing row'>
                                    <div className='col-md-9'>
                                        <p>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                        <div className='position-relative'>
                                            <hr style={{ position: 'absolute', width: '100%', color: 'red' }}></hr>
                                            <div style={{ textAlign: 'center', paddingTop: '5px', cursor: 'pointer' }}><span style={{ background: 'red', borderRadius: '12px', padding: '5px 10px', color: 'white' }}>2 Nights in Bali</span></div>
                                        </div>
                                        <p style={{ marginTop: '20px' }}>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                    </div>
                                    <div className='col-md-3' style={{ borderLeft: '1px solid #10a5b2' }}>
                                        <div style={{ textAlign: 'center', marginTop: '140px' }}>
                                            <span>Only 10 seats left</span>
                                            <p style={{ fontSize: '22px' }}>$ 1000</p>
                                            <button className='btn btn-primary' onClick={() => setShowLogin(true)} style={{ padding: '10px 30px', marginTop: '40px' }}>Select</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='grabdeallist-listing row'>
                                    <div className='col-md-9'>
                                        <p>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                        <div className='position-relative'>
                                            <hr style={{ position: 'absolute', width: '100%', color: 'red' }}></hr>
                                            <div style={{ textAlign: 'center', paddingTop: '5px', cursor: 'pointer' }}><span style={{ background: 'red', borderRadius: '12px', padding: '5px 10px', color: 'white' }}>2 Nights in Bali</span></div>
                                        </div>
                                        <p style={{ marginTop: '20px' }}>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                    </div>
                                    <div className='col-md-3' style={{ borderLeft: '1px solid #10a5b2' }}>
                                        <div style={{ textAlign: 'center', marginTop: '140px' }}>
                                            <span>Only 10 seats left</span>
                                            <p style={{ fontSize: '22px' }}>$ 1000</p>
                                            <button className='btn btn-primary' onClick={() => setShowLogin(true)} style={{ padding: '10px 30px', marginTop: '40px' }}>Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default GrabDealListing