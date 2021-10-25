import React from 'react'

const Listing = () => {
    return (
        <main>

        <section class="static review marginbottom">
            <div class="container">
                <div class="heading">
                    <h2 class="inner-title">All listings</h2>
                </div>
                <div class="middle">
                    <div class="col-sm-4 listingleft">
                        <div class="searchbox">
                            <label>Sort by</label>
                            <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Price: low to high<i class="fa fa-angle-down" aria-hidden="true"></i></a> 
                            <ul class="dropdown-menu"> <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                            
                        </div>
                        <div class="midlelist">
                            <div id="deskmenu"><i class="fa fa-bars" aria-hidden="true"></i></div>
                            <div class="shadow togglediv">
                                <div class="filtertext">
                                    <span class="filter">Filters</span>
                                    <a class="clear">Clear all</a>
                                </div>
                                <div class="filterwidths">
                                    <label>I would like to</label>
                                    <div class="radio"> 
                                        <p>
                                            <input type="radio" id="test1" name="radio-group" checked/>
                                            <label for="test1">Buy</label>
                                          </p>
                                          <p>
                                            <input type="radio" id="test2" name="radio-group"/>
                                            <label for="test2">Rent</label>
                                          </p>
                                    </div>
                                </div>
                                <div class="filterwidths">
                                    <label>Select category</label>
                                    <div class="radio"> 
                                        <li class="widths active">
                                            <div class="border">
                                                <img src="img/store.png"/>
                                                <span>Store</span>
                                            </div>
                                        </li>
                                        <li class="widths">
                                            <div class="border">
                                                <img src="img/category2.png"/>
                                                <span>Property</span>
                                            </div>
                                        </li>
                                        <li class="widths">
                                            <div class="border">
                                                <img src="img/category3.png"/>
                                                <span>Land</span>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                                <div class="filterwidths">
                                    <label>Location</label>
                                    <div class="radio"> 
                                       <input type="text" class="form-control" placeholder="Mogadishu, Somalia"/>
                                    </div>
                                </div>
                                <div class="filterwidths">
                                    <label>Post Time</label>
                                    <div class="radio"> 
                                       <select class="form-control select">
                                            <option>0-10 days</option>
                                            <option>0-10 days</option>
                                            <option>0-10 days</option>
                                            <option>0-10 days</option>
                                       </select>
                                    </div>
                                </div>
                                <div class="filterwidths">
                                    <label>Seller name</label>
                                    <div class="radio"> 
                                       <input type="text" class="form-control" placeholder="Enter seller name"/>
                                    </div>
                                </div>
                                <div class="filterwidths">
                                    <label>Seller rating</label>
                                    <div class="radio"> 
                                       <li class="start active">
                                            <div class="rating">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <em>1</em>
                                            </div>
                                       </li>
                                        <li class="start">
                                            <div class="rating">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <em>2</em>
                                            </div>
                                       </li>
                                        <li class="start">
                                            <div class="rating">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <em>3</em>
                                            </div>
                                       </li>
                                        <li class="start">
                                            <div class="rating">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <em>4</em>
                                            </div>
                                       </li>
                                        <li class="start">
                                            <div class="rating">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <em>5</em>
                                            </div>
                                       </li>
                                    </div>
                                </div>
                                <div class="filterwidths">
                                    <label>Price range ($)</label>
                                    <div class="radio"> 
                                        <div class="slider-wrapper slider-gaia">
                                            <input class="input-range" id="priceRange3" type="text" data-slider-step="1" data-slider-value="4000, 18000" data-slider-min="1000" data-slider-max="20000" data-slider-range="true" data-slider-tooltip_split="true" data-slider-tooltip="always" />
                                        </div>
                                    </div>
                                </div>
                                <div class="filterwidths">
                                    <label>Area length (m)</label>
                                    <div class="radio"> 
                                        <div class="slider-wrapper slider-gaia">
                                            <input class="input-range" id="priceRange" type="text" data-slider-step="1" data-slider-value="400, 750" data-slider-min="100" data-slider-max="1000" data-slider-range="true" data-slider-tooltip_split="true" data-slider-tooltip="always" />
                                        </div>
                                       
                                    </div>
                                </div>
                                <div class="filterwidths">
                                    <label>Area width (m)</label>
                                    <div class="radio"> 
                                      <div class="slider-wrapper slider-gaia">
                                        <input class="input-range" id="priceRange1" type="text" data-slider-step="1" data-slider-value="400, 750" data-slider-min="100" data-slider-max="1000" data-slider-range="true" data-slider-tooltip_split="true" data-slider-tooltip="always" />
                                    </div>
                                    </div>
                                </div>
                                <div class="filterwidths">
                                    <label>Amenities</label>
                                    <div class="radio"> 
                                        <label class="containers">Air conditioning
                                            <input type="checkbox" checked="checked"/>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="containers">Air conditioning
                                            <input type="checkbox"/>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="containers">Laundry
                                            <input type="checkbox"/>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="containers">Outdoor shower
                                            <input type="checkbox"/>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="containers">Refrigerator
                                            <input type="checkbox"/>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="containers">Swimming pool
                                            <input type="checkbox"/>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="containers">Swimming pool
                                            <input type="checkbox"/>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="containers">WiFi
                                            <input type="checkbox"/>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 listingleft listingpageitems">
                        <div class="searchbox">
                            <input type="text" class="form-control search" placeholder="Search listing here.."/>
                            <button class="btn btn-warning"><span>Search</span></button>
                        </div>
                        <div class="midlelist">
                            <div class="inner">
                                <div class="col-sm-6 listimages">
                                    <span class="images">
                                         <a href=""><img src="img/list1.png"/></a>
                                        <a href=""><i><img src="img/redheart.png"/></i></a>
                                    </span>
                                </div>
                                <div class="col-sm-6 listtext">
                                    <div class="paddings">
                                        <span class="house">House for sale</span>
                                        <span class="rate">$650,000 - $800,000</span>
                                        <div class="apartmentslisting">
                                            <div class="lower">
                                               <span class="ratingcal">
                                                    <img src="img/calendarrating.png"/>
                                                    <span class="ratext">8 days ago</span>
                                                </span>
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/location.png"/></i>
                                                Mogadishu, Somalia
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/property.png"/></i>
                                                Property
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/meter.png"/></i>
                                                200 x 100 (m)
                                            </div>

                                        </div>
                                        <div class="profilebox">
                                            <div class="circleimg">
                                                <img src="img/profilelist.png"/>
                                            </div>
                                            <div class="profiletittle">
                                                <p class="tittle">Baseer Ali</p>
                                                <div class="rating">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star grey" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div class="ratingcalender">
                                                <a class="btn btn-warning" href="details.html"><span>View Details</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inner">
                                <div class="col-sm-6 listimages">
                                    <span class="images">
                                         <a href=""><img src="img/list2.png"/></a>
                                        <a href=""><i><img src="img/redheart.png"/></i></a>
                                    </span>
                                </div>
                                <div class="col-sm-6 listtext">
                                    <div class="paddings">
                                        <span class="house">House for sale</span>
                                        <span class="rate">$1,000,000 - $1,500,000</span>
                                        <div class="apartmentslisting">
                                            <div class="lower">
                                               <span class="ratingcal">
                                                    <img src="img/calendarrating.png"/>
                                                    <span class="ratext">2 days ago</span>
                                                </span>
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/location.png"/></i>
                                                Mogadishu, Somalia
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/property.png"/></i>
                                                Property
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/meter.png"/></i>
                                                300 x 200 (m)
                                            </div>

                                        </div>
                                        <div class="profilebox">
                                            <div class="circleimg">
                                                <img src="img/profilelist.png"/>
                                            </div>
                                            <div class="profiletittle">
                                                <p class="tittle">Azma Fallah</p>
                                                <div class="rating">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star grey" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div class="ratingcalender">
                                                <a class="btn btn-warning" href="details.html"><span>View Details</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inner">
                                <div class="col-sm-6 listimages">
                                    <span class="images">
                                         <a href=""><img src="img/list3.png"/></a>
                                        <a href=""><i><img src="img/redheart.png"/></i></a>
                                    </span>
                                </div>
                                <div class="col-sm-6 listtext">
                                    <div class="paddings">
                                        <span class="house">House for sale</span>
                                        <span class="rate">$1,000,000 - $2,000,000</span>
                                        <div class="apartmentslisting">
                                            <div class="lower">
                                               <span class="ratingcal">
                                                    <img src="img/calendarrating.png"/>
                                                    <span class="ratext">6 days ago</span>
                                                </span>
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/location.png"/></i>
                                                Mogadishu, Somalia
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/property.png"/></i>
                                                Property
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/meter.png"/></i>
                                                400 x 200 (m)
                                            </div>

                                        </div>
                                        <div class="profilebox">
                                            <div class="circleimg">
                                                <img src="img/reviewimg3.png"/>
                                            </div>
                                            <div class="profiletittle">
                                                <p class="tittle">Najiba Faiz</p>
                                                <div class="rating">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star grey" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div class="ratingcalender">
                                                <a class="btn btn-warning" href="details.html"><span>View Details</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inner">
                                <div class="col-sm-6 listimages">
                                    <span class="images">
                                         <a href=""><img src="img/list4.png"/></a>
                                        <a href=""><i><img src="img/redheart.png"/></i></a>
                                    </span>
                                </div>
                                <div class="col-sm-6 listtext">
                                    <div class="paddings">
                                        <span class="house">House for sale</span>
                                        <span class="rate">$2,000,000 - $3,800,000</span>
                                        <div class="apartmentslisting">
                                            <div class="lower">
                                               <span class="ratingcal">
                                                    <img src="img/calendarrating.png"/>
                                                    <span class="ratext">2 days ago</span>
                                                </span>
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/location.png"/></i>
                                                Mogadishu, Somalia
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/property.png"/></i>
                                                Property
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/meter.png"/></i>
                                                450 x 250 (m)
                                            </div>

                                        </div>
                                        <div class="profilebox">
                                            <div class="circleimg">
                                                <img src="img/reviewimg1.png"/>
                                            </div>
                                            <div class="profiletittle">
                                                <p class="tittle">Sara Sayed</p>
                                                <div class="rating">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star grey" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div class="ratingcalender">
                                                <a class="btn btn-warning" href="details.html"><span>View Details</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inner">
                                <div class="col-sm-6 listimages">
                                    <span class="images">
                                         <a href=""><img src="img/list5.png"/></a>
                                        <a href=""><i><img src="img/redheart.png"/></i></a>
                                    </span>
                                </div>
                                <div class="col-sm-6 listtext">
                                    <div class="paddings">
                                        <span class="house">House for sale</span>
                                        <span class="rate">$4,000,000 - $5,000,000</span>
                                        <div class="apartmentslisting">
                                            <div class="lower">
                                               <span class="ratingcal">
                                                    <img src="img/calendarrating.png"/>
                                                    <span class="ratext">4 days ago</span>
                                                </span>
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/location.png"/></i>
                                                Mogadishu, Somalia
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/property.png"/></i>
                                                Property
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/meter.png"/></i>
                                                500 x 300 (m)
                                            </div>

                                        </div>
                                        <div class="profilebox">
                                            <div class="circleimg">
                                                <img src="img/profilelist.png"/>
                                            </div>
                                            <div class="profiletittle">
                                                <p class="tittle">Shahid Zafar</p>
                                                <div class="rating">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star grey" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div class="ratingcalender">
                                                <a class="btn btn-warning" href="details.html"><span>View Details</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inner">
                                <div class="col-sm-6 listimages">
                                    <span class="images">
                                         <a href=""><img src="img/list6.png"/></a>
                                        <a href=""><i><img src="img/redheart.png"/></i></a>
                                    </span>
                                </div>
                                <div class="col-sm-6 listtext">
                                    <div class="paddings">
                                        <span class="house">House for sale</span>
                                        <span class="rate">$6,000,000 - $6,800,000</span>
                                        <div class="apartmentslisting">
                                            <div class="lower">
                                               <span class="ratingcal">
                                                    <img src="img/calendarrating.png"/>
                                                    <span class="ratext">3 days ago</span>
                                                </span>
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/location.png"/></i>
                                                Mogadishu, Somalia
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/property.png"/></i>
                                                Property
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/meter.png"/></i>
                                                600 x 400 (m)
                                            </div>

                                        </div>
                                        <div class="profilebox">
                                            <div class="circleimg">
                                                <img src="img/profilelist.png"/>
                                            </div>
                                            <div class="profiletittle">
                                                <p class="tittle">Shamsha Ahmed</p>
                                                <div class="rating">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star grey" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div class="ratingcalender">
                                                <a class="btn btn-warning" href="details.html"><span>View Details</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inner">
                                <div class="col-sm-6 listimages">
                                    <span class="images">
                                         <a href=""><img src="img/list7.png"/></a>
                                        <a href=""><i><img src="img/redheart.png"/></i></a>
                                    </span>
                                </div>
                                <div class="col-sm-6 listtext">
                                    <div class="paddings">
                                        <span class="house">House for sale</span>
                                        <span class="rate">$6,500,000 - $7,100,000</span>
                                        <div class="apartmentslisting">
                                            <div class="lower">
                                               <span class="ratingcal">
                                                    <img src="img/calendarrating.png"/>
                                                    <span class="ratext">5 days ago</span>
                                                </span>
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/location.png"/></i>
                                                Mogadishu, Somalia
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/property.png"/></i>
                                                Property
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/meter.png"/></i>
                                                600 x 500 (m)
                                            </div>

                                        </div>
                                        <div class="profilebox">
                                            <div class="circleimg">
                                                <img src="img/profilelist.png"/>
                                            </div>
                                            <div class="profiletittle">
                                                <p class="tittle">Tariq Siddiqui</p>
                                                <div class="rating">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star grey" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div class="ratingcalender">
                                                <a class="btn btn-warning" href="details.html"><span>View Details</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inner">
                                <div class="col-sm-6 listimages">
                                    <span class="images">
                                         <a href=""><img src="img/list8.png"/></a>
                                        <a href=""><i><img src="img/redheart.png"/></i></a>
                                    </span>
                                </div>
                                <div class="col-sm-6 listtext">
                                    <div class="paddings">
                                        <span class="house">House for sale</span>
                                        <span class="rate">$7,600,000 - $8,200,000</span>
                                        <div class="apartmentslisting">
                                            <div class="lower">
                                               <span class="ratingcal">
                                                    <img src="img/calendarrating.png"/>
                                                    <span class="ratext">6 days ago</span>
                                                </span>
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/location.png"/></i>
                                                Mogadishu, Somalia
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/property.png"/></i>
                                                Property
                                            </div>
                                            <div class="lower">
                                                <i><img src="img/meter.png"/></i>
                                                800 x 600 (m)
                                            </div>

                                        </div>
                                        <div class="profilebox">
                                            <div class="circleimg">
                                                <img src="img/profilelist.png"/>
                                            </div>
                                            <div class="profiletittle">
                                                <p class="tittle">Ismail Khan</p>
                                                <div class="rating">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star grey" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div class="ratingcalender">
                                                <a class="btn btn-warning" href="details.html"><span>View Details</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pager">
                                <div class="col-sm-5 pagertext">
                                    Page 1 of 24
                                </div>
                                <div class="col-sm-7 pagination">
                                    <ul class="pagination">
                                        <li class="disabled"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                                        <li class="disabled"><a href="#"><i class="fa fa-angle-left"></i></a></li>
                                        <li class="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                         <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                        <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
 
    </main>
    )
}

export default Listing
